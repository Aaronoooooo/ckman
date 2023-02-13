package router

import (
	"fmt"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/housepower/ckman/config"
	"github.com/housepower/ckman/controller"
)

func InitRouterV1(groupV1 *gin.RouterGroup, config *config.CKManConfig, signal chan os.Signal) {
	ckController := controller.NewClickHouseController()
	packageController := controller.NewPackageController(config)
	deployController := controller.NewDeployController(config)
	metricController := controller.NewMetricController(config)
	configController := controller.NewConfigController(signal)
	zkController := controller.NewZookeeperController()
	uiController := controller.NewSchemaUIController()
	uiController.RegistSchemaInstance()
	taskController := controller.NewTaskController()

	groupV1.POST("/ck/cluster", ckController.ImportCluster)
	groupV1.GET("/ck/cluster", ckController.GetClusters)
	groupV1.GET(fmt.Sprintf("/ck/cluster/:%s", controller.ClickHouseClusterPath), ckController.GetCluster)
	groupV1.DELETE(fmt.Sprintf("/ck/cluster/:%s", controller.ClickHouseClusterPath), ckController.DeleteCluster)
	groupV1.POST(fmt.Sprintf("/ck/table/:%s", controller.ClickHouseClusterPath), ckController.CreateTable)
	groupV1.POST(fmt.Sprintf("/ck/dist_logic_table/:%s", controller.ClickHouseClusterPath), ckController.CreateDistTableOnLogic)
	groupV1.DELETE(fmt.Sprintf("/ck/dist_logic_table/:%s", controller.ClickHouseClusterPath), ckController.DeleteDistTableOnLogic)
	groupV1.PUT(fmt.Sprintf("/ck/table/:%s", controller.ClickHouseClusterPath), ckController.AlterTable)
	groupV1.PUT(fmt.Sprintf("/ck/table/ttl/:%s", controller.ClickHouseClusterPath), ckController.AlterTableTTL)
	groupV1.PUT(fmt.Sprintf("/ck/table/readonly/:%s", controller.ClickHouseClusterPath), ckController.RestoreReplica)
	groupV1.PUT(fmt.Sprintf("/ck/table/orderby/:%s", controller.ClickHouseClusterPath), ckController.SetOrderby)
	groupV1.PUT(fmt.Sprintf("/ck/table/view/:%s", controller.ClickHouseClusterPath), ckController.MaterializedView)
	groupV1.DELETE(fmt.Sprintf("/ck/table/:%s", controller.ClickHouseClusterPath), ckController.DeleteTable)
	groupV1.GET(fmt.Sprintf("/ck/table/:%s", controller.ClickHouseClusterPath), ckController.DescTable)
	groupV1.GET(fmt.Sprintf("/ck/query/:%s", controller.ClickHouseClusterPath), ckController.QueryInfo)
	groupV1.GET(fmt.Sprintf("/ck/query_explain/:%s", controller.ClickHouseClusterPath), ckController.QueryExplain)
	groupV1.GET(fmt.Sprintf("/ck/query_history/:%s", controller.ClickHouseClusterPath), ckController.QueryHistory)
	groupV1.DELETE(fmt.Sprintf("/ck/query_history/:%s", controller.ClickHouseClusterPath), ckController.DeleteQuery)
	groupV1.GET(fmt.Sprintf("/ck/table_lists/:%s", controller.ClickHouseClusterPath), ckController.GetTableLists)
	groupV1.GET(fmt.Sprintf("/ck/table_schema/:%s", controller.ClickHouseClusterPath), ckController.ShowSchema)
	groupV1.PUT(fmt.Sprintf("/ck/upgrade/:%s", controller.ClickHouseClusterPath), ckController.UpgradeCluster)
	groupV1.PUT(fmt.Sprintf("/ck/start/:%s", controller.ClickHouseClusterPath), ckController.StartCluster)
	groupV1.PUT(fmt.Sprintf("/ck/stop/:%s", controller.ClickHouseClusterPath), ckController.StopCluster)
	groupV1.PUT(fmt.Sprintf("/ck/destroy/:%s", controller.ClickHouseClusterPath), ckController.DestroyCluster)
	groupV1.PUT(fmt.Sprintf("/ck/rebalance/:%s", controller.ClickHouseClusterPath), ckController.RebalanceCluster)
	groupV1.GET(fmt.Sprintf("/ck/rebalance/table/:%s", controller.ClickHouseClusterPath), ckController.RebalanceTables)
	groupV1.GET(fmt.Sprintf("/ck/get/:%s", controller.ClickHouseClusterPath), ckController.GetClusterStatus)
	groupV1.GET(fmt.Sprintf("/ck/table_metric/:%s", controller.ClickHouseClusterPath), ckController.GetTableMetric)
	groupV1.GET(fmt.Sprintf("/ck/open_sessions/:%s", controller.ClickHouseClusterPath), ckController.GetOpenSessions)
	groupV1.PUT(fmt.Sprintf("/ck/open_sessions/:%s", controller.ClickHouseClusterPath), ckController.KillOpenSessions)
	groupV1.GET(fmt.Sprintf("/ck/slow_sessions/:%s", controller.ClickHouseClusterPath), ckController.GetSlowSessions)
	groupV1.POST(fmt.Sprintf("/ck/node/:%s", controller.ClickHouseClusterPath), ckController.AddNode)
	groupV1.DELETE(fmt.Sprintf("/ck/node/:%s", controller.ClickHouseClusterPath), ckController.DeleteNode)
	groupV1.PUT(fmt.Sprintf("/ck/node/start/:%s", controller.ClickHouseClusterPath), ckController.StartNode)
	groupV1.PUT(fmt.Sprintf("/ck/node/stop/:%s", controller.ClickHouseClusterPath), ckController.StopNode)
	groupV1.POST(fmt.Sprintf("/ck/node/log/:%s", controller.ClickHouseClusterPath), ckController.GetLog)
	groupV1.POST(fmt.Sprintf("/ck/ping/:%s", controller.ClickHouseClusterPath), ckController.PingCluster)
	groupV1.POST(fmt.Sprintf("/ck/purge_tables/:%s", controller.ClickHouseClusterPath), ckController.PurgeTables)
	groupV1.GET(fmt.Sprintf("/ck/partition/:%s", controller.ClickHouseClusterPath), ckController.GetPartitions)
	groupV1.POST(fmt.Sprintf("/ck/archive/:%s", controller.ClickHouseClusterPath), ckController.ArchiveToHDFS)
	groupV1.GET(fmt.Sprintf("/ck/config/:%s", controller.ClickHouseClusterPath), ckController.GetConfig)
	groupV1.POST(fmt.Sprintf("/ck/config/:%s", controller.ClickHouseClusterPath), ckController.ClusterSetting)
	groupV1.GET(fmt.Sprintf("/zk/status/:%s", controller.ClickHouseClusterPath), zkController.GetStatus)
	groupV1.GET(fmt.Sprintf("/zk/replicated_table/:%s", controller.ClickHouseClusterPath), zkController.GetReplicatedTableStatus)
	groupV1.POST("/package", packageController.Upload)
	groupV1.GET("/package", packageController.List)
	groupV1.DELETE("/package", packageController.Delete)
	groupV1.POST("/deploy/ck", deployController.DeployCk)
	groupV1.GET(fmt.Sprintf("/metric/query/:%s", controller.ClickHouseClusterPath), metricController.Query)
	groupV1.GET(fmt.Sprintf("/metric/query_range/:%s", controller.ClickHouseClusterPath), metricController.QueryRange)
	groupV1.GET("/version", configController.GetVersion)
	groupV1.GET("/ui/schema", uiController.GetUISchema)
	groupV1.GET(fmt.Sprintf("/task/:%s", controller.TaskIdPath), taskController.GetTaskStatusById)
	groupV1.GET("/task/lists", taskController.TasksList)
	groupV1.GET("/task/running", taskController.GetRunningTaskCount)
	groupV1.DELETE(fmt.Sprintf("/task/:%s", controller.TaskIdPath), taskController.DeleteTask)
	groupV1.PUT(fmt.Sprintf("/task/:%s", controller.TaskIdPath), taskController.StopTask)
}
