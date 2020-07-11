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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid\" id=\"aboutBanner\">\r\n  <h2>About</h2>\r\n  <aside>Our <strong>claw</strong>-ver service to assist <strong>furr</strong>-iendly kittehs!</aside>\r\n</div>\r\n\r\n<div id=\"aboutTemplateDiv\">\r\n<h3>What the **** is Grab Dat Cat?</h3>\r\n<section>\r\n  <p>Hello, hooman. We kittehs seek a new home <strong>fur</strong> us to be nice and cozy in.</p>\r\n  <p>If you use this app, you can sort through needy kitts in your area.</p>\r\n  <p>Then you can contact the hoomans holding us and can bring us home. Then we'll snuggle in yo beeed, dance on your heeead, and knock shit off your counters.</p>\r\n</section>\r\n<img src=\"../../assets/catTroll.jpg\"/>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"jumbotron jumbotron-fluid\" id=\"accountBanner\">\r\n  <h2>Account</h2>\r\n  <aside><strong>Mew</strong> can change your de<strong>-tails</strong> here.</aside>\r\n</div>\r\n\r\n\r\n\r\n    <form id=\"nameBirthdayForm\" (ngSubmit)=\"onSubmit()\" #accountForm=\"ngForm\" >\r\n      <div class=\"form-group\">\r\n      <label>First Name:\r\n          <input class=\"form-control\" placeholder={{user.firstName}} name=\"firstName\" type=\"text\" [(ngModel)]=\"userAccountInput.firstName\" />\r\n      </label>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n      <label>Last Name:\r\n              <input class=\"form-control\" placeholder={{user.lastName}} name=\"lastName\" type=\"text\" [(ngModel)]=\"userAccountInput.lastName\" />\r\n      </label>\r\n      </div>\r\n      <div class=\"form-group\">\r\n      <label>Birthday:\r\n\r\n              <input class=\"form-control\" id=\"birthdayInput\" (click)=\"d.toggle()\" placeholder=\"{{user.birthday.month}}/{{user.birthday.day}}\" type=\"text\" [(ngModel)]=\"userAccountInput.birthday\" ngbDatepicker #d=\"ngbDatepicker\"  name=\"birthday\">\r\n\r\n      </label>\r\n      </div>\r\n      <button class=\"btn btn-primary\" type=\"submit\">Submit</button>\r\n    </form>\r\n\r\n\r\n    <div id=\"secondFormDiv\">\r\n        <h3>Change Password</h3>\r\n        <form (ngSubmit)=\"attemptPasswordChange()\" >\r\n          <div id=\"secondFormFormGroupDiv\" class=\"form-group\">\r\n            <label>Current Password\r\n                <input class=\"form-control\" type=\"password\" name=\"password\" [(ngModel)]=\"passwordChangeObject.password\" />\r\n            </label>\r\n            <label>New Password\r\n                <input class=\"form-control\" type=\"password\" name=\"passwordConfirm\" [(ngModel)]=\"passwordChangeObject.newPW\">\r\n            </label>\r\n            <button class=\"btn btn-primary\" type=\"submit\">Change</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n<!-- TODO: Make a modal -->\r\n    <div id=\"confirmationDiv\" *ngIf=\"displayModal == true\">\r\n        <h3>Do you really want to update?</h3>\r\n        <h5>If so, you'll need to enter your password</h5>\r\n        <form (ngSubmit)=\"submitPasswordConfirm()\">\r\n            <div id=\"confirmationDivFormGroup\" class='form-group'>\r\n              <label>Password\r\n                  <input class=\"form-control\" type=\"password\" name=\"password\" [(ngModel)]=\"confirmationInput.password\"/>\r\n              </label>\r\n              <label>Confirm Password\r\n                  <input class=\"form-control\" type=\"password\" name=\"confirm\" [(ngModel)]=\"confirmationInput.confirm\"/>\r\n              </label>\r\n              <button class=\"btn btn-outline-success\" type=\"submit\">Meow!</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app-toasts-component/app-toasts-component.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app-toasts-component/app-toasts-component.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngb-toast class=\"toastItem\" *ngFor=\"let toast of toastService.toasts\"\r\n [class]=\"toast.classname\"\r\n [header]=\"toast.header\"\r\n [autohide]=\"true\"\r\n [delay]=\"toast.delay || 50000\"\r\n (hide)=\"toastService.remove(toast)\"\r\n>\r\n{{toast.body}}\r\n</ngb-toast>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-toasts aria-live=\"polite\" aria-atomic=\"true\"></app-toasts>\r\n\r\n<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cat-card/cat-card.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cat-card/cat-card.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"catCard\">\r\n  <h1 class=\"catCardName\">{{catData.name}}</h1>\r\n  <img [src]=\"catData.photos.length > 0 ?   catData.photos[0].small :''  \" />\r\n  <p class=\"catCardDescription\">{{catData.description}}</p>\r\n    <h5 class=\"catCardDetails\">Details</h5>\r\n    <ul class=\"catCardUL\">\r\n      <li><strong>BREED:</strong> {{catData.breeds.primary}}</li>\r\n      <li>\r\n        <strong>COLOR:</strong> {{catData.colors.primary}}\r\n      </li>\r\n      <li>\r\n        <strong>AGE:</strong> {{catData.age}}\r\n      </li>\r\n      <li>\r\n        <strong>GENDER:</strong> {{catData.gender}}\r\n      </li>\r\n\r\n    </ul>\r\n    <button class=\"btn btn-success catCardButton\" (click)=\"placeCatInKennel()\" [disabled]=\"catData.status !== 'adoptable'\" >Place in wish(ker) list</button>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cat-results/cat-results.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cat-results/cat-results.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  <div *ngFor=\"let cat of catResults\">\r\n    <app-cat-card [catData]=\"cat\"></app-cat-card>\r\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cat/cat.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cat/cat.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  cat works!\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<nav class=\"navbar navbar-expand-lg navbar-light\">\r\n  <a id=\"brandATag\" class=\"navbar-brand\" href=\"#\">GRAB DAT CAT</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#gdcNavbarContent\" aria-controls=\"gdcNavbarContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n\r\n<div class=\"collapse navbar-collapse\" id=\"gdcNavbarContent\">\r\n  <ul id=\"headerUL\" class=\"navbar-nav mr-auto\">\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\" id=\"aboutLink\" routerLink=\"/about\">About</a>\r\n\r\n    </li>\r\n    <li class=\"nav-item\" *ngIf=\"this.loggedInStatus == true\">\r\n        <a class=\"nav-link\" id=\"accountLink\"  routerLink=\"/account\">Account</a>\r\n    </li>\r\n    <li class=\"nav-item\" *ngIf=\"this.loggedInStatus == false\">\r\n        <a class=\"nav-link\" id=\"loginLink\"  routerLink=\"/login\">Login</a>\r\n    </li>\r\n    <li class=\"nav-item\" *ngIf=\"this.loggedInStatus == true\">\r\n        <a class=\"nav-link\" id=\"kennelLink\" routerLink=\"/kennel\">Kennel</a>\r\n    </li>\r\n    <li class=\"nav-item\" *ngIf=\"this.loggedInStatus == true\">\r\n        <a class=\"nav-link\" id=\"searchLink\" routerLink=\"/search\">Search</a>\r\n    </li>\r\n    <li class=\"nav-item\" *ngIf=\"this.loggedInStatus == false\">\r\n        <a class=\"nav-link\" id=\"signupLink\" routerLink=\"/signup\">Sign Up</a>\r\n    </li>\r\n    <li class=\"nav-item\" *ngIf=\"this.loggedInStatus == true\">\r\n        <a class=\"nav-link\" id=\"logoutLink\" (click)=\"logOut()\">Log Out</a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n</nav>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/kennel-card/kennel-card.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/kennel-card/kennel-card.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<p class=\"buttonPWrapper\">\r\n  <button type=\"button\" class=\"btn btn-outline-primary kennelCardToggleButton\" (click)=\"isCollapsed = !isCollapsed\"\r\n          [attr.aria-expanded]=\"!isCollapsed\" attr.aria-controls={{buttonDataTarget}}>\r\n          <img [src]=\"catData.photos && catData.photos.length > 0 ? catData.photos[0].small : '' \"/>\r\n          <h5>{{catData.name}}</h5>\r\n  </button>\r\n</p>\r\n<div id={{buttonDataTarget}} [ngbCollapse]=\"isCollapsed\">\r\n  <div class=\"card kennelCard\">\r\n    <div class=\"card-body\">\r\n      <span *ngIf='catData.status == \"adoptable\"' class=\"badge badge-success\">Available</span>\r\n      <span *ngIf='catData.status !== \"adoptable\"' class=\"bade badge-danger\">Unavailable</span>\r\n      <button class=\"btn btn-outline-danger kennelCardDeleteButton\" (click)=\"removeCat()\">X</button>\r\n\r\n      <section class=\"kennelCardDetailsSection\">\r\n        <h5>Details</h5>\r\n      <p><strong>Breed: </strong>{{catBreed}}</p>\r\n      <p><strong>Age: </strong>{{catData.age}}</p>\r\n      <p><strong>Gender: </strong>{{catData.gender}}</p>\r\n      <p><strong>Color: </strong>{{catColor}}</p>\r\n      </section>\r\n      <section class=\"kennelCardDescriptionSection\">\r\n        <h5>Description</h5>\r\n        <p>{{catData.description}}</p>\r\n      </section>\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/kennel/kennel.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/kennel/kennel.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid\" id=\"kennelBanner\">\r\n  <h2>Kennel</h2>\r\n  <aside><strong>purr</strong>use your cat selections</aside>\r\n</div>\r\n<div class=\"accordion\" id=\"catKennelAccordion\">\r\n<div *ngFor=\"let cat of kennelCats\">\r\n  <app-kennel-card [catData]=\"cat\" ></app-kennel-card>\r\n</div>\r\n</div>\r\n<div *ngIf=\"kennelCats.length == 0\">\r\n  <h3 id=\"noCatsMessage\">Oh dear, no cats here!</h3>\r\n</div>\r\n\r\n<!--\r\n<div class=\"accordion\" id=\"accordionExample\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\" id=\"headingOne\">\r\n      <h2 class=\"mb-0\">\r\n        <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n          Collapsible Group Item #1\r\n        </button>\r\n      </h2>\r\n    </div>\r\n\r\n    <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\r\n      <div class=\"card-body\">\r\n        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-header\" id=\"headingTwo\">\r\n      <h2 class=\"mb-0\">\r\n        <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\r\n          Collapsible Group Item #2\r\n        </button>\r\n      </h2>\r\n    </div>\r\n    <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionExample\">\r\n      <div class=\"card-body\">\r\n        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-header\" id=\"headingThree\">\r\n      <h2 class=\"mb-0\">\r\n        <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\r\n          Collapsible Group Item #3\r\n        </button>\r\n      </h2>\r\n    </div>\r\n    <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordionExample\">\r\n      <div class=\"card-body\">\r\n        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid\" id=\"loginBanner\">\r\n  <h2>Login</h2>\r\n  <aside>To proceed <strong>fur</strong>-ward you must log in!</aside>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <form id=\"loginForm\" (ngSubmit)=\"onSubmit()\" #loginForm=\"ngForm\">\r\n    <div class=\"form-group\">\r\n      <!-- <label>Username:\r\n        <input placeholder=\"Enter your username\" name=\"username\" type=\"text\" [(ngModel)]=\"userCredentials.username\" required/>\r\n      </label> -->\r\n      <label for=\"usernameInput\">Username:</label>\r\n          <input id=\"usernameInput\" class=\"form-control\" placeholder=\"Enter your mew-sername\" name=\"username\" type=\"text\" [(ngModel)]=\"userCredentials.username\" required/>\r\n\r\n      <label for=\"passwordInput\">Password:</label>\r\n        <input id=\"passwordInput\" class=\"form-control\" placeholder=\"paw-ssword purr-ease!\" type=\"password\" name=\"password\" [(ngModel)]=\"userCredentials.password\" required>\r\n\r\n      <button type=\"submit\" [disabled]=\"loginFormIsDisabled\" class=\"btn btn-info\">LOGIN</button>\r\n    </div>\r\n  </form>\r\n  <div>\r\n    <h3>Sample Login</h3>\r\n    <p><strong>Username:</strong> administrator</p>\r\n    <p><strong>Password:</strong> passwordpassword</p>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pageNotFound/pageNotFound.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pageNotFound/pageNotFound.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  pageNotFound works!\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid\" id=\"searchBanner\">\r\n  <h2>Search</h2>\r\n  <aside>Use the <strong>paw</strong>-er of the internet to find a <strong>furr</strong>-end!</aside>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <div>\r\n      <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"queryForm\"  >\r\n      <h2>Coats</h2>\r\n      <select placeholder=\" \"  formControlName=\"coat\">\r\n          <option value=\"\">==ANY==</option>\r\n          <option *ngFor=\"let coat of catCoats | async\" value={{coat}} >\r\n            {{coat}}\r\n          </option>\r\n        </select>\r\n\r\n      <h2>Gender</h2>\r\n      <select placeholder=\" \" formControlName=\"gender\">\r\n          <option value=\"\">==ANY==</option>\r\n          <option *ngFor=\"let gender of catGenders | async\" value={{gender}}>\r\n            {{gender}}\r\n          </option>\r\n        </select>\r\n\r\n      <h2>Age</h2>\r\n      <select placeholder=\" \" formControlName=\"age\">\r\n          <option value=\"\">==ANY==</option>\r\n          <option *ngFor=\"let age of catAges \" value={{age}}>\r\n            {{age}}\r\n          </option>\r\n        </select>\r\n\r\n\r\n\r\n      <h2>Breed</h2>\r\n      <select placeholder=\" \" formControlName=\"breed\">\r\n          <option value=\"\">==ANY==</option>\r\n        <option *ngFor=\"let breed of catBreeds | async\" value={{breed}}>\r\n          {{breed}}\r\n        </option>\r\n      </select>\r\n\r\n\r\n      <aside>{{user.zodiacCombo.catType ? \"According to our cat overlords, people with your zodiac sign would pair best with a \" + user.zodiacCombo.catType + \" cat!\": \"No cat suggestions available\"}}</aside>\r\n\r\n\r\n      <h2>Color</h2>\r\n      <select formControlName=\"color\">\r\n        <option value=\"\">==ANY==</option>\r\n        <option *ngFor=\"let color of catColors | async\" value={{color}}>\r\n          {{color}}\r\n        </option>\r\n      </select>\r\n      <button id=\"searchButton\" class=\"btn btn-info\" type=\"submit\">SEEK</button>\r\n\r\n      </form>\r\n\r\n<app-cat-results [catResults]=\"catResults\" ></app-cat-results>\r\n\r\n</div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid\" id=\"signupBanner\">\r\n  <h2>Signup</h2>\r\n  <aside>We'd be <strong>paw</strong>-fully pleased <strong>furr</strong> you to join us.</aside>\r\n</div>\r\n\r\n<form (ngSubmit)=\"onSubmit()\" #signupForm=\"ngForm\">\r\n    <div class=\"form-group\">\r\n        <label id=\"usernameLabel\">Username:\r\n          <input class=\"form-control\" id=\"usernameInput\"  placeholder=\"Enter your username\" name=\"username\" [(ngModel)]=\"model.username\" type=\"text\" required/>\r\n        </label>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label id=\"passwordLabel\">Password:\r\n          <input class=\"form-control\"  id=\"passwordInput\" type=\"password\" name=\"password\" [(ngModel)]=\"model.password\" placeholder=\"Enter your password\" required/>\r\n        </label>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label id=\"retypePasswordLabel\">Re-Type Password:\r\n          <input class=\"form-control\" id=\"confirmInput\" placeholder=\"Re-enter your password\" type=\"password\" name=\"passwordConfirm\" [(ngModel)]=\"model.passwordConfirm\" required/>\r\n        </label>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label id=\"firstNameLabel\">First Name:\r\n          <input class=\"form-control\"  id=\"firstNameInput\" placeholder=\"Enter your first name\" type=\"text\" name=\"firstName\" [(ngModel)]=\"model.firstName\"  required />\r\n        </label>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label id=\"lastNameLabel\">Last Name:\r\n          <input class=\"form-control\" id=\"lastNameInput\"  placeholder=\"Enter your last name\" type=\"text\" name=\"lastName\" [(ngModel)]=\"model.lastName\"  required />\r\n        </label>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label id=\"birthdayLabel\">Birthday:\r\n          <input class=\"form-control\" id=\"birthdayInput\" required (click)=\"d.toggle()\" placeholder=\"When's your birthday?\" type=\"text\" [(ngModel)]=\"model.birthday\" ngbDatepicker #d=\"ngbDatepicker\"  name=\"birthday\">\r\n        </label>\r\n    </div>\r\n  <button  class=\"btn btn-primary\" id=\"signupSubmitButton\" type=\"submit\" [disabled]=\"!signupForm.valid\"  >LOGIN</button>\r\n  <!-- <ngb-datepicker #d></ngb-datepicker> -->\r\n</form>\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("h3 {\r\n  font-family: \"Spinnaker\", sans-serif;\r\n  text-align: center;\r\n}\r\n\r\n#aboutBanner {\r\n  text-align: center;\r\n  background: #faa275;\r\n}\r\n\r\n#aboutBanner h2 {\r\n  font-family:\"Leckerli One\",cursive;\r\n  color:#9a7aa0;\r\n\r\n}\r\n\r\n#aboutBanner aside {\r\n  font-family: \"Spinnaker\", sans-serif;\r\n  color:#9a7aa0;\r\n}\r\n\r\nsection {\r\n  border: solid;\r\npadding: 5vw;\r\nborder-radius: 4vw;\r\nmargin: 3vw;\r\nborder-style: outset;\r\n}\r\n\r\nimg {\r\n  display:block;\r\n  margin: auto;\r\n}\r\n\r\n#aboutTemplateDiv {\r\n  padding: 5vw;\r\n}\r\n\r\n@media screen and (min-width: 769px) {\r\n  div#aboutTemplateDiv {\r\n    width: auto;\r\n    max-width: 60vw;\r\n    margin:auto;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFvQztFQUNwQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGFBQWE7O0FBRWY7O0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsYUFBYTtBQUNmOztBQUdBO0VBQ0UsYUFBYTtBQUNmLFlBQVk7QUFDWixrQkFBa0I7QUFDbEIsV0FBVztBQUNYLG9CQUFvQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxlQUFlO0lBQ2YsV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDMge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlNwaW5uYWtlclwiLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI2Fib3V0QmFubmVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogI2ZhYTI3NTtcclxufVxyXG5cclxuI2Fib3V0QmFubmVyIGgyIHtcclxuICBmb250LWZhbWlseTpcIkxlY2tlcmxpIE9uZVwiLGN1cnNpdmU7XHJcbiAgY29sb3I6IzlhN2FhMDtcclxuXHJcbn1cclxuI2Fib3V0QmFubmVyIGFzaWRlIHtcclxuICBmb250LWZhbWlseTogXCJTcGlubmFrZXJcIiwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjojOWE3YWEwO1xyXG59XHJcblxyXG5cclxuc2VjdGlvbiB7XHJcbiAgYm9yZGVyOiBzb2xpZDtcclxucGFkZGluZzogNXZ3O1xyXG5ib3JkZXItcmFkaXVzOiA0dnc7XHJcbm1hcmdpbjogM3Z3O1xyXG5ib3JkZXItc3R5bGU6IG91dHNldDtcclxufVxyXG5cclxuaW1nIHtcclxuICBkaXNwbGF5OmJsb2NrO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuI2Fib3V0VGVtcGxhdGVEaXYge1xyXG4gIHBhZGRpbmc6IDV2dztcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcclxuICBkaXYjYWJvdXRUZW1wbGF0ZURpdiB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1heC13aWR0aDogNjB2dztcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gIH1cclxufVxyXG4iXX0= */");

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

