"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[946],{84946:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-v3"},[a("vxe-table",{attrs:{border:"","highlight-hover-row":"","show-overflow":"",resizable:"",height:"400",data:e.tableData},on:{"cell-click":e.cellClickEvent}},[a("vxe-column",{attrs:{type:"seq",title:"序号",width:"60",fixed:"left"}}),a("vxe-column",{attrs:{field:"name",title:"Name",width:"300"}}),a("vxe-column",{attrs:{field:"role",title:"Role",width:"300"}}),a("vxe-column",{attrs:{field:"sex",title:"Sex",width:"300"}}),a("vxe-column",{attrs:{field:"age",title:"age",width:"300"}}),a("vxe-column",{attrs:{field:"address",title:"Address",fixed:"right",width:"300"}})],1),a("el-button",{attrs:{type:"primary"},on:{click:e.cloneDeep}},[e._v("lodash-cloneDeep")]),a("div",[e._v(e._s(e.result))])],1)};s._withStripped=!0;var l=a(30454),n=a.n(l),i={name:"page-v3",data:function(){return{result:[],tableData:[{id:10001,name:"Test1",role:"Develop",sex:"Man",age:28,address:"test abc"},{id:10002,name:"Test2",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:10003,name:"Test3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:10004,name:"Test4",role:"Designer",sex:"Women",age:23,address:"test abc"},{id:10005,name:"Test5",role:"Develop",sex:"Women",age:30,address:"Shanghai"},{id:10006,name:"Test6",role:"Designer",sex:"Women",age:21,address:"test abc"},{id:10007,name:"Test7",role:"Test",sex:"Man",age:29,address:"test abc"},{id:10008,name:"Test8",role:"Develop",sex:"Man",age:35,address:"test abc"}]}},methods:{cellClickEvent:function(e){var t=e.column;console.log("单元格点击".concat(t.title))},cloneDeep:function(){var e=this;this.result=n()(this.tableData),setTimeout((function(){e.tableData.forEach((function(e){e.age=e.age+Math.floor(100*Math.random())}))}),3e3)}}},r=(0,a(40810).Z)(i,s,[],!1,null,"ce98f786",null);r.options.__file="src/views/page-v3/page-v3.vue";var o=r.exports}}]);