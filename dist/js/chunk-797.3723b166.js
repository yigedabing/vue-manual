"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[797],{55642:function(e,t,n){Object.defineProperty(t,"X",{value:!0});var r=n(59312),i=n(3865),s=n(9769),o=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.isLoading=!1,t.userName="张三",t.phone="17521345099",t}return(0,r.__extends)(t,e),t.prototype.mounted=function(){var e=this.say("你好， ts");console.log("login.ts",e)},t.prototype.submitForm=function(){return(0,r.__awaiter)(this,void 0,void 0,(function(){var e;return(0,r.__generator)(this,(function(t){switch(t.label){case 0:return this.userName.trim()?(0,s.isPhone)(this.phone)?(this.isLoading=!0,[4,this.login()]):(this.$message.error("手机号错误！"),this.isLoading=!1,[2]):(this.$message.error("请输入用户名"),[2]);case 1:return e=t.sent(),this.isLoading=!1,e?this.$router.push({path:"/home",query:{userName:this.userName,phone:this.phone}}):this.$message.error("登录失败，请重试"),[2]}}))}))},t.prototype.login=function(){return(0,r.__awaiter)(this,void 0,void 0,(function(){return(0,r.__generator)(this,(function(e){return[2,new Promise((function(e){setTimeout((function(){var t=Math.random()>.2;console.log("isOk= ",t),e(t)}),2e3)}))]}))}))},t.prototype.say=function(e){return"msg= ".concat(e)},(0,r.__decorate)([i.Component],t)}(i.Vue);t.Z=o},69797:function(e,t,n){n.r(t),n.d(t,{__esModule:function(){return i.X},default:function(){return u}});var r=function(){var e=this;e.$createElement;return e._self._c,e._m(0)};r._withStripped=!0;var i=n(55642),s=i.Z,o=(0,n(40810).Z)(s,r,[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-v1"},[n("div",[e._v("page-v1")]),n("div",{attrs:{id:"circle-echarts"}})])}],!1,null,"88dd6f8e",null);o.options.__file="src/views/page-v1/page-v1.vue";var u=o.exports}}]);