function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer-customer-module"], {
  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js":
  /*!************************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js ***!
    \************************************************************************/

  /*! exports provided: MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MAT_DIALOG_SCROLL_STRATEGY, MAT_DIALOG_SCROLL_STRATEGY_FACTORY, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY, MatDialog, MatDialogActions, MatDialogClose, MatDialogConfig, MatDialogContainer, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle, matDialogAnimations, throwMatDialogContentAlreadyAttachedError */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015DialogJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_DATA", function () {
      return MAT_DIALOG_DATA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_DEFAULT_OPTIONS", function () {
      return MAT_DIALOG_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY", function () {
      return MAT_DIALOG_SCROLL_STRATEGY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_FACTORY", function () {
      return MAT_DIALOG_SCROLL_STRATEGY_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_PROVIDER", function () {
      return MAT_DIALOG_SCROLL_STRATEGY_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY", function () {
      return MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDialog", function () {
      return MatDialog;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDialogActions", function () {
      return MatDialogActions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDialogClose", function () {
      return MatDialogClose;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDialogConfig", function () {
      return MatDialogConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDialogContainer", function () {
      return MatDialogContainer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDialogContent", function () {
      return MatDialogContent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDialogModule", function () {
      return MatDialogModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDialogRef", function () {
      return MatDialogRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDialogTitle", function () {
      return MatDialogTitle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matDialogAnimations", function () {
      return matDialogAnimations;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "throwMatDialogContentAlreadyAttachedError", function () {
      return throwMatDialogContentAlreadyAttachedError;
    });
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/dialog/dialog-config.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Possible overrides for a dialog's position.
     * @record
     */


    function MatDialogContainer_ng_template_0_Template(rf, ctx) {}

    function DialogPosition() {}

    if (false) {}
    /**
     * Configuration for opening a modal dialog with the MatDialog service.
     * @template D
     */


    var MatDialogConfig = function MatDialogConfig() {
      _classCallCheck(this, MatDialogConfig);

      /**
       * The ARIA role of the dialog element.
       */
      this.role = 'dialog';
      /**
       * Custom class for the overlay pane.
       */

      this.panelClass = '';
      /**
       * Whether the dialog has a backdrop.
       */

      this.hasBackdrop = true;
      /**
       * Custom class for the backdrop.
       */

      this.backdropClass = '';
      /**
       * Whether the user can use escape or clicking on the backdrop to close the modal.
       */

      this.disableClose = false;
      /**
       * Width of the dialog.
       */

      this.width = '';
      /**
       * Height of the dialog.
       */

      this.height = '';
      /**
       * Max-width of the dialog. If a number is provided, assumes pixel units. Defaults to 80vw.
       */

      this.maxWidth = '80vw';
      /**
       * Data being injected into the child component.
       */

      this.data = null;
      /**
       * ID of the element that describes the dialog.
       */

      this.ariaDescribedBy = null;
      /**
       * ID of the element that labels the dialog.
       */

      this.ariaLabelledBy = null;
      /**
       * Aria label to assign to the dialog element.
       */

      this.ariaLabel = null;
      /**
       * Whether the dialog should focus the first focusable element on open.
       */

      this.autoFocus = true;
      /**
       * Whether the dialog should restore focus to the
       * previously-focused element, after it's closed.
       */

      this.restoreFocus = true;
      /**
       * Whether the dialog should close when the user goes backwards/forwards in history.
       * Note that this usually doesn't include clicking on links (unless the user is using
       * the `HashLocationStrategy`).
       */

      this.closeOnNavigation = true; // TODO(jelbourn): add configuration for lifecycle hooks, ARIA labelling.
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/dialog/dialog-animations.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Animations used by MatDialog.
     * \@docs-private
     * @type {?}
     */


    var matDialogAnimations = {
      /**
       * Animation that is applied on the dialog container by defalt.
       */
      dialogContainer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('dialogContainer', [// Note: The `enter` animation transitions to `transform: none`, because for some reason
      // specifying the transform explicitly, causes IE both to blur the dialog content and
      // decimate the animation performance. Leaving it as `none` solves both issues.
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('void, exit', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
        opacity: 0,
        transform: 'scale(0.7)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
        transform: 'none'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('150ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
        transform: 'none',
        opacity: 1
      }))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => void, * => exit', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('75ms cubic-bezier(0.4, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
        opacity: 0
      })))])
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/dialog/dialog-container.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Throws an exception for the case when a ComponentPortal is
     * attached to a DomPortalOutlet without an origin.
     * \@docs-private
     * @return {?}
     */

    function throwMatDialogContentAlreadyAttachedError() {
      throw Error('Attempting to attach dialog content after content is already attached');
    }
    /**
     * Internal component that wraps user-provided dialog content.
     * Animation is based on https://material.io/guidelines/motion/choreography.html.
     * \@docs-private
     */


    var MatDialogContainer = /*#__PURE__*/function (_angular_cdk_portal__) {
      _inherits(MatDialogContainer, _angular_cdk_portal__);

      var _super = _createSuper(MatDialogContainer);

      /**
       * @param {?} _elementRef
       * @param {?} _focusTrapFactory
       * @param {?} _changeDetectorRef
       * @param {?} _document
       * @param {?} _config
       */
      function MatDialogContainer(_elementRef, _focusTrapFactory, _changeDetectorRef, _document, _config) {
        var _this;

        _classCallCheck(this, MatDialogContainer);

        _this = _super.call(this);
        _this._elementRef = _elementRef;
        _this._focusTrapFactory = _focusTrapFactory;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._config = _config;
        /**
         * Element that was focused before the dialog was opened. Save this to restore upon close.
         */

        _this._elementFocusedBeforeDialogWasOpened = null;
        /**
         * State of the dialog animation.
         */

        _this._state = 'enter';
        /**
         * Emits when an animation state changes.
         */

        _this._animationStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Attaches a DOM portal to the dialog container.
         * @param portal Portal to be attached.
         * @deprecated To be turned into a method.
         * \@breaking-change 10.0.0
         */

        _this.attachDomPortal =
        /**
        * @param {?} portal
        * @return {?}
        */
        function (portal) {
          if (_this._portalOutlet.hasAttached()) {
            throwMatDialogContentAlreadyAttachedError();
          }

          _this._savePreviouslyFocusedElement();

          return _this._portalOutlet.attachDomPortal(portal);
        };

        _this._ariaLabelledBy = _config.ariaLabelledBy || null;
        _this._document = _document;
        return _this;
      }
      /**
       * Attach a ComponentPortal as content to this dialog container.
       * @template T
       * @param {?} portal Portal to be attached as the dialog content.
       * @return {?}
       */


      _createClass(MatDialogContainer, [{
        key: "attachComponentPortal",
        value: function attachComponentPortal(portal) {
          if (this._portalOutlet.hasAttached()) {
            throwMatDialogContentAlreadyAttachedError();
          }

          this._savePreviouslyFocusedElement();

          return this._portalOutlet.attachComponentPortal(portal);
        }
        /**
         * Attach a TemplatePortal as content to this dialog container.
         * @template C
         * @param {?} portal Portal to be attached as the dialog content.
         * @return {?}
         */

      }, {
        key: "attachTemplatePortal",
        value: function attachTemplatePortal(portal) {
          if (this._portalOutlet.hasAttached()) {
            throwMatDialogContentAlreadyAttachedError();
          }

          this._savePreviouslyFocusedElement();

          return this._portalOutlet.attachTemplatePortal(portal);
        }
        /**
         * Moves focus back into the dialog if it was moved out.
         * @return {?}
         */

      }, {
        key: "_recaptureFocus",
        value: function _recaptureFocus() {
          if (!this._containsFocus()) {
            /** @type {?} */
            var focusWasTrapped = this._getFocusTrap().focusInitialElement();

            if (!focusWasTrapped) {
              this._elementRef.nativeElement.focus();
            }
          }
        }
        /**
         * Moves the focus inside the focus trap.
         * @private
         * @return {?}
         */

      }, {
        key: "_trapFocus",
        value: function _trapFocus() {
          // If we were to attempt to focus immediately, then the content of the dialog would not yet be
          // ready in instances where change detection has to run first. To deal with this, we simply
          // wait for the microtask queue to be empty.
          if (this._config.autoFocus) {
            this._getFocusTrap().focusInitialElementWhenReady();
          } else if (!this._containsFocus()) {
            // Otherwise ensure that focus is on the dialog container. It's possible that a different
            // component tried to move focus while the open animation was running. See:
            // https://github.com/angular/components/issues/16215. Note that we only want to do this
            // if the focus isn't inside the dialog already, because it's possible that the consumer
            // turned off `autoFocus` in order to move focus themselves.
            this._elementRef.nativeElement.focus();
          }
        }
        /**
         * Restores focus to the element that was focused before the dialog opened.
         * @private
         * @return {?}
         */

      }, {
        key: "_restoreFocus",
        value: function _restoreFocus() {
          /** @type {?} */
          var toFocus = this._elementFocusedBeforeDialogWasOpened; // We need the extra check, because IE can set the `activeElement` to null in some cases.

          if (this._config.restoreFocus && toFocus && typeof toFocus.focus === 'function') {
            /** @type {?} */
            var activeElement = this._document.activeElement;
            /** @type {?} */

            var element = this._elementRef.nativeElement; // Make sure that focus is still inside the dialog or is on the body (usually because a
            // non-focusable element like the backdrop was clicked) before moving it. It's possible that
            // the consumer moved it themselves before the animation was done, in which case we shouldn't
            // do anything.

            if (!activeElement || activeElement === this._document.body || activeElement === element || element.contains(activeElement)) {
              toFocus.focus();
            }
          }

          if (this._focusTrap) {
            this._focusTrap.destroy();
          }
        }
        /**
         * Saves a reference to the element that was focused before the dialog was opened.
         * @private
         * @return {?}
         */

      }, {
        key: "_savePreviouslyFocusedElement",
        value: function _savePreviouslyFocusedElement() {
          var _this2 = this;

          if (this._document) {
            this._elementFocusedBeforeDialogWasOpened =
            /** @type {?} */
            this._document.activeElement; // Note that there is no focus method when rendering on the server.

            if (this._elementRef.nativeElement.focus) {
              // Move focus onto the dialog immediately in order to prevent the user from accidentally
              // opening multiple dialogs at the same time. Needs to be async, because the element
              // may not be focusable immediately.
              Promise.resolve().then(
              /**
              * @return {?}
              */
              function () {
                return _this2._elementRef.nativeElement.focus();
              });
            }
          }
        }
        /**
         * Returns whether focus is inside the dialog.
         * @private
         * @return {?}
         */

      }, {
        key: "_containsFocus",
        value: function _containsFocus() {
          /** @type {?} */
          var element = this._elementRef.nativeElement;
          /** @type {?} */

          var activeElement = this._document.activeElement;
          return element === activeElement || element.contains(activeElement);
        }
        /**
         * Gets the focus trap associated with the dialog.
         * @private
         * @return {?}
         */

      }, {
        key: "_getFocusTrap",
        value: function _getFocusTrap() {
          if (!this._focusTrap) {
            this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
          }

          return this._focusTrap;
        }
        /**
         * Callback, invoked whenever an animation on the host completes.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onAnimationDone",
        value: function _onAnimationDone(event) {
          if (event.toState === 'enter') {
            this._trapFocus();
          } else if (event.toState === 'exit') {
            this._restoreFocus();
          }

          this._animationStateChanged.emit(event);
        }
        /**
         * Callback, invoked when an animation on the host starts.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onAnimationStart",
        value: function _onAnimationStart(event) {
          this._animationStateChanged.emit(event);
        }
        /**
         * Starts the dialog exit animation.
         * @return {?}
         */

      }, {
        key: "_startExitAnimation",
        value: function _startExitAnimation() {
          this._state = 'exit'; // Mark the container for check so it can react if the
          // view container is using OnPush change detection.

          this._changeDetectorRef.markForCheck();
        }
      }]);

      return MatDialogContainer;
    }(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["BasePortalOutlet"]);

    MatDialogContainer.ɵfac = function MatDialogContainer_Factory(t) {
      return new (t || MatDialogContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusTrapFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialogConfig));
    };

    MatDialogContainer.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: MatDialogContainer,
      selectors: [["mat-dialog-container"]],
      viewQuery: function MatDialogContainer_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._portalOutlet = _t.first);
        }
      },
      hostAttrs: ["tabindex", "-1", "aria-modal", "true", 1, "mat-dialog-container"],
      hostVars: 6,
      hostBindings: function MatDialogContainer_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcomponentHostSyntheticListener"]("@dialogContainer.start", function MatDialogContainer_animation_dialogContainer_start_HostBindingHandler($event) {
            return ctx._onAnimationStart($event);
          })("@dialogContainer.done", function MatDialogContainer_animation_dialogContainer_done_HostBindingHandler($event) {
            return ctx._onAnimationDone($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx._id)("role", ctx._config.role)("aria-labelledby", ctx._config.ariaLabel ? null : ctx._ariaLabelledBy)("aria-label", ctx._config.ariaLabel)("aria-describedby", ctx._config.ariaDescribedBy || null);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵupdateSyntheticHostBinding"]("@dialogContainer", ctx._state);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 0,
      consts: [["cdkPortalOutlet", ""]],
      template: function MatDialogContainer_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MatDialogContainer_ng_template_0_Template, 0, 0, "ng-template", 0);
        }
      },
      directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"]],
      styles: [".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;margin-bottom:-24px}.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"],
      encapsulation: 2,
      data: {
        animation: [matDialogAnimations.dialogContainer]
      }
    });
    /** @nocollapse */

    MatDialogContainer.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusTrapFactory"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
        }]
      }, {
        type: MatDialogConfig
      }];
    };

    MatDialogContainer.propDecorators = {
      _portalOutlet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
        args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], {
          "static": true
        }]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogContainer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'mat-dialog-container',
          template: "<ng-template cdkPortalOutlet></ng-template>\n",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
          // Using OnPush for dialogs caused some G3 sync issues. Disabled until we can track them down.
          // tslint:disable-next-line:validate-decorators
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].Default,
          animations: [matDialogAnimations.dialogContainer],
          host: {
            'class': 'mat-dialog-container',
            'tabindex': '-1',
            'aria-modal': 'true',
            '[attr.id]': '_id',
            '[attr.role]': '_config.role',
            '[attr.aria-labelledby]': '_config.ariaLabel ? null : _ariaLabelledBy',
            '[attr.aria-label]': '_config.ariaLabel',
            '[attr.aria-describedby]': '_config.ariaDescribedBy || null',
            '[@dialogContainer]': '_state',
            '(@dialogContainer.start)': '_onAnimationStart($event)',
            '(@dialogContainer.done)': '_onAnimationDone($event)'
          },
          styles: [".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;margin-bottom:-24px}.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusTrapFactory"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }, {
          type: MatDialogConfig
        }];
      }, {
        _portalOutlet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], {
            "static": true
          }]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/dialog/dialog-ref.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // TODO(jelbourn): resizing
    // Counter for unique dialog ids.

    /** @type {?} */


    var uniqueId = 0;
    /** @enum {number} */

    var MatDialogState = {
      OPEN: 0,
      CLOSING: 1,
      CLOSED: 2
    };
    /**
     * Reference to a dialog opened via the MatDialog service.
     * @template T, R
     */

    var MatDialogRef = /*#__PURE__*/function () {
      /**
       * @param {?} _overlayRef
       * @param {?} _containerInstance
       * @param {?=} id
       */
      function MatDialogRef(_overlayRef, _containerInstance) {
        var _this3 = this;

        var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "mat-dialog-".concat(uniqueId++);

        _classCallCheck(this, MatDialogRef);

        this._overlayRef = _overlayRef;
        this._containerInstance = _containerInstance;
        this.id = id;
        /**
         * Whether the user is allowed to close the dialog.
         */

        this.disableClose = this._containerInstance._config.disableClose;
        /**
         * Subject for notifying the user that the dialog has finished opening.
         */

        this._afterOpened = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Subject for notifying the user that the dialog has finished closing.
         */

        this._afterClosed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Subject for notifying the user that the dialog has started closing.
         */

        this._beforeClosed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Current state of the dialog.
         */

        this._state = 0
        /* OPEN */
        ; // Pass the id along to the container.

        _containerInstance._id = id; // Emit when opening animation completes

        _containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          return event.phaseName === 'done' && event.toState === 'enter';
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(
        /**
        * @return {?}
        */
        function () {
          _this3._afterOpened.next();

          _this3._afterOpened.complete();
        }); // Dispose overlay when closing animation is complete


        _containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          return event.phaseName === 'done' && event.toState === 'exit';
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(
        /**
        * @return {?}
        */
        function () {
          clearTimeout(_this3._closeFallbackTimeout);

          _this3._finishDialogClose();
        });

        _overlayRef.detachments().subscribe(
        /**
        * @return {?}
        */
        function () {
          _this3._beforeClosed.next(_this3._result);

          _this3._beforeClosed.complete();

          _this3._afterClosed.next(_this3._result);

          _this3._afterClosed.complete();

          _this3.componentInstance =
          /** @type {?} */
          null;

          _this3._overlayRef.dispose();
        });

        _overlayRef.keydownEvents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ESCAPE"] && !_this3.disableClose && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["hasModifierKey"])(event);
        })).subscribe(
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          event.preventDefault();

          _this3.close();
        });

        _overlayRef.backdropClick().subscribe(
        /**
        * @return {?}
        */
        function () {
          if (_this3.disableClose) {
            _this3._containerInstance._recaptureFocus();
          } else {
            _this3.close();
          }
        });
      }
      /**
       * Close the dialog.
       * @param {?=} dialogResult Optional result to return to the dialog opener.
       * @return {?}
       */


      _createClass(MatDialogRef, [{
        key: "close",
        value: function close(dialogResult) {
          var _this4 = this;

          this._result = dialogResult; // Transition the backdrop in parallel to the dialog.

          this._containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return event.phaseName === 'start';
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this4._beforeClosed.next(dialogResult);

            _this4._beforeClosed.complete();

            _this4._overlayRef.detachBackdrop(); // The logic that disposes of the overlay depends on the exit animation completing, however
            // it isn't guaranteed if the parent view is destroyed while it's running. Add a fallback
            // timeout which will clean everything up if the animation hasn't fired within the specified
            // amount of time plus 100ms. We don't need to run this outside the NgZone, because for the
            // vast majority of cases the timeout will have been cleared before it has the chance to fire.


            _this4._closeFallbackTimeout = setTimeout(
            /**
            * @return {?}
            */
            function () {
              return _this4._finishDialogClose();
            }, event.totalTime + 100);
          });

          this._containerInstance._startExitAnimation();

          this._state = 1
          /* CLOSING */
          ;
        }
        /**
         * Gets an observable that is notified when the dialog is finished opening.
         * @return {?}
         */

      }, {
        key: "afterOpened",
        value: function afterOpened() {
          return this._afterOpened.asObservable();
        }
        /**
         * Gets an observable that is notified when the dialog is finished closing.
         * @return {?}
         */

      }, {
        key: "afterClosed",
        value: function afterClosed() {
          return this._afterClosed.asObservable();
        }
        /**
         * Gets an observable that is notified when the dialog has started closing.
         * @return {?}
         */

      }, {
        key: "beforeClosed",
        value: function beforeClosed() {
          return this._beforeClosed.asObservable();
        }
        /**
         * Gets an observable that emits when the overlay's backdrop has been clicked.
         * @return {?}
         */

      }, {
        key: "backdropClick",
        value: function backdropClick() {
          return this._overlayRef.backdropClick();
        }
        /**
         * Gets an observable that emits when keydown events are targeted on the overlay.
         * @return {?}
         */

      }, {
        key: "keydownEvents",
        value: function keydownEvents() {
          return this._overlayRef.keydownEvents();
        }
        /**
         * Updates the dialog's position.
         * @template THIS
         * @this {THIS}
         * @param {?=} position New dialog position.
         * @return {THIS}
         */

      }, {
        key: "updatePosition",
        value: function updatePosition(position) {
          /** @type {?} */
          var strategy =
          /** @type {?} */
          this._getPositionStrategy();

          if (position && (position.left || position.right)) {
            position.left ? strategy.left(position.left) : strategy.right(position.right);
          } else {
            strategy.centerHorizontally();
          }

          if (position && (position.top || position.bottom)) {
            position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);
          } else {
            strategy.centerVertically();
          }

          /** @type {?} */
          this._overlayRef.updatePosition();

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Updates the dialog's width and height.
         * @template THIS
         * @this {THIS}
         * @param {?=} width New width of the dialog.
         * @param {?=} height New height of the dialog.
         * @return {THIS}
         */

      }, {
        key: "updateSize",
        value: function updateSize() {
          var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

          /** @type {?} */
          this._getPositionStrategy().width(width).height(height);

          /** @type {?} */
          this._overlayRef.updatePosition();

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Add a CSS class or an array of classes to the overlay pane.
         * @template THIS
         * @this {THIS}
         * @param {?} classes
         * @return {THIS}
         */

      }, {
        key: "addPanelClass",
        value: function addPanelClass(classes) {
          /** @type {?} */
          this._overlayRef.addPanelClass(classes);

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Remove a CSS class or an array of classes from the overlay pane.
         * @template THIS
         * @this {THIS}
         * @param {?} classes
         * @return {THIS}
         */

      }, {
        key: "removePanelClass",
        value: function removePanelClass(classes) {
          /** @type {?} */
          this._overlayRef.removePanelClass(classes);

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Gets the current state of the dialog's lifecycle.
         * @return {?}
         */

      }, {
        key: "getState",
        value: function getState() {
          return this._state;
        }
        /**
         * Finishes the dialog close by updating the state of the dialog
         * and disposing the overlay.
         * @private
         * @return {?}
         */

      }, {
        key: "_finishDialogClose",
        value: function _finishDialogClose() {
          this._state = 2
          /* CLOSED */
          ;

          this._overlayRef.dispose();
        }
        /**
         * Fetches the position strategy object from the overlay ref.
         * @private
         * @return {?}
         */

      }, {
        key: "_getPositionStrategy",
        value: function _getPositionStrategy() {
          return (
            /** @type {?} */
            this._overlayRef.getConfig().positionStrategy
          );
        }
      }]);

      return MatDialogRef;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/dialog/dialog.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token that can be used to access the data that was passed in to a dialog.
     * @type {?}
     */


    var MAT_DIALOG_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatDialogData');
    /**
     * Injection token that can be used to specify default dialog options.
     * @type {?}
     */

    var MAT_DIALOG_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-dialog-default-options');
    /**
     * Injection token that determines the scroll handling while the dialog is open.
     * @type {?}
     */

    var MAT_DIALOG_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-dialog-scroll-strategy');
    /**
     * \@docs-private
     * @param {?} overlay
     * @return {?}
     */

    function MAT_DIALOG_SCROLL_STRATEGY_FACTORY(overlay) {
      return (
        /**
        * @return {?}
        */
        function () {
          return overlay.scrollStrategies.block();
        }
      );
    }
    /**
     * \@docs-private
     * @param {?} overlay
     * @return {?}
     */


    function MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
      return (
        /**
        * @return {?}
        */
        function () {
          return overlay.scrollStrategies.block();
        }
      );
    }
    /**
     * \@docs-private
     * @type {?}
     */


    var MAT_DIALOG_SCROLL_STRATEGY_PROVIDER = {
      provide: MAT_DIALOG_SCROLL_STRATEGY,
      deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]],
      useFactory: MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY
    };
    /**
     * Service to open Material Design modal dialogs.
     */

    var MatDialog = /*#__PURE__*/function () {
      /**
       * @param {?} _overlay
       * @param {?} _injector
       * @param {?} _location
       * @param {?} _defaultOptions
       * @param {?} scrollStrategy
       * @param {?} _parentDialog
       * @param {?} _overlayContainer
       */
      function MatDialog(_overlay, _injector,
      /**
       * @deprecated `_location` parameter to be removed.
       * @breaking-change 10.0.0
       */
      _location, _defaultOptions, scrollStrategy, _parentDialog, _overlayContainer) {
        var _this5 = this;

        _classCallCheck(this, MatDialog);

        this._overlay = _overlay;
        this._injector = _injector;
        this._defaultOptions = _defaultOptions;
        this._parentDialog = _parentDialog;
        this._overlayContainer = _overlayContainer;
        this._openDialogsAtThisLevel = [];
        this._afterAllClosedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this._afterOpenedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this._ariaHiddenElements = new Map(); // TODO (jelbourn): tighten the typing right-hand side of this expression.

        /**
         * Stream that emits when all open dialog have finished closing.
         * Will emit on subscribe if there are no open dialogs to begin with.
         */

        this.afterAllClosed =
        /** @type {?} */
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["defer"])(
        /**
        * @return {?}
        */
        function () {
          return _this5.openDialogs.length ? _this5._afterAllClosed : _this5._afterAllClosed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(undefined));
        });
        this._scrollStrategy = scrollStrategy;
      }
      /**
       * Keeps track of the currently-open dialogs.
       * @return {?}
       */


      _createClass(MatDialog, [{
        key: "open",

        /**
         * Opens a modal dialog containing the given component.
         * @template T, D, R
         * @param {?} componentOrTemplateRef Type of the component to load into the dialog,
         *     or a TemplateRef to instantiate as the dialog content.
         * @param {?=} config Extra configuration options.
         * @return {?} Reference to the newly-opened dialog.
         */
        value: function open(componentOrTemplateRef, config) {
          var _this6 = this;

          config = _applyConfigDefaults(config, this._defaultOptions || new MatDialogConfig());

          if (config.id && this.getDialogById(config.id)) {
            throw Error("Dialog with id \"".concat(config.id, "\" exists already. The dialog id must be unique."));
          }
          /** @type {?} */


          var overlayRef = this._createOverlay(config);
          /** @type {?} */


          var dialogContainer = this._attachDialogContainer(overlayRef, config);
          /** @type {?} */


          var dialogRef = this._attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config); // If this is the first dialog that we're opening, hide all the non-overlay content.


          if (!this.openDialogs.length) {
            this._hideNonDialogContentFromAssistiveTechnology();
          }

          this.openDialogs.push(dialogRef);
          dialogRef.afterClosed().subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this6._removeOpenDialog(dialogRef);
          });
          this.afterOpened.next(dialogRef);
          return dialogRef;
        }
        /**
         * Closes all of the currently-open dialogs.
         * @return {?}
         */

      }, {
        key: "closeAll",
        value: function closeAll() {
          this._closeDialogs(this.openDialogs);
        }
        /**
         * Finds an open dialog by its id.
         * @param {?} id ID to use when looking up the dialog.
         * @return {?}
         */

      }, {
        key: "getDialogById",
        value: function getDialogById(id) {
          return this.openDialogs.find(
          /**
          * @param {?} dialog
          * @return {?}
          */
          function (dialog) {
            return dialog.id === id;
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // Only close the dialogs at this level on destroy
          // since the parent service may still be active.
          this._closeDialogs(this._openDialogsAtThisLevel);

          this._afterAllClosedAtThisLevel.complete();

          this._afterOpenedAtThisLevel.complete();
        }
        /**
         * Creates the overlay into which the dialog will be loaded.
         * @private
         * @param {?} config The dialog configuration.
         * @return {?} A promise resolving to the OverlayRef for the created overlay.
         */

      }, {
        key: "_createOverlay",
        value: function _createOverlay(config) {
          /** @type {?} */
          var overlayConfig = this._getOverlayConfig(config);

          return this._overlay.create(overlayConfig);
        }
        /**
         * Creates an overlay config from a dialog config.
         * @private
         * @param {?} dialogConfig The dialog configuration.
         * @return {?} The overlay configuration.
         */

      }, {
        key: "_getOverlayConfig",
        value: function _getOverlayConfig(dialogConfig) {
          /** @type {?} */
          var state = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayConfig"]({
            positionStrategy: this._overlay.position().global(),
            scrollStrategy: dialogConfig.scrollStrategy || this._scrollStrategy(),
            panelClass: dialogConfig.panelClass,
            hasBackdrop: dialogConfig.hasBackdrop,
            direction: dialogConfig.direction,
            minWidth: dialogConfig.minWidth,
            minHeight: dialogConfig.minHeight,
            maxWidth: dialogConfig.maxWidth,
            maxHeight: dialogConfig.maxHeight,
            disposeOnNavigation: dialogConfig.closeOnNavigation
          });

          if (dialogConfig.backdropClass) {
            state.backdropClass = dialogConfig.backdropClass;
          }

          return state;
        }
        /**
         * Attaches an MatDialogContainer to a dialog's already-created overlay.
         * @private
         * @param {?} overlay Reference to the dialog's underlying overlay.
         * @param {?} config The dialog configuration.
         * @return {?} A promise resolving to a ComponentRef for the attached container.
         */

      }, {
        key: "_attachDialogContainer",
        value: function _attachDialogContainer(overlay, config) {
          /** @type {?} */
          var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
          /** @type {?} */

          var injector = _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"].create({
            parent: userInjector || this._injector,
            providers: [{
              provide: MatDialogConfig,
              useValue: config
            }]
          });
          /** @type {?} */


          var containerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](MatDialogContainer, config.viewContainerRef, injector, config.componentFactoryResolver);
          /** @type {?} */

          var containerRef = overlay.attach(containerPortal);
          return containerRef.instance;
        }
        /**
         * Attaches the user-provided component to the already-created MatDialogContainer.
         * @private
         * @template T, R
         * @param {?} componentOrTemplateRef The type of component being loaded into the dialog,
         *     or a TemplateRef to instantiate as the content.
         * @param {?} dialogContainer Reference to the wrapping MatDialogContainer.
         * @param {?} overlayRef Reference to the overlay in which the dialog resides.
         * @param {?} config The dialog configuration.
         * @return {?} A promise resolving to the MatDialogRef that should be returned to the user.
         */

      }, {
        key: "_attachDialogContent",
        value: function _attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config) {
          // Create a reference to the dialog we're creating in order to give the user a handle
          // to modify and close it.

          /** @type {?} */
          var dialogRef = new MatDialogRef(overlayRef, dialogContainer, config.id);

          if (componentOrTemplateRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]) {
            dialogContainer.attachTemplatePortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["TemplatePortal"](componentOrTemplateRef,
            /** @type {?} */
            null,
            /** @type {?} */
            {
              $implicit: config.data,
              dialogRef: dialogRef
            }));
          } else {
            /** @type {?} */
            var injector = this._createInjector(config, dialogRef, dialogContainer);
            /** @type {?} */


            var contentRef = dialogContainer.attachComponentPortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](componentOrTemplateRef, config.viewContainerRef, injector));
            dialogRef.componentInstance = contentRef.instance;
          }

          dialogRef.updateSize(config.width, config.height).updatePosition(config.position);
          return dialogRef;
        }
        /**
         * Creates a custom injector to be used inside the dialog. This allows a component loaded inside
         * of a dialog to close itself and, optionally, to return a value.
         * @private
         * @template T
         * @param {?} config Config object that is used to construct the dialog.
         * @param {?} dialogRef Reference to the dialog.
         * @param {?} dialogContainer
         * @return {?} The custom injector that can be used inside the dialog.
         */

      }, {
        key: "_createInjector",
        value: function _createInjector(config, dialogRef, dialogContainer) {
          /** @type {?} */
          var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector; // The MatDialogContainer is injected in the portal as the MatDialogContainer and the dialog's
          // content are created out of the same ViewContainerRef and as such, are siblings for injector
          // purposes. To allow the hierarchy that is expected, the MatDialogContainer is explicitly
          // added to the injection tokens.

          /** @type {?} */

          var providers = [{
            provide: MatDialogContainer,
            useValue: dialogContainer
          }, {
            provide: MAT_DIALOG_DATA,
            useValue: config.data
          }, {
            provide: MatDialogRef,
            useValue: dialogRef
          }];

          if (config.direction && (!userInjector || !userInjector.get(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], null))) {
            providers.push({
              provide: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
              useValue: {
                value: config.direction,
                change: Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])()
              }
            });
          }

          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"].create({
            parent: userInjector || this._injector,
            providers: providers
          });
        }
        /**
         * Removes a dialog from the array of open dialogs.
         * @private
         * @param {?} dialogRef Dialog to be removed.
         * @return {?}
         */

      }, {
        key: "_removeOpenDialog",
        value: function _removeOpenDialog(dialogRef) {
          /** @type {?} */
          var index = this.openDialogs.indexOf(dialogRef);

          if (index > -1) {
            this.openDialogs.splice(index, 1); // If all the dialogs were closed, remove/restore the `aria-hidden`
            // to a the siblings and emit to the `afterAllClosed` stream.

            if (!this.openDialogs.length) {
              this._ariaHiddenElements.forEach(
              /**
              * @param {?} previousValue
              * @param {?} element
              * @return {?}
              */
              function (previousValue, element) {
                if (previousValue) {
                  element.setAttribute('aria-hidden', previousValue);
                } else {
                  element.removeAttribute('aria-hidden');
                }
              });

              this._ariaHiddenElements.clear();

              this._afterAllClosed.next();
            }
          }
        }
        /**
         * Hides all of the content that isn't an overlay from assistive technology.
         * @private
         * @return {?}
         */

      }, {
        key: "_hideNonDialogContentFromAssistiveTechnology",
        value: function _hideNonDialogContentFromAssistiveTechnology() {
          /** @type {?} */
          var overlayContainer = this._overlayContainer.getContainerElement(); // Ensure that the overlay container is attached to the DOM.


          if (overlayContainer.parentElement) {
            /** @type {?} */
            var siblings = overlayContainer.parentElement.children;

            for (var i = siblings.length - 1; i > -1; i--) {
              /** @type {?} */
              var sibling = siblings[i];

              if (sibling !== overlayContainer && sibling.nodeName !== 'SCRIPT' && sibling.nodeName !== 'STYLE' && !sibling.hasAttribute('aria-live')) {
                this._ariaHiddenElements.set(sibling, sibling.getAttribute('aria-hidden'));

                sibling.setAttribute('aria-hidden', 'true');
              }
            }
          }
        }
        /**
         * Closes all of the dialogs in an array.
         * @private
         * @param {?} dialogs
         * @return {?}
         */

      }, {
        key: "_closeDialogs",
        value: function _closeDialogs(dialogs) {
          /** @type {?} */
          var i = dialogs.length;

          while (i--) {
            // The `_openDialogs` property isn't updated after close until the rxjs subscription
            // runs on the next microtask, in addition to modifying the array as we're going
            // through it. We loop through all of them and call close without assuming that
            // they'll be removed from the list instantaneously.
            dialogs[i].close();
          }
        }
      }, {
        key: "openDialogs",
        get: function get() {
          return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
        }
        /**
         * Stream that emits when a dialog has been opened.
         * @return {?}
         */

      }, {
        key: "afterOpened",
        get: function get() {
          return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
        }
        /**
         * @return {?}
         */

      }, {
        key: "_afterAllClosed",
        get: function get() {
          /** @type {?} */
          var parent = this._parentDialog;
          return parent ? parent._afterAllClosed : this._afterAllClosedAtThisLevel;
        }
      }]);

      return MatDialog;
    }();

    MatDialog.ɵfac = function MatDialog_Factory(t) {
      return new (t || MatDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](MAT_DIALOG_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](MAT_DIALOG_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](MatDialog, 12), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayContainer"]));
    };

    MatDialog.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: MatDialog,
      factory: MatDialog.ɵfac
    });
    /** @nocollapse */

    MatDialog.ctorParameters = function () {
      return [{
        type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }]
      }, {
        type: MatDialogConfig,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [MAT_DIALOG_DEFAULT_OPTIONS]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [MAT_DIALOG_SCROLL_STRATEGY]
        }]
      }, {
        type: MatDialog,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"]
        }]
      }, {
        type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayContainer"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialog, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
      }], function () {
        return [{
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: MatDialogConfig,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [MAT_DIALOG_DEFAULT_OPTIONS]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [MAT_DIALOG_SCROLL_STRATEGY]
          }]
        }, {
          type: MatDialog,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"]
          }]
        }, {
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayContainer"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * Applies default options to the dialog config.
     * @param {?=} config Config to be modified.
     * @param {?=} defaultOptions Default options provided.
     * @return {?} The new configuration object.
     */


    function _applyConfigDefaults(config, defaultOptions) {
      return Object.assign(Object.assign({}, defaultOptions), config);
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/dialog/dialog-content-directives.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Counter used to generate unique IDs for dialog elements.
     * @type {?}
     */


    var dialogElementUid = 0;
    /**
     * Button that will close the current dialog.
     */

    var MatDialogClose = /*#__PURE__*/function () {
      /**
       * @param {?} dialogRef
       * @param {?} _elementRef
       * @param {?} _dialog
       */
      function MatDialogClose(dialogRef, _elementRef, _dialog) {
        _classCallCheck(this, MatDialogClose);

        this.dialogRef = dialogRef;
        this._elementRef = _elementRef;
        this._dialog = _dialog;
        /**
         * Default to "button" to prevents accidental form submits.
         */

        this.type = 'button';
      }
      /**
       * @return {?}
       */


      _createClass(MatDialogClose, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!this.dialogRef) {
            // When this directive is included in a dialog via TemplateRef (rather than being
            // in a Component), the DialogRef isn't available via injection because embedded
            // views cannot be given a custom injector. Instead, we look up the DialogRef by
            // ID. This must occur in `onInit`, as the ID binding for the dialog container won't
            // be resolved at constructor time.
            this.dialogRef =
            /** @type {?} */
            getClosestDialog(this._elementRef, this._dialog.openDialogs);
          }
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          /** @type {?} */
          var proxiedChange = changes['_matDialogClose'] || changes['_matDialogCloseResult'];

          if (proxiedChange) {
            this.dialogResult = proxiedChange.currentValue;
          }
        }
      }]);

      return MatDialogClose;
    }();

    MatDialogClose.ɵfac = function MatDialogClose_Factory(t) {
      return new (t || MatDialogClose)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialogRef, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialog));
    };

    MatDialogClose.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: MatDialogClose,
      selectors: [["", "mat-dialog-close", ""], ["", "matDialogClose", ""]],
      hostVars: 2,
      hostBindings: function MatDialogClose_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MatDialogClose_click_HostBindingHandler() {
            return ctx.dialogRef.close(ctx.dialogResult);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx.ariaLabel || null)("type", ctx.type);
        }
      },
      inputs: {
        type: "type",
        dialogResult: ["mat-dialog-close", "dialogResult"],
        ariaLabel: ["aria-label", "ariaLabel"],
        _matDialogClose: ["matDialogClose", "_matDialogClose"]
      },
      exportAs: ["matDialogClose"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]]
    });
    /** @nocollapse */

    MatDialogClose.ctorParameters = function () {
      return [{
        type: MatDialogRef,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }, {
        type: MatDialog
      }];
    };

    MatDialogClose.propDecorators = {
      ariaLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['aria-label']
      }],
      type: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      dialogResult: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['mat-dialog-close']
      }],
      _matDialogClose: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['matDialogClose']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogClose, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
          selector: '[mat-dialog-close], [matDialogClose]',
          exportAs: 'matDialogClose',
          host: {
            '(click)': 'dialogRef.close(dialogResult)',
            '[attr.aria-label]': 'ariaLabel || null',
            '[attr.type]': 'type'
          }
        }]
      }], function () {
        return [{
          type: MatDialogRef,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: MatDialog
        }];
      }, {
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        dialogResult: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['mat-dialog-close']
        }],
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['aria-label']
        }],
        _matDialogClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['matDialogClose']
        }]
      });
    })();

    if (false) {}
    /**
     * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.
     */


    var MatDialogTitle = /*#__PURE__*/function () {
      /**
       * @param {?} _dialogRef
       * @param {?} _elementRef
       * @param {?} _dialog
       */
      function MatDialogTitle(_dialogRef, _elementRef, _dialog) {
        _classCallCheck(this, MatDialogTitle);

        this._dialogRef = _dialogRef;
        this._elementRef = _elementRef;
        this._dialog = _dialog;
        this.id = "mat-dialog-title-".concat(dialogElementUid++);
      }
      /**
       * @return {?}
       */


      _createClass(MatDialogTitle, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          if (!this._dialogRef) {
            this._dialogRef =
            /** @type {?} */
            getClosestDialog(this._elementRef, this._dialog.openDialogs);
          }

          if (this._dialogRef) {
            Promise.resolve().then(
            /**
            * @return {?}
            */
            function () {
              /** @type {?} */
              var container = _this7._dialogRef._containerInstance;

              if (container && !container._ariaLabelledBy) {
                container._ariaLabelledBy = _this7.id;
              }
            });
          }
        }
      }]);

      return MatDialogTitle;
    }();

    MatDialogTitle.ɵfac = function MatDialogTitle_Factory(t) {
      return new (t || MatDialogTitle)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialogRef, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialog));
    };

    MatDialogTitle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: MatDialogTitle,
      selectors: [["", "mat-dialog-title", ""], ["", "matDialogTitle", ""]],
      hostAttrs: [1, "mat-dialog-title"],
      hostVars: 1,
      hostBindings: function MatDialogTitle_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵhostProperty"]("id", ctx.id);
        }
      },
      inputs: {
        id: "id"
      },
      exportAs: ["matDialogTitle"]
    });
    /** @nocollapse */

    MatDialogTitle.ctorParameters = function () {
      return [{
        type: MatDialogRef,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }, {
        type: MatDialog
      }];
    };

    MatDialogTitle.propDecorators = {
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogTitle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
          selector: '[mat-dialog-title], [matDialogTitle]',
          exportAs: 'matDialogTitle',
          host: {
            'class': 'mat-dialog-title',
            '[id]': 'id'
          }
        }]
      }], function () {
        return [{
          type: MatDialogRef,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: MatDialog
        }];
      }, {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * Scrollable content container of a dialog.
     */


    var MatDialogContent = function MatDialogContent() {
      _classCallCheck(this, MatDialogContent);
    };

    MatDialogContent.ɵfac = function MatDialogContent_Factory(t) {
      return new (t || MatDialogContent)();
    };

    MatDialogContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: MatDialogContent,
      selectors: [["", "mat-dialog-content", ""], ["mat-dialog-content"], ["", "matDialogContent", ""]],
      hostAttrs: [1, "mat-dialog-content"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
          selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]",
          host: {
            'class': 'mat-dialog-content'
          }
        }]
      }], null, null);
    })();
    /**
     * Container for the bottom action buttons in a dialog.
     * Stays fixed to the bottom when scrolling.
     */


    var MatDialogActions = function MatDialogActions() {
      _classCallCheck(this, MatDialogActions);
    };

    MatDialogActions.ɵfac = function MatDialogActions_Factory(t) {
      return new (t || MatDialogActions)();
    };

    MatDialogActions.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: MatDialogActions,
      selectors: [["", "mat-dialog-actions", ""], ["mat-dialog-actions"], ["", "matDialogActions", ""]],
      hostAttrs: [1, "mat-dialog-actions"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogActions, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
          selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]",
          host: {
            'class': 'mat-dialog-actions'
          }
        }]
      }], null, null);
    })();
    /**
     * Finds the closest MatDialogRef to an element by looking at the DOM.
     * @param {?} element Element relative to which to look for a dialog.
     * @param {?} openDialogs References to the currently-open dialogs.
     * @return {?}
     */


    function getClosestDialog(element, openDialogs) {
      /** @type {?} */
      var parent = element.nativeElement.parentElement;

      while (parent && !parent.classList.contains('mat-dialog-container')) {
        parent = parent.parentElement;
      }

      return parent ? openDialogs.find(
      /**
      * @param {?} dialog
      * @return {?}
      */
      function (dialog) {
        return dialog.id ===
        /** @type {?} */
        parent.id;
      }) : null;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/dialog/dialog-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatDialogModule = function MatDialogModule() {
      _classCallCheck(this, MatDialogModule);
    };

    MatDialogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: MatDialogModule
    });
    MatDialogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function MatDialogModule_Factory(t) {
        return new (t || MatDialogModule)();
      },
      providers: [MatDialog, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER],
      imports: [[_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MatDialogModule, {
        declarations: function declarations() {
          return [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent];
        },
        imports: function imports() {
          return [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]];
        },
        exports: function exports() {
          return [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogActions, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          imports: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]],
          exports: [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogActions, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]],
          declarations: [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent],
          providers: [MatDialog, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER],
          entryComponents: [MatDialogContainer]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/dialog/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=dialog.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js ***!
    \*************************************************************************/

  /*! exports provided: MatDivider, MatDividerModule */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015DividerJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDivider", function () {
      return MatDivider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDividerModule", function () {
      return MatDividerModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/divider/divider.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatDivider = /*#__PURE__*/function () {
      function MatDivider() {
        _classCallCheck(this, MatDivider);

        this._vertical = false;
        this._inset = false;
      }
      /**
       * Whether the divider is vertically aligned.
       * @return {?}
       */


      _createClass(MatDivider, [{
        key: "vertical",
        get: function get() {
          return this._vertical;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._vertical = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether the divider is an inset divider.
         * @return {?}
         */

      }, {
        key: "inset",
        get: function get() {
          return this._inset;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._inset = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        }
      }]);

      return MatDivider;
    }();

    MatDivider.ɵfac = function MatDivider_Factory(t) {
      return new (t || MatDivider)();
    };

    MatDivider.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatDivider,
      selectors: [["mat-divider"]],
      hostAttrs: ["role", "separator", 1, "mat-divider"],
      hostVars: 7,
      hostBindings: function MatDivider_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-orientation", ctx.vertical ? "vertical" : "horizontal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-divider-vertical", ctx.vertical)("mat-divider-horizontal", !ctx.vertical)("mat-divider-inset", ctx.inset);
        }
      },
      inputs: {
        vertical: "vertical",
        inset: "inset"
      },
      decls: 0,
      vars: 0,
      template: function MatDivider_Template(rf, ctx) {},
      styles: [".mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    MatDivider.propDecorators = {
      vertical: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      inset: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDivider, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mat-divider',
          host: {
            'role': 'separator',
            '[attr.aria-orientation]': 'vertical ? "vertical" : "horizontal"',
            '[class.mat-divider-vertical]': 'vertical',
            '[class.mat-divider-horizontal]': '!vertical',
            '[class.mat-divider-inset]': 'inset',
            'class': 'mat-divider'
          },
          template: '',
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          styles: [".mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}\n"]
        }]
      }], function () {
        return [];
      }, {
        vertical: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        inset: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/divider/divider-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatDividerModule = function MatDividerModule() {
      _classCallCheck(this, MatDividerModule);
    };

    MatDividerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatDividerModule
    });
    MatDividerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MatDividerModule_Factory(t) {
        return new (t || MatDividerModule)();
      },
      imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatDividerModule, {
        declarations: function declarations() {
          return [MatDivider];
        },
        imports: function imports() {
          return [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
        },
        exports: function exports() {
          return [MatDivider, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDividerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
          exports: [MatDivider, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
          declarations: [MatDivider]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/divider/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=divider.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js ***!
    \**********************************************************************/

  /*! exports provided: MAT_SELECTION_LIST_VALUE_ACCESSOR, MatList, MatListAvatarCssMatStyler, MatListIconCssMatStyler, MatListItem, MatListModule, MatListOption, MatListSubheaderCssMatStyler, MatNavList, MatSelectionList, MatSelectionListChange */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015ListJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SELECTION_LIST_VALUE_ACCESSOR", function () {
      return MAT_SELECTION_LIST_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatList", function () {
      return MatList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatListAvatarCssMatStyler", function () {
      return MatListAvatarCssMatStyler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatListIconCssMatStyler", function () {
      return MatListIconCssMatStyler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatListItem", function () {
      return MatListItem;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatListModule", function () {
      return MatListModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatListOption", function () {
      return MatListOption;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatListSubheaderCssMatStyler", function () {
      return MatListSubheaderCssMatStyler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatNavList", function () {
      return MatNavList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSelectionList", function () {
      return MatSelectionList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSelectionListChange", function () {
      return MatSelectionListChange;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/list/list.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Boilerplate for applying mixins to MatList.

    /**
     * \@docs-private
     */


    var _c0 = ["*"];
    var _c1 = [[["", "mat-list-avatar", ""], ["", "mat-list-icon", ""], ["", "matListAvatar", ""], ["", "matListIcon", ""]], [["", "mat-line", ""], ["", "matLine", ""]], "*"];
    var _c2 = ["[mat-list-avatar], [mat-list-icon], [matListAvatar], [matListIcon]", "[mat-line], [matLine]", "*"];
    var _c3 = ["text"];

    function MatListOption_mat_pseudo_checkbox_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-pseudo-checkbox", 5);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("state", ctx_r0.selected ? "checked" : "unchecked")("disabled", ctx_r0.disabled);
      }
    }

    var _c4 = ["*", [["", "mat-list-avatar", ""], ["", "mat-list-icon", ""], ["", "matListAvatar", ""], ["", "matListIcon", ""]]];
    var _c5 = ["*", "[mat-list-avatar], [mat-list-icon], [matListAvatar], [matListIcon]"];

    var MatListBase = function MatListBase() {
      _classCallCheck(this, MatListBase);
    };
    /** @type {?} */


    var _MatListMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(MatListBase)); // Boilerplate for applying mixins to MatListItem.

    /**
     * \@docs-private
     */


    var MatListItemBase = function MatListItemBase() {
      _classCallCheck(this, MatListItemBase);
    };
    /** @type {?} */


    var _MatListItemMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(MatListItemBase);

    var MatNavList = /*#__PURE__*/function (_MatListMixinBase2) {
      _inherits(MatNavList, _MatListMixinBase2);

      var _super2 = _createSuper(MatNavList);

      function MatNavList() {
        var _this8;

        _classCallCheck(this, MatNavList);

        _this8 = _super2.apply(this, arguments);
        /**
         * Emits when the state of the list changes.
         */

        _this8._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        return _this8;
      }
      /**
       * @return {?}
       */


      _createClass(MatNavList, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this._stateChanges.next();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._stateChanges.complete();
        }
      }]);

      return MatNavList;
    }(_MatListMixinBase);

    MatNavList.ɵfac = function MatNavList_Factory(t) {
      return ɵMatNavList_BaseFactory(t || MatNavList);
    };

    MatNavList.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MatNavList,
      selectors: [["mat-nav-list"]],
      hostAttrs: ["role", "navigation", 1, "mat-nav-list", "mat-list-base"],
      inputs: {
        disableRipple: "disableRipple",
        disabled: "disabled"
      },
      exportAs: ["matNavList"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function MatNavList_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      styles: [".mat-subheader{display:flex;box-sizing:border-box;padding:16px;align-items:center}.mat-list-base .mat-subheader{margin:0}.mat-list-base{padding-top:8px;display:block;-webkit-tap-highlight-color:transparent}.mat-list-base .mat-subheader{height:48px;line-height:16px}.mat-list-base .mat-subheader:first-child{margin-top:-8px}.mat-list-base .mat-list-item,.mat-list-base .mat-list-option{display:block;height:48px;-webkit-tap-highlight-color:transparent;width:100%;padding:0;position:relative}.mat-list-base .mat-list-item .mat-list-item-content,.mat-list-base .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base .mat-list-item .mat-list-item-content-reverse,.mat-list-base .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base .mat-list-item .mat-list-item-ripple,.mat-list-base .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar,.mat-list-base .mat-list-option.mat-list-item-with-avatar{height:56px}.mat-list-base .mat-list-item.mat-2-line,.mat-list-base .mat-list-option.mat-2-line{height:72px}.mat-list-base .mat-list-item.mat-3-line,.mat-list-base .mat-list-option.mat-3-line{height:88px}.mat-list-base .mat-list-item.mat-multi-line,.mat-list-base .mat-list-option.mat-multi-line{height:auto}.mat-list-base .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base .mat-list-item .mat-list-text,.mat-list-base .mat-list-option .mat-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base .mat-list-item .mat-list-text>*,.mat-list-base .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base .mat-list-item .mat-list-text:empty,.mat-list-base .mat-list-option .mat-list-text:empty{display:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base .mat-list-item .mat-list-avatar,.mat-list-base .mat-list-option .mat-list-avatar{flex-shrink:0;width:40px;height:40px;border-radius:50%;object-fit:cover}.mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:72px;width:calc(100% - 72px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:72px}.mat-list-base .mat-list-item .mat-list-icon,.mat-list-base .mat-list-option .mat-list-icon{flex-shrink:0;width:24px;height:24px;font-size:24px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:64px;width:calc(100% - 64px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:64px}.mat-list-base .mat-list-item .mat-divider,.mat-list-base .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base .mat-list-item .mat-divider,[dir=rtl] .mat-list-base .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-list-base[dense]{padding-top:4px;display:block}.mat-list-base[dense] .mat-subheader{height:40px;line-height:8px}.mat-list-base[dense] .mat-subheader:first-child{margin-top:-4px}.mat-list-base[dense] .mat-list-item,.mat-list-base[dense] .mat-list-option{display:block;height:40px;-webkit-tap-highlight-color:transparent;width:100%;padding:0;position:relative}.mat-list-base[dense] .mat-list-item .mat-list-item-content,.mat-list-base[dense] .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base[dense] .mat-list-item .mat-list-item-content-reverse,.mat-list-base[dense] .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base[dense] .mat-list-item .mat-list-item-ripple,.mat-list-base[dense] .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar{height:48px}.mat-list-base[dense] .mat-list-item.mat-2-line,.mat-list-base[dense] .mat-list-option.mat-2-line{height:60px}.mat-list-base[dense] .mat-list-item.mat-3-line,.mat-list-base[dense] .mat-list-option.mat-3-line{height:76px}.mat-list-base[dense] .mat-list-item.mat-multi-line,.mat-list-base[dense] .mat-list-option.mat-multi-line{height:auto}.mat-list-base[dense] .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base[dense] .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base[dense] .mat-list-item .mat-list-text,.mat-list-base[dense] .mat-list-option .mat-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-text>*,.mat-list-base[dense] .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base[dense] .mat-list-item .mat-list-text:empty,.mat-list-base[dense] .mat-list-option .mat-list-text:empty{display:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base[dense] .mat-list-item .mat-list-avatar,.mat-list-base[dense] .mat-list-option .mat-list-avatar{flex-shrink:0;width:36px;height:36px;border-radius:50%;object-fit:cover}.mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:68px;width:calc(100% - 68px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:68px}.mat-list-base[dense] .mat-list-item .mat-list-icon,.mat-list-base[dense] .mat-list-option .mat-list-icon{flex-shrink:0;width:20px;height:20px;font-size:20px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:60px;width:calc(100% - 60px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:60px}.mat-list-base[dense] .mat-list-item .mat-divider,.mat-list-base[dense] .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-divider,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base[dense] .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-nav-list a{text-decoration:none;color:inherit}.mat-nav-list .mat-list-item{cursor:pointer;outline:none}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:transparent;text-align:left}[dir=rtl] mat-action-list button{text-align:right}mat-action-list button::-moz-focus-inner{border:0}mat-action-list .mat-list-item{cursor:pointer;outline:inherit}.mat-list-option:not(.mat-list-item-disabled){cursor:pointer;outline:none}.mat-list-item-disabled{pointer-events:none}.cdk-high-contrast-active .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active :host .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active .mat-selection-list:focus{outline-style:dotted}.cdk-high-contrast-active .mat-list-option:hover,.cdk-high-contrast-active .mat-list-option:focus,.cdk-high-contrast-active .mat-nav-list .mat-list-item:hover,.cdk-high-contrast-active .mat-nav-list .mat-list-item:focus,.cdk-high-contrast-active mat-action-list .mat-list-item:hover,.cdk-high-contrast-active mat-action-list .mat-list-item:focus{outline:dotted 1px}.cdk-high-contrast-active .mat-list-single-selected-option::after{content:\"\";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}.cdk-high-contrast-active [dir=rtl] .mat-list-single-selected-option::after{right:auto;left:16px}@media(hover: none){.mat-list-option:not(.mat-list-item-disabled):hover,.mat-nav-list .mat-list-item:not(.mat-list-item-disabled):hover,.mat-action-list .mat-list-item:not(.mat-list-item-disabled):hover{background:none}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });

    var ɵMatNavList_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatNavList);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatNavList, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mat-nav-list',
          exportAs: 'matNavList',
          host: {
            'role': 'navigation',
            'class': 'mat-nav-list mat-list-base'
          },
          template: "<ng-content></ng-content>\n\n",
          inputs: ['disableRipple', 'disabled'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
          styles: [".mat-subheader{display:flex;box-sizing:border-box;padding:16px;align-items:center}.mat-list-base .mat-subheader{margin:0}.mat-list-base{padding-top:8px;display:block;-webkit-tap-highlight-color:transparent}.mat-list-base .mat-subheader{height:48px;line-height:16px}.mat-list-base .mat-subheader:first-child{margin-top:-8px}.mat-list-base .mat-list-item,.mat-list-base .mat-list-option{display:block;height:48px;-webkit-tap-highlight-color:transparent;width:100%;padding:0;position:relative}.mat-list-base .mat-list-item .mat-list-item-content,.mat-list-base .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base .mat-list-item .mat-list-item-content-reverse,.mat-list-base .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base .mat-list-item .mat-list-item-ripple,.mat-list-base .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar,.mat-list-base .mat-list-option.mat-list-item-with-avatar{height:56px}.mat-list-base .mat-list-item.mat-2-line,.mat-list-base .mat-list-option.mat-2-line{height:72px}.mat-list-base .mat-list-item.mat-3-line,.mat-list-base .mat-list-option.mat-3-line{height:88px}.mat-list-base .mat-list-item.mat-multi-line,.mat-list-base .mat-list-option.mat-multi-line{height:auto}.mat-list-base .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base .mat-list-item .mat-list-text,.mat-list-base .mat-list-option .mat-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base .mat-list-item .mat-list-text>*,.mat-list-base .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base .mat-list-item .mat-list-text:empty,.mat-list-base .mat-list-option .mat-list-text:empty{display:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base .mat-list-item .mat-list-avatar,.mat-list-base .mat-list-option .mat-list-avatar{flex-shrink:0;width:40px;height:40px;border-radius:50%;object-fit:cover}.mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:72px;width:calc(100% - 72px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:72px}.mat-list-base .mat-list-item .mat-list-icon,.mat-list-base .mat-list-option .mat-list-icon{flex-shrink:0;width:24px;height:24px;font-size:24px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:64px;width:calc(100% - 64px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:64px}.mat-list-base .mat-list-item .mat-divider,.mat-list-base .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base .mat-list-item .mat-divider,[dir=rtl] .mat-list-base .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-list-base[dense]{padding-top:4px;display:block}.mat-list-base[dense] .mat-subheader{height:40px;line-height:8px}.mat-list-base[dense] .mat-subheader:first-child{margin-top:-4px}.mat-list-base[dense] .mat-list-item,.mat-list-base[dense] .mat-list-option{display:block;height:40px;-webkit-tap-highlight-color:transparent;width:100%;padding:0;position:relative}.mat-list-base[dense] .mat-list-item .mat-list-item-content,.mat-list-base[dense] .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base[dense] .mat-list-item .mat-list-item-content-reverse,.mat-list-base[dense] .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base[dense] .mat-list-item .mat-list-item-ripple,.mat-list-base[dense] .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar{height:48px}.mat-list-base[dense] .mat-list-item.mat-2-line,.mat-list-base[dense] .mat-list-option.mat-2-line{height:60px}.mat-list-base[dense] .mat-list-item.mat-3-line,.mat-list-base[dense] .mat-list-option.mat-3-line{height:76px}.mat-list-base[dense] .mat-list-item.mat-multi-line,.mat-list-base[dense] .mat-list-option.mat-multi-line{height:auto}.mat-list-base[dense] .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base[dense] .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base[dense] .mat-list-item .mat-list-text,.mat-list-base[dense] .mat-list-option .mat-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-text>*,.mat-list-base[dense] .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base[dense] .mat-list-item .mat-list-text:empty,.mat-list-base[dense] .mat-list-option .mat-list-text:empty{display:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base[dense] .mat-list-item .mat-list-avatar,.mat-list-base[dense] .mat-list-option .mat-list-avatar{flex-shrink:0;width:36px;height:36px;border-radius:50%;object-fit:cover}.mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:68px;width:calc(100% - 68px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:68px}.mat-list-base[dense] .mat-list-item .mat-list-icon,.mat-list-base[dense] .mat-list-option .mat-list-icon{flex-shrink:0;width:20px;height:20px;font-size:20px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:60px;width:calc(100% - 60px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:60px}.mat-list-base[dense] .mat-list-item .mat-divider,.mat-list-base[dense] .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-divider,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base[dense] .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-nav-list a{text-decoration:none;color:inherit}.mat-nav-list .mat-list-item{cursor:pointer;outline:none}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:transparent;text-align:left}[dir=rtl] mat-action-list button{text-align:right}mat-action-list button::-moz-focus-inner{border:0}mat-action-list .mat-list-item{cursor:pointer;outline:inherit}.mat-list-option:not(.mat-list-item-disabled){cursor:pointer;outline:none}.mat-list-item-disabled{pointer-events:none}.cdk-high-contrast-active .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active :host .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active .mat-selection-list:focus{outline-style:dotted}.cdk-high-contrast-active .mat-list-option:hover,.cdk-high-contrast-active .mat-list-option:focus,.cdk-high-contrast-active .mat-nav-list .mat-list-item:hover,.cdk-high-contrast-active .mat-nav-list .mat-list-item:focus,.cdk-high-contrast-active mat-action-list .mat-list-item:hover,.cdk-high-contrast-active mat-action-list .mat-list-item:focus{outline:dotted 1px}.cdk-high-contrast-active .mat-list-single-selected-option::after{content:\"\";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}.cdk-high-contrast-active [dir=rtl] .mat-list-single-selected-option::after{right:auto;left:16px}@media(hover: none){.mat-list-option:not(.mat-list-item-disabled):hover,.mat-nav-list .mat-list-item:not(.mat-list-item-disabled):hover,.mat-action-list .mat-list-item:not(.mat-list-item-disabled):hover{background:none}}\n"]
        }]
      }], null, null);
    })();

    if (false) {}

    var MatList = /*#__PURE__*/function (_MatListMixinBase3) {
      _inherits(MatList, _MatListMixinBase3);

      var _super3 = _createSuper(MatList);

      /**
       * @param {?} _elementRef
       */
      function MatList(_elementRef) {
        var _this9;

        _classCallCheck(this, MatList);

        _this9 = _super3.call(this);
        _this9._elementRef = _elementRef;
        /**
         * Emits when the state of the list changes.
         */

        _this9._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();

        if (_this9._getListType() === 'action-list') {
          _elementRef.nativeElement.classList.add('mat-action-list');
        }

        return _this9;
      }
      /**
       * @return {?}
       */


      _createClass(MatList, [{
        key: "_getListType",
        value: function _getListType() {
          /** @type {?} */
          var nodeName = this._elementRef.nativeElement.nodeName.toLowerCase();

          if (nodeName === 'mat-list') {
            return 'list';
          }

          if (nodeName === 'mat-action-list') {
            return 'action-list';
          }

          return null;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this._stateChanges.next();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._stateChanges.complete();
        }
      }]);

      return MatList;
    }(_MatListMixinBase);

    MatList.ɵfac = function MatList_Factory(t) {
      return new (t || MatList)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
    };

    MatList.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MatList,
      selectors: [["mat-list"], ["mat-action-list"]],
      hostAttrs: [1, "mat-list", "mat-list-base"],
      inputs: {
        disableRipple: "disableRipple",
        disabled: "disabled"
      },
      exportAs: ["matList"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function MatList_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      styles: [".mat-subheader{display:flex;box-sizing:border-box;padding:16px;align-items:center}.mat-list-base .mat-subheader{margin:0}.mat-list-base{padding-top:8px;display:block;-webkit-tap-highlight-color:transparent}.mat-list-base .mat-subheader{height:48px;line-height:16px}.mat-list-base .mat-subheader:first-child{margin-top:-8px}.mat-list-base .mat-list-item,.mat-list-base .mat-list-option{display:block;height:48px;-webkit-tap-highlight-color:transparent;width:100%;padding:0;position:relative}.mat-list-base .mat-list-item .mat-list-item-content,.mat-list-base .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base .mat-list-item .mat-list-item-content-reverse,.mat-list-base .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base .mat-list-item .mat-list-item-ripple,.mat-list-base .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar,.mat-list-base .mat-list-option.mat-list-item-with-avatar{height:56px}.mat-list-base .mat-list-item.mat-2-line,.mat-list-base .mat-list-option.mat-2-line{height:72px}.mat-list-base .mat-list-item.mat-3-line,.mat-list-base .mat-list-option.mat-3-line{height:88px}.mat-list-base .mat-list-item.mat-multi-line,.mat-list-base .mat-list-option.mat-multi-line{height:auto}.mat-list-base .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base .mat-list-item .mat-list-text,.mat-list-base .mat-list-option .mat-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base .mat-list-item .mat-list-text>*,.mat-list-base .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base .mat-list-item .mat-list-text:empty,.mat-list-base .mat-list-option .mat-list-text:empty{display:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base .mat-list-item .mat-list-avatar,.mat-list-base .mat-list-option .mat-list-avatar{flex-shrink:0;width:40px;height:40px;border-radius:50%;object-fit:cover}.mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:72px;width:calc(100% - 72px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:72px}.mat-list-base .mat-list-item .mat-list-icon,.mat-list-base .mat-list-option .mat-list-icon{flex-shrink:0;width:24px;height:24px;font-size:24px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:64px;width:calc(100% - 64px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:64px}.mat-list-base .mat-list-item .mat-divider,.mat-list-base .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base .mat-list-item .mat-divider,[dir=rtl] .mat-list-base .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-list-base[dense]{padding-top:4px;display:block}.mat-list-base[dense] .mat-subheader{height:40px;line-height:8px}.mat-list-base[dense] .mat-subheader:first-child{margin-top:-4px}.mat-list-base[dense] .mat-list-item,.mat-list-base[dense] .mat-list-option{display:block;height:40px;-webkit-tap-highlight-color:transparent;width:100%;padding:0;position:relative}.mat-list-base[dense] .mat-list-item .mat-list-item-content,.mat-list-base[dense] .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base[dense] .mat-list-item .mat-list-item-content-reverse,.mat-list-base[dense] .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base[dense] .mat-list-item .mat-list-item-ripple,.mat-list-base[dense] .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar{height:48px}.mat-list-base[dense] .mat-list-item.mat-2-line,.mat-list-base[dense] .mat-list-option.mat-2-line{height:60px}.mat-list-base[dense] .mat-list-item.mat-3-line,.mat-list-base[dense] .mat-list-option.mat-3-line{height:76px}.mat-list-base[dense] .mat-list-item.mat-multi-line,.mat-list-base[dense] .mat-list-option.mat-multi-line{height:auto}.mat-list-base[dense] .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base[dense] .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base[dense] .mat-list-item .mat-list-text,.mat-list-base[dense] .mat-list-option .mat-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-text>*,.mat-list-base[dense] .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base[dense] .mat-list-item .mat-list-text:empty,.mat-list-base[dense] .mat-list-option .mat-list-text:empty{display:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base[dense] .mat-list-item .mat-list-avatar,.mat-list-base[dense] .mat-list-option .mat-list-avatar{flex-shrink:0;width:36px;height:36px;border-radius:50%;object-fit:cover}.mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:68px;width:calc(100% - 68px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:68px}.mat-list-base[dense] .mat-list-item .mat-list-icon,.mat-list-base[dense] .mat-list-option .mat-list-icon{flex-shrink:0;width:20px;height:20px;font-size:20px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:60px;width:calc(100% - 60px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:60px}.mat-list-base[dense] .mat-list-item .mat-divider,.mat-list-base[dense] .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-divider,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base[dense] .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-nav-list a{text-decoration:none;color:inherit}.mat-nav-list .mat-list-item{cursor:pointer;outline:none}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:transparent;text-align:left}[dir=rtl] mat-action-list button{text-align:right}mat-action-list button::-moz-focus-inner{border:0}mat-action-list .mat-list-item{cursor:pointer;outline:inherit}.mat-list-option:not(.mat-list-item-disabled){cursor:pointer;outline:none}.mat-list-item-disabled{pointer-events:none}.cdk-high-contrast-active .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active :host .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active .mat-selection-list:focus{outline-style:dotted}.cdk-high-contrast-active .mat-list-option:hover,.cdk-high-contrast-active .mat-list-option:focus,.cdk-high-contrast-active .mat-nav-list .mat-list-item:hover,.cdk-high-contrast-active .mat-nav-list .mat-list-item:focus,.cdk-high-contrast-active mat-action-list .mat-list-item:hover,.cdk-high-contrast-active mat-action-list .mat-list-item:focus{outline:dotted 1px}.cdk-high-contrast-active .mat-list-single-selected-option::after{content:\"\";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}.cdk-high-contrast-active [dir=rtl] .mat-list-single-selected-option::after{right:auto;left:16px}@media(hover: none){.mat-list-option:not(.mat-list-item-disabled):hover,.mat-nav-list .mat-list-item:not(.mat-list-item-disabled):hover,.mat-action-list .mat-list-item:not(.mat-list-item-disabled):hover{background:none}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatList.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatList, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mat-list, mat-action-list',
          exportAs: 'matList',
          template: "<ng-content></ng-content>\n\n",
          host: {
            'class': 'mat-list mat-list-base'
          },
          inputs: ['disableRipple', 'disabled'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
          styles: [".mat-subheader{display:flex;box-sizing:border-box;padding:16px;align-items:center}.mat-list-base .mat-subheader{margin:0}.mat-list-base{padding-top:8px;display:block;-webkit-tap-highlight-color:transparent}.mat-list-base .mat-subheader{height:48px;line-height:16px}.mat-list-base .mat-subheader:first-child{margin-top:-8px}.mat-list-base .mat-list-item,.mat-list-base .mat-list-option{display:block;height:48px;-webkit-tap-highlight-color:transparent;width:100%;padding:0;position:relative}.mat-list-base .mat-list-item .mat-list-item-content,.mat-list-base .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base .mat-list-item .mat-list-item-content-reverse,.mat-list-base .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base .mat-list-item .mat-list-item-ripple,.mat-list-base .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar,.mat-list-base .mat-list-option.mat-list-item-with-avatar{height:56px}.mat-list-base .mat-list-item.mat-2-line,.mat-list-base .mat-list-option.mat-2-line{height:72px}.mat-list-base .mat-list-item.mat-3-line,.mat-list-base .mat-list-option.mat-3-line{height:88px}.mat-list-base .mat-list-item.mat-multi-line,.mat-list-base .mat-list-option.mat-multi-line{height:auto}.mat-list-base .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base .mat-list-item .mat-list-text,.mat-list-base .mat-list-option .mat-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base .mat-list-item .mat-list-text>*,.mat-list-base .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base .mat-list-item .mat-list-text:empty,.mat-list-base .mat-list-option .mat-list-text:empty{display:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base .mat-list-item .mat-list-avatar,.mat-list-base .mat-list-option .mat-list-avatar{flex-shrink:0;width:40px;height:40px;border-radius:50%;object-fit:cover}.mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:72px;width:calc(100% - 72px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:72px}.mat-list-base .mat-list-item .mat-list-icon,.mat-list-base .mat-list-option .mat-list-icon{flex-shrink:0;width:24px;height:24px;font-size:24px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:64px;width:calc(100% - 64px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:64px}.mat-list-base .mat-list-item .mat-divider,.mat-list-base .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base .mat-list-item .mat-divider,[dir=rtl] .mat-list-base .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-list-base[dense]{padding-top:4px;display:block}.mat-list-base[dense] .mat-subheader{height:40px;line-height:8px}.mat-list-base[dense] .mat-subheader:first-child{margin-top:-4px}.mat-list-base[dense] .mat-list-item,.mat-list-base[dense] .mat-list-option{display:block;height:40px;-webkit-tap-highlight-color:transparent;width:100%;padding:0;position:relative}.mat-list-base[dense] .mat-list-item .mat-list-item-content,.mat-list-base[dense] .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base[dense] .mat-list-item .mat-list-item-content-reverse,.mat-list-base[dense] .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base[dense] .mat-list-item .mat-list-item-ripple,.mat-list-base[dense] .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar{height:48px}.mat-list-base[dense] .mat-list-item.mat-2-line,.mat-list-base[dense] .mat-list-option.mat-2-line{height:60px}.mat-list-base[dense] .mat-list-item.mat-3-line,.mat-list-base[dense] .mat-list-option.mat-3-line{height:76px}.mat-list-base[dense] .mat-list-item.mat-multi-line,.mat-list-base[dense] .mat-list-option.mat-multi-line{height:auto}.mat-list-base[dense] .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base[dense] .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base[dense] .mat-list-item .mat-list-text,.mat-list-base[dense] .mat-list-option .mat-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-text>*,.mat-list-base[dense] .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base[dense] .mat-list-item .mat-list-text:empty,.mat-list-base[dense] .mat-list-option .mat-list-text:empty{display:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base[dense] .mat-list-item .mat-list-avatar,.mat-list-base[dense] .mat-list-option .mat-list-avatar{flex-shrink:0;width:36px;height:36px;border-radius:50%;object-fit:cover}.mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:68px;width:calc(100% - 68px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:68px}.mat-list-base[dense] .mat-list-item .mat-list-icon,.mat-list-base[dense] .mat-list-option .mat-list-icon{flex-shrink:0;width:20px;height:20px;font-size:20px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:60px;width:calc(100% - 60px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:60px}.mat-list-base[dense] .mat-list-item .mat-divider,.mat-list-base[dense] .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-divider,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base[dense] .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-nav-list a{text-decoration:none;color:inherit}.mat-nav-list .mat-list-item{cursor:pointer;outline:none}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:transparent;text-align:left}[dir=rtl] mat-action-list button{text-align:right}mat-action-list button::-moz-focus-inner{border:0}mat-action-list .mat-list-item{cursor:pointer;outline:inherit}.mat-list-option:not(.mat-list-item-disabled){cursor:pointer;outline:none}.mat-list-item-disabled{pointer-events:none}.cdk-high-contrast-active .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active :host .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active .mat-selection-list:focus{outline-style:dotted}.cdk-high-contrast-active .mat-list-option:hover,.cdk-high-contrast-active .mat-list-option:focus,.cdk-high-contrast-active .mat-nav-list .mat-list-item:hover,.cdk-high-contrast-active .mat-nav-list .mat-list-item:focus,.cdk-high-contrast-active mat-action-list .mat-list-item:hover,.cdk-high-contrast-active mat-action-list .mat-list-item:focus{outline:dotted 1px}.cdk-high-contrast-active .mat-list-single-selected-option::after{content:\"\";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}.cdk-high-contrast-active [dir=rtl] .mat-list-single-selected-option::after{right:auto;left:16px}@media(hover: none){.mat-list-option:not(.mat-list-item-disabled):hover,.mat-nav-list .mat-list-item:not(.mat-list-item-disabled):hover,.mat-action-list .mat-list-item:not(.mat-list-item-disabled):hover{background:none}}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * Directive whose purpose is to add the mat- CSS styling to this selector.
     * \@docs-private
     */


    var MatListAvatarCssMatStyler = function MatListAvatarCssMatStyler() {
      _classCallCheck(this, MatListAvatarCssMatStyler);
    };

    MatListAvatarCssMatStyler.ɵfac = function MatListAvatarCssMatStyler_Factory(t) {
      return new (t || MatListAvatarCssMatStyler)();
    };

    MatListAvatarCssMatStyler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatListAvatarCssMatStyler,
      selectors: [["", "mat-list-avatar", ""], ["", "matListAvatar", ""]],
      hostAttrs: [1, "mat-list-avatar"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatListAvatarCssMatStyler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[mat-list-avatar], [matListAvatar]',
          host: {
            'class': 'mat-list-avatar'
          }
        }]
      }], null, null);
    })();
    /**
     * Directive whose purpose is to add the mat- CSS styling to this selector.
     * \@docs-private
     */


    var MatListIconCssMatStyler = function MatListIconCssMatStyler() {
      _classCallCheck(this, MatListIconCssMatStyler);
    };

    MatListIconCssMatStyler.ɵfac = function MatListIconCssMatStyler_Factory(t) {
      return new (t || MatListIconCssMatStyler)();
    };

    MatListIconCssMatStyler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatListIconCssMatStyler,
      selectors: [["", "mat-list-icon", ""], ["", "matListIcon", ""]],
      hostAttrs: [1, "mat-list-icon"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatListIconCssMatStyler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[mat-list-icon], [matListIcon]',
          host: {
            'class': 'mat-list-icon'
          }
        }]
      }], null, null);
    })();
    /**
     * Directive whose purpose is to add the mat- CSS styling to this selector.
     * \@docs-private
     */


    var MatListSubheaderCssMatStyler = function MatListSubheaderCssMatStyler() {
      _classCallCheck(this, MatListSubheaderCssMatStyler);
    };

    MatListSubheaderCssMatStyler.ɵfac = function MatListSubheaderCssMatStyler_Factory(t) {
      return new (t || MatListSubheaderCssMatStyler)();
    };

    MatListSubheaderCssMatStyler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatListSubheaderCssMatStyler,
      selectors: [["", "mat-subheader", ""], ["", "matSubheader", ""]],
      hostAttrs: [1, "mat-subheader"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatListSubheaderCssMatStyler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[mat-subheader], [matSubheader]',
          host: {
            'class': 'mat-subheader'
          }
        }]
      }], null, null);
    })();
    /**
     * An item within a Material Design list.
     */


    var MatListItem = /*#__PURE__*/function (_MatListItemMixinBase2) {
      _inherits(MatListItem, _MatListItemMixinBase2);

      var _super4 = _createSuper(MatListItem);

      /**
       * @param {?} _element
       * @param {?} _changeDetectorRef
       * @param {?=} navList
       * @param {?=} list
       */
      function MatListItem(_element, _changeDetectorRef, navList, list) {
        var _this10;

        _classCallCheck(this, MatListItem);

        _this10 = _super4.call(this);
        _this10._element = _element;
        _this10._isInteractiveList = false;
        _this10._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        _this10._disabled = false;
        _this10._isInteractiveList = !!(navList || list && list._getListType() === 'action-list');
        _this10._list = navList || list; // If no type attributed is specified for <button>, set it to "button".
        // If a type attribute is already specified, do nothing.

        /** @type {?} */

        var element = _this10._getHostElement();

        if (element.nodeName.toLowerCase() === 'button' && !element.hasAttribute('type')) {
          element.setAttribute('type', 'button');
        }

        if (_this10._list) {
          // React to changes in the state of the parent list since
          // some of the item's properties depend on it (e.g. `disableRipple`).
          _this10._list._stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(_this10._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _changeDetectorRef.markForCheck();
          });
        }

        return _this10;
      }
      /**
       * Whether the option is disabled.
       * @return {?}
       */


      _createClass(MatListItem, [{
        key: "ngAfterContentInit",

        /**
         * @return {?}
         */
        value: function ngAfterContentInit() {
          Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["setLines"])(this._lines, this._element);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroyed.next();

          this._destroyed.complete();
        }
        /**
         * Whether this list item should show a ripple effect when clicked.
         * @return {?}
         */

      }, {
        key: "_isRippleDisabled",
        value: function _isRippleDisabled() {
          return !this._isInteractiveList || this.disableRipple || !!(this._list && this._list.disableRipple);
        }
        /**
         * Retrieves the DOM element of the component host.
         * @return {?}
         */

      }, {
        key: "_getHostElement",
        value: function _getHostElement() {
          return this._element.nativeElement;
        }
      }, {
        key: "disabled",
        get: function get() {
          return this._disabled || !!(this._list && this._list.disabled);
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        }
      }]);

      return MatListItem;
    }(_MatListItemMixinBase);

    MatListItem.ɵfac = function MatListItem_Factory(t) {
      return new (t || MatListItem)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MatNavList, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MatList, 8));
    };

    MatListItem.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MatListItem,
      selectors: [["mat-list-item"], ["a", "mat-list-item", ""], ["button", "mat-list-item", ""]],
      contentQueries: function MatListItem_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatListAvatarCssMatStyler, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatListIconCssMatStyler, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLine"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._avatar = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._icon = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._lines = _t);
        }
      },
      hostAttrs: [1, "mat-list-item", "mat-focus-indicator"],
      hostVars: 6,
      hostBindings: function MatListItem_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-list-item-disabled", ctx.disabled)("mat-list-item-avatar", ctx._avatar || ctx._icon)("mat-list-item-with-avatar", ctx._avatar || ctx._icon);
        }
      },
      inputs: {
        disableRipple: "disableRipple",
        disabled: "disabled"
      },
      exportAs: ["matListItem"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c2,
      decls: 6,
      vars: 2,
      consts: [[1, "mat-list-item-content"], ["mat-ripple", "", 1, "mat-list-item-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mat-list-text"]],
      template: function MatListItem_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](4, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](5, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx._isRippleDisabled());
        }
      },
      directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRipple"]],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatListItem.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: MatNavList,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: MatList,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };

    MatListItem.propDecorators = {
      _lines: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLine"], {
          descendants: true
        }]
      }],
      _avatar: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
        args: [MatListAvatarCssMatStyler]
      }],
      _icon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
        args: [MatListIconCssMatStyler]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatListItem, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mat-list-item, a[mat-list-item], button[mat-list-item]',
          exportAs: 'matListItem',
          host: {
            'class': 'mat-list-item mat-focus-indicator',
            '[class.mat-list-item-disabled]': 'disabled',
            // @breaking-change 8.0.0 Remove `mat-list-item-avatar` in favor of `mat-list-item-with-avatar`.
            '[class.mat-list-item-avatar]': '_avatar || _icon',
            '[class.mat-list-item-with-avatar]': '_avatar || _icon'
          },
          inputs: ['disableRipple'],
          template: "<div class=\"mat-list-item-content\">\n  <div class=\"mat-list-item-ripple\" mat-ripple\n       [matRippleTrigger]=\"_getHostElement()\"\n       [matRippleDisabled]=\"_isRippleDisabled()\">\n  </div>\n\n  <ng-content select=\"[mat-list-avatar], [mat-list-icon], [matListAvatar], [matListIcon]\">\n  </ng-content>\n\n  <div class=\"mat-list-text\"><ng-content select=\"[mat-line], [matLine]\"></ng-content></div>\n\n  <ng-content></ng-content>\n</div>\n",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: MatNavList,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: MatList,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      }, {
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        _lines: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLine"], {
            descendants: true
          }]
        }],
        _avatar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [MatListAvatarCssMatStyler]
        }],
        _icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [MatListIconCssMatStyler]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/list/selection-list.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * \@docs-private
     */


    var MatSelectionListBase = function MatSelectionListBase() {
      _classCallCheck(this, MatSelectionListBase);
    };
    /** @type {?} */


    var _MatSelectionListMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(MatSelectionListBase);
    /**
     * \@docs-private
     */


    var MatListOptionBase = function MatListOptionBase() {
      _classCallCheck(this, MatListOptionBase);
    };
    /** @type {?} */


    var _MatListOptionMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(MatListOptionBase);
    /**
     * \@docs-private
     * @type {?}
     */


    var MAT_SELECTION_LIST_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return MatSelectionList;
      }),
      multi: true
    };
    /**
     * Change event that is being fired whenever the selected state of an option changes.
     */

    var MatSelectionListChange =
    /**
     * @param {?} source
     * @param {?} option
     */
    function MatSelectionListChange(source, option) {
      _classCallCheck(this, MatSelectionListChange);

      this.source = source;
      this.option = option;
    };

    if (false) {}
    /**
     * Component for list-options of selection-list. Each list-option can automatically
     * generate a checkbox and can put current item into the selectionModel of selection-list
     * if the current item is selected.
     */


    var MatListOption = /*#__PURE__*/function (_MatListOptionMixinBa) {
      _inherits(MatListOption, _MatListOptionMixinBa);

      var _super5 = _createSuper(MatListOption);

      /**
       * @param {?} _element
       * @param {?} _changeDetector
       * @param {?} selectionList
       */
      function MatListOption(_element, _changeDetector, selectionList) {
        var _this11;

        _classCallCheck(this, MatListOption);

        _this11 = _super5.call(this);
        _this11._element = _element;
        _this11._changeDetector = _changeDetector;
        _this11.selectionList = selectionList;
        _this11._selected = false;
        _this11._disabled = false;
        _this11._hasFocus = false;
        /**
         * Whether the label should appear before or after the checkbox. Defaults to 'after'
         */

        _this11.checkboxPosition = 'after';
        /**
         * This is set to true after the first OnChanges cycle so we don't clear the value of `selected`
         * in the first cycle.
         */

        _this11._inputsInitialized = false;
        return _this11;
      }
      /**
       * Theme color of the list option. This sets the color of the checkbox.
       * @return {?}
       */


      _createClass(MatListOption, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          var _this12 = this;

          /** @type {?} */
          var list = this.selectionList;

          if (list._value && list._value.some(
          /**
          * @param {?} value
          * @return {?}
          */
          function (value) {
            return list.compareWith(value, _this12._value);
          })) {
            this._setSelected(true);
          }
          /** @type {?} */


          var wasSelected = this._selected; // List options that are selected at initialization can't be reported properly to the form
          // control. This is because it takes some time until the selection-list knows about all
          // available options. Also it can happen that the ControlValueAccessor has an initial value
          // that should be used instead. Deferring the value change report to the next tick ensures
          // that the form control value is not being overwritten.

          Promise.resolve().then(
          /**
          * @return {?}
          */
          function () {
            if (_this12._selected || wasSelected) {
              _this12.selected = true;

              _this12._changeDetector.markForCheck();
            }
          });
          this._inputsInitialized = true;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["setLines"])(this._lines, this._element);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _this13 = this;

          if (this.selected) {
            // We have to delay this until the next tick in order
            // to avoid changed after checked errors.
            Promise.resolve().then(
            /**
            * @return {?}
            */
            function () {
              _this13.selected = false;
            });
          }
          /** @type {?} */


          var hadFocus = this._hasFocus;
          /** @type {?} */

          var newActiveItem = this.selectionList._removeOptionFromList(this); // Only move focus if this option was focused at the time it was destroyed.


          if (hadFocus && newActiveItem) {
            newActiveItem.focus();
          }
        }
        /**
         * Toggles the selection state of the option.
         * @return {?}
         */

      }, {
        key: "toggle",
        value: function toggle() {
          this.selected = !this.selected;
        }
        /**
         * Allows for programmatic focusing of the option.
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus() {
          this._element.nativeElement.focus();
        }
        /**
         * Returns the list item's text label. Implemented as a part of the FocusKeyManager.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "getLabel",
        value: function getLabel() {
          return this._text ? this._text.nativeElement.textContent || '' : '';
        }
        /**
         * Whether this list item should show a ripple effect when clicked.
         * @return {?}
         */

      }, {
        key: "_isRippleDisabled",
        value: function _isRippleDisabled() {
          return this.disabled || this.disableRipple || this.selectionList.disableRipple;
        }
        /**
         * @return {?}
         */

      }, {
        key: "_handleClick",
        value: function _handleClick() {
          if (!this.disabled && (this.selectionList.multiple || !this.selected)) {
            this.toggle(); // Emit a change event if the selected state of the option changed through user interaction.

            this.selectionList._emitChangeEvent(this);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "_handleFocus",
        value: function _handleFocus() {
          this.selectionList._setFocusedOption(this);

          this._hasFocus = true;
        }
        /**
         * @return {?}
         */

      }, {
        key: "_handleBlur",
        value: function _handleBlur() {
          this.selectionList._onTouched();

          this._hasFocus = false;
        }
        /**
         * Retrieves the DOM element of the component host.
         * @return {?}
         */

      }, {
        key: "_getHostElement",
        value: function _getHostElement() {
          return this._element.nativeElement;
        }
        /**
         * Sets the selected state of the option. Returns whether the value has changed.
         * @param {?} selected
         * @return {?}
         */

      }, {
        key: "_setSelected",
        value: function _setSelected(selected) {
          if (selected === this._selected) {
            return false;
          }

          this._selected = selected;

          if (selected) {
            this.selectionList.selectedOptions.select(this);
          } else {
            this.selectionList.selectedOptions.deselect(this);
          }

          this._changeDetector.markForCheck();

          return true;
        }
        /**
         * Notifies Angular that the option needs to be checked in the next change detection run. Mainly
         * used to trigger an update of the list option if the disabled state of the selection list
         * changed.
         * @return {?}
         */

      }, {
        key: "_markForCheck",
        value: function _markForCheck() {
          this._changeDetector.markForCheck();
        }
      }, {
        key: "color",
        get: function get() {
          return this._color || this.selectionList.color;
        }
        /**
         * @param {?} newValue
         * @return {?}
         */
        ,
        set: function set(newValue) {
          this._color = newValue;
        }
        /**
         * Value of the option
         * @return {?}
         */

      }, {
        key: "value",
        get: function get() {
          return this._value;
        }
        /**
         * @param {?} newValue
         * @return {?}
         */
        ,
        set: function set(newValue) {
          if (this.selected && newValue !== this.value && this._inputsInitialized) {
            this.selected = false;
          }

          this._value = newValue;
        }
        /**
         * Whether the option is disabled.
         * @return {?}
         */

      }, {
        key: "disabled",
        get: function get() {
          return this._disabled || this.selectionList && this.selectionList.disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);

          if (newValue !== this._disabled) {
            this._disabled = newValue;

            this._changeDetector.markForCheck();
          }
        }
        /**
         * Whether the option is selected.
         * @return {?}
         */

      }, {
        key: "selected",
        get: function get() {
          return this.selectionList.selectedOptions.isSelected(this);
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var isSelected = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);

          if (isSelected !== this._selected) {
            this._setSelected(isSelected);

            this.selectionList._reportValueChange();
          }
        }
      }]);

      return MatListOption;
    }(_MatListOptionMixinBase);

    MatListOption.ɵfac = function MatListOption_Factory(t) {
      return new (t || MatListOption)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return MatSelectionList;
      })));
    };

    MatListOption.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MatListOption,
      selectors: [["mat-list-option"]],
      contentQueries: function MatListOption_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatListAvatarCssMatStyler, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatListIconCssMatStyler, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLine"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._avatar = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._icon = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._lines = _t);
        }
      },
      viewQuery: function MatListOption_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._text = _t.first);
        }
      },
      hostAttrs: ["role", "option", 1, "mat-list-item", "mat-list-option", "mat-focus-indicator"],
      hostVars: 15,
      hostBindings: function MatListOption_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function MatListOption_focus_HostBindingHandler() {
            return ctx._handleFocus();
          })("blur", function MatListOption_blur_HostBindingHandler() {
            return ctx._handleBlur();
          })("click", function MatListOption_click_HostBindingHandler() {
            return ctx._handleClick();
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-selected", ctx.selected)("aria-disabled", ctx.disabled)("tabindex", 0 - 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-list-item-disabled", ctx.disabled)("mat-list-item-with-avatar", ctx._avatar || ctx._icon)("mat-primary", ctx.color === "primary")("mat-accent", ctx.color !== "primary" && ctx.color !== "warn")("mat-warn", ctx.color === "warn")("mat-list-single-selected-option", ctx.selected && !ctx.selectionList.multiple);
        }
      },
      inputs: {
        disableRipple: "disableRipple",
        checkboxPosition: "checkboxPosition",
        color: "color",
        value: "value",
        selected: "selected",
        disabled: "disabled"
      },
      exportAs: ["matListOption"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c5,
      decls: 7,
      vars: 5,
      consts: [[1, "mat-list-item-content"], ["mat-ripple", "", 1, "mat-list-item-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [3, "state", "disabled", 4, "ngIf"], [1, "mat-list-text"], ["text", ""], [3, "state", "disabled"]],
      template: function MatListOption_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MatListOption_mat_pseudo_checkbox_2_Template, 1, 2, "mat-pseudo-checkbox", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](6, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-list-item-content-reverse", ctx.checkboxPosition == "after");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx._isRippleDisabled());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectionList.multiple);
        }
      },
      directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRipple"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatPseudoCheckbox"]],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatListOption.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: MatSelectionList,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return MatSelectionList;
          })]
        }]
      }];
    };

    MatListOption.propDecorators = {
      _avatar: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
        args: [MatListAvatarCssMatStyler]
      }],
      _icon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
        args: [MatListIconCssMatStyler]
      }],
      _lines: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLine"], {
          descendants: true
        }]
      }],
      _text: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: ['text']
      }],
      checkboxPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      color: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      selected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatListOption, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mat-list-option',
          exportAs: 'matListOption',
          inputs: ['disableRipple'],
          host: {
            'role': 'option',
            'class': 'mat-list-item mat-list-option mat-focus-indicator',
            '(focus)': '_handleFocus()',
            '(blur)': '_handleBlur()',
            '(click)': '_handleClick()',
            '[class.mat-list-item-disabled]': 'disabled',
            '[class.mat-list-item-with-avatar]': '_avatar || _icon',
            // Manually set the "primary" or "warn" class if the color has been explicitly
            // set to "primary" or "warn". The pseudo checkbox picks up these classes for
            // its theme.
            '[class.mat-primary]': 'color === "primary"',
            // Even though accent is the default, we need to set this class anyway, because the  list might
            // be placed inside a parent that has one of the other colors with a higher specificity.
            '[class.mat-accent]': 'color !== "primary" && color !== "warn"',
            '[class.mat-warn]': 'color === "warn"',
            '[class.mat-list-single-selected-option]': 'selected && !selectionList.multiple',
            '[attr.aria-selected]': 'selected',
            '[attr.aria-disabled]': 'disabled',
            '[attr.tabindex]': '-1'
          },
          template: "<div class=\"mat-list-item-content\"\n  [class.mat-list-item-content-reverse]=\"checkboxPosition == 'after'\">\n\n  <div mat-ripple\n    class=\"mat-list-item-ripple\"\n    [matRippleTrigger]=\"_getHostElement()\"\n    [matRippleDisabled]=\"_isRippleDisabled()\"></div>\n\n  <mat-pseudo-checkbox\n    *ngIf=\"selectionList.multiple\"\n    [state]=\"selected ? 'checked' : 'unchecked'\"\n    [disabled]=\"disabled\"></mat-pseudo-checkbox>\n\n  <div class=\"mat-list-text\" #text><ng-content></ng-content></div>\n\n  <ng-content select=\"[mat-list-avatar], [mat-list-icon], [matListAvatar], [matListIcon]\">\n  </ng-content>\n\n</div>\n",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: MatSelectionList,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(
            /**
            * @return {?}
            */
            function () {
              return MatSelectionList;
            })]
          }]
        }];
      }, {
        checkboxPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        _avatar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [MatListAvatarCssMatStyler]
        }],
        _icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [MatListIconCssMatStyler]
        }],
        _lines: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLine"], {
            descendants: true
          }]
        }],
        _text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['text']
        }]
      });
    })();

    if (false) {}
    /**
     * Material Design list component where each item is a selectable option. Behaves as a listbox.
     */


    var MatSelectionList = /*#__PURE__*/function (_MatSelectionListMixi) {
      _inherits(MatSelectionList, _MatSelectionListMixi);

      var _super6 = _createSuper(MatSelectionList);

      /**
       * @param {?} _element
       * @param {?} tabIndex
       * @param {?} _changeDetector
       */
      function MatSelectionList(_element, // @breaking-change 11.0.0 Remove `tabIndex` parameter.
      tabIndex, _changeDetector) {
        var _this14;

        _classCallCheck(this, MatSelectionList);

        _this14 = _super6.call(this);
        _this14._element = _element;
        _this14._changeDetector = _changeDetector;
        _this14._multiple = true;
        _this14._contentInitialized = false;
        /**
         * Emits a change event whenever the selected state of an option changes.
         */

        _this14.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Tabindex of the selection list.
         * \@breaking-change 11.0.0 Remove `tabIndex` input.
         */

        _this14.tabIndex = 0;
        /**
         * Theme color of the selection list. This sets the checkbox color for all list options.
         */

        _this14.color = 'accent';
        /**
         * Function used for comparing an option against the selected value when determining which
         * options should appear as selected. The first argument is the value of an options. The second
         * one is a value from the selected value. A boolean must be returned.
         */

        _this14.compareWith =
        /**
        * @param {?} a1
        * @param {?} a2
        * @return {?}
        */
        function (a1, a2) {
          return a1 === a2;
        };

        _this14._disabled = false;
        /**
         * The currently selected options.
         */

        _this14.selectedOptions = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["SelectionModel"](_this14._multiple);
        /**
         * The tabindex of the selection list.
         */

        _this14._tabIndex = -1;
        /**
         * View to model callback that should be called whenever the selected options change.
         */

        _this14._onChange =
        /**
        * @param {?} _
        * @return {?}
        */
        function (_) {};
        /**
         * Emits when the list has been destroyed.
         */


        _this14._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        /**
         * View to model callback that should be called if the list or its options lost focus.
         */

        _this14._onTouched =
        /**
        * @return {?}
        */
        function () {};

        return _this14;
      }
      /**
       * Whether the selection list is disabled.
       * @return {?}
       */


      _createClass(MatSelectionList, [{
        key: "ngAfterContentInit",

        /**
         * @return {?}
         */
        value: function ngAfterContentInit() {
          var _this15 = this;

          this._contentInitialized = true;
          this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusKeyManager"](this.options).withWrap().withTypeAhead() // Allow disabled items to be focusable. For accessibility reasons, there must be a way for
          // screenreader users, that allows reading the different options of the list.
          .skipPredicate(
          /**
          * @return {?}
          */
          function () {
            return false;
          }).withAllowedModifierKeys(['shiftKey']);

          if (this._value) {
            this._setOptionsFromValues(this._value);
          } // If the user attempts to tab out of the selection list, allow focus to escape.


          this._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this15._allowFocusEscape();
          }); // When the number of options change, update the tabindex of the selection list.


          this.options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this15._updateTabIndex();
          }); // Sync external changes to the model back to the options.

          this.selectedOptions.changed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            if (event.added) {
              var _iterator = _createForOfIteratorHelper(event.added),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var item = _step.value;
                  item.selected = true;
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }

            if (event.removed) {
              var _iterator2 = _createForOfIteratorHelper(event.removed),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var _item2 = _step2.value;
                  _item2.selected = false;
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
          });
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          /** @type {?} */
          var disableRippleChanges = changes['disableRipple'];
          /** @type {?} */

          var colorChanges = changes['color'];

          if (disableRippleChanges && !disableRippleChanges.firstChange || colorChanges && !colorChanges.firstChange) {
            this._markOptionsForCheck();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroyed.next();

          this._destroyed.complete();

          this._isDestroyed = true;
        }
        /**
         * Focuses the selection list.
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus(options) {
          this._element.nativeElement.focus(options);
        }
        /**
         * Selects all of the options.
         * @return {?}
         */

      }, {
        key: "selectAll",
        value: function selectAll() {
          this._setAllOptionsSelected(true);
        }
        /**
         * Deselects all of the options.
         * @return {?}
         */

      }, {
        key: "deselectAll",
        value: function deselectAll() {
          this._setAllOptionsSelected(false);
        }
        /**
         * Sets the focused option of the selection-list.
         * @param {?} option
         * @return {?}
         */

      }, {
        key: "_setFocusedOption",
        value: function _setFocusedOption(option) {
          this._keyManager.updateActiveItem(option);
        }
        /**
         * Removes an option from the selection list and updates the active item.
         * @param {?} option
         * @return {?} Currently-active item.
         */

      }, {
        key: "_removeOptionFromList",
        value: function _removeOptionFromList(option) {
          /** @type {?} */
          var optionIndex = this._getOptionIndex(option);

          if (optionIndex > -1 && this._keyManager.activeItemIndex === optionIndex) {
            // Check whether the option is the last item
            if (optionIndex > 0) {
              this._keyManager.updateActiveItem(optionIndex - 1);
            } else if (optionIndex === 0 && this.options.length > 1) {
              this._keyManager.updateActiveItem(Math.min(optionIndex + 1, this.options.length - 1));
            }
          }

          return this._keyManager.activeItem;
        }
        /**
         * Passes relevant key presses to our key manager.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_keydown",
        value: function _keydown(event) {
          /** @type {?} */
          var keyCode = event.keyCode;
          /** @type {?} */

          var manager = this._keyManager;
          /** @type {?} */

          var previousFocusIndex = manager.activeItemIndex;
          /** @type {?} */

          var hasModifier = Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["hasModifierKey"])(event);

          switch (keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["SPACE"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["ENTER"]:
              if (!hasModifier && !manager.isTyping()) {
                this._toggleFocusedOption(); // Always prevent space from scrolling the page since the list has focus


                event.preventDefault();
              }

              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["HOME"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["END"]:
              if (!hasModifier) {
                keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["HOME"] ? manager.setFirstItemActive() : manager.setLastItemActive();
                event.preventDefault();
              }

              break;

            default:
              // The "A" key gets special treatment, because it's used for the "select all" functionality.
              if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["A"] && this.multiple && Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["hasModifierKey"])(event, 'ctrlKey') && !manager.isTyping()) {
                /** @type {?} */
                var shouldSelect = this.options.some(
                /**
                * @param {?} option
                * @return {?}
                */
                function (option) {
                  return !option.disabled && !option.selected;
                });

                this._setAllOptionsSelected(shouldSelect, true);

                event.preventDefault();
              } else {
                manager.onKeydown(event);
              }

          }

          if (this.multiple && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["UP_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["DOWN_ARROW"]) && event.shiftKey && manager.activeItemIndex !== previousFocusIndex) {
            this._toggleFocusedOption();
          }
        }
        /**
         * Reports a value change to the ControlValueAccessor
         * @return {?}
         */

      }, {
        key: "_reportValueChange",
        value: function _reportValueChange() {
          // Stop reporting value changes after the list has been destroyed. This avoids
          // cases where the list might wrongly reset its value once it is removed, but
          // the form control is still live.
          if (this.options && !this._isDestroyed) {
            /** @type {?} */
            var value = this._getSelectedOptionValues();

            this._onChange(value);

            this._value = value;
          }
        }
        /**
         * Emits a change event if the selected state of an option changed.
         * @param {?} option
         * @return {?}
         */

      }, {
        key: "_emitChangeEvent",
        value: function _emitChangeEvent(option) {
          this.selectionChange.emit(new MatSelectionListChange(this, option));
        }
        /**
         * When the selection list is focused, we want to move focus to an option within the list. Do this
         * by setting the appropriate option to be active.
         * @return {?}
         */

      }, {
        key: "_onFocus",
        value: function _onFocus() {
          /** @type {?} */
          var activeIndex = this._keyManager.activeItemIndex;

          if (!activeIndex || activeIndex === -1) {
            // If there is no active index, set focus to the first option.
            this._keyManager.setFirstItemActive();
          } else {
            // Otherwise, set focus to the active option.
            this._keyManager.setActiveItem(activeIndex);
          }
        }
        /**
         * Implemented as part of ControlValueAccessor.
         * @param {?} values
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(values) {
          this._value = values;

          if (this.options) {
            this._setOptionsFromValues(values || []);
          }
        }
        /**
         * Implemented as a part of ControlValueAccessor.
         * @param {?} isDisabled
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this.disabled = isDisabled;
        }
        /**
         * Implemented as part of ControlValueAccessor.
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this._onChange = fn;
        }
        /**
         * Implemented as part of ControlValueAccessor.
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this._onTouched = fn;
        }
        /**
         * Sets the selected options based on the specified values.
         * @private
         * @param {?} values
         * @return {?}
         */

      }, {
        key: "_setOptionsFromValues",
        value: function _setOptionsFromValues(values) {
          var _this16 = this;

          this.options.forEach(
          /**
          * @param {?} option
          * @return {?}
          */
          function (option) {
            return option._setSelected(false);
          });
          values.forEach(
          /**
          * @param {?} value
          * @return {?}
          */
          function (value) {
            /** @type {?} */
            var correspondingOption = _this16.options.find(
            /**
            * @param {?} option
            * @return {?}
            */
            function (option) {
              // Skip options that are already in the model. This allows us to handle cases
              // where the same primitive value is selected multiple times.
              return option.selected ? false : _this16.compareWith(option.value, value);
            });

            if (correspondingOption) {
              correspondingOption._setSelected(true);
            }
          });
        }
        /**
         * Returns the values of the selected options.
         * @private
         * @return {?}
         */

      }, {
        key: "_getSelectedOptionValues",
        value: function _getSelectedOptionValues() {
          return this.options.filter(
          /**
          * @param {?} option
          * @return {?}
          */
          function (option) {
            return option.selected;
          }).map(
          /**
          * @param {?} option
          * @return {?}
          */
          function (option) {
            return option.value;
          });
        }
        /**
         * Toggles the state of the currently focused option if enabled.
         * @private
         * @return {?}
         */

      }, {
        key: "_toggleFocusedOption",
        value: function _toggleFocusedOption() {
          /** @type {?} */
          var focusedIndex = this._keyManager.activeItemIndex;

          if (focusedIndex != null && this._isValidIndex(focusedIndex)) {
            /** @type {?} */
            var focusedOption = this.options.toArray()[focusedIndex];

            if (focusedOption && !focusedOption.disabled && (this._multiple || !focusedOption.selected)) {
              focusedOption.toggle(); // Emit a change event because the focused option changed its state through user
              // interaction.

              this._emitChangeEvent(focusedOption);
            }
          }
        }
        /**
         * Sets the selected state on all of the options
         * and emits an event if anything changed.
         * @private
         * @param {?} isSelected
         * @param {?=} skipDisabled
         * @return {?}
         */

      }, {
        key: "_setAllOptionsSelected",
        value: function _setAllOptionsSelected(isSelected, skipDisabled) {
          // Keep track of whether anything changed, because we only want to
          // emit the changed event when something actually changed.

          /** @type {?} */
          var hasChanged = false;
          this.options.forEach(
          /**
          * @param {?} option
          * @return {?}
          */
          function (option) {
            if ((!skipDisabled || !option.disabled) && option._setSelected(isSelected)) {
              hasChanged = true;
            }
          });

          if (hasChanged) {
            this._reportValueChange();
          }
        }
        /**
         * Utility to ensure all indexes are valid.
         * @private
         * @param {?} index The index to be checked.
         * @return {?} True if the index is valid for our list of options.
         */

      }, {
        key: "_isValidIndex",
        value: function _isValidIndex(index) {
          return index >= 0 && index < this.options.length;
        }
        /**
         * Returns the index of the specified list option.
         * @private
         * @param {?} option
         * @return {?}
         */

      }, {
        key: "_getOptionIndex",
        value: function _getOptionIndex(option) {
          return this.options.toArray().indexOf(option);
        }
        /**
         * Marks all the options to be checked in the next change detection run.
         * @private
         * @return {?}
         */

      }, {
        key: "_markOptionsForCheck",
        value: function _markOptionsForCheck() {
          if (this.options) {
            this.options.forEach(
            /**
            * @param {?} option
            * @return {?}
            */
            function (option) {
              return option._markForCheck();
            });
          }
        }
        /**
         * Removes the tabindex from the selection list and resets it back afterwards, allowing the user
         * to tab out of it. This prevents the list from capturing focus and redirecting it back within
         * the list, creating a focus trap if it user tries to tab away.
         * @private
         * @return {?}
         */

      }, {
        key: "_allowFocusEscape",
        value: function _allowFocusEscape() {
          var _this17 = this;

          this._tabIndex = -1;
          setTimeout(
          /**
          * @return {?}
          */
          function () {
            _this17._tabIndex = 0;

            _this17._changeDetector.markForCheck();
          });
        }
        /**
         * Updates the tabindex based upon if the selection list is empty.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateTabIndex",
        value: function _updateTabIndex() {
          this._tabIndex = this.options.length === 0 ? -1 : 0;
        }
      }, {
        key: "disabled",
        get: function get() {
          return this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value); // The `MatSelectionList` and `MatListOption` are using the `OnPush` change detection
          // strategy. Therefore the options will not check for any changes if the `MatSelectionList`
          // changed its state. Since we know that a change to `disabled` property of the list affects
          // the state of the options, we manually mark each option for check.

          this._markOptionsForCheck();
        }
        /**
         * Whether selection is limited to one or multiple items (default multiple).
         * @return {?}
         */

      }, {
        key: "multiple",
        get: function get() {
          return this._multiple;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);

          if (newValue !== this._multiple) {
            if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() && this._contentInitialized) {
              throw new Error('Cannot change `multiple` mode of mat-selection-list after initialization.');
            }

            this._multiple = newValue;
            this.selectedOptions = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["SelectionModel"](this._multiple, this.selectedOptions.selected);
          }
        }
      }]);

      return MatSelectionList;
    }(_MatSelectionListMixinBase);

    MatSelectionList.ɵfac = function MatSelectionList_Factory(t) {
      return new (t || MatSelectionList)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]));
    };

    MatSelectionList.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MatSelectionList,
      selectors: [["mat-selection-list"]],
      contentQueries: function MatSelectionList_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatListOption, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.options = _t);
        }
      },
      hostAttrs: ["role", "listbox", 1, "mat-selection-list", "mat-list-base"],
      hostVars: 3,
      hostBindings: function MatSelectionList_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function MatSelectionList_focus_HostBindingHandler() {
            return ctx._onFocus();
          })("blur", function MatSelectionList_blur_HostBindingHandler() {
            return ctx._onTouched();
          })("keydown", function MatSelectionList_keydown_HostBindingHandler($event) {
            return ctx._keydown($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-multiselectable", ctx.multiple)("aria-disabled", ctx.disabled.toString())("tabindex", ctx._tabIndex);
        }
      },
      inputs: {
        disableRipple: "disableRipple",
        tabIndex: "tabIndex",
        color: "color",
        compareWith: "compareWith",
        disabled: "disabled",
        multiple: "multiple"
      },
      outputs: {
        selectionChange: "selectionChange"
      },
      exportAs: ["matSelectionList"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MAT_SELECTION_LIST_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function MatSelectionList_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      styles: [".mat-subheader{display:flex;box-sizing:border-box;padding:16px;align-items:center}.mat-list-base .mat-subheader{margin:0}.mat-list-base{padding-top:8px;display:block;-webkit-tap-highlight-color:transparent}.mat-list-base .mat-subheader{height:48px;line-height:16px}.mat-list-base .mat-subheader:first-child{margin-top:-8px}.mat-list-base .mat-list-item,.mat-list-base .mat-list-option{display:block;height:48px;-webkit-tap-highlight-color:transparent;width:100%;padding:0;position:relative}.mat-list-base .mat-list-item .mat-list-item-content,.mat-list-base .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base .mat-list-item .mat-list-item-content-reverse,.mat-list-base .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base .mat-list-item .mat-list-item-ripple,.mat-list-base .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar,.mat-list-base .mat-list-option.mat-list-item-with-avatar{height:56px}.mat-list-base .mat-list-item.mat-2-line,.mat-list-base .mat-list-option.mat-2-line{height:72px}.mat-list-base .mat-list-item.mat-3-line,.mat-list-base .mat-list-option.mat-3-line{height:88px}.mat-list-base .mat-list-item.mat-multi-line,.mat-list-base .mat-list-option.mat-multi-line{height:auto}.mat-list-base .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base .mat-list-item .mat-list-text,.mat-list-base .mat-list-option .mat-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base .mat-list-item .mat-list-text>*,.mat-list-base .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base .mat-list-item .mat-list-text:empty,.mat-list-base .mat-list-option .mat-list-text:empty{display:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base .mat-list-item .mat-list-avatar,.mat-list-base .mat-list-option .mat-list-avatar{flex-shrink:0;width:40px;height:40px;border-radius:50%;object-fit:cover}.mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:72px;width:calc(100% - 72px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:72px}.mat-list-base .mat-list-item .mat-list-icon,.mat-list-base .mat-list-option .mat-list-icon{flex-shrink:0;width:24px;height:24px;font-size:24px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:64px;width:calc(100% - 64px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:64px}.mat-list-base .mat-list-item .mat-divider,.mat-list-base .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base .mat-list-item .mat-divider,[dir=rtl] .mat-list-base .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-list-base[dense]{padding-top:4px;display:block}.mat-list-base[dense] .mat-subheader{height:40px;line-height:8px}.mat-list-base[dense] .mat-subheader:first-child{margin-top:-4px}.mat-list-base[dense] .mat-list-item,.mat-list-base[dense] .mat-list-option{display:block;height:40px;-webkit-tap-highlight-color:transparent;width:100%;padding:0;position:relative}.mat-list-base[dense] .mat-list-item .mat-list-item-content,.mat-list-base[dense] .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base[dense] .mat-list-item .mat-list-item-content-reverse,.mat-list-base[dense] .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base[dense] .mat-list-item .mat-list-item-ripple,.mat-list-base[dense] .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar{height:48px}.mat-list-base[dense] .mat-list-item.mat-2-line,.mat-list-base[dense] .mat-list-option.mat-2-line{height:60px}.mat-list-base[dense] .mat-list-item.mat-3-line,.mat-list-base[dense] .mat-list-option.mat-3-line{height:76px}.mat-list-base[dense] .mat-list-item.mat-multi-line,.mat-list-base[dense] .mat-list-option.mat-multi-line{height:auto}.mat-list-base[dense] .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base[dense] .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base[dense] .mat-list-item .mat-list-text,.mat-list-base[dense] .mat-list-option .mat-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-text>*,.mat-list-base[dense] .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base[dense] .mat-list-item .mat-list-text:empty,.mat-list-base[dense] .mat-list-option .mat-list-text:empty{display:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base[dense] .mat-list-item .mat-list-avatar,.mat-list-base[dense] .mat-list-option .mat-list-avatar{flex-shrink:0;width:36px;height:36px;border-radius:50%;object-fit:cover}.mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:68px;width:calc(100% - 68px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:68px}.mat-list-base[dense] .mat-list-item .mat-list-icon,.mat-list-base[dense] .mat-list-option .mat-list-icon{flex-shrink:0;width:20px;height:20px;font-size:20px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:60px;width:calc(100% - 60px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:60px}.mat-list-base[dense] .mat-list-item .mat-divider,.mat-list-base[dense] .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-divider,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base[dense] .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-nav-list a{text-decoration:none;color:inherit}.mat-nav-list .mat-list-item{cursor:pointer;outline:none}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:transparent;text-align:left}[dir=rtl] mat-action-list button{text-align:right}mat-action-list button::-moz-focus-inner{border:0}mat-action-list .mat-list-item{cursor:pointer;outline:inherit}.mat-list-option:not(.mat-list-item-disabled){cursor:pointer;outline:none}.mat-list-item-disabled{pointer-events:none}.cdk-high-contrast-active .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active :host .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active .mat-selection-list:focus{outline-style:dotted}.cdk-high-contrast-active .mat-list-option:hover,.cdk-high-contrast-active .mat-list-option:focus,.cdk-high-contrast-active .mat-nav-list .mat-list-item:hover,.cdk-high-contrast-active .mat-nav-list .mat-list-item:focus,.cdk-high-contrast-active mat-action-list .mat-list-item:hover,.cdk-high-contrast-active mat-action-list .mat-list-item:focus{outline:dotted 1px}.cdk-high-contrast-active .mat-list-single-selected-option::after{content:\"\";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}.cdk-high-contrast-active [dir=rtl] .mat-list-single-selected-option::after{right:auto;left:16px}@media(hover: none){.mat-list-option:not(.mat-list-item-disabled):hover,.mat-nav-list .mat-list-item:not(.mat-list-item-disabled):hover,.mat-action-list .mat-list-item:not(.mat-list-item-disabled):hover{background:none}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatSelectionList.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
          args: ['tabindex']
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    MatSelectionList.propDecorators = {
      options: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
        args: [MatListOption, {
          descendants: true
        }]
      }],
      selectionChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      tabIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      color: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      compareWith: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      multiple: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSelectionList, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mat-selection-list',
          exportAs: 'matSelectionList',
          inputs: ['disableRipple'],
          host: {
            'role': 'listbox',
            'class': 'mat-selection-list mat-list-base',
            '(focus)': '_onFocus()',
            '(blur)': '_onTouched()',
            '(keydown)': '_keydown($event)',
            '[attr.aria-multiselectable]': 'multiple',
            '[attr.aria-disabled]': 'disabled.toString()',
            '[attr.tabindex]': '_tabIndex'
          },
          template: '<ng-content></ng-content>',
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          providers: [MAT_SELECTION_LIST_VALUE_ACCESSOR],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
          styles: [".mat-subheader{display:flex;box-sizing:border-box;padding:16px;align-items:center}.mat-list-base .mat-subheader{margin:0}.mat-list-base{padding-top:8px;display:block;-webkit-tap-highlight-color:transparent}.mat-list-base .mat-subheader{height:48px;line-height:16px}.mat-list-base .mat-subheader:first-child{margin-top:-8px}.mat-list-base .mat-list-item,.mat-list-base .mat-list-option{display:block;height:48px;-webkit-tap-highlight-color:transparent;width:100%;padding:0;position:relative}.mat-list-base .mat-list-item .mat-list-item-content,.mat-list-base .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base .mat-list-item .mat-list-item-content-reverse,.mat-list-base .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base .mat-list-item .mat-list-item-ripple,.mat-list-base .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar,.mat-list-base .mat-list-option.mat-list-item-with-avatar{height:56px}.mat-list-base .mat-list-item.mat-2-line,.mat-list-base .mat-list-option.mat-2-line{height:72px}.mat-list-base .mat-list-item.mat-3-line,.mat-list-base .mat-list-option.mat-3-line{height:88px}.mat-list-base .mat-list-item.mat-multi-line,.mat-list-base .mat-list-option.mat-multi-line{height:auto}.mat-list-base .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base .mat-list-item .mat-list-text,.mat-list-base .mat-list-option .mat-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base .mat-list-item .mat-list-text>*,.mat-list-base .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base .mat-list-item .mat-list-text:empty,.mat-list-base .mat-list-option .mat-list-text:empty{display:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base .mat-list-item .mat-list-avatar,.mat-list-base .mat-list-option .mat-list-avatar{flex-shrink:0;width:40px;height:40px;border-radius:50%;object-fit:cover}.mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:72px;width:calc(100% - 72px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:72px}.mat-list-base .mat-list-item .mat-list-icon,.mat-list-base .mat-list-option .mat-list-icon{flex-shrink:0;width:24px;height:24px;font-size:24px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:64px;width:calc(100% - 64px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:64px}.mat-list-base .mat-list-item .mat-divider,.mat-list-base .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base .mat-list-item .mat-divider,[dir=rtl] .mat-list-base .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-list-base[dense]{padding-top:4px;display:block}.mat-list-base[dense] .mat-subheader{height:40px;line-height:8px}.mat-list-base[dense] .mat-subheader:first-child{margin-top:-4px}.mat-list-base[dense] .mat-list-item,.mat-list-base[dense] .mat-list-option{display:block;height:40px;-webkit-tap-highlight-color:transparent;width:100%;padding:0;position:relative}.mat-list-base[dense] .mat-list-item .mat-list-item-content,.mat-list-base[dense] .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base[dense] .mat-list-item .mat-list-item-content-reverse,.mat-list-base[dense] .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base[dense] .mat-list-item .mat-list-item-ripple,.mat-list-base[dense] .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar{height:48px}.mat-list-base[dense] .mat-list-item.mat-2-line,.mat-list-base[dense] .mat-list-option.mat-2-line{height:60px}.mat-list-base[dense] .mat-list-item.mat-3-line,.mat-list-base[dense] .mat-list-option.mat-3-line{height:76px}.mat-list-base[dense] .mat-list-item.mat-multi-line,.mat-list-base[dense] .mat-list-option.mat-multi-line{height:auto}.mat-list-base[dense] .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base[dense] .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base[dense] .mat-list-item .mat-list-text,.mat-list-base[dense] .mat-list-option .mat-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-text>*,.mat-list-base[dense] .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base[dense] .mat-list-item .mat-list-text:empty,.mat-list-base[dense] .mat-list-option .mat-list-text:empty{display:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base[dense] .mat-list-item .mat-list-avatar,.mat-list-base[dense] .mat-list-option .mat-list-avatar{flex-shrink:0;width:36px;height:36px;border-radius:50%;object-fit:cover}.mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:68px;width:calc(100% - 68px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:68px}.mat-list-base[dense] .mat-list-item .mat-list-icon,.mat-list-base[dense] .mat-list-option .mat-list-icon{flex-shrink:0;width:20px;height:20px;font-size:20px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:60px;width:calc(100% - 60px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:60px}.mat-list-base[dense] .mat-list-item .mat-divider,.mat-list-base[dense] .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-divider,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base[dense] .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-nav-list a{text-decoration:none;color:inherit}.mat-nav-list .mat-list-item{cursor:pointer;outline:none}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:transparent;text-align:left}[dir=rtl] mat-action-list button{text-align:right}mat-action-list button::-moz-focus-inner{border:0}mat-action-list .mat-list-item{cursor:pointer;outline:inherit}.mat-list-option:not(.mat-list-item-disabled){cursor:pointer;outline:none}.mat-list-item-disabled{pointer-events:none}.cdk-high-contrast-active .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active :host .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active .mat-selection-list:focus{outline-style:dotted}.cdk-high-contrast-active .mat-list-option:hover,.cdk-high-contrast-active .mat-list-option:focus,.cdk-high-contrast-active .mat-nav-list .mat-list-item:hover,.cdk-high-contrast-active .mat-nav-list .mat-list-item:focus,.cdk-high-contrast-active mat-action-list .mat-list-item:hover,.cdk-high-contrast-active mat-action-list .mat-list-item:focus{outline:dotted 1px}.cdk-high-contrast-active .mat-list-single-selected-option::after{content:\"\";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}.cdk-high-contrast-active [dir=rtl] .mat-list-single-selected-option::after{right:auto;left:16px}@media(hover: none){.mat-list-option:not(.mat-list-item-disabled):hover,.mat-nav-list .mat-list-item:not(.mat-list-item-disabled):hover,.mat-action-list .mat-list-item:not(.mat-list-item-disabled):hover{background:none}}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
            args: ['tabindex']
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }];
      }, {
        selectionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        tabIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        compareWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        multiple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
          args: [MatListOption, {
            descendants: true
          }]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/list/list-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatListModule = function MatListModule() {
      _classCallCheck(this, MatListModule);
    };

    MatListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: MatListModule
    });
    MatListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function MatListModule_Factory(t) {
        return new (t || MatListModule)();
      },
      imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatPseudoCheckboxModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatPseudoCheckboxModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatListModule, {
        declarations: function declarations() {
          return [MatList, MatNavList, MatListItem, MatListAvatarCssMatStyler, MatListIconCssMatStyler, MatListSubheaderCssMatStyler, MatSelectionList, MatListOption];
        },
        imports: function imports() {
          return [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatPseudoCheckboxModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]];
        },
        exports: function exports() {
          return [MatList, MatNavList, MatListItem, MatListAvatarCssMatStyler, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], MatListIconCssMatStyler, MatListSubheaderCssMatStyler, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatPseudoCheckboxModule"], MatSelectionList, MatListOption, _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatPseudoCheckboxModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
          exports: [MatList, MatNavList, MatListItem, MatListAvatarCssMatStyler, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], MatListIconCssMatStyler, MatListSubheaderCssMatStyler, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatPseudoCheckboxModule"], MatSelectionList, MatListOption, _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"]],
          declarations: [MatList, MatNavList, MatListItem, MatListAvatarCssMatStyler, MatListIconCssMatStyler, MatListSubheaderCssMatStyler, MatSelectionList, MatListOption]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/list/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=list.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js ***!
    \**********************************************************************/

  /*! exports provided: MAT_MENU_DEFAULT_OPTIONS, MAT_MENU_PANEL, MAT_MENU_SCROLL_STRATEGY, MatMenu, MatMenuContent, MatMenuItem, MatMenuModule, MatMenuTrigger, _MatMenu, _MatMenuBase, _MatMenuDirectivesModule, fadeInItems, matMenuAnimations, transformMenu, ɵangular_material_src_material_menu_menu_a, ɵangular_material_src_material_menu_menu_b, ɵangular_material_src_material_menu_menu_c */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015MenuJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_MENU_DEFAULT_OPTIONS", function () {
      return MAT_MENU_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_MENU_PANEL", function () {
      return MAT_MENU_PANEL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_MENU_SCROLL_STRATEGY", function () {
      return MAT_MENU_SCROLL_STRATEGY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatMenu", function () {
      return MatMenu;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatMenuContent", function () {
      return MatMenuContent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatMenuItem", function () {
      return MatMenuItem;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatMenuModule", function () {
      return MatMenuModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatMenuTrigger", function () {
      return MatMenuTrigger;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_MatMenu", function () {
      return _MatMenu;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_MatMenuBase", function () {
      return _MatMenuBase;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_MatMenuDirectivesModule", function () {
      return _MatMenuDirectivesModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeInItems", function () {
      return fadeInItems;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matMenuAnimations", function () {
      return matMenuAnimations;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "transformMenu", function () {
      return transformMenu;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_menu_menu_a", function () {
      return MAT_MENU_DEFAULT_OPTIONS_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_menu_menu_b", function () {
      return MAT_MENU_SCROLL_STRATEGY_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_menu_menu_c", function () {
      return MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER;
    });
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/menu/menu-animations.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Animations used by the mat-menu component.
     * Animation duration and timing values are based on:
     * https://material.io/guidelines/components/menus.html#menus-usage
     * \@docs-private
     * @type {?}
     */


    var _c0 = ["mat-menu-item", ""];
    var _c1 = ["*"];

    function _MatMenu_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keydown", function _MatMenu_ng_template_0_Template_div_keydown_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          return ctx_r1._handleKeydown($event);
        })("click", function _MatMenu_ng_template_0_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          return ctx_r3.closed.emit("click");
        })("@transformMenu.start", function _MatMenu_ng_template_0_Template_div_animation_transformMenu_start_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          return ctx_r4._onAnimationStart($event);
        })("@transformMenu.done", function _MatMenu_ng_template_0_Template_div_animation_transformMenu_done_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          return ctx_r5._onAnimationDone($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", ctx_r0.panelId)("ngClass", ctx_r0._classList)("@transformMenu", ctx_r0._panelAnimationState);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", ctx_r0.ariaLabel || null)("aria-labelledby", ctx_r0.ariaLabelledby || null)("aria-describedby", ctx_r0.ariaDescribedby || null);
      }
    }

    var matMenuAnimations = {
      /**
       * This animation controls the menu panel's entry and exit from the page.
       *
       * When the menu panel is added to the DOM, it scales in and fades in its border.
       *
       * When the menu panel is removed from the DOM, it simply fades out after a brief
       * delay to display the ripple.
       */
      transformMenu: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('transformMenu', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
        opacity: 0,
        transform: 'scale(0.8)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('void => enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["query"])('.mat-menu-content, .mat-mdc-menu-content', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('100ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
        opacity: 1
      }))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('120ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
        transform: 'scale(1)'
      }))])), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('100ms 25ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
        opacity: 0
      })))]),

      /**
       * This animation fades in the background color and content of the menu panel
       * after its containing element is scaled in.
       */
      fadeInItems: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('fadeInItems', [// TODO(crisbeto): this is inside the `transformMenu`
      // now. Remove next time we do breaking changes.
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('showing', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
        opacity: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)')])])
    };
    /**
     * @deprecated
     * \@breaking-change 8.0.0
     * \@docs-private
     * @type {?}
     */

    var fadeInItems = matMenuAnimations.fadeInItems;
    /**
     * @deprecated
     * \@breaking-change 8.0.0
     * \@docs-private
     * @type {?}
     */

    var transformMenu = matMenuAnimations.transformMenu;
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/menu/menu-content.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Menu content that will be rendered lazily once the menu is opened.
     */

    var MatMenuContent = /*#__PURE__*/function () {
      /**
       * @param {?} _template
       * @param {?} _componentFactoryResolver
       * @param {?} _appRef
       * @param {?} _injector
       * @param {?} _viewContainerRef
       * @param {?} _document
       * @param {?=} _changeDetectorRef
       */
      function MatMenuContent(_template, _componentFactoryResolver, _appRef, _injector, _viewContainerRef, _document, _changeDetectorRef) {
        _classCallCheck(this, MatMenuContent);

        this._template = _template;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._injector = _injector;
        this._viewContainerRef = _viewContainerRef;
        this._document = _document;
        this._changeDetectorRef = _changeDetectorRef;
        /**
         * Emits when the menu content has been attached.
         */

        this._attached = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      }
      /**
       * Attaches the content with a particular context.
       * \@docs-private
       * @param {?=} context
       * @return {?}
       */


      _createClass(MatMenuContent, [{
        key: "attach",
        value: function attach() {
          var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          if (!this._portal) {
            this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["TemplatePortal"](this._template, this._viewContainerRef);
          }

          this.detach();

          if (!this._outlet) {
            this._outlet = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["DomPortalOutlet"](this._document.createElement('div'), this._componentFactoryResolver, this._appRef, this._injector);
          }
          /** @type {?} */


          var element = this._template.elementRef.nativeElement; // Because we support opening the same menu from different triggers (which in turn have their
          // own `OverlayRef` panel), we have to re-insert the host element every time, otherwise we
          // risk it staying attached to a pane that's no longer in the DOM.

          /** @type {?} */
          element.parentNode.insertBefore(this._outlet.outletElement, element); // When `MatMenuContent` is used in an `OnPush` component, the insertion of the menu
          // content via `createEmbeddedView` does not cause the content to be seen as "dirty"
          // by Angular. This causes the `@ContentChildren` for menu items within the menu to
          // not be updated by Angular. By explicitly marking for check here, we tell Angular that
          // it needs to check for new menu items and update the `@ContentChild` in `MatMenu`.
          // @breaking-change 9.0.0 Make change detector ref required

          if (this._changeDetectorRef) {
            this._changeDetectorRef.markForCheck();
          }

          this._portal.attach(this._outlet, context);

          this._attached.next();
        }
        /**
         * Detaches the content.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "detach",
        value: function detach() {
          if (this._portal.isAttached) {
            this._portal.detach();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this._outlet) {
            this._outlet.dispose();
          }
        }
      }]);

      return MatMenuContent;
    }();

    MatMenuContent.ɵfac = function MatMenuContent_Factory(t) {
      return new (t || MatMenuContent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ApplicationRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]));
    };

    MatMenuContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: MatMenuContent,
      selectors: [["ng-template", "matMenuContent", ""]]
    });
    /** @nocollapse */

    MatMenuContent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ComponentFactoryResolver"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ApplicationRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatMenuContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: 'ng-template[matMenuContent]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ApplicationRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/menu/menu-errors.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Throws an exception for the case when menu trigger doesn't have a valid mat-menu instance
     * \@docs-private
     * @return {?}
     */


    function throwMatMenuMissingError() {
      throw Error("matMenuTriggerFor: must pass in an mat-menu instance.\n\n    Example:\n      <mat-menu #menu=\"matMenu\"></mat-menu>\n      <button [matMenuTriggerFor]=\"menu\"></button>");
    }
    /**
     * Throws an exception for the case when menu's x-position value isn't valid.
     * In other words, it doesn't match 'before' or 'after'.
     * \@docs-private
     * @return {?}
     */


    function throwMatMenuInvalidPositionX() {
      throw Error("xPosition value must be either 'before' or after'.\n      Example: <mat-menu xPosition=\"before\" #menu=\"matMenu\"></mat-menu>");
    }
    /**
     * Throws an exception for the case when menu's y-position value isn't valid.
     * In other words, it doesn't match 'above' or 'below'.
     * \@docs-private
     * @return {?}
     */


    function throwMatMenuInvalidPositionY() {
      throw Error("yPosition value must be either 'above' or below'.\n      Example: <mat-menu yPosition=\"above\" #menu=\"matMenu\"></mat-menu>");
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/menu/menu-panel.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token used to provide the parent menu to menu-specific components.
     * \@docs-private
     * @type {?}
     */


    var MAT_MENU_PANEL = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MAT_MENU_PANEL');
    /**
     * Interface for a custom menu panel that can be used with `matMenuTriggerFor`.
     * \@docs-private
     * @record
     * @template T
     */

    function MatMenuPanel() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/menu/menu-item.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Boilerplate for applying mixins to MatMenuItem.

    /**
     * \@docs-private
     */


    var MatMenuItemBase = function MatMenuItemBase() {
      _classCallCheck(this, MatMenuItemBase);
    };
    /** @type {?} */


    var _MatMenuItemMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["mixinDisabled"])(MatMenuItemBase));
    /**
     * Single item inside of a `mat-menu`. Provides the menu item styling and accessibility treatment.
     */


    var MatMenuItem = /*#__PURE__*/function (_MatMenuItemMixinBase2) {
      _inherits(MatMenuItem, _MatMenuItemMixinBase2);

      var _super7 = _createSuper(MatMenuItem);

      /**
       * @param {?} _elementRef
       * @param {?=} document
       * @param {?=} _focusMonitor
       * @param {?=} _parentMenu
       */
      function MatMenuItem(_elementRef, document, _focusMonitor, _parentMenu) {
        var _this18;

        _classCallCheck(this, MatMenuItem);

        // @breaking-change 8.0.0 make `_focusMonitor` and `document` required params.
        _this18 = _super7.call(this);
        _this18._elementRef = _elementRef;
        _this18._focusMonitor = _focusMonitor;
        _this18._parentMenu = _parentMenu;
        /**
         * ARIA role for the menu item.
         */

        _this18.role = 'menuitem';
        /**
         * Stream that emits when the menu item is hovered.
         */

        _this18._hovered = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        /**
         * Stream that emits when the menu item is focused.
         */

        _this18._focused = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        /**
         * Whether the menu item is highlighted.
         */

        _this18._highlighted = false;
        /**
         * Whether the menu item acts as a trigger for a sub-menu.
         */

        _this18._triggersSubmenu = false;

        if (_focusMonitor) {
          // Start monitoring the element so it gets the appropriate focused classes. We want
          // to show the focus style for menu items only when the focus was not caused by a
          // mouse or touch interaction.
          _focusMonitor.monitor(_this18._elementRef, false);
        }

        if (_parentMenu && _parentMenu.addItem) {
          _parentMenu.addItem(_assertThisInitialized(_this18));
        }

        _this18._document = document;
        return _this18;
      }
      /**
       * Focuses the menu item.
       * @param {?=} origin
       * @param {?=} options
       * @return {?}
       */


      _createClass(MatMenuItem, [{
        key: "focus",
        value: function focus() {
          var origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'program';
          var options = arguments.length > 1 ? arguments[1] : undefined;

          if (this._focusMonitor) {
            this._focusMonitor.focusVia(this._getHostElement(), origin, options);
          } else {
            this._getHostElement().focus(options);
          }

          this._focused.next(this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this._focusMonitor) {
            this._focusMonitor.stopMonitoring(this._elementRef);
          }

          if (this._parentMenu && this._parentMenu.removeItem) {
            this._parentMenu.removeItem(this);
          }

          this._hovered.complete();

          this._focused.complete();
        }
        /**
         * Used to set the `tabindex`.
         * @return {?}
         */

      }, {
        key: "_getTabIndex",
        value: function _getTabIndex() {
          return this.disabled ? '-1' : '0';
        }
        /**
         * Returns the host DOM element.
         * @return {?}
         */

      }, {
        key: "_getHostElement",
        value: function _getHostElement() {
          return this._elementRef.nativeElement;
        }
        /**
         * Prevents the default element actions if it is disabled.
         * @param {?} event
         * @return {?}
         */
        // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
        // In Ivy the `host` bindings will be merged when this class is extended, whereas in
        // ViewEngine they're overwritten.
        // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
        // tslint:disable-next-line:no-host-decorator-in-concrete

      }, {
        key: "_checkDisabled",
        value: function _checkDisabled(event) {
          if (this.disabled) {
            event.preventDefault();
            event.stopPropagation();
          }
        }
        /**
         * Emits to the hover stream.
         * @return {?}
         */
        // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
        // In Ivy the `host` bindings will be merged when this class is extended, whereas in
        // ViewEngine they're overwritten.
        // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
        // tslint:disable-next-line:no-host-decorator-in-concrete

      }, {
        key: "_handleMouseEnter",
        value: function _handleMouseEnter() {
          this._hovered.next(this);
        }
        /**
         * Gets the label to be used when determining whether the option should be focused.
         * @return {?}
         */

      }, {
        key: "getLabel",
        value: function getLabel() {
          /** @type {?} */
          var element = this._elementRef.nativeElement;
          /** @type {?} */

          var textNodeType = this._document ? this._document.TEXT_NODE : 3;
          /** @type {?} */

          var output = '';

          if (element.childNodes) {
            /** @type {?} */
            var length = element.childNodes.length; // Go through all the top-level text nodes and extract their text.
            // We skip anything that's not a text node to prevent the text from
            // being thrown off by something like an icon.

            for (var i = 0; i < length; i++) {
              if (element.childNodes[i].nodeType === textNodeType) {
                output += element.childNodes[i].textContent;
              }
            }
          }

          return output.trim();
        }
      }]);

      return MatMenuItem;
    }(_MatMenuItemMixinBase);

    MatMenuItem.ɵfac = function MatMenuItem_Factory(t) {
      return new (t || MatMenuItem)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_MENU_PANEL, 8));
    };

    MatMenuItem.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: MatMenuItem,
      selectors: [["", "mat-menu-item", ""]],
      hostAttrs: [1, "mat-focus-indicator"],
      hostVars: 10,
      hostBindings: function MatMenuItem_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MatMenuItem_click_HostBindingHandler($event) {
            return ctx._checkDisabled($event);
          })("mouseenter", function MatMenuItem_mouseenter_HostBindingHandler() {
            return ctx._handleMouseEnter();
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("role", ctx.role)("tabindex", ctx._getTabIndex())("aria-disabled", ctx.disabled.toString())("disabled", ctx.disabled || null);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-menu-item", true)("mat-menu-item-highlighted", ctx._highlighted)("mat-menu-item-submenu-trigger", ctx._triggersSubmenu);
        }
      },
      inputs: {
        disabled: "disabled",
        disableRipple: "disableRipple",
        role: "role"
      },
      exportAs: ["matMenuItem"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
      attrs: _c0,
      ngContentSelectors: _c1,
      decls: 2,
      vars: 2,
      consts: [["matRipple", "", 1, "mat-menu-ripple", 3, "matRippleDisabled", "matRippleTrigger"]],
      template: function MatMenuItem_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleTrigger", ctx._getHostElement());
        }
      },
      directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRipple"]],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatMenuItem.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]
        }]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [MAT_MENU_PANEL]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }];
    };

    MatMenuItem.propDecorators = {
      role: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      _checkDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
        args: ['click', ['$event']]
      }],
      _handleMouseEnter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
        args: ['mouseenter']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatMenuItem, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: '[mat-menu-item]',
          exportAs: 'matMenuItem',
          inputs: ['disabled', 'disableRipple'],
          host: {
            '[attr.role]': 'role',
            '[class.mat-menu-item]': 'true',
            '[class.mat-menu-item-highlighted]': '_highlighted',
            '[class.mat-menu-item-submenu-trigger]': '_triggersSubmenu',
            '[attr.tabindex]': '_getTabIndex()',
            '[attr.aria-disabled]': 'disabled.toString()',
            '[attr.disabled]': 'disabled || null',
            'class': 'mat-focus-indicator'
          },
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
          template: "<ng-content></ng-content>\n<div class=\"mat-menu-ripple\" matRipple\n     [matRippleDisabled]=\"disableRipple || disabled\"\n     [matRippleTrigger]=\"_getHostElement()\">\n</div>\n"
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_MENU_PANEL]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }];
      }, {
        role: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        _checkDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['click', ['$event']]
        }],
        _handleMouseEnter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['mouseenter']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/menu/menu.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Default `mat-menu` options that can be overridden.
     * @record
     */


    function MatMenuDefaultOptions() {}

    if (false) {}
    /**
     * Injection token to be used to override the default options for `mat-menu`.
     * @type {?}
     */


    var MAT_MENU_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('mat-menu-default-options', {
      providedIn: 'root',
      factory: MAT_MENU_DEFAULT_OPTIONS_FACTORY
    });
    /**
     * \@docs-private
     * @return {?}
     */

    function MAT_MENU_DEFAULT_OPTIONS_FACTORY() {
      return {
        overlapTrigger: false,
        xPosition: 'after',
        yPosition: 'below',
        backdropClass: 'cdk-overlay-transparent-backdrop'
      };
    }
    /**
     * Start elevation for the menu panel.
     * \@docs-private
     * @type {?}
     */


    var MAT_MENU_BASE_ELEVATION = 4;
    /** @type {?} */

    var menuPanelUid = 0;
    /**
     * Base class with all of the `MatMenu` functionality.
     */
    // tslint:disable-next-line:class-name

    var _MatMenuBase = /*#__PURE__*/function () {
      /**
       * @param {?} _elementRef
       * @param {?} _ngZone
       * @param {?} _defaultOptions
       */
      function _MatMenuBase(_elementRef, _ngZone, _defaultOptions) {
        _classCallCheck(this, _MatMenuBase);

        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        this._defaultOptions = _defaultOptions;
        this._xPosition = this._defaultOptions.xPosition;
        this._yPosition = this._defaultOptions.yPosition;
        /**
         * Only the direct descendant menu items.
         */

        this._directDescendantItems = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["QueryList"]();
        /**
         * Subscription to tab events on the menu panel
         */

        this._tabSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
        /**
         * Config object to be passed into the menu's ngClass
         */

        this._classList = {};
        /**
         * Current state of the panel animation.
         */

        this._panelAnimationState = 'void';
        /**
         * Emits whenever an animation on the menu completes.
         */

        this._animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        /**
         * Class to be added to the backdrop element.
         */

        this.backdropClass = this._defaultOptions.backdropClass;
        this._overlapTrigger = this._defaultOptions.overlapTrigger;
        this._hasBackdrop = this._defaultOptions.hasBackdrop;
        /**
         * Event emitted when the menu is closed.
         */

        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Event emitted when the menu is closed.
         * @deprecated Switch to `closed` instead
         * \@breaking-change 8.0.0
         */

        this.close = this.closed;
        this.panelId = "mat-menu-panel-".concat(menuPanelUid++);
      }
      /**
       * Position of the menu in the X axis.
       * @return {?}
       */


      _createClass(_MatMenuBase, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          this.setPositionClasses();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this19 = this;

          this._updateDirectDescendants();

          this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusKeyManager"](this._directDescendantItems).withWrap().withTypeAhead();
          this._tabSubscription = this._keyManager.tabOut.subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this19.closed.emit('tab');
          }); // If a user manually (programatically) focuses a menu item, we need to reflect that focus
          // change back to the key manager. Note that we don't need to unsubscribe here because _focused
          // is internal and we know that it gets completed on destroy.

          this._directDescendantItems.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(this._directDescendantItems), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(
          /**
          * @param {?} items
          * @return {?}
          */
          function (items) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"]).apply(void 0, _toConsumableArray(items.map(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return item._focused;
            })));
          })).subscribe(
          /**
          * @param {?} focusedItem
          * @return {?}
          */
          function (focusedItem) {
            return _this19._keyManager.updateActiveItem(focusedItem);
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._directDescendantItems.destroy();

          this._tabSubscription.unsubscribe();

          this.closed.complete();
        }
        /**
         * Stream that emits whenever the hovered menu item changes.
         * @return {?}
         */

      }, {
        key: "_hovered",
        value: function _hovered() {
          // Coerce the `changes` property because Angular types it as `Observable<any>`

          /** @type {?} */
          var itemChanges =
          /** @type {?} */
          this._directDescendantItems.changes;
          return (
            /** @type {?} */
            itemChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(this._directDescendantItems), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(
            /**
            * @param {?} items
            * @return {?}
            */
            function (items) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"]).apply(void 0, _toConsumableArray(items.map(
              /**
              * @param {?} item
              * @return {?}
              */
              function (item) {
                return item._hovered;
              })));
            }))
          );
        }
        /*
           * Registers a menu item with the menu.
           * @docs-private
           * @deprecated No longer being used. To be removed.
           * @breaking-change 9.0.0
           */

        /**
         * @param {?} _item
         * @return {?}
         */

      }, {
        key: "addItem",
        value: function addItem(_item) {}
        /**
         * Removes an item from the menu.
         * \@docs-private
         * @deprecated No longer being used. To be removed.
         * \@breaking-change 9.0.0
         * @param {?} _item
         * @return {?}
         */

      }, {
        key: "removeItem",
        value: function removeItem(_item) {}
        /**
         * Handle a keyboard event from the menu, delegating to the appropriate action.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleKeydown",
        value: function _handleKeydown(event) {
          /** @type {?} */
          var keyCode = event.keyCode;
          /** @type {?} */

          var manager = this._keyManager;

          switch (keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["ESCAPE"]:
              if (!Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["hasModifierKey"])(event)) {
                event.preventDefault();
                this.closed.emit('keydown');
              }

              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["LEFT_ARROW"]:
              if (this.parentMenu && this.direction === 'ltr') {
                this.closed.emit('keydown');
              }

              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["RIGHT_ARROW"]:
              if (this.parentMenu && this.direction === 'rtl') {
                this.closed.emit('keydown');
              }

              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["HOME"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["END"]:
              if (!Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["hasModifierKey"])(event)) {
                keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["HOME"] ? manager.setFirstItemActive() : manager.setLastItemActive();
                event.preventDefault();
              }

              break;

            default:
              if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["UP_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["DOWN_ARROW"]) {
                manager.setFocusOrigin('keyboard');
              }

              manager.onKeydown(event);
          }
        }
        /**
         * Focus the first item in the menu.
         * @param {?=} origin Action from which the focus originated. Used to set the correct styling.
         * @return {?}
         */

      }, {
        key: "focusFirstItem",
        value: function focusFirstItem() {
          var _this20 = this;

          var origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'program';

          // When the content is rendered lazily, it takes a bit before the items are inside the DOM.
          if (this.lazyContent) {
            this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(
            /**
            * @return {?}
            */
            function () {
              return _this20._focusFirstItem(origin);
            });
          } else {
            this._focusFirstItem(origin);
          }
        }
        /**
         * Actual implementation that focuses the first item. Needs to be separated
         * out so we don't repeat the same logic in the public `focusFirstItem` method.
         * @private
         * @param {?} origin
         * @return {?}
         */

      }, {
        key: "_focusFirstItem",
        value: function _focusFirstItem(origin) {
          /** @type {?} */
          var manager = this._keyManager;
          manager.setFocusOrigin(origin).setFirstItemActive(); // If there's no active item at this point, it means that all the items are disabled.
          // Move focus to the menu panel so keyboard events like Escape still work. Also this will
          // give _some_ feedback to screen readers.

          if (!manager.activeItem && this._directDescendantItems.length) {
            /** @type {?} */
            var element = this._directDescendantItems.first._getHostElement().parentElement; // Because the `mat-menu` is at the DOM insertion point, not inside the overlay, we don't
            // have a nice way of getting a hold of the menu panel. We can't use a `ViewChild` either
            // because the panel is inside an `ng-template`. We work around it by starting from one of
            // the items and walking up the DOM.


            while (element) {
              if (element.getAttribute('role') === 'menu') {
                element.focus();
                break;
              } else {
                element = element.parentElement;
              }
            }
          }
        }
        /**
         * Resets the active item in the menu. This is used when the menu is opened, allowing
         * the user to start from the first option when pressing the down arrow.
         * @return {?}
         */

      }, {
        key: "resetActiveItem",
        value: function resetActiveItem() {
          this._keyManager.setActiveItem(-1);
        }
        /**
         * Sets the menu panel elevation.
         * @param {?} depth Number of parent menus that come before the menu.
         * @return {?}
         */

      }, {
        key: "setElevation",
        value: function setElevation(depth) {
          // The elevation starts at the base and increases by one for each level.
          // Capped at 24 because that's the maximum elevation defined in the Material design spec.

          /** @type {?} */
          var elevation = Math.min(MAT_MENU_BASE_ELEVATION + depth, 24);
          /** @type {?} */

          var newElevation = "mat-elevation-z".concat(elevation);
          /** @type {?} */

          var customElevation = Object.keys(this._classList).find(
          /**
          * @param {?} c
          * @return {?}
          */
          function (c) {
            return c.startsWith('mat-elevation-z');
          });

          if (!customElevation || customElevation === this._previousElevation) {
            if (this._previousElevation) {
              this._classList[this._previousElevation] = false;
            }

            this._classList[newElevation] = true;
            this._previousElevation = newElevation;
          }
        }
        /**
         * Adds classes to the menu panel based on its position. Can be used by
         * consumers to add specific styling based on the position.
         * \@docs-private
         * @param {?=} posX Position of the menu along the x axis.
         * @param {?=} posY Position of the menu along the y axis.
         * @return {?}
         */

      }, {
        key: "setPositionClasses",
        value: function setPositionClasses() {
          var posX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.xPosition;
          var posY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.yPosition;

          /** @type {?} */
          var classes = this._classList;
          classes['mat-menu-before'] = posX === 'before';
          classes['mat-menu-after'] = posX === 'after';
          classes['mat-menu-above'] = posY === 'above';
          classes['mat-menu-below'] = posY === 'below';
        }
        /**
         * Starts the enter animation.
         * @return {?}
         */

      }, {
        key: "_startAnimation",
        value: function _startAnimation() {
          // @breaking-change 8.0.0 Combine with _resetAnimation.
          this._panelAnimationState = 'enter';
        }
        /**
         * Resets the panel animation to its initial state.
         * @return {?}
         */

      }, {
        key: "_resetAnimation",
        value: function _resetAnimation() {
          // @breaking-change 8.0.0 Combine with _startAnimation.
          this._panelAnimationState = 'void';
        }
        /**
         * Callback that is invoked when the panel animation completes.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onAnimationDone",
        value: function _onAnimationDone(event) {
          this._animationDone.next(event);

          this._isAnimating = false;
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onAnimationStart",
        value: function _onAnimationStart(event) {
          this._isAnimating = true; // Scroll the content element to the top as soon as the animation starts. This is necessary,
          // because we move focus to the first item while it's still being animated, which can throw
          // the browser off when it determines the scroll position. Alternatively we can move focus
          // when the animation is done, however moving focus asynchronously will interrupt screen
          // readers which are in the process of reading out the menu already. We take the `element`
          // from the `event` since we can't use a `ViewChild` to access the pane.

          if (event.toState === 'enter' && this._keyManager.activeItemIndex === 0) {
            event.element.scrollTop = 0;
          }
        }
        /**
         * Sets up a stream that will keep track of any newly-added menu items and will update the list
         * of direct descendants. We collect the descendants this way, because `_allItems` can include
         * items that are part of child menus, and using a custom way of registering items is unreliable
         * when it comes to maintaining the item order.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateDirectDescendants",
        value: function _updateDirectDescendants() {
          var _this21 = this;

          this._allItems.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(this._allItems)).subscribe(
          /**
          * @param {?} items
          * @return {?}
          */
          function (items) {
            _this21._directDescendantItems.reset(items.filter(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return item._parentMenu === _this21;
            }));

            _this21._directDescendantItems.notifyOnChanges();
          });
        }
      }, {
        key: "xPosition",
        get: function get() {
          return this._xPosition;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (value !== 'before' && value !== 'after') {
            throwMatMenuInvalidPositionX();
          }

          this._xPosition = value;
          this.setPositionClasses();
        }
        /**
         * Position of the menu in the Y axis.
         * @return {?}
         */

      }, {
        key: "yPosition",
        get: function get() {
          return this._yPosition;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (value !== 'above' && value !== 'below') {
            throwMatMenuInvalidPositionY();
          }

          this._yPosition = value;
          this.setPositionClasses();
        }
        /**
         * Whether the menu should overlap its trigger.
         * @return {?}
         */

      }, {
        key: "overlapTrigger",
        get: function get() {
          return this._overlapTrigger;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._overlapTrigger = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether the menu has a backdrop.
         * @return {?}
         */

      }, {
        key: "hasBackdrop",
        get: function get() {
          return this._hasBackdrop;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._hasBackdrop = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        }
        /**
         * This method takes classes set on the host mat-menu element and applies them on the
         * menu template that displays in the overlay container.  Otherwise, it's difficult
         * to style the containing menu from outside the component.
         * @param {?} classes list of class names
         * @return {?}
         */

      }, {
        key: "panelClass",
        set: function set(classes) {
          var _this22 = this;

          /** @type {?} */
          var previousPanelClass = this._previousPanelClass;

          if (previousPanelClass && previousPanelClass.length) {
            previousPanelClass.split(' ').forEach(
            /**
            * @param {?} className
            * @return {?}
            */
            function (className) {
              _this22._classList[className] = false;
            });
          }

          this._previousPanelClass = classes;

          if (classes && classes.length) {
            classes.split(' ').forEach(
            /**
            * @param {?} className
            * @return {?}
            */
            function (className) {
              _this22._classList[className] = true;
            });
            this._elementRef.nativeElement.className = '';
          }
        }
        /**
         * This method takes classes set on the host mat-menu element and applies them on the
         * menu template that displays in the overlay container.  Otherwise, it's difficult
         * to style the containing menu from outside the component.
         * @deprecated Use `panelClass` instead.
         * \@breaking-change 8.0.0
         * @return {?}
         */

      }, {
        key: "classList",
        get: function get() {
          return this.panelClass;
        }
        /**
         * @param {?} classes
         * @return {?}
         */
        ,
        set: function set(classes) {
          this.panelClass = classes;
        }
      }]);

      return _MatMenuBase;
    }();

    _MatMenuBase.ɵfac = function _MatMenuBase_Factory(t) {
      return new (t || _MatMenuBase)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_MENU_DEFAULT_OPTIONS));
    };

    _MatMenuBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: _MatMenuBase,
      contentQueries: function _MatMenuBase_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatMenuContent, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatMenuItem, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatMenuItem, false);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.lazyContent = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._allItems = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.items = _t);
        }
      },
      viewQuery: function _MatMenuBase_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.templateRef = _t.first);
        }
      },
      inputs: {
        backdropClass: "backdropClass",
        xPosition: "xPosition",
        yPosition: "yPosition",
        overlapTrigger: "overlapTrigger",
        hasBackdrop: "hasBackdrop",
        panelClass: ["class", "panelClass"],
        classList: "classList",
        ariaLabel: ["aria-label", "ariaLabel"],
        ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
        ariaDescribedby: ["aria-describedby", "ariaDescribedby"]
      },
      outputs: {
        closed: "closed",
        close: "close"
      }
    });
    /** @nocollapse */

    _MatMenuBase.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [MAT_MENU_DEFAULT_OPTIONS]
        }]
      }];
    };

    _MatMenuBase.propDecorators = {
      _allItems: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
        args: [MatMenuItem, {
          descendants: true
        }]
      }],
      backdropClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      ariaLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['aria-label']
      }],
      ariaLabelledby: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['aria-labelledby']
      }],
      ariaDescribedby: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['aria-describedby']
      }],
      xPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      yPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      templateRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]]
      }],
      items: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
        args: [MatMenuItem, {
          descendants: false
        }]
      }],
      lazyContent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
        args: [MatMenuContent]
      }],
      overlapTrigger: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      hasBackdrop: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      panelClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['class']
      }],
      classList: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      closed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      close: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](_MatMenuBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_MENU_DEFAULT_OPTIONS]
          }]
        }];
      }, {
        backdropClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        closed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        close: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        xPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        yPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        overlapTrigger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        hasBackdrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        panelClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['class']
        }],
        classList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        _allItems: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [MatMenuItem, {
            descendants: true
          }]
        }],
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['aria-label']
        }],
        ariaLabelledby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['aria-labelledby']
        }],
        ariaDescribedby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['aria-describedby']
        }],
        templateRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]]
        }],
        items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [MatMenuItem, {
            descendants: false
          }]
        }],
        lazyContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
          args: [MatMenuContent]
        }]
      });
    })();

    if (false) {}
    /**
     * \@docs-private We show the "_MatMenu" class as "MatMenu" in the docs.
     */


    var MatMenu = /*#__PURE__*/function (_MatMenuBase2) {
      _inherits(MatMenu, _MatMenuBase2);

      var _super8 = _createSuper(MatMenu);

      function MatMenu() {
        _classCallCheck(this, MatMenu);

        return _super8.apply(this, arguments);
      }

      return MatMenu;
    }(_MatMenuBase);

    MatMenu.ɵfac = function MatMenu_Factory(t) {
      return ɵMatMenu_BaseFactory(t || MatMenu);
    };

    MatMenu.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: MatMenu,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵMatMenu_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](MatMenu);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatMenu, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"]
      }], null, null);
    })(); // Note on the weird inheritance setup: we need three classes, because the MDC-based menu has to
    // extend `MatMenu`, however keeping a reference to it will cause the inlined template and styles
    // to be retained as well. The MDC menu also has to provide itself as a `MatMenu` in order for
    // queries and DI to work correctly, while still not referencing the actual menu class.
    // Class responsibility is split up as follows:
    // * _MatMenuBase - provides all the functionality without any of the Angular metadata.
    // * MatMenu - keeps the same name symbol name as the current menu and
    // is used as a provider for DI and query purposes.
    // * _MatMenu - the actual menu component implementation with the Angular metadata that should
    // be tree shaken away for MDC.

    /**
     * \@docs-public MatMenu
     */
    // tslint:disable-next-line:class-name


    var _MatMenu = /*#__PURE__*/function (_MatMenu2) {
      _inherits(_MatMenu, _MatMenu2);

      var _super9 = _createSuper(_MatMenu);

      /**
       * @param {?} elementRef
       * @param {?} ngZone
       * @param {?} defaultOptions
       */
      function _MatMenu(elementRef, ngZone, defaultOptions) {
        _classCallCheck(this, _MatMenu);

        return _super9.call(this, elementRef, ngZone, defaultOptions);
      }

      return _MatMenu;
    }(MatMenu);

    _MatMenu.ɵfac = function _MatMenu_Factory(t) {
      return new (t || _MatMenu)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_MENU_DEFAULT_OPTIONS));
    };

    _MatMenu.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: _MatMenu,
      selectors: [["mat-menu"]],
      exportAs: ["matMenu"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
        provide: MAT_MENU_PANEL,
        useExisting: MatMenu
      }, {
        provide: MatMenu,
        useExisting: _MatMenu
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c1,
      decls: 1,
      vars: 0,
      consts: [["tabindex", "-1", "role", "menu", 1, "mat-menu-panel", 3, "id", "ngClass", "keydown", "click"], [1, "mat-menu-content"]],
      template: function _MatMenu_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, _MatMenu_ng_template_0_Template, 3, 6, "ng-template");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"]],
      styles: [".mat-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;max-height:calc(100vh - 48px);border-radius:4px;outline:0;min-height:64px}.mat-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-menu-panel{outline:solid 1px}.mat-menu-content:not(:empty){padding-top:8px;padding-bottom:8px}.mat-menu-item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative}.mat-menu-item::-moz-focus-inner{border:0}.mat-menu-item[disabled]{cursor:default}[dir=rtl] .mat-menu-item{text-align:right}.mat-menu-item .mat-icon{margin-right:16px;vertical-align:middle}.mat-menu-item .mat-icon svg{vertical-align:top}[dir=rtl] .mat-menu-item .mat-icon{margin-left:16px;margin-right:0}.mat-menu-item[disabled]{pointer-events:none}.cdk-high-contrast-active .mat-menu-item.cdk-program-focused,.cdk-high-contrast-active .mat-menu-item.cdk-keyboard-focused,.cdk-high-contrast-active .mat-menu-item-highlighted{outline:dotted 1px}.mat-menu-item-submenu-trigger{padding-right:32px}.mat-menu-item-submenu-trigger::after{width:0;height:0;border-style:solid;border-width:5px 0 5px 5px;border-color:transparent transparent transparent currentColor;content:\"\";display:inline-block;position:absolute;top:50%;right:16px;transform:translateY(-50%)}[dir=rtl] .mat-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}[dir=rtl] .mat-menu-item-submenu-trigger::after{right:auto;left:16px;transform:rotateY(180deg) translateY(-50%)}button.mat-menu-item{width:100%}.mat-menu-item .mat-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"],
      encapsulation: 2,
      data: {
        animation: [matMenuAnimations.transformMenu, matMenuAnimations.fadeInItems]
      },
      changeDetection: 0
    });
    /** @nocollapse */

    _MatMenu.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [MAT_MENU_DEFAULT_OPTIONS]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](_MatMenu, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'mat-menu',
          template: "<ng-template>\n  <div\n    class=\"mat-menu-panel\"\n    [id]=\"panelId\"\n    [ngClass]=\"_classList\"\n    (keydown)=\"_handleKeydown($event)\"\n    (click)=\"closed.emit('click')\"\n    [@transformMenu]=\"_panelAnimationState\"\n    (@transformMenu.start)=\"_onAnimationStart($event)\"\n    (@transformMenu.done)=\"_onAnimationDone($event)\"\n    tabindex=\"-1\"\n    role=\"menu\"\n    [attr.aria-label]=\"ariaLabel || null\"\n    [attr.aria-labelledby]=\"ariaLabelledby || null\"\n    [attr.aria-describedby]=\"ariaDescribedby || null\">\n    <div class=\"mat-menu-content\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>\n",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
          exportAs: 'matMenu',
          animations: [matMenuAnimations.transformMenu, matMenuAnimations.fadeInItems],
          providers: [{
            provide: MAT_MENU_PANEL,
            useExisting: MatMenu
          }, {
            provide: MatMenu,
            useExisting: _MatMenu
          }],
          styles: [".mat-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;max-height:calc(100vh - 48px);border-radius:4px;outline:0;min-height:64px}.mat-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-menu-panel{outline:solid 1px}.mat-menu-content:not(:empty){padding-top:8px;padding-bottom:8px}.mat-menu-item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative}.mat-menu-item::-moz-focus-inner{border:0}.mat-menu-item[disabled]{cursor:default}[dir=rtl] .mat-menu-item{text-align:right}.mat-menu-item .mat-icon{margin-right:16px;vertical-align:middle}.mat-menu-item .mat-icon svg{vertical-align:top}[dir=rtl] .mat-menu-item .mat-icon{margin-left:16px;margin-right:0}.mat-menu-item[disabled]{pointer-events:none}.cdk-high-contrast-active .mat-menu-item.cdk-program-focused,.cdk-high-contrast-active .mat-menu-item.cdk-keyboard-focused,.cdk-high-contrast-active .mat-menu-item-highlighted{outline:dotted 1px}.mat-menu-item-submenu-trigger{padding-right:32px}.mat-menu-item-submenu-trigger::after{width:0;height:0;border-style:solid;border-width:5px 0 5px 5px;border-color:transparent transparent transparent currentColor;content:\"\";display:inline-block;position:absolute;top:50%;right:16px;transform:translateY(-50%)}[dir=rtl] .mat-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}[dir=rtl] .mat-menu-item-submenu-trigger::after{right:auto;left:16px;transform:rotateY(180deg) translateY(-50%)}button.mat-menu-item{width:100%}.mat-menu-item .mat-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_MENU_DEFAULT_OPTIONS]
          }]
        }];
      }, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/menu/menu-trigger.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token that determines the scroll handling while the menu is open.
     * @type {?}
     */


    var MAT_MENU_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('mat-menu-scroll-strategy');
    /**
     * \@docs-private
     * @param {?} overlay
     * @return {?}
     */

    function MAT_MENU_SCROLL_STRATEGY_FACTORY(overlay) {
      return (
        /**
        * @return {?}
        */
        function () {
          return overlay.scrollStrategies.reposition();
        }
      );
    }
    /**
     * \@docs-private
     * @type {?}
     */


    var MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER = {
      provide: MAT_MENU_SCROLL_STRATEGY,
      deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]],
      useFactory: MAT_MENU_SCROLL_STRATEGY_FACTORY
    };
    /**
     * Default top padding of the menu panel.
     * @type {?}
     */

    var MENU_PANEL_TOP_PADDING = 8;
    /**
     * Options for binding a passive event listener.
     * @type {?}
     */

    var passiveEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["normalizePassiveListenerOptions"])({
      passive: true
    }); // TODO(andrewseguin): Remove the kebab versions in favor of camelCased attribute selectors

    /**
     * Directive applied to an element that should trigger a `mat-menu`.
     */

    var MatMenuTrigger = /*#__PURE__*/function () {
      /**
       * @param {?} _overlay
       * @param {?} _element
       * @param {?} _viewContainerRef
       * @param {?} scrollStrategy
       * @param {?} _parentMenu
       * @param {?} _menuItemInstance
       * @param {?} _dir
       * @param {?=} _focusMonitor
       */
      function MatMenuTrigger(_overlay, _element, _viewContainerRef, scrollStrategy, _parentMenu, _menuItemInstance, _dir, _focusMonitor) {
        var _this23 = this;

        _classCallCheck(this, MatMenuTrigger);

        this._overlay = _overlay;
        this._element = _element;
        this._viewContainerRef = _viewContainerRef;
        this._parentMenu = _parentMenu;
        this._menuItemInstance = _menuItemInstance;
        this._dir = _dir;
        this._focusMonitor = _focusMonitor;
        this._overlayRef = null;
        this._menuOpen = false;
        this._closingActionsSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
        this._hoverSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
        this._menuCloseSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
        /**
         * Handles touch start events on the trigger.
         * Needs to be an arrow function so we can easily use addEventListener and removeEventListener.
         */

        this._handleTouchStart =
        /**
        * @return {?}
        */
        function () {
          return _this23._openedBy = 'touch';
        }; // Tracking input type is necessary so it's possible to only auto-focus
        // the first item of the list when the menu is opened via the keyboard


        this._openedBy = null;
        /**
         * Whether focus should be restored when the menu is closed.
         * Note that disabling this option can have accessibility implications
         * and it's up to you to manage focus, if you decide to turn it off.
         */

        this.restoreFocus = true;
        /**
         * Event emitted when the associated menu is opened.
         */

        this.menuOpened = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Event emitted when the associated menu is opened.
         * @deprecated Switch to `menuOpened` instead
         * \@breaking-change 8.0.0
         */
        // tslint:disable-next-line:no-output-on-prefix

        this.onMenuOpen = this.menuOpened;
        /**
         * Event emitted when the associated menu is closed.
         */

        this.menuClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Event emitted when the associated menu is closed.
         * @deprecated Switch to `menuClosed` instead
         * \@breaking-change 8.0.0
         */
        // tslint:disable-next-line:no-output-on-prefix

        this.onMenuClose = this.menuClosed;

        _element.nativeElement.addEventListener('touchstart', this._handleTouchStart, passiveEventListenerOptions);

        if (_menuItemInstance) {
          _menuItemInstance._triggersSubmenu = this.triggersSubmenu();
        }

        this._scrollStrategy = scrollStrategy;
      }
      /**
       * @deprecated
       * \@breaking-change 8.0.0
       * @return {?}
       */


      _createClass(MatMenuTrigger, [{
        key: "ngAfterContentInit",

        /**
         * @return {?}
         */
        value: function ngAfterContentInit() {
          this._checkMenu();

          this._handleHover();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this._overlayRef) {
            this._overlayRef.dispose();

            this._overlayRef = null;
          }

          this._element.nativeElement.removeEventListener('touchstart', this._handleTouchStart, passiveEventListenerOptions);

          this._menuCloseSubscription.unsubscribe();

          this._closingActionsSubscription.unsubscribe();

          this._hoverSubscription.unsubscribe();
        }
        /**
         * Whether the menu is open.
         * @return {?}
         */

      }, {
        key: "triggersSubmenu",

        /**
         * Whether the menu triggers a sub-menu or a top-level one.
         * @return {?}
         */
        value: function triggersSubmenu() {
          return !!(this._menuItemInstance && this._parentMenu);
        }
        /**
         * Toggles the menu between the open and closed states.
         * @return {?}
         */

      }, {
        key: "toggleMenu",
        value: function toggleMenu() {
          return this._menuOpen ? this.closeMenu() : this.openMenu();
        }
        /**
         * Opens the menu.
         * @return {?}
         */

      }, {
        key: "openMenu",
        value: function openMenu() {
          var _this24 = this;

          if (this._menuOpen) {
            return;
          }

          this._checkMenu();
          /** @type {?} */


          var overlayRef = this._createOverlay();
          /** @type {?} */


          var overlayConfig = overlayRef.getConfig();

          this._setPosition(
          /** @type {?} */
          overlayConfig.positionStrategy);

          overlayConfig.hasBackdrop = this.menu.hasBackdrop == null ? !this.triggersSubmenu() : this.menu.hasBackdrop;
          overlayRef.attach(this._getPortal());

          if (this.menu.lazyContent) {
            this.menu.lazyContent.attach(this.menuData);
          }

          this._closingActionsSubscription = this._menuClosingActions().subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this24.closeMenu();
          });

          this._initMenu();

          if (this.menu instanceof MatMenu) {
            this.menu._startAnimation();
          }
        }
        /**
         * Closes the menu.
         * @return {?}
         */

      }, {
        key: "closeMenu",
        value: function closeMenu() {
          this.menu.close.emit();
        }
        /**
         * Focuses the menu trigger.
         * @param {?=} origin Source of the menu trigger's focus.
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus() {
          var origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'program';
          var options = arguments.length > 1 ? arguments[1] : undefined;

          if (this._focusMonitor) {
            this._focusMonitor.focusVia(this._element, origin, options);
          } else {
            this._element.nativeElement.focus(options);
          }
        }
        /**
         * Closes the menu and does the necessary cleanup.
         * @private
         * @return {?}
         */

      }, {
        key: "_destroyMenu",
        value: function _destroyMenu() {
          var _this25 = this;

          if (!this._overlayRef || !this.menuOpen) {
            return;
          }
          /** @type {?} */


          var menu = this.menu;

          this._closingActionsSubscription.unsubscribe();

          this._overlayRef.detach();

          this._restoreFocus();

          if (menu instanceof MatMenu) {
            menu._resetAnimation();

            if (menu.lazyContent) {
              // Wait for the exit animation to finish before detaching the content.
              menu._animationDone.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(
              /**
              * @param {?} event
              * @return {?}
              */
              function (event) {
                return event.toState === 'void';
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), // Interrupt if the content got re-attached.
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(menu.lazyContent._attached)).subscribe({
                next:
                /**
                * @return {?}
                */
                function next() {
                  return (
                    /** @type {?} */
                    menu.lazyContent.detach()
                  );
                },
                // No matter whether the content got re-attached, reset the menu.
                complete:
                /**
                * @return {?}
                */
                function complete() {
                  return _this25._setIsMenuOpen(false);
                }
              });
            } else {
              this._setIsMenuOpen(false);
            }
          } else {
            this._setIsMenuOpen(false);

            if (menu.lazyContent) {
              menu.lazyContent.detach();
            }
          }
        }
        /**
         * This method sets the menu state to open and focuses the first item if
         * the menu was opened via the keyboard.
         * @private
         * @return {?}
         */

      }, {
        key: "_initMenu",
        value: function _initMenu() {
          this.menu.parentMenu = this.triggersSubmenu() ? this._parentMenu : undefined;
          this.menu.direction = this.dir;

          this._setMenuElevation();

          this._setIsMenuOpen(true);

          this.menu.focusFirstItem(this._openedBy || 'program');
        }
        /**
         * Updates the menu elevation based on the amount of parent menus that it has.
         * @private
         * @return {?}
         */

      }, {
        key: "_setMenuElevation",
        value: function _setMenuElevation() {
          if (this.menu.setElevation) {
            /** @type {?} */
            var depth = 0;
            /** @type {?} */

            var parentMenu = this.menu.parentMenu;

            while (parentMenu) {
              depth++;
              parentMenu = parentMenu.parentMenu;
            }

            this.menu.setElevation(depth);
          }
        }
        /**
         * Restores focus to the element that was focused before the menu was open.
         * @private
         * @return {?}
         */

      }, {
        key: "_restoreFocus",
        value: function _restoreFocus() {
          // We should reset focus if the user is navigating using a keyboard or
          // if we have a top-level trigger which might cause focus to be lost
          // when clicking on the backdrop.
          if (this.restoreFocus) {
            if (!this._openedBy) {
              // Note that the focus style will show up both for `program` and
              // `keyboard` so we don't have to specify which one it is.
              this.focus();
            } else if (!this.triggersSubmenu()) {
              this.focus(this._openedBy);
            }
          }

          this._openedBy = null;
        } // set state rather than toggle to support triggers sharing a menu

        /**
         * @private
         * @param {?} isOpen
         * @return {?}
         */

      }, {
        key: "_setIsMenuOpen",
        value: function _setIsMenuOpen(isOpen) {
          this._menuOpen = isOpen;
          this._menuOpen ? this.menuOpened.emit() : this.menuClosed.emit();

          if (this.triggersSubmenu()) {
            this._menuItemInstance._highlighted = isOpen;
          }
        }
        /**
         * This method checks that a valid instance of MatMenu has been passed into
         * matMenuTriggerFor. If not, an exception is thrown.
         * @private
         * @return {?}
         */

      }, {
        key: "_checkMenu",
        value: function _checkMenu() {
          if (!this.menu) {
            throwMatMenuMissingError();
          }
        }
        /**
         * This method creates the overlay from the provided menu's template and saves its
         * OverlayRef so that it can be attached to the DOM when openMenu is called.
         * @private
         * @return {?}
         */

      }, {
        key: "_createOverlay",
        value: function _createOverlay() {
          if (!this._overlayRef) {
            /** @type {?} */
            var config = this._getOverlayConfig();

            this._subscribeToPositions(
            /** @type {?} */
            config.positionStrategy);

            this._overlayRef = this._overlay.create(config); // Consume the `keydownEvents` in order to prevent them from going to another overlay.
            // Ideally we'd also have our keyboard event logic in here, however doing so will
            // break anybody that may have implemented the `MatMenuPanel` themselves.

            this._overlayRef.keydownEvents().subscribe();
          }

          return this._overlayRef;
        }
        /**
         * This method builds the configuration object needed to create the overlay, the OverlayState.
         * @private
         * @return {?} OverlayConfig
         */

      }, {
        key: "_getOverlayConfig",
        value: function _getOverlayConfig() {
          return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayConfig"]({
            positionStrategy: this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withTransformOriginOn('.mat-menu-panel, .mat-mdc-menu-panel'),
            backdropClass: this.menu.backdropClass || 'cdk-overlay-transparent-backdrop',
            scrollStrategy: this._scrollStrategy(),
            direction: this._dir
          });
        }
        /**
         * Listens to changes in the position of the overlay and sets the correct classes
         * on the menu based on the new position. This ensures the animation origin is always
         * correct, even if a fallback position is used for the overlay.
         * @private
         * @param {?} position
         * @return {?}
         */

      }, {
        key: "_subscribeToPositions",
        value: function _subscribeToPositions(position) {
          var _this26 = this;

          if (this.menu.setPositionClasses) {
            position.positionChanges.subscribe(
            /**
            * @param {?} change
            * @return {?}
            */
            function (change) {
              /** @type {?} */
              var posX = change.connectionPair.overlayX === 'start' ? 'after' : 'before';
              /** @type {?} */

              var posY = change.connectionPair.overlayY === 'top' ? 'below' : 'above';

              /** @type {?} */
              _this26.menu.setPositionClasses(posX, posY);
            });
          }
        }
        /**
         * Sets the appropriate positions on a position strategy
         * so the overlay connects with the trigger correctly.
         * @private
         * @param {?} positionStrategy Strategy whose position to update.
         * @return {?}
         */

      }, {
        key: "_setPosition",
        value: function _setPosition(positionStrategy) {
          var _ref = this.menu.xPosition === 'before' ? ['end', 'start'] : ['start', 'end'],
              _ref2 = _slicedToArray(_ref, 2),
              originX = _ref2[0],
              originFallbackX = _ref2[1];

          var _ref3 = this.menu.yPosition === 'above' ? ['bottom', 'top'] : ['top', 'bottom'],
              _ref4 = _slicedToArray(_ref3, 2),
              overlayY = _ref4[0],
              overlayFallbackY = _ref4[1];

          var originY = overlayY,
              originFallbackY = overlayFallbackY;
          var overlayX = originX,
              overlayFallbackX = originFallbackX;
          /** @type {?} */

          var offsetY = 0;

          if (this.triggersSubmenu()) {
            // When the menu is a sub-menu, it should always align itself
            // to the edges of the trigger, instead of overlapping it.
            overlayFallbackX = originX = this.menu.xPosition === 'before' ? 'start' : 'end';
            originFallbackX = overlayX = originX === 'end' ? 'start' : 'end';
            offsetY = overlayY === 'bottom' ? MENU_PANEL_TOP_PADDING : -MENU_PANEL_TOP_PADDING;
          } else if (!this.menu.overlapTrigger) {
            originY = overlayY === 'top' ? 'bottom' : 'top';
            originFallbackY = overlayFallbackY === 'top' ? 'bottom' : 'top';
          }

          positionStrategy.withPositions([{
            originX: originX,
            originY: originY,
            overlayX: overlayX,
            overlayY: overlayY,
            offsetY: offsetY
          }, {
            originX: originFallbackX,
            originY: originY,
            overlayX: overlayFallbackX,
            overlayY: overlayY,
            offsetY: offsetY
          }, {
            originX: originX,
            originY: originFallbackY,
            overlayX: overlayX,
            overlayY: overlayFallbackY,
            offsetY: -offsetY
          }, {
            originX: originFallbackX,
            originY: originFallbackY,
            overlayX: overlayFallbackX,
            overlayY: overlayFallbackY,
            offsetY: -offsetY
          }]);
        }
        /**
         * Returns a stream that emits whenever an action that should close the menu occurs.
         * @private
         * @return {?}
         */

      }, {
        key: "_menuClosingActions",
        value: function _menuClosingActions() {
          var _this27 = this;

          /** @type {?} */
          var backdrop =
          /** @type {?} */
          this._overlayRef.backdropClick();
          /** @type {?} */


          var detachments =
          /** @type {?} */
          this._overlayRef.detachments();
          /** @type {?} */


          var parentClose = this._parentMenu ? this._parentMenu.closed : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])();
          /** @type {?} */

          var hover = this._parentMenu ? this._parentMenu._hovered().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(
          /**
          * @param {?} active
          * @return {?}
          */
          function (active) {
            return active !== _this27._menuItemInstance;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(
          /**
          * @return {?}
          */
          function () {
            return _this27._menuOpen;
          })) : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])();
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(backdrop, parentClose, hover, detachments);
        }
        /**
         * Handles mouse presses on the trigger.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleMousedown",
        value: function _handleMousedown(event) {
          if (!Object(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["isFakeMousedownFromScreenReader"])(event)) {
            // Since right or middle button clicks won't trigger the `click` event,
            // we shouldn't consider the menu as opened by mouse in those cases.
            this._openedBy = event.button === 0 ? 'mouse' : null; // Since clicking on the trigger won't close the menu if it opens a sub-menu,
            // we should prevent focus from moving onto it via click to avoid the
            // highlight from lingering on the menu item.

            if (this.triggersSubmenu()) {
              event.preventDefault();
            }
          }
        }
        /**
         * Handles key presses on the trigger.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleKeydown",
        value: function _handleKeydown(event) {
          /** @type {?} */
          var keyCode = event.keyCode;

          if (this.triggersSubmenu() && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["RIGHT_ARROW"] && this.dir === 'ltr' || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["LEFT_ARROW"] && this.dir === 'rtl')) {
            this.openMenu();
          }
        }
        /**
         * Handles click events on the trigger.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleClick",
        value: function _handleClick(event) {
          if (this.triggersSubmenu()) {
            // Stop event propagation to avoid closing the parent menu.
            event.stopPropagation();
            this.openMenu();
          } else {
            this.toggleMenu();
          }
        }
        /**
         * Handles the cases where the user hovers over the trigger.
         * @private
         * @return {?}
         */

      }, {
        key: "_handleHover",
        value: function _handleHover() {
          var _this28 = this;

          // Subscribe to changes in the hovered item in order to toggle the panel.
          if (!this.triggersSubmenu()) {
            return;
          }

          this._hoverSubscription = this._parentMenu._hovered() // Since we might have multiple competing triggers for the same menu (e.g. a sub-menu
          // with different data and triggers), we have to delay it by a tick to ensure that
          // it won't be closed immediately after it is opened.
          .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(
          /**
          * @param {?} active
          * @return {?}
          */
          function (active) {
            return active === _this28._menuItemInstance && !active.disabled;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delay"])(0, rxjs__WEBPACK_IMPORTED_MODULE_4__["asapScheduler"])).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this28._openedBy = 'mouse'; // If the same menu is used between multiple triggers, it might still be animating
            // while the new trigger tries to re-open it. Wait for the animation to finish
            // before doing so. Also interrupt if the user moves to another item.

            if (_this28.menu instanceof MatMenu && _this28.menu._isAnimating) {
              // We need the `delay(0)` here in order to avoid
              // 'changed after checked' errors in some cases. See #12194.
              _this28.menu._animationDone.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delay"])(0, rxjs__WEBPACK_IMPORTED_MODULE_4__["asapScheduler"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(_this28._parentMenu._hovered())).subscribe(
              /**
              * @return {?}
              */
              function () {
                return _this28.openMenu();
              });
            } else {
              _this28.openMenu();
            }
          });
        }
        /**
         * Gets the portal that should be attached to the overlay.
         * @private
         * @return {?}
         */

      }, {
        key: "_getPortal",
        value: function _getPortal() {
          // Note that we can avoid this check by keeping the portal on the menu panel.
          // While it would be cleaner, we'd have to introduce another required method on
          // `MatMenuPanel`, making it harder to consume.
          if (!this._portal || this._portal.templateRef !== this.menu.templateRef) {
            this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["TemplatePortal"](this.menu.templateRef, this._viewContainerRef);
          }

          return this._portal;
        }
      }, {
        key: "_deprecatedMatMenuTriggerFor",
        get: function get() {
          return this.menu;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this.menu = v;
        }
        /**
         * References the menu instance that the trigger is associated with.
         * @return {?}
         */

      }, {
        key: "menu",
        get: function get() {
          return this._menu;
        }
        /**
         * @param {?} menu
         * @return {?}
         */
        ,
        set: function set(menu) {
          var _this29 = this;

          if (menu === this._menu) {
            return;
          }

          this._menu = menu;

          this._menuCloseSubscription.unsubscribe();

          if (menu) {
            this._menuCloseSubscription = menu.close.asObservable().subscribe(
            /**
            * @param {?} reason
            * @return {?}
            */
            function (reason) {
              _this29._destroyMenu(); // If a click closed the menu, we should close the entire chain of nested menus.


              if ((reason === 'click' || reason === 'tab') && _this29._parentMenu) {
                _this29._parentMenu.closed.emit(reason);
              }
            });
          }
        }
      }, {
        key: "menuOpen",
        get: function get() {
          return this._menuOpen;
        }
        /**
         * The text direction of the containing app.
         * @return {?}
         */

      }, {
        key: "dir",
        get: function get() {
          return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
        }
      }]);

      return MatMenuTrigger;
    }();

    MatMenuTrigger.ɵfac = function MatMenuTrigger_Factory(t) {
      return new (t || MatMenuTrigger)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_MENU_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MatMenu, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MatMenuItem, 10), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]));
    };

    MatMenuTrigger.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: MatMenuTrigger,
      selectors: [["", "mat-menu-trigger-for", ""], ["", "matMenuTriggerFor", ""]],
      hostAttrs: ["aria-haspopup", "true", 1, "mat-menu-trigger"],
      hostVars: 2,
      hostBindings: function MatMenuTrigger_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mousedown", function MatMenuTrigger_mousedown_HostBindingHandler($event) {
            return ctx._handleMousedown($event);
          })("keydown", function MatMenuTrigger_keydown_HostBindingHandler($event) {
            return ctx._handleKeydown($event);
          })("click", function MatMenuTrigger_click_HostBindingHandler($event) {
            return ctx._handleClick($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", ctx.menuOpen || null)("aria-controls", ctx.menuOpen ? ctx.menu.panelId : null);
        }
      },
      inputs: {
        restoreFocus: ["matMenuTriggerRestoreFocus", "restoreFocus"],
        _deprecatedMatMenuTriggerFor: ["mat-menu-trigger-for", "_deprecatedMatMenuTriggerFor"],
        menu: ["matMenuTriggerFor", "menu"],
        menuData: ["matMenuTriggerData", "menuData"]
      },
      outputs: {
        menuOpened: "menuOpened",
        onMenuOpen: "onMenuOpen",
        menuClosed: "menuClosed",
        onMenuClose: "onMenuClose"
      },
      exportAs: ["matMenuTrigger"]
    });
    /** @nocollapse */

    MatMenuTrigger.ctorParameters = function () {
      return [{
        type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [MAT_MENU_SCROLL_STRATEGY]
        }]
      }, {
        type: MatMenu,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }, {
        type: MatMenuItem,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Self"]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
      }];
    };

    MatMenuTrigger.propDecorators = {
      _deprecatedMatMenuTriggerFor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['mat-menu-trigger-for']
      }],
      menu: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['matMenuTriggerFor']
      }],
      menuData: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['matMenuTriggerData']
      }],
      restoreFocus: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['matMenuTriggerRestoreFocus']
      }],
      menuOpened: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      onMenuOpen: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      menuClosed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      onMenuClose: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatMenuTrigger, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: "[mat-menu-trigger-for], [matMenuTriggerFor]",
          host: {
            'class': 'mat-menu-trigger',
            'aria-haspopup': 'true',
            '[attr.aria-expanded]': 'menuOpen || null',
            '[attr.aria-controls]': 'menuOpen ? menu.panelId : null',
            '(mousedown)': '_handleMousedown($event)',
            '(keydown)': '_handleKeydown($event)',
            '(click)': '_handleClick($event)'
          },
          exportAs: 'matMenuTrigger'
        }]
      }], function () {
        return [{
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_MENU_SCROLL_STRATEGY]
          }]
        }, {
          type: MatMenu,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }, {
          type: MatMenuItem,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Self"]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
        }];
      }, {
        restoreFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['matMenuTriggerRestoreFocus']
        }],
        menuOpened: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        onMenuOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        menuClosed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        onMenuClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        _deprecatedMatMenuTriggerFor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['mat-menu-trigger-for']
        }],
        menu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['matMenuTriggerFor']
        }],
        menuData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['matMenuTriggerData']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/menu/menu-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Used by both the current `MatMenuModule` and the MDC `MatMenuModule`
     * to declare the menu-related directives.
     */
    // tslint:disable-next-line:class-name


    var _MatMenuDirectivesModule = function _MatMenuDirectivesModule() {
      _classCallCheck(this, _MatMenuDirectivesModule);
    };

    _MatMenuDirectivesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: _MatMenuDirectivesModule
    });
    _MatMenuDirectivesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      factory: function _MatMenuDirectivesModule_Factory(t) {
        return new (t || _MatMenuDirectivesModule)();
      },
      providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER],
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_MatMenuDirectivesModule, {
        declarations: function declarations() {
          return [MatMenuTrigger, MatMenuContent];
        },
        exports: function exports() {
          return [MatMenuTrigger, MatMenuContent, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](_MatMenuDirectivesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          exports: [MatMenuTrigger, MatMenuContent, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"]],
          declarations: [MatMenuTrigger, MatMenuContent],
          providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER]
        }]
      }], null, null);
    })();

    var MatMenuModule = function MatMenuModule() {
      _classCallCheck(this, MatMenuModule);
    };

    MatMenuModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: MatMenuModule
    });
    MatMenuModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      factory: function MatMenuModule_Factory(t) {
        return new (t || MatMenuModule)();
      },
      providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayModule"], _MatMenuDirectivesModule], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["CdkScrollableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"], _MatMenuDirectivesModule]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MatMenuModule, {
        declarations: function declarations() {
          return [_MatMenu, MatMenuItem];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayModule"], _MatMenuDirectivesModule];
        },
        exports: function exports() {
          return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["CdkScrollableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"], _MatMenu, MatMenuItem, _MatMenuDirectivesModule];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatMenuModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayModule"], _MatMenuDirectivesModule],
          exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["CdkScrollableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"], _MatMenu, MatMenuItem, _MatMenuDirectivesModule],
          declarations: [_MatMenu, MatMenuItem],
          providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/menu/menu-positions.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/menu/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=menu.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js":
  /*!******************************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js ***!
    \******************************************************************************/

  /*! exports provided: MAT_PROGRESS_BAR_LOCATION, MAT_PROGRESS_BAR_LOCATION_FACTORY, MatProgressBar, MatProgressBarModule */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015ProgressBarJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_BAR_LOCATION", function () {
      return MAT_PROGRESS_BAR_LOCATION;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_BAR_LOCATION_FACTORY", function () {
      return MAT_PROGRESS_BAR_LOCATION_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatProgressBar", function () {
      return MatProgressBar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatProgressBarModule", function () {
      return MatProgressBarModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/progress-bar/progress-bar.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Last animation end data.
     * @record
     */


    var _c0 = ["primaryValueBar"];

    function ProgressAnimationEnd() {}

    if (false) {} // Boilerplate for applying mixins to MatProgressBar.

    /**
     * \@docs-private
     */


    var MatProgressBarBase =
    /**
     * @param {?} _elementRef
     */
    function MatProgressBarBase(_elementRef) {
      _classCallCheck(this, MatProgressBarBase);

      this._elementRef = _elementRef;
    };

    if (false) {}
    /** @type {?} */


    var _MatProgressBarMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(MatProgressBarBase, 'primary');
    /**
     * Injection token used to provide the current location to `MatProgressBar`.
     * Used to handle server-side rendering and to stub out during unit tests.
     * \@docs-private
     * @type {?}
     */


    var MAT_PROGRESS_BAR_LOCATION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-progress-bar-location', {
      providedIn: 'root',
      factory: MAT_PROGRESS_BAR_LOCATION_FACTORY
    });
    /**
     * Stubbed out location for `MatProgressBar`.
     * \@docs-private
     * @record
     */

    function MatProgressBarLocation() {}

    if (false) {}
    /**
     * \@docs-private
     * @return {?}
     */


    function MAT_PROGRESS_BAR_LOCATION_FACTORY() {
      /** @type {?} */
      var _document = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]);
      /** @type {?} */


      var _location = _document ? _document.location : null;

      return {
        // Note that this needs to be a function, rather than a property, because Angular
        // will only resolve it once, but we want the current path on each call.
        getPathname:
        /**
        * @return {?}
        */
        function getPathname() {
          return _location ? _location.pathname + _location.search : '';
        }
      };
    }
    /**
     * Counter used to generate unique IDs for progress bars.
     * @type {?}
     */


    var progressbarId = 0;
    /**
     * `<mat-progress-bar>` component.
     */

    var MatProgressBar = /*#__PURE__*/function (_MatProgressBarMixinB) {
      _inherits(MatProgressBar, _MatProgressBarMixinB);

      var _super10 = _createSuper(MatProgressBar);

      /**
       * @param {?} _elementRef
       * @param {?} _ngZone
       * @param {?=} _animationMode
       * @param {?=} location
       */
      function MatProgressBar(_elementRef, _ngZone, _animationMode,
      /**
       * @deprecated `location` parameter to be made required.
       * @breaking-change 8.0.0
       */
      location) {
        var _this30;

        _classCallCheck(this, MatProgressBar);

        _this30 = _super10.call(this, _elementRef);
        _this30._elementRef = _elementRef;
        _this30._ngZone = _ngZone;
        _this30._animationMode = _animationMode;
        /**
         * Flag that indicates whether NoopAnimations mode is set to true.
         */

        _this30._isNoopAnimation = false;
        _this30._value = 0;
        _this30._bufferValue = 0;
        /**
         * Event emitted when animation of the primary progress bar completes. This event will not
         * be emitted when animations are disabled, nor will it be emitted for modes with continuous
         * animations (indeterminate and query).
         */

        _this30.animationEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Reference to animation end subscription to be unsubscribed on destroy.
         */

        _this30._animationEndSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /**
         * Mode of the progress bar.
         *
         * Input must be one of these values: determinate, indeterminate, buffer, query, defaults to
         * 'determinate'.
         * Mirrored to mode attribute.
         */

        _this30.mode = 'determinate';
        /**
         * ID of the progress bar.
         */

        _this30.progressbarId = "mat-progress-bar-".concat(progressbarId++); // We need to prefix the SVG reference with the current path, otherwise they won't work
        // in Safari if the page has a `<base>` tag. Note that we need quotes inside the `url()`,
        // because named route URLs can contain parentheses (see #12338). Also we don't use since
        // we can't tell the difference between whether
        // the consumer is using the hash location strategy or not, because `Location` normalizes
        // both `/#/foo/bar` and `/foo/bar` to the same thing.

        /** @type {?} */

        var path = location ? location.getPathname().split('#')[0] : '';
        _this30._rectangleFillValue = "url('".concat(path, "#").concat(_this30.progressbarId, "')");
        _this30._isNoopAnimation = _animationMode === 'NoopAnimations';
        return _this30;
      }
      /**
       * Value of the progress bar. Defaults to zero. Mirrored to aria-valuenow.
       * @return {?}
       */


      _createClass(MatProgressBar, [{
        key: "_primaryTransform",

        /**
         * Gets the current transform value for the progress bar's primary indicator.
         * @return {?}
         */
        value: function _primaryTransform() {
          /** @type {?} */
          var scale = this.value / 100;
          return {
            transform: "scaleX(".concat(scale, ")")
          };
        }
        /**
         * Gets the current transform value for the progress bar's buffer indicator. Only used if the
         * progress mode is set to buffer, otherwise returns an undefined, causing no transformation.
         * @return {?}
         */

      }, {
        key: "_bufferTransform",
        value: function _bufferTransform() {
          if (this.mode === 'buffer') {
            /** @type {?} */
            var scale = this.bufferValue / 100;
            return {
              transform: "scaleX(".concat(scale, ")")
            };
          }

          return null;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this31 = this;

          // Run outside angular so change detection didn't get triggered on every transition end
          // instead only on the animation that we care about (primary value bar's transitionend)
          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var element = _this31._primaryValueBar.nativeElement;
            _this31._animationEndSubscription =
            /** @type {?} */
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(element, 'transitionend').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(
            /**
            * @param {?} e
            * @return {?}
            */
            function (e) {
              return e.target === element;
            })).subscribe(
            /**
            * @return {?}
            */
            function () {
              if (_this31.mode === 'determinate' || _this31.mode === 'buffer') {
                _this31._ngZone.run(
                /**
                * @return {?}
                */
                function () {
                  return _this31.animationEnd.next({
                    value: _this31.value
                  });
                });
              }
            });
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._animationEndSubscription.unsubscribe();
        }
      }, {
        key: "value",
        get: function get() {
          return this._value;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this._value = clamp(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(v) || 0);
        }
        /**
         * Buffer value of the progress bar. Defaults to zero.
         * @return {?}
         */

      }, {
        key: "bufferValue",
        get: function get() {
          return this._bufferValue;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this._bufferValue = clamp(v || 0);
        }
      }]);

      return MatProgressBar;
    }(_MatProgressBarMixinBase);

    MatProgressBar.ɵfac = function MatProgressBar_Factory(t) {
      return new (t || MatProgressBar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_PROGRESS_BAR_LOCATION, 8));
    };

    MatProgressBar.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatProgressBar,
      selectors: [["mat-progress-bar"]],
      viewQuery: function MatProgressBar_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._primaryValueBar = _t.first);
        }
      },
      hostAttrs: ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "mat-progress-bar"],
      hostVars: 4,
      hostBindings: function MatProgressBar_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuenow", ctx.mode === "indeterminate" || ctx.mode === "query" ? null : ctx.value)("mode", ctx.mode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._isNoopAnimation);
        }
      },
      inputs: {
        color: "color",
        mode: "mode",
        value: "value",
        bufferValue: "bufferValue"
      },
      outputs: {
        animationEnd: "animationEnd"
      },
      exportAs: ["matProgressBar"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 9,
      vars: 4,
      consts: [["width", "100%", "height", "4", "focusable", "false", 1, "mat-progress-bar-background", "mat-progress-bar-element"], ["x", "4", "y", "0", "width", "8", "height", "4", "patternUnits", "userSpaceOnUse", 3, "id"], ["cx", "2", "cy", "2", "r", "2"], ["width", "100%", "height", "100%"], [1, "mat-progress-bar-buffer", "mat-progress-bar-element", 3, "ngStyle"], [1, "mat-progress-bar-primary", "mat-progress-bar-fill", "mat-progress-bar-element", 3, "ngStyle"], ["primaryValueBar", ""], [1, "mat-progress-bar-secondary", "mat-progress-bar-fill", "mat-progress-bar-element"]],
      template: function MatProgressBar_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "pattern", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "circle", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "rect", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.progressbarId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("fill", ctx._rectangleFillValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx._bufferTransform());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx._primaryTransform());
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]],
      styles: [".mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}._mat-animation-noopable.mat-progress-bar{transition:none;animation:none}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-background{display:none}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:\"\";display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2000ms infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2000ms infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background{animation:none;transition-duration:1ms}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatProgressBar.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [MAT_PROGRESS_BAR_LOCATION]
        }]
      }];
    };

    MatProgressBar.propDecorators = {
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      bufferValue: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      _primaryValueBar: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['primaryValueBar']
      }],
      animationEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      mode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatProgressBar, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mat-progress-bar',
          exportAs: 'matProgressBar',
          host: {
            'role': 'progressbar',
            'aria-valuemin': '0',
            'aria-valuemax': '100',
            '[attr.aria-valuenow]': '(mode === "indeterminate" || mode === "query") ? null : value',
            '[attr.mode]': 'mode',
            'class': 'mat-progress-bar',
            '[class._mat-animation-noopable]': '_isNoopAnimation'
          },
          inputs: ['color'],
          template: "<!--\n  The background div is named as such because it appears below the other divs and is not sized based\n  on values.\n-->\n<svg width=\"100%\" height=\"4\" focusable=\"false\" class=\"mat-progress-bar-background mat-progress-bar-element\">\n  <defs>\n    <pattern [id]=\"progressbarId\" x=\"4\" y=\"0\" width=\"8\" height=\"4\" patternUnits=\"userSpaceOnUse\">\n      <circle cx=\"2\" cy=\"2\" r=\"2\"/>\n    </pattern>\n  </defs>\n  <rect [attr.fill]=\"_rectangleFillValue\" width=\"100%\" height=\"100%\"/>\n</svg>\n<div class=\"mat-progress-bar-buffer mat-progress-bar-element\" [ngStyle]=\"_bufferTransform()\"></div>\n<div class=\"mat-progress-bar-primary mat-progress-bar-fill mat-progress-bar-element\" [ngStyle]=\"_primaryTransform()\" #primaryValueBar></div>\n<div class=\"mat-progress-bar-secondary mat-progress-bar-fill mat-progress-bar-element\"></div>\n",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          styles: [".mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}._mat-animation-noopable.mat-progress-bar{transition:none;animation:none}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-background{display:none}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:\"\";display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2000ms infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2000ms infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background{animation:none;transition-duration:1ms}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_PROGRESS_BAR_LOCATION]
          }]
        }];
      }, {
        animationEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        mode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        bufferValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        _primaryValueBar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['primaryValueBar']
        }]
      });
    })();

    if (false) {}
    /**
     * Clamps a value to be between two numbers, by default 0 and 100.
     * @param {?} v
     * @param {?=} min
     * @param {?=} max
     * @return {?}
     */


    function clamp(v) {
      var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
      return Math.max(min, Math.min(max, v));
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/progress-bar/progress-bar-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatProgressBarModule = function MatProgressBarModule() {
      _classCallCheck(this, MatProgressBarModule);
    };

    MatProgressBarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatProgressBarModule
    });
    MatProgressBarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MatProgressBarModule_Factory(t) {
        return new (t || MatProgressBarModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatProgressBarModule, {
        declarations: function declarations() {
          return [MatProgressBar];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
        },
        exports: function exports() {
          return [MatProgressBar, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatProgressBarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
          exports: [MatProgressBar, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
          declarations: [MatProgressBar]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/progress-bar/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=progress-bar.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js":
  /*!**********************************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js ***!
    \**********************************************************************************/

  /*! exports provided: MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS, MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY, MatProgressSpinner, MatProgressSpinnerModule, MatSpinner */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015ProgressSpinnerJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS", function () {
      return MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY", function () {
      return MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatProgressSpinner", function () {
      return MatProgressSpinner;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatProgressSpinnerModule", function () {
      return MatProgressSpinnerModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSpinner", function () {
      return MatSpinner;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/progress-spinner/progress-spinner.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Base reference size of the spinner.
     * \@docs-private
     * @type {?}
     */


    function MatProgressSpinner__svg_circle_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 3);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("animation-name", "mat-progress-spinner-stroke-rotate-" + ctx_r0.diameter)("stroke-dashoffset", ctx_r0._strokeDashOffset, "px")("stroke-dasharray", ctx_r0._strokeCircumference, "px")("stroke-width", ctx_r0._circleStrokeWidth, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("r", ctx_r0._circleRadius);
      }
    }

    function MatProgressSpinner__svg_circle_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 3);
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("stroke-dashoffset", ctx_r1._strokeDashOffset, "px")("stroke-dasharray", ctx_r1._strokeCircumference, "px")("stroke-width", ctx_r1._circleStrokeWidth, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("r", ctx_r1._circleRadius);
      }
    }

    function MatSpinner__svg_circle_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 3);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("animation-name", "mat-progress-spinner-stroke-rotate-" + ctx_r0.diameter)("stroke-dashoffset", ctx_r0._strokeDashOffset, "px")("stroke-dasharray", ctx_r0._strokeCircumference, "px")("stroke-width", ctx_r0._circleStrokeWidth, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("r", ctx_r0._circleRadius);
      }
    }

    function MatSpinner__svg_circle_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 3);
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("stroke-dashoffset", ctx_r1._strokeDashOffset, "px")("stroke-dasharray", ctx_r1._strokeCircumference, "px")("stroke-width", ctx_r1._circleStrokeWidth, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("r", ctx_r1._circleRadius);
      }
    }

    var BASE_SIZE = 100;
    /**
     * Base reference stroke width of the spinner.
     * \@docs-private
     * @type {?}
     */

    var BASE_STROKE_WIDTH = 10; // Boilerplate for applying mixins to MatProgressSpinner.

    /**
     * \@docs-private
     */

    var MatProgressSpinnerBase =
    /**
     * @param {?} _elementRef
     */
    function MatProgressSpinnerBase(_elementRef) {
      _classCallCheck(this, MatProgressSpinnerBase);

      this._elementRef = _elementRef;
    };

    if (false) {}
    /** @type {?} */


    var _MatProgressSpinnerMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(MatProgressSpinnerBase, 'primary');
    /**
     * Default `mat-progress-spinner` options that can be overridden.
     * @record
     */


    function MatProgressSpinnerDefaultOptions() {}

    if (false) {}
    /**
     * Injection token to be used to override the default options for `mat-progress-spinner`.
     * @type {?}
     */


    var MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-progress-spinner-default-options', {
      providedIn: 'root',
      factory: MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY
    });
    /**
     * \@docs-private
     * @return {?}
     */

    function MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY() {
      return {
        diameter: BASE_SIZE
      };
    } // .0001 percentage difference is necessary in order to avoid unwanted animation frames
    // for example because the animation duration is 4 seconds, .1% accounts to 4ms
    // which are enough to see the flicker described in
    // https://github.com/angular/components/issues/8984

    /** @type {?} */


    var INDETERMINATE_ANIMATION_TEMPLATE = "\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n";
    /**
     * `<mat-progress-spinner>` component.
     */

    var MatProgressSpinner = /*#__PURE__*/function (_MatProgressSpinnerMi) {
      _inherits(MatProgressSpinner, _MatProgressSpinnerMi);

      var _super11 = _createSuper(MatProgressSpinner);

      /**
       * @param {?} _elementRef
       * @param {?} platform
       * @param {?} _document
       * @param {?} animationMode
       * @param {?=} defaults
       */
      function MatProgressSpinner(_elementRef, platform, _document, animationMode, defaults) {
        var _this32;

        _classCallCheck(this, MatProgressSpinner);

        _this32 = _super11.call(this, _elementRef);
        _this32._elementRef = _elementRef;
        _this32._document = _document;
        _this32._diameter = BASE_SIZE;
        _this32._value = 0;
        _this32._fallbackAnimation = false;
        /**
         * Mode of the progress circle
         */

        _this32.mode = 'determinate';
        /** @type {?} */

        var trackedDiameters = MatProgressSpinner._diameters; // The base size is already inserted via the component's structural styles. We still
        // need to track it so we don't end up adding the same styles again.

        if (!trackedDiameters.has(_document.head)) {
          trackedDiameters.set(_document.head, new Set([BASE_SIZE]));
        }

        _this32._fallbackAnimation = platform.EDGE || platform.TRIDENT;
        _this32._noopAnimations = animationMode === 'NoopAnimations' && !!defaults && !defaults._forceAnimations;

        if (defaults) {
          if (defaults.diameter) {
            _this32.diameter = defaults.diameter;
          }

          if (defaults.strokeWidth) {
            _this32.strokeWidth = defaults.strokeWidth;
          }
        }

        return _this32;
      }
      /**
       * The diameter of the progress spinner (will set width and height of svg).
       * @return {?}
       */


      _createClass(MatProgressSpinner, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          /** @type {?} */
          var element = this._elementRef.nativeElement; // Note that we need to look up the root node in ngOnInit, rather than the constructor, because
          // Angular seems to create the element outside the shadow root and then moves it inside, if the
          // node is inside an `ngIf` and a ShadowDom-encapsulated component.

          this._styleRoot = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["_getShadowRoot"])(element) || this._document.head;

          this._attachStyleNode(); // On IE and Edge, we can't animate the `stroke-dashoffset`
          // reliably so we fall back to a non-spec animation.

          /** @type {?} */


          var animationClass = "mat-progress-spinner-indeterminate".concat(this._fallbackAnimation ? '-fallback' : '', "-animation");
          element.classList.add(animationClass);
        }
        /**
         * The radius of the spinner, adjusted for stroke width.
         * @return {?}
         */

      }, {
        key: "_attachStyleNode",

        /**
         * Dynamically generates a style tag containing the correct animation for this diameter.
         * @private
         * @return {?}
         */
        value: function _attachStyleNode() {
          /** @type {?} */
          var styleRoot = this._styleRoot;
          /** @type {?} */

          var currentDiameter = this._diameter;
          /** @type {?} */

          var diameters = MatProgressSpinner._diameters;
          /** @type {?} */

          var diametersForElement = diameters.get(styleRoot);

          if (!diametersForElement || !diametersForElement.has(currentDiameter)) {
            /** @type {?} */
            var styleTag = this._document.createElement('style');

            styleTag.setAttribute('mat-spinner-animation', currentDiameter + '');
            styleTag.textContent = this._getAnimationText();
            styleRoot.appendChild(styleTag);

            if (!diametersForElement) {
              diametersForElement = new Set();
              diameters.set(styleRoot, diametersForElement);
            }

            diametersForElement.add(currentDiameter);
          }
        }
        /**
         * Generates animation styles adjusted for the spinner's diameter.
         * @private
         * @return {?}
         */

      }, {
        key: "_getAnimationText",
        value: function _getAnimationText() {
          return INDETERMINATE_ANIMATION_TEMPLATE // Animation should begin at 5% and end at 80%
          .replace(/START_VALUE/g, "".concat(0.95 * this._strokeCircumference)).replace(/END_VALUE/g, "".concat(0.2 * this._strokeCircumference)).replace(/DIAMETER/g, "".concat(this.diameter));
        }
      }, {
        key: "diameter",
        get: function get() {
          return this._diameter;
        }
        /**
         * @param {?} size
         * @return {?}
         */
        ,
        set: function set(size) {
          this._diameter = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(size); // If this is set before `ngOnInit`, the style root may not have been resolved yet.

          if (!this._fallbackAnimation && this._styleRoot) {
            this._attachStyleNode();
          }
        }
        /**
         * Stroke width of the progress spinner.
         * @return {?}
         */

      }, {
        key: "strokeWidth",
        get: function get() {
          return this._strokeWidth || this.diameter / 10;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._strokeWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(value);
        }
        /**
         * Value of the progress circle.
         * @return {?}
         */

      }, {
        key: "value",
        get: function get() {
          return this.mode === 'determinate' ? this._value : 0;
        }
        /**
         * @param {?} newValue
         * @return {?}
         */
        ,
        set: function set(newValue) {
          this._value = Math.max(0, Math.min(100, Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(newValue)));
        }
      }, {
        key: "_circleRadius",
        get: function get() {
          return (this.diameter - BASE_STROKE_WIDTH) / 2;
        }
        /**
         * The view box of the spinner's svg element.
         * @return {?}
         */

      }, {
        key: "_viewBox",
        get: function get() {
          /** @type {?} */
          var viewBox = this._circleRadius * 2 + this.strokeWidth;
          return "0 0 ".concat(viewBox, " ").concat(viewBox);
        }
        /**
         * The stroke circumference of the svg circle.
         * @return {?}
         */

      }, {
        key: "_strokeCircumference",
        get: function get() {
          return 2 * Math.PI * this._circleRadius;
        }
        /**
         * The dash offset of the svg circle.
         * @return {?}
         */

      }, {
        key: "_strokeDashOffset",
        get: function get() {
          if (this.mode === 'determinate') {
            return this._strokeCircumference * (100 - this._value) / 100;
          } // In fallback mode set the circle to 80% and rotate it with CSS.


          if (this._fallbackAnimation && this.mode === 'indeterminate') {
            return this._strokeCircumference * 0.2;
          }

          return null;
        }
        /**
         * Stroke width of the circle in percent.
         * @return {?}
         */

      }, {
        key: "_circleStrokeWidth",
        get: function get() {
          return this.strokeWidth / this.diameter * 100;
        }
      }]);

      return MatProgressSpinner;
    }(_MatProgressSpinnerMixinBase);

    MatProgressSpinner.ɵfac = function MatProgressSpinner_Factory(t) {
      return new (t || MatProgressSpinner)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS));
    };

    MatProgressSpinner.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatProgressSpinner,
      selectors: [["mat-progress-spinner"]],
      hostAttrs: ["role", "progressbar", 1, "mat-progress-spinner"],
      hostVars: 10,
      hostBindings: function MatProgressSpinner_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuemin", ctx.mode === "determinate" ? 0 : null)("aria-valuemax", ctx.mode === "determinate" ? 100 : null)("aria-valuenow", ctx.mode === "determinate" ? ctx.value : null)("mode", ctx.mode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.diameter, "px")("height", ctx.diameter, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._noopAnimations);
        }
      },
      inputs: {
        color: "color",
        mode: "mode",
        diameter: "diameter",
        strokeWidth: "strokeWidth",
        value: "value"
      },
      exportAs: ["matProgressSpinner"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 3,
      vars: 8,
      consts: [["preserveAspectRatio", "xMidYMid meet", "focusable", "false", 3, "ngSwitch"], ["cx", "50%", "cy", "50%", 3, "animation-name", "stroke-dashoffset", "stroke-dasharray", "stroke-width", 4, "ngSwitchCase"], ["cx", "50%", "cy", "50%", 3, "stroke-dashoffset", "stroke-dasharray", "stroke-width", 4, "ngSwitchCase"], ["cx", "50%", "cy", "50%"]],
      template: function MatProgressSpinner_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatProgressSpinner__svg_circle_1_Template, 1, 9, "circle", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatProgressSpinner__svg_circle_2_Template, 1, 7, "circle", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.diameter, "px")("height", ctx.diameter, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.mode === "indeterminate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("viewBox", ctx._viewBox);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", false);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"]],
      styles: [".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /**
     * Tracks diameters of existing instances to de-dupe generated styles (default d = 100).
     * We need to keep track of which elements the diameters were attached to, because for
     * elements in the Shadow DOM the style tags are attached to the shadow root, rather
     * than the document head.
     */

    MatProgressSpinner._diameters = new WeakMap();
    /** @nocollapse */

    MatProgressSpinner.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS]
        }]
      }];
    };

    MatProgressSpinner.propDecorators = {
      diameter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      strokeWidth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      mode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatProgressSpinner, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mat-progress-spinner',
          exportAs: 'matProgressSpinner',
          host: {
            'role': 'progressbar',
            'class': 'mat-progress-spinner',
            '[class._mat-animation-noopable]': "_noopAnimations",
            '[style.width.px]': 'diameter',
            '[style.height.px]': 'diameter',
            '[attr.aria-valuemin]': 'mode === "determinate" ? 0 : null',
            '[attr.aria-valuemax]': 'mode === "determinate" ? 100 : null',
            '[attr.aria-valuenow]': 'mode === "determinate" ? value : null',
            '[attr.mode]': 'mode'
          },
          inputs: ['color'],
          template: "<!--\n  preserveAspectRatio of xMidYMid meet as the center of the viewport is the circle's\n  center. The center of the circle will remain at the center of the mat-progress-spinner\n  element containing the SVG. `focusable=\"false\"` prevents IE from allowing the user to\n  tab into the SVG element.\n-->\n\n<svg\n  [style.width.px]=\"diameter\"\n  [style.height.px]=\"diameter\"\n  [attr.viewBox]=\"_viewBox\"\n  preserveAspectRatio=\"xMidYMid meet\"\n  focusable=\"false\"\n  [ngSwitch]=\"mode === 'indeterminate'\">\n\n  <!--\n    Technically we can reuse the same `circle` element, however Safari has an issue that breaks\n    the SVG rendering in determinate mode, after switching between indeterminate and determinate.\n    Using a different element avoids the issue. An alternative to this is adding `display: none`\n    for a split second and then removing it when switching between modes, but it's hard to know\n    for how long to hide the element and it can cause the UI to blink.\n  -->\n  <circle\n    *ngSwitchCase=\"true\"\n    cx=\"50%\"\n    cy=\"50%\"\n    [attr.r]=\"_circleRadius\"\n    [style.animation-name]=\"'mat-progress-spinner-stroke-rotate-' + diameter\"\n    [style.stroke-dashoffset.px]=\"_strokeDashOffset\"\n    [style.stroke-dasharray.px]=\"_strokeCircumference\"\n    [style.stroke-width.%]=\"_circleStrokeWidth\"></circle>\n\n  <circle\n    *ngSwitchCase=\"false\"\n    cx=\"50%\"\n    cy=\"50%\"\n    [attr.r]=\"_circleRadius\"\n    [style.stroke-dashoffset.px]=\"_strokeDashOffset\"\n    [style.stroke-dasharray.px]=\"_strokeCircumference\"\n    [style.stroke-width.%]=\"_circleStrokeWidth\"></circle>\n</svg>\n",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          styles: [".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS]
          }]
        }];
      }, {
        mode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        diameter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        strokeWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * `<mat-spinner>` component.
     *
     * This is a component definition to be used as a convenience reference to create an
     * indeterminate `<mat-progress-spinner>` instance.
     */


    var MatSpinner = /*#__PURE__*/function (_MatProgressSpinner) {
      _inherits(MatSpinner, _MatProgressSpinner);

      var _super12 = _createSuper(MatSpinner);

      /**
       * @param {?} elementRef
       * @param {?} platform
       * @param {?} document
       * @param {?} animationMode
       * @param {?=} defaults
       */
      function MatSpinner(elementRef, platform, document, animationMode, defaults) {
        var _this33;

        _classCallCheck(this, MatSpinner);

        _this33 = _super12.call(this, elementRef, platform, document, animationMode, defaults);
        _this33.mode = 'indeterminate';
        return _this33;
      }

      return MatSpinner;
    }(MatProgressSpinner);

    MatSpinner.ɵfac = function MatSpinner_Factory(t) {
      return new (t || MatSpinner)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS));
    };

    MatSpinner.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatSpinner,
      selectors: [["mat-spinner"]],
      hostAttrs: ["role", "progressbar", "mode", "indeterminate", 1, "mat-spinner", "mat-progress-spinner"],
      hostVars: 6,
      hostBindings: function MatSpinner_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.diameter, "px")("height", ctx.diameter, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._noopAnimations);
        }
      },
      inputs: {
        color: "color"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 3,
      vars: 8,
      consts: [["preserveAspectRatio", "xMidYMid meet", "focusable", "false", 3, "ngSwitch"], ["cx", "50%", "cy", "50%", 3, "animation-name", "stroke-dashoffset", "stroke-dasharray", "stroke-width", 4, "ngSwitchCase"], ["cx", "50%", "cy", "50%", 3, "stroke-dashoffset", "stroke-dasharray", "stroke-width", 4, "ngSwitchCase"], ["cx", "50%", "cy", "50%"]],
      template: function MatSpinner_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatSpinner__svg_circle_1_Template, 1, 9, "circle", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatSpinner__svg_circle_2_Template, 1, 7, "circle", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.diameter, "px")("height", ctx.diameter, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.mode === "indeterminate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("viewBox", ctx._viewBox);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", false);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"]],
      styles: [".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatSpinner.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSpinner, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mat-spinner',
          host: {
            'role': 'progressbar',
            'mode': 'indeterminate',
            'class': 'mat-spinner mat-progress-spinner',
            '[class._mat-animation-noopable]': "_noopAnimations",
            '[style.width.px]': 'diameter',
            '[style.height.px]': 'diameter'
          },
          inputs: ['color'],
          template: "<!--\n  preserveAspectRatio of xMidYMid meet as the center of the viewport is the circle's\n  center. The center of the circle will remain at the center of the mat-progress-spinner\n  element containing the SVG. `focusable=\"false\"` prevents IE from allowing the user to\n  tab into the SVG element.\n-->\n\n<svg\n  [style.width.px]=\"diameter\"\n  [style.height.px]=\"diameter\"\n  [attr.viewBox]=\"_viewBox\"\n  preserveAspectRatio=\"xMidYMid meet\"\n  focusable=\"false\"\n  [ngSwitch]=\"mode === 'indeterminate'\">\n\n  <!--\n    Technically we can reuse the same `circle` element, however Safari has an issue that breaks\n    the SVG rendering in determinate mode, after switching between indeterminate and determinate.\n    Using a different element avoids the issue. An alternative to this is adding `display: none`\n    for a split second and then removing it when switching between modes, but it's hard to know\n    for how long to hide the element and it can cause the UI to blink.\n  -->\n  <circle\n    *ngSwitchCase=\"true\"\n    cx=\"50%\"\n    cy=\"50%\"\n    [attr.r]=\"_circleRadius\"\n    [style.animation-name]=\"'mat-progress-spinner-stroke-rotate-' + diameter\"\n    [style.stroke-dashoffset.px]=\"_strokeDashOffset\"\n    [style.stroke-dasharray.px]=\"_strokeCircumference\"\n    [style.stroke-width.%]=\"_circleStrokeWidth\"></circle>\n\n  <circle\n    *ngSwitchCase=\"false\"\n    cx=\"50%\"\n    cy=\"50%\"\n    [attr.r]=\"_circleRadius\"\n    [style.stroke-dashoffset.px]=\"_strokeDashOffset\"\n    [style.stroke-dasharray.px]=\"_strokeCircumference\"\n    [style.stroke-width.%]=\"_circleStrokeWidth\"></circle>\n</svg>\n",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          styles: [".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS]
          }]
        }];
      }, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/progress-spinner/progress-spinner-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatProgressSpinnerModule = function MatProgressSpinnerModule() {
      _classCallCheck(this, MatProgressSpinnerModule);
    };

    MatProgressSpinnerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatProgressSpinnerModule
    });
    MatProgressSpinnerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MatProgressSpinnerModule_Factory(t) {
        return new (t || MatProgressSpinnerModule)();
      },
      imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatProgressSpinnerModule, {
        declarations: function declarations() {
          return [MatProgressSpinner, MatSpinner];
        },
        imports: function imports() {
          return [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
        },
        exports: function exports() {
          return [MatProgressSpinner, MatSpinner, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatProgressSpinnerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [MatProgressSpinner, MatSpinner, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
          declarations: [MatProgressSpinner, MatSpinner]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/progress-spinner/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=progress-spinner.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js ***!
    \*************************************************************************/

  /*! exports provided: MAT_DRAWER_DEFAULT_AUTOSIZE, MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY, MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent, MatSidenavModule, matDrawerAnimations, throwMatDuplicatedDrawerError, ɵangular_material_src_material_sidenav_sidenav_a */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015SidenavJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DRAWER_DEFAULT_AUTOSIZE", function () {
      return MAT_DRAWER_DEFAULT_AUTOSIZE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY", function () {
      return MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDrawer", function () {
      return MatDrawer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDrawerContainer", function () {
      return MatDrawerContainer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDrawerContent", function () {
      return MatDrawerContent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSidenav", function () {
      return MatSidenav;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSidenavContainer", function () {
      return MatSidenavContainer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSidenavContent", function () {
      return MatSidenavContent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSidenavModule", function () {
      return MatSidenavModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matDrawerAnimations", function () {
      return matDrawerAnimations;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "throwMatDuplicatedDrawerError", function () {
      return throwMatDuplicatedDrawerError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_sidenav_sidenav_a", function () {
      return MAT_DRAWER_CONTAINER;
    });
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/sidenav/drawer-animations.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Animations used by the Material drawers.
     * \@docs-private
     * @type {?}
     */


    var _c0 = ["*"];

    function MatDrawerContainer_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MatDrawerContainer_div_0_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          return ctx_r2._onBackdropClicked();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-drawer-shown", ctx_r0._isShowingBackdrop());
      }
    }

    function MatDrawerContainer_mat_drawer_content_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-drawer-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1, 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
    }

    var _c1 = [[["mat-drawer"]], [["mat-drawer-content"]], "*"];
    var _c2 = ["mat-drawer", "mat-drawer-content", "*"];

    function MatSidenavContainer_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MatSidenavContainer_div_0_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          return ctx_r2._onBackdropClicked();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-drawer-shown", ctx_r0._isShowingBackdrop());
      }
    }

    function MatSidenavContainer_mat_sidenav_content_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-sidenav-content", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1, 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
    }

    var _c3 = [[["mat-sidenav"]], [["mat-sidenav-content"]], "*"];
    var _c4 = ["mat-sidenav", "mat-sidenav-content", "*"];
    var matDrawerAnimations = {
      /**
       * Animation that slides a drawer in and out.
       */
      transformDrawer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["trigger"])('transform', [// We remove the `transform` here completely, rather than setting it to zero, because:
      // 1. Having a transform can cause elements with ripples or an animated
      //    transform to shift around in Chrome with an RTL layout (see #10023).
      // 2. 3d transforms causes text to appear blurry on IE and Edge.
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('open, open-instant', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
        'transform': 'none',
        'visibility': 'visible'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
        // Avoids the shadow showing up when closed in SSR.
        'box-shadow': 'none',
        'visibility': 'hidden'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["transition"])('void => open-instant', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])('0ms')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["transition"])('void <=> open, open-instant => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])('400ms cubic-bezier(0.25, 0.8, 0.25, 1)'))])
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/sidenav/drawer.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Throws an exception when two MatDrawer are matching the same position.
     * \@docs-private
     * @param {?} position
     * @return {?}
     */

    function throwMatDuplicatedDrawerError(position) {
      throw Error("A drawer was already declared for 'position=\"".concat(position, "\"'"));
    }
    /**
     * Configures whether drawers should use auto sizing by default.
     * @type {?}
     */


    var MAT_DRAWER_DEFAULT_AUTOSIZE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MAT_DRAWER_DEFAULT_AUTOSIZE', {
      providedIn: 'root',
      factory: MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY
    });
    /**
     * Used to provide a drawer container to a drawer while avoiding circular references.
     * \@docs-private
     * @type {?}
     */

    var MAT_DRAWER_CONTAINER = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MAT_DRAWER_CONTAINER');
    /**
     * \@docs-private
     * @return {?}
     */

    function MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY() {
      return false;
    }

    var MatDrawerContent = /*#__PURE__*/function (_angular_cdk_scrollin) {
      _inherits(MatDrawerContent, _angular_cdk_scrollin);

      var _super13 = _createSuper(MatDrawerContent);

      /**
       * @param {?} _changeDetectorRef
       * @param {?} _container
       * @param {?} elementRef
       * @param {?} scrollDispatcher
       * @param {?} ngZone
       */
      function MatDrawerContent(_changeDetectorRef, _container, elementRef, scrollDispatcher, ngZone) {
        var _this34;

        _classCallCheck(this, MatDrawerContent);

        _this34 = _super13.call(this, elementRef, scrollDispatcher, ngZone);
        _this34._changeDetectorRef = _changeDetectorRef;
        _this34._container = _container;
        return _this34;
      }
      /**
       * @return {?}
       */


      _createClass(MatDrawerContent, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this35 = this;

          this._container._contentMarginChanges.subscribe(
          /**
          * @return {?}
          */
          function () {
            _this35._changeDetectorRef.markForCheck();
          });
        }
      }]);

      return MatDrawerContent;
    }(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkScrollable"]);

    MatDrawerContent.ɵfac = function MatDrawerContent_Factory(t) {
      return new (t || MatDrawerContent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return MatDrawerContainer;
      })), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]));
    };

    MatDrawerContent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: MatDrawerContent,
      selectors: [["mat-drawer-content"]],
      hostAttrs: [1, "mat-drawer-content"],
      hostVars: 4,
      hostBindings: function MatDrawerContent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("margin-left", ctx._container._contentMargins.left, "px")("margin-right", ctx._container._contentMargins.right, "px");
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function MatDrawerContent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatDrawerContent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
      }, {
        type: MatDrawerContainer,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return MatDrawerContainer;
          })]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollDispatcher"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatDrawerContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'mat-drawer-content',
          template: '<ng-content></ng-content>',
          host: {
            'class': 'mat-drawer-content',
            '[style.margin-left.px]': '_container._contentMargins.left',
            '[style.margin-right.px]': '_container._contentMargins.right'
          },
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: MatDrawerContainer,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(
            /**
            * @return {?}
            */
            function () {
              return MatDrawerContainer;
            })]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollDispatcher"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * This component corresponds to a drawer that can be opened on the drawer container.
     */


    var MatDrawer = /*#__PURE__*/function () {
      /**
       * @param {?} _elementRef
       * @param {?} _focusTrapFactory
       * @param {?} _focusMonitor
       * @param {?} _platform
       * @param {?} _ngZone
       * @param {?} _doc
       * @param {?=} _container
       */
      function MatDrawer(_elementRef, _focusTrapFactory, _focusMonitor, _platform, _ngZone, _doc, _container) {
        var _this36 = this;

        _classCallCheck(this, MatDrawer);

        this._elementRef = _elementRef;
        this._focusTrapFactory = _focusTrapFactory;
        this._focusMonitor = _focusMonitor;
        this._platform = _platform;
        this._ngZone = _ngZone;
        this._doc = _doc;
        this._container = _container;
        this._elementFocusedBeforeDrawerWasOpened = null;
        /**
         * Whether the drawer is initialized. Used for disabling the initial animation.
         */

        this._enableAnimations = false;
        this._position = 'start';
        this._mode = 'over';
        this._disableClose = false;
        this._opened = false;
        /**
         * Emits whenever the drawer has started animating.
         */

        this._animationStarted = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        /**
         * Emits whenever the drawer is done animating.
         */

        this._animationEnd = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        /**
         * Current state of the sidenav animation.
         */
        // @HostBinding is used in the class as it is expected to be extended.  Since @Component decorator
        // metadata is not inherited by child classes, instead the host binding data is defined in a way
        // that can be inherited.
        // tslint:disable:no-host-decorator-in-concrete

        this._animationState = 'void';
        /**
         * Event emitted when the drawer open state is changed.
         */

        this.openedChange = // Note this has to be async in order to avoid some issues with two-bindings (see #8872).
        new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"](
        /* isAsync */
        true);
        /**
         * Emits when the component is destroyed.
         */

        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        /**
         * Event emitted when the drawer's position changes.
         */
        // tslint:disable-next-line:no-output-on-prefix

        this.onPositionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * An observable that emits when the drawer mode changes. This is used by the drawer container to
         * to know when to when the mode changes so it can adapt the margins on the content.
         */

        this._modeChanged = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.openedChange.subscribe(
        /**
        * @param {?} opened
        * @return {?}
        */
        function (opened) {
          if (opened) {
            if (_this36._doc) {
              _this36._elementFocusedBeforeDrawerWasOpened =
              /** @type {?} */
              _this36._doc.activeElement;
            }

            _this36._takeFocus();
          } else {
            _this36._restoreFocus();
          }
        });
        /**
         * Listen to `keydown` events outside the zone so that change detection is not run every
         * time a key is pressed. Instead we re-enter the zone only if the `ESC` key is pressed
         * and we don't have close disabled.
         */

        this._ngZone.runOutsideAngular(
        /**
        * @return {?}
        */
        function () {
          /** @type {?} */
          Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["fromEvent"])(_this36._elementRef.nativeElement, 'keydown').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["ESCAPE"] && !_this36.disableClose && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["hasModifierKey"])(event);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(_this36._destroyed)).subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return _this36._ngZone.run(
            /**
            * @return {?}
            */
            function () {
              _this36.close();

              event.stopPropagation();
              event.preventDefault();
            });
          });
        }); // We need a Subject with distinctUntilChanged, because the `done` event
        // fires twice on some browsers. See https://github.com/angular/angular/issues/24084


        this._animationEnd.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["distinctUntilChanged"])(
        /**
        * @param {?} x
        * @param {?} y
        * @return {?}
        */
        function (x, y) {
          return x.fromState === y.fromState && x.toState === y.toState;
        })).subscribe(
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          var fromState = event.fromState,
              toState = event.toState;

          if (toState.indexOf('open') === 0 && fromState === 'void' || toState === 'void' && fromState.indexOf('open') === 0) {
            _this36.openedChange.emit(_this36._opened);
          }
        });
      }
      /**
       * The side that the drawer is attached to.
       * @return {?}
       */


      _createClass(MatDrawer, [{
        key: "_takeFocus",

        /**
         * Moves focus into the drawer. Note that this works even if
         * the focus trap is disabled in `side` mode.
         * @private
         * @return {?}
         */
        value: function _takeFocus() {
          var _this37 = this;

          if (!this.autoFocus || !this._focusTrap) {
            return;
          }

          this._focusTrap.focusInitialElementWhenReady().then(
          /**
          * @param {?} hasMovedFocus
          * @return {?}
          */
          function (hasMovedFocus) {
            // If there were no focusable elements, focus the sidenav itself so the keyboard navigation
            // still works. We need to check that `focus` is a function due to Universal.
            if (!hasMovedFocus && typeof _this37._elementRef.nativeElement.focus === 'function') {
              _this37._elementRef.nativeElement.focus();
            }
          });
        }
        /**
         * If focus is currently inside the drawer, restores it to where it was before the drawer
         * opened.
         * @private
         * @return {?}
         */

      }, {
        key: "_restoreFocus",
        value: function _restoreFocus() {
          if (!this.autoFocus) {
            return;
          }
          /** @type {?} */


          var activeEl = this._doc && this._doc.activeElement;

          if (activeEl && this._elementRef.nativeElement.contains(activeEl)) {
            // Note that we don't check via `instanceof HTMLElement` so that we can cover SVGs as well.
            if (this._elementFocusedBeforeDrawerWasOpened) {
              this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened, this._openedVia);
            } else {
              this._elementRef.nativeElement.blur();
            }
          }

          this._elementFocusedBeforeDrawerWasOpened = null;
          this._openedVia = null;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);

          this._updateFocusTrapState();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          // Enable the animations after the lifecycle hooks have run, in order to avoid animating
          // drawers that are open by default. When we're on the server, we shouldn't enable the
          // animations, because we don't want the drawer to animate the first time the user sees
          // the page.
          if (this._platform.isBrowser) {
            this._enableAnimations = true;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this._focusTrap) {
            this._focusTrap.destroy();
          }

          this._animationStarted.complete();

          this._animationEnd.complete();

          this._modeChanged.complete();

          this._destroyed.next();

          this._destroyed.complete();
        }
        /**
         * Open the drawer.
         * @param {?=} openedVia Whether the drawer was opened by a key press, mouse click or programmatically.
         * Used for focus management after the sidenav is closed.
         * @return {?}
         */

      }, {
        key: "open",
        value: function open(openedVia) {
          return this.toggle(true, openedVia);
        }
        /**
         * Close the drawer.
         * @return {?}
         */

      }, {
        key: "close",
        value: function close() {
          return this.toggle(false);
        }
        /**
         * Toggle this drawer.
         * @param {?=} isOpen Whether the drawer should be open.
         * @param {?=} openedVia Whether the drawer was opened by a key press, mouse click or programmatically.
         * Used for focus management after the sidenav is closed.
         * @return {?}
         */

      }, {
        key: "toggle",
        value: function toggle() {
          var _this38 = this;

          var isOpen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !this.opened;
          var openedVia = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'program';
          this._opened = isOpen;

          if (isOpen) {
            this._animationState = this._enableAnimations ? 'open' : 'open-instant';
            this._openedVia = openedVia;
          } else {
            this._animationState = 'void';

            this._restoreFocus();
          }

          this._updateFocusTrapState();

          return new Promise(
          /**
          * @param {?} resolve
          * @return {?}
          */
          function (resolve) {
            _this38.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1)).subscribe(
            /**
            * @param {?} open
            * @return {?}
            */
            function (open) {
              return resolve(open ? 'open' : 'close');
            });
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "_updateFocusTrapState",

        /**
         * Updates the enabled state of the focus trap.
         * @private
         * @return {?}
         */
        value: function _updateFocusTrapState() {
          if (this._focusTrap) {
            // The focus trap is only enabled when the drawer is open in any mode other than side.
            this._focusTrap.enabled = this.opened && this.mode !== 'side';
          }
        } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
        // In Ivy the `host` bindings will be merged when this class is extended, whereas in
        // ViewEngine they're overwritten.
        // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
        // tslint:disable-next-line:no-host-decorator-in-concrete

        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_animationStartListener",
        value: function _animationStartListener(event) {
          this._animationStarted.next(event);
        } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
        // In Ivy the `host` bindings will be merged when this class is extended, whereas in
        // ViewEngine they're overwritten.
        // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
        // tslint:disable-next-line:no-host-decorator-in-concrete

        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_animationDoneListener",
        value: function _animationDoneListener(event) {
          this._animationEnd.next(event);
        }
      }, {
        key: "position",
        get: function get() {
          return this._position;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          // Make sure we have a valid value.
          value = value === 'end' ? 'end' : 'start';

          if (value != this._position) {
            this._position = value;
            this.onPositionChanged.emit();
          }
        }
        /**
         * Mode of the drawer; one of 'over', 'push' or 'side'.
         * @return {?}
         */

      }, {
        key: "mode",
        get: function get() {
          return this._mode;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._mode = value;

          this._updateFocusTrapState();

          this._modeChanged.next();
        }
        /**
         * Whether the drawer can be closed with the escape key or by clicking on the backdrop.
         * @return {?}
         */

      }, {
        key: "disableClose",
        get: function get() {
          return this._disableClose;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disableClose = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether the drawer should focus the first focusable element automatically when opened.
         * Defaults to false in when `mode` is set to `side`, otherwise defaults to `true`. If explicitly
         * enabled, focus will be moved into the sidenav in `side` mode as well.
         * @return {?}
         */

      }, {
        key: "autoFocus",
        get: function get() {
          /** @type {?} */
          var value = this._autoFocus; // Note that usually we disable auto focusing in `side` mode, because we don't know how the
          // sidenav is being used, but in some cases it still makes sense to do it. If the consumer
          // explicitly enabled `autoFocus`, we take it as them always wanting to enable it.

          return value == null ? this.mode !== 'side' : value;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._autoFocus = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether the drawer is opened. We overload this because we trigger an event when it
         * starts or end.
         * @return {?}
         */

      }, {
        key: "opened",
        get: function get() {
          return this._opened;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this.toggle(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(value));
        }
        /**
         * Event emitted when the drawer has been opened.
         * @return {?}
         */

      }, {
        key: "_openedStream",
        get: function get() {
          return this.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(
          /**
          * @param {?} o
          * @return {?}
          */
          function (o) {
            return o;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(
          /**
          * @return {?}
          */
          function () {}));
        }
        /**
         * Event emitted when the drawer has started opening.
         * @return {?}
         */

      }, {
        key: "openedStart",
        get: function get() {
          return this._animationStarted.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            return e.fromState !== e.toState && e.toState.indexOf('open') === 0;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(
          /**
          * @return {?}
          */
          function () {}));
        }
        /**
         * Event emitted when the drawer has been closed.
         * @return {?}
         */

      }, {
        key: "_closedStream",
        get: function get() {
          return this.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(
          /**
          * @param {?} o
          * @return {?}
          */
          function (o) {
            return !o;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(
          /**
          * @return {?}
          */
          function () {}));
        }
        /**
         * Event emitted when the drawer has started closing.
         * @return {?}
         */

      }, {
        key: "closedStart",
        get: function get() {
          return this._animationStarted.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            return e.fromState !== e.toState && e.toState === 'void';
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(
          /**
          * @return {?}
          */
          function () {}));
        }
      }, {
        key: "_width",
        get: function get() {
          return this._elementRef.nativeElement ? this._elementRef.nativeElement.offsetWidth || 0 : 0;
        }
      }]);

      return MatDrawer;
    }();

    MatDrawer.ɵfac = function MatDrawer_Factory(t) {
      return new (t || MatDrawer)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusTrapFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_DRAWER_CONTAINER, 8));
    };

    MatDrawer.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: MatDrawer,
      selectors: [["mat-drawer"]],
      hostAttrs: ["tabIndex", "-1", 1, "mat-drawer"],
      hostVars: 12,
      hostBindings: function MatDrawer_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcomponentHostSyntheticListener"]("@transform.start", function MatDrawer_animation_transform_start_HostBindingHandler($event) {
            return ctx._animationStartListener($event);
          })("@transform.done", function MatDrawer_animation_transform_done_HostBindingHandler($event) {
            return ctx._animationDoneListener($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("align", null);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵupdateSyntheticHostBinding"]("@transform", ctx._animationState);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-drawer-end", ctx.position === "end")("mat-drawer-over", ctx.mode === "over")("mat-drawer-push", ctx.mode === "push")("mat-drawer-side", ctx.mode === "side")("mat-drawer-opened", ctx.opened);
        }
      },
      inputs: {
        position: "position",
        mode: "mode",
        disableClose: "disableClose",
        autoFocus: "autoFocus",
        opened: "opened"
      },
      outputs: {
        openedChange: "openedChange",
        onPositionChanged: "positionChanged",
        _openedStream: "opened",
        openedStart: "openedStart",
        _closedStream: "closed",
        closedStart: "closedStart"
      },
      exportAs: ["matDrawer"],
      ngContentSelectors: _c0,
      decls: 2,
      vars: 0,
      consts: [[1, "mat-drawer-inner-container"]],
      template: function MatDrawer_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2,
      data: {
        animation: [matDrawerAnimations.transformDrawer]
      },
      changeDetection: 0
    });
    /** @nocollapse */

    MatDrawer.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusTrapFactory"]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }, {
        type: MatDrawerContainer,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [MAT_DRAWER_CONTAINER]
        }]
      }];
    };

    MatDrawer.propDecorators = {
      position: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      mode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      disableClose: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      autoFocus: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      opened: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      _animationState: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
        args: ['@transform']
      }],
      openedChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      _openedStream: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"],
        args: ['opened']
      }],
      openedStart: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      _closedStream: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"],
        args: ['closed']
      }],
      closedStart: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      onPositionChanged: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"],
        args: ['positionChanged']
      }],
      _animationStartListener: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
        args: ['@transform.start', ['$event']]
      }],
      _animationDoneListener: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
        args: ['@transform.done', ['$event']]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatDrawer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'mat-drawer',
          exportAs: 'matDrawer',
          template: "<div class=\"mat-drawer-inner-container\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
          animations: [matDrawerAnimations.transformDrawer],
          host: {
            'class': 'mat-drawer',
            // must prevent the browser from aligning text based on value
            '[attr.align]': 'null',
            '[class.mat-drawer-end]': 'position === "end"',
            '[class.mat-drawer-over]': 'mode === "over"',
            '[class.mat-drawer-push]': 'mode === "push"',
            '[class.mat-drawer-side]': 'mode === "side"',
            '[class.mat-drawer-opened]': 'opened',
            'tabIndex': '-1'
          },
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusTrapFactory"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
          }]
        }, {
          type: MatDrawerContainer,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_DRAWER_CONTAINER]
          }]
        }];
      }, {
        _animationState: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
          args: ['@transform']
        }],
        openedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        onPositionChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"],
          args: ['positionChanged']
        }],
        position: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        mode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        disableClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        autoFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        opened: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        _openedStream: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"],
          args: ['opened']
        }],
        openedStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        _closedStream: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"],
          args: ['closed']
        }],
        closedStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        _animationStartListener: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['@transform.start', ['$event']]
        }],
        _animationDoneListener: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['@transform.done', ['$event']]
        }]
      });
    })();

    if (false) {}
    /**
     * `<mat-drawer-container>` component.
     *
     * This is the parent component to one or two `<mat-drawer>`s that validates the state internally
     * and coordinates the backdrop and content styling.
     */


    var MatDrawerContainer = /*#__PURE__*/function () {
      /**
       * @param {?} _dir
       * @param {?} _element
       * @param {?} _ngZone
       * @param {?} _changeDetectorRef
       * @param {?} viewportRuler
       * @param {?=} defaultAutosize
       * @param {?=} _animationMode
       */
      function MatDrawerContainer(_dir, _element, _ngZone, _changeDetectorRef, viewportRuler) {
        var _this39 = this;

        var defaultAutosize = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

        var _animationMode = arguments.length > 6 ? arguments[6] : undefined;

        _classCallCheck(this, MatDrawerContainer);

        this._dir = _dir;
        this._element = _element;
        this._ngZone = _ngZone;
        this._changeDetectorRef = _changeDetectorRef;
        this._animationMode = _animationMode;
        /**
         * Drawers that belong to this container.
         */

        this._drawers = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["QueryList"]();
        /**
         * Event emitted when the drawer backdrop is clicked.
         */

        this.backdropClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Emits when the component is destroyed.
         */

        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        /**
         * Emits on every ngDoCheck. Used for debouncing reflows.
         */

        this._doCheckSubject = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        /**
         * Margins to be applied to the content. These are used to push / shrink the drawer content when a
         * drawer is open. We use margin rather than transform even for push mode because transform breaks
         * fixed position elements inside of the transformed element.
         */

        this._contentMargins = {
          left: null,
          right: null
        };
        this._contentMarginChanges = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"](); // If a `Dir` directive exists up the tree, listen direction changes
        // and update the left/right properties to point to the proper start/end.

        if (_dir) {
          _dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this39._validateDrawers();

            _this39.updateContentMargins();
          });
        } // Since the minimum width of the sidenav depends on the viewport width,
        // we need to recompute the margins if the viewport changes.


        viewportRuler.change().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(
        /**
        * @return {?}
        */
        function () {
          return _this39.updateContentMargins();
        });
        this._autosize = defaultAutosize;
      }
      /**
       * The drawer child with the `start` position.
       * @return {?}
       */


      _createClass(MatDrawerContainer, [{
        key: "ngAfterContentInit",

        /**
         * @return {?}
         */
        value: function ngAfterContentInit() {
          var _this40 = this;

          this._allDrawers.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(this._allDrawers), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @param {?} drawer
          * @return {?}
          */
          function (drawer) {
            // @breaking-change 10.0.0 Remove `_container` check once container parameter is required.
            _this40._drawers.reset(drawer.filter(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return !item._container || item._container === _this40;
            }));

            _this40._drawers.notifyOnChanges();
          });

          this._drawers.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(null)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this40._validateDrawers();

            _this40._drawers.forEach(
            /**
            * @param {?} drawer
            * @return {?}
            */
            function (drawer) {
              _this40._watchDrawerToggle(drawer);

              _this40._watchDrawerPosition(drawer);

              _this40._watchDrawerMode(drawer);
            });

            if (!_this40._drawers.length || _this40._isDrawerOpen(_this40._start) || _this40._isDrawerOpen(_this40._end)) {
              _this40.updateContentMargins();
            }

            _this40._changeDetectorRef.markForCheck();
          });

          this._doCheckSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(10), // Arbitrary debounce time, less than a frame at 60fps
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this40.updateContentMargins();
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._contentMarginChanges.complete();

          this._doCheckSubject.complete();

          this._drawers.destroy();

          this._destroyed.next();

          this._destroyed.complete();
        }
        /**
         * Calls `open` of both start and end drawers
         * @return {?}
         */

      }, {
        key: "open",
        value: function open() {
          this._drawers.forEach(
          /**
          * @param {?} drawer
          * @return {?}
          */
          function (drawer) {
            return drawer.open();
          });
        }
        /**
         * Calls `close` of both start and end drawers
         * @return {?}
         */

      }, {
        key: "close",
        value: function close() {
          this._drawers.forEach(
          /**
          * @param {?} drawer
          * @return {?}
          */
          function (drawer) {
            return drawer.close();
          });
        }
        /**
         * Recalculates and updates the inline styles for the content. Note that this should be used
         * sparingly, because it causes a reflow.
         * @return {?}
         */

      }, {
        key: "updateContentMargins",
        value: function updateContentMargins() {
          var _this41 = this;

          // 1. For drawers in `over` mode, they don't affect the content.
          // 2. For drawers in `side` mode they should shrink the content. We do this by adding to the
          //    left margin (for left drawer) or right margin (for right the drawer).
          // 3. For drawers in `push` mode the should shift the content without resizing it. We do this by
          //    adding to the left or right margin and simultaneously subtracting the same amount of
          //    margin from the other side.

          /** @type {?} */
          var left = 0;
          /** @type {?} */

          var right = 0;

          if (this._left && this._left.opened) {
            if (this._left.mode == 'side') {
              left += this._left._width;
            } else if (this._left.mode == 'push') {
              /** @type {?} */
              var width = this._left._width;
              left += width;
              right -= width;
            }
          }

          if (this._right && this._right.opened) {
            if (this._right.mode == 'side') {
              right += this._right._width;
            } else if (this._right.mode == 'push') {
              /** @type {?} */
              var _width = this._right._width;
              right += _width;
              left -= _width;
            }
          } // If either `right` or `left` is zero, don't set a style to the element. This
          // allows users to specify a custom size via CSS class in SSR scenarios where the
          // measured widths will always be zero. Note that we reset to `null` here, rather
          // than below, in order to ensure that the types in the `if` below are consistent.


          left = left ||
          /** @type {?} */
          null;
          right = right ||
          /** @type {?} */
          null;

          if (left !== this._contentMargins.left || right !== this._contentMargins.right) {
            this._contentMargins = {
              left: left,
              right: right
            }; // Pull back into the NgZone since in some cases we could be outside. We need to be careful
            // to do it only when something changed, otherwise we can end up hitting the zone too often.

            this._ngZone.run(
            /**
            * @return {?}
            */
            function () {
              return _this41._contentMarginChanges.next(_this41._contentMargins);
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          var _this42 = this;

          // If users opted into autosizing, do a check every change detection cycle.
          if (this._autosize && this._isPushed()) {
            // Run outside the NgZone, otherwise the debouncer will throw us into an infinite loop.
            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              return _this42._doCheckSubject.next();
            });
          }
        }
        /**
         * Subscribes to drawer events in order to set a class on the main container element when the
         * drawer is open and the backdrop is visible. This ensures any overflow on the container element
         * is properly hidden.
         * @private
         * @param {?} drawer
         * @return {?}
         */

      }, {
        key: "_watchDrawerToggle",
        value: function _watchDrawerToggle(drawer) {
          var _this43 = this;

          drawer._animationStarted.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return event.fromState !== event.toState;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._drawers.changes)).subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            // Set the transition class on the container so that the animations occur. This should not
            // be set initially because animations should only be triggered via a change in state.
            if (event.toState !== 'open-instant' && _this43._animationMode !== 'NoopAnimations') {
              _this43._element.nativeElement.classList.add('mat-drawer-transition');
            }

            _this43.updateContentMargins();

            _this43._changeDetectorRef.markForCheck();
          });

          if (drawer.mode !== 'side') {
            drawer.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._drawers.changes)).subscribe(
            /**
            * @return {?}
            */
            function () {
              return _this43._setContainerClass(drawer.opened);
            });
          }
        }
        /**
         * Subscribes to drawer onPositionChanged event in order to
         * re-validate drawers when the position changes.
         * @private
         * @param {?} drawer
         * @return {?}
         */

      }, {
        key: "_watchDrawerPosition",
        value: function _watchDrawerPosition(drawer) {
          var _this44 = this;

          if (!drawer) {
            return;
          } // NOTE: We need to wait for the microtask queue to be empty before validating,
          // since both drawers may be swapping positions at the same time.


          drawer.onPositionChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._drawers.changes)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this44._ngZone.onMicrotaskEmpty.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1)).subscribe(
            /**
            * @return {?}
            */
            function () {
              _this44._validateDrawers();
            });
          });
        }
        /**
         * Subscribes to changes in drawer mode so we can run change detection.
         * @private
         * @param {?} drawer
         * @return {?}
         */

      }, {
        key: "_watchDrawerMode",
        value: function _watchDrawerMode(drawer) {
          var _this45 = this;

          if (drawer) {
            drawer._modeChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(this._drawers.changes, this._destroyed))).subscribe(
            /**
            * @return {?}
            */
            function () {
              _this45.updateContentMargins();

              _this45._changeDetectorRef.markForCheck();
            });
          }
        }
        /**
         * Toggles the 'mat-drawer-opened' class on the main 'mat-drawer-container' element.
         * @private
         * @param {?} isAdd
         * @return {?}
         */

      }, {
        key: "_setContainerClass",
        value: function _setContainerClass(isAdd) {
          /** @type {?} */
          var classList = this._element.nativeElement.classList;
          /** @type {?} */

          var className = 'mat-drawer-container-has-open';

          if (isAdd) {
            classList.add(className);
          } else {
            classList.remove(className);
          }
        }
        /**
         * Validate the state of the drawer children components.
         * @private
         * @return {?}
         */

      }, {
        key: "_validateDrawers",
        value: function _validateDrawers() {
          var _this46 = this;

          this._start = this._end = null; // Ensure that we have at most one start and one end drawer.

          this._drawers.forEach(
          /**
          * @param {?} drawer
          * @return {?}
          */
          function (drawer) {
            if (drawer.position == 'end') {
              if (_this46._end != null) {
                throwMatDuplicatedDrawerError('end');
              }

              _this46._end = drawer;
            } else {
              if (_this46._start != null) {
                throwMatDuplicatedDrawerError('start');
              }

              _this46._start = drawer;
            }
          });

          this._right = this._left = null; // Detect if we're LTR or RTL.

          if (this._dir && this._dir.value === 'rtl') {
            this._left = this._end;
            this._right = this._start;
          } else {
            this._left = this._start;
            this._right = this._end;
          }
        }
        /**
         * Whether the container is being pushed to the side by one of the drawers.
         * @private
         * @return {?}
         */

      }, {
        key: "_isPushed",
        value: function _isPushed() {
          return this._isDrawerOpen(this._start) && this._start.mode != 'over' || this._isDrawerOpen(this._end) && this._end.mode != 'over';
        }
        /**
         * @return {?}
         */

      }, {
        key: "_onBackdropClicked",
        value: function _onBackdropClicked() {
          this.backdropClick.emit();

          this._closeModalDrawer();
        }
        /**
         * @return {?}
         */

      }, {
        key: "_closeModalDrawer",
        value: function _closeModalDrawer() {
          var _this47 = this;

          // Close all open drawers where closing is not disabled and the mode is not `side`.
          [this._start, this._end].filter(
          /**
          * @param {?} drawer
          * @return {?}
          */
          function (drawer) {
            return drawer && !drawer.disableClose && _this47._canHaveBackdrop(drawer);
          }).forEach(
          /**
          * @param {?} drawer
          * @return {?}
          */
          function (drawer) {
            return (
              /** @type {?} */
              drawer.close()
            );
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "_isShowingBackdrop",
        value: function _isShowingBackdrop() {
          return this._isDrawerOpen(this._start) && this._canHaveBackdrop(this._start) || this._isDrawerOpen(this._end) && this._canHaveBackdrop(this._end);
        }
        /**
         * @private
         * @param {?} drawer
         * @return {?}
         */

      }, {
        key: "_canHaveBackdrop",
        value: function _canHaveBackdrop(drawer) {
          return drawer.mode !== 'side' || !!this._backdropOverride;
        }
        /**
         * @private
         * @param {?} drawer
         * @return {?}
         */

      }, {
        key: "_isDrawerOpen",
        value: function _isDrawerOpen(drawer) {
          return drawer != null && drawer.opened;
        }
      }, {
        key: "start",
        get: function get() {
          return this._start;
        }
        /**
         * The drawer child with the `end` position.
         * @return {?}
         */

      }, {
        key: "end",
        get: function get() {
          return this._end;
        }
        /**
         * Whether to automatically resize the container whenever
         * the size of any of its drawers changes.
         *
         * **Use at your own risk!** Enabling this option can cause layout thrashing by measuring
         * the drawers on every change detection cycle. Can be configured globally via the
         * `MAT_DRAWER_DEFAULT_AUTOSIZE` token.
         * @return {?}
         */

      }, {
        key: "autosize",
        get: function get() {
          return this._autosize;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._autosize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether the drawer container should have a backdrop while one of the sidenavs is open.
         * If explicitly set to `true`, the backdrop will be enabled for drawers in the `side`
         * mode as well.
         * @return {?}
         */

      }, {
        key: "hasBackdrop",
        get: function get() {
          if (this._backdropOverride == null) {
            return !this._start || this._start.mode !== 'side' || !this._end || this._end.mode !== 'side';
          }

          return this._backdropOverride;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._backdropOverride = value == null ? null : Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(value);
        }
        /**
         * Reference to the CdkScrollable instance that wraps the scrollable content.
         * @return {?}
         */

      }, {
        key: "scrollable",
        get: function get() {
          return this._userContent || this._content;
        }
      }]);

      return MatDrawerContainer;
    }();

    MatDrawerContainer.ɵfac = function MatDrawerContainer_Factory(t) {
      return new (t || MatDrawerContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_DRAWER_DEFAULT_AUTOSIZE), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["ANIMATION_MODULE_TYPE"], 8));
    };

    MatDrawerContainer.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: MatDrawerContainer,
      selectors: [["mat-drawer-container"]],
      contentQueries: function MatDrawerContainer_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatDrawerContent, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatDrawer, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._content = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._allDrawers = _t);
        }
      },
      viewQuery: function MatDrawerContainer_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](MatDrawerContent, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._userContent = _t.first);
        }
      },
      hostAttrs: [1, "mat-drawer-container"],
      hostVars: 2,
      hostBindings: function MatDrawerContainer_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-drawer-container-explicit-backdrop", ctx._backdropOverride);
        }
      },
      inputs: {
        autosize: "autosize",
        hasBackdrop: "hasBackdrop"
      },
      outputs: {
        backdropClick: "backdropClick"
      },
      exportAs: ["matDrawerContainer"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
        provide: MAT_DRAWER_CONTAINER,
        useExisting: MatDrawerContainer
      }])],
      ngContentSelectors: _c2,
      decls: 4,
      vars: 2,
      consts: [["class", "mat-drawer-backdrop", 3, "mat-drawer-shown", "click", 4, "ngIf"], [4, "ngIf"], [1, "mat-drawer-backdrop", 3, "click"]],
      template: function MatDrawerContainer_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, MatDrawerContainer_div_0_Template, 1, 2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](2, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MatDrawerContainer_mat_drawer_content_3_Template, 2, 0, "mat-drawer-content", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.hasBackdrop);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx._content);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], MatDrawerContent],
      styles: [".mat-drawer-container{position:relative;z-index:1;box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer{transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatDrawerContainer.ctorParameters = function () {
      return [{
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [MAT_DRAWER_DEFAULT_AUTOSIZE]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    MatDrawerContainer.propDecorators = {
      _allDrawers: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
        args: [MatDrawer, {
          // We need to use `descendants: true`, because Ivy will no longer match
          // indirect descendants if it's left as false.
          descendants: true
        }]
      }],
      _content: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
        args: [MatDrawerContent]
      }],
      _userContent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
        args: [MatDrawerContent]
      }],
      autosize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      hasBackdrop: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      backdropClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatDrawerContainer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'mat-drawer-container',
          exportAs: 'matDrawerContainer',
          template: "<div class=\"mat-drawer-backdrop\" (click)=\"_onBackdropClicked()\" *ngIf=\"hasBackdrop\"\n     [class.mat-drawer-shown]=\"_isShowingBackdrop()\"></div>\n\n<ng-content select=\"mat-drawer\"></ng-content>\n\n<ng-content select=\"mat-drawer-content\">\n</ng-content>\n<mat-drawer-content *ngIf=\"!_content\">\n  <ng-content></ng-content>\n</mat-drawer-content>\n",
          host: {
            'class': 'mat-drawer-container',
            '[class.mat-drawer-container-explicit-backdrop]': '_backdropOverride'
          },
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
          providers: [{
            provide: MAT_DRAWER_CONTAINER,
            useExisting: MatDrawerContainer
          }],
          styles: [".mat-drawer-container{position:relative;z-index:1;box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer{transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}\n"]
        }]
      }], function () {
        return [{
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_DRAWER_DEFAULT_AUTOSIZE]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, {
        backdropClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        autosize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        hasBackdrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        _allDrawers: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [MatDrawer, {
            // We need to use `descendants: true`, because Ivy will no longer match
            // indirect descendants if it's left as false.
            descendants: true
          }]
        }],
        _content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
          args: [MatDrawerContent]
        }],
        _userContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [MatDrawerContent]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/sidenav/sidenav.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatSidenavContent = /*#__PURE__*/function (_MatDrawerContent) {
      _inherits(MatSidenavContent, _MatDrawerContent);

      var _super14 = _createSuper(MatSidenavContent);

      /**
       * @param {?} changeDetectorRef
       * @param {?} container
       * @param {?} elementRef
       * @param {?} scrollDispatcher
       * @param {?} ngZone
       */
      function MatSidenavContent(changeDetectorRef, container, elementRef, scrollDispatcher, ngZone) {
        _classCallCheck(this, MatSidenavContent);

        return _super14.call(this, changeDetectorRef, container, elementRef, scrollDispatcher, ngZone);
      }

      return MatSidenavContent;
    }(MatDrawerContent);

    MatSidenavContent.ɵfac = function MatSidenavContent_Factory(t) {
      return new (t || MatSidenavContent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return MatSidenavContainer;
      })), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]));
    };

    MatSidenavContent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: MatSidenavContent,
      selectors: [["mat-sidenav-content"]],
      hostAttrs: [1, "mat-drawer-content", "mat-sidenav-content"],
      hostVars: 4,
      hostBindings: function MatSidenavContent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("margin-left", ctx._container._contentMargins.left, "px")("margin-right", ctx._container._contentMargins.right, "px");
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function MatSidenavContent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatSidenavContent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
      }, {
        type: MatSidenavContainer,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return MatSidenavContainer;
          })]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollDispatcher"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatSidenavContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'mat-sidenav-content',
          template: '<ng-content></ng-content>',
          host: {
            'class': 'mat-drawer-content mat-sidenav-content',
            '[style.margin-left.px]': '_container._contentMargins.left',
            '[style.margin-right.px]': '_container._contentMargins.right'
          },
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: MatSidenavContainer,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(
            /**
            * @return {?}
            */
            function () {
              return MatSidenavContainer;
            })]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollDispatcher"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }];
      }, null);
    })();

    var MatSidenav = /*#__PURE__*/function (_MatDrawer) {
      _inherits(MatSidenav, _MatDrawer);

      var _super15 = _createSuper(MatSidenav);

      function MatSidenav() {
        var _this48;

        _classCallCheck(this, MatSidenav);

        _this48 = _super15.apply(this, arguments);
        _this48._fixedInViewport = false;
        _this48._fixedTopGap = 0;
        _this48._fixedBottomGap = 0;
        return _this48;
      }
      /**
       * Whether the sidenav is fixed in the viewport.
       * @return {?}
       */


      _createClass(MatSidenav, [{
        key: "fixedInViewport",
        get: function get() {
          return this._fixedInViewport;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._fixedInViewport = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(value);
        }
        /**
         * The gap between the top of the sidenav and the top of the viewport when the sidenav is in fixed
         * mode.
         * @return {?}
         */

      }, {
        key: "fixedTopGap",
        get: function get() {
          return this._fixedTopGap;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._fixedTopGap = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceNumberProperty"])(value);
        }
        /**
         * The gap between the bottom of the sidenav and the bottom of the viewport when the sidenav is in
         * fixed mode.
         * @return {?}
         */

      }, {
        key: "fixedBottomGap",
        get: function get() {
          return this._fixedBottomGap;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._fixedBottomGap = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceNumberProperty"])(value);
        }
      }]);

      return MatSidenav;
    }(MatDrawer);

    MatSidenav.ɵfac = function MatSidenav_Factory(t) {
      return ɵMatSidenav_BaseFactory(t || MatSidenav);
    };

    MatSidenav.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: MatSidenav,
      selectors: [["mat-sidenav"]],
      hostAttrs: ["tabIndex", "-1", 1, "mat-drawer", "mat-sidenav"],
      hostVars: 17,
      hostBindings: function MatSidenav_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("align", null);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("top", ctx.fixedInViewport ? ctx.fixedTopGap : null, "px")("bottom", ctx.fixedInViewport ? ctx.fixedBottomGap : null, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-drawer-end", ctx.position === "end")("mat-drawer-over", ctx.mode === "over")("mat-drawer-push", ctx.mode === "push")("mat-drawer-side", ctx.mode === "side")("mat-drawer-opened", ctx.opened)("mat-sidenav-fixed", ctx.fixedInViewport);
        }
      },
      inputs: {
        fixedInViewport: "fixedInViewport",
        fixedTopGap: "fixedTopGap",
        fixedBottomGap: "fixedBottomGap"
      },
      exportAs: ["matSidenav"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c0,
      decls: 2,
      vars: 0,
      consts: [[1, "mat-drawer-inner-container"]],
      template: function MatSidenav_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2,
      data: {
        animation: [matDrawerAnimations.transformDrawer]
      },
      changeDetection: 0
    });
    MatSidenav.propDecorators = {
      fixedInViewport: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      fixedTopGap: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      fixedBottomGap: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }]
    };

    var ɵMatSidenav_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](MatSidenav);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatSidenav, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'mat-sidenav',
          exportAs: 'matSidenav',
          template: "<div class=\"mat-drawer-inner-container\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
          animations: [matDrawerAnimations.transformDrawer],
          host: {
            'class': 'mat-drawer mat-sidenav',
            'tabIndex': '-1',
            // must prevent the browser from aligning text based on value
            '[attr.align]': 'null',
            '[class.mat-drawer-end]': 'position === "end"',
            '[class.mat-drawer-over]': 'mode === "over"',
            '[class.mat-drawer-push]': 'mode === "push"',
            '[class.mat-drawer-side]': 'mode === "side"',
            '[class.mat-drawer-opened]': 'opened',
            '[class.mat-sidenav-fixed]': 'fixedInViewport',
            '[style.top.px]': 'fixedInViewport ? fixedTopGap : null',
            '[style.bottom.px]': 'fixedInViewport ? fixedBottomGap : null'
          },
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
        }]
      }], null, {
        fixedInViewport: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        fixedTopGap: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        fixedBottomGap: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      });
    })();

    if (false) {}

    var MatSidenavContainer = /*#__PURE__*/function (_MatDrawerContainer) {
      _inherits(MatSidenavContainer, _MatDrawerContainer);

      var _super16 = _createSuper(MatSidenavContainer);

      function MatSidenavContainer() {
        _classCallCheck(this, MatSidenavContainer);

        return _super16.apply(this, arguments);
      }

      return MatSidenavContainer;
    }(MatDrawerContainer);

    MatSidenavContainer.ɵfac = function MatSidenavContainer_Factory(t) {
      return ɵMatSidenavContainer_BaseFactory(t || MatSidenavContainer);
    };

    MatSidenavContainer.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: MatSidenavContainer,
      selectors: [["mat-sidenav-container"]],
      contentQueries: function MatSidenavContainer_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatSidenavContent, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatSidenav, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._content = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._allDrawers = _t);
        }
      },
      hostAttrs: [1, "mat-drawer-container", "mat-sidenav-container"],
      hostVars: 2,
      hostBindings: function MatSidenavContainer_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-drawer-container-explicit-backdrop", ctx._backdropOverride);
        }
      },
      exportAs: ["matSidenavContainer"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
        provide: MAT_DRAWER_CONTAINER,
        useExisting: MatSidenavContainer
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c4,
      decls: 4,
      vars: 2,
      consts: [["class", "mat-drawer-backdrop", 3, "mat-drawer-shown", "click", 4, "ngIf"], ["cdkScrollable", "", 4, "ngIf"], [1, "mat-drawer-backdrop", 3, "click"], ["cdkScrollable", ""]],
      template: function MatSidenavContainer_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, MatSidenavContainer_div_0_Template, 1, 2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](2, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MatSidenavContainer_mat_sidenav_content_3_Template, 2, 0, "mat-sidenav-content", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.hasBackdrop);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx._content);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], MatSidenavContent, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkScrollable"]],
      styles: [".mat-drawer-container{position:relative;z-index:1;box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer{transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    MatSidenavContainer.propDecorators = {
      _allDrawers: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
        args: [MatSidenav, {
          // We need to use `descendants: true`, because Ivy will no longer match
          // indirect descendants if it's left as false.
          descendants: true
        }]
      }],
      _content: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
        args: [MatSidenavContent]
      }]
    };

    var ɵMatSidenavContainer_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](MatSidenavContainer);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatSidenavContainer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'mat-sidenav-container',
          exportAs: 'matSidenavContainer',
          template: "<div class=\"mat-drawer-backdrop\" (click)=\"_onBackdropClicked()\" *ngIf=\"hasBackdrop\"\n     [class.mat-drawer-shown]=\"_isShowingBackdrop()\"></div>\n\n<ng-content select=\"mat-sidenav\"></ng-content>\n\n<ng-content select=\"mat-sidenav-content\">\n</ng-content>\n<mat-sidenav-content *ngIf=\"!_content\" cdkScrollable>\n  <ng-content></ng-content>\n</mat-sidenav-content>\n",
          host: {
            'class': 'mat-drawer-container mat-sidenav-container',
            '[class.mat-drawer-container-explicit-backdrop]': '_backdropOverride'
          },
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
          providers: [{
            provide: MAT_DRAWER_CONTAINER,
            useExisting: MatSidenavContainer
          }],
          styles: [".mat-drawer-container{position:relative;z-index:1;box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer{transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}\n"]
        }]
      }], null, {
        _allDrawers: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [MatSidenav, {
            // We need to use `descendants: true`, because Ivy will no longer match
            // indirect descendants if it's left as false.
            descendants: true
          }]
        }],
        _content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
          args: [MatSidenavContent]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/sidenav/sidenav-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatSidenavModule = function MatSidenavModule() {
      _classCallCheck(this, MatSidenavModule);
    };

    MatSidenavModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: MatSidenavModule
    });
    MatSidenavModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      factory: function MatSidenavModule_Factory(t) {
        return new (t || MatSidenavModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkScrollableModule"]], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkScrollableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MatSidenavModule, {
        declarations: function declarations() {
          return [MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkScrollableModule"]];
        },
        exports: function exports() {
          return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkScrollableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatSidenavModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkScrollableModule"]],
          exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkScrollableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent],
          declarations: [MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/sidenav/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=sidenav.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js ***!
    \*************************************************************************/

  /*! exports provided: MatToolbar, MatToolbarModule, MatToolbarRow, throwToolbarMixedModesError */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015ToolbarJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatToolbar", function () {
      return MatToolbar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatToolbarModule", function () {
      return MatToolbarModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatToolbarRow", function () {
      return MatToolbarRow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "throwToolbarMixedModesError", function () {
      return throwToolbarMixedModesError;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/toolbar/toolbar.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Boilerplate for applying mixins to MatToolbar.

    /**
     * \@docs-private
     */


    var _c0 = ["*", [["mat-toolbar-row"]]];
    var _c1 = ["*", "mat-toolbar-row"];

    var MatToolbarBase =
    /**
     * @param {?} _elementRef
     */
    function MatToolbarBase(_elementRef) {
      _classCallCheck(this, MatToolbarBase);

      this._elementRef = _elementRef;
    };

    if (false) {}
    /** @type {?} */


    var _MatToolbarMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["mixinColor"])(MatToolbarBase);

    var MatToolbarRow = function MatToolbarRow() {
      _classCallCheck(this, MatToolbarRow);
    };

    MatToolbarRow.ɵfac = function MatToolbarRow_Factory(t) {
      return new (t || MatToolbarRow)();
    };

    MatToolbarRow.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatToolbarRow,
      selectors: [["mat-toolbar-row"]],
      hostAttrs: [1, "mat-toolbar-row"],
      exportAs: ["matToolbarRow"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatToolbarRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'mat-toolbar-row',
          exportAs: 'matToolbarRow',
          host: {
            'class': 'mat-toolbar-row'
          }
        }]
      }], null, null);
    })();

    var MatToolbar = /*#__PURE__*/function (_MatToolbarMixinBase2) {
      _inherits(MatToolbar, _MatToolbarMixinBase2);

      var _super17 = _createSuper(MatToolbar);

      /**
       * @param {?} elementRef
       * @param {?} _platform
       * @param {?=} document
       */
      function MatToolbar(elementRef, _platform, document) {
        var _this49;

        _classCallCheck(this, MatToolbar);

        _this49 = _super17.call(this, elementRef);
        _this49._platform = _platform; // TODO: make the document a required param when doing breaking changes.

        _this49._document = document;
        return _this49;
      }
      /**
       * @return {?}
       */


      _createClass(MatToolbar, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this50 = this;

          if (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() || !this._platform.isBrowser) {
            return;
          }

          this._checkToolbarMixedModes();

          this._toolbarRows.changes.subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this50._checkToolbarMixedModes();
          });
        }
        /**
         * Throws an exception when developers are attempting to combine the different toolbar row modes.
         * @private
         * @return {?}
         */

      }, {
        key: "_checkToolbarMixedModes",
        value: function _checkToolbarMixedModes() {
          var _this51 = this;

          if (!this._toolbarRows.length) {
            return;
          } // Check if there are any other DOM nodes that can display content but aren't inside of
          // a <mat-toolbar-row> element.

          /** @type {?} */


          var isCombinedUsage = Array.from(this._elementRef.nativeElement.childNodes).filter(
          /**
          * @param {?} node
          * @return {?}
          */
          function (node) {
            return !(node.classList && node.classList.contains('mat-toolbar-row'));
          }).filter(
          /**
          * @param {?} node
          * @return {?}
          */
          function (node) {
            return node.nodeType !== (_this51._document ? _this51._document.COMMENT_NODE : 8);
          }).some(
          /**
          * @param {?} node
          * @return {?}
          */
          function (node) {
            return !!(node.textContent && node.textContent.trim());
          });

          if (isCombinedUsage) {
            throwToolbarMixedModesError();
          }
        }
      }]);

      return MatToolbar;
    }(_MatToolbarMixinBase);

    MatToolbar.ɵfac = function MatToolbar_Factory(t) {
      return new (t || MatToolbar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]));
    };

    MatToolbar.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatToolbar,
      selectors: [["mat-toolbar"]],
      contentQueries: function MatToolbar_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatToolbarRow, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._toolbarRows = _t);
        }
      },
      hostAttrs: [1, "mat-toolbar"],
      hostVars: 4,
      hostBindings: function MatToolbar_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-toolbar-multiple-rows", ctx._toolbarRows.length > 0)("mat-toolbar-single-row", ctx._toolbarRows.length === 0);
        }
      },
      inputs: {
        color: "color"
      },
      exportAs: ["matToolbar"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c1,
      decls: 2,
      vars: 0,
      template: function MatToolbar_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
        }
      },
      styles: [".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}.mat-toolbar-multiple-rows{min-height:64px}.mat-toolbar-row,.mat-toolbar-single-row{height:64px}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:56px}.mat-toolbar-row,.mat-toolbar-single-row{height:56px}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatToolbar.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
        }]
      }];
    };

    MatToolbar.propDecorators = {
      _toolbarRows: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [MatToolbarRow, {
          descendants: true
        }]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatToolbar, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mat-toolbar',
          exportAs: 'matToolbar',
          template: "<ng-content></ng-content>\n<ng-content select=\"mat-toolbar-row\"></ng-content>\n",
          inputs: ['color'],
          host: {
            'class': 'mat-toolbar',
            '[class.mat-toolbar-multiple-rows]': '_toolbarRows.length > 0',
            '[class.mat-toolbar-single-row]': '_toolbarRows.length === 0'
          },
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          styles: [".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}.mat-toolbar-multiple-rows{min-height:64px}.mat-toolbar-row,.mat-toolbar-single-row{height:64px}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:56px}.mat-toolbar-row,.mat-toolbar-single-row{height:56px}}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
          }]
        }];
      }, {
        _toolbarRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [MatToolbarRow, {
            descendants: true
          }]
        }]
      });
    })();

    if (false) {}
    /**
     * Throws an exception when attempting to combine the different toolbar row modes.
     * \@docs-private
     * @return {?}
     */


    function throwToolbarMixedModesError() {
      throw Error('MatToolbar: Attempting to combine different toolbar modes. ' + 'Either specify multiple `<mat-toolbar-row>` elements explicitly or just place content ' + 'inside of a `<mat-toolbar>` for a single row.');
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/toolbar/toolbar-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatToolbarModule = function MatToolbarModule() {
      _classCallCheck(this, MatToolbarModule);
    };

    MatToolbarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatToolbarModule
    });
    MatToolbarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MatToolbarModule_Factory(t) {
        return new (t || MatToolbarModule)();
      },
      imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatToolbarModule, {
        declarations: function declarations() {
          return [MatToolbar, MatToolbarRow];
        },
        imports: function imports() {
          return [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
        },
        exports: function exports() {
          return [MatToolbar, MatToolbarRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatToolbarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
          exports: [MatToolbar, MatToolbarRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
          declarations: [MatToolbar, MatToolbarRow]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/toolbar/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=toolbar.js.map

    /***/

  },

  /***/
  "./src/app/customer/bots/bots.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/customer/bots/bots.component.ts ***!
    \*************************************************/

  /*! exports provided: BotsComponent */

  /***/
  function srcAppCustomerBotsBotsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BotsComponent", function () {
      return BotsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _dialog_bot_create_bot_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../dialog/bot-create/bot-create.component */
    "./src/app/customer/dialog/bot-create/bot-create.component.ts");
    /* harmony import */


    var _dialog_bot_remove_bot_remove_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../dialog/bot-remove/bot-remove.component */
    "./src/app/customer/dialog/bot-remove/bot-remove.component.ts");
    /* harmony import */


    var src_app_shared_services_bots_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/bots.service */
    "./src/app/shared/services/bots.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function BotsComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "rect", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "animate", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "animate", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "rect", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "animate", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "animate", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "rect", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "animate", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "animate", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BotsComponent_ng_template_15_div_1_div_3_button_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "lock");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Kh\xF3a Bot");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BotsComponent_ng_template_15_div_1_div_3_button_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "lock_open");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "M\u1EDF kh\xF3a Bot");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a1) {
      return ["bots", a1];
    };

    function BotsComponent_ng_template_15_div_1_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "more_vert");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-menu", null, 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BotsComponent_ng_template_15_div_1_div_3_button_9_Template, 5, 0, "button", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BotsComponent_ng_template_15_div_1_div_3_button_10_Template, 5, 0, "button", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "file_copy");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "T\u1EA1o b\u1EA3n sao");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BotsComponent_ng_template_15_div_1_div_3_Template_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var item_r6 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r10.diagRemoveBot(item_r6);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "delete_sweep");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "X\xF3a bot");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-list-item", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "filter_center_focus");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "arrow_forward");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u0110i \u0111\u1EBFn Bot");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r6 = ctx.$implicit;

        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r6.isActive);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r6.isActive);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ID: ", item_r6.botId, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" NG\xD4N NG\u1EEE: ", item_r6.lang == "vi" ? "Ti\u1EBFng Vi\u1EC7t" : "Ti\u1EBFng Anh", " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" M\xF4 t\u1EA3: ", item_r6.desc, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" NG\xC0Y T\u1EA0O: ", item_r6.createdAt, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, item_r6.botId));
      }
    }

    function BotsComponent_ng_template_15_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BotsComponent_ng_template_15_div_1_div_3_Template, 49, 11, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BotsComponent_ng_template_15_div_1_Template_div_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r12.diagCreateBot();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.bots);
      }
    }

    function BotsComponent_ng_template_15_div_2_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BotsComponent_ng_template_15_div_2_div_1_Template_div_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r15.diagCreateBot();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BotsComponent_ng_template_15_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BotsComponent_ng_template_15_div_2_div_1_Template, 6, 0, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.bots == undefined || ctx_r4.bots.length == 0);
      }
    }

    function BotsComponent_ng_template_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BotsComponent_ng_template_15_div_1_Template, 8, 1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BotsComponent_ng_template_15_div_2_Template, 2, 1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r2.bots == undefined || ctx_r2.bots.length == 0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.bots == undefined || ctx_r2.bots.length == 0);
      }
    }

    var BotsComponent = /*#__PURE__*/function () {
      function BotsComponent(botServer, dialog, _snackBar) {
        _classCallCheck(this, BotsComponent);

        this.botServer = botServer;
        this.dialog = dialog;
        this._snackBar = _snackBar;
        this.loading = true; //variable

        this.bots = [];
      }

      _createClass(BotsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAllBot();
        } // reload data bot

      }, {
        key: "refresh",
        value: function refresh() {
          this.getAllBot();
        } // opne diaglog create bot

      }, {
        key: "diagCreateBot",
        value: function diagCreateBot() {
          this.createBot();
        } // opne diaglog remove bot

      }, {
        key: "diagRemoveBot",
        value: function diagRemoveBot(data) {
          this.removeBot(data);
        } //get all bot

      }, {
        key: "getAllBot",
        value: function getAllBot() {
          var _this52 = this;

          this.botServer.getAllBots().subscribe(function (res) {
            //this.connectFail = false;
            _this52.bots = res['data'];
            localStorage.setItem('tpsoftbot_client', JSON.stringify(_this52.bots));
            setTimeout(function () {
              _this52.loading = false;
            }, 500);
          }, function (error) {
            _this52.loading = false;

            _this52._snackBar.open('Đã có lỗi xảy ra', 'OK', {
              duration: 1000
            }); //this.connectFail = true;

          });
        } //save localstorage data info bot

      }, {
        key: "saveLocalStorageBot",
        value: function saveLocalStorageBot(data) {
          localStorage.setItem('tpsoftbot_client', JSON.stringify(data));
        } //create bot

      }, {
        key: "createBot",
        value: function createBot() {
          var _this53 = this;

          var dialogRef = this.dialog.open(_dialog_bot_create_bot_create_component__WEBPACK_IMPORTED_MODULE_1__["BotCreateComponent"], {
            data: null,
            width: '400px'
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if (result && result.action === 1) {
              _this53.botServer.createBots(result.data).subscribe(function (res) {
                if (res.status === 200) {
                  _this53.getAllBot();

                  _this53._snackBar.open('Thao tác thành công', 'OK', {
                    duration: 1000
                  });
                } else {
                  _this53._snackBar.open('Thao tác không thành công', 'OK', {
                    duration: 1000
                  });
                }
              }, function (error) {
                _this53._snackBar.open('Thao tác không thành công', 'OK', {
                  duration: 1000
                }); //this.connectFail = true;

              });
            }
          });
        } //remove bot

      }, {
        key: "removeBot",
        value: function removeBot(bot) {
          var _this54 = this;

          var dialogRef = this.dialog.open(_dialog_bot_remove_bot_remove_component__WEBPACK_IMPORTED_MODULE_2__["BotRemoveComponent"], {
            data: bot,
            width: '400px'
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if (result && result.action === 1) {
              _this54.botServer.removeBot(bot.botId).subscribe(function (res) {
                if (res.status === 200) {
                  _this54.getAllBot();

                  _this54._snackBar.open('Thao tác thành công', 'OK', {
                    duration: 1000
                  });
                } else {
                  _this54._snackBar.open('Thao tác không thành công', 'OK', {
                    duration: 1000
                  });
                }
              }, function (error) {
                _this54._snackBar.open('Thao tác không thành công', 'OK', {
                  duration: 1000
                }); //this.connectFail = true;

              });
            }
          });
        }
      }]);

      return BotsComponent;
    }();

    BotsComponent.ɵfac = function BotsComponent_Factory(t) {
      return new (t || BotsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_bots_service__WEBPACK_IMPORTED_MODULE_3__["BotService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]));
    };

    BotsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BotsComponent,
      selectors: [["app-bots"]],
      decls: 17,
      vars: 2,
      consts: [["mat-icon-button", "", "color", "primary", 1, "btn-back"], [1, "title-header"], [1, "right-header"], [1, "func-header"], [1, "btn-header"], ["mat-button", "", "color", "primary", 3, "click"], ["class", "page-content_1", 4, "ngIf", "ngIfElse"], ["isloading", ""], [1, "page-content_1"], [1, "loading"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "100px", "height", "100px", "viewBox", "0 0 100 100", "preserveAspectRatio", "xMidYMid", 2, "margin", "auto", "background", "transparent", "display", "block"], ["fill", "#e91624", "x", "55", "y", "15", "width", "30", "height", "30", "rx", "3", "ry", "3"], ["attributeName", "x", "dur", "2s", "repeatCount", "indefinite", "keyTimes", "0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1", "values", "15;55;55;55;55;15;15;15;15", "begin", "-1.8333333333333333s"], ["attributeName", "y", "dur", "2s", "repeatCount", "indefinite", "keyTimes", "0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1", "values", "15;55;55;55;55;15;15;15;15", "begin", "-1.3333333333333333s"], ["fill", "#f0a65a", "x", "15", "y", "50.388", "width", "30", "height", "30", "rx", "3", "ry", "3"], ["attributeName", "x", "dur", "2s", "repeatCount", "indefinite", "keyTimes", "0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1", "values", "15;55;55;55;55;15;15;15;15", "begin", "-1.1666666666666667s"], ["attributeName", "y", "dur", "2s", "repeatCount", "indefinite", "keyTimes", "0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1", "values", "15;55;55;55;55;15;15;15;15", "begin", "-0.6666666666666666s"], ["fill", "#13d00d", "x", "55", "y", "55", "width", "30", "height", "30", "rx", "3", "ry", "3"], ["attributeName", "x", "dur", "2s", "repeatCount", "indefinite", "keyTimes", "0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1", "values", "15;55;55;55;55;15;15;15;15", "begin", "-0.5s"], ["attributeName", "y", "dur", "2s", "repeatCount", "indefinite", "keyTimes", "0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1", "values", "15;55;55;55;55;15;15;15;15", "begin", "0s"], [1, "page-content"], ["class", "container-fluid", 4, "ngIf"], [1, "container-fluid"], [1, "list-bot"], [1, "row"], ["class", "col col-md-3 item-bot", 4, "ngFor", "ngForOf"], [1, "col", "col-md-3", "item-bot"], [1, "card-add", 3, "click"], [1, "example-card"], [1, "btn-bot-option"], ["mat-icon-button", "", "aria-label", "Setting", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 4, "ngIf"], ["mat-menu-item", "", "disabled", ""], ["mat-menu-item", "", 3, "click"], ["color", "warn"], [1, "mat-list-item-name"], ["mat-list-icon", ""], ["mat-line", "", 1, "item-bot-name"], [1, "mat-list-item-info"], ["mat-line", ""], ["mat-button", "", 3, "routerLink"], ["mat-menu-item", ""], ["class", "list-bot", 4, "ngIf"]],
      template: function BotsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "arrow_back_ios");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "QU\u1EA2N L\xDD BOT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BotsComponent_Template_button_click_9_listener() {
            return ctx.refresh();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "refresh");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " L\xC0M M\u1EDAI ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, BotsComponent_div_14_Template, 12, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, BotsComponent_ng_template_15_Template, 3, 2, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", _r1);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardContent"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuItem"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListItem"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListIconCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatLine"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDivider"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterLink"]],
      styles: [".mat-toolbar.mat-toolbar.mat-toolbar-single-row[_ngcontent-%COMP%] {\r\n    background: white;\r\n    flex-shrink: 0;\r\n    height: 48px;\r\n    padding: 0;\r\n    border-bottom: 1px solid #dcd5d5;\r\n    outline: none;\r\n    padding-left: 16px;\r\n    text-decoration: none;\r\n    \r\n}\r\n\r\n\r\n\r\nspan.title-header[_ngcontent-%COMP%] {\r\n    align-items: center;\r\n    display: flex;\r\n    height: 100%;\r\n    color: #000;\r\n    font-family: \"roboto\";\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    letter-spacing: normal;\r\n    line-height: 24px;\r\n    padding: 0px 30px 0px 0px;\r\n}\r\n\r\n.btn-back[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{\r\n    font-size: 16px;\r\n}\r\n\r\n.right-header[_ngcontent-%COMP%]{\r\n    align-items: center;\r\n    \r\n    flex: 1 1 auto;\r\n    height: 100%;\r\n}\r\n\r\n.func-header[_ngcontent-%COMP%] {\r\n    align-items: center;\r\n    display: flex;\r\n    height: 100%;\r\n}\r\n\r\n.func-header[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n}\r\n\r\n.page-content[_ngcontent-%COMP%] {\r\n    background: transparent;\r\n    height: Calc(100% - 48px);\r\n    overflow: auto;\r\n}\r\n\r\n.page-content_1[_ngcontent-%COMP%] {\r\n    background: transparent;\r\n    height: Calc(100% - 48px);\r\n    overflow: auto;\r\n    display: grid;\r\n    align-items: center;\r\n    text-align: center;\r\n}\r\n\r\n.mat-button[_ngcontent-%COMP%] {\r\n    font-family: \"roboto\";\r\n    font-size: 13px;\r\n    font-weight: 500;\r\n    letter-spacing: normal;\r\n    line-height: 32px;\r\n    margin-right: 8px;\r\n    min-width: auto;\r\n    padding: 0 12px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n\r\n\r\n.list-bot[_ngcontent-%COMP%] {\r\n    margin: 20px 10px;\r\n}\r\n\r\n.list-bot[_ngcontent-%COMP%]   .item-bot[_ngcontent-%COMP%]{\r\n    margin: 10px 0px 10px 0px;\r\n}\r\n\r\n.list-bot[_ngcontent-%COMP%]   .item-bot[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{\r\n    padding: 0;\r\n}\r\n\r\n.list-bot[_ngcontent-%COMP%]   .item-bot[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]:hover{\r\n    box-shadow: 0 2px 6px 1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);\r\n}\r\n\r\n.list-bot[_ngcontent-%COMP%]   .item-bot[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   button.mat-button.mat-button-base[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    text-align: inherit;\r\n    height: 100%;\r\n    padding: 10px;\r\n    outline: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.list-bot[_ngcontent-%COMP%]   .item-bot[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\r\n    margin: 0px 0px 0px 10px;\r\n}\r\n\r\n.list-bot[_ngcontent-%COMP%]   .item-bot[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   button.mat-button.mat-button-base[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    margin: auto 10px;\r\n}\r\n\r\nspan.item-bot-name.mat-line[_ngcontent-%COMP%] {\r\n    margin-left: -8px !important;\r\n    font-size: medium !important;\r\n    font-weight: 500 !important;\r\n}\r\n\r\n.mat-list-item-info[_ngcontent-%COMP%] {\r\n    margin: auto 40px;\r\n}\r\n\r\np.mat-line[_ngcontent-%COMP%]{\r\n    font-size: smaller !important;\r\n    text-transform: uppercase;\r\n}\r\n\r\nbutton.mat-menu-trigger.mat-icon-button.mat-button-base[_ngcontent-%COMP%] {\r\n    float: right;\r\n    outline: none;\r\n    font-weight: 400;\r\n    text-align: inherit;\r\n}\r\n\r\nspan.lb-empty[_ngcontent-%COMP%] {\r\n    font-size: x-large;\r\n    font-weight: 500;\r\n    opacity: 0.7;\r\n    text-transform: inherit;\r\n}\r\n\r\n.card-add[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    \r\n    min-height: 310px;\r\n    max-height: 343px;\r\n    background: white;\r\n    align-items: center;\r\n    vertical-align: middle;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    border: 1px dashed lightgrey;\r\n    justify-content: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.card-add[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 48px;\r\n    height: 100%;\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXIvYm90cy9ib3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxZQUFZO0lBQ1osVUFBVTtJQUNWLGdDQUFnQztJQUNoQyxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHFCQUFxQjs7QUFFekI7O0FBRUE7Ozs7Ozs7Ozs7OztHQVlHOztBQUNIO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztJQUNYLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjs7SUFFbkIsY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUdBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZUFBZTtJQUNmLHlCQUF5QjtBQUM3Qjs7QUFFQSxhQUFhOztBQUNiO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUdBO0lBQ0ksVUFBVTtBQUNkOztBQUNBO0lBQ0ksa0dBQWtHO0FBQ3RHOztBQUdBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IseUJBQXlCO0FBQzdCOztBQUdBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osdUJBQXVCO0FBQzNCOztBQUdBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUVqQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsNEJBQTRCO0lBRTVCLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tZXIvYm90cy9ib3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm1hdC10b29sYmFyLm1hdC10b29sYmFyLm1hdC10b29sYmFyLXNpbmdsZS1yb3cge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RjZDVkNTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBcclxufVxyXG5cclxuLyogc3Bhbi50aXRsZS1oZWFkZXJ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LWZhbWlseTogXCJyb2JvdG9cIjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZGlzcGxheTogY29udGVudHM7XHJcbn0gKi9cclxuc3Bhbi50aXRsZS1oZWFkZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBcInJvYm90b1wiO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIHBhZGRpbmc6IDBweCAzMHB4IDBweCAwcHg7XHJcbn1cclxuLmJ0bi1iYWNrIC5tYXRlcmlhbC1pY29uc3tcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLnJpZ2h0LWhlYWRlcntcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZnVuYy1oZWFkZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5mdW5jLWhlYWRlciAubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcblxyXG5cclxuLnBhZ2UtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGhlaWdodDogQ2FsYygxMDAlIC0gNDhweCk7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4ucGFnZS1jb250ZW50XzEge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBoZWlnaHQ6IENhbGMoMTAwJSAtIDQ4cHgpO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1hdC1idXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6IFwicm9ib3RvXCI7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICBtaW4td2lkdGg6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAwIDEycHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4vKiBsaXN0LWJvdCAqL1xyXG4ubGlzdC1ib3Qge1xyXG4gICAgbWFyZ2luOiAyMHB4IDEwcHg7XHJcbn1cclxuXHJcbi5saXN0LWJvdCAuaXRlbS1ib3R7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4IDEwcHggMHB4O1xyXG59XHJcblxyXG5cclxuLmxpc3QtYm90IC5pdGVtLWJvdCBtYXQtY2FyZHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuLmxpc3QtYm90IC5pdGVtLWJvdCBtYXQtY2FyZDpob3ZlcntcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDZweCAxcHggcmdiYSgwLDAsMCwuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggM3B4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG59XHJcblxyXG5cclxuLmxpc3QtYm90IC5pdGVtLWJvdCBtYXQtY2FyZCBidXR0b24ubWF0LWJ1dHRvbi5tYXQtYnV0dG9uLWJhc2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBpbmhlcml0O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5saXN0LWJvdCAuaXRlbS1ib3QgbWF0LWNhcmQgYnV0dG9uIG1hdC1pY29uIHtcclxuICAgIG1hcmdpbjogMHB4IDBweCAwcHggMTBweDtcclxufVxyXG5cclxuLmxpc3QtYm90IC5pdGVtLWJvdCBtYXQtY2FyZCBidXR0b24ubWF0LWJ1dHRvbi5tYXQtYnV0dG9uLWJhc2Ugc3BhbiB7XHJcbiAgICBtYXJnaW46IGF1dG8gMTBweDtcclxufVxyXG5cclxuc3Bhbi5pdGVtLWJvdC1uYW1lLm1hdC1saW5lIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0LWxpc3QtaXRlbS1pbmZvIHtcclxuICAgIG1hcmdpbjogYXV0byA0MHB4O1xyXG59XHJcblxyXG5wLm1hdC1saW5le1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG5cclxuYnV0dG9uLm1hdC1tZW51LXRyaWdnZXIubWF0LWljb24tYnV0dG9uLm1hdC1idXR0b24tYmFzZSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XHJcbn1cclxuXHJcbnNwYW4ubGItZW1wdHkge1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xyXG59XHJcblxyXG5cclxuLmNhcmQtYWRkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvKiBtaW4td2lkdGg6IDE1MHB4OyAqL1xyXG4gICAgbWluLWhlaWdodDogMzEwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAzNDNweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCBsaWdodGdyZXk7XHJcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNhcmQtYWRkIG1hdC1pY29uIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BotsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bots',
          templateUrl: './bots.component.html',
          styleUrls: ['./bots.component.css']
        }]
      }], function () {
        return [{
          type: src_app_shared_services_bots_service__WEBPACK_IMPORTED_MODULE_3__["BotService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/customer/customer-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/customer/customer-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: CustomerRoutingModule */

  /***/
  function srcAppCustomerCustomerRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerRoutingModule", function () {
      return CustomerRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _customer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./customer.component */
    "./src/app/customer/customer.component.ts");
    /* harmony import */


    var _bots_bots_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./bots/bots.component */
    "./src/app/customer/bots/bots.component.ts");
    /* harmony import */


    var _shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/guards/auth-guard.service */
    "./src/app/shared/guards/auth-guard.service.ts"); // import { OverviewComponent } from './overview/overview.component';
    // import { ProfilesComponent } from './profiles/profiles.component';
    // import { SupportsComponent } from './supports/supports.component';
    // import { GuidesComponent } from './guides/guides.component';


    var routes = [{
      path: '',
      component: _customer_component__WEBPACK_IMPORTED_MODULE_2__["CustomerComponent"],
      children: [{
        path: '',
        component: _bots_bots_component__WEBPACK_IMPORTED_MODULE_3__["BotsComponent"]
      }]
    }, {
      path: 'bots',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | bot-bot-module */
        "bot-bot-module").then(__webpack_require__.bind(null,
        /*! ../bot/bot.module */
        "./src/app/bot/bot.module.ts")).then(function (m) {
          return m.BotModule;
        });
      },
      canActivate: [_shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]]
    }, {
      path: '**',
      redirectTo: ''
    }];

    var CustomerRoutingModule = function CustomerRoutingModule() {
      _classCallCheck(this, CustomerRoutingModule);
    };

    CustomerRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CustomerRoutingModule
    });
    CustomerRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CustomerRoutingModule_Factory(t) {
        return new (t || CustomerRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CustomerRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/customer/customer.component.ts":
  /*!************************************************!*\
    !*** ./src/app/customer/customer.component.ts ***!
    \************************************************/

  /*! exports provided: CustomerComponent */

  /***/
  function srcAppCustomerCustomerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerComponent", function () {
      return CustomerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_guards_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/guards/auth.service */
    "./src/app/shared/guards/auth.service.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");

    function CustomerComponent_button_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "autorenew");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var CustomerComponent = /*#__PURE__*/function () {
      function CustomerComponent(router, authService) {
        var _this55 = this;

        _classCallCheck(this, CustomerComponent);

        this.router = router;
        this.authService = authService;
        this.loading = true; // set screenWidth on page load

        this.screenWidth = window.innerWidth;

        window.onresize = function () {
          // set screenWidth on screen size change
          _this55.screenWidth = window.innerWidth;
        };

        router.events.subscribe(function (event) {
          _this55.navigationInterceptor(event);
        });
      }

      _createClass(CustomerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logout",
        value: function logout() {
          this.authService.logOut();
        } // Shows and hides the loading spinner during RouterEvent changes

      }, {
        key: "navigationInterceptor",
        value: function navigationInterceptor(event) {
          var _this56 = this;

          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
            this.loading = true;
          }

          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
            setTimeout(function () {
              _this56.loading = false;
            }, 500);
          }

          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"]) {
            this.loading = false;
          }

          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
            this.loading = false;
          }
        }
      }]);

      return CustomerComponent;
    }();

    CustomerComponent.ɵfac = function CustomerComponent_Factory(t) {
      return new (t || CustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_guards_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    CustomerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CustomerComponent,
      selectors: [["app-customer"]],
      decls: 38,
      vars: 2,
      consts: [["color", "primary"], ["mat-icon-button", "", "aria-label", "menu"], [1, "lb-logo"], [1, "bar-right"], ["mat-icon-button", "", 4, "ngIf"], ["mat-icon-button", ""], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["notification", "matMenu"], ["mat-menu-item", "", "disabled", ""], ["mat-menu-item", "", 3, "click"], [1, "customers-page"], [1, "loading"], [1, "sysnc"]],
      template: function CustomerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "notes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "AI - CHATCARE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CustomerComponent_button_7_Template, 3, 0, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "help");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "notifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "more_vert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-menu", null, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "account_box");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "T\xE0i kho\u1EA3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "supervisor_account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Qu\u1EA3n l\xFD ng\u01B0\u1EDDi d\xF9ng");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerComponent_Template_button_click_29_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "power_settings_new");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u0110\u0103ng xu\u1EA5t");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-sidenav-container", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-sidenav-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuItem"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".mat-toolbar.mat-primary[_ngcontent-%COMP%] {\r\n    background: #1A73E8;\r\n    color: #fff;\r\n    border-bottom: 0;\r\n    box-shadow: 0 3px 4px 0 rgba(0,0,0,.2), 0 3px 3px -2px rgba(0,0,0,.14), 0 1px 8px 0 rgba(0,0,0,.12);\r\n    height: 48px;\r\n}\r\n\r\n.lb-logo[_ngcontent-%COMP%]{\r\n    font-weight: 400;\r\n    font-size: large;\r\n    font-family: 'Roboto',sans-serif;\r\n}\r\n\r\nspan.title-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    font-weight: 400;\r\n    font-size: medium;\r\n    margin-top: 10px;\r\n}\r\n\r\n.mat-sidenav[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    width: 220px;\r\n    background-color: #FAFAFA;\r\n    margin-right: -220px;\r\n}\r\n\r\nmat-nav-list.mat-nav-list.mat-list-base[_ngcontent-%COMP%] {\r\n    height: Calc(100% - 48px);\r\n    overflow: auto;\r\n   \r\n}\r\n\r\n.mat-drawer-container[_ngcontent-%COMP%] {\r\n    height: calc(100% - 48px);\r\n    background: #efedea;\r\n}\r\n\r\n.mat-sidenav[_ngcontent-%COMP%]   .mat-toolbar.mat-toolbar.mat-toolbar-single-row[_ngcontent-%COMP%] {\r\n    background: #fafafa;\r\n    flex-shrink: 0;\r\n    height: 48px;\r\n    padding: 0;\r\n    border-bottom: 1px solid #dcd5d5;\r\n    outline: none;\r\n    padding-left: 20px;\r\n    text-decoration: none;\r\n}\r\n\r\nspan.title-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{\r\n    color: rgb(29, 28, 28);\r\n    height: 32px;\r\n    width: 32px;\r\n    font-size: xx-large;\r\n    margin: auto 5px auto 0;\r\n}\r\n\r\n.customers-page[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\r\n    margin: 0px 8px 0px 0px;\r\n}\r\n\r\n.customers-page[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    box-sizing: border-box;\r\n    padding: 0 16px;\r\n    position: relative;\r\n    \r\n    padding: 0 8px;\r\n    font-size: 13px;\r\n    font-weight: 400;\r\n}\r\n\r\n.bar-right[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    padding-right: 8px;\r\n    width: 100%;\r\n}\r\n\r\n.bar-right[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n}\r\n\r\nmat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: #333333;\r\n    background-color: rgba(129, 130, 131, 0.16);\r\n\r\n  }\r\n\r\nmat-nav-list[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n    color: #3367d6;\r\n    background-color: rgba(161,194,250,.16);\r\n  }\r\n\r\n.mat-progress-bar[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    height: 3px;\r\n    overflow: hidden;\r\n    position: relative;\r\n    transition: opacity 250ms linear;\r\n    width: 100%;\r\n}\r\n\r\n.sysnc[_ngcontent-%COMP%] {\r\n    -webkit-animation:spin 3s linear infinite;\r\n    animation:spin 3s linear infinite;\r\n}\r\n\r\n@-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }\r\n\r\n@keyframes spin { 100% { transform:rotate(360deg); } }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXIvY3VzdG9tZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG1HQUFtRztJQUNuRyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYzs7QUFFbEI7O0FBR0E7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxZQUFZO0lBQ1osVUFBVTtJQUNWLGdDQUFnQztJQUNoQyxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFHQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBR0E7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBR0E7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUlFO0lBQ0UsY0FBYztJQUNkLDJDQUEyQzs7RUFFN0M7O0FBQ0E7SUFDRSxjQUFjO0lBQ2QsdUNBQXVDO0VBQ3pDOztBQUdBO0lBQ0UsYUFBYTtJQUNiLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyxXQUFXO0FBQ2Y7O0FBSUE7SUFDSSx5Q0FBeUM7SUFFekMsaUNBQWlDO0FBQ3JDOztBQUVBLDBCQUEwQixPQUFPLGlDQUFpQyxFQUFFLEVBQUU7O0FBQ3RFLGtCQUFrQixPQUEwQyx3QkFBd0IsRUFBRSxFQUFFIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tZXIvY3VzdG9tZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMUE3M0U4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNHB4IDAgcmdiYSgwLDAsMCwuMiksIDAgM3B4IDNweCAtMnB4IHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggOHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG59XHJcblxyXG4ubGItbG9nb3tcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbnNwYW4udGl0bGUtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ubWF0LXNpZGVuYXZ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMjIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMjIwcHg7XHJcbn1cclxuXHJcbm1hdC1uYXYtbGlzdC5tYXQtbmF2LWxpc3QubWF0LWxpc3QtYmFzZSB7XHJcbiAgICBoZWlnaHQ6IENhbGMoMTAwJSAtIDQ4cHgpO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgIFxyXG59XHJcblxyXG5cclxuLm1hdC1kcmF3ZXItY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNDhweCk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZGVhO1xyXG59XHJcblxyXG4ubWF0LXNpZGVuYXYgLm1hdC10b29sYmFyLm1hdC10b29sYmFyLm1hdC10b29sYmFyLXNpbmdsZS1yb3cge1xyXG4gICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGNkNWQ1O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuXHJcbnNwYW4udGl0bGUtaGVhZGVyIG1hdC1pY29ue1xyXG4gICAgY29sb3I6IHJnYigyOSwgMjgsIDI4KTtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgIG1hcmdpbjogYXV0byA1cHggYXV0byAwO1xyXG59XHJcblxyXG5cclxuLmN1c3RvbWVycy1wYWdlIC5tYXQtbGlzdC1pdGVtIC5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICBtYXJnaW46IDBweCA4cHggMHB4IDBweDtcclxufVxyXG5cclxuLmN1c3RvbWVycy1wYWdlIC5tYXQtbGlzdC1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvKiBoZWlnaHQ6IGluaGVyaXQ7ICovXHJcbiAgICBwYWRkaW5nOiAwIDhweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcblxyXG4uYmFyLXJpZ2h0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5iYXItcmlnaHQgLm1hdGVyaWFsLWljb25ze1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbiAgbWF0LW5hdi1saXN0IGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOSwgMTMwLCAxMzEsIDAuMTYpO1xyXG5cclxuICB9XHJcbiAgbWF0LW5hdi1saXN0IGEuYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjMzM2N2Q2O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjEsMTk0LDI1MCwuMTYpO1xyXG4gIH1cclxuICBcclxuXHJcbiAgLm1hdC1wcm9ncmVzcy1iYXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMjUwbXMgbGluZWFyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG5cclxuLnN5c25jIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOnNwaW4gM3MgbGluZWFyIGluZmluaXRlO1xyXG4gICAgLW1vei1hbmltYXRpb246c3BpbiAzcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb246c3BpbiAzcyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIHNwaW4geyAxMDAlIHsgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4geyAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cclxuQGtleWZyYW1lcyBzcGluIHsgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpOyB9IH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-customer',
          templateUrl: './customer.component.html',
          styleUrls: ['./customer.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _shared_guards_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/customer/customer.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/customer/customer.module.ts ***!
    \*********************************************/

  /*! exports provided: CustomerModule */

  /***/
  function srcAppCustomerCustomerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerModule", function () {
      return CustomerModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _customer_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./customer-routing.module */
    "./src/app/customer/customer-routing.module.ts");
    /* harmony import */


    var _customer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./customer.component */
    "./src/app/customer/customer.component.ts");
    /* harmony import */


    var _bots_bots_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./bots/bots.component */
    "./src/app/customer/bots/bots.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _overview_overview_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./overview/overview.component */
    "./src/app/customer/overview/overview.component.ts");
    /* harmony import */


    var _supports_supports_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./supports/supports.component */
    "./src/app/customer/supports/supports.component.ts");
    /* harmony import */


    var _profiles_profiles_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./profiles/profiles.component */
    "./src/app/customer/profiles/profiles.component.ts");
    /* harmony import */


    var _guides_guides_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./guides/guides.component */
    "./src/app/customer/guides/guides.component.ts");
    /* harmony import */


    var _dialog_bot_create_bot_create_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./dialog/bot-create/bot-create.component */
    "./src/app/customer/dialog/bot-create/bot-create.component.ts");
    /* harmony import */


    var _dialog_bot_remove_bot_remove_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./dialog/bot-remove/bot-remove.component */
    "./src/app/customer/dialog/bot-remove/bot-remove.component.ts");
    /* harmony import */


    var _shared_services_bots_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ../shared/services/bots.service */
    "./src/app/shared/services/bots.service.ts");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _shared_guards_auth_interceptor__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ../shared/guards/auth.interceptor */
    "./src/app/shared/guards/auth.interceptor.ts");

    var CustomerModule = function CustomerModule() {
      _classCallCheck(this, CustomerModule);
    };

    CustomerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CustomerModule
    });
    CustomerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CustomerModule_Factory(t) {
        return new (t || CustomerModule)();
      },
      providers: [_shared_services_bots_service__WEBPACK_IMPORTED_MODULE_24__["BotService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
        useClass: _shared_guards_auth_interceptor__WEBPACK_IMPORTED_MODULE_26__["AuthInterceptor"],
        multi: true
      }],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _customer_routing_module__WEBPACK_IMPORTED_MODULE_4__["CustomerRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MatSelectModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CustomerModule, {
        declarations: [_customer_component__WEBPACK_IMPORTED_MODULE_5__["CustomerComponent"], _bots_bots_component__WEBPACK_IMPORTED_MODULE_6__["BotsComponent"], _overview_overview_component__WEBPACK_IMPORTED_MODULE_18__["OverviewComponent"], _supports_supports_component__WEBPACK_IMPORTED_MODULE_19__["SupportsComponent"], _profiles_profiles_component__WEBPACK_IMPORTED_MODULE_20__["ProfilesComponent"], _guides_guides_component__WEBPACK_IMPORTED_MODULE_21__["GuidesComponent"], _dialog_bot_create_bot_create_component__WEBPACK_IMPORTED_MODULE_22__["BotCreateComponent"], _dialog_bot_remove_bot_remove_component__WEBPACK_IMPORTED_MODULE_23__["BotRemoveComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _customer_routing_module__WEBPACK_IMPORTED_MODULE_4__["CustomerRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MatSelectModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_customer_component__WEBPACK_IMPORTED_MODULE_5__["CustomerComponent"], _bots_bots_component__WEBPACK_IMPORTED_MODULE_6__["BotsComponent"], _overview_overview_component__WEBPACK_IMPORTED_MODULE_18__["OverviewComponent"], _supports_supports_component__WEBPACK_IMPORTED_MODULE_19__["SupportsComponent"], _profiles_profiles_component__WEBPACK_IMPORTED_MODULE_20__["ProfilesComponent"], _guides_guides_component__WEBPACK_IMPORTED_MODULE_21__["GuidesComponent"], _dialog_bot_create_bot_create_component__WEBPACK_IMPORTED_MODULE_22__["BotCreateComponent"], _dialog_bot_remove_bot_remove_component__WEBPACK_IMPORTED_MODULE_23__["BotRemoveComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _customer_routing_module__WEBPACK_IMPORTED_MODULE_4__["CustomerRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MatSelectModule"]],
          providers: [_shared_services_bots_service__WEBPACK_IMPORTED_MODULE_24__["BotService"], {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: _shared_guards_auth_interceptor__WEBPACK_IMPORTED_MODULE_26__["AuthInterceptor"],
            multi: true
          }],
          entryComponents: [_dialog_bot_create_bot_create_component__WEBPACK_IMPORTED_MODULE_22__["BotCreateComponent"], _dialog_bot_remove_bot_remove_component__WEBPACK_IMPORTED_MODULE_23__["BotRemoveComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/customer/dialog/bot-create/bot-create.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/customer/dialog/bot-create/bot-create.component.ts ***!
    \********************************************************************/

  /*! exports provided: BotCreateComponent */

  /***/
  function srcAppCustomerDialogBotCreateBotCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BotCreateComponent", function () {
      return BotCreateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_models_bots_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/models/bots.model */
    "./src/app/shared/models/bots.model.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function BotCreateComponent_option_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var la_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", la_r5.code);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](la_r5.name);
      }
    }

    var BotCreateComponent = /*#__PURE__*/function () {
      function BotCreateComponent( //private botServer: BotService,
      //private toastr: ToastrService,
      dialogRef, data) {
        _classCallCheck(this, BotCreateComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.langs = [{
          code: 'en',
          name: 'Tiếng Anh'
        }, {
          code: 'vi',
          name: 'Tiếng Việt'
        }];
        this.model = new src_app_shared_models_bots_model__WEBPACK_IMPORTED_MODULE_1__["Bot"](null, null, null, this.langs[0].code, null, null, true);
      }

      _createClass(BotCreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "newBot",
        value: function newBot(f) {
          this.dialogRef.close({
            action: 1,
            data: f.value
          });
        }
      }]);

      return BotCreateComponent;
    }();

    BotCreateComponent.ɵfac = function BotCreateComponent_Factory(t) {
      return new (t || BotCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]));
    };

    BotCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BotCreateComponent,
      selectors: [["app-bot-create"]],
      decls: 28,
      vars: 7,
      consts: [["mat-dialog-title", "", 1, "lb-header"], [1, "mat-typography"], ["botForm", "ngForm"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "required", "", "name", "name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], [1, "alert", "alert-danger", 3, "hidden"], ["for", "lang"], ["id", "lang", "required", "", "name", "lang", 1, "form-control", 3, "ngModel", "ngModelChange"], ["lang", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "desc"], ["type", "text", "id", "desc", "name", "desc", 1, "form-control", 3, "ngModel", "ngModelChange"], ["desc", "ngModel"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-button", "", "color", "primary", 3, "disabled", "mat-dialog-close", "click"], [3, "value"]],
      template: function BotCreateComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Th\xEAm m\u1EDBi Bot");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", null, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "T\xEAn bot");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BotCreateComponent_Template_input_ngModelChange_8_listener($event) {
            return ctx.model.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " T\xEAn bot kh\xF4ng \u0111\u01B0\u1EE3c tr\u1ED1ng ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Ng\xF4n ng\u1EEF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "select", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BotCreateComponent_Template_select_ngModelChange_15_listener($event) {
            return ctx.model.lang = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, BotCreateComponent_option_17_Template, 2, 2, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "M\xF4 t\u1EA3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "textarea", 13, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BotCreateComponent_Template_textarea_ngModelChange_21_listener($event) {
            return ctx.model.desc = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-dialog-actions", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "H\u1EE7y");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BotCreateComponent_Template_button_click_26_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            ctx.newBot(_r0);
            return _r0.reset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Th\xEAm m\u1EDBi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r1.valid || _r1.pristine);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.lang);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.langs);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.desc);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid)("mat-dialog-close", true);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]],
      styles: [".mat-dialog-title[_ngcontent-%COMP%] {\r\n    \r\n    \r\n    margin: -25px -24px 10px -24px;\r\n    display: grid;\r\n    background: #2375bb;\r\n    color: white;\r\n    padding: 10px 20px;\r\n}\r\n\r\n\r\n.alert.alert-danger[_ngcontent-%COMP%] {\r\n    margin: 5px 0px;\r\n    background: beige;\r\n}\r\n\r\n\r\nspan.lb-header[_ngcontent-%COMP%] {\r\n    font-size: initial;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXIvZGlhbG9nL2JvdC1jcmVhdGUvYm90LWNyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQiw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOzs7QUFHQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7OztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tZXIvZGlhbG9nL2JvdC1jcmVhdGUvYm90LWNyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1kaWFsb2ctdGl0bGUge1xyXG4gICAgLyogbWFyZ2luOiAwIDAgMjBweDsgKi9cclxuICAgIC8qIGRpc3BsYXk6IGJsb2NrOyAqL1xyXG4gICAgbWFyZ2luOiAtMjVweCAtMjRweCAxMHB4IC0yNHB4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGJhY2tncm91bmQ6ICMyMzc1YmI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbn1cclxuXHJcblxyXG4uYWxlcnQuYWxlcnQtZGFuZ2VyIHtcclxuICAgIG1hcmdpbjogNXB4IDBweDtcclxuICAgIGJhY2tncm91bmQ6IGJlaWdlO1xyXG59XHJcblxyXG5zcGFuLmxiLWhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IGluaXRpYWw7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BotCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bot-create',
          templateUrl: './bot-create.component.html',
          styleUrls: ['./bot-create.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/customer/dialog/bot-remove/bot-remove.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/customer/dialog/bot-remove/bot-remove.component.ts ***!
    \********************************************************************/

  /*! exports provided: BotRemoveComponent */

  /***/
  function srcAppCustomerDialogBotRemoveBotRemoveComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BotRemoveComponent", function () {
      return BotRemoveComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var BotRemoveComponent = /*#__PURE__*/function () {
      function BotRemoveComponent(dialogRef, data) {
        _classCallCheck(this, BotRemoveComponent);

        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(BotRemoveComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.currentBot = this.data.name;
        }
      }, {
        key: "removeBot",
        value: function removeBot() {
          this.dialogRef.close({
            action: 1,
            data: null
          });
        }
      }, {
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }]);

      return BotRemoveComponent;
    }();

    BotRemoveComponent.ɵfac = function BotRemoveComponent_Factory(t) {
      return new (t || BotRemoveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    BotRemoveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BotRemoveComponent,
      selectors: [["app-bot-remove"]],
      decls: 19,
      vars: 4,
      consts: [["mat-dialog-title", ""], [1, "mat-typography"], ["autocomplete", "off"], ["botForm1", "ngForm"], [2, "font-weight", "600", "font-size", "16px"], [1, "form-group"], ["type", "text", "id", "names", "required", "", "name", "names", "placeholder", "Nh\u1EADp t\xEAn bot hi\u1EC7n t\u1EA1i", 1, "form-control", 3, "ngModel", "ngModelChange"], ["names", "ngModel"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-button", "", "color", "warn", 3, "disabled", "mat-dialog-close", "click"]],
      template: function BotRemoveComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "X\xE1c nh\u1EADn x\xF3a Bot");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n x\xF3a bot: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "H\xE3y nh\u1EADp t\xEAn bot \u0111\u1EC3 x\xE1c nh\u1EADn X\xD3A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BotRemoveComponent_Template_input_ngModelChange_12_listener($event) {
            return ctx.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-dialog-actions", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "H\u1EE7y");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BotRemoveComponent_Template_button_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            ctx.removeBot();
            return _r0.reset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "X\xF3a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentBot);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid || ctx.name != ctx.currentBot)("mat-dialog-close", true);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]],
      styles: [".mat-dialog-title[_ngcontent-%COMP%] {\r\n    \r\n    \r\n    margin: -25px -24px 10px -24px;\r\n    display: grid;\r\n    background: #d64a4a;\r\n    color: white;\r\n    padding: 10px 20px;\r\n}\r\n\r\n\r\n.alert.alert-danger[_ngcontent-%COMP%] {\r\n    margin: 5px 0px;\r\n    background: beige;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXIvZGlhbG9nL2JvdC1yZW1vdmUvYm90LXJlbW92ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQiw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOzs7QUFHQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lci9kaWFsb2cvYm90LXJlbW92ZS9ib3QtcmVtb3ZlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWRpYWxvZy10aXRsZSB7XHJcbiAgICAvKiBtYXJnaW46IDAgMCAyMHB4OyAqL1xyXG4gICAgLyogZGlzcGxheTogYmxvY2s7ICovXHJcbiAgICBtYXJnaW46IC0yNXB4IC0yNHB4IDEwcHggLTI0cHg7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgYmFja2dyb3VuZDogI2Q2NGE0YTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxufVxyXG5cclxuXHJcbi5hbGVydC5hbGVydC1kYW5nZXIge1xyXG4gICAgbWFyZ2luOiA1cHggMHB4O1xyXG4gICAgYmFja2dyb3VuZDogYmVpZ2U7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BotRemoveComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bot-remove',
          templateUrl: './bot-remove.component.html',
          styleUrls: ['./bot-remove.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/customer/guides/guides.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/customer/guides/guides.component.ts ***!
    \*****************************************************/

  /*! exports provided: GuidesComponent */

  /***/
  function srcAppCustomerGuidesGuidesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GuidesComponent", function () {
      return GuidesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var GuidesComponent = /*#__PURE__*/function () {
      function GuidesComponent() {
        _classCallCheck(this, GuidesComponent);
      }

      _createClass(GuidesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GuidesComponent;
    }();

    GuidesComponent.ɵfac = function GuidesComponent_Factory(t) {
      return new (t || GuidesComponent)();
    };

    GuidesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GuidesComponent,
      selectors: [["app-guides"]],
      decls: 7,
      vars: 0,
      consts: [["mat-icon-button", "", "color", "primary", 1, "btn-back"], [1, "title-header"], [1, "page-content"]],
      template: function GuidesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "arrow_back_ios");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "H\u01AF\u1EDANG D\u1EAAN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 2);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]],
      styles: [".mat-toolbar.mat-toolbar.mat-toolbar-single-row[_ngcontent-%COMP%] {\r\n    background: white;\r\n    flex-shrink: 0;\r\n    height: 48px;\r\n    padding: 0;\r\n    border-bottom: 1px solid #dcd5d5;\r\n    outline: none;\r\n    padding-left: 16px;\r\n    text-decoration: none;\r\n}\r\n\r\n\r\n\r\nspan.title-header[_ngcontent-%COMP%] {\r\n    align-items: center;\r\n    display: flex;\r\n    height: 100%;\r\n    color: #000;\r\n    font-family: \"roboto\";\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    letter-spacing: normal;\r\n    line-height: 24px;\r\n    padding: 0px 30px 0px 0px;\r\n}\r\n\r\n.btn-back[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{\r\n    font-size: 16px;\r\n}\r\n\r\n.right-header[_ngcontent-%COMP%]{\r\n    align-items: center;\r\n    \r\n    flex: 1 1 auto;\r\n    height: 100%;\r\n}\r\n\r\n.func-header[_ngcontent-%COMP%] {\r\n    align-items: center;\r\n    display: flex;\r\n    height: 100%;\r\n}\r\n\r\n.func-header[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n}\r\n\r\n.page-content[_ngcontent-%COMP%] {\r\n    background: transparent;\r\n    height: Calc(100% - 48px);\r\n}\r\n\r\n.mat-button[_ngcontent-%COMP%] {\r\n    font-family: \"roboto\";\r\n    font-size: 13px;\r\n    font-weight: 500;\r\n    letter-spacing: normal;\r\n    line-height: 32px;\r\n    margin-right: 8px;\r\n    min-width: auto;\r\n    padding: 0 12px;\r\n    text-transform: uppercase;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXIvZ3VpZGVzL2d1aWRlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsWUFBWTtJQUNaLFVBQVU7SUFDVixnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7Ozs7Ozs7Ozs7OztHQVlHOztBQUNIO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztJQUNYLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjs7SUFFbkIsY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUdBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixlQUFlO0lBQ2YseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tZXIvZ3VpZGVzL2d1aWRlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5tYXQtdG9vbGJhci5tYXQtdG9vbGJhci5tYXQtdG9vbGJhci1zaW5nbGUtcm93IHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkY2Q1ZDU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4vKiBzcGFuLnRpdGxlLWhlYWRlcntcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBcInJvYm90b1wiO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBkaXNwbGF5OiBjb250ZW50cztcclxufSAqL1xyXG5zcGFuLnRpdGxlLWhlYWRlciB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFwicm9ib3RvXCI7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgcGFkZGluZzogMHB4IDMwcHggMHB4IDBweDtcclxufVxyXG4uYnRuLWJhY2sgLm1hdGVyaWFsLWljb25ze1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4ucmlnaHQtaGVhZGVye1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIFxyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5mdW5jLWhlYWRlciB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmZ1bmMtaGVhZGVyIC5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcblxyXG4ucGFnZS1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgaGVpZ2h0OiBDYWxjKDEwMCUgLSA0OHB4KTtcclxufVxyXG5cclxuLm1hdC1idXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6IFwicm9ib3RvXCI7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICBtaW4td2lkdGg6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAwIDEycHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuidesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-guides',
          templateUrl: './guides.component.html',
          styleUrls: ['./guides.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/customer/overview/overview.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/customer/overview/overview.component.ts ***!
    \*********************************************************/

  /*! exports provided: OverviewComponent */

  /***/
  function srcAppCustomerOverviewOverviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverviewComponent", function () {
      return OverviewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var OverviewComponent = /*#__PURE__*/function () {
      function OverviewComponent() {
        _classCallCheck(this, OverviewComponent);
      }

      _createClass(OverviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OverviewComponent;
    }();

    OverviewComponent.ɵfac = function OverviewComponent_Factory(t) {
      return new (t || OverviewComponent)();
    };

    OverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OverviewComponent,
      selectors: [["app-overview"]],
      decls: 7,
      vars: 0,
      consts: [["mat-icon-button", "", "color", "primary", 1, "btn-back"], [1, "title-header"], [1, "page-content"]],
      template: function OverviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "arrow_back_ios");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "DASHBOARD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 2);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]],
      styles: [".mat-toolbar.mat-toolbar.mat-toolbar-single-row[_ngcontent-%COMP%] {\r\n    background: white;\r\n    flex-shrink: 0;\r\n    height: 48px;\r\n    padding: 0;\r\n    border-bottom: 1px solid #dcd5d5;\r\n    outline: none;\r\n    padding-left: 16px;\r\n    text-decoration: none;\r\n}\r\n\r\nspan.title-header[_ngcontent-%COMP%]{\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    \r\n    color: #000;\r\n    font-family: \"roboto\";\r\n    font-size: 18px;\r\n    font-weight: 400;\r\n    letter-spacing: normal;\r\n    line-height: 24px;\r\n    flex-direction: row;\r\n    display: contents;\r\n}\r\n\r\n.btn-back[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{\r\n    font-size: 16px;\r\n}\r\n\r\n.page-content[_ngcontent-%COMP%] {\r\n    background: transparent;\r\n    height: Calc(100% - 48px);\r\n    overflow-y: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXIvb3ZlcnZpZXcvb3ZlcnZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLFlBQVk7SUFDWixVQUFVO0lBQ1YsZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lci9vdmVydmlldy9vdmVydmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5tYXQtdG9vbGJhci5tYXQtdG9vbGJhci5tYXQtdG9vbGJhci1zaW5nbGUtcm93IHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkY2Q1ZDU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5zcGFuLnRpdGxlLWhlYWRlcntcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFwicm9ib3RvXCI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG59XHJcbi5idG4tYmFjayAubWF0ZXJpYWwtaWNvbnN7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5wYWdlLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBoZWlnaHQ6IENhbGMoMTAwJSAtIDQ4cHgpO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-overview',
          templateUrl: './overview.component.html',
          styleUrls: ['./overview.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/customer/profiles/profiles.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/customer/profiles/profiles.component.ts ***!
    \*********************************************************/

  /*! exports provided: ProfilesComponent */

  /***/
  function srcAppCustomerProfilesProfilesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilesComponent", function () {
      return ProfilesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var ProfilesComponent = /*#__PURE__*/function () {
      function ProfilesComponent() {
        _classCallCheck(this, ProfilesComponent);
      }

      _createClass(ProfilesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProfilesComponent;
    }();

    ProfilesComponent.ɵfac = function ProfilesComponent_Factory(t) {
      return new (t || ProfilesComponent)();
    };

    ProfilesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfilesComponent,
      selectors: [["app-profiles"]],
      decls: 7,
      vars: 0,
      consts: [["mat-icon-button", "", "color", "primary", 1, "btn-back"], [1, "title-header"], [1, "page-content"]],
      template: function ProfilesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "arrow_back_ios");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "PROFILES");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 2);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]],
      styles: [".mat-toolbar.mat-toolbar.mat-toolbar-single-row[_ngcontent-%COMP%] {\r\n    background: white;\r\n    flex-shrink: 0;\r\n    height: 48px;\r\n    padding: 0;\r\n    border-bottom: 1px solid #dcd5d5;\r\n    outline: none;\r\n    padding-left: 16px;\r\n    text-decoration: none;\r\n}\r\n\r\n\r\n\r\nspan.title-header[_ngcontent-%COMP%] {\r\n    align-items: center;\r\n    display: flex;\r\n    height: 100%;\r\n    color: #000;\r\n    font-family: \"roboto\";\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    letter-spacing: normal;\r\n    line-height: 24px;\r\n    padding: 0px 30px 0px 0px;\r\n}\r\n\r\n.btn-back[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{\r\n    font-size: 16px;\r\n}\r\n\r\n.right-header[_ngcontent-%COMP%]{\r\n    align-items: center;\r\n    \r\n    flex: 1 1 auto;\r\n    height: 100%;\r\n}\r\n\r\n.func-header[_ngcontent-%COMP%] {\r\n    align-items: center;\r\n    display: flex;\r\n    height: 100%;\r\n}\r\n\r\n.func-header[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n}\r\n\r\n.page-content[_ngcontent-%COMP%] {\r\n    background: transparent;\r\n    height: Calc(100% - 48px);\r\n}\r\n\r\n.mat-button[_ngcontent-%COMP%] {\r\n    font-family: \"roboto\";\r\n    font-size: 13px;\r\n    font-weight: 500;\r\n    letter-spacing: normal;\r\n    line-height: 32px;\r\n    margin-right: 8px;\r\n    min-width: auto;\r\n    padding: 0 12px;\r\n    text-transform: uppercase;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXIvcHJvZmlsZXMvcHJvZmlsZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLFlBQVk7SUFDWixVQUFVO0lBQ1YsZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBOzs7Ozs7Ozs7Ozs7R0FZRzs7QUFDSDtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7O0lBRW5CLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFHQTtJQUNJLHVCQUF1QjtJQUN2Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZUFBZTtJQUNmLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL3Byb2ZpbGVzL3Byb2ZpbGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm1hdC10b29sYmFyLm1hdC10b29sYmFyLm1hdC10b29sYmFyLXNpbmdsZS1yb3cge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RjZDVkNTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi8qIHNwYW4udGl0bGUtaGVhZGVye1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFwicm9ib3RvXCI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG59ICovXHJcbnNwYW4udGl0bGUtaGVhZGVyIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LWZhbWlseTogXCJyb2JvdG9cIjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMzBweCAwcHggMHB4O1xyXG59XHJcbi5idG4tYmFjayAubWF0ZXJpYWwtaWNvbnN7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5yaWdodC1oZWFkZXJ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgXHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmZ1bmMtaGVhZGVyIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZnVuYy1oZWFkZXIgLm1hdGVyaWFsLWljb25zIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5cclxuXHJcbi5wYWdlLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBoZWlnaHQ6IENhbGMoMTAwJSAtIDQ4cHgpO1xyXG59XHJcblxyXG4ubWF0LWJ1dHRvbiB7XHJcbiAgICBmb250LWZhbWlseTogXCJyb2JvdG9cIjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIG1pbi13aWR0aDogYXV0bztcclxuICAgIHBhZGRpbmc6IDAgMTJweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfilesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-profiles',
          templateUrl: './profiles.component.html',
          styleUrls: ['./profiles.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/customer/supports/supports.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/customer/supports/supports.component.ts ***!
    \*********************************************************/

  /*! exports provided: SupportsComponent */

  /***/
  function srcAppCustomerSupportsSupportsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SupportsComponent", function () {
      return SupportsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var SupportsComponent = /*#__PURE__*/function () {
      function SupportsComponent() {
        _classCallCheck(this, SupportsComponent);
      }

      _createClass(SupportsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SupportsComponent;
    }();

    SupportsComponent.ɵfac = function SupportsComponent_Factory(t) {
      return new (t || SupportsComponent)();
    };

    SupportsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SupportsComponent,
      selectors: [["app-supports"]],
      decls: 7,
      vars: 0,
      consts: [["mat-icon-button", "", "color", "primary", 1, "btn-back"], [1, "title-header"], [1, "page-content"]],
      template: function SupportsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "arrow_back_ios");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "TR\u1EE2 GI\xDAP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 2);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]],
      styles: [".mat-toolbar.mat-toolbar.mat-toolbar-single-row[_ngcontent-%COMP%] {\r\n    background: white;\r\n    flex-shrink: 0;\r\n    height: 48px;\r\n    padding: 0;\r\n    border-bottom: 1px solid #dcd5d5;\r\n    outline: none;\r\n    padding-left: 16px;\r\n    text-decoration: none;\r\n}\r\n\r\n\r\n\r\nspan.title-header[_ngcontent-%COMP%] {\r\n    align-items: center;\r\n    display: flex;\r\n    height: 100%;\r\n    color: #000;\r\n    font-family: \"roboto\";\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    letter-spacing: normal;\r\n    line-height: 24px;\r\n    padding: 0px 30px 0px 0px;\r\n}\r\n\r\n.btn-back[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{\r\n    font-size: 16px;\r\n}\r\n\r\n.right-header[_ngcontent-%COMP%]{\r\n    align-items: center;\r\n    \r\n    flex: 1 1 auto;\r\n    height: 100%;\r\n}\r\n\r\n.func-header[_ngcontent-%COMP%] {\r\n    align-items: center;\r\n    display: flex;\r\n    height: 100%;\r\n}\r\n\r\n.func-header[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n}\r\n\r\n.page-content[_ngcontent-%COMP%] {\r\n    background: transparent;\r\n    height: Calc(100% - 48px);\r\n}\r\n\r\n.mat-button[_ngcontent-%COMP%] {\r\n    font-family: \"roboto\";\r\n    font-size: 13px;\r\n    font-weight: 500;\r\n    letter-spacing: normal;\r\n    line-height: 32px;\r\n    margin-right: 8px;\r\n    min-width: auto;\r\n    padding: 0 12px;\r\n    text-transform: uppercase;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXIvc3VwcG9ydHMvc3VwcG9ydHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLFlBQVk7SUFDWixVQUFVO0lBQ1YsZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBOzs7Ozs7Ozs7Ozs7R0FZRzs7QUFDSDtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7O0lBRW5CLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFHQTtJQUNJLHVCQUF1QjtJQUN2Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZUFBZTtJQUNmLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL3N1cHBvcnRzL3N1cHBvcnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm1hdC10b29sYmFyLm1hdC10b29sYmFyLm1hdC10b29sYmFyLXNpbmdsZS1yb3cge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RjZDVkNTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi8qIHNwYW4udGl0bGUtaGVhZGVye1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFwicm9ib3RvXCI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG59ICovXHJcbnNwYW4udGl0bGUtaGVhZGVyIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LWZhbWlseTogXCJyb2JvdG9cIjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMzBweCAwcHggMHB4O1xyXG59XHJcbi5idG4tYmFjayAubWF0ZXJpYWwtaWNvbnN7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5yaWdodC1oZWFkZXJ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgXHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmZ1bmMtaGVhZGVyIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZnVuYy1oZWFkZXIgLm1hdGVyaWFsLWljb25zIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5cclxuXHJcbi5wYWdlLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBoZWlnaHQ6IENhbGMoMTAwJSAtIDQ4cHgpO1xyXG59XHJcblxyXG4ubWF0LWJ1dHRvbiB7XHJcbiAgICBmb250LWZhbWlseTogXCJyb2JvdG9cIjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIG1pbi13aWR0aDogYXV0bztcclxuICAgIHBhZGRpbmc6IDAgMTJweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SupportsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-supports',
          templateUrl: './supports.component.html',
          styleUrls: ['./supports.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/models/bots.model.ts":
  /*!*********************************************!*\
    !*** ./src/app/shared/models/bots.model.ts ***!
    \*********************************************/

  /*! exports provided: Bot */

  /***/
  function srcAppSharedModelsBotsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Bot", function () {
      return Bot;
    });

    var Bot = function Bot(_Id, name, desc, lang, appId, appToken, isActive) {
      _classCallCheck(this, Bot);

      this._Id = _Id;
      this.name = name;
      this.desc = desc;
      this.lang = lang;
      this.appId = appId;
      this.appToken = appToken;
      this.isActive = isActive;
    };
    /***/

  },

  /***/
  "./src/app/shared/services/bots.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/services/bots.service.ts ***!
    \*************************************************/

  /*! exports provided: BotService */

  /***/
  function srcAppSharedServicesBotsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BotService", function () {
      return BotService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };

    var BotService = function BotService(http) {
      var _this57 = this;

      _classCallCheck(this, BotService);

      this.http = http;
      this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + '/api/';

      this.getAllBots = function () {
        return _this57.http.get(_this57.baseUrl + 'Ai/Bots');
      };

      this.getById = function (botId) {
        return _this57.http.get(_this57.baseUrl + 'Ai/Bots/' + botId);
      };

      this.createBots = function (data) {
        return _this57.http.post(_this57.baseUrl + 'Ai/Bots', data, httpOptions);
      };

      this.removeBot = function (botId) {
        return _this57.http["delete"](_this57.baseUrl + 'Ai/Bots/' + botId);
      };
    };

    BotService.ɵfac = function BotService_Factory(t) {
      return new (t || BotService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    BotService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BotService,
      factory: BotService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BotService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=customer-customer-module-es5.js.map