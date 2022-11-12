"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo */ \"./components/logo.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\nconst LinkItem = (param)=>{\n    let { href , path , children  } = param;\n    _s();\n    const active = path == href;\n    const inactiveColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)(\"gray200\", \"whiteAlpha.900\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: href,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Link, {\n            p: 2,\n            bg: active ? \"glassTeal\" : undefined,\n            color: active ? \"#202023\" : inactiveColor,\n            children: children\n        }, void 0, false, {\n            fileName: \"/home/gabriel/projetos/instyle_medica/components/navbar.js\",\n            lineNumber: 24,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/gabriel/projetos/instyle_medica/components/navbar.js\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, undefined);\n};\n_s(LinkItem, \"dl0xx8ZlQuUn9JhHFu16yTlHTaE=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue\n    ];\n});\n_c = LinkItem;\nconst NavBar = (props)=>{\n    _s1();\n    const { path  } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        position: \"fixed\",\n        as: \"nav\",\n        w: \"100%\",\n        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)(\"#fffff40, #20202380\"),\n        style: {\n            backdropFilter: \"blur(10px)\"\n        },\n        zIndex: 1,\n        ...props,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Container, {\n            display: \"flex\",\n            p: 2,\n            maxW: \"container.md\",\n            wrap: \"wrap\",\n            align: \"center\",\n            justify: \"space-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                    align: \"center\",\n                    mr: 5,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                        as: \"h1\",\n                        size: \"lg\",\n                        letterSpacing: \"tighter\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_logo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/gabriel/projetos/instyle_medica/components/navbar.js\",\n                            lineNumber: 39,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/gabriel/projetos/instyle_medica/components/navbar.js\",\n                        lineNumber: 38,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/gabriel/projetos/instyle_medica/components/navbar.js\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {\n                    direction: {\n                        base: \"column\",\n                        md: \"row\"\n                    },\n                    display: {\n                        base: \"none\",\n                        md: \"flex\"\n                    },\n                    width: {\n                        base: \"full\",\n                        md: \"auto\"\n                    },\n                    alignItems: \"center\",\n                    flexGrow: 1,\n                    mt: {\n                        base: 4,\n                        md: 0\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkItem, {\n                            href: \"/photos\",\n                            path: path,\n                            children: \"Fotos\"\n                        }, void 0, false, {\n                            fileName: \"/home/gabriel/projetos/instyle_medica/components/navbar.js\",\n                            lineNumber: 43,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkItem, {\n                            href: \"/services\",\n                            path: path,\n                            children: \"Servi\\xe7os\"\n                        }, void 0, false, {\n                            fileName: \"/home/gabriel/projetos/instyle_medica/components/navbar.js\",\n                            lineNumber: 44,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkItem, {\n                            href: \"/news\",\n                            path: path,\n                            children: \"Novidades\"\n                        }, void 0, false, {\n                            fileName: \"/home/gabriel/projetos/instyle_medica/components/navbar.js\",\n                            lineNumber: 45,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkItem, {\n                            href: \"/login\",\n                            path: path,\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"/home/gabriel/projetos/instyle_medica/components/navbar.js\",\n                            lineNumber: 46,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/gabriel/projetos/instyle_medica/components/navbar.js\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/gabriel/projetos/instyle_medica/components/navbar.js\",\n            lineNumber: 36,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/gabriel/projetos/instyle_medica/components/navbar.js\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, undefined);\n};\n_s1(NavBar, \"3skuTHwppfEdh6aKNlffDjyTB8U=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue\n    ];\n});\n_c1 = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c, _c1;\n$RefreshReg$(_c, \"LinkItem\");\n$RefreshReg$(_c1, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQXlCO0FBQ087QUFjUDtBQUN1QjtBQUVoRCxNQUFNZSxXQUFXLFNBQTRCO1FBQTNCLEVBQUNDLEtBQUksRUFBRUMsS0FBSSxFQUFFQyxTQUFRLEVBQUM7O0lBQ3BDLE1BQU1DLFNBQVNGLFFBQVFEO0lBQ3ZCLE1BQU1JLGdCQUFnQlAsbUVBQWlCQSxDQUFDLFdBQVc7SUFDbkQscUJBQ0ksOERBQUNaLGtEQUFRQTtRQUFDZSxNQUFNQTtrQkFDWiw0RUFBQ1osa0RBQUlBO1lBQUNpQixHQUFLO1lBQUdDLElBQU1ILFNBQVMsY0FBY0ksU0FBUztZQUFFQyxPQUFPTCxTQUFTLFlBQVlDLGFBQWE7c0JBQzFGRjs7Ozs7Ozs7Ozs7QUFJakI7R0FWTUg7O1FBRW9CRiwrREFBaUJBOzs7S0FGckNFO0FBWU4sTUFBTVUsU0FBU0MsQ0FBQUEsUUFBUzs7SUFDcEIsTUFBTSxFQUFFVCxLQUFJLEVBQUUsR0FBSVM7SUFFbEIscUJBQ0ksOERBQUN2QixpREFBR0E7UUFBQ3dCLFVBQVM7UUFBUUMsSUFBRztRQUFNQyxHQUFJO1FBQU9QLElBQU1ULG1FQUFpQkEsQ0FBQztRQUF3QmlCLE9BQU87WUFBQ0MsZ0JBQWdCO1FBQVk7UUFBR0MsUUFBUTtRQUFJLEdBQUdOLEtBQUs7a0JBQ2pKLDRFQUFDeEIsdURBQVNBO1lBQUMrQixTQUFVO1lBQU9aLEdBQUs7WUFBR2EsTUFBSztZQUFlQyxNQUFPO1lBQU9DLE9BQU07WUFBU0MsU0FBUTs7OEJBQ3pGLDhEQUFDOUIsa0RBQUlBO29CQUFDNkIsT0FBTTtvQkFBU0UsSUFBSTs4QkFDckIsNEVBQUNoQyxxREFBT0E7d0JBQUNzQixJQUFLO3dCQUFLVyxNQUFPO3dCQUFNQyxlQUFlO2tDQUMzQyw0RUFBQ3hDLDZDQUFJQTs7Ozs7Ozs7Ozs7Ozs7OzhCQUdiLDhEQUFDSyxtREFBS0E7b0JBQUNvQyxXQUFXO3dCQUFDQyxNQUFNO3dCQUFVQyxJQUFJO29CQUFLO29CQUFHVixTQUFTO3dCQUFDUyxNQUFNO3dCQUFRQyxJQUFJO29CQUFNO29CQUFHQyxPQUFPO3dCQUFDRixNQUFNO3dCQUFRQyxJQUFHO29CQUFNO29CQUFHRSxZQUFXO29CQUFTQyxVQUFVO29CQUFHQyxJQUFJO3dCQUFDTCxNQUFLO3dCQUFHQyxJQUFJO29CQUFDOztzQ0FDckssOERBQUM1Qjs0QkFBU0MsTUFBSzs0QkFBVUMsTUFBTUE7c0NBQU07Ozs7OztzQ0FDckMsOERBQUNGOzRCQUFTQyxNQUFLOzRCQUFZQyxNQUFNQTtzQ0FBTTs7Ozs7O3NDQUN2Qyw4REFBQ0Y7NEJBQVNDLE1BQUs7NEJBQVFDLE1BQU1BO3NDQUFNOzs7Ozs7c0NBQ25DLDhEQUFDRjs0QkFBU0MsTUFBSzs0QkFBU0MsTUFBTUE7c0NBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXhEO0lBckJNUTs7UUFJa0RaLCtEQUFpQkE7OztNQUpuRVk7QUF1Qk4sK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIuanM/NWI1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9nbyBmcm9tICcuL2xvZ28nXG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHtcbiAgICBDb250YWluZXIsXG4gICAgQm94LFxuICAgIExpbmssXG4gICAgU3RhY2ssXG4gICAgSGVhZGluZyxcbiAgICBGbGV4LFxuICAgIE1lbnUsXG4gICAgTWVudUl0ZW0sXG4gICAgTWVudUxpc3QsXG4gICAgTWVudUJ1dHRvbixcbiAgICBJY29uQnV0dG9uLFxuICAgIHVzZUNvbG9yTW9kZVZhbHVlXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBIYW1idXJnZXJJY29uIH0gZnJvbSAnQGNoYWtyYS11aS9pY29ucydcblxuY29uc3QgTGlua0l0ZW0gPSAoe2hyZWYsIHBhdGgsIGNoaWxkcmVufSkgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZSA9IHBhdGggPT0gaHJlZlxuICAgIGNvbnN0IGluYWN0aXZlQ29sb3IgPSB1c2VDb2xvck1vZGVWYWx1ZSgnZ3JheTIwMCcsICd3aGl0ZUFscGhhLjkwMCcpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE5leHRMaW5rIGhyZWY9e2hyZWZ9PlxuICAgICAgICAgICAgPExpbmsgcCA9IHsyfSBiZyA9IHthY3RpdmUgPyAnZ2xhc3NUZWFsJyA6IHVuZGVmaW5lZH0gY29sb3I9e2FjdGl2ZSA/ICcjMjAyMDIzJyA6IGluYWN0aXZlQ29sb3J9PlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvTGluaz4gICAgICAgIFxuICAgICAgICA8L05leHRMaW5rPlxuICAgIClcbn1cblxuY29uc3QgTmF2QmFyID0gcHJvcHMgPT4ge1xuICAgIGNvbnN0IHsgcGF0aCB9ID0gIHByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Qm94IHBvc2l0aW9uPSdmaXhlZCcgYXM9J25hdicgdyA9IFwiMTAwJVwiIGJnID0ge3VzZUNvbG9yTW9kZVZhbHVlKCcjZmZmZmY0MCwgIzIwMjAyMzgwJyl9IHN0eWxlPXt7YmFja2Ryb3BGaWx0ZXI6ICdibHVyKDEwcHgpJ319IHpJbmRleD17MX0gey4uLnByb3BzfT5cbiAgICAgICAgICAgIDxDb250YWluZXIgZGlzcGxheSA9IFwiZmxleFwiIHAgPSB7Mn0gbWF4Vz1cImNvbnRhaW5lci5tZFwiIHdyYXAgPSBcIndyYXBcIiBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgPEZsZXggYWxpZ249XCJjZW50ZXJcIiBtcj17NX0+XG4gICAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIGFzID0gXCJoMVwiIHNpemUgPSBcImxnXCIgIGxldHRlclNwYWNpbmc9eyd0aWdodGVyJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9nby8+XG4gICAgICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj17e2Jhc2U6ICdjb2x1bW4nLCBtZDogJ3Jvdyd9fSBkaXNwbGF5PXt7YmFzZTogJ25vbmUnLCBtZDogJ2ZsZXgnfX0gd2lkdGg9e3tiYXNlOiAnZnVsbCcsIG1kOlwiYXV0b1wifX0gYWxpZ25JdGVtcz1cImNlbnRlclwiIGZsZXhHcm93PXsxfSBtdD17e2Jhc2U6NCwgbWQ6IDB9fT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmtJdGVtIGhyZWY9XCIvcGhvdG9zXCIgcGF0aD17cGF0aH0+Rm90b3M8L0xpbmtJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8TGlua0l0ZW0gaHJlZj1cIi9zZXJ2aWNlc1wiIHBhdGg9e3BhdGh9PlNlcnZpw6dvczwvTGlua0l0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rSXRlbSBocmVmPVwiL25ld3NcIiBwYXRoPXtwYXRofT5Ob3ZpZGFkZXM8L0xpbmtJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8TGlua0l0ZW0gaHJlZj1cIi9sb2dpblwiIHBhdGg9e3BhdGh9PkxvZ2luPC9MaW5rSXRlbT5cbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPC9Cb3g+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZCYXIiXSwibmFtZXMiOlsiTG9nbyIsIk5leHRMaW5rIiwiQ29udGFpbmVyIiwiQm94IiwiTGluayIsIlN0YWNrIiwiSGVhZGluZyIsIkZsZXgiLCJNZW51IiwiTWVudUl0ZW0iLCJNZW51TGlzdCIsIk1lbnVCdXR0b24iLCJJY29uQnV0dG9uIiwidXNlQ29sb3JNb2RlVmFsdWUiLCJIYW1idXJnZXJJY29uIiwiTGlua0l0ZW0iLCJocmVmIiwicGF0aCIsImNoaWxkcmVuIiwiYWN0aXZlIiwiaW5hY3RpdmVDb2xvciIsInAiLCJiZyIsInVuZGVmaW5lZCIsImNvbG9yIiwiTmF2QmFyIiwicHJvcHMiLCJwb3NpdGlvbiIsImFzIiwidyIsInN0eWxlIiwiYmFja2Ryb3BGaWx0ZXIiLCJ6SW5kZXgiLCJkaXNwbGF5IiwibWF4VyIsIndyYXAiLCJhbGlnbiIsImp1c3RpZnkiLCJtciIsInNpemUiLCJsZXR0ZXJTcGFjaW5nIiwiZGlyZWN0aW9uIiwiYmFzZSIsIm1kIiwid2lkdGgiLCJhbGlnbkl0ZW1zIiwiZmxleEdyb3ciLCJtdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/navbar.js\n"));

/***/ })

});