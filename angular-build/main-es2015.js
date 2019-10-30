(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  about works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n      \n\n<div>\n    <h1>ACCOUNT</h1>\n\n        <form  (ngSubmit)=\"onSubmit()\" #accountForm=\"ngForm\" >\n        <label>First Name:\n            <input placeholder={{user.firstName}} name=\"firstName\" type=\"text\" [(ngModel)]=\"userAccountInput.firstName\" />\n        </label>\n\n        <label>Last Name:\n                <input placeholder={{user.lastName}} name=\"lastName\" type=\"text\" [(ngModel)]=\"userAccountInput.lastName\" />\n        </label>\n\n        <label>Birthday:\n                <p>need a calendar</p>\n                <input placeholder={{user.birthday}}/>\n        </label>\n        <button type=\"submit\">Submit</button>\n    </form>\n\n\n    <div>\n        <h3>Change Password</h3> \n        <form (ngSubmit)=\"attemptPasswordChange()\" >\n            <label>Current Password\n                <input type=\"password\" name=\"password\" [(ngModel)]=\"passwordChangeObject.password\" />\n            </label>\n            <label>New Password\n                <input type=\"password\" name=\"passwordConfirm\" [(ngModel)]=\"passwordChangeObject.newPW\">\n            </label>\n            <button type=\"submit\">Change</button>\n        </form>   \n    </div>\n\n    <div *ngIf=\"displayModal == true\">\n        <h3>Do you really want to update?</h3>\n        <h5>If so, you'll need to enter your password</h5>\n        <form (ngSubmit)=\"submitPasswordConfirm()\">\n            <label>Password\n                <input type=\"password\" name=\"password\" [(ngModel)]=\"confirmationInput.password\"/>\n            </label>\n            <label>Confirm Password\n                <input type=\"password\" name=\"confirm\" [(ngModel)]=\"confirmationInput.confirm\"/>\n            </label> \n            <button type=\"submit\">Meow!</button>           \n        </form>\n    </div>\n\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<h1>this is the main app</h1>\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cat-card/cat-card.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cat-card/cat-card.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"catCard\">\n  <button (click)=\"placeCatInKennel()\" [disabled]=\"catData.status !== 'adoptable'\" >Place in wish(ker) list</button>\n\n  <h1>{{catData.name}}</h1>\n  <p>{{catData.description}}</p>\n  <img [src]=\"catData.photos.length > 0 ?   catData.photos[0].small :''  \" />\n    <ul>\n      <li>BREED: {{catData.breeds.primary}}</li>\n      <li>\n        COLOR: {{catData.colors.primary}}\n      </li>\n      <li>\n        AGE: {{catData.age}}\n      </li>\n      <li>\n        GENDER: {{catData.gender}}\n      </li>\n     \n    </ul>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cat-results/cat-results.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cat-results/cat-results.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <div *ngFor=\"let cat of catResults\">\n    <app-cat-card [catData]=\"cat\"></app-cat-card>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cat/cat.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cat/cat.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  cat works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul>\n  <a id=\"aboutLink\" routerLink=\"/about\">About Page</a>\n  <a  id=\"accountLink\"  routerLink=\"/account\">Account</a>\n  <a id=\"loginLink\"  routerLink=\"/login\">Login</a>\n  <a  id=\"kennelLink\" routerLink=\"/kennel\">Kennel</a>\n  <a  id=\"searchLink\" routerLink=\"/search\">Search</a>\n  <a  id=\"signupLink\" routerLink=\"/signup\">Sign Up</a>\n  <a  id=\"logoutLink\" (click)=\"logOut()\">Log Out</a>\n</ul>\n\n\n<p>\n  header works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/kennel-card/kennel-card.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/kennel-card/kennel-card.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"kennelCard\">\n  <button (click)=\"removeCat()\">X</button>\n  <h2>{{catData.name}}</h2>\n  <img [src]=\"catData.photos && catData.photos.length > 0 ? catData.photos[0].small : '' \"/>\n  <h4>BREED: {{catData.breeds && catData.breeds.primary !== undefined ? catData.breeds.primary : \"N/A\"}}</h4>\n  <h4>AGE: {{catData.age}}</h4>\n  <h4>GENDER: {{catData.gender}}</h4>\n  <h4>COLOR: {{ catData.colors && catData.colors.primary !== undefined ? catData.colors.primary : \"N/A\"}}</h4>\n  <h4>COAT: {{catData.coat}}</h4>\n  <h3>\n    {{catData.status == \"adoptable\" ? \"Available to adopt!\" : \"No longer available\"}}\n  </h3>\n  <p>{{catData.description}}</p>\n\n  \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/kennel/kennel.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/kennel/kennel.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let cat of kennelCats\">\n  <app-kennel-card [catData]=\"cat\" ></app-kennel-card>\n</div>\n<div *ngIf=\"kennelCats.length == 0\">\n  <h3>Oh dear, no cats here!</h3>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form (ngSubmit)=\"onSubmit()\" #loginForm=\"ngForm\">\n  <label>Username:\n    <input placeholder=\"Enter your username\" name=\"username\" type=\"text\" [(ngModel)]=\"userCredentials.username\" required/>\n  </label>\n  <label>Password:\n    <input type=\"password\" name=\"password\" [(ngModel)]=\"userCredentials.password\" required>\n  </label>\n  <button type=\"submit\" [disabled]=\"loginFormIsDisabled\">LOGIN</button>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pageNotFound/pageNotFound.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pageNotFound/pageNotFound.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  pageNotFound works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"queryForm\"  >\n<h2>Coats</h2>\n<select placeholder=\" \"  formControlName=\"coat\">\n    <option value=\"\">==ANY==</option>\n    <option *ngFor=\"let coat of catCoats | async\" value={{coat}} >\n      {{coat}}\n    </option>\n  </select>\n\n<h2>Gender</h2>\n<select placeholder=\" \" formControlName=\"gender\">\n    <option value=\"\">==ANY==</option>\n    <option *ngFor=\"let gender of catGenders | async\" value={{gender}}>\n      {{gender}}\n    </option>\n  </select>\n\n<h2>Age</h2>\n<select placeholder=\" \" formControlName=\"age\">\n    <option value=\"\">==ANY==</option>\n    <option *ngFor=\"let age of catAges \" value={{age}}>\n      {{age}}\n    </option>\n  </select>\n\n<h2>Breed</h2>\n<select placeholder=\" \" formControlName=\"breed\">\n    <option value=\"\">==ANY==</option>\n  <option *ngFor=\"let breed of catBreeds | async\" value={{breed}}>\n    {{breed}}\n  </option>\n</select>\n\n<h2>Color</h2>\n<select formControlName=\"color\">\n  <option value=\"\">==ANY==</option>\n  <option *ngFor=\"let color of catColors | async\" value={{color}}>\n    {{color}}\n  </option>\n</select>\n<button type=\"submit\">SEEK</button>\n\n</form>\n<!-- <div>\n  <li *ngFor=\"let cat of catResults\">\n    {{cat.name}}\n  </li>\n</div> -->\n\n<app-cat-results [catResults]=\"catResults\" ></app-cat-results>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form (ngSubmit)=\"onSubmit()\" #signupForm=\"ngForm\">\n  <label id=\"usernameLabel\">Username:\n    <input id=\"usernameInput\"  placeholder=\"Enter your username\" name=\"username\" [(ngModel)]=\"model.username\" type=\"text\" required/>\n  </label>\n  <label id=\"passwordLabel\">Password:\n    <input  id=\"passwordInput\" type=\"password\" name=\"password\" [(ngModel)]=\"model.password\" placeholder=\"Enter your password\" required/>\n  </label>\n  <label id=\"retypePasswordLabel\">Re-Type Password:\n    <input id=\"confirmInput\" placeholder=\"Re-enter your password\" type=\"password\" name=\"passwordConfirm\" [(ngModel)]=\"model.passwordConfirm\" required/>\n  </label>\n  <label id=\"firstNameLabel\">First Name:\n    <input  id=\"firstNameInput\" placeholder=\"Enter your first name\" type=\"text\" name=\"firstName\" [(ngModel)]=\"model.firstName\"  required />\n  </label>\n  <label id=\"lastNameLabel\">Last Name:\n    <input id=\"lastNameInput\"  placeholder=\"Enter your last name\" type=\"text\" name=\"lastName\" [(ngModel)]=\"model.lastName\"  required />\n  </label>\n  <label id=\"birthdayLabel\">Birthday:\n    <input id=\"birthdayInput\" placeholder=\"When's your birthday?\" type=\"text\" [(ngModel)]=\"model.birthday\"  name=\"birthday\">\n  </label>\n  <button  id=\"signupSubmitButton\" type=\"submit\" [disabled]=\"loginFormIsDisabled\">LOGIN</button>\n</form>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/account/account.component.css":
/*!***********************************************!*\
  !*** ./src/app/account/account.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/account/account.component.ts":
/*!**********************************************!*\
  !*** ./src/app/account/account.component.ts ***!
  \**********************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/fesm2015/angular-redux-store.js");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");




let AccountComponent = class AccountComponent {
    constructor(ngRedux, dbService) {
        this.ngRedux = ngRedux;
        this.dbService = dbService;
        this.userAccountInput = {
            firstName: '',
            lastName: '',
            birthday: '',
            username: ""
        };
        this.confirmationInput = {
            password: '',
            confirm: ''
        };
        this.passwordChangeObject = {
            password: '',
            newPW: ''
        };
        this.displayModal = false;
    }
    ngOnInit() {
        console.log(this.user, this.lastUpdate, this.userAccountInput);
        this.user$.subscribe(user => this.user = user);
    }
    attemptAccountUpdate() {
        console.log('Here is where we attempt to update the account');
        console.log(this.userAccountInput, this.confirmationInput);
        console.log(this.user.username);
        console.log('be sure to add username to this user object');
        this.dbService.attemptAccountUpdateDB(this.user.username, this.userAccountInput, this.confirmationInput);
    }
    onSubmit() {
        this.displayModal = true;
        console.log(this.userAccountInput);
    }
    submitPasswordConfirm() {
        console.log(this.confirmationInput);
        this.attemptAccountUpdate();
    }
    attemptPasswordChange() {
        console.log(this.passwordChangeObject);
        this.dbService.attemptPasswordUpdate(this.user.username, this.passwordChangeObject);
    }
};
AccountComponent.ctorParameters = () => [
    { type: _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["NgRedux"] },
    { type: _database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["select"])()
], AccountComponent.prototype, "user$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["select"])()
], AccountComponent.prototype, "lastUpdate", void 0);
AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./account.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./account.component.css */ "./src/app/account/account.component.css")).default]
    })
], AccountComponent);



