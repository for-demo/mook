/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/header.js":
/*!*************************************!*\
  !*** ./src/js/components/header.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_plugins_splide_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/css/plugins/splide.min.css */ \"./src/css/plugins/splide.min.css\");\n/* harmony import */ var _plugins_splide_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../plugins/splide.min.js */ \"./src/js/plugins/splide.min.js\");\n/* harmony import */ var _plugins_splide_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_plugins_splide_min_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar bodyClass = document.querySelector(\"body\").classList;\nvar menuButton = document.querySelector(\"#menuButton\");\nvar searchButton = document.querySelector(\"#searchButton\");\nvar menuShadow = document.querySelector(\"#menuShadow\");\nvar searchButtonClass = searchButton.classList;\nvar navbarClass = document.querySelector(\"#navbarWrapper\").classList;\nvar menuShadowClass = document.querySelector(\"#menuShadow\").classList;\nvar hamburgerIconClass = document.querySelector(\"#hamburgerIcon\").classList;\nvar closeIconClass = document.querySelector(\"#closeIcon\").classList;\nvar pcSeach = document.querySelector(\"#pcSeach\");\nvar searchMenuClass = document.querySelector(\"#searchMenu\").classList;\nvar mbSearchMenuClass = document.querySelector(\"#mbSearchMenu\").classList;\nvar cancelButton = document.querySelector(\"#cancelButton\"); // mb 選單按鈕\n\nmenuButton.addEventListener(\"click\", function () {\n  searchButtonClass.toggle(\"hidden\");\n  navbarClass.toggle(\"openMenu\");\n  bodyClass.toggle(\"overflow-hidden\");\n  menuShadowClass.toggle(\"openMenuShadow\");\n  menuShadowClass.toggle(\"!z-10\");\n  hamburgerIconClass.toggle(\"!hidden\");\n  closeIconClass.toggle(\"!block\");\n}); // mb 選單按鈕 end\n// mb 陰影\n\nmenuShadow.addEventListener(\"click\", function () {\n  searchButtonClass.toggle(\"hidden\");\n  navbarClass.toggle(\"openMenu\");\n  bodyClass.toggle(\"overflow-hidden\");\n  menuShadowClass.toggle(\"openMenuShadow\");\n  menuShadowClass.toggle(\"!z-10\");\n  hamburgerIconClass.toggle(\"!hidden\");\n  closeIconClass.toggle(\"!block\");\n}); // mb 陰影 end\n// pc 搜尋\n\npcSeach.addEventListener(\"focus\", function () {\n  searchMenuClass.add(\"!block\");\n});\npcSeach.addEventListener(\"blur\", function () {\n  searchMenuClass.remove(\"!block\");\n}); // pc 搜尋 end\n// mb 搜尋\n\nsearchButton.addEventListener(\"click\", function () {\n  mbSearchMenuClass.add(\"!block\");\n});\ncancelButton.addEventListener(\"click\", function () {\n  mbSearchMenuClass.remove(\"!block\");\n}); // mb 搜尋 end\n// 導覽列\n\nvar navbarSplide = new (_plugins_splide_min_js__WEBPACK_IMPORTED_MODULE_1___default())(\".navbar\", {\n  autoWidth: true,\n  perMove: 16,\n  drag: \"free\",\n  pagination: false,\n  breakpoints: {\n    1100: {\n      destroy: true\n    }\n  }\n});\nnavbarSplide.mount(); // 導覽列 end\n\n//# sourceURL=webpack://webpack-demo/./src/js/components/header.js?");

/***/ }),

