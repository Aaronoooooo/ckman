(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dd46bf9e"],{"0148":function(e,t,a){"use strict";function n(e,t,a,n){var r=e.length,l=a+(n?1:-1);while(n?l--:++l<r)if(t(e[l],l,e))return l;return-1}var r=n;function l(e){return e!==e}var i=l;function o(e,t,a){var n=a-1,r=e.length;while(++n<r)if(e[n]===t)return n;return-1}var c=o;function s(e,t,a){return t===t?c(e,t,a):r(e,i,a)}t["a"]=s},4349:function(e,t,a){"use strict";var n=a("9fd3"),r=a.n(n);r.a},6812:function(e,t,a){"use strict";var n=a("d959"),r=a.n(n);r.a},"8cbb":function(e,t,a){"use strict";var n=a("9ac7"),r=a("0148");function l(e,t){var a=null==e?0:e.length;return!!a&&Object(r["a"])(e,t,0)>-1}var i=l;function o(e,t,a){var n=-1,r=null==e?0:e.length;while(++n<r)if(a(t,e[n]))return!0;return!1}var c=o,s=a("6568"),u=a("a55c");function f(){}var h=f,p=a("1989"),b=1/0,v=u["a"]&&1/Object(p["a"])(new u["a"]([,-0]))[1]==b?function(e){return new u["a"](e)}:h,d=v,m=200;function y(e,t,a){var r=-1,l=i,o=e.length,u=!0,f=[],h=f;if(a)u=!1,l=c;else if(o>=m){var b=t?null:d(e);if(b)return Object(p["a"])(b);u=!1,l=s["a"],h=new n["a"]}else h=t?[]:f;e:while(++r<o){var v=e[r],y=t?t(v):v;if(v=a||0!==v?v:0,u&&y===y){var g=h.length;while(g--)if(h[g]===y)continue e;t&&h.push(y),f.push(v)}else l(h,y,a)||(h!==f&&h.push(y),f.push(v))}return f}t["a"]=y},"8d70":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",{staticClass:"settings"},[a("breadcrumb",{attrs:{data:["Clusters",e.$route.params.id,"tables"]}}),a("section",[a("table-metric"),a("replication-table"),a("zk-table")],1)],1)},r=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"zkTable"},[a("div",{staticClass:"title flex flex-between flex-vcenter ptb-10"},[a("span",{staticClass:"fs-20 font-bold"},[e._v(e._s(e.$t("tables.Zookeeper Status")))])]),a("el-table",{staticClass:"tb-edit",staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},e._l(e.cols,(function(t,n){return a("el-table-column",{key:n,attrs:{label:t,align:"center"},scopedSlots:e._u([{key:"header",fn:function(t){var n=t.column;return[a("span",[e._v(e._s(n.label))])]}},{key:"default",fn:function(t){var r=t.row,l=t.column;return[a("span",0===n?[e._v(e._s(Object.keys(r)[0]))]:[e._v(e._s(Object.values(r)[0][l.label]))])]}}],null,!0)})})),1)],1)},i=[],o=a("a34a"),c=a.n(o),s=a("f976");function u(e,t,a){switch(a.length){case 0:return e.call(t);case 1:return e.call(t,a[0]);case 2:return e.call(t,a[0],a[1]);case 3:return e.call(t,a[0],a[1],a[2])}return e.apply(t,a)}var f=u,h=Math.max;function p(e,t,a){return t=h(void 0===t?e.length-1:t,0),function(){var n=arguments,r=-1,l=h(n.length-t,0),i=Array(l);while(++r<l)i[r]=n[t+r];r=-1;var o=Array(t+1);while(++r<t)o[r]=n[r];return o[t]=a(i),f(e,this,o)}}var b=p;function v(e){return function(){return e}}var d=v,m=a("0305"),y=m["a"]?function(e,t){return Object(m["a"])(e,"toString",{configurable:!0,enumerable:!1,value:d(t),writable:!0})}:s["a"],g=y,w=800,_=16,x=Date.now;function C(e){var t=0,a=0;return function(){var n=x(),r=_-(n-a);if(a=n,r>0){if(++t>=w)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}var S=C,D=S(g),$=D;function k(e,t){return $(b(e,t,s["a"]),e+"")}var j=k,O=a("b703"),z=a("0148");function T(e,t,a,n){var r=a-1,l=e.length;while(++r<l)if(n(e[r],t))return r;return-1}var E=T,P=a("a2fb"),A=a("7804"),F=Array.prototype,N=F.splice;function q(e,t,a,n){var r=n?E:z["a"],l=-1,i=t.length,o=e;e===t&&(t=Object(A["a"])(t)),a&&(o=Object(O["a"])(e,Object(P["a"])(a)));while(++l<i){var c=0,s=t[l],u=a?a(s):s;while((c=r(o,u,c,n))>-1)o!==e&&N.call(o,c,1),N.call(e,c,1)}return e}var I=q;function Q(e,t){return e&&e.length&&t&&t.length?I(e,t):e}var R=Q,M=j(R),K=M,U=a("8cbb");function L(e){return e&&e.length?Object(U["a"])(e):[]}var B=L,H=a("c949");function J(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Z(e,t,a,n,r,l,i){try{var o=e[l](i),c=o.value}catch(s){return void a(s)}o.done?t(c):Promise.resolve(c).then(n,r)}function W(e){return function(){var t=this,a=arguments;return new Promise((function(n,r){var l=e.apply(t,a);function i(e){Z(l,n,r,i,o,"next",e)}function o(e){Z(l,n,r,i,o,"throw",e)}i(void 0)}))}}var G={data:function(){return{cols:[""],keys:[""],tableData:[],timeFilter:null,refresh:null}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var e=this;return W(c.a.mark((function t(){var a,n;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,H["g"].zkStatus(e.$route.params.id);case 2:a=t.sent,n=a.data.entity,e.cols=[""],e.keys=[""],e.tableData=[],n.forEach((function(t){e.cols.push(t.host),e.keys=K(Object.keys(t),"host")})),e.keys.forEach((function(t){var a=J({},t,{});n.forEach((function(n){a[t][n["host"]]=n[t],e.tableData.push(a)})),e.tableData=B(e.tableData)}));case 9:case"end":return t.stop()}}),t)})))()},timeFilterChange:function(){this.fetchData()},timeFilterRefresh:function(){this.fetchData()}}},V=G,X=a("2877"),Y=Object(X["a"])(V,l,i,!1,null,"3885750b",null),ee=Y.exports,te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"replication-status pb-20"},[a("div",{staticClass:"title flex flex-between flex-vcenter ptb-10"},[a("span",{staticClass:"fs-20 font-bold"},[e._v(e._s(e.$t("tables.Table Replication Status")))])]),a("el-table",{staticClass:"tb-edit",staticStyle:{width:"100%"},attrs:{data:e.tableData.slice((e.currentPage-1)*e.pageSize,e.currentPage*e.pageSize),"header-cell-style":e.mergeTableHeader,border:""}},e._l(e.cols,(function(t,n){return a("el-table-column",{key:n,ref:"tableColumn",refInFor:!0,attrs:{label:t.label,prop:t.prop,width:"auto",align:"center"},scopedSlots:e._u([{key:"header",fn:function(t){var n=t.column;return[a("span",[e._v(e._s(n.label))])]}},{key:"default",fn:function(t){var r=t.row,l=t.column;return[0===n?a("span",[e._v(e._s("Table Name"===Object.keys(r)[0]?e.$t("common."+Object.keys(r)[0]):Object.keys(r)[0]))]):a("div",{class:e.getClassName(r,l.property)},[e._v(e._s(Object.values(r)[0][l.property]))])]}}],null,!0)})})),1),a("div",{staticClass:"text-center"},[e.tableData.length>0?a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[5,10,20,40],"page-size":e.pageSize,layout:"sizes, prev, pager, next, jumper",total:e.tableData.length},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}):e._e()],1)],1)},ae=[],ne=a("5c8a");function re(e,t){return t="function"==typeof t?t:void 0,e&&e.length?Object(U["a"])(e,void 0,t):[]}var le=re,ie=a("32e8");function oe(e,t){return he(e)||fe(e,t)||se(e,t)||ce()}function ce(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function se(e,t){if(e){if("string"===typeof e)return ue(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?ue(e,t):void 0}}function ue(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function fe(e,t){var a=e&&("undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=a){var n,r,l=[],i=!0,o=!1;try{for(a=a.call(e);!(i=(n=a.next()).done);i=!0)if(l.push(n.value),t&&l.length===t)break}catch(c){o=!0,r=c}finally{try{i||null==a["return"]||a["return"]()}finally{if(o)throw r}}return l}}function he(e){if(Array.isArray(e))return e}function pe(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function be(e,t,a,n,r,l,i){try{var o=e[l](i),c=o.value}catch(s){return void a(s)}o.done?t(c):Promise.resolve(c).then(n,r)}function ve(e){return function(){var t=this,a=arguments;return new Promise((function(n,r){var l=e.apply(t,a);function i(e){be(l,n,r,i,o,"next",e)}function o(e){be(l,n,r,i,o,"throw",e)}i(void 0)}))}}var de={data:function(){return{cols:[],tableData:[],headerData:[],timeFilter:null,refresh:null,currentPage:1,pageSize:10}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var e=this;return ve(c.a.mark((function t(){var a,n,r,l,i,o,s;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,H["g"].replicationStatus(e.$route.params.id);case 2:a=t.sent,n=a.data.entity,r=n.header,l=void 0===r?[]:r,i=n.tables,o=void 0===i?[]:i,e.cols=[{prop:"",label:""}],e.headerData=Object(ne["a"])(l),e.tableData=[],s={},l.forEach((function(t,a){var n="shard".concat(a+1);t.forEach((function(t,a){s["".concat(n,"_").concat(a)]=t,e.cols.push({prop:"".concat(n,"_").concat(a),label:n})}))})),e.tableData.push(pe({},"Table Name",s)),o.forEach((function(t){var a=t.name,n=t.values,r={};n.forEach((function(e,t){var a="shard".concat(t+1);e.forEach((function(e,t){r["".concat(a,"_").concat(t)]=e}))})),e.tableData.push(pe({},a,r)),e.tableData=le(e.tableData,ie["a"])}));case 15:case"end":return t.stop()}}),t)})))()},mergeTableHeader:function(e){e.row,e.column;var t=e.rowIndex,a=e.columnIndex,n=new Set(this.headerData.map((function(e){return e.length}))),r=oe(n,1),l=r[0];if(0===t&&0!=a){if(a%l===0)return{display:"none"};this.$nextTick((function(){var e=document.querySelector(".replication-status thead>tr").children;e[a]&&(e[a].colSpan=2)}))}},timeFilterChange:function(){this.fetchData()},timeFilterRefresh:function(){this.fetchData()},handleSizeChange:function(e){this.pageSize=e},handleCurrentChange:function(e){this.currentPage=e},getClassName:function(e,t){var a=t.split("_"),n=oe(a,2),r=n[0],l=n[1],i=Object.values(e)[0],o=i[t],c="0"===l?"1":"0",s=i[r+"_"+c];if(s&&"-1"!==r.indexOf("F")){var u=parseInt(o.replace("F",""),10);if(s){var f=parseInt(s.replace("L",""),10);return u<f?"yellow":void 0}}}}},me=de,ye=(a("4349"),Object(X["a"])(me,te,ae,!1,null,"299ef473",null)),ge=ye.exports,we=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table-metric pb-20"},[a("div",{staticClass:"title flex flex-between flex-vcenter ptb-10"},[a("span",{staticClass:"fs-20 font-bold"},[e._v(e._s(e.$t("tables.Table Metrics")))]),a("el-input",{staticClass:"width-250",attrs:{size:"medium",placeholder:e.$t("common.keyword search")},model:{value:e.searchKey,callback:function(t){e.searchKey=t},expression:"searchKey"}})],1),a("el-table",{attrs:{data:e.listData,center:"",border:""}},[e._l(e.columns,(function(t){var n=t.prop,r=t.label;return[a("el-table-column",{key:n,attrs:{prop:n,label:r,sortable:e.filters[n].sortable,"show-overflow-tooltip":""},scopedSlots:e._u([{key:"header",fn:function(t){return[a("span",[e._v(e._s(n))]),e.filters[n].filter?a("filter-panel",{attrs:{prop:n,tableData:e.tableData},on:{change:e.onChangeFilter}}):e._e()]}}],null,!0)})]})),a("el-table-column",{attrs:{fixed:"right",label:e.$t("tables.Action"),width:"140"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.viewSql(t.row.tableName)}}},[e._v(e._s(e.$t("tables.Schema")))]),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.onDelete(t.row.tableName)}}},[e._v(e._s(e.$t("tables.Delete")))])]}}])})],2),a("div",{staticClass:"text-center"},[e.tableData.length>0?a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[5,10,20,40],"page-size":e.pageSize,layout:"sizes, prev, pager, next, jumper",total:e.listData.length},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}):e._e()],1)],1)},_e=[],xe=a("08ba"),Ce=a("3617");function Se(e,t,a,n,r,l,i){try{var o=e[l](i),c=o.value}catch(s){return void a(s)}o.done?t(c):Promise.resolve(c).then(n,r)}function De(e){return function(){var t=this,a=arguments;return new Promise((function(n,r){var l=e.apply(t,a);function i(e){Se(l,n,r,i,o,"next",e)}function o(e){Se(l,n,r,i,o,"throw",e)}i(void 0)}))}}function $e(e,t){return Te(e)||ze(e,t)||je(e,t)||ke()}function ke(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function je(e,t){if(e){if("string"===typeof e)return Oe(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Oe(e,t):void 0}}function Oe(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function ze(e,t){var a=e&&("undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=a){var n,r,l=[],i=!0,o=!1;try{for(a=a.call(e);!(i=(n=a.next()).done);i=!0)if(l.push(n.value),t&&l.length===t)break}catch(c){o=!0,r=c}finally{try{i||null==a["return"]||a["return"]()}finally{if(o)throw r}}return l}}function Te(e){if(Array.isArray(e))return e}var Ee={components:{FilterPanel:Ce["b"]},data:function(){return{tableData:[],currentPage:1,pageSize:10,searchKey:"",filters:{tableName:{type:"string",filter:!0,value:[],search:!0,sortable:!0},columns:{type:"number",filter:null,value:[],sortable:!0},rows:{type:"number",filter:null,value:[],sortable:!0},parts:{type:"number",filter:null,value:[],sortable:!0},space:{type:"number",filter:null,value:[],sortable:!0},readwrite_status:{type:"number",filter:null,value:[],sortable:!1},completedQueries:{type:"number",filter:null,value:[],sortable:!1},failedQueries:{type:"number",filter:null,value:[],sortable:!1},queryCost:{type:"number",filter:null,value:[],sortable:!1}}}},computed:{columns:function(){var e=[{prop:"tableName",label:this.$t("tables.Table Name")},{prop:"columns",label:this.$t("tables.Columns")},{prop:"rows",label:this.$t("tables.Rows")},{prop:"parts",label:this.$t("tables.Parts")},{prop:"space",label:this.$t("tables.Disk Space")},{prop:"readwrite_status",label:this.$t("tables.RWStatus"),filters:[{text:"TRUE",value:"TRUE"},{text:"FALSE",value:"FALSE"}]},{prop:"completedQueries",label:this.$t("tables.Completed Queries in last 24h")},{prop:"failedQueries",label:this.$t("tables.Failed Queries in last 24h")},{prop:"queryCost",label:this.$t("tables.Last 7 days info")}];return e},listData:function(){var e=this.searchKey,t=this.currentPage,a=this.pageSize,n=this.filters;return this.tableData.filter((function(t){var a,r=!0;return null!==(a=t.tableName)&&void 0!==a&&a.includes(e)||(r=!1),Object.entries(n).forEach((function(e){var a=$e(e,2),n=a[0],l=a[1];l.filter&&l.value.length>0&&!l.value.includes(t[n])&&(r=!1)})),r})).slice((t-1)*a,t*a)}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var e=this;return De(c.a.mark((function t(){var a,n;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,H["g"].tableMetrics(e.$route.params.id);case 2:a=t.sent,n=a.data.entity,Object.entries(n).forEach((function(t){var a=$e(t,2),n=a[0],r=a[1],l=r.columns,i=r.rows,o=r.space,c=r.completedQueries,s=r.failedQueries,u=r.parts,f=r.queryCost,h=r.readwrite_status;e.tableData.push({tableName:n,columns:l,rows:i,space:o,completedQueries:c,failedQueries:s,parts:u,readwrite_status:h.toString().toUpperCase(),queryCost:Object.values(f).join(", ")})}));case 5:case"end":return t.stop()}}),t)})))()},handleSizeChange:function(e){this.pageSize=e},handleCurrentChange:function(e){this.currentPage=e},onDelete:function(e){var t=this;return De(c.a.mark((function a(){var n,r,l,i,o;return c.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$confirm(t.$t("common.Confirm Delete"),t.$t("common.tips"),{confirmButtonText:t.$t("common.Delete"),cancelButtonText:t.$t("common.Cancel"),text:"warning"});case 2:return n=e.split("."),r=$e(n,2),l=r[0],i=r[1],o=t.$route.params.id,a.next=6,H["g"].deleteTable(o,{database:l,tableName:i});case 6:t.$message.success("Table ".concat(e," ").concat(t.$t("common.Delete")).concat(t.$t("common.Success"))),t.fetchData();case 8:case"end":return a.stop()}}),a)})))()},viewSql:function(e){var t=this;return De(c.a.mark((function a(){var n,r,l,i,o,s,u;return c.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.split("."),r=$e(n,2),l=r[0],i=r[1],o=t.$route.params.id,a.next=4,H["g"].viewTableCreateSql(o,{database:l,tableName:i});case 4:return s=a.sent,u=s.data.entity.create_table_query,a.next=8,Object(xe["c"])({component:Ce["c"],props:{title:t.$t("tables.Schema"),width:800,customClass:"sql-code-mirror-modal",cancelText:t.$t("common.Cancel"),okText:t.$t("common.Confirm")},data:{sql:u}});case 8:case"end":return a.stop()}}),a)})))()},onChangeFilter:function(e){var t=this,a=e.prop,n=e.value;console.log(a,n),this.$nextTick((function(){t.filters[a].value=n}))}}},Pe=Ee,Ae=(a("6812"),Object(X["a"])(Pe,we,_e,!1,null,null,null)),Fe=Ae.exports,Ne={data:function(){return{}},mounted:function(){},methods:{},components:{ZkTable:ee,ReplicationTable:ge,TableMetric:Fe}},qe=Ne,Ie=Object(X["a"])(qe,n,r,!1,null,"11456861",null);t["default"]=Ie.exports},"9fd3":function(e,t,a){},d959:function(e,t,a){}}]);