/***/ }),

/***/ "./src/app/actions.ts":
/*!****************************!*\
  !*** ./src/app/actions.ts ***!
  \****************************/
/*! exports provided: ADD_CAT, addCat, LOG_IN_SUCCESS, loginSuccess, LOG_OUT, logout, REFRESH_STATE, refreshState, logIn, signUp, refreshStateWithToken, SET_AUTH_TOKEN, setAuthToken, loadAuthToken, saveAuthToken, refreshAuthToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CAT", function() { return ADD_CAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCat", function() { return addCat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginSuccess", function() { return loginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT", function() { return LOG_OUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REFRESH_STATE", function() { return REFRESH_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refreshState", function() { return refreshState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logIn", function() { return logIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUp", function() { return signUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refreshStateWithToken", function() { return refreshStateWithToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_AUTH_TOKEN", function() { return SET_AUTH_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAuthToken", function() { return setAuthToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAuthToken", function() { return loadAuthToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveAuthToken", function() { return saveAuthToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refreshAuthToken", function() { return refreshAuthToken; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");



//Where the actions that will be read by our reducer live here :)
const ADD_CAT = 'ADD_CAT';
const addCat = (payload) => ({
    type: ADD_CAT,
    payload
});
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const loginSuccess = (payload) => ({
    type: LOG_IN_SUCCESS,
    payload
});
const LOG_OUT = "LOG_OUT";
const logout = () => ({
    type: LOG_OUT
});
const REFRESH_STATE = "REFRESH_STATE";
const refreshState = (payload) => ({
    type: REFRESH_STATE,
    payload
});
//thunk actions
//example:
// export const getDetailedEventInfo = (username, charID) => dispatch => {
//     axios({
//         url: `${API_BASE_URL}/api/characters/events`,
//         method: "POST",
//         headers: {
//             accept: "application/json"
//         },
//         data: {
//             charID,
//             username
//         }
//     })
//     .then(response => {
//         dispatch(refreshCharacters(response.data));
//         return response
//     })
//     .catch(err => {
//         console.error(err);
//     });
// }
//TODO: Managed to get the onSubmit() fn in signup.component.ts to accept taking a thunk
//by making it return the type of 'any' as seen below. Apparently this is not the best practice,
//but for now it let's me continue with development. Will research more later.
const logIn = (userCredentials) => dispatch => {
    console.log('dispatching LOG_IN');
    let { username, password } = userCredentials;
    return axios__WEBPACK_IMPORTED_MODULE_1___default()({
        url: `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_BASE_URL}/api/auth/login`,
        method: "POST",
        headers: {
            accept: "json/application"
        },
        data: {
            username,
            password
        }
    })
        .then(response => {
        console.log(response);
        dispatch(loginSuccess(response.data));
        dispatch(storeAuthInfo(response.data));
        localStorage.setItem('authToken', response.data.authToken);
    })
        .catch(err => console.error(err));
};
const signUp = (newUser) => dispatch => {
    console.log('dispatching signUp');
    let { username, password, passwordConfirm, firstName, lastName, birthday } = newUser;
    return axios__WEBPACK_IMPORTED_MODULE_1___default()({
        url: `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_BASE_URL}/api/users/signup`,
        method: "POST",
        headers: {
            accept: "application/json"
        },
        data: {
            username,
            password,
            passwordConfirm,
            firstName,
            lastName,
            birthday
        }
    })
        .then(response => {
        let payload = response.data;
        if (password === passwordConfirm) {
            payload.password = password;
        }
        dispatch(logIn(payload));
    })
        .catch(err => console.error(err));
};
const refreshStateWithToken = (token) => dispatch => {
    return axios__WEBPACK_IMPORTED_MODULE_1___default()({
        url: `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_BASE_URL}/api/users/refreshStateWithToken`,
        method: "POST",
        headers: {
            "accept": "application/json"
        },
        data: {
            token
        }
    })
        .then(response => {
        let payload = response.data;
        console.log(response);
        dispatch(refreshState(payload));
        dispatch(refreshAuthToken(token, response.data));
    })
        .catch(err => console.error(err));
};
const SET_AUTH_TOKEN = "SET_AUTH_TOKEN";
const setAuthToken = (payload) => ({
    type: SET_AUTH_TOKEN,
    payload
});
const storeAuthInfo = (data) => dispatch => {
    // const decodedTokenData = jwtDecode(authToken);
    dispatch(setAuthToken(data.authToken));
    //setAuthToken is to store the token in the state
    dispatch(refreshStateWithToken(data.authToken));
    // dispatch(refreshState(data.user));
    saveAuthToken(data.authToken);
};
const jwtDecode = (authToken) => {
    console.log(authToken);
    return axios__WEBPACK_IMPORTED_MODULE_1___default()({
        url: `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_BASE_URL}/api/auth/jwtDecode`,
        method: "POST",
        headers: {
            accept: "application/json"
        },
        data: authToken
    })
        .then(response => {
        console.log(response);
        return response;
    })
        .catch(err => console.error(err));
};
const loadAuthToken = () => {
    return localStorage.getItem('authToken');
};
const saveAuthToken = (authToken) => {
    localStorage.setItem('authToken', authToken);
};
const refreshAuthToken = (token, data) => dispatch => {
    return axios__WEBPACK_IMPORTED_MODULE_1___default()({
        url: `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_BASE_URL}/api/auth/refreshToken`,
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "accept": "application/json"
        },
        data: {
            username: data.username,
            token
        }
    })
        .then(response => {
        console.log(response);
    })
        .catch(err => {
        console.error(err);
        console.log(err);
    });
};
///Token Business


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _cat_cat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cat/cat.component */ "./src/app/cat/cat.component.ts");
/* harmony import */ var _kennel_kennel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kennel/kennel.component */ "./src/app/kennel/kennel.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _pageNotFound_pageNotFound_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pageNotFound/pageNotFound.component */ "./src/app/pageNotFound/pageNotFound.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");











const routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: 'account', component: _account_account_component__WEBPACK_IMPORTED_MODULE_4__["AccountComponent"] },
    { path: 'cat/:idOfCat', component: _cat_cat_component__WEBPACK_IMPORTED_MODULE_5__["CatComponent"] },
    { path: 'kennel', component: _kennel_kennel_component__WEBPACK_IMPORTED_MODULE_6__["KennelComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'search', component: _search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"] },
    { path: "**", component: _pageNotFound_pageNotFound_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/fesm2015/angular-redux-store.js");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./database.service */ "./src/app/database.service.ts");





let AppComponent = class AppComponent {
    constructor(ngRedux, dbService) {
        this.ngRedux = ngRedux;
        this.dbService = dbService;
        this.title = 'gdc2Client';
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
    }
    ngOnInit() {
        this.dbService.obtainAndRefreshTokenAndState();
        // // console.log(localStorage.getItem('authToken'));
        // // let token = localStorage.getItem('authToken') !== undefined ? localStorage.getItem('authToken') : '';
        // // token !== '' ?
        // // this.ngRedux.dispatch<any>(refreshStateWithToken(token))
        // // :
        // // ''
        // // let authToken = this.ngRedux.dispatch<any>(loadAuthToken());
        // let authToken = localStorage.getItem('authToken');
        // if(authToken) {
        //     //if we have an authToken, that means we have already signed in. So we want to 
        //     //get our user info back.
        //     this.ngRedux.dispatch<any>(refreshStateWithToken(authToken));
        //     this.user$.subscribe(user => {
        //       console.log(user);
        //       this.user = user
        //       console.log(this.user);
        //     });
        //     console.log(this.user);
        //     // const token = authToken;
        //     // console.log(token);
        //     // this.ngRedux.dispatch<any>(setAuthToken(token));
        //     // // this.ngRedux.dispatch<any>(refreshAuthToken(this.storeTokenFromObservable));
        //     this.ngRedux.dispatch<any>(refreshAuthToken(authToken, this.user))
        // }
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_redux_store__WEBPACK_IMPORTED_MODULE_3__["NgRedux"] },
    { type: _database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_3__["select"])()
], AppComponent.prototype, "user$", void 0);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/fesm2015/angular-redux-store.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _kennel_kennel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./kennel/kennel.component */ "./src/app/kennel/kennel.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _cat_cat_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cat/cat.component */ "./src/app/cat/cat.component.ts");
/* harmony import */ var _pageNotFound_pageNotFound_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pageNotFound/pageNotFound.component */ "./src/app/pageNotFound/pageNotFound.component.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./store */ "./src/app/store.ts");
/* harmony import */ var _cat_results_cat_results_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./cat-results/cat-results.component */ "./src/app/cat-results/cat-results.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _cat_card_cat_card_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./cat-card/cat-card.component */ "./src/app/cat-card/cat-card.component.ts");
/* harmony import */ var _kennel_card_kennel_card_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./kennel-card/kennel-card.component */ "./src/app/kennel-card/kennel-card.component.ts");