/***/ "./src/js/plugins/splide.min.js":
/*!**************************************!*\
  !*** ./src/js/plugins/splide.min.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _defineProperties(n, t) {\n  for (var e = 0; e < t.length; e++) {\n    var i = t[e];\n    i.enumerable = i.enumerable || !1, i.configurable = !0, \"value\" in i && (i.writable = !0), Object.defineProperty(n, i.key, i);\n  }\n}\n\nfunction _createClass(n, t, e) {\n  return t && _defineProperties(n.prototype, t), e && _defineProperties(n, e), Object.defineProperty(n, \"prototype\", {\n    writable: !1\n  }), n;\n}\n\n!function (n, t) {\n  \"object\" == ( false ? 0 : _typeof(exports)) && \"undefined\" != \"object\" ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;\n}(this, function () {\n  \"use strict\";\n\n  var d = \"(prefers-reduced-motion: reduce)\",\n      R = 4,\n      W = 5,\n      n = {\n    CREATED: 1,\n    MOUNTED: 2,\n    IDLE: 3,\n    MOVING: R,\n    SCROLLING: W,\n    DRAGGING: 6,\n    DESTROYED: 7\n  };\n\n  function x(n) {\n    n.length = 0;\n  }\n\n  function _(n, t, e) {\n    return Array.prototype.slice.call(n, t, e);\n  }\n\n  function D(n) {\n    return n.bind.apply(n, [null].concat(_(arguments, 1)));\n  }\n\n  function G() {}\n\n  var v = setTimeout;\n\n  function p(n) {\n    return requestAnimationFrame(n);\n  }\n\n  function t(n, t) {\n    return _typeof(t) === n;\n  }\n\n  function X(n) {\n    return !r(n) && t(\"object\", n);\n  }\n\n  var o = Array.isArray,\n      w = D(t, \"function\"),\n      M = D(t, \"string\"),\n      z = D(t, \"undefined\");\n\n  function r(n) {\n    return null === n;\n  }\n\n  function g(n) {\n    return n instanceof HTMLElement;\n  }\n\n  function m(n) {\n    return o(n) ? n : [n];\n  }\n\n  function y(n, t) {\n    m(n).forEach(t);\n  }\n\n  function b(n, t) {\n    return -1 < n.indexOf(t);\n  }\n\n  function E(n, t) {\n    return n.push.apply(n, m(t)), n;\n  }\n\n  function L(t, n, e) {\n    t && y(n, function (n) {\n      n && t.classList[e ? \"add\" : \"remove\"](n);\n    });\n  }\n\n  function C(n, t) {\n    L(n, M(t) ? t.split(\" \") : t, !0);\n  }\n\n  function P(n, t) {\n    y(t, n.appendChild.bind(n));\n  }\n\n  function k(n, e) {\n    y(n, function (n) {\n      var t = (e || n).parentNode;\n      t && t.insertBefore(n, e);\n    });\n  }\n\n  function B(n, t) {\n    return g(n) && (n.msMatchesSelector || n.matches).call(n, t);\n  }\n\n  function S(n, t) {\n    n = n ? _(n.children) : [];\n    return t ? n.filter(function (n) {\n      return B(n, t);\n    }) : n;\n  }\n\n  function A(n, t) {\n    return t ? S(n, t)[0] : n.firstElementChild;\n  }\n\n  var h = Object.keys;\n\n  function N(n, t, e) {\n    if (n) for (var i = h(n), i = e ? i.reverse() : i, o = 0; o < i.length; o++) {\n      var r = i[o];\n      if (\"__proto__\" !== r && !1 === t(n[r], r)) break;\n    }\n    return n;\n  }\n\n  function T(i) {\n    return _(arguments, 1).forEach(function (e) {\n      N(e, function (n, t) {\n        i[t] = e[t];\n      });\n    }), i;\n  }\n\n  function O(e) {\n    return _(arguments, 1).forEach(function (n) {\n      N(n, function (n, t) {\n        o(n) ? e[t] = n.slice() : X(n) ? e[t] = O({}, X(e[t]) ? e[t] : {}, n) : e[t] = n;\n      });\n    }), e;\n  }\n\n  function I(t, n) {\n    m(n || h(t)).forEach(function (n) {\n      delete t[n];\n    });\n  }\n\n  function F(n, e) {\n    y(n, function (t) {\n      y(e, function (n) {\n        t && t.removeAttribute(n);\n      });\n    });\n  }\n\n  function j(e, t, i) {\n    X(t) ? N(t, function (n, t) {\n      j(e, t, n);\n    }) : y(e, function (n) {\n      r(i) || \"\" === i ? F(n, t) : n.setAttribute(t, String(i));\n    });\n  }\n\n  function H(n, t, e) {\n    n = document.createElement(n);\n    return t && (M(t) ? C : j)(n, t), e && P(e, n), n;\n  }\n\n  function Y(n, t, e) {\n    if (z(e)) return getComputedStyle(n)[t];\n    r(e) || (n.style[t] = \"\" + e);\n  }\n\n  function q(n, t) {\n    Y(n, \"display\", t);\n  }\n\n  function U(n) {\n    n.setActive && n.setActive() || n.focus({\n      preventScroll: !0\n    });\n  }\n\n  function K(n, t) {\n    return n.getAttribute(t);\n  }\n\n  function J(n, t) {\n    return n && n.classList.contains(t);\n  }\n\n  function Q(n) {\n    return n.getBoundingClientRect();\n  }\n\n  function V(n) {\n    y(n, function (n) {\n      n && n.parentNode && n.parentNode.removeChild(n);\n    });\n  }\n\n  function Z(n) {\n    return A(new DOMParser().parseFromString(n, \"text/html\").body);\n  }\n\n  function $(n, t) {\n    n.preventDefault(), t && (n.stopPropagation(), n.stopImmediatePropagation());\n  }\n\n  function nn(n, t) {\n    return n && n.querySelector(t);\n  }\n\n  function tn(n, t) {\n    return t ? _(n.querySelectorAll(t)) : [];\n  }\n\n  function en(n, t) {\n    L(n, t, !1);\n  }\n\n  function on(n) {\n    return n.timeStamp;\n  }\n\n  function rn(n) {\n    return M(n) ? n : n ? n + \"px\" : \"\";\n  }\n\n  var un = \"splide\",\n      i = \"data-\" + un;\n\n  function sn(n, t) {\n    if (!n) throw new Error(\"[\" + un + \"] \" + (t || \"\"));\n  }\n\n  var cn = Math.min,\n      an = Math.max,\n      fn = Math.floor,\n      ln = Math.ceil,\n      dn = Math.abs;\n\n  function pn(n, t, e) {\n    return dn(n - t) < e;\n  }\n\n  function hn(n, t, e, i) {\n    var o = cn(t, e),\n        e = an(t, e);\n    return i ? o < n && n < e : o <= n && n <= e;\n  }\n\n  function vn(n, t, e) {\n    var i = cn(t, e),\n        e = an(t, e);\n    return cn(an(i, n), e);\n  }\n\n  function gn(n) {\n    return (0 < n) - (n < 0);\n  }\n\n  function mn(t, n) {\n    return y(n, function (n) {\n      t = t.replace(\"%s\", \"\" + n);\n    }), t;\n  }\n\n  function yn(n) {\n    return n < 10 ? \"0\" + n : \"\" + n;\n  }\n\n  var bn = {};\n\n  function wn() {\n    var s = [];\n\n    function e(n, e, i) {\n      y(n, function (t) {\n        t && y(e, function (n) {\n          n.split(\" \").forEach(function (n) {\n            n = n.split(\".\");\n            i(t, n[0], n[1]);\n          });\n        });\n      });\n    }\n\n    return {\n      bind: function bind(n, t, r, u) {\n        e(n, t, function (n, t, e) {\n          var i = (\"addEventListener\" in n),\n              o = i ? n.removeEventListener.bind(n, t, r, u) : n.removeListener.bind(n, r);\n          i ? n.addEventListener(t, r, u) : n.addListener(r), s.push([n, t, e, r, o]);\n        });\n      },\n      unbind: function unbind(n, t, o) {\n        e(n, t, function (t, e, i) {\n          s = s.filter(function (n) {\n            return !!(n[0] !== t || n[1] !== e || n[2] !== i || o && n[3] !== o) || (n[4](), !1);\n          });\n        });\n      },\n      dispatch: function dispatch(n, t, e) {\n        var i;\n        return \"function\" == typeof CustomEvent ? i = new CustomEvent(t, {\n          bubbles: !0,\n          detail: e\n        }) : (i = document.createEvent(\"CustomEvent\")).initCustomEvent(t, !0, !1, e), n.dispatchEvent(i), i;\n      },\n      destroy: function destroy() {\n        s.forEach(function (n) {\n          n[4]();\n        }), x(s);\n      }\n    };\n  }\n\n  var En = \"mounted\",\n      Sn = \"move\",\n      xn = \"moved\",\n      _n = \"shifted\",\n      Cn = \"click\",\n      Pn = \"active\",\n      kn = \"inactive\",\n      Ln = \"visible\",\n      An = \"hidden\",\n      Dn = \"slide:keydown\",\n      Mn = \"refresh\",\n      zn = \"updated\",\n      Nn = \"resize\",\n      Tn = \"resized\",\n      On = \"scroll\",\n      In = \"scrolled\",\n      u = \"destroy\",\n      Fn = \"navigation:mounted\",\n      jn = \"autoplay:play\",\n      Rn = \"autoplay:pause\",\n      Wn = \"lazyload:loaded\";\n\n  function Gn(n) {\n    var e = n ? n.event.bus : document.createDocumentFragment(),\n        i = wn();\n    return n && n.event.on(u, i.destroy), T(i, {\n      bus: e,\n      on: function on(n, t) {\n        i.bind(e, m(n).join(\" \"), function (n) {\n          t.apply(t, o(n.detail) ? n.detail : []);\n        });\n      },\n      off: D(i.unbind, e),\n      emit: function emit(n) {\n        i.dispatch(e, n, _(arguments, 1));\n      }\n    });\n  }\n\n  function Xn(t, n, e, i) {\n    var o,\n        r,\n        u = Date.now,\n        s = 0,\n        c = !0,\n        a = 0;\n\n    function f() {\n      if (!c) {\n        if (s = t ? cn((u() - o) / t, 1) : 1, e && e(s), 1 <= s && (n(), o = u(), i && ++a >= i)) return l();\n        p(f);\n      }\n    }\n\n    function l() {\n      c = !0;\n    }\n\n    function d() {\n      r && cancelAnimationFrame(r), c = !(r = s = 0);\n    }\n\n    return {\n      start: function start(n) {\n        n || d(), o = u() - (n ? s * t : 0), c = !1, p(f);\n      },\n      rewind: function rewind() {\n        o = u(), s = 0, e && e(s);\n      },\n      pause: l,\n      cancel: d,\n      set: function set(n) {\n        t = n;\n      },\n      isPaused: function isPaused() {\n        return c;\n      }\n    };\n  }\n\n  function s(n) {\n    var t = n;\n    return {\n      set: function set(n) {\n        t = n;\n      },\n      is: function is(n) {\n        return b(m(n), t);\n      }\n    };\n  }\n\n  var e = \"Arrow\",\n      Bn = e + \"Left\",\n      Hn = e + \"Right\",\n      c = e + \"Up\",\n      a = e + \"Down\",\n      Yn = \"ttb\",\n      f = {\n    width: [\"height\"],\n    left: [\"top\", \"right\"],\n    right: [\"bottom\", \"left\"],\n    x: [\"y\"],\n    X: [\"Y\"],\n    Y: [\"X\"],\n    ArrowLeft: [c, Hn],\n    ArrowRight: [a, Bn]\n  };\n  var qn = \"role\",\n      Un = \"tabindex\",\n      e = \"aria-\",\n      Kn = e + \"controls\",\n      Jn = e + \"current\",\n      Qn = e + \"selected\",\n      Vn = e + \"label\",\n      Zn = e + \"labelledby\",\n      $n = e + \"hidden\",\n      nt = e + \"orientation\",\n      tt = e + \"roledescription\",\n      l = e + \"live\",\n      et = e + \"busy\",\n      it = e + \"atomic\",\n      ot = [qn, Un, \"disabled\", Kn, Jn, Vn, Zn, $n, nt, tt],\n      rt = un,\n      ut = un + \"__track\",\n      st = un + \"__list\",\n      ct = un + \"__slide\",\n      at = ct + \"--clone\",\n      ft = ct + \"__container\",\n      lt = un + \"__arrows\",\n      dt = un + \"__arrow\",\n      pt = dt + \"--prev\",\n      ht = dt + \"--next\",\n      vt = un + \"__pagination\",\n      gt = vt + \"__page\",\n      mt = un + \"__progress\" + \"__bar\",\n      yt = un + \"__toggle\",\n      bt = un + \"__sr\",\n      wt = \"is-active\",\n      Et = \"is-prev\",\n      St = \"is-next\",\n      xt = \"is-visible\",\n      _t = \"is-loading\",\n      Ct = \"is-focus-in\",\n      Pt = [wt, xt, Et, St, _t, Ct];\n  var kt = \"touchstart mousedown\",\n      Lt = \"touchmove mousemove\",\n      At = \"touchend touchcancel mouseup click\";\n  var Dt = \"slide\",\n      Mt = \"loop\",\n      zt = \"fade\";\n\n  function Nt(o, e, t, r) {\n    var i,\n        n = Gn(o),\n        u = n.on,\n        s = n.emit,\n        c = n.bind,\n        a = o.Components,\n        f = o.root,\n        l = o.options,\n        d = l.isNavigation,\n        p = l.updateOnMove,\n        h = l.i18n,\n        v = l.pagination,\n        g = l.slideFocus,\n        m = a.Direction.resolve,\n        y = K(r, \"style\"),\n        b = K(r, Vn),\n        w = -1 < t,\n        E = A(r, \".\" + ft),\n        S = tn(r, l.focusableNodes || \"\");\n\n    function x() {\n      var n = o.splides.map(function (n) {\n        n = n.splide.Components.Slides.getAt(e);\n        return n ? n.slide.id : \"\";\n      }).join(\" \");\n      j(r, Vn, mn(h.slideX, (w ? t : e) + 1)), j(r, Kn, n), j(r, qn, g ? \"button\" : \"\"), g && F(r, tt);\n    }\n\n    function _() {\n      i || C();\n    }\n\n    function C() {\n      var n, t;\n      i || (n = o.index, (t = P()) !== J(r, wt) && (L(r, wt, t), j(r, Jn, d && t || \"\"), s(t ? Pn : kn, k)), function () {\n        var n = function () {\n          if (o.is(zt)) return P();\n          var n = Q(a.Elements.track),\n              t = Q(r),\n              e = m(\"left\", !0),\n              i = m(\"right\", !0);\n          return fn(n[e]) <= ln(t[e]) && fn(t[i]) <= ln(n[i]);\n        }(),\n            t = !n && (!P() || w);\n\n        o.state.is([R, W]) || j(r, $n, t || \"\");\n        j(S, Un, t ? -1 : \"\"), g && j(r, Un, t ? -1 : 0);\n        n !== J(r, xt) && (L(r, xt, n), s(n ? Ln : An, k));\n        n || document.activeElement !== r || (n = a.Slides.getAt(o.index)) && U(n.slide);\n      }(), L(r, Et, e === n - 1), L(r, St, e === n + 1));\n    }\n\n    function P() {\n      var n = o.index;\n      return n === e || l.cloneStatus && n === t;\n    }\n\n    var k = {\n      index: e,\n      slideIndex: t,\n      slide: r,\n      container: E,\n      isClone: w,\n      mount: function mount() {\n        w || (r.id = f.id + \"-slide\" + yn(e + 1), j(r, qn, v ? \"tabpanel\" : \"group\"), j(r, tt, h.slide), j(r, Vn, b || mn(h.slideLabel, [e + 1, o.length]))), c(r, \"click\", D(s, Cn, k)), c(r, \"keydown\", D(s, Dn, k)), u([xn, _n, In], C), u(Fn, x), p && u(Sn, _);\n      },\n      destroy: function destroy() {\n        i = !0, n.destroy(), en(r, Pt), F(r, ot), j(r, \"style\", y), j(r, Vn, b || \"\");\n      },\n      update: C,\n      style: function style(n, t, e) {\n        Y(e && E || r, n, t);\n      },\n      isWithin: function isWithin(n, t) {\n        return n = dn(n - e), (n = !w && (l.rewind || o.is(Mt)) ? cn(n, o.length - n) : n) <= t;\n      }\n    };\n    return k;\n  }\n\n  var Tt = i + \"-interval\";\n  var Ot = {\n    passive: !1,\n    capture: !0\n  };\n  var It = {\n    Spacebar: \" \",\n    Right: Hn,\n    Left: Bn,\n    Up: c,\n    Down: a\n  };\n\n  function Ft(n) {\n    return n = M(n) ? n : n.key, It[n] || n;\n  }\n\n  var jt = \"keydown\";\n  var Rt = i + \"-lazy\",\n      Wt = Rt + \"-srcset\",\n      Gt = \"[\" + Rt + \"], [\" + Wt + \"]\";\n  var Xt = [\" \", \"Enter\"];\n  var Bt = Object.freeze({\n    __proto__: null,\n    Media: function Media(i, n, o) {\n      var r = i.state,\n          t = o.breakpoints || {},\n          u = o.reducedMotion || {},\n          e = wn(),\n          s = [];\n\n      function c(n) {\n        n && e.destroy();\n      }\n\n      function a(n, t) {\n        t = matchMedia(t);\n        e.bind(t, \"change\", f), s.push([n, t]);\n      }\n\n      function f() {\n        var n = r.is(7),\n            t = o.direction,\n            e = s.reduce(function (n, t) {\n          return O(n, t[1].matches ? t[0] : {});\n        }, {});\n        I(o), l(e), o.destroy ? i.destroy(\"completely\" === o.destroy) : n ? (c(!0), i.mount()) : t !== o.direction && i.refresh();\n      }\n\n      function l(n, t) {\n        O(o, n), t && O(Object.getPrototypeOf(o), n), r.is(1) || i.emit(zn, o);\n      }\n\n      return {\n        setup: function setup() {\n          var e = \"min\" === o.mediaQuery;\n          h(t).sort(function (n, t) {\n            return e ? +n - +t : +t - +n;\n          }).forEach(function (n) {\n            a(t[n], \"(\" + (e ? \"min\" : \"max\") + \"-width:\" + n + \"px)\");\n          }), a(u, d), f();\n        },\n        destroy: c,\n        reduce: function reduce(n) {\n          matchMedia(d).matches && (n ? O(o, u) : I(o, h(u)));\n        },\n        set: l\n      };\n    },\n    Direction: function Direction(n, t, o) {\n      return {\n        resolve: function resolve(n, t, e) {\n          var i = \"rtl\" !== (e = e || o.direction) || t ? e === Yn ? 0 : -1 : 1;\n          return f[n] && f[n][i] || n.replace(/width|left|right/i, function (n, t) {\n            n = f[n.toLowerCase()][i] || n;\n            return 0 < t ? n.charAt(0).toUpperCase() + n.slice(1) : n;\n          });\n        },\n        orient: function orient(n) {\n          return n * (\"rtl\" === o.direction ? 1 : -1);\n        }\n      };\n    },\n    Elements: function Elements(n, t, e) {\n      var i,\n          o,\n          r,\n          u = Gn(n),\n          s = u.on,\n          c = u.bind,\n          a = n.root,\n          f = e.i18n,\n          l = {},\n          d = [],\n          p = [],\n          h = [];\n\n      function v() {\n        i = y(\".\" + ut), o = A(i, \".\" + st), sn(i && o, \"A track/list element is missing.\"), E(d, S(o, \".\" + ct + \":not(.\" + at + \")\")), N({\n          arrows: lt,\n          pagination: vt,\n          prev: pt,\n          next: ht,\n          bar: mt,\n          toggle: yt\n        }, function (n, t) {\n          l[t] = y(\".\" + n);\n        }), T(l, {\n          root: a,\n          track: i,\n          list: o,\n          slides: d\n        }), function () {\n          var n = a.id || function (n) {\n            return \"\" + n + yn(bn[n] = (bn[n] || 0) + 1);\n          }(un),\n              t = e.role;\n\n          a.id = n, i.id = i.id || n + \"-track\", o.id = o.id || n + \"-list\", !K(a, qn) && \"SECTION\" !== a.tagName && t && j(a, qn, t);\n          j(a, tt, f.carousel), j(o, qn, \"presentation\");\n        }(), m();\n      }\n\n      function g(n) {\n        var t = ot.concat(\"style\");\n        x(d), en(a, p), en(i, h), F([i, o], t), F(a, n ? t : [\"style\", tt]);\n      }\n\n      function m() {\n        en(a, p), en(i, h), p = b(rt), h = b(ut), C(a, p), C(i, h), j(a, Vn, e.label), j(a, Zn, e.labelledby);\n      }\n\n      function y(n) {\n        n = nn(a, n);\n        return n && function (n, t) {\n          if (w(n.closest)) return n.closest(t);\n\n          for (var e = n; e && 1 === e.nodeType && !B(e, t);) {\n            e = e.parentElement;\n          }\n\n          return e;\n        }(n, \".\" + rt) === a ? n : void 0;\n      }\n\n      function b(n) {\n        return [n + \"--\" + e.type, n + \"--\" + e.direction, e.drag && n + \"--draggable\", e.isNavigation && n + \"--nav\", n === rt && wt];\n      }\n\n      return T(l, {\n        setup: v,\n        mount: function mount() {\n          s(Mn, g), s(Mn, v), s(zn, m), c(document, kt + \" keydown\", function (n) {\n            r = \"keydown\" === n.type;\n          }, {\n            capture: !0\n          }), c(a, \"focusin\", function () {\n            L(a, Ct, !!r);\n          });\n        },\n        destroy: g\n      });\n    },\n    Slides: function Slides(i, o, r) {\n      var n = Gn(i),\n          t = n.on,\n          u = n.emit,\n          s = n.bind,\n          c = (n = o.Elements).slides,\n          a = n.list,\n          f = [];\n\n      function e() {\n        c.forEach(function (n, t) {\n          d(n, t, -1);\n        });\n      }\n\n      function l() {\n        h(function (n) {\n          n.destroy();\n        }), x(f);\n      }\n\n      function d(n, t, e) {\n        n = Nt(i, t, e, n);\n        n.mount(), f.push(n);\n      }\n\n      function p(n) {\n        return n ? v(function (n) {\n          return !n.isClone;\n        }) : f;\n      }\n\n      function h(n, t) {\n        p(t).forEach(n);\n      }\n\n      function v(t) {\n        return f.filter(w(t) ? t : function (n) {\n          return M(t) ? B(n.slide, t) : b(m(t), n.index);\n        });\n      }\n\n      return {\n        mount: function mount() {\n          e(), t(Mn, l), t(Mn, e), t([En, Mn], function () {\n            f.sort(function (n, t) {\n              return n.index - t.index;\n            });\n          });\n        },\n        destroy: l,\n        update: function update() {\n          h(function (n) {\n            n.update();\n          });\n        },\n        register: d,\n        get: p,\n        getIn: function getIn(n) {\n          var t = o.Controller,\n              e = t.toIndex(n),\n              i = t.hasFocus() ? 1 : r.perPage;\n          return v(function (n) {\n            return hn(n.index, e, e + i - 1);\n          });\n        },\n        getAt: function getAt(n) {\n          return v(n)[0];\n        },\n        add: function add(n, o) {\n          y(n, function (n) {\n            var t, e, i;\n            g(n = M(n) ? Z(n) : n) && ((t = c[o]) ? k(n, t) : P(a, n), C(n, r.classes.slide), n = n, e = D(u, Nn), n = tn(n, \"img\"), (i = n.length) ? n.forEach(function (n) {\n              s(n, \"load error\", function () {\n                --i || e();\n              });\n            }) : e());\n          }), u(Mn);\n        },\n        remove: function remove(n) {\n          V(v(n).map(function (n) {\n            return n.slide;\n          })), u(Mn);\n        },\n        forEach: h,\n        filter: v,\n        style: function style(t, e, i) {\n          h(function (n) {\n            n.style(t, e, i);\n          });\n        },\n        getLength: function getLength(n) {\n          return (n ? c : f).length;\n        },\n        isEnough: function isEnough() {\n          return f.length > r.perPage;\n        }\n      };\n    },\n    Layout: function Layout(n, t, e) {\n      var i,\n          o,\n          r = (c = Gn(n)).on,\n          u = c.bind,\n          s = c.emit,\n          c = t.Slides,\n          a = t.Direction.resolve,\n          f = (t = t.Elements).root,\n          l = t.track,\n          d = t.list,\n          p = c.getAt,\n          h = c.style;\n\n      function v() {\n        o = null, i = e.direction === Yn, Y(f, \"maxWidth\", rn(e.width)), Y(l, a(\"paddingLeft\"), m(!1)), Y(l, a(\"paddingRight\"), m(!0)), g();\n      }\n\n      function g() {\n        var n = Q(f);\n        o && o.width === n.width && o.height === n.height || (Y(l, \"height\", function () {\n          var n = \"\";\n          i && (sn(n = y(), \"height or heightRatio is missing.\"), n = \"calc(\" + n + \" - \" + m(!1) + \" - \" + m(!0) + \")\");\n          return n;\n        }()), h(a(\"marginRight\"), rn(e.gap)), h(\"width\", e.autoWidth ? null : rn(e.fixedWidth) || (i ? \"\" : b())), h(\"height\", rn(e.fixedHeight) || (i ? e.autoHeight ? null : b() : y()), !0), o = n, s(Tn));\n      }\n\n      function m(n) {\n        var t = e.padding,\n            n = a(n ? \"right\" : \"left\");\n        return t && rn(t[n] || (X(t) ? 0 : t)) || \"0px\";\n      }\n\n      function y() {\n        return rn(e.height || Q(d).width * e.heightRatio);\n      }\n\n      function b() {\n        var n = rn(e.gap);\n        return \"calc((100%\" + (n && \" + \" + n) + \")/\" + (e.perPage || 1) + (n && \" - \" + n) + \")\";\n      }\n\n      function w(n, t) {\n        var e = p(n);\n\n        if (e) {\n          n = Q(e.slide)[a(\"right\")], e = Q(d)[a(\"left\")];\n          return dn(n - e) + (t ? 0 : E());\n        }\n\n        return 0;\n      }\n\n      function E() {\n        var n = p(0);\n        return n && parseFloat(Y(n.slide, a(\"marginRight\"))) || 0;\n      }\n\n      return {\n        mount: function mount() {\n          var n, t, e;\n          v(), u(window, \"resize load\", (n = D(s, Nn), function () {\n            e || (e = Xn(t || 0, function () {\n              n(), e = null;\n            }, null, 1)).start();\n          })), r([zn, Mn], v), r(Nn, g);\n        },\n        listSize: function listSize() {\n          return Q(d)[a(\"width\")];\n        },\n        slideSize: function slideSize(n, t) {\n          return (n = p(n || 0)) ? Q(n.slide)[a(\"width\")] + (t ? 0 : E()) : 0;\n        },\n        sliderSize: function sliderSize() {\n          return w(n.length - 1, !0) - w(-1, !0);\n        },\n        totalSize: w,\n        getPadding: function getPadding(n) {\n          return parseFloat(Y(l, a(\"padding\" + (n ? \"Right\" : \"Left\")))) || 0;\n        }\n      };\n    },\n    Clones: function Clones(s, e, c) {\n      var n,\n          t = Gn(s),\n          i = t.on,\n          o = t.emit,\n          a = e.Elements,\n          f = e.Slides,\n          r = e.Direction.resolve,\n          l = [];\n\n      function u() {\n        (n = h()) && (function (o) {\n          var r = f.get().slice(),\n              u = r.length;\n\n          if (u) {\n            for (; r.length < o;) {\n              E(r, r);\n            }\n\n            E(r.slice(-o), r.slice(0, o)).forEach(function (n, t) {\n              var e = t < o,\n                  i = function (n, t) {\n                n = n.cloneNode(!0);\n                return C(n, c.classes.clone), n.id = s.root.id + \"-clone\" + yn(t + 1), n;\n              }(n.slide, t);\n\n              e ? k(i, r[0].slide) : P(a.list, i), E(l, i), f.register(i, t - o + (e ? 0 : u), n.index);\n            });\n          }\n        }(n), o(Nn));\n      }\n\n      function d() {\n        V(l), x(l);\n      }\n\n      function p() {\n        n < h() && o(Mn);\n      }\n\n      function h() {\n        var n,\n            t = c.clones;\n        return s.is(Mt) ? t || (t = (n = c[r(\"fixedWidth\")] && e.Layout.slideSize(0)) && ln(Q(a.track)[r(\"width\")] / n) || c[r(\"autoWidth\")] && s.length || 2 * c.perPage) : t = 0, t;\n      }\n\n      return {\n        mount: function mount() {\n          u(), i(Mn, d), i(Mn, u), i([zn, Nn], p);\n        },\n        destroy: d\n      };\n    },\n    Move: function Move(i, s, o) {\n      var u,\n          n = Gn(i),\n          t = n.on,\n          c = n.emit,\n          a = i.state.set,\n          r = (n = s.Layout).slideSize,\n          e = n.getPadding,\n          f = n.totalSize,\n          l = n.listSize,\n          d = n.sliderSize,\n          p = (n = s.Direction).resolve,\n          h = n.orient,\n          v = (n = s.Elements).list,\n          g = n.track;\n\n      function m() {\n        s.Controller.isBusy() || (s.Scroll.cancel(), y(i.index), s.Slides.update());\n      }\n\n      function y(n) {\n        b(x(n, !0));\n      }\n\n      function b(n, t) {\n        i.is(zt) || (t = t ? n : function (n) {\n          {\n            var t, e;\n            i.is(Mt) && (t = S(n), e = t > s.Controller.getEnd(), (t < 0 || e) && (n = w(n, e)));\n          }\n          return n;\n        }(n), Y(v, \"transform\", \"translate\" + p(\"X\") + \"(\" + t + \"px)\"), n !== t && c(_n));\n      }\n\n      function w(n, t) {\n        var e = n - C(t),\n            i = d();\n        return n -= h(i * (ln(dn(e) / i) || 1)) * (t ? 1 : -1);\n      }\n\n      function E() {\n        b(_()), u.cancel();\n      }\n\n      function S(n) {\n        for (var t = s.Slides.get(), e = 0, i = 1 / 0, o = 0; o < t.length; o++) {\n          var r = t[o].index,\n              u = dn(x(r, !0) - n);\n          if (!(u <= i)) break;\n          i = u, e = r;\n        }\n\n        return e;\n      }\n\n      function x(n, t) {\n        var e = h(f(n - 1) - (e = n, \"center\" === (n = o.focus) ? (l() - r(e, !0)) / 2 : +n * r(e) || 0));\n        return t ? function (n) {\n          o.trimSpace && i.is(Dt) && (n = vn(n, 0, h(d() - l())));\n          return n;\n        }(e) : e;\n      }\n\n      function _() {\n        var n = p(\"left\");\n        return Q(v)[n] - Q(g)[n] + h(e(!1));\n      }\n\n      function C(n) {\n        return x(n ? s.Controller.getEnd() : 0, !!o.trimSpace);\n      }\n\n      return {\n        mount: function mount() {\n          u = s.Transition, t([En, Tn, zn, Mn], m);\n        },\n        move: function move(n, t, e, i) {\n          var o, r;\n          n !== t && (o = e < n, r = h(w(_(), o)), o ? 0 <= r : r <= v[p(\"scrollWidth\")] - Q(g)[p(\"width\")]) && (E(), b(w(_(), e < n), !0)), a(R), c(Sn, t, e, n), u.start(t, function () {\n            a(3), c(xn, t, e, n), i && i();\n          });\n        },\n        jump: y,\n        translate: b,\n        shift: w,\n        cancel: E,\n        toIndex: S,\n        toPosition: x,\n        getPosition: _,\n        getLimit: C,\n        exceededLimit: function exceededLimit(n, t) {\n          t = z(t) ? _() : t;\n          var e = !0 !== n && h(t) < h(C(!1)),\n              t = !1 !== n && h(t) > h(C(!0));\n          return e || t;\n        },\n        reposition: m\n      };\n    },\n    Controller: function Controller(r, o, u) {\n      var s,\n          c,\n          a,\n          n = Gn(r).on,\n          f = o.Move,\n          l = f.getPosition,\n          i = f.getLimit,\n          d = f.toPosition,\n          t = o.Slides,\n          p = t.isEnough,\n          e = t.getLength,\n          h = r.is(Mt),\n          v = r.is(Dt),\n          g = D(E, !1),\n          m = D(E, !0),\n          y = u.start || 0,\n          b = y;\n\n      function w() {\n        s = e(!0), c = u.perMove, a = u.perPage;\n        var n = vn(y, 0, s - 1);\n        n !== y && (y = n, f.reposition());\n      }\n\n      function E(n, t) {\n        var e = c || (L() ? 1 : a),\n            e = S(y + e * (n ? -1 : 1), y, !(c || L()));\n        return -1 === e && v && !pn(l(), i(!n), 1) ? n ? 0 : _() : t ? e : x(e);\n      }\n\n      function S(n, t, e) {\n        var i, o;\n        return p() ? (i = _(), (o = function (n) {\n          if (v && \"move\" === u.trimSpace && n !== y) for (var t = l(); t === d(n, !0) && hn(n, 0, r.length - 1, !u.rewind);) {\n            n < y ? --n : ++n;\n          }\n          return n;\n        }(n)) !== n && (t = n, n = o, e = !1), n < 0 || i < n ? n = c || !hn(0, n, t, !0) && !hn(i, t, n, !0) ? h ? e ? n < 0 ? -(s % a || a) : s : n : u.rewind ? n < 0 ? i : 0 : -1 : C(P(n)) : e && n !== t && (n = C(P(t) + (n < t ? -1 : 1)))) : n = -1, n;\n      }\n\n      function x(n) {\n        return h ? (n + s) % s || 0 : n;\n      }\n\n      function _() {\n        return an(s - (L() || h && c ? 1 : a), 0);\n      }\n\n      function C(n) {\n        return vn(L() ? n : a * n, 0, _());\n      }\n\n      function P(n) {\n        return L() ? n : fn((n >= _() ? s - 1 : n) / a);\n      }\n\n      function k(n) {\n        n !== y && (b = y, y = n);\n      }\n\n      function L() {\n        return !z(u.focus) || u.isNavigation;\n      }\n\n      function A() {\n        return r.state.is([R, W]) && !!u.waitForTransition;\n      }\n\n      return {\n        mount: function mount() {\n          w(), n([zn, Mn], w);\n        },\n        go: function go(n, t, e) {\n          var i;\n          A() || -1 < (n = x(i = function (n) {\n            var t = y;\n            {\n              var e, i;\n              M(n) ? (i = n.match(/([+\\-<>])(\\d+)?/) || [], e = i[1], i = i[2], \"+\" === e || \"-\" === e ? t = S(y + +(\"\" + e + (+i || 1)), y) : \">\" === e ? t = i ? C(+i) : g(!0) : \"<\" === e && (t = m(!0))) : t = h ? n : vn(n, 0, _());\n            }\n            return t;\n          }(n))) && (t || n !== y) && (k(n), f.move(i, n, b, e));\n        },\n        scroll: function scroll(n, t, e, i) {\n          o.Scroll.scroll(n, t, e, function () {\n            k(x(f.toIndex(l()))), i && i();\n          });\n        },\n        getNext: g,\n        getPrev: m,\n        getAdjacent: E,\n        getEnd: _,\n        setIndex: k,\n        getIndex: function getIndex(n) {\n          return n ? b : y;\n        },\n        toIndex: C,\n        toPage: P,\n        toDest: function toDest(n) {\n          return n = f.toIndex(n), v ? vn(n, 0, _()) : n;\n        },\n        hasFocus: L,\n        isBusy: A\n      };\n    },\n    Arrows: function Arrows(o, n, t) {\n      var e,\n          i,\n          r = Gn(o),\n          u = r.on,\n          s = r.bind,\n          c = r.emit,\n          a = t.classes,\n          f = t.i18n,\n          l = n.Elements,\n          d = n.Controller,\n          p = l.arrows,\n          h = l.track,\n          v = p,\n          g = l.prev,\n          m = l.next,\n          y = {};\n\n      function b() {\n        !function () {\n          var n = t.arrows;\n          !n || g && m || (v = p || H(\"div\", a.arrows), g = x(!0), m = x(!1), e = !0, P(v, [g, m]), p || k(v, h));\n          g && m && (T(y, {\n            prev: g,\n            next: m\n          }), q(v, n ? \"\" : \"none\"), C(v, i = lt + \"--\" + t.direction), n && (u([xn, Mn, In], _), s(m, \"click\", D(S, \">\")), s(g, \"click\", D(S, \"<\")), _(), j([g, m], Kn, h.id), c(\"arrows:mounted\", g, m)));\n        }(), u(zn, w);\n      }\n\n      function w() {\n        E(), b();\n      }\n\n      function E() {\n        r.destroy(), en(v, i), e ? (V(p ? [g, m] : v), g = m = null) : F([g, m], ot);\n      }\n\n      function S(n) {\n        d.go(n, !0);\n      }\n\n      function x(n) {\n        return Z('<button class=\"' + a.arrow + \" \" + (n ? a.prev : a.next) + '\" type=\"button\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 40 40\" width=\"40\" height=\"40\" focusable=\"false\"><path d=\"' + (t.arrowPath || \"m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z\") + '\" />');\n      }\n\n      function _() {\n        var n = o.index,\n            t = d.getPrev(),\n            e = d.getNext(),\n            i = -1 < t && n < t ? f.last : f.prev,\n            n = -1 < e && e < n ? f.first : f.next;\n        g.disabled = t < 0, m.disabled = e < 0, j(g, Vn, i), j(m, Vn, n), c(\"arrows:updated\", g, m, t, e);\n      }\n\n      return {\n        arrows: y,\n        mount: b,\n        destroy: E\n      };\n    },\n    Autoplay: function Autoplay(n, t, e) {\n      var i,\n          o,\n          r = Gn(n),\n          u = r.on,\n          s = r.bind,\n          c = r.emit,\n          a = Xn(e.interval, n.go.bind(n, \">\"), function (n) {\n        var t = l.bar;\n        t && Y(t, \"width\", 100 * n + \"%\"), c(\"autoplay:playing\", n);\n      }),\n          f = a.isPaused,\n          l = t.Elements,\n          d = (n = t.Elements).root,\n          p = n.toggle,\n          h = e.autoplay,\n          v = \"pause\" === h;\n\n      function g() {\n        f() && t.Slides.isEnough() && (a.start(!e.resetProgress), o = i = v = !1, b(), c(jn));\n      }\n\n      function m(n) {\n        v = !!(n = void 0 === n ? !0 : n), b(), f() || (a.pause(), c(Rn));\n      }\n\n      function y() {\n        v || (i || o ? m(!1) : g());\n      }\n\n      function b() {\n        p && (L(p, wt, !v), j(p, Vn, e.i18n[v ? \"play\" : \"pause\"]));\n      }\n\n      function w(n) {\n        n = t.Slides.getAt(n);\n        a.set(n && +K(n.slide, Tt) || e.interval);\n      }\n\n      return {\n        mount: function mount() {\n          h && (function () {\n            e.pauseOnHover && s(d, \"mouseenter mouseleave\", function (n) {\n              i = \"mouseenter\" === n.type, y();\n            });\n            e.pauseOnFocus && s(d, \"focusin focusout\", function (n) {\n              o = \"focusin\" === n.type, y();\n            });\n            p && s(p, \"click\", function () {\n              v ? g() : m(!0);\n            });\n            u([Sn, On, Mn], a.rewind), u(Sn, w);\n          }(), p && j(p, Kn, l.track.id), v || g(), b());\n        },\n        destroy: a.cancel,\n        play: g,\n        pause: m,\n        isPaused: f\n      };\n    },\n    Cover: function Cover(n, t, e) {\n      var i = Gn(n).on;\n\n      function o(e) {\n        t.Slides.forEach(function (n) {\n          var t = A(n.container || n.slide, \"img\");\n          t && t.src && r(e, t, n);\n        });\n      }\n\n      function r(n, t, e) {\n        e.style(\"background\", n ? 'center/cover no-repeat url(\"' + t.src + '\")' : \"\", !0), q(t, n ? \"none\" : \"\");\n      }\n\n      return {\n        mount: function mount() {\n          e.cover && (i(Wn, D(r, !0)), i([En, zn, Mn], D(o, !0)));\n        },\n        destroy: D(o, !1)\n      };\n    },\n    Scroll: function Scroll(r, s, u) {\n      var c,\n          a,\n          n = Gn(r),\n          t = n.on,\n          f = n.emit,\n          l = r.state.set,\n          d = s.Move,\n          p = d.getPosition,\n          h = d.getLimit,\n          v = d.exceededLimit,\n          g = d.translate,\n          m = 1;\n\n      function y(n, t, e, i, o) {\n        var r = p();\n        E(), e && (e = s.Layout.sliderSize(), u = gn(n) * e * fn(dn(n) / e) || 0, n = d.toPosition(s.Controller.toDest(n % e)) + u);\n        var u = pn(r, n, 1);\n        m = 1, t = u ? 0 : t || an(dn(n - r) / 1.5, 800), a = i, c = Xn(t, b, D(w, r, n, o), 1), l(W), f(On), c.start();\n      }\n\n      function b() {\n        l(3), a && a(), f(In);\n      }\n\n      function w(n, t, e, i) {\n        var o = p(),\n            n = (n + (t - n) * (n = i, (i = u.easingFunc) ? i(n) : 1 - Math.pow(1 - n, 4)) - o) * m;\n        g(o + n), r.is(Dt) && !e && v() && (m *= .6, dn(n) < 10 && y(h(v(!0)), 600, !1, a, !0));\n      }\n\n      function E() {\n        c && c.cancel();\n      }\n\n      function e() {\n        c && !c.isPaused() && (E(), b());\n      }\n\n      return {\n        mount: function mount() {\n          t(Sn, E), t([zn, Mn], e);\n        },\n        destroy: E,\n        scroll: y,\n        cancel: e\n      };\n    },\n    Drag: function Drag(r, i, u) {\n      var s,\n          t,\n          o,\n          c,\n          a,\n          f,\n          l,\n          d,\n          n = Gn(r),\n          e = n.on,\n          p = n.emit,\n          h = n.bind,\n          v = n.unbind,\n          g = r.state,\n          m = i.Move,\n          y = i.Scroll,\n          b = i.Controller,\n          w = i.Elements.track,\n          E = i.Media.reduce,\n          S = (n = i.Direction).resolve,\n          x = n.orient,\n          _ = m.getPosition,\n          C = m.exceededLimit,\n          P = !1;\n\n      function k() {\n        var n = u.drag;\n        j(!n), c = \"free\" === n;\n      }\n\n      function L(n) {\n        var t, e, i;\n        f = !1, l || (t = F(n), e = n.target, i = u.noDrag, B(e, \".\" + gt + \", .\" + dt) || i && B(e, i) || !t && n.button || (b.isBusy() ? $(n, !0) : (d = t ? w : window, a = g.is([R, W]), o = null, h(d, Lt, A, Ot), h(d, At, D, Ot), m.cancel(), y.cancel(), z(n))));\n      }\n\n      function A(n) {\n        var t, e, i, o;\n        g.is(6) || (g.set(6), p(\"drag\")), n.cancelable && (a ? (m.translate(s + N(n) / (P && r.is(Dt) ? 5 : 1)), e = 200 < T(n), i = P !== (P = C()), (e || i) && z(n), f = !0, p(\"dragging\"), $(n)) : dn(N(o = n)) > dn(N(o, !0)) && (t = n, e = u.dragMinThreshold, i = X(e), o = i && e.mouse || 0, e = (i ? e.touch : +e) || 10, a = dn(N(t)) > (F(t) ? e : o), $(n)));\n      }\n\n      function D(n) {\n        g.is(6) && (g.set(3), p(\"dragged\")), a && (function (n) {\n          var t = function (n) {\n            if (r.is(Mt) || !P) {\n              var t = T(n);\n              if (t && t < 200) return N(n) / t;\n            }\n\n            return 0;\n          }(n),\n              e = function (n) {\n            return _() + gn(n) * cn(dn(n) * (u.flickPower || 600), c ? 1 / 0 : i.Layout.listSize() * (u.flickMaxPages || 1));\n          }(t),\n              n = u.rewind && u.rewindByDrag;\n\n          E(!1), c ? b.scroll(e, 0, u.snap) : r.is(zt) ? b.go(x(gn(t)) < 0 ? n ? \"<\" : \"-\" : n ? \">\" : \"+\") : r.is(Dt) && P && n ? b.go(C(!0) ? \">\" : \"<\") : b.go(b.toDest(e), !0);\n          E(!0);\n        }(n), $(n)), v(d, Lt, A), v(d, At, D), a = !1;\n      }\n\n      function M(n) {\n        !l && f && $(n, !0);\n      }\n\n      function z(n) {\n        o = t, t = n, s = _();\n      }\n\n      function N(n, t) {\n        return I(n, t) - I(O(n), t);\n      }\n\n      function T(n) {\n        return on(n) - on(O(n));\n      }\n\n      function O(n) {\n        return t === n && o || t;\n      }\n\n      function I(n, t) {\n        return (F(n) ? n.changedTouches[0] : n)[\"page\" + S(t ? \"Y\" : \"X\")];\n      }\n\n      function F(n) {\n        return \"undefined\" != typeof TouchEvent && n instanceof TouchEvent;\n      }\n\n      function j(n) {\n        l = n;\n      }\n\n      return {\n        mount: function mount() {\n          h(w, Lt, G, Ot), h(w, At, G, Ot), h(w, kt, L, Ot), h(w, \"click\", M, {\n            capture: !0\n          }), h(w, \"dragstart\", $), e([En, zn], k);\n        },\n        disable: j,\n        isDragging: function isDragging() {\n          return a;\n        }\n      };\n    },\n    Keyboard: function Keyboard(t, n, e) {\n      var i,\n          o,\n          r = Gn(t),\n          u = r.on,\n          s = r.bind,\n          c = r.unbind,\n          a = t.root,\n          f = n.Direction.resolve;\n\n      function l() {\n        var n = e.keyboard;\n        n && (i = \"global\" === n ? window : a, s(i, jt, h));\n      }\n\n      function d() {\n        c(i, jt);\n      }\n\n      function p() {\n        var n = o;\n        o = !0, v(function () {\n          o = n;\n        });\n      }\n\n      function h(n) {\n        o || ((n = Ft(n)) === f(Bn) ? t.go(\"<\") : n === f(Hn) && t.go(\">\"));\n      }\n\n      return {\n        mount: function mount() {\n          l(), u(zn, d), u(zn, l), u(Sn, p);\n        },\n        destroy: d,\n        disable: function disable(n) {\n          o = n;\n        }\n      };\n    },\n    LazyLoad: function LazyLoad(e, n, o) {\n      var t = Gn(e),\n          i = t.on,\n          r = t.off,\n          u = t.bind,\n          s = t.emit,\n          c = \"sequential\" === o.lazyLoad,\n          a = [En, Mn, xn, In],\n          f = [];\n\n      function l() {\n        x(f), n.Slides.forEach(function (i) {\n          tn(i.slide, Gt).forEach(function (n) {\n            var t = K(n, Rt),\n                e = K(n, Wt);\n            t === n.src && e === n.srcset || (t = o.classes.spinner, e = A(e = n.parentElement, \".\" + t) || H(\"span\", t, e), f.push([n, i, e]), n.src || q(n, \"none\"));\n          });\n        }), c && v();\n      }\n\n      function d() {\n        (f = f.filter(function (n) {\n          var t = o.perPage * ((o.preloadPages || 1) + 1) - 1;\n          return !n[1].isWithin(e.index, t) || p(n);\n        })).length || r(a);\n      }\n\n      function p(n) {\n        var t = n[0];\n        C(n[1].slide, _t), u(t, \"load error\", D(h, n)), j(t, \"src\", K(t, Rt)), j(t, \"srcset\", K(t, Wt)), F(t, Rt), F(t, Wt);\n      }\n\n      function h(n, t) {\n        var e = n[0],\n            i = n[1];\n        en(i.slide, _t), \"error\" !== t.type && (V(n[2]), q(e, \"\"), s(Wn, e, i), s(Nn)), c && v();\n      }\n\n      function v() {\n        f.length && p(f.shift());\n      }\n\n      return {\n        mount: function mount() {\n          o.lazyLoad && (l(), i(Mn, l), c || i(a, d));\n        },\n        destroy: D(x, f)\n      };\n    },\n    Pagination: function Pagination(f, n, l) {\n      var d,\n          p,\n          t = Gn(f),\n          e = t.on,\n          i = t.emit,\n          h = t.bind,\n          v = n.Slides,\n          g = n.Elements,\n          o = n.Controller,\n          m = o.hasFocus,\n          r = o.getIndex,\n          u = o.go,\n          s = n.Direction.resolve,\n          y = [];\n\n      function c() {\n        d && (V(g.pagination ? _(d.children) : d), en(d, p), x(y), d = null), t.destroy();\n      }\n\n      function b(n) {\n        u(\">\" + n, !0);\n      }\n\n      function w(n, t) {\n        var e = y.length,\n            i = Ft(t),\n            o = E(),\n            r = -1;\n        i === s(Hn, !1, o) ? r = ++n % e : i === s(Bn, !1, o) ? r = (--n + e) % e : \"Home\" === i ? r = 0 : \"End\" === i && (r = e - 1);\n        e = y[r];\n        e && (U(e.button), u(\">\" + r), $(t, !0));\n      }\n\n      function E() {\n        return l.paginationDirection || l.direction;\n      }\n\n      function a(n) {\n        return y[o.toPage(n)];\n      }\n\n      function S() {\n        var n,\n            t = a(r(!0)),\n            e = a(r());\n        t && (en(n = t.button, wt), F(n, Qn), j(n, Un, -1)), e && (C(n = e.button, wt), j(n, Qn, !0), j(n, Un, \"\")), i(\"pagination:updated\", {\n          list: d,\n          items: y\n        }, t, e);\n      }\n\n      return {\n        items: y,\n        mount: function n() {\n          c(), e([zn, Mn], n), l.pagination && v.isEnough() && (e([Sn, On, In], S), function () {\n            var n = f.length,\n                t = l.classes,\n                e = l.i18n,\n                i = l.perPage,\n                o = m() ? n : ln(n / i);\n            C(d = g.pagination || H(\"ul\", t.pagination, g.track.parentElement), p = vt + \"--\" + E()), j(d, qn, \"tablist\"), j(d, Vn, e.select), j(d, nt, E() === Yn ? \"vertical\" : \"\");\n\n            for (var r = 0; r < o; r++) {\n              var u = H(\"li\", null, d),\n                  s = H(\"button\", {\n                \"class\": t.page,\n                type: \"button\"\n              }, u),\n                  c = v.getIn(r).map(function (n) {\n                return n.slide.id;\n              }),\n                  a = !m() && 1 < i ? e.pageX : e.slideX;\n              h(s, \"click\", D(b, r)), l.paginationKeyboard && h(s, \"keydown\", D(w, r)), j(u, qn, \"presentation\"), j(s, qn, \"tab\"), j(s, Kn, c.join(\" \")), j(s, Vn, mn(a, r + 1)), j(s, Un, -1), y.push({\n                li: u,\n                button: s,\n                page: r\n              });\n            }\n          }(), S(), i(\"pagination:mounted\", {\n            list: d,\n            items: y\n          }, a(f.index)));\n        },\n        destroy: c,\n        getAt: a,\n        update: S\n      };\n    },\n    Sync: function Sync(e, n, t) {\n      var i = t.isNavigation,\n          o = t.slideFocus,\n          r = [];\n\n      function u() {\n        var n, t;\n        e.splides.forEach(function (n) {\n          n.isParent || (c(e, n.splide), c(n.splide, e));\n        }), i && (n = Gn(e), (t = n.on)(Cn, f), t(Dn, l), t([En, zn], a), r.push(n), n.emit(Fn, e.splides));\n      }\n\n      function s() {\n        r.forEach(function (n) {\n          n.destroy();\n        }), x(r);\n      }\n\n      function c(n, i) {\n        n = Gn(n);\n        n.on(Sn, function (n, t, e) {\n          i.go(i.is(Mt) ? e : n);\n        }), r.push(n);\n      }\n\n      function a() {\n        j(n.Elements.list, nt, t.direction === Yn ? \"vertical\" : \"\");\n      }\n\n      function f(n) {\n        e.go(n.index);\n      }\n\n      function l(n, t) {\n        b(Xt, Ft(t)) && (f(n), $(t));\n      }\n\n      return {\n        setup: function setup() {\n          e.options = {\n            slideFocus: z(o) ? i : o\n          };\n        },\n        mount: u,\n        destroy: s,\n        remount: function remount() {\n          s(), u();\n        }\n      };\n    },\n    Wheel: function Wheel(u, s, c) {\n      var n = Gn(u).bind,\n          a = 0;\n\n      function t(n) {\n        var t, e, i, o, r;\n        n.cancelable && (r = (t = n.deltaY) < 0, e = on(n), i = c.wheelMinThreshold || 0, o = c.wheelSleep || 0, dn(t) > i && o < e - a && (u.go(r ? \"<\" : \">\"), a = e), r = r, c.releaseWheel && !u.state.is(R) && -1 === s.Controller.getAdjacent(r) || $(n));\n      }\n\n      return {\n        mount: function mount() {\n          c.wheel && n(s.Elements.track, \"wheel\", t, Ot);\n        }\n      };\n    },\n    Live: function Live(n, t, e) {\n      var i = Gn(n).on,\n          o = t.Elements.track,\n          r = e.live && !e.isNavigation,\n          u = H(\"span\", bt),\n          s = Xn(90, D(c, !1));\n\n      function c(n) {\n        j(o, et, n), n ? (P(o, u), s.start()) : V(u);\n      }\n\n      function a(n) {\n        r && j(o, l, n ? \"off\" : \"polite\");\n      }\n\n      return {\n        mount: function mount() {\n          r && (a(!t.Autoplay.isPaused()), j(o, it, !0), u.textContent = \"…\", i(jn, D(a, !0)), i(Rn, D(a, !1)), i([xn, In], D(c, !0)));\n        },\n        disable: a,\n        destroy: function destroy() {\n          F(o, [l, it, et]), V(u);\n        }\n      };\n    }\n  }),\n      Ht = {\n    type: \"slide\",\n    role: \"region\",\n    speed: 400,\n    perPage: 1,\n    cloneStatus: !0,\n    arrows: !0,\n    pagination: !0,\n    paginationKeyboard: !0,\n    interval: 5e3,\n    pauseOnHover: !0,\n    pauseOnFocus: !0,\n    resetProgress: !0,\n    easing: \"cubic-bezier(0.25, 1, 0.5, 1)\",\n    drag: !0,\n    direction: \"ltr\",\n    trimSpace: !0,\n    focusableNodes: \"a, button, textarea, input, select, iframe\",\n    live: !0,\n    classes: {\n      slide: ct,\n      clone: at,\n      arrows: lt,\n      arrow: dt,\n      prev: pt,\n      next: ht,\n      pagination: vt,\n      page: gt,\n      spinner: un + \"__spinner\"\n    },\n    i18n: {\n      prev: \"Previous slide\",\n      next: \"Next slide\",\n      first: \"Go to first slide\",\n      last: \"Go to last slide\",\n      slideX: \"Go to slide %s\",\n      pageX: \"Go to page %s\",\n      play: \"Start autoplay\",\n      pause: \"Pause autoplay\",\n      carousel: \"carousel\",\n      slide: \"slide\",\n      select: \"Select a slide to show\",\n      slideLabel: \"%s of %s\"\n    },\n    reducedMotion: {\n      speed: 0,\n      rewindSpeed: 0,\n      autoplay: \"pause\"\n    }\n  };\n\n  function Yt(n, i, t) {\n    var e = Gn(n).on;\n    return {\n      mount: function mount() {\n        e([En, Mn], function () {\n          v(function () {\n            i.Slides.style(\"transition\", \"opacity \" + t.speed + \"ms \" + t.easing);\n          });\n        });\n      },\n      start: function start(n, t) {\n        var e = i.Elements.track;\n        Y(e, \"height\", rn(Q(e).height)), v(function () {\n          t(), Y(e, \"height\", \"\");\n        });\n      },\n      cancel: G\n    };\n  }\n\n  function qt(r, n, u) {\n    var s,\n        t = Gn(r).bind,\n        c = n.Move,\n        a = n.Controller,\n        f = n.Scroll,\n        e = n.Elements.list,\n        l = D(Y, e, \"transition\");\n\n    function i() {\n      l(\"\"), f.cancel();\n    }\n\n    return {\n      mount: function mount() {\n        t(e, \"transitionend\", function (n) {\n          n.target === e && s && (i(), s());\n        });\n      },\n      start: function start(n, t) {\n        var e = c.toPosition(n, !0),\n            i = c.getPosition(),\n            o = function (n) {\n          var t = u.rewindSpeed;\n\n          if (r.is(Dt) && t) {\n            var e = a.getIndex(!0),\n                i = a.getEnd();\n            if (0 === e && i <= n || i <= e && 0 === n) return t;\n          }\n\n          return u.speed;\n        }(n);\n\n        1 <= dn(e - i) && 1 <= o ? u.useScroll ? f.scroll(e, o, !1, t) : (l(\"transform \" + o + \"ms \" + u.easing), c.translate(e, !0), s = t) : (c.jump(n), t());\n      },\n      cancel: i\n    };\n  }\n\n  a = function () {\n    function e(n, t) {\n      this.event = Gn(), this.Components = {}, this.state = s(1), this.splides = [], this._o = {}, this._E = {};\n      n = M(n) ? nn(document, n) : n;\n      sn(n, n + \" is invalid.\"), t = O({\n        label: K(this.root = n, Vn) || \"\",\n        labelledby: K(n, Zn) || \"\"\n      }, Ht, e.defaults, t || {});\n\n      try {\n        O(t, JSON.parse(K(n, i)));\n      } catch (n) {\n        sn(!1, \"Invalid JSON\");\n      }\n\n      this._o = Object.create(O({}, t));\n    }\n\n    var n = e.prototype;\n    return n.mount = function (n, t) {\n      var e = this,\n          i = this.state,\n          o = this.Components;\n      return sn(i.is([1, 7]), \"Already mounted!\"), i.set(1), this._C = o, this._T = t || this._T || (this.is(zt) ? Yt : qt), this._E = n || this._E, N(T({}, Bt, this._E, {\n        Transition: this._T\n      }), function (n, t) {\n        n = n(e, o, e._o);\n        (o[t] = n).setup && n.setup();\n      }), N(o, function (n) {\n        n.mount && n.mount();\n      }), this.emit(En), C(this.root, \"is-initialized\"), i.set(3), this.emit(\"ready\"), this;\n    }, n.sync = function (n) {\n      return this.splides.push({\n        splide: n\n      }), n.splides.push({\n        splide: this,\n        isParent: !0\n      }), this.state.is(3) && (this._C.Sync.remount(), n.Components.Sync.remount()), this;\n    }, n.go = function (n) {\n      return this._C.Controller.go(n), this;\n    }, n.on = function (n, t) {\n      return this.event.on(n, t), this;\n    }, n.off = function (n) {\n      return this.event.off(n), this;\n    }, n.emit = function (n) {\n      var t;\n      return (t = this.event).emit.apply(t, [n].concat(_(arguments, 1))), this;\n    }, n.add = function (n, t) {\n      return this._C.Slides.add(n, t), this;\n    }, n.remove = function (n) {\n      return this._C.Slides.remove(n), this;\n    }, n.is = function (n) {\n      return this._o.type === n;\n    }, n.refresh = function () {\n      return this.emit(Mn), this;\n    }, n.destroy = function (t) {\n      void 0 === t && (t = !0);\n      var n = this.event,\n          e = this.state;\n      return e.is(1) ? Gn(this).on(\"ready\", this.destroy.bind(this, t)) : (N(this._C, function (n) {\n        n.destroy && n.destroy(t);\n      }, !0), n.emit(u), n.destroy(), t && x(this.splides), e.set(7)), this;\n    }, _createClass(e, [{\n      key: \"options\",\n      get: function get() {\n        return this._o;\n      },\n      set: function set(n) {\n        this._C.Media.set(n, !0);\n      }\n    }, {\n      key: \"length\",\n      get: function get() {\n        return this._C.Slides.getLength(!0);\n      }\n    }, {\n      key: \"index\",\n      get: function get() {\n        return this._C.Controller.getIndex();\n      }\n    }]), e;\n  }();\n\n  return a.defaults = {}, a.STATES = n, a;\n});\n\n//# sourceURL=webpack://webpack-demo/./src/js/plugins/splide.min.js?");

/***/ }),

