"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/@trpc/next/dist/trpc-next.cjs.js
var trpc_next_cjs = __webpack_require__(1820);
;// CONCATENATED MODULE: external "@trpc/client/links/loggerLink"
const loggerLink_namespaceObject = require("@trpc/client/links/loggerLink");
;// CONCATENATED MODULE: external "@trpc/client/links/httpBatchLink"
const httpBatchLink_namespaceObject = require("@trpc/client/links/httpBatchLink");
;// CONCATENATED MODULE: external "superjson"
const external_superjson_namespaceObject = require("superjson");
var external_superjson_default = /*#__PURE__*/__webpack_require__.n(external_superjson_namespaceObject);
;// CONCATENATED MODULE: ./src/constants.ts
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : "http://localhost:3000";
const url = `${baseUrl}/api/trpc`;

;// CONCATENATED MODULE: ./src/pages/_app.tsx






function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("main", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = ((0,trpc_next_cjs.withTRPC)({
    config ({ ctx  }) {
        const links = [
            (0,loggerLink_namespaceObject.loggerLink)(),
            (0,httpBatchLink_namespaceObject.httpBatchLink)({
                maxBatchSize: 10,
                url: url
            }), 
        ];
        return {
            queryClientConfig: {
                defaultOptions: {
                    queries: {
                        staleTime: 60
                    }
                }
            },
            headers () {
                if (ctx?.req) {
                    return {
                        ...ctx.req.headers,
                        "x-ssr": "1"
                    };
                }
                return {};
            },
            links,
            transformer: (external_superjson_default())
        };
    },
    ssr: false
})(MyApp));


/***/ }),

/***/ 1782:
/***/ ((module) => {

module.exports = require("@trpc/react");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1175:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 7583:
/***/ ((module) => {

module.exports = require("react-ssr-prepass");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [938], () => (__webpack_exec__(2025)));
module.exports = __webpack_exports__;

})();