/***/ "./src/app/account.service.ts":
/*!************************************!*\
  !*** ./src/app/account.service.ts ***!
  \************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/fesm2015/angular-redux-store.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let AccountService = class AccountService {
    constructor(ngRedux) {
        this.ngRedux = ngRedux;
    }
    ngOnInit() {
        this.user$.subscribe(user => this.user = user);
        console.log(this.user);
    }
    xolo() {
        console.log(this.user);
    }
};
AccountService.ctorParameters = () => [
    { type: _angular_redux_store__WEBPACK_IMPORTED_MODULE_1__["NgRedux"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_1__["select"])()
], AccountService.prototype, "user$", void 0);
AccountService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], AccountService);



/***/ }),

/***/ "./src/app/account/account.component.css":
/*!***********************************************!*\
  !*** ./src/app/account/account.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#accountBanner {\r\n  background: #fb3640;\r\n  text-align: center;\r\n}\r\n\r\n#accountBanner h2 {\r\n  font-family: \"Leckerli One\",cursive;\r\n  color: #e3f2fd;\r\n}\r\n\r\n#accountBanner aside {\r\n  font-family: \"Spinnaker\", sans-serif;\r\n  color: #e3f2fd;\r\n}\r\n\r\n#nameBirthdayForm {\r\n  text-align: center;\r\n}\r\n\r\n#secondFormDiv {\r\n  text-align: center;\r\n  padding: 4vw;\r\n}\r\n\r\n#secondFormFormGroupDiv {\r\n  display: grid;\r\n    width: auto;\r\n    max-width: 80vw;\r\n    margin: auto;\r\n}\r\n\r\n#confirmationDiv {\r\n  text-align: center;\r\n}\r\n\r\n#confirmationDivFormGroup{\r\n  display: grid;\r\n  width: auto;\r\n  max-width: 80vw;\r\n  margin: auto;\r\n}\r\n\r\n@media screen and (min-width: 426px) {\r\n  #secondFormFormGroupDiv {\r\n    max-width: 55vw;\r\n  }\r\n\r\n  #confirmationDivFormGroup {\r\n    max-width: 55vw;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsY0FBYztBQUNoQjs7QUFHQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0lBQ1gsV0FBVztJQUNYLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUdBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUlBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYWNjb3VudEJhbm5lciB7XHJcbiAgYmFja2dyb3VuZDogI2ZiMzY0MDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNhY2NvdW50QmFubmVyIGgyIHtcclxuICBmb250LWZhbWlseTogXCJMZWNrZXJsaSBPbmVcIixjdXJzaXZlO1xyXG4gIGNvbG9yOiAjZTNmMmZkO1xyXG59XHJcblxyXG4jYWNjb3VudEJhbm5lciBhc2lkZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiU3Bpbm5ha2VyXCIsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICNlM2YyZmQ7XHJcbn1cclxuXHJcblxyXG4jbmFtZUJpcnRoZGF5Rm9ybSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jc2Vjb25kRm9ybURpdiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDR2dztcclxufVxyXG5cclxuI3NlY29uZEZvcm1Gb3JtR3JvdXBEaXYge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1heC13aWR0aDogODB2dztcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuXHJcbiNjb25maXJtYXRpb25EaXYge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcblxyXG4jY29uZmlybWF0aW9uRGl2Rm9ybUdyb3Vwe1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgbWF4LXdpZHRoOiA4MHZ3O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDI2cHgpIHtcclxuICAjc2Vjb25kRm9ybUZvcm1Hcm91cERpdiB7XHJcbiAgICBtYXgtd2lkdGg6IDU1dnc7XHJcbiAgfVxyXG5cclxuICAjY29uZmlybWF0aW9uRGl2Rm9ybUdyb3VwIHtcclxuICAgIG1heC13aWR0aDogNTV2dztcclxuICB9XHJcbn1cclxuIl19 */");

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
/* harmony import */ var _route_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../route-helper.service */ "./src/app/route-helper.service.ts");