/***/ "./src/js/tagList.js":
/*!***************************!*\
  !*** ./src/js/tagList.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header */ \"./src/js/components/header.js\");\n/* harmony import */ var _css_tagList_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/css/tagList.css */ \"./src/css/tagList.css\");\n/* harmony import */ var _images_Ad_01_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/images/Ad-01.jpg */ \"./src/images/Ad-01.jpg\");\n/* harmony import */ var _images_Ad_02_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/images/Ad-02.jpg */ \"./src/images/Ad-02.jpg\");\n/* harmony import */ var _images_Ad_03_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/images/Ad-03.jpg */ \"./src/images/Ad-03.jpg\");\n/* harmony import */ var _images_Ad_05_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/images/Ad-05.jpg */ \"./src/images/Ad-05.jpg\");\n/* harmony import */ var _images_Ad_07_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/images/Ad-07.jpg */ \"./src/images/Ad-07.jpg\");\n/* harmony import */ var _images_Ad_08_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/images/Ad-08.jpg */ \"./src/images/Ad-08.jpg\");\n/* harmony import */ var _images_img_03_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/images/img-03.jpg */ \"./src/images/img-03.jpg\");\n/* harmony import */ var _images_img_04_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/images/img-04.jpg */ \"./src/images/img-04.jpg\");\n/* harmony import */ var _images_img_05_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/images/img-05.jpg */ \"./src/images/img-05.jpg\");\n/* harmony import */ var _images_img_06_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/images/img-06.jpg */ \"./src/images/img-06.jpg\");\n/* harmony import */ var _images_img_07_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/images/img-07.jpg */ \"./src/images/img-07.jpg\");\n/* harmony import */ var _images_img_08_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/images/img-08.jpg */ \"./src/images/img-08.jpg\");\n/* harmony import */ var _images_img_10_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/images/img-10.jpg */ \"./src/images/img-10.jpg\");\n/* harmony import */ var _images_img_11_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/images/img-11.jpg */ \"./src/images/img-11.jpg\");\n/* harmony import */ var _images_img_12_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/images/img-12.jpg */ \"./src/images/img-12.jpg\");\n/* harmony import */ var _images_img_13_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/images/img-13.jpg */ \"./src/images/img-13.jpg\");\n/* harmony import */ var _images_img_14_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/images/img-14.jpg */ \"./src/images/img-14.jpg\");\n/* harmony import */ var _images_img_15_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/images/img-15.jpg */ \"./src/images/img-15.jpg\");\n/* harmony import */ var _images_img_16_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @/images/img-16.jpg */ \"./src/images/img-16.jpg\");\n/* harmony import */ var _images_img_17_jpg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @/images/img-17.jpg */ \"./src/images/img-17.jpg\");\n/* harmony import */ var _images_img_18_jpg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @/images/img-18.jpg */ \"./src/images/img-18.jpg\");\n/* harmony import */ var _images_img_19_jpg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @/images/img-19.jpg */ \"./src/images/img-19.jpg\");\n/* harmony import */ var _images_img_20_jpg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @/images/img-20.jpg */ \"./src/images/img-20.jpg\");\n/* harmony import */ var _images_img_21_jpg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @/images/img-21.jpg */ \"./src/images/img-21.jpg\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n // gotop\n\nvar requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var goTopButton = document.querySelector(\"#gotop\");\n  var windowViewPortHeight = window.innerHeight;\n  var isRequestingAnimationFrame = false;\n\n  if (!goTopButton) {\n    return;\n  }\n\n  goTopButton.addEventListener(\"click\", function () {\n    window.scrollTo({\n      top: 0,\n      behavior: \"smooth\"\n    });\n  });\n  window.addEventListener(\"scroll\", function () {\n    if (!isRequestingAnimationFrame) {\n      requestAnimationFrame(filterGoTopButtonVisibility);\n      isRequestingAnimationFrame = true;\n    }\n  });\n\n  function filterGoTopButtonVisibility() {\n    var windowPageYOffset = window.pageYOffset || document.documentElement.scrollTop;\n\n    if (windowPageYOffset > windowViewPortHeight) {\n      goTopButton.classList.add(\"show\");\n      isRequestingAnimationFrame = false;\n    } else {\n      goTopButton.classList.remove(\"show\");\n      requestAnimationFrame(filterGoTopButtonVisibility);\n    }\n  }\n}); // gotop end\n\n//# sourceURL=webpack://webpack-demo/./src/js/tagList.js?");

