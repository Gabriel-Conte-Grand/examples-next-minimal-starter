"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/trpc/[trpc]";
exports.ids = ["pages/api/trpc/[trpc]"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "@trpc/server":
/*!*******************************!*\
  !*** external "@trpc/server" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("@trpc/server");;

/***/ }),

/***/ "@trpc/server/adapters/next":
/*!*********************************************!*\
  !*** external "@trpc/server/adapters/next" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = import("@trpc/server/adapters/next");;

/***/ }),

/***/ "zod":
/*!**********************!*\
  !*** external "zod" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("zod");;

/***/ }),

/***/ "(api)/./src/database/db.ts":
/*!****************************!*\
  !*** ./src/database/db.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connect\": () => (/* binding */ connect),\n/* harmony export */   \"disconnect\": () => (/* binding */ disconnect)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n/**\r\n * 0 = disconnected\r\n * 1 = connected\r\n * 2 = connecting\r\n * 3 = disconnecting\r\n */ const mongoConnection = {\n    isConnected: 0\n};\nconst connect = async ()=>{\n    if (mongoConnection.isConnected) {\n        console.log(\"Ya estabamos conectados\");\n        return;\n    }\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections.length) > 0) {\n        mongoConnection.isConnected = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState);\n        if (mongoConnection.isConnected === 1) {\n            console.log(\"Usando conexi\\xf3n anterior\");\n            return;\n        }\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().disconnect();\n    }\n    await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URL || \"\");\n    mongoConnection.isConnected = 1;\n    console.log(\"Conectado a MongoDB:\", process.env.MONGO_URL);\n};\nconst disconnect = async ()=>{\n    if (true) return;\n    if (mongoConnection.isConnected === 0) return;\n    await mongoose__WEBPACK_IMPORTED_MODULE_0___default().disconnect();\n    mongoConnection.isConnected = 0;\n    console.log(\"Desconectado de MongoDB\");\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvZGF0YWJhc2UvZGIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUErQjtBQUUvQjtJQU9FRSxXQUFXLEVBQUUsQ0FBQztDQUNmO0FBRUQsT0FBTyxNQUFNQztJQUNYLElBQUlGO1FBQ0ZHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDO1FBQ1osT0FBTTs7QUFHUixDQUFJTCxRQUFRLENBQUNNLFdBQVcsQ0FBQ0M7UUFDdkJOLGVBQWUsQ0FBQ0MsV0FBVyxHQUFHRjtRQUU5QixJQUFJQyxlQUFlLENBQUNDLFdBQVcsS0FBSyxDQUFDLEVBQUU7WUFDckNFOztRQUVGLG9FQUFDO1FBRUQsTUFBTUosUUFBUSxDQUFDUyxVQUFVLEVBQUU7SUFDN0IsQ0FBQztJQUVELE1BQU1ULFFBQVEsQ0FBQ0csT0FBTyxDQUFDTyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsU0FBUyxJQUFJLEVBQUUsQ0FBQztJQUNuRFgsZUFBZTtJQUNmRztBQUNGLENBQUM7QUFFRDtJQUNFLElBQUlNLEVBQUFBLHVEQUF5QixhQUFhLEVBQUUsT0FBTTtJQUVsRCxJQUFJVCxlQUFlLENBQUNDLFdBQVc7SUFFL0IsTUFBTUYsUUFBUSxDQUFDUyxVQUFVLEVBQUU7O0FBRzNCTCxJQUFPLENBQUNDLEdBQUcsQ0FBQztBQUNkLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZXhhbXBsZXMvbmV4dC1taW5pbWFsLy4vc3JjL2RhdGFiYXNlL2RiLnRzPzUzNzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xyXG5cclxuLyoqXHJcbiAqIDAgPSBkaXNjb25uZWN0ZWRcclxuICogMSA9IGNvbm5lY3RlZFxyXG4gKiAyID0gY29ubmVjdGluZ1xyXG4gKiAzID0gZGlzY29ubmVjdGluZ1xyXG4gKi9cclxuY29uc3QgbW9uZ29Db25uZWN0aW9uID0ge1xyXG4gIGlzQ29ubmVjdGVkOiAwLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY29ubmVjdCA9IGFzeW5jICgpID0+IHtcclxuICBpZiAobW9uZ29Db25uZWN0aW9uLmlzQ29ubmVjdGVkKSB7XHJcbiAgICBjb25zb2xlLmxvZygnWWEgZXN0YWJhbW9zIGNvbmVjdGFkb3MnKVxyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgbW9uZ29Db25uZWN0aW9uLmlzQ29ubmVjdGVkID0gbW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZVxyXG5cclxuICAgIGlmIChtb25nb0Nvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPT09IDEpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1VzYW5kbyBjb25leGnDs24gYW50ZXJpb3InKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBhd2FpdCBtb25nb29zZS5kaXNjb25uZWN0KClcclxuICB9XHJcblxyXG4gIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09fVVJMIHx8ICcnKVxyXG4gIG1vbmdvQ29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9IDFcclxuICBjb25zb2xlLmxvZygnQ29uZWN0YWRvIGEgTW9uZ29EQjonLCBwcm9jZXNzLmVudi5NT05HT19VUkwpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkaXNjb25uZWN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JykgcmV0dXJuXHJcblxyXG4gIGlmIChtb25nb0Nvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPT09IDApIHJldHVyblxyXG5cclxuICBhd2FpdCBtb25nb29zZS5kaXNjb25uZWN0KClcclxuICBtb25nb0Nvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSAwXHJcblxyXG4gIGNvbnNvbGUubG9nKCdEZXNjb25lY3RhZG8gZGUgTW9uZ29EQicpXHJcbn1cclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwibW9uZ29Db25uZWN0aW9uIiwiaXNDb25uZWN0ZWQiLCJjb25uZWN0IiwiY29uc29sZSIsImxvZyIsImNvbm5lY3Rpb25zIiwibGVuZ3RoIiwicmVhZHlTdGF0ZSIsImRpc2Nvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09fVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/database/db.ts\n");

