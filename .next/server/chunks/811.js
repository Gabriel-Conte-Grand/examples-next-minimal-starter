"use strict";
exports.id = 811;
exports.ids = [811];
exports.modules = {

/***/ 5811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "db": () => (/* reexport */ db_namespaceObject),
  "U": () => (/* reexport */ dbMessages_namespaceObject),
  "W": () => (/* reexport */ seed_data_namespaceObject)
});

// NAMESPACE OBJECT: ./src/database/db.ts
var db_namespaceObject = {};
__webpack_require__.r(db_namespaceObject);
__webpack_require__.d(db_namespaceObject, {
  "connect": () => (connect),
  "disconnect": () => (disconnect)
});

// NAMESPACE OBJECT: ./src/database/dbMessages.ts
var dbMessages_namespaceObject = {};
__webpack_require__.r(dbMessages_namespaceObject);
__webpack_require__.d(dbMessages_namespaceObject, {
  "createMessage": () => (createMessage),
  "getAllMessages": () => (getAllMessages)
});

// NAMESPACE OBJECT: ./src/database/seed-data.ts
var seed_data_namespaceObject = {};
__webpack_require__.r(seed_data_namespaceObject);
__webpack_require__.d(seed_data_namespaceObject, {
  "Q": () => (initialData)
});

// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./src/database/db.ts

/**
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */ const mongoConnection = {
    isConnected: 0
};
const connect = async ()=>{
    if (mongoConnection.isConnected) {
        console.log("Ya estabamos conectados");
        return;
    }
    if ((external_mongoose_default()).connections.length > 0) {
        mongoConnection.isConnected = (external_mongoose_default()).connections[0].readyState;
        if (mongoConnection.isConnected === 1) {
            console.log("Usando conexi\xf3n anterior");
            return;
        }
        await external_mongoose_default().disconnect();
    }
    await external_mongoose_default().connect(process.env.MONGO_URL || "");
    mongoConnection.isConnected = 1;
    console.log("Conectado a MongoDB:", process.env.MONGO_URL);
};
const disconnect = async ()=>{
    if (false) {}
    if (mongoConnection.isConnected === 0) return;
    await external_mongoose_default().disconnect();
    mongoConnection.isConnected = 0;
    console.log("Desconectado de MongoDB");
};

// EXTERNAL MODULE: ./src/models/index.ts + 1 modules
var models = __webpack_require__(4389);
;// CONCATENATED MODULE: ./src/database/dbMessages.ts


const getAllMessages = async ()=>{
    await connect();
    const allMessages = models/* Message.find */.v.find().select("_id text createdAt").lean();
    await disconnect();
    if (!allMessages) {
        return null;
    }
    return allMessages;
};
const createMessage = async (text)=>{
    await connect();
    const newMessage = new models/* Message */.v({
        text: text
    });
    await newMessage.save();
    await disconnect();
    return newMessage;
};

;// CONCATENATED MODULE: ./src/database/seed-data.ts
const initialData = [
    {
        text: "Hola mundo"
    },
    {
        text: "Hello world"
    }, 
];

;// CONCATENATED MODULE: ./src/database/index.ts





/***/ }),

/***/ 4389:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "v": () => (/* reexport */ models_Message)
});

// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./src/models/Message.ts

const messageSchema = new external_mongoose_.Schema({
    text: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
const Message = (external_mongoose_default()).models.Message || (0,external_mongoose_.model)("Message", messageSchema);
/* harmony default export */ const models_Message = (Message);

;// CONCATENATED MODULE: ./src/models/index.ts



/***/ })

};
;