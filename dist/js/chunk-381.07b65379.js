"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[381],{9769:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.generateId=t.isEmail=t.isPhone=void 0,t.isPhone=function(e){return/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/.test(e)},t.isEmail=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},t.generateId=function(){return Math.random().toString(36).split(".")[1]}},84764:function(e,t,n){Object.defineProperty(t,"X",{value:!0});var o=n(59312),i=n(3865),r=n(9769),s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.isLoading=!1,t.userName="张三",t.phone="17521345099",t.dateRange=null,t.notUse=1,t}return(0,o.__extends)(t,e),t.prototype.created=function(){var e=this.getTitle();console.log(e)},t.prototype.mounted=function(){var e,t=this.say("你好， ts");console.log("login.ts",t),(null===(e=this.dateRange)||void 0===e?void 0:e.length)&&console.log("---dateRange---")},t.prototype.submitForm=function(){return(0,o.__awaiter)(this,void 0,Promise,(function(){var e;return(0,o.__generator)(this,(function(t){switch(t.label){case 0:return this.userName.trim()?(0,r.isPhone)(this.phone)?(this.isLoading=!0,[4,this.login()]):(this.$message.error("手机号错误！"),this.isLoading=!1,[2]):(this.$message.error("请输入用户名"),[2]);case 1:return e=t.sent(),this.isLoading=!1,e?this.goHome():this.$message.error("登录失败，请重试"),[2]}}))}))},t.prototype.say=function(e){return"msg= ".concat(e)},t.prototype.login=function(){return(0,o.__awaiter)(this,void 0,Promise,(function(){return(0,o.__generator)(this,(function(e){return[2,new Promise((function(e){setTimeout((function(){var t=Math.random()>.2;console.log("isOk= ",t),e(t)}),2e3)}))]}))}))},t.prototype.goHome=function(){this.$router.push({path:"/home",query:{userName:this.userName,phone:this.phone}})},(0,o.__decorate)([(0,i.Inject)()],t.prototype,"getTitle",void 0),(0,o.__decorate)([i.Component],t)}(i.Vue);t.Z=s},82381:function(e,t,n){n.r(t),n.d(t,{__esModule:function(){return i.X},default:function(){return a}});var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("el-form",{attrs:{"label-width":"100px"}},[n("el-form-item",{attrs:{label:"用户名"}},[n("el-input",{model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}})],1),n("el-form-item",{attrs:{label:"手机号"}},[n("el-input",{model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[n("span",[e._v("登录")]),n("i",{staticClass:"el-icon-video-play"})])],1)],1),n("pre-loader",{attrs:{isLoading:e.isLoading}})],1)};o._withStripped=!0;var i=n(84764),r=i.Z,s=(0,n(40810).Z)(r,o,[],!1,null,"a49090ce",null);s.options.__file="src/views/login/login.vue";var a=s.exports}}]);