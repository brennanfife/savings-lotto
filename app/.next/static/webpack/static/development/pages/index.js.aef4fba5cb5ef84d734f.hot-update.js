webpackHotUpdate("static/development/pages/index.js",{

/***/ "./drizzleOptions.js":
/*!***************************!*\
  !*** ./drizzleOptions.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contracts_SimpleStorage_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contracts/SimpleStorage.json */ "./contracts/SimpleStorage.json");
var _contracts_SimpleStorage_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./contracts/SimpleStorage.json */ "./contracts/SimpleStorage.json", 1);
/* harmony import */ var _contracts_ComplexStorage_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contracts/ComplexStorage.json */ "./contracts/ComplexStorage.json");
var _contracts_ComplexStorage_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./contracts/ComplexStorage.json */ "./contracts/ComplexStorage.json", 1);
/* harmony import */ var _contracts_TutorialToken_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contracts/TutorialToken.json */ "./contracts/TutorialToken.json");
var _contracts_TutorialToken_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./contracts/TutorialToken.json */ "./contracts/TutorialToken.json", 1);
// import Web3 from "web3";
// import SimpleStorage from "./contracts/SimpleStorage.json";
// import ComplexStorage from "./contracts/ComplexStorage.json";
// import TutorialToken from "./contracts/TutorialToken.json";
// const options = {
//   web3: {
//     block: false,
//     customProvider: new Web3("ws://localhost:7545"),
//   },
//   contracts: [SimpleStorage, ComplexStorage, TutorialToken],
//   events: {
//     SimpleStorage: ["StorageSet"],
//   },
//   polls: {
//     accounts: 1500,
//   },
// };
// export default options;



var options = {
  web3: {
    block: false,
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:7545"
    }
  },
  contracts: [_contracts_SimpleStorage_json__WEBPACK_IMPORTED_MODULE_0__, _contracts_ComplexStorage_json__WEBPACK_IMPORTED_MODULE_1__, _contracts_TutorialToken_json__WEBPACK_IMPORTED_MODULE_2__],
  events: {
    SimpleStorage: ["StorageSet"]
  },
  polls: {
    accounts: 1500
  }
};
/* harmony default export */ __webpack_exports__["default"] = (options);

/***/ })

})
//# sourceMappingURL=index.js.aef4fba5cb5ef84d734f.hot-update.js.map