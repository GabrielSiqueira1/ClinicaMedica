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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo */ \"./components/logo.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\nconst LinkItem = (param)=>{\n    let { href , path , children  } = param;\n    _s();\n    const active = path == href;\n    const inactiveColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)(\"gray200\", \"whiteAlpha.900\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: href,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Link, {\n            p: 2,\n            bg: active ? \"glassTeal\" : undefined,\n            color: active ? \"#202023\" : inactiveColor,\n            children: children\n        }, void 0, false, {\n            fileName: \"/home/gabriel/projetos/instyle_medica/components/navbar.js\",\n            lineNumber: 24,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/gabriel/projetos/instyle_medica/components/navbar.js\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, undefined);\n};\n_s(LinkItem, \"dl0xx8ZlQuUn9JhHFu16yTlHTaE=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue\n    ];\n});\n_c = LinkItem;\nconst NavBar = (props)=>{\n    _s1();\n    const { path  } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        position: \"fixed\",\n        as: \"nav\",\n        w: \"100%\",\n        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)(\"#fffff40, #20202380\"),\n        style: {\n            backdropFilter: \"blur(10px)\"\n        },\n        zIndex: 1,\n        ...props,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Container, {\n            display: \"flex\",\n            p: 2,\n            maxW: \"container.md\",\n            wrap: \"wrap\",\n            align: \"center\",\n            justify: \"space-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                    align: \"center\",\n                    mr: 5,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                        as: \"h1\",\n                        size: \"lg\",\n                        letterSpacing: \"tighter\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_logo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/gabriel/projetos/instyle_medica/components/navbar.js\",\n                            lineNumber: 39,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/gabriel/projetos/instyle_medica/components/navbar.js\",\n                        lineNumber: 38,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/gabriel/projetos/instyle_medica/components/navbar.js\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {\n                    direction: {\n                        base: \"column\",\n                        md: \"row\"\n                    },\n                    display: {\n                        base: \"none\",\n                        md: \"flex\"\n                    },\n                    width: {\n                        base: \"full\",\n                        md: \"auto\"\n                    },\n                    alignItems: \"center\",\n                    flexGrow: 1,\n                    mt: {\n                        base: 4,\n                        md: 0\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkItem, {\n                        href: \"/works\",\n                        path: path,\n                        children: \"Works\"\n                    }, void 0, false, {\n                        fileName: \"/home/gabriel/projetos/instyle_medica/components/navbar.js\",\n                        lineNumber: 43,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/gabriel/projetos/instyle_medica/components/navbar.js\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/gabriel/projetos/instyle_medica/components/navbar.js\",\n            lineNumber: 36,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/gabriel/projetos/instyle_medica/components/navbar.js\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, undefined);\n};\n_s1(NavBar, \"3skuTHwppfEdh6aKNlffDjyTB8U=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue\n    ];\n});\n_c1 = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c, _c1;\n$RefreshReg$(_c, \"LinkItem\");\n$RefreshReg$(_c1, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQXlCO0FBQ087QUFjUDtBQUN1QjtBQUVoRCxNQUFNZSxXQUFXLFNBQTRCO1FBQTNCLEVBQUNDLEtBQUksRUFBRUMsS0FBSSxFQUFFQyxTQUFRLEVBQUM7O0lBQ3BDLE1BQU1DLFNBQVNGLFFBQVFEO0lBQ3ZCLE1BQU1JLGdCQUFnQlAsbUVBQWlCQSxDQUFDLFdBQVc7SUFDbkQscUJBQ0ksOERBQUNaLGtEQUFRQTtRQUFDZSxNQUFNQTtrQkFDWiw0RUFBQ1osa0RBQUlBO1lBQUNpQixHQUFLO1lBQUdDLElBQU1ILFNBQVMsY0FBY0ksU0FBUztZQUFFQyxPQUFPTCxTQUFTLFlBQVlDLGFBQWE7c0JBQzFGRjs7Ozs7Ozs7Ozs7QUFJakI7R0FWTUg7O1FBRW9CRiwrREFBaUJBOzs7S0FGckNFO0FBWU4sTUFBTVUsU0FBU0MsQ0FBQUEsUUFBUzs7SUFDcEIsTUFBTSxFQUFFVCxLQUFJLEVBQUUsR0FBSVM7SUFFbEIscUJBQ0ksOERBQUN2QixpREFBR0E7UUFBQ3dCLFVBQVM7UUFBUUMsSUFBRztRQUFNQyxHQUFJO1FBQU9QLElBQU1ULG1FQUFpQkEsQ0FBQztRQUF3QmlCLE9BQU87WUFBQ0MsZ0JBQWdCO1FBQVk7UUFBR0MsUUFBUTtRQUFJLEdBQUdOLEtBQUs7a0JBQ2pKLDRFQUFDeEIsdURBQVNBO1lBQUMrQixTQUFVO1lBQU9aLEdBQUs7WUFBR2EsTUFBSztZQUFlQyxNQUFPO1lBQU9DLE9BQU07WUFBU0MsU0FBUTs7OEJBQ3pGLDhEQUFDOUIsa0RBQUlBO29CQUFDNkIsT0FBTTtvQkFBU0UsSUFBSTs4QkFDckIsNEVBQUNoQyxxREFBT0E7d0JBQUNzQixJQUFLO3dCQUFLVyxNQUFPO3dCQUFNQyxlQUFlO2tDQUMzQyw0RUFBQ3hDLDZDQUFJQTs7Ozs7Ozs7Ozs7Ozs7OzhCQUdiLDhEQUFDSyxtREFBS0E7b0JBQUNvQyxXQUFXO3dCQUFDQyxNQUFNO3dCQUFVQyxJQUFJO29CQUFLO29CQUFHVixTQUFTO3dCQUFDUyxNQUFNO3dCQUFRQyxJQUFJO29CQUFNO29CQUFHQyxPQUFPO3dCQUFDRixNQUFNO3dCQUFRQyxJQUFHO29CQUFNO29CQUFHRSxZQUFXO29CQUFTQyxVQUFVO29CQUFHQyxJQUFJO3dCQUFDTCxNQUFLO3dCQUFHQyxJQUFJO29CQUFDOzhCQUNySyw0RUFBQzVCO3dCQUFTQyxNQUFLO3dCQUFTQyxNQUFNQTtrQ0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt4RDtJQWpCTVE7O1FBSWtEWiwrREFBaUJBOzs7TUFKbkVZO0FBbUJOLCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2YmFyLmpzPzViNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExvZ28gZnJvbSAnLi9sb2dvJ1xuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7XG4gICAgQ29udGFpbmVyLFxuICAgIEJveCxcbiAgICBMaW5rLFxuICAgIFN0YWNrLFxuICAgIEhlYWRpbmcsXG4gICAgRmxleCxcbiAgICBNZW51LFxuICAgIE1lbnVJdGVtLFxuICAgIE1lbnVMaXN0LFxuICAgIE1lbnVCdXR0b24sXG4gICAgSWNvbkJ1dHRvbixcbiAgICB1c2VDb2xvck1vZGVWYWx1ZVxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgSGFtYnVyZ2VySWNvbiB9IGZyb20gJ0BjaGFrcmEtdWkvaWNvbnMnXG5cbmNvbnN0IExpbmtJdGVtID0gKHtocmVmLCBwYXRoLCBjaGlsZHJlbn0pID0+IHtcbiAgICBjb25zdCBhY3RpdmUgPSBwYXRoID09IGhyZWZcbiAgICBjb25zdCBpbmFjdGl2ZUNvbG9yID0gdXNlQ29sb3JNb2RlVmFsdWUoJ2dyYXkyMDAnLCAnd2hpdGVBbHBoYS45MDAnKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxOZXh0TGluayBocmVmPXtocmVmfT5cbiAgICAgICAgICAgIDxMaW5rIHAgPSB7Mn0gYmcgPSB7YWN0aXZlID8gJ2dsYXNzVGVhbCcgOiB1bmRlZmluZWR9IGNvbG9yPXthY3RpdmUgPyAnIzIwMjAyMycgOiBpbmFjdGl2ZUNvbG9yfT5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L0xpbms+ICAgICAgICBcbiAgICAgICAgPC9OZXh0TGluaz5cbiAgICApXG59XG5cbmNvbnN0IE5hdkJhciA9IHByb3BzID0+IHtcbiAgICBjb25zdCB7IHBhdGggfSA9ICBwcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJveCBwb3NpdGlvbj0nZml4ZWQnIGFzPSduYXYnIHcgPSBcIjEwMCVcIiBiZyA9IHt1c2VDb2xvck1vZGVWYWx1ZSgnI2ZmZmZmNDAsICMyMDIwMjM4MCcpfSBzdHlsZT17e2JhY2tkcm9wRmlsdGVyOiAnYmx1cigxMHB4KSd9fSB6SW5kZXg9ezF9IHsuLi5wcm9wc30+XG4gICAgICAgICAgICA8Q29udGFpbmVyIGRpc3BsYXkgPSBcImZsZXhcIiBwID0gezJ9IG1heFc9XCJjb250YWluZXIubWRcIiB3cmFwID0gXCJ3cmFwXCIgYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIDxGbGV4IGFsaWduPVwiY2VudGVyXCIgbXI9ezV9PlxuICAgICAgICAgICAgICAgICAgICA8SGVhZGluZyBhcyA9IFwiaDFcIiBzaXplID0gXCJsZ1wiICBsZXR0ZXJTcGFjaW5nPXsndGlnaHRlcid9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExvZ28vPlxuICAgICAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249e3tiYXNlOiAnY29sdW1uJywgbWQ6ICdyb3cnfX0gZGlzcGxheT17e2Jhc2U6ICdub25lJywgbWQ6ICdmbGV4J319IHdpZHRoPXt7YmFzZTogJ2Z1bGwnLCBtZDpcImF1dG9cIn19IGFsaWduSXRlbXM9XCJjZW50ZXJcIiBmbGV4R3Jvdz17MX0gbXQ9e3tiYXNlOjQsIG1kOiAwfX0+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rSXRlbSBocmVmPVwiL3dvcmtzXCIgcGF0aD17cGF0aH0+V29ya3M8L0xpbmtJdGVtPlxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPC9Cb3g+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZCYXIiXSwibmFtZXMiOlsiTG9nbyIsIk5leHRMaW5rIiwiQ29udGFpbmVyIiwiQm94IiwiTGluayIsIlN0YWNrIiwiSGVhZGluZyIsIkZsZXgiLCJNZW51IiwiTWVudUl0ZW0iLCJNZW51TGlzdCIsIk1lbnVCdXR0b24iLCJJY29uQnV0dG9uIiwidXNlQ29sb3JNb2RlVmFsdWUiLCJIYW1idXJnZXJJY29uIiwiTGlua0l0ZW0iLCJocmVmIiwicGF0aCIsImNoaWxkcmVuIiwiYWN0aXZlIiwiaW5hY3RpdmVDb2xvciIsInAiLCJiZyIsInVuZGVmaW5lZCIsImNvbG9yIiwiTmF2QmFyIiwicHJvcHMiLCJwb3NpdGlvbiIsImFzIiwidyIsInN0eWxlIiwiYmFja2Ryb3BGaWx0ZXIiLCJ6SW5kZXgiLCJkaXNwbGF5IiwibWF4VyIsIndyYXAiLCJhbGlnbiIsImp1c3RpZnkiLCJtciIsInNpemUiLCJsZXR0ZXJTcGFjaW5nIiwiZGlyZWN0aW9uIiwiYmFzZSIsIm1kIiwid2lkdGgiLCJhbGlnbkl0ZW1zIiwiZmxleEdyb3ciLCJtdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/navbar.js\n"));

/***/ })

});