/***/ }),

/***/ "./src/css/plugins/splide.min.css":
/*!****************************************!*\
  !*** ./src/css/plugins/splide.min.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-demo/./src/css/plugins/splide.min.css?");

/***/ }),

/***/ "./src/css/tagList.css":
/*!*****************************!*\
  !*** ./src/css/tagList.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-demo/./src/css/tagList.css?");

/***/ }),

/***/ "./src/images/Ad-01.jpg":
/*!******************************!*\
  !*** ./src/images/Ad-01.jpg ***!
  \******************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"./images/Ad-01.jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/images/Ad-01.jpg?");

/***/ }),

/***/ "./src/images/Ad-02.jpg":
/*!******************************!*\
  !*** ./src/images/Ad-02.jpg ***!
  \******************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"./images/Ad-02.jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/images/Ad-02.jpg?");

/***/ }),

/***/ "./src/images/Ad-03.jpg":
/*!******************************!*\
  !*** ./src/images/Ad-03.jpg ***!
  \******************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"./images/Ad-03.jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/images/Ad-03.jpg?");

/***/ }),

/***/ "./src/images/Ad-05.jpg":
/*!******************************!*\
  !*** ./src/images/Ad-05.jpg ***!
  \******************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"./images/Ad-05.jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/images/Ad-05.jpg?");

/***/ }),