/***/ }),

/***/ "(api)/./src/database/dbMessages.ts":
/*!************************************!*\
  !*** ./src/database/dbMessages.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMessage\": () => (/* binding */ createMessage),\n/* harmony export */   \"getAllMessages\": () => (/* binding */ getAllMessages)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"(api)/./src/database/index.ts\");\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models */ \"(api)/./src/models/index.ts\");\n\n\nconst getAllMessages = async ()=>{\n    await ___WEBPACK_IMPORTED_MODULE_0__.db.connect();\n    const allMessages = _models__WEBPACK_IMPORTED_MODULE_1__.Message.find().select(\"_id text createdAt\").lean();\n    await ___WEBPACK_IMPORTED_MODULE_0__.db.disconnect();\n    if (!allMessages) {\n        return null;\n    }\n    return allMessages;\n};\nconst createMessage = async (text)=>{\n    await ___WEBPACK_IMPORTED_MODULE_0__.db.connect();\n    const newMessage = new _models__WEBPACK_IMPORTED_MODULE_1__.Message({\n        text: text\n    });\n    await newMessage.save();\n    await ___WEBPACK_IMPORTED_MODULE_0__.db.disconnect();\n    return newMessage;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvZGF0YWJhc2UvZGJNZXNzYWdlcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXNCO0FBRWE7QUFFNUIsTUFBTUUsY0FBYyxHQUFHLFVBQXdDO0lBQ3BFLE1BQU1GLHlDQUFVLEVBQUU7SUFFbEIsTUFBTUksV0FBVyxHQUFHSCxpREFBWSxFQUFFLENBQUNLLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDQyxJQUFJLEVBQUU7SUFDdEUsTUFBTVAsNENBQWEsRUFBRTtJQUVyQixJQUFJLENBQUNJLFdBQVcsRUFBRTtRQUNoQixPQUFPLElBQUk7SUFDYixDQUFDO0lBRUQsT0FBT0EsV0FBVztBQUNwQixDQUFDO0FBRU0sTUFBTUssYUFBYSxHQUFHLE9BQU9DLElBQVksR0FBSztJQUNuRCxNQUFNVix5Q0FBVSxFQUFFO0lBRWxCLE1BQU1XLFVBQVUsR0FBRyxJQUFJViw0Q0FBTyxDQUFDO1FBQUVTLElBQUksRUFBRUEsSUFBSTtLQUFFLENBQUM7SUFFOUMsTUFBTUMsVUFBVSxDQUFDQyxJQUFJLEVBQUU7SUFDdkIsTUFBTVosNENBQWEsRUFBRTtJQUVyQixPQUFPVyxVQUFVO0FBQ25CLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZXhhbXBsZXMvbmV4dC1taW5pbWFsLy4vc3JjL2RhdGFiYXNlL2RiTWVzc2FnZXMudHM/M2EwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYiB9IGZyb20gJy4nXHJcbmltcG9ydCB7IElNZXNzYWdlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9tZXNzYWdlJ1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vbW9kZWxzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFsbE1lc3NhZ2VzID0gYXN5bmMgKCk6IFByb21pc2U8SU1lc3NhZ2VbXSB8IG51bGw+ID0+IHtcclxuICBhd2FpdCBkYi5jb25uZWN0KClcclxuXHJcbiAgY29uc3QgYWxsTWVzc2FnZXMgPSBNZXNzYWdlLmZpbmQoKS5zZWxlY3QoJ19pZCB0ZXh0IGNyZWF0ZWRBdCcpLmxlYW4oKVxyXG4gIGF3YWl0IGRiLmRpc2Nvbm5lY3QoKVxyXG5cclxuICBpZiAoIWFsbE1lc3NhZ2VzKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGFsbE1lc3NhZ2VzXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVNZXNzYWdlID0gYXN5bmMgKHRleHQ6IHN0cmluZykgPT4ge1xyXG4gIGF3YWl0IGRiLmNvbm5lY3QoKVxyXG5cclxuICBjb25zdCBuZXdNZXNzYWdlID0gbmV3IE1lc3NhZ2UoeyB0ZXh0OiB0ZXh0IH0pXHJcblxyXG4gIGF3YWl0IG5ld01lc3NhZ2Uuc2F2ZSgpXHJcbiAgYXdhaXQgZGIuZGlzY29ubmVjdCgpXHJcblxyXG4gIHJldHVybiBuZXdNZXNzYWdlXHJcbn1cclxuIl0sIm5hbWVzIjpbImRiIiwiTWVzc2FnZSIsImdldEFsbE1lc3NhZ2VzIiwiY29ubmVjdCIsImFsbE1lc3NhZ2VzIiwiZmluZCIsInNlbGVjdCIsImxlYW4iLCJkaXNjb25uZWN0IiwiY3JlYXRlTWVzc2FnZSIsInRleHQiLCJuZXdNZXNzYWdlIiwic2F2ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/database/dbMessages.ts\n");