let AppModule = class AppModule {
    constructor(ngRedux, devTools) {
        this.ngRedux = ngRedux;
        this.devTools = devTools;
        let enhancers = [];
        if (devTools.isEnabled()) {
            enhancers = [...enhancers, devTools.enhancer()];
        }
        this.ngRedux.configureStore(_store__WEBPACK_IMPORTED_MODULE_17__["rootReducer"], _store__WEBPACK_IMPORTED_MODULE_17__["INITIAL_STATE"], [redux_thunk__WEBPACK_IMPORTED_MODULE_6__["default"]], enhancers);
    }
};
AppModule.ctorParameters = () => [
    { type: _angular_redux_store__WEBPACK_IMPORTED_MODULE_4__["NgRedux"] },
    { type: _angular_redux_store__WEBPACK_IMPORTED_MODULE_4__["DevToolsExtension"] }
];
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
            _account_account_component__WEBPACK_IMPORTED_MODULE_11__["AccountComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
            _kennel_kennel_component__WEBPACK_IMPORTED_MODULE_13__["KennelComponent"],
            _search_search_component__WEBPACK_IMPORTED_MODULE_14__["SearchComponent"],
            _cat_cat_component__WEBPACK_IMPORTED_MODULE_15__["CatComponent"],
            _pageNotFound_pageNotFound_component__WEBPACK_IMPORTED_MODULE_16__["PageNotFoundComponent"],
            _cat_results_cat_results_component__WEBPACK_IMPORTED_MODULE_18__["CatResultsComponent"],
            _signup_signup_component__WEBPACK_IMPORTED_MODULE_19__["SignupComponent"],
            _cat_card_cat_card_component__WEBPACK_IMPORTED_MODULE_20__["CatCardComponent"],
            _kennel_card_kennel_card_component__WEBPACK_IMPORTED_MODULE_21__["KennelCardComponent"],
            _cat_cat_component__WEBPACK_IMPORTED_MODULE_15__["CatComponent"]
        ],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_redux_store__WEBPACK_IMPORTED_MODULE_4__["NgReduxModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]
        ]
    })
], AppModule);