let AccountComponent = class AccountComponent {
    constructor(ngRedux, dbService, routeHelper) {
        this.ngRedux = ngRedux;
        this.dbService = dbService;
        this.routeHelper = routeHelper;
        this.userAccountInput = {
            firstName: '',
            lastName: '',
            birthday: Object,
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
        this.dbService.obtainAndRefreshTokenAndState();
        console.log(this.user, this.lastUpdate, this.userAccountInput);
        this.user$.subscribe(user => this.user = user);
        // this.user$.subscribe(user => this.authTokenFromState = user.authToken)
        this.user$.subscribe(user => this.userAccountInput.birthday = user.birthday);
        this.authToken = localStorage.getItem('authToken');
        this.routeHelper.bouncer();
    }
    //create a cat-service to set up the zodiacCombo Client Side for easy updating
    //use cat-service here to make the zodiacCombo
    attemptAccountUpdate() {
        console.log('Here is where we attempt to update the account');
        console.log(this.userAccountInput, this.confirmationInput);
        console.log(this.user.username);
        console.log('be sure to add username to this user object');
        this.dbService.attemptAccountUpdateDB(this.user.username, this.userAccountInput, this.confirmationInput);
        // this.ngRedux.dispatch(refreshStateWithToken(this.authToken));
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
    { type: _database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"] },
    { type: _route_helper_service__WEBPACK_IMPORTED_MODULE_4__["RouteHelperService"] }
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
const addCat = payload => ({
    type: ADD_CAT,
    payload
});
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const loginSuccess = payload => ({
    type: LOG_IN_SUCCESS,
    payload
});
const LOG_OUT = "LOG_OUT";
const logout = () => ({
    type: LOG_OUT
});
const REFRESH_STATE = "REFRESH_STATE";
const refreshState = payload => ({
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

/***/ "./src/app/app-toast-service.service.ts":
/*!**********************************************!*\
  !*** ./src/app/app-toast-service.service.ts ***!
  \**********************************************/
/*! exports provided: AppToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppToastService", function() { return AppToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppToastService = class AppToastService {
    constructor() {
        this.toasts = [];
    }
    show(header, body, options = {}) {
        this.toasts.push(Object.assign({ header, body }, options));
    }
    remove(toast) {
        this.toasts = this.toasts.filter(t => t != toast);
    }
};
AppToastService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AppToastService);



/***/ }),

/***/ "./src/app/app-toasts-component/app-toasts-component.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/app-toasts-component/app-toasts-component.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  margin: 0.5em;\r\n  z-index: 1200;\r\n}\r\n\r\n\r\n.toastItem {\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLXRvYXN0cy1jb21wb25lbnQvYXBwLXRvYXN0cy1jb21wb25lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sUUFBUTtFQUNSLGFBQWE7RUFDYixhQUFhO0FBQ2Y7OztBQUdBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYXBwLXRvYXN0cy1jb21wb25lbnQvYXBwLXRvYXN0cy1jb21wb25lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1hcmdpbjogMC41ZW07XHJcbiAgei1pbmRleDogMTIwMDtcclxufVxyXG5cclxuXHJcbi50b2FzdEl0ZW0ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/app-toasts-component/app-toasts-component.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/app-toasts-component/app-toasts-component.component.ts ***!
  \************************************************************************/
/*! exports provided: AppToastsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppToastsComponent", function() { return AppToastsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_toast_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-toast-service.service */ "./src/app/app-toast-service.service.ts");



let AppToastsComponent = class AppToastsComponent {
    constructor(toastService) {
        this.toastService = toastService;
    }
    ngOnInit() {
    }
};
AppToastsComponent.ctorParameters = () => [
    { type: _app_toast_service_service__WEBPACK_IMPORTED_MODULE_2__["AppToastService"] }
];
AppToastsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-toasts',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app-toasts-component.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app-toasts-component/app-toasts-component.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app-toasts-component.component.css */ "./src/app/app-toasts-component/app-toasts-component.component.css")).default]
    })
], AppToastsComponent);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _app_toast_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-toast-service.service */ "./src/app/app-toast-service.service.ts");