/***/ }),

/***/ "(api)/./src/database/index.ts":
/*!*******************************!*\
  !*** ./src/database/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"db\": () => (/* reexport module object */ _db__WEBPACK_IMPORTED_MODULE_0__),\n/* harmony export */   \"dbMessages\": () => (/* reexport module object */ _dbMessages__WEBPACK_IMPORTED_MODULE_1__),\n/* harmony export */   \"seedData\": () => (/* reexport module object */ _seed_data__WEBPACK_IMPORTED_MODULE_2__)\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db */ \"(api)/./src/database/db.ts\");\n/* harmony import */ var _dbMessages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dbMessages */ \"(api)/./src/database/dbMessages.ts\");\n/* harmony import */ var _seed_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seed-data */ \"(api)/./src/database/seed-data.ts\");\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvZGF0YWJhc2UvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTBCO0FBQ2dCO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZXhhbXBsZXMvbmV4dC1taW5pbWFsLy4vc3JjL2RhdGFiYXNlL2luZGV4LnRzPzlmN2IiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogYXMgZGIgZnJvbSAnLi9kYidcclxuZXhwb3J0ICogYXMgZGJNZXNzYWdlcyBmcm9tICcuL2RiTWVzc2FnZXMnXHJcbmV4cG9ydCAqIGFzIHNlZWREYXRhIGZyb20gJy4vc2VlZC1kYXRhJ1xyXG4iXSwibmFtZXMiOlsiZGIiLCJkYk1lc3NhZ2VzIiwic2VlZERhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/database/index.ts\n");

/***/ }),

