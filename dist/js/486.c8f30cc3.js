"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[486],{94486:(e,t,i)=>{i.r(t),i.d(t,{default:()=>d});var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"login"},[i("el-button",{attrs:{type:"primary"},on:{click:e.login}},[i("span",[e._v("登录")]),i("i",{staticClass:"el-icon-video-play"})]),i("pre-loader",{attrs:{isLoading:e.isLoading}})],1)};s._withStripped=!0;var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"pre-loader"},[e.isLoading?i("div",{staticClass:"wrapper"},[e._m(0)]):e._e()])};a._withStripped=!0;const n={name:"pre-load",props:{isLoading:{type:Boolean,default:!1}}};var o=i(40810),r=(0,o.Z)(n,a,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"loading"},[t("div",{staticClass:"inner one"}),t("div",{staticClass:"inner two"}),t("div",{staticClass:"inner three"})])}],!1,null,"0102cdef",null);r.options.__file="src/components/pre-loader/pre-loader.vue";const l={name:"login",components:{preLoader:r.exports},data:()=>({isLoading:!1}),methods:{login(){this.isLoading=!0,setTimeout((()=>{this.isLoading=!1,this.$router.push("/page-v2")}),2e3)}}};var c=(0,o.Z)(l,s,[],!1,null,"a49090ce",null);c.options.__file="src/views/login/login.vue";const d=c.exports}}]);