/***/ }),

/***/ "./src/app/cat-card/cat-card.component.css":
/*!*************************************************!*\
  !*** ./src/app/cat-card/cat-card.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".catCard {\n    border: solid black 3px;\n    margin: 1vw 2vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0LWNhcmQvY2F0LWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY2F0LWNhcmQvY2F0LWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXRDYXJkIHtcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDNweDtcbiAgICBtYXJnaW46IDF2dyAydnc7XG59Il19 */");

/***/ }),

/***/ "./src/app/cat-card/cat-card.component.ts":
/*!************************************************!*\
  !*** ./src/app/cat-card/cat-card.component.ts ***!
  \************************************************/
/*! exports provided: CatCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatCardComponent", function() { return CatCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/fesm2015/angular-redux-store.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ "./src/app/actions.ts");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");





let CatCardComponent = class CatCardComponent {
    constructor(ngRedux, dbService) {
        this.ngRedux = ngRedux;
        this.dbService = dbService;
    }
    ngOnInit() {
        this.user$.subscribe(user => this.user = user);
    }
    placeCatInKennel() {
        //We want to dispatch an action where we send this catData to our database
        //and put it in the cats array of our User model.
        this.dbService.addCatToDB(this.catData);
        this.ngRedux.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["addCat"])(this.catData));
    }
};
CatCardComponent.ctorParameters = () => [
    { type: _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["NgRedux"] },
    { type: _database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CatCardComponent.prototype, "catData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["select"])()
], CatCardComponent.prototype, "user$", void 0);
CatCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cat-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cat-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cat-card/cat-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cat-card.component.css */ "./src/app/cat-card/cat-card.component.css")).default]
    })
], CatCardComponent);



/***/ }),

/***/ "./src/app/cat-results/cat-results.component.css":
/*!*******************************************************!*\
  !*** ./src/app/cat-results/cat-results.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdC1yZXN1bHRzL2NhdC1yZXN1bHRzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/cat-results/cat-results.component.ts":
/*!******************************************************!*\
  !*** ./src/app/cat-results/cat-results.component.ts ***!
  \******************************************************/
/*! exports provided: CatResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatResultsComponent", function() { return CatResultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let CatResultsComponent = class CatResultsComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CatResultsComponent.prototype, "catResults", void 0);
CatResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cat-results',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cat-results.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cat-results/cat-results.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cat-results.component.css */ "./src/app/cat-results/cat-results.component.css")).default]
    })
], CatResultsComponent);



/***/ }),

/***/ "./src/app/cat/cat.component.css":
/*!***************************************!*\
  !*** ./src/app/cat/cat.component.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdC9jYXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/cat/cat.component.ts":
/*!**************************************!*\
  !*** ./src/app/cat/cat.component.ts ***!
  \**************************************/
/*! exports provided: CatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatComponent", function() { return CatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CatComponent = class CatComponent {
    constructor() { }
    ngOnInit() {
    }
};
CatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cat',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cat.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cat/cat.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cat.component.css */ "./src/app/cat/cat.component.css")).default]
    })
], CatComponent);



/***/ }),

/***/ "./src/app/database.service.ts":
/*!*************************************!*\
  !*** ./src/app/database.service.ts ***!
  \*************************************/
/*! exports provided: DatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseService", function() { return DatabaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/fesm2015/angular-redux-store.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actions */ "./src/app/actions.ts");







