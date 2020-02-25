(
  function (modules) {
      var installendModules = {}

      function _webpack_require_ (moduleId) {
        if (installendModules(moduleId))
            return installendModules(moduleId).exports

        var _module_ = installendModules(moduleId) = {
            f: false,
            i: moduleId,
            exports: {}
        }
        modules[moduleId].call( _module_.exports, _module_, _module_.exports, _webpack_require_)

        _module_.f = true
        return _module_.exports
      }

      _webpack_require_(0)
  }
)([
  function (module, exports, _webpack_require_) {
    var module_1 = _webpack_require_(1)
    console.log(module_1["a"])
  },
  function (module, exports, _webpack_require_) {
    exports["a"] = 12  // webpack经过babel转译后的内容
  },
])