/***/ "./src/images/Ad-07.jpg":
/*!******************************!*\
  !*** ./src/images/Ad-07.jpg ***!
  \******************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"./images/Ad-07.jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/images/Ad-07.jpg?");

/***/ }),

/***/ "./src/images/Ad-08.jpg":
/*!******************************!*\
  !*** ./src/images/Ad-08.jpg ***!
  \******************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"./images/Ad-08.jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/images/Ad-08.jpg?");

/***/ }),

/***/ "./src/images/img-03.jpg":
/*!*******************************!*\
  !*** ./src/images/img-03.jpg ***!
  \*******************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"./images/img-03.jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/images/img-03.jpg?");

/***/ }),

/***/ "./src/images/img-04.jpg":
/*!*******************************!*\
  !*** ./src/images/img-04.jpg ***!
  \*******************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"./images/img-04.jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/images/img-04.jpg?");

/***/ }),

/***/ "./src/images/img-05.jpg":
/*!*******************************!*\
  !*** ./src/images/img-05.jpg ***!
  \*******************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"./images/img-05.jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/images/img-05.jpg?");

/***/ }),

/***/ "./src/images/img-06.jpg":
/*!*******************************!*\
  !*** ./src/images/img-06.jpg ***!
  \*******************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"./images/img-06.jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/images/img-06.jpg?");

/***/ }),