let AppComponent = class AppComponent {
    constructor(ngRedux, dbService, toastService) {
        this.ngRedux = ngRedux;
        this.dbService = dbService;
        this.toastService = toastService;
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
    { type: _database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"] },
    { type: _app_toast_service_service__WEBPACK_IMPORTED_MODULE_5__["AppToastService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_3__["select"])()
], AppComponent.prototype, "user$", void 0);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
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
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _kennel_kennel_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./kennel/kennel.component */ "./src/app/kennel/kennel.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _cat_cat_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cat/cat.component */ "./src/app/cat/cat.component.ts");
/* harmony import */ var _pageNotFound_pageNotFound_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pageNotFound/pageNotFound.component */ "./src/app/pageNotFound/pageNotFound.component.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./store */ "./src/app/store.ts");
/* harmony import */ var _cat_results_cat_results_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./cat-results/cat-results.component */ "./src/app/cat-results/cat-results.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _cat_card_cat_card_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./cat-card/cat-card.component */ "./src/app/cat-card/cat-card.component.ts");
/* harmony import */ var _kennel_card_kennel_card_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./kennel-card/kennel-card.component */ "./src/app/kennel-card/kennel-card.component.ts");
/* harmony import */ var _app_toasts_component_app_toasts_component_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./app-toasts-component/app-toasts-component.component */ "./src/app/app-toasts-component/app-toasts-component.component.ts");

























let AppModule = class AppModule {
    constructor(ngRedux, devTools) {
        this.ngRedux = ngRedux;
        this.devTools = devTools;
        let enhancers = [];
        if (devTools.isEnabled()) {
            enhancers = [...enhancers, devTools.enhancer()];
        }
        this.ngRedux.configureStore(_store__WEBPACK_IMPORTED_MODULE_18__["rootReducer"], _store__WEBPACK_IMPORTED_MODULE_18__["INITIAL_STATE"], [redux_thunk__WEBPACK_IMPORTED_MODULE_6__["default"]], enhancers);
    }
};
AppModule.ctorParameters = () => [
    { type: _angular_redux_store__WEBPACK_IMPORTED_MODULE_4__["NgRedux"] },
    { type: _angular_redux_store__WEBPACK_IMPORTED_MODULE_4__["DevToolsExtension"] }
];
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
            _account_account_component__WEBPACK_IMPORTED_MODULE_12__["AccountComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
            _kennel_kennel_component__WEBPACK_IMPORTED_MODULE_14__["KennelComponent"],
            _search_search_component__WEBPACK_IMPORTED_MODULE_15__["SearchComponent"],
            _cat_cat_component__WEBPACK_IMPORTED_MODULE_16__["CatComponent"],
            _pageNotFound_pageNotFound_component__WEBPACK_IMPORTED_MODULE_17__["PageNotFoundComponent"],
            _cat_results_cat_results_component__WEBPACK_IMPORTED_MODULE_19__["CatResultsComponent"],
            _signup_signup_component__WEBPACK_IMPORTED_MODULE_20__["SignupComponent"],
            _cat_card_cat_card_component__WEBPACK_IMPORTED_MODULE_21__["CatCardComponent"],
            _kennel_card_kennel_card_component__WEBPACK_IMPORTED_MODULE_22__["KennelCardComponent"],
            _cat_cat_component__WEBPACK_IMPORTED_MODULE_16__["CatComponent"],
            _app_toasts_component_app_toasts_component_component__WEBPACK_IMPORTED_MODULE_23__["AppToastsComponent"]
        ],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_redux_store__WEBPACK_IMPORTED_MODULE_4__["NgReduxModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"]
        ],
        schemas: [
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["NO_ERRORS_SCHEMA"]
        ],
        bootstrap: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]
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
/* harmony default export */ __webpack_exports__["default"] = (".catCard {\r\n    border: solid black 3px;\r\n    margin: 1vw 2vw;\r\n    padding: 5vw;\r\n}\r\n\r\n.catCardName {\r\n  font-family: \"Leckerli One\", cursive;\r\n\r\n}\r\n\r\n.catCardDescription {\r\n  font-family: \"Spinnaker\", sans-serif;\r\n}\r\n\r\n.catCardDetails {\r\n  font-family: \"Leckerli One\", cursive;\r\n}\r\n\r\n.catCardUL {\r\n  list-style: none;\r\n  font-family: \"Spinnaker\", sans-serif;\r\n}\r\n\r\n.catCardButton {\r\n  text-align: center;\r\n  font-family: \"Leckerli One\", cursive;\r\n  width: -webkit-fill-available;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0LWNhcmQvY2F0LWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtFQUNFLG9DQUFvQzs7QUFFdEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyw2QkFBNkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9jYXQtY2FyZC9jYXQtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhdENhcmQge1xyXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAzcHg7XHJcbiAgICBtYXJnaW46IDF2dyAydnc7XHJcbiAgICBwYWRkaW5nOiA1dnc7XHJcbn1cclxuXHJcbi5jYXRDYXJkTmFtZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTGVja2VybGkgT25lXCIsIGN1cnNpdmU7XHJcblxyXG59XHJcblxyXG4uY2F0Q2FyZERlc2NyaXB0aW9uIHtcclxuICBmb250LWZhbWlseTogXCJTcGlubmFrZXJcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmNhdENhcmREZXRhaWxzIHtcclxuICBmb250LWZhbWlseTogXCJMZWNrZXJsaSBPbmVcIiwgY3Vyc2l2ZTtcclxufVxyXG5cclxuLmNhdENhcmRVTCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBmb250LWZhbWlseTogXCJTcGlubmFrZXJcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmNhdENhcmRCdXR0b24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogXCJMZWNrZXJsaSBPbmVcIiwgY3Vyc2l2ZTtcclxuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxufVxyXG4iXX0= */");

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
/* harmony import */ var _app_toast_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-toast-service.service */ "./src/app/app-toast-service.service.ts");






