"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[564],{37469:function(n,t,i){function e(n){return/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/.test(n)}function o(n){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(n)}function r(){return Math.random().toString(36).split(".")[1]}i.d(t,{Mn:function(){return e},Jh:function(){return o},Ox:function(){return r}})},9564:function(n,t,i){i.r(t),i.d(t,{default:function(){return u}});var e=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticClass:"login"},[i("el-button",{attrs:{type:"primary"},on:{click:n.login}},[i("span",[n._v("登录")]),i("i",{staticClass:"el-icon-video-play"})]),i("pre-loader",{attrs:{isLoading:n.isLoading}})],1)};e._withStripped=!0;var o=i(37469),r={name:"login",data:function(){return{isLoading:!1}},mounted:function(){console.log((0,o.Mn)("123"))},methods:{login:function(){var n=this;this.isLoading=!0,setTimeout((function(){n.isLoading=!1,n.$router.push("/home")}),2e3)}}},s=(0,i(40810).Z)(r,e,[],!1,null,"a49090ce",null);s.options.__file="src/views/login/login.vue";var u=s.exports}}]);
//# sourceMappingURL=chunk-564.35445f7e.js.map