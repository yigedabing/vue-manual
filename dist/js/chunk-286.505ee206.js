"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[286],{9769:function(t,e,n){function o(t){return/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/.test(t)}function i(t){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)}function r(){return Math.random().toString(36).split(".")[1]}n.d(e,{Mn:function(){return o},Jh:function(){return i},Ox:function(){return r}}),n(16396)},39286:function(t,e,n){n.r(e),n.d(e,{default:function(){return c}});var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("el-form",{attrs:{"label-width":"100px"}},[n("el-form-item",{attrs:{label:"用户名"}},[n("el-input",{model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}})],1),n("el-form-item",{attrs:{label:"手机号"}},[n("el-input",{model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.submitForm}},[n("span",[t._v("登录")]),n("i",{staticClass:"el-icon-video-play"})])],1)],1),n("pre-loader",{attrs:{isLoading:t.isLoading}})],1)};o._withStripped=!0;var i=n(59312),r=n(86115),s=n(9769),u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.isLoading=!1,e.userName="张三",e.phone="17521345099",e.dateRange=null,e.notUse=1,e}return(0,i.ZT)(e,t),e.prototype.created=function(){var t=this.getTitle();console.log(t)},e.prototype.mounted=function(){var t,e=this.say("你好， ts");console.log("login.ts",e),(null===(t=this.dateRange)||void 0===t?void 0:t.length)||(console.log("---dateRange---"),this.notUse=2)},e.prototype.submitForm=function(){return(0,i.mG)(this,void 0,Promise,(function(){var t;return(0,i.Jh)(this,(function(e){switch(e.label){case 0:return this.userName.trim()?(0,s.Mn)(this.phone)?(this.isLoading=!0,[4,this.login()]):(this.$message.error("手机号错误！"),this.isLoading=!1,[2]):(this.$message.error("请输入用户名"),[2]);case 1:return t=e.sent(),this.isLoading=!1,t?this.goHome():this.$message.error("登录失败，请重试"),[2]}}))}))},e.prototype.say=function(t){return"msg= ".concat(t)},e.prototype.login=function(){return(0,i.mG)(this,void 0,Promise,(function(){return(0,i.Jh)(this,(function(t){return[2,new Promise((function(t){setTimeout((function(){var e=Math.random()>.2;console.log("isOk= ",e),t(e)}),2e3)}))]}))}))},e.prototype.goHome=function(){this.$router.push({path:"/home",query:{userName:this.userName,phone:this.phone}})},(0,i.gn)([(0,r.tB)()],e.prototype,"getTitle",void 0),(0,i.gn)([r.wA],e)}(r.w3),a=u,l=(0,n(40810).Z)(a,o,[],!1,null,"a49090ce",null);l.options.__file="src/views/login/login.vue";var c=l.exports}}]);