/***/ "./src/images/img-07.jpg":
/*!*******************************!*\
  !*** ./src/images/img-07.jpg ***!
  \*******************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"./images/img-07.jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/images/img-07.jpg?");

/***/ }),

/***/ "./src/images/img-08.jpg":
/*!*******************************!*\
  !*** ./src/images/img-08.jpg ***!
  \*******************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"./images/img-08.jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/images/img-08.jpg?");

/***/ }),

/***/ "./src/images/img-10.jpg":
/*!*******************************!*\
  !*** ./src/images/img-10.jpg ***!
  \*******************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"./images/img-10.jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/images/img-10.jpg?");

/***/ }),

/***/ "./src/images/img-11.jpg":
/*!*******************************!*\
  !*** ./src/images/img-11.jpg ***!
  \*******************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"./images/img-11.jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/images/img-11.jpg?");

/***/ }),

/***/ "./src/images/img-12.jpg":
/*!*******************************!*\
  !*** ./src/images/img-12.jpg ***!
  \*******************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"./images/img-12.jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/images/img-12.jpg?");

/***/ }),

/***/ "./src/images/img-13.jpg":
/*!*******************************!*\
  !*** ./src/images/img-13.jpg ***!
  \*******************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"./images/img-13.jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/images/img-13.jpg?");

/***/ }),