let DatabaseService = class DatabaseService {
    constructor(http, ngRedux) {
        this.http = http;
        this.ngRedux = ngRedux;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Accept": "application/json"
            })
        };
    }
    ngOnInit() {
        this.user$.subscribe(user => this.username = user.username);
    }
    refreshStateViaToken() {
        let authToken = localStorage.getItem('authToken');
        if (authToken) {
            //if we have an authToken, that means we have already signed in. So we want to 
            //get our user info back.
            this.ngRedux.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_6__["refreshStateWithToken"])(authToken));
        }
    }
    obtainAndRefreshTokenAndState() {
        let authToken = localStorage.getItem('authToken');
        if (authToken) {
            //if we have an authToken, that means we have already signed in. So we want to 
            //get our user info back.
            this.ngRedux.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_6__["refreshStateWithToken"])(authToken));
            this.user$.subscribe(user => {
                console.log(user);
                this.user = user;
                console.log(this.user);
            });
            console.log(this.user);
            // const token = authToken;
            // console.log(token);
            // this.ngRedux.dispatch<any>(setAuthToken(token));
            // // this.ngRedux.dispatch<any>(refreshAuthToken(this.storeTokenFromObservable));
            this.ngRedux.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_6__["refreshAuthToken"])(authToken, this.user));
        }
    }
    addCatToDB(cat) {
        this.user$.subscribe(user => this.username = user.username);
        console.log('addCatToDb runnung');
        console.log(this.username);
        console.log(cat);
        // return this.http.post<any>(`${environment.API_BASE_URL}/api/users/addCat`, cat, this.httpOptions)
        // .pipe(
        // )
        return axios__WEBPACK_IMPORTED_MODULE_4___default()({
            url: `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_BASE_URL}/api/users/addCat`,
            method: "POST",
            headers: {
                accept: "application/json"
            },
            data: {
                cat,
                username: this.username
            }
        })
            .then(response => {
            console.log(response);
        })
            .catch(err => console.error(err));
    }
    removeCatFromDB(catID) {
        console.log(this.user.username);
        console.log('placeholder for Rmovecat fromd b');
        return axios__WEBPACK_IMPORTED_MODULE_4___default()({
            url: `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_BASE_URL}/api/users/removeCat`,
            method: "POST",
            headers: {
                accept: "application/json"
            },
            data: {
                catID,
                username: this.user.username
            }
        })
            .then(response => {
            console.log(response);
            this.refreshStateViaToken();
        })
            .catch(err => console.error(err));
    }
    attemptPasswordUpdate(username, object) {
        let { password, newPW } = object;
        console.log(password, newPW);
        return axios__WEBPACK_IMPORTED_MODULE_4___default()({
            url: `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_BASE_URL}/api/users/changePassword`,
            method: "POST",
            headers: {
                "accept": "application/json"
            },
            data: {
                username,
                "oldPW": password,
                "newPW": newPW
            }
        })
            .then(response => {
            console.log(response);
        })
            .catch(err => console.error(err));
    }
    attemptAccountUpdateDB(username, userInfo, confirmInfo) {
        let { firstName, lastName, birthday } = userInfo;
        let { password, confirm } = confirmInfo;
        // console.log(firstName, lastName, birthday, pwInput, confirmInput);
        return axios__WEBPACK_IMPORTED_MODULE_4___default()({
            url: `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_BASE_URL}/api/users/changeAccountDetails`,
            method: "POST",
            headers: {
                accept: "application/json"
            },
            data: {
                firstName, lastName, birthday, password, confirm, username
            }
        })
            .then(response => {
            console.log(response);
        })
            .catch(err => console.error(err));
    }
};
DatabaseService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_redux_store__WEBPACK_IMPORTED_MODULE_5__["NgRedux"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_5__["select"])()
], DatabaseService.prototype, "user$", void 0);
DatabaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DatabaseService);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/fesm2015/angular-redux-store.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ "./src/app/actions.ts");




let HeaderComponent = class HeaderComponent {
    constructor(ngRedux) {
        this.ngRedux = ngRedux;
    }
    ngOnInit() {
    }
    logOut() {
        console.log(this.user);
        this.ngRedux.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["logout"])());
        localStorage.clear();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["NgRedux"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["select"])()
], HeaderComponent.prototype, "user", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/kennel-card/kennel-card.component.css":
/*!*******************************************************!*\
  !*** ./src/app/kennel-card/kennel-card.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".kennelCard {\n    border: dotted red 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva2VubmVsLWNhcmQva2VubmVsLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2tlbm5lbC1jYXJkL2tlbm5lbC1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIua2VubmVsQ2FyZCB7XG4gICAgYm9yZGVyOiBkb3R0ZWQgcmVkIDNweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/kennel-card/kennel-card.component.ts":
/*!******************************************************!*\
  !*** ./src/app/kennel-card/kennel-card.component.ts ***!
  \******************************************************/
/*! exports provided: KennelCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KennelCardComponent", function() { return KennelCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");



let KennelCardComponent = class KennelCardComponent {
    constructor(dbService) {
        this.dbService = dbService;
    }
    ngOnInit() {
    }
    removeCat() {
        console.log(this.catData);
        this.dbService.removeCatFromDB(this.catData.id);
    }
};
KennelCardComponent.ctorParameters = () => [
    { type: _database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], KennelCardComponent.prototype, "catData", void 0);
KennelCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-kennel-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kennel-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/kennel-card/kennel-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kennel-card.component.css */ "./src/app/kennel-card/kennel-card.component.css")).default]
    })
], KennelCardComponent);



/***/ }),

/***/ "./src/app/kennel/kennel.component.css":
/*!*********************************************!*\
  !*** ./src/app/kennel/kennel.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2tlbm5lbC9rZW5uZWwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/kennel/kennel.component.ts":
/*!********************************************!*\
  !*** ./src/app/kennel/kennel.component.ts ***!
  \********************************************/
