"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[334],{

/***/ 5334:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ login)
});

;// CONCATENATED MODULE: ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!../src/views/login/login.vue?vue&type=template&id=a49090ce&scoped=true&
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "login" },
    [
      _c(
        "el-button",
        { attrs: { type: "primary" }, on: { click: _vm.login } },
        [_vm._v("登录")]
      ),
      _vm._m(0),
      _c("el-button", { attrs: { type: "primary", icon: "el-icon-search" } }, [
        _vm._v("搜索"),
      ]),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "icon" }, [
      _c("i", { staticClass: "el-icon-edit" }),
      _c("i", { staticClass: "el-icon-share" }),
      _c("i", { staticClass: "el-icon-delete" }),
    ])
  },
]
render._withStripped = true


;// CONCATENATED MODULE: ../src/views/login/login.vue?vue&type=template&id=a49090ce&scoped=true&

;// CONCATENATED MODULE: ../node_modules/vue-loader/lib/index.js??vue-loader-options!../src/views/login/login.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const loginvue_type_script_lang_js_ = ({
  name: 'login',
  methods: {
    login() {
      this.$router.push('/page-v2');
    },
  },
});

;// CONCATENATED MODULE: ../src/views/login/login.vue?vue&type=script&lang=js&
 /* harmony default export */ const login_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ../node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(810);
;// CONCATENATED MODULE: ../src/views/login/login.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.Z)(
  login_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "a49090ce",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/login/login.vue"
/* harmony default export */ const login = (component.exports);

/***/ })

}]);
//# sourceMappingURL=334.e6c89d60.js.map