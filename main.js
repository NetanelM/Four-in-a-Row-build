(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-popup-wins></app-popup-wins>\n<app-players></app-players>\n<app-game></app-game>\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'fourInRow';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
/* harmony import */ var _players_players_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./players/players.component */ "./src/app/players/players.component.ts");
/* harmony import */ var _meta_date_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./meta-date.service */ "./src/app/meta-date.service.ts");
/* harmony import */ var _popup_wins_popup_wins_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./popup-wins/popup-wins.component */ "./src/app/popup-wins/popup-wins.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _game_game_component__WEBPACK_IMPORTED_MODULE_5__["GameComponent"],
                _players_players_component__WEBPACK_IMPORTED_MODULE_6__["PlayersComponent"],
                _popup_wins_popup_wins_component__WEBPACK_IMPORTED_MODULE_8__["PopupWinsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [_meta_date_service__WEBPACK_IMPORTED_MODULE_7__["MetaDateService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/game/game.component.css":
/*!*****************************************!*\
  !*** ./src/app/game/game.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".game-scope {\r\n  width: 50%;\r\n  margin: 0 auto;\r\n  position: relative;\r\n}\r\n\r\n.row-game {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.board {\r\n  border: 20px solid rgb(69, 170, 184);\r\n  background: #45aab8;\r\n  justify-content: center;\r\n}\r\n\r\n.cell {\r\n  width: 50px;\r\n  height: 50px;\r\n  border: 10px solid rgb(0, 73, 83);\r\n  border-radius: 37px;\r\n  margin: 0px 0 7px 0px;\r\n  background-color: white;\r\n  cursor: pointer;\r\n}\r\n\r\n.cell-red {\r\n  background-color: #ff6a6a;\r\n}\r\n\r\n.cell-blue {\r\n  background-color: #0376d1;\r\n}\r\n\r\n.newGame{\r\n  height: 30px;\r\n  background-color: #607D8B;\r\n  color: #ffffff;\r\n  text-align: center;\r\n  box-shadow: 3px 3px 7px 0 #bec3c6;\r\n\r\n  cursor: pointer;\r\n}\r\n\r\n.leftFoot, .rightFoot {\r\n  background-color:rgb(69, 170, 184);\r\n  width:30px;\r\n  height:100px;\r\n  float:left;\r\n}\r\n\r\n.leftFoot {\r\n\r\n}\r\n\r\n.rightFoot {\r\n  float:right;\r\n\r\n}\r\n\r\n.leftFoot:after, .rightFoot:after {\r\n  content:' ';\r\n  width: 0;\r\n  height: 0;\r\n  border-left: 35px solid transparent;\r\n  border-right: 35px solid transparent;\r\n  border-bottom: 80px solid rgb(69, 170, 184);\r\n  position: absolute;\r\n  bottom: -100px;\r\n}\r\n\r\n.leftFoot:after {\r\n  left:-20px;\r\n}\r\n\r\n.rightFoot:after {\r\n  right:-20px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9nYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUNBQWlDOztFQUVqQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLFVBQVU7RUFDVixZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBOztBQUVBOztBQUNBO0VBQ0UsV0FBVzs7QUFFYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxRQUFRO0VBQ1IsU0FBUztFQUNULG1DQUFtQztFQUNuQyxvQ0FBb0M7RUFDcEMsMkNBQTJDO0VBQzNDLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUNBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS9nYW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2FtZS1zY29wZSB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5yb3ctZ2FtZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5ib2FyZCB7XHJcbiAgYm9yZGVyOiAyMHB4IHNvbGlkIHJnYig2OSwgMTcwLCAxODQpO1xyXG4gIGJhY2tncm91bmQ6ICM0NWFhYjg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jZWxsIHtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYm9yZGVyOiAxMHB4IHNvbGlkIHJnYigwLCA3MywgODMpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDM3cHg7XHJcbiAgbWFyZ2luOiAwcHggMCA3cHggMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNlbGwtcmVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2YTZhO1xyXG59XHJcblxyXG4uY2VsbC1ibHVlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDM3NmQxO1xyXG59XHJcblxyXG4ubmV3R2FtZXtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwN0Q4QjtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzogM3B4IDNweCA3cHggMCAjYmVjM2M2O1xyXG5cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5sZWZ0Rm9vdCwgLnJpZ2h0Rm9vdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoNjksIDE3MCwgMTg0KTtcclxuICB3aWR0aDozMHB4O1xyXG4gIGhlaWdodDoxMDBweDtcclxuICBmbG9hdDpsZWZ0O1xyXG59XHJcblxyXG4ubGVmdEZvb3Qge1xyXG5cclxufVxyXG4ucmlnaHRGb290IHtcclxuICBmbG9hdDpyaWdodDtcclxuXHJcbn1cclxuXHJcbi5sZWZ0Rm9vdDphZnRlciwgLnJpZ2h0Rm9vdDphZnRlciB7XHJcbiAgY29udGVudDonICc7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIGJvcmRlci1sZWZ0OiAzNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yaWdodDogMzVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItYm90dG9tOiA4MHB4IHNvbGlkIHJnYig2OSwgMTcwLCAxODQpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IC0xMDBweDtcclxufVxyXG5cclxuLmxlZnRGb290OmFmdGVyIHtcclxuICBsZWZ0Oi0yMHB4O1xyXG59XHJcbi5yaWdodEZvb3Q6YWZ0ZXIge1xyXG4gIHJpZ2h0Oi0yMHB4O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/game/game.component.html":
/*!******************************************!*\
  !*** ./src/app/game/game.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"game-scope\">\n   <div class=\"board\">\n    <div class=\"row-game\" *ngFor=\"let data of metaDateService.dataGame let prent = index\">\n        <div *ngFor=\"let d of data let columnNumber = index\"  (click)=\"checkWinner(metaDateService.dataGame,columnNumber)\" class=\"cell\"\n             [ngClass]=\"{'cell-red': d === 1 , 'cell-blue' : d  === 2}\" ></div>\n    </div>\n  </div>\n\n  <div class=\"leftFoot\"></div>\n  <div class=\"rightFoot\"></div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/game/game.component.ts":
/*!****************************************!*\
  !*** ./src/app/game/game.component.ts ***!
  \****************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _meta_date_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../meta-date.service */ "./src/app/meta-date.service.ts");



