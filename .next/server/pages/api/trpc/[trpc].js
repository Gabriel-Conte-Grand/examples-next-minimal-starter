"use strict";
(() => {
var exports = {};
exports.id = 829;
exports.ids = [829];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 9926:
/***/ ((module) => {

module.exports = import("zod");;

/***/ }),

/***/ 7310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 395:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5445);
/* harmony import */ var _server_createContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5717);
/* harmony import */ var _server_route_app_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1588);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_server_route_app_router__WEBPACK_IMPORTED_MODULE_1__]);
_server_route_app_router__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_0__.createNextApiHandler({
    router: _server_route_app_router__WEBPACK_IMPORTED_MODULE_1__/* .appRouter */ .q,
    createContext: _server_createContext__WEBPACK_IMPORTED_MODULE_2__/* .createContext */ .k,
    onError ({ error  }) {
        if (error.code === "INTERNAL_SERVER_ERROR") {
            console.error("Something went wrong", error);
        } else {
            console.error(error);
        }
    }
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ createContext)
/* harmony export */ });
function createContext({ req , res  }) {
    return {
        req,
        res
    };
}


/***/ }),

/***/ 4452:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "p": () => (/* binding */ createRouter)
});

;// CONCATENATED MODULE: external "@trpc/server"
const server_namespaceObject = require("@trpc/server");
;// CONCATENATED MODULE: external "superjson"
const external_superjson_namespaceObject = require("superjson");
var external_superjson_default = /*#__PURE__*/__webpack_require__.n(external_superjson_namespaceObject);
;// CONCATENATED MODULE: ./src/server/createRouter.ts


function createRouter() {
    return (0,server_namespaceObject.router)().transformer((external_superjson_default()));
}


/***/ }),

/***/ 1588:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ appRouter)
/* harmony export */ });
/* harmony import */ var _createRouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4452);
/* harmony import */ var _messagges_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8814);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_messagges_router__WEBPACK_IMPORTED_MODULE_1__]);
_messagges_router__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const appRouter = (0,_createRouter__WEBPACK_IMPORTED_MODULE_0__/* .createRouter */ .p)().merge("messages.", _messagges_router__WEBPACK_IMPORTED_MODULE_1__/* .messagesRouter */ .l);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8814:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ messagesRouter)
/* harmony export */ });
/* harmony import */ var _createRouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4452);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9926);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5811);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_1__]);
zod__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const messagesRouter = (0,_createRouter__WEBPACK_IMPORTED_MODULE_0__/* .createRouter */ .p)().mutation("msg.add", {
    input: zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
        text: zod__WEBPACK_IMPORTED_MODULE_1__.z.string()
    }),
    async resolve ({ ctx , input  }) {
        const newMessage = await _database__WEBPACK_IMPORTED_MODULE_2__/* .dbMessages.createMessage */ .U.createMessage(input.text);
        return newMessage;
    }
}).query("msg.list", {
    async resolve ({ ctx  }) {
        const allMessages = await _database__WEBPACK_IMPORTED_MODULE_2__/* .dbMessages.getAllMessages */ .U.getAllMessages();
        return allMessages;
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [445,811], () => (__webpack_exec__(395)));
module.exports = __webpack_exports__;

})();