/*! exports provided: KennelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KennelComponent", function() { return KennelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/fesm2015/angular-redux-store.js");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");




let KennelComponent = class KennelComponent {
    constructor(ngRedux, dbService) {
        this.ngRedux = ngRedux;
        this.dbService = dbService;
    }
    ngOnInit() {
        this.dbService.obtainAndRefreshTokenAndState();
        this.user$.subscribe(user => this.kennelCats = user.cats);
    }
};
KennelComponent.ctorParameters = () => [
    { type: _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["NgRedux"] },
    { type: _database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["select"])()
], KennelComponent.prototype, "user$", void 0);
KennelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-kennel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kennel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/kennel/kennel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kennel.component.css */ "./src/app/kennel/kennel.component.css")).default]
    })
], KennelComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/fesm2015/angular-redux-store.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ "./src/app/actions.ts");




let LoginComponent = class LoginComponent {
    constructor(ngRedux) {
        this.ngRedux = ngRedux;
        this.userCredentials = {
            username: null,
            password: null
        };
        this.loginFormIsDisabled = false;
    }
    ngOnInit() {
    }
    onSubmit() {
        console.log(this.userCredentials);
        this.ngRedux.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["logIn"])(this.userCredentials));
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["NgRedux"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/pageNotFound/pageNotFound.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pageNotFound/pageNotFound.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VOb3RGb3VuZC9wYWdlTm90Rm91bmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pageNotFound/pageNotFound.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pageNotFound/pageNotFound.component.ts ***!
  \********************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pageNotFound',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pageNotFound.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pageNotFound/pageNotFound.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pageNotFound.component.css */ "./src/app/pageNotFound/pageNotFound.component.css")).default]
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/pet-finder.service.ts":
/*!***************************************!*\
  !*** ./src/app/pet-finder.service.ts ***!
  \***************************************/
/*! exports provided: PetFinderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetFinderService", function() { return PetFinderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let PetFinderService = class PetFinderService {
    constructor(http) {
        this.http = http;
        this.url = 'http://httpbin.org/post';
        this.postData = {
            test: 'my-content'
        };
        this.httpOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    errorHandler(error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error.message || 'Server Error');
    }
    getCatBreeds() {
        console.log('getCatBreeds running');
        return axios__WEBPACK_IMPORTED_MODULE_2___default()({
            url: `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_BASE_URL}/api/cats/catBreeds`,
            method: "GET",
            headers: {
                accept: "application/json"
            }
        })
            .then(response => {
            return response.data.breeds.map((catBreed) => {
                return catBreed.name;
            });
        })
            .catch(err => console.error(err));
    }
    getCatColorCoatSex() {
        console.log('getCatColorCoatSex running');
        return axios__WEBPACK_IMPORTED_MODULE_2___default()({
            url: `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_BASE_URL}/api/cats/catColorCoatSex`,
            method: "GET",
            headers: {
                accept: "application/json"
            }
        })
            .then(response => {
            console.log(response.data);
            return response.data;
        })
            .catch(err => console.error(err));
    }
    // seekCats (cattributes): any{
    // let {breed, coat, color, gender, age} = cattributes;
    // let body = [breed, coat, color, gender, age];
    //   return this.http.post<any>(`${environment.API_BASE_URL}/api/cats/seekCats`, body)
    // // return axios({
    // //     url: `${environment.API_BASE_URL}/api/cats/seekCats`,
    // //     method: "POST",
    // //     headers: {
    // //         accept: "application/json"
    // //     },
    // //     data: {
    // //         breed, coat, color, gender, age
    // //     }
    // // })
    // // .then(response => {
    // //     console.log(response);
    // //     console.log(typeof response.data.animals);
    // //     return response.data;
    // // })
    // // .catch(err => console.error(err));
    // // return Axios.request({
    // //   method: 'post',
    // //   url: `${environment.API_BASE_URL}/api/cats/seekCats`,
    // //   data: {
    // //       breed, coat, color, gender, age
    // //   },
    // //   headers: {
    // //     accept: "application/json"
    // //   },
    // //   // transformResponse: [function(data) {
    // //   //   return data;
    // //   // }]
    // // }) 
    // // .subscribe(
    // //   response => {
    // //     console.log(response);  
    // //     return response.data.animals;
    // //   },
    // //   error => console.error(error)
    // // )
    //       // return this.http.post<any>(`${environment.API_BASE_URL}`, body,this.httpOption )
    //       // .subscribe(
    //       // )
    // //       return this.http.post(`${environment.API_BASE_URL}/api/cats/seekCats`,
    // //   {
    // //   breed, coat, color, gender, age
    // //   })
    // //   .subscribe(
    // //       (val) => {
    // //           console.log("POST call successful value returned in body", 
    // //                       val);
    // //                       return val;
    // //       },
    // //       (response) => {
    // //           console.log("POST call in error", response);
    // //           return response
    // //       },
    // //       () => {
    // //           console.log("The POST observable is now completed.");
    // //       });
    //   } 
    seekCats(cattributes) {
        let { breed, coat, color, gender, age } = cattributes;
        let body = { breed, coat, color, gender, age };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_BASE_URL}/api/cats/seekCats`, body);
    }
};
PetFinderService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
PetFinderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PetFinderService);



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _pet_finder_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pet-finder.service */ "./src/app/pet-finder.service.ts");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/fesm2015/angular-redux-store.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let SearchComponent = class SearchComponent {
    constructor(petFinderService, ngRedux) {
        this.petFinderService = petFinderService;
        this.ngRedux = ngRedux;
        this.catAges = ['baby', 'young', 'adult', 'senior'];
        // query: {} = {
        //   breeds: [],
        //   coats: [],
        //   colors: [],
        //   genders: []
        // }
        this.queryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            breed: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            coat: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            color: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
        });
    }
    ngOnInit() {
        this.catBreeds = this.petFinderService.getCatBreeds();
        this.catCoats = this.petFinderService.getCatColorCoatSex().then(res => res.coats);
        this.catColors = this.petFinderService.getCatColorCoatSex().then(res => res.colors);
        this.catGenders = this.petFinderService.getCatColorCoatSex().then(res => res.genders);
    }
    onSubmit() {
        console.log(this.catResults);
        console.log('pressed ngSubmit for form');
        console.log(this.queryForm.value);
        //we want to import an action or a thunk-action that will ping
        //petfinder's api with our desired cat-tributes ;)
        this.petFinderService.seekCats(this.queryForm.value).subscribe(data => {
            console.log(data);
            // this.catResults = JSON.stringify(data);
            // this.catResults = JSON.parse(this.catResults);
            // this.catResults = JSON.parse(JSON.stringify(data));
            this.catResults = data;
        });
        console.log(this.catResults);
    }
};
SearchComponent.ctorParameters = () => [
    { type: _pet_finder_service__WEBPACK_IMPORTED_MODULE_2__["PetFinderService"] },
    { type: _angular_redux_store__WEBPACK_IMPORTED_MODULE_3__["NgRedux"] }
];
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")).default]
    })
], SearchComponent);



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/fesm2015/angular-redux-store.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ "./src/app/actions.ts");




