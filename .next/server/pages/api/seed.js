"use strict";
(() => {
var exports = {};
exports.id = 890;
exports.ids = [890];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 2804:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5811);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4389);


async function handler(req, res) {
    await _database__WEBPACK_IMPORTED_MODULE_0__.db.connect();
    await _models__WEBPACK_IMPORTED_MODULE_1__/* .Message.deleteMany */ .v.deleteMany();
    await _models__WEBPACK_IMPORTED_MODULE_1__/* .Message.insertMany */ .v.insertMany(_database__WEBPACK_IMPORTED_MODULE_0__/* .seedData.initialData */ .W.Q);
    await _database__WEBPACK_IMPORTED_MODULE_0__.db.disconnect();
    res.status(200).json({
        message: "Proceso realizado"
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [811], () => (__webpack_exec__(2804)));
module.exports = __webpack_exports__;

})();