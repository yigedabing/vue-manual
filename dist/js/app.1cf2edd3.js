"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[143],{74065:(e,t,n)=>{var a=n(26427),o=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)};o._withStripped=!0;var p=(0,n(40810).Z)({name:"app"},o,[],!1,null,"7ba5bd90",null);p.options.__file="src/App.vue";const r=p.exports;var s=n(47595);a.default.use(s.Z);const i=[{name:"welcome to webpack vue",path:"/",redirect:"/login"},{name:"登录",path:"/login",component:()=>n.e(486).then(n.bind(n,94486))},{name:"主页",path:"/home",component:()=>n.e(616).then(n.bind(n,72616)),children:[{name:"第一期",path:"/page-v1",component:()=>Promise.all([n.e(454),n.e(248)]).then(n.bind(n,58248))},{name:"第二期",path:"/page-v2",component:()=>n.e(341).then(n.bind(n,27341))},{name:"第三期",path:"/page-v3",component:()=>Promise.all([n.e(454),n.e(932)]).then(n.bind(n,86932))},{name:"第四期",path:"/page-v4",component:()=>Promise.all([n.e(186),n.e(621)]).then(n.bind(n,70621))}]},{path:"*",redirect:"/home"}],c=new s.Z({mode:"history",base:"/",routes:i});c.beforeEach(((e,t,n)=>{document.title=e.name,n()}));const l=c;var m=n(77382);a.default.use(m.ZP);const h=new m.ZP.Store({strict:!1,state:{},getters:{},mutations:{},actions:{},modules:{}});var u=n(16396),d=n.n(u),v=(n(36391),n(42751)),b=n.n(v);a.default.use(d()),a.default.use(b());const f=new a.default({el:"#app",router:l,store:h,render:e=>e(r)});window.__app__=f}},e=>{e.O(0,[998],(()=>(74065,e(e.s=74065)))),e.O()}]);