/***/ "./src/images/img-14.jpg":
/*!*******************************!*\
  !*** ./src/images/img-14.jpg ***!
  \*******************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"./images/img-14.jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/images/img-14.jpg?");

/***/ }),

/***/ "./src/images/img-15.jpg":
/*!*******************************!*\
  !*** ./src/images/img-15.jpg ***!
  \*******************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"./images/img-15.jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/images/img-15.jpg?");

/***/ }),

/***/ "./src/images/img-16.jpg":
/*!*******************************!*\
  !*** ./src/images/img-16.jpg ***!
  \*******************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"./images/img-16.jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/images/img-16.jpg?");

/***/ }),

/***/ "./src/images/img-17.jpg":
/*!*******************************!*\
  !*** ./src/images/img-17.jpg ***!
  \*******************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"./images/img-17.jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/images/img-17.jpg?");

/***/ }),

/***/ "./src/images/img-18.jpg":
/*!*******************************!*\
  !*** ./src/images/img-18.jpg ***!
  \*******************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"./images/img-18.jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/images/img-18.jpg?");

/***/ }),

/***/ "./src/images/img-19.jpg":
/*!*******************************!*\
  !*** ./src/images/img-19.jpg ***!
  \*******************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"./images/img-19.jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/images/img-19.jpg?");

/***/ }),

/***/ "./src/images/img-20.jpg":
/*!*******************************!*\
  !*** ./src/images/img-20.jpg ***!
  \*******************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"./images/img-20.jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/images/img-20.jpg?");

/***/ }),

/***/ "./src/images/img-21.jpg":
/*!*******************************!*\
  !*** ./src/images/img-21.jpg ***!
  \*******************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"./images/img-21.jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/images/img-21.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/tagList.js");
/******/ 	
/******/ })()
;