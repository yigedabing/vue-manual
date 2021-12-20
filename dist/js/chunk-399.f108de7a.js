"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[399],{9769:function(e,t,o){function a(e){return/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/.test(e)}function l(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}function r(){return Math.random().toString(36).split(".")[1]}o.d(t,{Mn:function(){return a},Jh:function(){return l},Ox:function(){return r}}),o(16396)},47399:function(e,t,o){o.r(t),o.d(t,{default:function(){return k}});var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"page-v1"},[o("div",[e._v("page-v1")]),o("div",[e._v(e._s("generateId ="+e.generateId))]),o("div",{attrs:{id:"circle-echarts"}}),o("el-button",{attrs:{type:"primary"},on:{click:e.openDialog}},[e._v("添加信息")]),o("DialogAddMessage",{ref:"dialogAddMessage"})],1)};a._withStripped=!0;var l=o(59312),r=o(30454),i=o.n(r),n=o(21186),s=o(9769),c=o(86115),d=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-dialog",{staticClass:"dialog-add-message",attrs:{title:"添加信息",visible:e.dialogVisible,"before-close":e.beforeClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[o("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[o("el-form-item",{attrs:{label:"活动名称"}},[o("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),o("el-form-item",{attrs:{label:"活动区域"}},[o("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[o("el-option",{attrs:{label:"区域一",value:"shanghai"}}),o("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),o("el-form-item",{attrs:{label:"活动时间"}},[o("el-col",{attrs:{span:11}},[o("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.form.date1,callback:function(t){e.$set(e.form,"date1",t)},expression:"form.date1"}})],1),o("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),o("el-col",{attrs:{span:11}},[o("el-time-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"选择时间"},model:{value:e.form.date2,callback:function(t){e.$set(e.form,"date2",t)},expression:"form.date2"}})],1)],1),o("el-form-item",{attrs:{label:"即时配送"}},[o("el-switch",{model:{value:e.form.delivery,callback:function(t){e.$set(e.form,"delivery",t)},expression:"form.delivery"}})],1),o("el-form-item",{attrs:{label:"活动性质"}},[o("el-checkbox-group",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[o("el-checkbox",{attrs:{label:"美食/餐厅线上活动",name:"type"}}),o("el-checkbox",{attrs:{label:"地推活动",name:"type"}}),o("el-checkbox",{attrs:{label:"线下主题活动",name:"type"}}),o("el-checkbox",{attrs:{label:"单纯品牌曝光",name:"type"}})],1)],1),o("el-form-item",{attrs:{label:"特殊资源"}},[o("el-radio-group",{model:{value:e.form.resource,callback:function(t){e.$set(e.form,"resource",t)},expression:"form.resource"}},[o("el-radio",{attrs:{label:"线上品牌商赞助"}}),o("el-radio",{attrs:{label:"线下场地免费"}})],1)],1),o("el-form-item",{attrs:{label:"活动形式"}},[o("el-input",{attrs:{type:"textarea"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("立即创建")]),o("el-button",[e._v("取消")])],1)],1)],1)};d._withStripped=!0;var u=o(91849),f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.dialogVisible=!1,t.form={name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},t}return(0,l.ZT)(t,e),t.prototype.openDialog=function(){this.dialogVisible=!0},t.prototype.onSubmit=function(){console.log("submit!"),this.$parent.doSearch()},t.prototype.beforeClose=function(e){e()},(0,l.gn)([u.ZP],t)}(o(26427).default),m=f,p=o(40810),g=(0,p.Z)(m,d,[],!1,null,"e83398e0",null);g.options.__file="src/views/components/dialog-add-message/dialog-add-message.vue";var b=g.exports,v=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.obj={id:1,name:"page-v1"},t.list=["1",2,{id:1}],t.generateId="",t}return(0,l.ZT)(t,e),t.prototype.created=function(){i()(this.obj),this.obj.name,(0,l.ev)([],this.list,!0),this.generateId=(0,s.Ox)()},t.prototype.mounted=function(){this.initChartView()},t.prototype.doSearch=function(){console.log("do search")},t.prototype.notUseFunction=function(){console.log("not use fn")},t.prototype.openDialog=function(){this.dialogAddMessage.openDialog()},t.prototype.initChartView=function(){var e=document.getElementById("circle-echarts"),t=e&&n.S1(e),o={title:{text:"Referer of a Website",subtext:"Fake Data",left:"center"},tooltip:{trigger:"item"},legend:{orient:"vertical",left:"left"},series:[{name:"Access From",type:"pie",radius:"50%",data:[{value:1048,name:"Search Engine"},{value:735,name:"Direct"},{value:580,name:"Email"},{value:484,name:"Union Ads"},{value:300,name:"Video Ads"}],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};o&&(null==t||t.setOption(o))},(0,l.gn)([(0,c.Rl)("dialogAddMessage")],t.prototype,"dialogAddMessage",void 0),(0,l.gn)([(0,c.wA)({components:{DialogAddMessage:b}})],t)}(c.w3),h=v,y=(0,p.Z)(h,a,[],!1,null,"88dd6f8e",null);y.options.__file="src/views/page-v1/page-v1.vue";var k=y.exports}}]);