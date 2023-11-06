package controller

import (
	"fmt"
	"io"
	"net/http"
	"strings"

	"github.com/housepower/ckman/repository"

	"github.com/gin-gonic/gin"
	"github.com/housepower/ckman/model"
	"github.com/housepower/ckman/service/zookeeper"
	jsoniter "github.com/json-iterator/go"
	"github.com/pkg/errors"
)

var json = jsoniter.ConfigCompatibleWithStandardLibrary

type ZookeeperController struct {
	Controller
}

func NewZookeeperController(wrapfunc Wrapfunc) *ZookeeperController {
	ck := &ZookeeperController{
		Controller: Controller{
			wrapfunc: wrapfunc,
		},
	}
	return ck
}

// @Summary Get Zookeeper cluster status
// @Description Get Zookeeper cluster status
// @version 1.0
// @Security ApiKeyAuth
// @Param clusterName path string true "cluster name" default(test)
// @Success 200 {string} json "{"retCode":"0000","retMsg":"ok","entity":[{\"host\":\"192.168.110.8\",\"version\":\"3.8.0\",\"server_state\":\"follower\",\"peer_state\":\"following - broadcast\",\"avg_latency\":0.1456,\"approximate_data_size\":1451273,\"znode_count\":6485,\"outstanding_requests\":0,\"watch_count\":146},{\"host\":\"192.168.110.12\",\"version\":\"3.8.0\",\"server_state\":\"leader\",\"peer_state\":\"leading - broadcast\",\"avg_latency\":0.1118,\"approximate_data_size\":1451273,\"znode_count\":6485,\"outstanding_requests\":0,\"watch_count\":1},{\"host\":\"192.168.110.16\",\"version\":\"3.8.0\",\"server_state\":\"follower\",\"peer_state\":\"following - broadcast\",\"avg_latency\":0.2062,\"approximate_data_size\":1451273,\"znode_count\":6485,\"outstanding_requests\":0,\"watch_count\":58}]}"
// @Failure 200 {string} json "{"retCode":"5202","retMsg":"cluster not exist","entity":null}"
// @Failure 200 {string} json "{"retCode":"5080","retMsg":"get zk status fail","entity":null}"
// @Router /api/v1/zk/status/{clusterName} [get]
func (controller *ZookeeperController) GetStatus(c *gin.Context) {
	clusterName := c.Param(ClickHouseClusterPath)
	conf, err := repository.Ps.GetClusterbyName(clusterName)
	if err != nil {
		controller.wrapfunc(c, model.E_RECORD_NOT_FOUND, fmt.Sprintf("cluster %s does not exist", clusterName))
		return
	}

	zkList := make([]model.ZkStatusRsp, len(conf.ZkNodes))
	for index, node := range conf.ZkNodes {
		tmp := model.ZkStatusRsp{
			Host: node,
		}
		body, err := getZkStatus(node, conf.ZkStatusPort)
		if err != nil {
			controller.wrapfunc(c, model.E_ZOOKEEPER_ERROR, fmt.Sprintf("get zookeeper node %s satus fail: %v", node, err))
			return
		}
		_ = json.Unmarshal(body, &tmp)
		tmp.Version = strings.Split(strings.Split(tmp.Version, ",")[0], "-")[0]
		zkList[index] = tmp
	}

	controller.wrapfunc(c, model.E_SUCCESS, zkList)
}

func getZkStatus(host string, port int) ([]byte, error) {
	url := fmt.Sprintf("http://%s:%d/commands/mntr", host, port)
	request, err := http.NewRequest("GET", url, nil)
	if err != nil {
		return nil, errors.Wrap(err, "")
	}

	client := &http.Client{}
	response, err := client.Do(request)
	if err != nil {
		return nil, errors.Wrap(err, "")
	}
	defer response.Body.Close()

	if response.StatusCode != 200 {
		return nil, errors.Errorf("%s", response.Status)
	}

	body, err := io.ReadAll(response.Body)
	if err != nil {
		return nil, errors.Wrap(err, "")
	}

	return body, nil
}

// @Summary Get replicated table in  Zookeeper status
// @Description Get replicated table in Zookeeper status
// @version 1.0
// @Security ApiKeyAuth
// @Param clusterName path string true "cluster name" default(test)
// @Failure 200 {string} json "{"retCode":"5202","retMsg":"cluster not exist","entity":null}"
// @Failure 200 {string} json "{"retCode":"5080","retMsg":"get zk status fail","entity":null}"
// @Success 200 {string} json "{"retCode":"0000","retMsg":"ok","entity":{"header":[["vm101106","vm101108"],["vm102114","vm101110"],["vm102116","vm102115"]],"tables":[{"name":"sensor_dt_result_online","values":[["l1846","f1846"],["l1845","f1845"],["l1846","f1846"]]}]}}"
// @Router /api/v1/zk/replicated_table/{clusterName} [get]
func (controller *ZookeeperController) GetReplicatedTableStatus(c *gin.Context) {
	clusterName := c.Param(ClickHouseClusterPath)
	conf, err := repository.Ps.GetClusterbyName(clusterName)
	if err != nil {
		controller.wrapfunc(c, model.E_RECORD_NOT_FOUND, fmt.Sprintf("cluster %s does not exist", clusterName))
		return
	}

	zkService, err := zookeeper.GetZkService(clusterName)
	if err != nil {
		controller.wrapfunc(c, model.E_ZOOKEEPER_ERROR, fmt.Sprintf("get zookeeper service fail: %v", err))
		return
	}

	tables, err := zkService.GetReplicatedTableStatus(&conf)
	if err != nil {
		controller.wrapfunc(c, model.E_ZOOKEEPER_ERROR, err)
		return
	}

	header := make([][]string, len(conf.Shards))
	for shardIndex, shard := range conf.Shards {
		replicas := make([]string, len(shard.Replicas))
		for replicaIndex, replica := range shard.Replicas {
			replicas[replicaIndex] = replica.Ip
		}
		header[shardIndex] = replicas
	}
	resp := model.ZkReplicatedTableStatusRsp{
		Header: header,
		Tables: tables,
	}

	controller.wrapfunc(c, model.E_SUCCESS, resp)
}