let SignupComponent = class SignupComponent {
    constructor(ngRedux) {
        this.ngRedux = ngRedux;
        this.model = {};
    }
    ngOnInit() {
    }
    onSubmit() {
        console.log(this.model);
        console.log('you pressed on Submit');
        // this.ngRedux.dispatch({type: SIGN_UP(this.model)});
        this.ngRedux.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["signUp"])(this.model));
    }
};
SignupComponent.ctorParameters = () => [
    { type: _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["NgRedux"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")).default]
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/store.ts":
/*!**************************!*\
  !*** ./src/app/store.ts ***!
  \**************************/
/*! exports provided: INITIAL_STATE, rootReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_STATE", function() { return INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootReducer", function() { return rootReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/app/actions.ts");


const INITIAL_STATE = {
    user: {
        username: '',
        password: '',
        authToken: '',
        loggedIn: false,
        firstName: '',
        lastName: "",
        birthday: '',
        cats: []
    },
    lastUpdate: null
};
function rootReducer(state, action) {
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_1__["ADD_CAT"]:
            let userCats = state.user.cats;
            console.log('you sent over Add Sample Cat');
            console.log(action.payload);
            // action.payload.id = state.user.cats.length + 1;
            // return Object.assign({}, state, {
            //     cats: state.user.cats.concat(Object.assign({}, action.cat)),
            //     lastUpdate: new Date()
            // })
            userCats.push(action.payload);
            return Object.assign({}, state, Object.assign({}, state, { user: Object.assign({}, state.user, { cats: userCats }) }));
        case _actions__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_SUCCESS"]:
            console.log('you are using login success');
            let { username, firstName, lastName, birthday, cats } = action.payload.user;
            let { authToken } = action.payload;
            return Object.assign({}, state, Object.assign({}, state, { user: {
                    username,
                    firstName,
                    lastName,
                    birthday,
                    cats,
                    authToken,
                    loggedIn: true,
                } }));
        case _actions__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT"]:
            console.log('you are logging out');
            return Object.assign({}, state, INITIAL_STATE);
        case _actions__WEBPACK_IMPORTED_MODULE_1__["REFRESH_STATE"]:
            console.log('dispatching refreshing of state from reducer');
            console.log(action.payload);
            return Object.assign({}, state, Object.assign({}, state, { user: {
                    username: action.payload.username,
                    loggedIn: true,
                    firstName: action.payload.firstName,
                    lastName: action.payload.lastName,
                    birthday: action.payload.birthday,
                    cats: action.payload.cats
                } }));
        case _actions__WEBPACK_IMPORTED_MODULE_1__["SET_AUTH_TOKEN"]:
            console.log('settingAuth token into state');
            return Object.assign({}, state, Object.assign({}, state, { user: Object.assign({}, state.user, { authToken: action.payload }) }));
    }
    return state;
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    API_BASE_URL: "http://localhost:8000",
    // API_BASE_URL: "https://fast-peak-68791.herokuapp.com/",
    JWT_SECRET: "FELIBO",
    JWT_EXPIRY: "1d"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack fra mes such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/adrian/Development/gdc2Client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map