/***/ "(api)/./src/database/seed-data.ts":
/*!***********************************!*\
  !*** ./src/database/seed-data.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initialData\": () => (/* binding */ initialData)\n/* harmony export */ });\nconst initialData = [\n    {\n        text: \"Hola mundo\"\n    },\n    {\n        text: \"Hello world\"\n    }, \n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvZGF0YWJhc2Uvc2VlZC1kYXRhLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFFTyxNQUFNQSxXQUFXLEdBQWU7SUFDckM7UUFDRUMsSUFBSSxFQUFFLFlBQVk7S0FDbkI7SUFDRDtRQUNFQSxJQUFJLEVBQUUsYUFBYTtLQUNwQjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGV4YW1wbGVzL25leHQtbWluaW1hbC8uL3NyYy9kYXRhYmFzZS9zZWVkLWRhdGEudHM/ZGRkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJTWVzc2FnZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvbWVzc2FnZSdcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsRGF0YTogSU1lc3NhZ2VbXSA9IFtcclxuICB7XHJcbiAgICB0ZXh0OiAnSG9sYSBtdW5kbycsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0ZXh0OiAnSGVsbG8gd29ybGQnLFxyXG4gIH0sXHJcbl1cclxuIl0sIm5hbWVzIjpbImluaXRpYWxEYXRhIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/database/seed-data.ts\n");

/***/ }),

/***/ "(api)/./src/models/Message.ts":
/*!*******************************!*\
  !*** ./src/models/Message.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst messageSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    text: {\n        type: String,\n        required: true\n    }\n}, {\n    timestamps: true\n});\nconst Message = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Message) || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"Message\", messageSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Message);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbW9kZWxzL01lc3NhZ2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlEO0FBR3pELE1BQU1HLGFBQWEsR0FBRyxJQUFJRiw0Q0FBTSxDQUM5QjtJQUNFRyxJQUFJLEVBQUU7UUFBRUMsSUFBSSxFQUFFQyxNQUFNO1FBQUVDLFFBQVEsRUFBRSxJQUFJO0tBQUU7Q0FDdkMsRUFDRDtJQUNFQyxVQUFVLEVBQUUsSUFBSTtDQUNqQixDQUNGO0FBRUQsTUFBTUMsT0FBTyxHQUNYVCxnRUFBdUIsSUFBSUUsK0NBQUssQ0FBQyxTQUFTLEVBQUVDLGFBQWEsQ0FBQztBQUU1RCxpRUFBZU0sT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL0BleGFtcGxlcy9uZXh0LW1pbmltYWwvLi9zcmMvbW9kZWxzL01lc3NhZ2UudHM/ZDI3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hLCBtb2RlbCwgTW9kZWwgfSBmcm9tICdtb25nb29zZSdcclxuaW1wb3J0IHsgSU1lc3NhZ2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL21lc3NhZ2UnXHJcblxyXG5jb25zdCBtZXNzYWdlU2NoZW1hID0gbmV3IFNjaGVtYShcclxuICB7XHJcbiAgICB0ZXh0OiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpbWVzdGFtcHM6IHRydWUsXHJcbiAgfVxyXG4pXHJcblxyXG5jb25zdCBNZXNzYWdlOiBNb2RlbDxJTWVzc2FnZT4gPVxyXG4gIG1vbmdvb3NlLm1vZGVscy5NZXNzYWdlIHx8IG1vZGVsKCdNZXNzYWdlJywgbWVzc2FnZVNjaGVtYSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiU2NoZW1hIiwibW9kZWwiLCJtZXNzYWdlU2NoZW1hIiwidGV4dCIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInRpbWVzdGFtcHMiLCJNZXNzYWdlIiwibW9kZWxzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/models/Message.ts\n");

/***/ }),

/***/ "(api)/./src/models/index.ts":
/*!*****************************!*\
  !*** ./src/models/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Message\": () => (/* reexport safe */ _Message__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Message */ \"(api)/./src/models/Message.ts\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbW9kZWxzL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQThDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGV4YW1wbGVzL25leHQtbWluaW1hbC8uL3NyYy9tb2RlbHMvaW5kZXgudHM/ZmE3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBkZWZhdWx0IGFzIE1lc3NhZ2UgfSBmcm9tICcuL01lc3NhZ2UnXHJcbiJdLCJuYW1lcyI6WyJkZWZhdWx0IiwiTWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/models/index.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/trpc/[trpc].ts":
