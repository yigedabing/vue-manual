"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[621],{70621:function(t,e,i){i.r(e),i.d(e,{default:function(){return r}});var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-v4"},[i("div",{attrs:{id:"line-echarts"}}),i("section",[i("el-button",{attrs:{type:"primary"},on:{click:t.showLoading}},[t._v("加载loading")]),i("pre-loader",{attrs:{isLoading:t.isLoading}})],1)])};a._withStripped=!0;var n=i(21186),s={name:"page-v4",data:()=>({isLoading:!1,option:{xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[820,932,901,934,1290,1330,1320],type:"line",smooth:!0}]}}),mounted(){const t=document.getElementById("line-echarts"),e=n.S1(t);this.$nextTick((()=>{e.setOption(this.option)}))},methods:{showLoading(){this.isLoading=!0}}},o=(0,i(40810).Z)(s,a,[],!1,null,"f176bb82",null);o.options.__file="src/views/page-v4/page-v4.vue";var r=o.exports}}]);