let CatCardComponent = class CatCardComponent {
    constructor(ngRedux, dbService, toastService) {
        this.ngRedux = ngRedux;
        this.dbService = dbService;
        this.toastService = toastService;
        this.showToast = true;
    }
    ngOnInit() {
        this.user$.subscribe(user => this.user = user);
    }
    placeCatInKennel() {
        //We want to dispatch an action where we send this catData to our database
        //and put it in the cats array of our User model.
        this.dbService.addCatToDB(this.catData);
        this.ngRedux.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["addCat"])(this.catData));
        let toastBody = this.catData.name + " was added to the kennel!";
        this.toastService.show('Grab Dat Cat', toastBody, { classname: 'bg-success text-light', delay: 5000 });
    }
};
CatCardComponent.ctorParameters = () => [
    { type: _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["NgRedux"] },
    { type: _database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"] },
    { type: _app_toast_service_service__WEBPACK_IMPORTED_MODULE_5__["AppToastService"] }
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
        this.user$.subscribe(user => this.user = user);
        console.log(this.user);
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
            console.log('fear tactic', response);
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
        console.log('attemptAccountUpdateDB running');
        let { firstName, lastName, birthday, zodiacCombo } = userInfo;
        let { password, confirm } = confirmInfo;
        console.log(username, userInfo, confirmInfo);
        return axios__WEBPACK_IMPORTED_MODULE_4___default()({
            url: `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_BASE_URL}/api/users/changeAccountDetails`,
            method: "POST",
            headers: {
                accept: "application/json"
            },
            data: {
                firstName, lastName, birthday, password, confirm, username, zodiacCombo
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
/* harmony default export */ __webpack_exports__["default"] = ("nav {\r\n    background-color: #e3f2fd;\r\n}\r\n\r\n#brandATag {\r\n    font-family: 'Leckerli One', cursive;\r\n    color: #2B4570;\r\n}\r\n\r\n#headerUL a {\r\n    font-family: \"Spinnaker\", sans-serif;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEMiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZjJmZDtcclxufVxyXG5cclxuI2JyYW5kQVRhZyB7XHJcbiAgICBmb250LWZhbWlseTogJ0xlY2tlcmxpIE9uZScsIGN1cnNpdmU7XHJcbiAgICBjb2xvcjogIzJCNDU3MDtcclxufVxyXG5cclxuI2hlYWRlclVMIGEge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiU3Bpbm5ha2VyXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuIl19 */");

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
/* harmony import */ var _route_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../route-helper.service */ "./src/app/route-helper.service.ts");
/* harmony import */ var _app_toast_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-toast-service.service */ "./src/app/app-toast-service.service.ts");






let HeaderComponent = class HeaderComponent {
    constructor(ngRedux, routeHelper, toastService) {
        this.ngRedux = ngRedux;
        this.routeHelper = routeHelper;
        this.toastService = toastService;
        this.loggedInStatus = false;
    }
    ngOnInit() {
        this.user$.subscribe(user => this.loggedInStatus = user.loggedIn);
    }
    logOut() {
        this.ngRedux.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["logout"])());
        localStorage.clear();
        this.routeHelper.coatCheck();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["NgRedux"] },
    { type: _route_helper_service__WEBPACK_IMPORTED_MODULE_4__["RouteHelperService"] },
    { type: _app_toast_service_service__WEBPACK_IMPORTED_MODULE_5__["AppToastService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["select"])()
], HeaderComponent.prototype, "user$", void 0);
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
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n.kennelCard h5 {\r\n  font-family: \"Leckerli One\", cursive;\r\n}\r\n\r\n.kennelCard strong {\r\n  font-family: \"Spinnaker\", sans-serif;\r\n}\r\n\r\np.buttonPWrapper {\r\n  text-align: center;\r\n}\r\n\r\nbutton.kennelCardToggleButton {\r\n  width: -webkit-fill-available;\r\n  max-width: 70vw;\r\n}\r\n\r\nbutton.kennelCardToggleButton h5 {\r\n  font-family: \"Leckerli One\", cursive;\r\n}\r\n\r\n/* .kennelCard {\r\n  width: auto;\r\n  max-width: 70vw;\r\n} */\r\n\r\n.kennelCardDeleteButton {\r\n  float:right;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva2VubmVsLWNhcmQva2VubmVsLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7OztHQUdHOztBQUVIO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAva2VubmVsLWNhcmQva2VubmVsLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmtlbm5lbENhcmQgaDUge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkxlY2tlcmxpIE9uZVwiLCBjdXJzaXZlO1xyXG59XHJcblxyXG4ua2VubmVsQ2FyZCBzdHJvbmcge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlNwaW5uYWtlclwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5wLmJ1dHRvblBXcmFwcGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmJ1dHRvbi5rZW5uZWxDYXJkVG9nZ2xlQnV0dG9uIHtcclxuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICBtYXgtd2lkdGg6IDcwdnc7XHJcbn1cclxuXHJcbmJ1dHRvbi5rZW5uZWxDYXJkVG9nZ2xlQnV0dG9uIGg1IHtcclxuICBmb250LWZhbWlseTogXCJMZWNrZXJsaSBPbmVcIiwgY3Vyc2l2ZTtcclxufVxyXG5cclxuLyogLmtlbm5lbENhcmQge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1heC13aWR0aDogNzB2dztcclxufSAqL1xyXG5cclxuLmtlbm5lbENhcmREZWxldGVCdXR0b24ge1xyXG4gIGZsb2F0OnJpZ2h0O1xyXG59XHJcbiJdfQ== */");

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
/* harmony import */ var _app_toast_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-toast-service.service */ "./src/app/app-toast-service.service.ts");




let KennelCardComponent = class KennelCardComponent {
    constructor(dbService, toastService) {
        this.dbService = dbService;
        this.toastService = toastService;
        this.isCollapsed = true;
    }
    ngOnInit() {
        console.log('balaclava');
        this.cardHeaderId = this.catData.id + "-heading";
        this.buttonDataTarget = "#" + this.catData.id + "-collapse";
        this.catBreed = this.catData.breeds && this.catData.breeds.primary !== undefined ? this.catData.breeds.primary : "N/A";
        this.catColor = this.catData.colors && this.catData.colors.primary !== undefined ? this.catData.colors.primary : "N/A";
        console.log(this.cardHeaderId, this.buttonDataTarget);
    }
    removeCat() {
        console.log(this.catData);
        this.dbService.removeCatFromDB(this.catData.id);
        let toastBody = this.catData.name + " was removed.";
        this.toastService.show('Grab Dat Cat', toastBody, { classname: 'bg-danger text-light', delay: 5000 });
        // this.toastService.remove()
    }
};
KennelCardComponent.ctorParameters = () => [
    { type: _database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"] },
    { type: _app_toast_service_service__WEBPACK_IMPORTED_MODULE_3__["AppToastService"] }
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
/* harmony default export */ __webpack_exports__["default"] = ("#kennelBanner {\r\n  text-align: center;\r\n  color: #Fb3640;\r\n  background: #2b4570;\r\n}\r\n\r\n\r\n\r\n#kennelBanner h2 {\r\n  font-family: \"Leckerli One\", cursive;\r\n}\r\n\r\n\r\n\r\n#kennelBanner aside {\r\n  font-family: \"Spinnaker\", sans-serif;\r\n  font-style: italic;\r\n}\r\n\r\n\r\n\r\n#noCatsMessage {\r\n  text-align: center;\r\n  font-family:\"Leckerli One\",cursive;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva2VubmVsL2tlbm5lbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7Ozs7QUFJQTtFQUNFLG9DQUFvQztBQUN0Qzs7OztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGtCQUFrQjtBQUNwQjs7OztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtDQUFrQztBQUNwQyIsImZpbGUiOiJzcmMvYXBwL2tlbm5lbC9rZW5uZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNrZW5uZWxCYW5uZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI0ZiMzY0MDtcclxuICBiYWNrZ3JvdW5kOiAjMmI0NTcwO1xyXG59XHJcblxyXG5cclxuXHJcbiNrZW5uZWxCYW5uZXIgaDIge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkxlY2tlcmxpIE9uZVwiLCBjdXJzaXZlO1xyXG59XHJcblxyXG4ja2VubmVsQmFubmVyIGFzaWRlIHtcclxuICBmb250LWZhbWlseTogXCJTcGlubmFrZXJcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbiNub0NhdHNNZXNzYWdlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6XCJMZWNrZXJsaSBPbmVcIixjdXJzaXZlO1xyXG59XHJcbiJdfQ== */");

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
/* harmony import */ var _route_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../route-helper.service */ "./src/app/route-helper.service.ts");





let KennelComponent = class KennelComponent {
    constructor(ngRedux, dbService, routeHelper) {
        this.ngRedux = ngRedux;
        this.dbService = dbService;
        this.routeHelper = routeHelper;
    }
    ngOnInit() {
        this.routeHelper.bouncer();
        // this.dbService.obtainAndRefreshTokenAndState();
        this.user$.subscribe(user => this.kennelCats = user.cats);
    }
};
KennelComponent.ctorParameters = () => [
    { type: _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["NgRedux"] },
    { type: _database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"] },
    { type: _route_helper_service__WEBPACK_IMPORTED_MODULE_4__["RouteHelperService"] }
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
/* harmony default export */ __webpack_exports__["default"] = ("#loginBanner {\r\n  background: #2B4570;\r\n  text-align: center;\r\n\r\n}\r\n\r\n#loginBanner h2 {\r\n  font-family: \"Leckerli One\", cursive;\r\n  color: #FB3640;\r\n\r\n}\r\n\r\n#loginBanner aside {\r\n  font-family: \"Spinnaker\", sans-serif;\r\n  color: #FB3640;\r\n}\r\n\r\n#loginForm {\r\n  margin:auto 5vw;\r\n}\r\n\r\n#loginForm label {\r\n  font-family: \"Leckerli One\", cursive;\r\n  color: #8F3985;\r\n}\r\n\r\n#loginForm input {\r\n  font-family: \"Spinnaker\", sans-serif;\r\n}\r\n\r\n#loginForm button {\r\n  font-family:\"Leckerli One\", cursive;\r\n  display: block;\r\n  margin: 8vw auto;\r\n  padding: 5vw;\r\n}\r\n\r\n@media screen and (min-width: 426px) {\r\n  #loginForm button {\r\n    margin: 5vw auto;\r\n    padding: 1.5vw;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7O0FBRXBCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGNBQWM7O0FBRWhCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBR0E7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xvZ2luQmFubmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMkI0NTcwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbiNsb2dpbkJhbm5lciBoMiB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTGVja2VybGkgT25lXCIsIGN1cnNpdmU7XHJcbiAgY29sb3I6ICNGQjM2NDA7XHJcblxyXG59XHJcblxyXG4jbG9naW5CYW5uZXIgYXNpZGUge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlNwaW5uYWtlclwiLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjRkIzNjQwO1xyXG59XHJcblxyXG4jbG9naW5Gb3JtIHtcclxuICBtYXJnaW46YXV0byA1dnc7XHJcbn1cclxuXHJcbiNsb2dpbkZvcm0gbGFiZWwge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkxlY2tlcmxpIE9uZVwiLCBjdXJzaXZlO1xyXG4gIGNvbG9yOiAjOEYzOTg1O1xyXG59XHJcblxyXG4jbG9naW5Gb3JtIGlucHV0IHtcclxuICBmb250LWZhbWlseTogXCJTcGlubmFrZXJcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuI2xvZ2luRm9ybSBidXR0b24ge1xyXG4gIGZvbnQtZmFtaWx5OlwiTGVja2VybGkgT25lXCIsIGN1cnNpdmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiA4dncgYXV0bztcclxuICBwYWRkaW5nOiA1dnc7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MjZweCkge1xyXG4gICNsb2dpbkZvcm0gYnV0dG9uIHtcclxuICAgIG1hcmdpbjogNXZ3IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxLjV2dztcclxuICB9XHJcbn1cclxuIl19 */");

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_toast_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-toast-service.service */ "./src/app/app-toast-service.service.ts");






let LoginComponent = class LoginComponent {
    constructor(ngRedux, router, toastService) {
        this.ngRedux = ngRedux;
        this.router = router;
        this.toastService = toastService;
        this.userCredentials = {
            username: null,
            password: null
        };
        this.loginFormIsDisabled = false;
    }
    ngOnInit() {
    }
    toastSuccessAndRedirect() {
        this.toastService.show("Grab Dat Cat", "Login Successful!", { classname: 'bg-success text-light', delay: 5000 });
        setTimeout(() => {
            this.router.navigate(['/search']);
        }, 2000);
    }
    // show(header:string, body: string, options: any={}) {
    //   this.toasts.push({header, body, ...options});
    // }
    //
    onSubmit() {
        console.log(this.userCredentials);
        this.ngRedux.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["logIn"])(this.userCredentials)).then(() => {
            localStorage.getItem('authToken') ? this.toastSuccessAndRedirect() : this.toastService.show("Grab Dat Cat", "Login Failed", { classname: 'bg-danger text-light', delay: 5000 });
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["NgRedux"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _app_toast_service_service__WEBPACK_IMPORTED_MODULE_5__["AppToastService"] }
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

/***/ "./src/app/route-helper.service.ts":
/*!*****************************************!*\
  !*** ./src/app/route-helper.service.ts ***!
  \*****************************************/
/*! exports provided: RouteHelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteHelperService", function() { return RouteHelperService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let RouteHelperService = class RouteHelperService {
    constructor(router) {
        this.router = router;
    }
    //A function that runs on the ngInit of several components which boots people
    //if they aren't signed in which should be apparent by the presence of an
    //authToken in localStorage
    bouncer() {
        //checks for authToken like an ID at the club
        localStorage.getItem('authToken') ? null : this.router.navigate(['/about']);
    }
    coatCheck() {
        //like when you get your coat from a fancy place before leaving.
        //So we're going to make sure that our localStorage is empty, though I'm sure this is handled already.
        //and then we will re-route our friends to /about
        this.router.navigate(['/about']);
    }
};
RouteHelperService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
RouteHelperService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RouteHelperService);



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#searchBanner {\r\n  color: #E3F2FD;\r\n  text-align: center;\r\n  background: #9A7AA0;\r\n}\r\n\r\n\r\n\r\n#searchBanner h2 {\r\n  font-family: \"Leckerli One\", cursive;\r\n}\r\n\r\n\r\n\r\n#searchBanner aside {\r\n  font-family: \"Spinnaker\", sans-serif;\r\n}\r\n\r\n\r\n\r\nform {\r\n  text-align: center;\r\n}\r\n\r\n\r\n\r\nform h2 {\r\n  font-family: \"Leckerli One\", cursive;\r\n}\r\n\r\n\r\n\r\nform select {\r\n  font-family: \"Spinnaker\", sans-serif;\r\n  text-align: center;\r\n  width:90%;\r\n}\r\n\r\n\r\n\r\nform aside {\r\n  font-family: \"Spinakker\", sans-serif;\r\n}\r\n\r\n\r\n\r\n#searchButton {\r\n  margin-top: 2vw;\r\n  font-family: \"Leckerli One\", cursive;\r\n}\r\n\r\n\r\n\r\n@media screen and (min-width: 426px) {\r\n\r\n  #searchButton {\r\n    display: block;\r\n    margin: 2vw auto;\r\n  }\r\n}\r\n\r\n\r\n\r\n@media screen and (min-width: 769px) {\r\n  select {\r\n    width: auto;\r\n    max-width: 45%\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7Ozs7QUFJQTtFQUNFLG9DQUFvQztBQUN0Qzs7OztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOzs7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7Ozs7QUFHQTtFQUNFLG9DQUFvQztBQUN0Qzs7OztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7Ozs7QUFJQTtFQUNFLG9DQUFvQztBQUN0Qzs7OztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9DQUFvQztBQUN0Qzs7OztBQUVBOztFQUVFO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtFQUNsQjtBQUNGOzs7O0FBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWDtFQUNGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2VhcmNoQmFubmVyIHtcclxuICBjb2xvcjogI0UzRjJGRDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogIzlBN0FBMDtcclxufVxyXG5cclxuXHJcblxyXG4jc2VhcmNoQmFubmVyIGgyIHtcclxuICBmb250LWZhbWlseTogXCJMZWNrZXJsaSBPbmVcIiwgY3Vyc2l2ZTtcclxufVxyXG5cclxuI3NlYXJjaEJhbm5lciBhc2lkZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiU3Bpbm5ha2VyXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbmZvcm0gaDIge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkxlY2tlcmxpIE9uZVwiLCBjdXJzaXZlO1xyXG59XHJcblxyXG5mb3JtIHNlbGVjdCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiU3Bpbm5ha2VyXCIsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOjkwJTtcclxufVxyXG5cclxuXHJcblxyXG5mb3JtIGFzaWRlIHtcclxuICBmb250LWZhbWlseTogXCJTcGluYWtrZXJcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuI3NlYXJjaEJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMnZ3O1xyXG4gIGZvbnQtZmFtaWx5OiBcIkxlY2tlcmxpIE9uZVwiLCBjdXJzaXZlO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MjZweCkge1xyXG5cclxuICAjc2VhcmNoQnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAydncgYXV0bztcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XHJcbiAgc2VsZWN0IHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiA0NSVcclxuICB9XHJcbn1cclxuIl19 */");

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
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../account.service */ "./src/app/account.service.ts");
/* harmony import */ var _route_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../route-helper.service */ "./src/app/route-helper.service.ts");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/fesm2015/angular-redux-store.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let SearchComponent = class SearchComponent {
    constructor(petFinderService, ngRedux, accountService, routeHelper) {
        this.petFinderService = petFinderService;
        this.ngRedux = ngRedux;
        this.accountService = accountService;
        this.routeHelper = routeHelper;
        this.catAges = ['baby', 'young', 'adult', 'senior'];
        // query: {} = {
        //   breeds: [],
        //   coats: [],
        //   colors: [],
        //   genders: []
        // }
        this.queryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            breed: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            coat: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            color: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('')
        });
    }
    ngOnInit() {
        this.routeHelper.bouncer();
        this.catBreeds = this.petFinderService.getCatBreeds();
        this.catCoats = this.petFinderService.getCatColorCoatSex().then(res => res.coats);
        this.catColors = this.petFinderService.getCatColorCoatSex().then(res => res.colors);
        this.catGenders = this.petFinderService.getCatColorCoatSex().then(res => res.genders);
        this.user$.subscribe(user => this.user = user);
        // this.catSuggestion =   this.user.zodiacCombo.catType ? "According to our cat overlords, people with your zodiac sign would pair best with a " + user.zodiacCombo.catType + " cat!": "N/A"
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
    { type: _angular_redux_store__WEBPACK_IMPORTED_MODULE_5__["NgRedux"] },
    { type: _account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"] },
    { type: _route_helper_service__WEBPACK_IMPORTED_MODULE_4__["RouteHelperService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_5__["select"])()
], SearchComponent.prototype, "user$", void 0);
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
/* harmony default export */ __webpack_exports__["default"] = ("form {\r\n  text-align: center;\r\n}\r\n\r\nlabel {\r\n  font-family: \"Spinnaker\", sans-serif;\r\n}\r\n\r\n#signupBanner{\r\n  background: #9A7AA0;\r\n  text-align: center;\r\n}\r\n\r\n#signupBanner h2 {\r\n  font-family: \"Leckerli One\", cursive;\r\n  color: #Faa275;\r\n}\r\n\r\n#signupBanner aside {\r\n  font-family: \"Spinnaker\", sans-serif;\r\n  color: #Faa275;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBmb250LWZhbWlseTogXCJTcGlubmFrZXJcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuI3NpZ251cEJhbm5lcntcclxuICBiYWNrZ3JvdW5kOiAjOUE3QUEwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI3NpZ251cEJhbm5lciBoMiB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTGVja2VybGkgT25lXCIsIGN1cnNpdmU7XHJcbiAgY29sb3I6ICNGYWEyNzU7XHJcbn1cclxuXHJcbiNzaWdudXBCYW5uZXIgYXNpZGUge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlNwaW5uYWtlclwiLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjRmFhMjc1O1xyXG59XHJcbiJdfQ== */");

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
        this.submitDisabled = true;
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
        cats: [],
        zodiacCombo: {}
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
            let { username, firstName, lastName, birthday, cats, zodiacCombo } = action.payload.user;
            let { authToken } = action.payload;
            return Object.assign({}, state, Object.assign({}, state, { user: {
                    username,
                    firstName,
                    lastName,
                    birthday,
                    cats,
                    authToken,
                    zodiacCombo,
                    loggedIn: true,
                } }));
        case _actions__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT"]:
            console.log('you are logging out');
            return Object.assign({}, state, INITIAL_STATE);
        case _actions__WEBPACK_IMPORTED_MODULE_1__["REFRESH_STATE"]:
            console.log('dispatching REFRESH_STATE from reducer');
            console.log(action.payload);
            return Object.assign({}, state, Object.assign({}, state, { user: {
                    username: action.payload.username,
                    loggedIn: true,
                    firstName: action.payload.firstName,
                    lastName: action.payload.lastName,
                    birthday: action.payload.birthday,
                    cats: action.payload.cats,
                    zodiacCombo: action.payload.zodiacCombo,
                    authToken: action.payload.authToken
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
    // API_BASE_URL: "http://localhost:8000",
    API_BASE_URL: "https://fast-peak-68791.herokuapp.com",
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\adria\Development\gdc2Client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map