/*!**************************************!*\
  !*** ./src/pages/api/trpc/[trpc].ts ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _trpc_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trpc/server */ \"@trpc/server\");\n/* harmony import */ var _trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @trpc/server/adapters/next */ \"@trpc/server/adapters/next\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zod */ \"zod\");\n/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../database */ \"(api)/./src/database/index.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_trpc_server__WEBPACK_IMPORTED_MODULE_0__, _trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_1__, zod__WEBPACK_IMPORTED_MODULE_2__]);\n([_trpc_server__WEBPACK_IMPORTED_MODULE_0__, _trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_1__, zod__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n/**\r\n * This is the API-handler of your app that contains all your API routes.\r\n * On a bigger app, you will probably want to split this file up into multiple files.\r\n */ \n\n\n\nconst t = _trpc_server__WEBPACK_IMPORTED_MODULE_0__.initTRPC.create();\nconst appRouter = t.router({\n    addMessage: t.procedure.input(zod__WEBPACK_IMPORTED_MODULE_2__.z.object({\n        text: zod__WEBPACK_IMPORTED_MODULE_2__.z.string()\n    })).mutation(async (req)=>{\n        const message = {\n            text: req.input.text\n        };\n        const newMessage = await _database__WEBPACK_IMPORTED_MODULE_3__.dbMessages.createMessage(message.text);\n        return newMessage;\n    }),\n    getMessages: t.procedure.query(async ()=>{\n        const allMessages = await _database__WEBPACK_IMPORTED_MODULE_3__.dbMessages.getAllMessages();\n        return {\n            messages: allMessages\n        };\n    })\n});\n// export API handler\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_1__.createNextApiHandler({\n    router: appRouter,\n    createContext: ()=>({})\n}));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3RycGMvW3RycGNdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFLQSxZQUFZQyxRQUFRLE1BQU0sNEJBQTRCO0FBRXRELFNBQVNDLENBQUMsUUFBUSxLQUFLO0FBQ3ZCLElBQTJCO0FBRUE7QUFNUEs7QUFFQTtRQUFFSyxFQUFBQSx5REFBZ0I7S0FBRSxDQUFDLENBQUMsQ0FDckNFLFFBQVEsQ0FBQyxPQUFPQyxHQUFHO1FBQ2xCLE1BQU1DLE9BQU8sR0FBWTtZQUN2QkosRUFBQUEseUNBQVVGO1NBQ1g7UUFDRCxNQUFNTyxVQUFVO1FBQ2hCLE9BQU9BLFVBQVU7SUFDbkIsQ0FBQyxDQUFDO0lBQ0pFLFdBQVcsRUFBRWYsQ0FBQyxDQUFDSyxTQUFTLENBQUNXLElBQUFBLCtEQUFrQjtRQUN6QyxNQUFNQyxXQUFXOztZQUVSRSxRQUFRLEVBQUVGLFdBQVc7U0FBRTtJQUNsQyxDQUFDLENBQUM7Q0FVSCxDQUFDO0FBTUY7QUFDQTs7SUFFRUksYUFBYSxFQUFFO2lFQUNmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGV4YW1wbGVzL25leHQtbWluaW1hbC8uL3NyYy9wYWdlcy9hcGkvdHJwYy9bdHJwY10udHM/Y2U1MCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogVGhpcyBpcyB0aGUgQVBJLWhhbmRsZXIgb2YgeW91ciBhcHAgdGhhdCBjb250YWlucyBhbGwgeW91ciBBUEkgcm91dGVzLlxyXG4gKiBPbiBhIGJpZ2dlciBhcHAsIHlvdSB3aWxsIHByb2JhYmx5IHdhbnQgdG8gc3BsaXQgdGhpcyBmaWxlIHVwIGludG8gbXVsdGlwbGUgZmlsZXMuXHJcbiAqL1xyXG5pbXBvcnQgeyBpbml0VFJQQyB9IGZyb20gJ0B0cnBjL3NlcnZlcidcclxuaW1wb3J0ICogYXMgdHJwY05leHQgZnJvbSAnQHRycGMvc2VydmVyL2FkYXB0ZXJzL25leHQnXHJcblxyXG5pbXBvcnQgeyB6IH0gZnJvbSAnem9kJ1xyXG5pbXBvcnQgeyBkYk1lc3NhZ2VzIH0gZnJvbSAnLi4vLi4vLi4vZGF0YWJhc2UnXHJcblxyXG5jb25zdCB0ID0gaW5pdFRSUEMuY3JlYXRlKClcclxuXHJcbmludGVyZmFjZSBNZXNzYWdlIHtcclxuICB0ZXh0OiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgYXBwUm91dGVyID0gdC5yb3V0ZXIoe1xyXG4gIGFkZE1lc3NhZ2U6IHQucHJvY2VkdXJlXHJcbiAgICAuaW5wdXQoei5vYmplY3QoeyB0ZXh0OiB6LnN0cmluZygpIH0pKVxyXG4gICAgLm11dGF0aW9uKGFzeW5jIChyZXEpID0+IHtcclxuICAgICAgY29uc3QgbWVzc2FnZTogTWVzc2FnZSA9IHtcclxuICAgICAgICB0ZXh0OiByZXEuaW5wdXQudGV4dCxcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBuZXdNZXNzYWdlID0gYXdhaXQgZGJNZXNzYWdlcy5jcmVhdGVNZXNzYWdlKG1lc3NhZ2UudGV4dClcclxuICAgICAgcmV0dXJuIG5ld01lc3NhZ2VcclxuICAgIH0pLFxyXG4gIGdldE1lc3NhZ2VzOiB0LnByb2NlZHVyZS5xdWVyeShhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBhbGxNZXNzYWdlcyA9IGF3YWl0IGRiTWVzc2FnZXMuZ2V0QWxsTWVzc2FnZXMoKVxyXG5cclxuICAgIHJldHVybiB7IG1lc3NhZ2VzOiBhbGxNZXNzYWdlcyB9XHJcbiAgfSksXHJcbiAgLy8gcG9zdE1lc3NhZ2U6IHQucHJvY2VkdXJlLmlucHV0KFxyXG4gIC8vICAgei5vYmplY3Qoe1xyXG4gIC8vICAgICB0ZXh0OiB6LnN0cmluZygpLm51bGxpc2goKSxcclxuICAvLyAgIH0pXHJcbiAgLy8gKSxcclxuICAvLyDwn5KhIFRpcDogVHJ5IGFkZGluZyBhIG5ldyBwcm9jZWR1cmUgaGVyZSBhbmQgc2VlIGlmIHlvdSBjYW4gdXNlIGl0IGluIHRoZSBjbGllbnQhXHJcbiAgLy8gZ2V0VXNlcjogdC5wcm9jZWR1cmUucXVlcnkoKCkgPT4ge1xyXG4gIC8vICAgcmV0dXJuIHsgaWQ6ICcxJywgbmFtZTogJ2JvYicgfTtcclxuICAvLyB9KSxcclxufSlcclxuXHJcbi8vIGV4cG9ydCBvbmx5IHRoZSB0eXBlIGRlZmluaXRpb24gb2YgdGhlIEFQSVxyXG4vLyBOb25lIG9mIHRoZSBhY3R1YWwgaW1wbGVtZW50YXRpb24gaXMgZXhwb3NlZCB0byB0aGUgY2xpZW50XHJcbmV4cG9ydCB0eXBlIEFwcFJvdXRlciA9IHR5cGVvZiBhcHBSb3V0ZXJcclxuXHJcbi8vIGV4cG9ydCBBUEkgaGFuZGxlclxyXG5leHBvcnQgZGVmYXVsdCB0cnBjTmV4dC5jcmVhdGVOZXh0QXBpSGFuZGxlcih7XHJcbiAgcm91dGVyOiBhcHBSb3V0ZXIsXHJcbiAgY3JlYXRlQ29udGV4dDogKCkgPT4gKHt9KSxcclxufSlcclxuIl0sIm5hbWVzIjpbImluaXRUUlBDIiwidHJwY05leHQiLCJ6IiwiZGJNZXNzYWdlcyIsInQiLCJjcmVhdGUiLCJhcHBSb3V0ZXIiLCJyb3V0ZXIiLCJhZGRNZXNzYWdlIiwicHJvY2VkdXJlIiwiaW5wdXQiLCJvYmplY3QiLCJ0ZXh0Iiwic3RyaW5nIiwibXV0YXRpb24iLCJyZXEiLCJtZXNzYWdlIiwibmV3TWVzc2FnZSIsImNyZWF0ZU1lc3NhZ2UiLCJnZXRNZXNzYWdlcyIsInF1ZXJ5IiwiYWxsTWVzc2FnZXMiLCJnZXRBbGxNZXNzYWdlcyIsIm1lc3NhZ2VzIiwiY3JlYXRlTmV4dEFwaUhhbmRsZXIiLCJjcmVhdGVDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/trpc/[trpc].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/trpc/[trpc].ts"));
module.exports = __webpack_exports__;

})();