var GameComponent = /** @class */ (function () {
    function GameComponent(metaDateService) {
        this.metaDateService = metaDateService;
    }
    GameComponent.prototype.ngOnInit = function () {
    };
    GameComponent.prototype.checkLine = function (a, b, c, d) {
        // Check first cell non-zero and all cells match
        return ((a != 0) && (a == b) && (a == c) && (a == d));
    };
    GameComponent.prototype.checkWinner = function (dataGame, columnNumber) {
        this.metaDateService.player = this.metaDateService.player === 1 ? 2 : 1;
        //selecting a point according to the player
        this.placePoint(columnNumber);
        // Check down
        for (var r = 0; r < 3; r++)
            for (var c = 0; c < 7; c++)
                if (this.checkLine(dataGame[r][c], dataGame[r + 1][c], dataGame[r + 2][c], dataGame[r + 3][c]))
                    return this.winnerIs(dataGame[r][c]);
        // Check right
        for (var r = 0; r < 6; r++)
            for (var c = 0; c < 4; c++)
                if (this.checkLine(dataGame[r][c], dataGame[r][c + 1], dataGame[r][c + 2], dataGame[r][c + 3]))
                    return this.winnerIs(dataGame[r][c]);
        // Check down-right
        for (var r = 0; r < 3; r++)
            for (var c = 0; c < 4; c++)
                if (this.checkLine(dataGame[r][c], dataGame[r + 1][c + 1], dataGame[r + 2][c + 2], dataGame[r + 3][c + 3]))
                    return this.winnerIs(dataGame[r][c]);
        // Check down-left
        for (var r = 3; r < 6; r++)
            for (var c = 0; c < 4; c++)
                if (this.checkLine(dataGame[r][c], dataGame[r - 1][c + 1], dataGame[r - 2][c + 2], dataGame[r - 3][c + 3]))
                    return this.winnerIs(dataGame[r][c]);
        return 0;
    };
    GameComponent.prototype.winnerIs = function (playerNumber) {
        this.metaDateService.player = playerNumber;
        this.metaDateService.popupToggle = true;
    };
    GameComponent.prototype.placePoint = function (index) {
        for (var r = 5; r >= 0; r--)
            for (var c = 0; c < 7; c++)
                if (c === index && this.metaDateService.dataGame[r][c] === 0) {
                    this.metaDateService.dataGame[r][c] = this.metaDateService.player;
                    return;
                }
    };
    GameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-game',
            template: __webpack_require__(/*! ./game.component.html */ "./src/app/game/game.component.html"),
            styles: [__webpack_require__(/*! ./game.component.css */ "./src/app/game/game.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_meta_date_service__WEBPACK_IMPORTED_MODULE_2__["MetaDateService"]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./src/app/meta-date.service.ts":
/*!**************************************!*\
  !*** ./src/app/meta-date.service.ts ***!
  \**************************************/
/*! exports provided: MetaDateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaDateService", function() { return MetaDateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MetaDateService = /** @class */ (function () {
    function MetaDateService() {
        this.player = 1;
        this.popupToggle = false;
        this.dataGame = [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0]
        ];
    }
    MetaDateService.prototype.newGame = function () {
        this.dataGame = [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0]
        ];
    };
    MetaDateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MetaDateService);
    return MetaDateService;
}());



/***/ }),

/***/ "./src/app/players/players.component.css":
/*!***********************************************!*\
  !*** ./src/app/players/players.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".players {\r\ndisplay: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.but {\r\n  height: 30px;\r\n  width: 50%;\r\n  color: white;\r\n  text-align: center;\r\n  line-height: 1.5;\r\n  border-bottom: solid 4px #5a5b5b;\r\n  -webkit-animation-name: myAnimation;\r\n          animation-name: myAnimation;\r\n  -webkit-animation-duration: 1s;\r\n          animation-duration: 1s;\r\n}\r\n\r\n.player-1 {\r\n\r\n  background-color: #ff6a6a;\r\n}\r\n\r\n.player-2 {\r\n  background-color: #0376d1;\r\n}\r\n\r\n.queue{\r\n  background-color: #5a5b5b;\r\n  border-bottom: solid 4px #eaea24;\r\n}\r\n\r\n@-webkit-keyframes myAnimation{\r\n  0%{\r\n    transform: rotateX(90deg);\r\n  }\r\n  100%{\r\n    transform: rotateX(0deg);\r\n  }\r\n\r\n}\r\n\r\n@keyframes myAnimation{\r\n  0%{\r\n    transform: rotateX(90deg);\r\n  }\r\n  100%{\r\n    transform: rotateX(0deg);\r\n  }\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWVycy9wbGF5ZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxhQUFhO0VBQ1gsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQiw4QkFBc0I7VUFBdEIsc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixnQ0FBZ0M7QUFDbEM7O0FBR0E7RUFDRTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0Usd0JBQXdCO0VBQzFCOztBQUVGOztBQVJBO0VBQ0U7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHdCQUF3QjtFQUMxQjs7QUFFRiIsImZpbGUiOiJzcmMvYXBwL3BsYXllcnMvcGxheWVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBsYXllcnMge1xyXG5kaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYnV0IHtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgNHB4ICM1YTViNWI7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IG15QW5pbWF0aW9uO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbn1cclxuXHJcbi5wbGF5ZXItMSB7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjZhNmE7XHJcbn1cclxuLnBsYXllci0yIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDM3NmQxO1xyXG59XHJcblxyXG4ucXVldWV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVhNWI1YjtcclxuICBib3JkZXItYm90dG9tOiBzb2xpZCA0cHggI2VhZWEyNDtcclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgbXlBbmltYXRpb257XHJcbiAgMCV7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpO1xyXG4gIH1cclxuICAxMDAle1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/players/players.component.html":
/*!************************************************!*\
  !*** ./src/app/players/players.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"players\">\n  <div *ngIf=\"metaDateService.player !== 1\" class=\"but player-1\" [ngClass]=\"{'queue': metaDateService.player === 1 }\">Player 1</div>\n  <div *ngIf=\"metaDateService.player !== 2\" class=\"but player-2\" [ngClass]=\"{'queue': metaDateService.player === 2 }\">Player 2</div>\n</div>\n"

/***/ }),

/***/ "./src/app/players/players.component.ts":
/*!**********************************************!*\
  !*** ./src/app/players/players.component.ts ***!
  \**********************************************/
/*! exports provided: PlayersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersComponent", function() { return PlayersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _meta_date_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../meta-date.service */ "./src/app/meta-date.service.ts");



var PlayersComponent = /** @class */ (function () {
    function PlayersComponent(metaDateService) {
        this.metaDateService = metaDateService;
    }
    PlayersComponent.prototype.ngOnInit = function () {
    };
    PlayersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-players',
            template: __webpack_require__(/*! ./players.component.html */ "./src/app/players/players.component.html"),
            styles: [__webpack_require__(/*! ./players.component.css */ "./src/app/players/players.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_meta_date_service__WEBPACK_IMPORTED_MODULE_2__["MetaDateService"]])
    ], PlayersComponent);
    return PlayersComponent;
}());



/***/ }),

/***/ "./src/app/popup-wins/popup-wins.component.css":
/*!*****************************************************!*\
  !*** ./src/app/popup-wins/popup-wins.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".popup-wins {\r\n  width: 22%;\r\n  right: 22px;\r\n  bottom: 70px;\r\n  position: absolute;\r\n  box-shadow: 5px 15px 30px 0px #4b4b4b;\r\n  background-color: white;\r\n  border-radius: 8px;\r\n  margin: 0 auto;\r\n  height: 40%;\r\n  z-index: 1;\r\n  -webkit-animation: shake 1s cubic-bezier(.36, .07, .19, .97) both;\r\n  animation: shake 1s cubic-bezier(.36, .07, .19, .97) both;\r\n}\r\n\r\n@-webkit-keyframes shake {\r\n  10%, 90% {\r\n    transform: translate3d(-1px, 0, 0);\r\n  }\r\n\r\n  20%, 80% {\r\n    transform: translate3d(5px, 0, 0);\r\n  }\r\n\r\n  30%, 50%, 70% {\r\n    transform: translate3d(-4px, 0, 0);\r\n  }\r\n\r\n  40%, 60% {\r\n    transform: translate3d(4px, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes shake {\r\n  10%, 90% {\r\n    transform: translate3d(-1px, 0, 0);\r\n  }\r\n\r\n  20%, 80% {\r\n    transform: translate3d(5px, 0, 0);\r\n  }\r\n\r\n  30%, 50%, 70% {\r\n    transform: translate3d(-4px, 0, 0);\r\n  }\r\n\r\n  40%, 60% {\r\n    transform: translate3d(4px, 0, 0);\r\n  }\r\n}\r\n\r\n.winner{\r\n  font-size: 25px;\r\n  text-align: center;\r\n  position: relative;\r\n  top: 60px;\r\n}\r\n\r\n.trophy-img {\r\n  width: 100px;\r\n}\r\n\r\n.smile-img {\r\n  width: 25px;\r\n}\r\n\r\n.play-again{\r\n  width: 120px;\r\n  cursor: pointer;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 8px;\r\n  box-shadow: 1px 3px 5px 0;\r\n  position: absolute;\r\n  right: 16px;\r\n  bottom: 14px;\r\n  border-radius: 8px;\r\n  -webkit-animation: shake 1s cubic-bezier(.36, .07, .19, .97) both;\r\n          animation: shake 1s cubic-bezier(.36, .07, .19, .97) both;\r\n  -webkit-animation-duration: 4s;\r\n          animation-duration: 4s;\r\n  -webkit-animation-iteration-count: infinite;\r\n          animation-iteration-count: infinite;\r\n}\r\n\r\n.full-screen{\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100%;\r\n  left: 0;\r\n  top: 0;\r\n  background: rgba(51,51,51,0.7);\r\n  z-index: 1;\r\n  cursor: not-allowed;\r\n}\r\n\r\n.blue{\r\n  color: #0376d1;\r\n}\r\n\r\n.red{\r\n  color: #ff6a6a;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9wdXAtd2lucy9wb3B1cC13aW5zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUNBQXFDO0VBQ3JDLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFdBQVc7RUFDWCxVQUFVO0VBQ1YsaUVBQWlFO0VBQ2pFLHlEQUF5RDtBQUMzRDs7QUFFQTtFQUNFO0lBQ0Usa0NBQWtDO0VBQ3BDOztFQUVBO0lBQ0UsaUNBQWlDO0VBQ25DOztFQUVBO0lBQ0Usa0NBQWtDO0VBQ3BDOztFQUVBO0lBQ0UsaUNBQWlDO0VBQ25DO0FBQ0Y7O0FBaEJBO0VBQ0U7SUFDRSxrQ0FBa0M7RUFDcEM7O0VBRUE7SUFDRSxpQ0FBaUM7RUFDbkM7O0VBRUE7SUFDRSxrQ0FBa0M7RUFDcEM7O0VBRUE7SUFDRSxpQ0FBaUM7RUFDbkM7QUFDRjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpRUFBeUQ7VUFBekQseURBQXlEO0VBQ3pELDhCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsMkNBQW1DO1VBQW5DLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLE9BQU87RUFDUCxNQUFNO0VBQ04sOEJBQThCO0VBQzlCLFVBQVU7RUFDVixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3BvcHVwLXdpbnMvcG9wdXAtd2lucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvcHVwLXdpbnMge1xyXG4gIHdpZHRoOiAyMiU7XHJcbiAgcmlnaHQ6IDIycHg7XHJcbiAgYm90dG9tOiA3MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3gtc2hhZG93OiA1cHggMTVweCAzMHB4IDBweCAjNGI0YjRiO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBoZWlnaHQ6IDQwJTtcclxuICB6LWluZGV4OiAxO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzaGFrZSAxcyBjdWJpYy1iZXppZXIoLjM2LCAuMDcsIC4xOSwgLjk3KSBib3RoO1xyXG4gIGFuaW1hdGlvbjogc2hha2UgMXMgY3ViaWMtYmV6aWVyKC4zNiwgLjA3LCAuMTksIC45NykgYm90aDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzaGFrZSB7XHJcbiAgMTAlLCA5MCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMXB4LCAwLCAwKTtcclxuICB9XHJcblxyXG4gIDIwJSwgODAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNXB4LCAwLCAwKTtcclxuICB9XHJcblxyXG4gIDMwJSwgNTAlLCA3MCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNHB4LCAwLCAwKTtcclxuICB9XHJcblxyXG4gIDQwJSwgNjAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNHB4LCAwLCAwKTtcclxuICB9XHJcbn1cclxuXHJcbi53aW5uZXJ7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA2MHB4O1xyXG59XHJcblxyXG4udHJvcGh5LWltZyB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG4uc21pbGUtaW1nIHtcclxuICB3aWR0aDogMjVweDtcclxufVxyXG5cclxuLnBsYXktYWdhaW57XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgYm94LXNoYWRvdzogMXB4IDNweCA1cHggMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDE2cHg7XHJcbiAgYm90dG9tOiAxNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBhbmltYXRpb246IHNoYWtlIDFzIGN1YmljLWJlemllciguMzYsIC4wNywgLjE5LCAuOTcpIGJvdGg7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0cztcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxufVxyXG5cclxuLmZ1bGwtc2NyZWVue1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgYmFja2dyb3VuZDogcmdiYSg1MSw1MSw1MSwwLjcpO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG5cclxuLmJsdWV7XHJcbiAgY29sb3I6ICMwMzc2ZDE7XHJcbn1cclxuXHJcbi5yZWR7XHJcbiAgY29sb3I6ICNmZjZhNmE7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/popup-wins/popup-wins.component.html":
/*!******************************************************!*\
  !*** ./src/app/popup-wins/popup-wins.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"metaDateService.popupToggle\" class=\"full-screen\"></div>\n<div *ngIf=\"metaDateService.popupToggle\" class=\"popup-wins\">\n\n  <div class=\"winner\">The <img class=\"trophy-img\" src=\"./assets/trophy.svg\" alt=\"the winner is\"> is :\n    <span [ngClass]=\"{'red': metaDateService.player === 1,'blue': metaDateService.player === 2 }\">\n      {{metaDateService.player}}</span>\n  </div>\n\n  <div class=\"play-again\" (click)=\"playAgain()\">Play Again <img class=\"smile-img\" src=\"./assets/smile.svg\"></div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/popup-wins/popup-wins.component.ts":
/*!****************************************************!*\
  !*** ./src/app/popup-wins/popup-wins.component.ts ***!
  \****************************************************/
/*! exports provided: PopupWinsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupWinsComponent", function() { return PopupWinsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _meta_date_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../meta-date.service */ "./src/app/meta-date.service.ts");



var PopupWinsComponent = /** @class */ (function () {
    function PopupWinsComponent(metaDateService) {
        this.metaDateService = metaDateService;
    }
    PopupWinsComponent.prototype.ngOnInit = function () {
    };
    PopupWinsComponent.prototype.playAgain = function () {
        this.metaDateService.popupToggle = false;
        this.metaDateService.newGame();
    };
    PopupWinsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-popup-wins',
            template: __webpack_require__(/*! ./popup-wins.component.html */ "./src/app/popup-wins/popup-wins.component.html"),
            styles: [__webpack_require__(/*! ./popup-wins.component.css */ "./src/app/popup-wins/popup-wins.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_meta_date_service__WEBPACK_IMPORTED_MODULE_2__["MetaDateService"]])
    ], PopupWinsComponent);
    return PopupWinsComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\נתנאל מנצור\Desktop\Four-in-a-Row\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map