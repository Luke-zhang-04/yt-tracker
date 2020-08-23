(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["trackerUI"] = factory();
	else
		root["trackerUI"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const destagnate_1 = __importStar(__webpack_require__(1));
const dateplus_1 = __importDefault(__webpack_require__(8));
class Dashboard extends destagnate_1.default {
    constructor(parent) {
        super(parent);
        this.componentDidMount = () => {
            this._setTime();
            chrome.storage.onChanged.addListener(() => {
                this._setTime();
            });
        };
        /**
         * Render function
         * @returns renered content
         */
        this.render = () => (destagnate_1.createElement("div", null, this.state.ytTime === undefined
            ? "Loading..."
            : JSON.stringify(dateplus_1.default.msToHrs(this.state.ytTime), null, 2)));
        /**
         * Get time from storage and display set it to state
         * @returns void
         */
        this._setTime = () => chrome.storage.sync.get((items) => {
            this.setState({ ytTime: Number(items.ytTime) });
        });
        this.state = {
            ytTime: undefined,
        };
    }
}
const root = document.getElementById("root");
if (root) {
    const dash = new Dashboard(root);
    dash.mount();
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.6.1
 * @exports DeStagnate main destagnate class
 * @file main file for destagnate
 * @preserve
 */
/* eslint-disable max-lines */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = exports.createRef = exports.createElementNS = exports.createElement = exports.createDSComponent = void 0;
const _preset_1 = __importDefault(__webpack_require__(2));
const createDSComponent_1 = __importDefault(__webpack_require__(4));
const createElement_1 = __importDefault(__webpack_require__(5));
const createElementNS_1 = __importDefault(__webpack_require__(6));
const createRef_1 = __importDefault(__webpack_require__(7));
/**
 * DeStagnate
 * @classdesc A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @class
 * @namespace
 * @abstract
 */
class DeStagnate extends _preset_1.default {
    /**
     * Construct class component
     * @public
     * @constructor
     * @param {HTMLElement} parent - parent of this element
     * @param {undefined | Object.<string, string | number>} props - element properties; works like React Props
     * @param {boolean} shouldSkipParentCheck - warn or throw error if parent element already has children
     */
    constructor(parent, props, shouldSkipParentCheck = false) {
        super();
        this.props = props;
        /**
         * If strict mode should be used. True by default
         * @private
         * @instance
         * @type {boolean}
         */
        this._strict = true;
        /**
         * State of component. Works similar React State
         * @type {undefined | Object.<string, unknown>}
         * @private
         * @instance
         */
        this._state = {};
        /**
         * If initial state was set in initializer
         * Do not throw error with direct state setting
         * @type {boolean}
         * @private
         * @instance
         */
        this._didSetInitialState = false;
        /**
         * If component is mounted
         * @type {boolean}
         * @private
         * @instance
         */
        this._didMount = false;
        /**
         * What to call before component update (state mutation)
         * @public
         * @instance
         * @param {Props} prevProps - previous props
         * @param {State} prevState - previous state
         * @returns {void} void
         */
        this.getSnapshotBeforeUpdate = (prevProps, prevState) => [prevProps, prevState];
        /**
         * Turn on strict mode
         * @public
         * @instance
         * @returns {void} void
         */
        this.useStrict = () => {
            this._strict = true;
        };
        /**
         * Turn off strict mode
         * @public
         * @instance
         * @returns {void} void
         */
        this.disableStrict = () => {
            this._strict = false;
        };
        /**
         * Forces a component to update
         * Follows the same component updating procedure as setState without modifying state
         * @public
         * @instance
         * @readonly
         * @returns {void | Error} returns error if error is thrown
         */
        this.forceUpdate = () => {
            try {
                this.componentDidUpdate();
                if (this._parent === undefined) {
                    throw new Error("Parent is not defined. Set parent with the parent setter or set it during mounting.");
                }
                this.getSnapshotBeforeUpdate(Object.assign({}, this.props), Object.assign({}, this.state));
                this._update(this._execRender());
            }
            catch (err) /* istanbul ignore next */ {
                this.componentDidCatch(err);
                return err;
            }
        };
        /**
         * Sets state
         * @public
         * @instance
         * @readonly
         * @param {Partial<State>} obj - state to set
         * @returns {void | Error} void
         */
        this.setState = (obj) => {
            try {
                this.componentWillUpdate();
                if (this._parent === undefined) {
                    throw new Error("Parent is not defined. Set parent with the parent setter or set it during mounting.");
                }
                if (this._strict) {
                    this._checkKeys(obj);
                }
                this.getSnapshotBeforeUpdate(Object.assign({}, this.props), Object.assign({}, this.state));
                Object.assign(this._state, obj);
                const renderedContent = this.shouldComponentUpdate()
                    ? this._execRender()
                    : undefined;
                this._update(renderedContent);
            }
            catch (err) /* istanbul ignore next */ {
                this.componentDidCatch(err);
                return err;
            }
        };
        /* eslint-disable @typescript-eslint/member-ordering, max-len */
        /**
         * Initial mounting to be manually called
         * @public
         * @instance
         * @readonly
         * @param {HTMLElement | undefined} parent - parent element to mount with; optional
         * @returns {HTMLElement | Array.<HTMLElement> | error} - result of append child to parent element
         */
        this.mountComponent = (parent) => {
            try {
                if (parent !== undefined) {
                    this.parent = parent;
                }
                if (this._parent === undefined) {
                    throw new Error("Parent is not defined. Set parent with the parent setter or set it during mounting.");
                }
                const component = this.render();
                this._didSetInitialState = true;
                this.componentWillMount();
                if (component === null) {
                    throw new Error("Expected render method to be included in component class, no render method found, or render returned an empty array");
                }
                this.bindEventListeners(this._parent);
                this._didMount = true;
                this.componentDidMount();
                if (typeof (component) === "object" && component instanceof Array) {
                    return component.map((element) => (this._parent.appendChild(element)));
                }
                return this._parent.appendChild(component);
            }
            catch (err) /* istanbul ignore next */ {
                this.componentDidCatch(err);
                return err;
            }
        };
        /**
         * Initial mounting to be manually called
         * @public
         * @instance
         * @readonly
         * @returns {HTMLElement} - result of append child to parent element
         */
        this.mount = this.mountComponent;
        /**
         * Unmounting to be manually called
         * @public
         * @instance
         * @readonly
         * @returns {void} - void
         */
        this.unmountComponent = () => {
            try {
                if (this._parent === undefined) {
                    this.componentDidWarn("No parent was set. Component unmounted from nothing.");
                    return;
                }
                this.componentWillUnmount();
                this.unbindEventListeners(this._parent);
                this._removeChildren();
                this._didMount = false;
            }
            catch (err) /* istanbul ignore next */ {
                this.componentDidCatch(err);
            }
        };
        /**
         * Unmounting to be manually called
         * @public
         * @instance
         * @readonly
         * @returns {void} - void
         */
        this.unmount = this.unmountComponent;
        /* eslint-enable max-len, @typescript-eslint/member-ordering */
        /**
         * Removes children from this._parent
         * @private
         * @instance
         * @return {void} void
         */
        this._removeChildren = () => {
            if (this._parent === undefined) {
                throw new Error("Parent is not defined. Set parent with the parent setter or set it during mounting.");
            }
            while (this._parent.firstChild) {
                if (this._parent.lastChild) {
                    this._parent.removeChild(this._parent.lastChild);
                }
            }
        };
        /**
         * Executes new render
         * @private
         * @instance
         * @returns {HTMLElement | Array.<HTMLElement> | null} rendered content
         */
        this._execRender = () => {
            this._removeChildren();
            return this.render();
        };
        /**
         * Checks new state assignment to make sure no new keys are assigned
         * @private
         * @instance
         * @param {Partial<State>} obj - new state
         * @returns {void} void
         */
        this._checkKeys = (obj) => {
            for (const key of Object.keys(obj)) {
                if (!Object.keys(this.state).includes(key)) {
                    // eslint-disable-next-line
                    this.componentDidWarn(`WARN: New key (${key}) should not be set with setState, which has keys ${JSON.stringify(Object.keys(this.state))}. Declare all state variables in constructor as a best practice. Did you misspell a key?`);
                }
            }
        };
        /**
         * Updates the component
         * @private
         * @instance
         * @param {RenderType} renderedContent - rendered content from executing the render function
         * @returns {void} void
         */
        this._update = (renderedContent) => {
            if (typeof (renderedContent) === "object" &&
                renderedContent instanceof Array) {
                for (const element of renderedContent) {
                    this._parent.appendChild(element);
                }
            }
            else if (renderedContent) {
                this._parent.appendChild(renderedContent);
            }
            if (renderedContent) {
                this.componentDidUpdate();
            }
        };
        if (parent &&
            parent.childElementCount > 0 &&
            !shouldSkipParentCheck &&
            this._strict) {
            this.componentDidCatch(new Error(`ERR: Avoid using this ${parent.tagName.toLowerCase()} as element parent, as all elements within this ${parent.tagName.toLowerCase()} will be removed on re-render. To disable this, pass in true as a third parameter`));
        }
        this._parent = parent;
    }
    /**
     * Public getState getter as this.state itself is protected
     * @public
     * @returns {State} component state
     */
    get getState() {
        return this.state;
    }
    /**
     * Get component state
     * @protected
     * @returns {State} component state
     */
    get state() {
        return this._state;
    }
    /**
     * Sets component state
     * WARN: do not use this method to mutate the state directly
     * @protected
     * @param {State} obj - state to set
     */
    set state(obj) {
        if (this._didSetInitialState && this._strict) {
            this.componentDidCatch(new Error("Do not mutate state directly. Use setState instead."));
            // eslint-disable-next-line
            this.componentDidWarn("DeStagnate protects you from mutating the entire state object. Avoid mutating state directly");
            this.setState(obj);
        }
        else {
            this._state = obj;
            this._didSetInitialState = true;
        }
    }
    /**
     * Public getProps getter as this.props itself is protected
     * @public
     * @returns {Props | undefined} component state
     */
    get getProps() {
        return this.props;
    }
    /**
     * Set the parent of this component
     * @public
     * @param {HTMLElement | undefined} element - parent element
     * @returns {void} void;
     */
    set parent(element) {
        if (element &&
            element.childElementCount > 0 &&
            this._strict) {
            this.componentDidWarn(`WARN: Avoid using this ${element.tagName.toLowerCase()} as element parent, as all elements within this ${element.tagName.toLowerCase()} will be removed on re-render. If this was intentional, turn strict off before setting parent.`);
        }
        this._parent = element;
    }
    /**
     * Get the parent element of this component
     * @public
     * @returns {HTMLElement | undefined} parent
     */
    get parent() {
        return this._parent;
    }
    /**
     * Get didMount value publicly
     * @public
     * @returns {boolean} if mounted
     */
    get didMount() {
        return this._didMount;
    }
}
exports.default = DeStagnate;
/**
 * Creates nested DeStagnate component
 * @param {DeStagnateConstructor} Component - DeStagnate component
 * @param {Object<string, unknown>} props - props of component
 * @returns {HTMLDivElement} parent of component
 */
exports.createDSComponent = createDSComponent_1.default;
/**
 * Creates a child element to deStagnate
 * @param {string} tagName - name of HTML element
 * @param {undefined | Object.<string, string | number>} props - element properties, such as class, innerHTML, id, style, etc
 * @param {undefined | Array.<HTMLElement> | HTMLElement | Array.<string> | string | Array.<number> | number} children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
 * @returns {HTMLElement} html element
 */
exports.createElement = createElement_1.default;
/**
 * Creates a child element to DynamComponent
 * @param {string} tagName - name of HTML element
 * @param {undefined | Object.<string, string | number | Element | Ref | Function>} props - element properties, such as class, innerHTML, id, style, etc
 * @param {undefined | number | string | HTMLElement | Element | Array.<number | string | HTMLElement | Element>} children -  children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these  will create multiple children
 * @param {...(number | string | HTMLElement | Element)} childrenArgs - rest parameter of children
 * @returns {HTMLElement} html element
 */
exports.createElementNS = createElementNS_1.default;
/**
 * Creates a reference for a nested component
 * @returns {Object<string, undefined>} empty ref object
 */
exports.createRef = createRef_1.default;
/* eslint-disable @typescript-eslint/naming-convention */
/**
 * DeStagnate
 * @classdesc A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @class
 * @namespace
 * @abstract
 */
exports.Component = DeStagnate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7O0dBVUc7QUFDSCw4QkFBOEI7Ozs7OztBQUU5Qix3REFBOEI7QUFDOUIsNEVBQWlFO0FBQ2pFLG9FQUF5RDtBQUN6RCx3RUFBNkQ7QUFDN0QsNERBQWlEO0FBSWpEOzs7Ozs7R0FNRztBQUNILE1BQThCLFVBRTFCLFNBQVEsaUJBQU07SUEyQ2Q7Ozs7Ozs7T0FPRztJQUNILFlBQ0ksTUFBb0IsRUFDVixLQUFhLEVBQ3ZCLHFCQUFxQixHQUFHLEtBQUs7UUFFN0IsS0FBSyxFQUFFLENBQUE7UUFIRyxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBbkQzQjs7Ozs7V0FLRztRQUNLLFlBQU8sR0FBRyxJQUFJLENBQUE7UUFFdEI7Ozs7O1dBS0c7UUFDSyxXQUFNLEdBQVUsRUFBVyxDQUFBO1FBRW5DOzs7Ozs7V0FNRztRQUNLLHdCQUFtQixHQUFHLEtBQUssQ0FBQTtRQVVuQzs7Ozs7V0FLRztRQUNLLGNBQVMsR0FBRyxLQUFLLENBQUE7UUE0QnpCOzs7Ozs7O1dBT0c7UUFDSSw0QkFBdUIsR0FBRyxDQUM3QixTQUFnQixFQUNoQixTQUFnQixFQUNGLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQTtRQUUzQzs7Ozs7V0FLRztRQUNJLGNBQVMsR0FBRyxHQUFTLEVBQUU7WUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUE7UUFDdkIsQ0FBQyxDQUFBO1FBRUQ7Ozs7O1dBS0c7UUFDSSxrQkFBYSxHQUFHLEdBQVMsRUFBRTtZQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtRQUN4QixDQUFDLENBQUE7UUFxRkQ7Ozs7Ozs7V0FPRztRQUNhLGdCQUFXLEdBQUcsR0FBaUIsRUFBRTtZQUM3QyxJQUFJO2dCQUNBLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFBO2dC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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.6.1
 * @exports Preset
 * @package
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _events_1 = __importDefault(__webpack_require__(3));
const createDSComponent_1 = __importDefault(__webpack_require__(4));
const createElement_1 = __importDefault(__webpack_require__(5));
const createElementNS_1 = __importDefault(__webpack_require__(6));
const createRef_1 = __importDefault(__webpack_require__(7));
/* istanbul ignore next */
/**
 * Lifecycle member functions
 */
class Preset extends _events_1.default {
    constructor() {
        super(...arguments);
        /**
         * Creates nested DeStagnate component
         * @public
         * @instance
         * @readonly
         * @param {DeStagnateConstructor} Component - DeStagnate component
         * @param {Object<string, unknown>} props - props of component
         * @returns {HTMLDivElement} parent of component
         */
        this.createDSComponent = createDSComponent_1.default;
        /**
         * Creates a child element to DynamComponent
         * @public
         * @instance
         * @readonly
         * @param {string} tagName - name of HTML element
         * @param {undefined | Object.<string, string | number | Element | Ref | Function>} props - element properties, such as class, innerHTML, id, style, etc
         * @param {undefined | number | string | HTMLElement | Element | Array.<number | string | HTMLElement | Element>} children -  children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these  will create multiple children
         * @param {...(number | string | HTMLElement | Element)} childrenArgs - rest parameter of children
         * @returns {HTMLElement} html element
         */
        this.createElement = createElement_1.default;
        /**
         * Creates a child element to deStagnate
         * @public
         * @instance
         * @readonly
         * @param {string | null} namespaceURI - namespace uri
         * @param {string} tagName - name of HTML element
         * @param {undefined | Object.<string, string | number>} props - element properties, such as class, innerHTML, id, style, etc
         * @param {undefined | Array.<HTMLElement> | HTMLElement | Array.<string> | string | Array.<number> | number} children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
         * @param {...(HTMLElement | string | number)} childrenArgs - rest parameter of children
         * @returns {HTMLElement} html element
         */
        this.createElementNS = createElementNS_1.default;
        /**
         * Creates a reference for a nested component
         * @public
         * @instance
         * @readonly
         * @returns {Object<string, null>} empty ref object
         */
        this.createRef = createRef_1.default;
        /**
         * Called when component catches error. Default behaviour is console.error
         * @param {Error} error - error object with info
         * @returns {void} void
         */
        this.componentDidCatch = (error) => console.error(error);
        /**
         * What to call after component mounting
         * @public
         * @instance
         * @returns {void} void
         */
        this.componentDidMount = () => undefined;
        /**
         * What to call after component update (state mutation)
         * @public
         * @instance
         * @returns {void} void
         */
        this.componentDidUpdate = () => undefined;
        /**
         * Called when component catches a warning. Default behaviour is console.warn
         * @param {string} msg - warning message
         * @returns {void} void
         */
        this.componentDidWarn = (msg) => console.warn(msg);
        /**
         * What to call before component mounting
         * @public
         * @instance
         * @returns {void} void
         */
        this.componentWillMount = () => undefined;
        /**
         * What to call before component unmounting
         * @public
         * @instance
         * @returns {void} void
         */
        this.componentWillUnmount = () => undefined;
        /**
         * What to call before component update (state mutation)
         * @public
         * @instance
         * @returns {void} void
         */
        this.componentWillUpdate = () => undefined;
        /**
         * Called before component is updated
         * @returns {boolean} whether or not component should update/re-render
         */
        this.shouldComponentUpdate = () => true;
        /**
         * Rendering HTML, must be part of extended class
         * @public
         * @instance
         * @abstract
         * @returns {null | HTMLElement | Array.<HTMLElement> | Element | Array.<Element>} if returns null error will be thrown
         */
        this.render = () => null;
    }
}
exports.default = Preset;
/**
 * Creates nested DeStagnate component
 * @public
 * @static
 * @readonly
 * @param {DeStagnateConstructor} Component - DeStagnate component
 * @param {Object<string, unknown>} props - props of component
 * @returns {HTMLDivElement} parent of component
 */
Preset.createDSComponent = createDSComponent_1.default;
/**
 * Creates a child element to DynamComponent
 * @public
 * @static
 * @readonly
 * @param {string} tagName - name of HTML element
 * @param {undefined | Object.<string, string | number | Element | Ref | Function>} props - element properties, such as class, innerHTML, id, style, etc
 * @param {undefined | number | string | HTMLElement | Element | Array.<number | string | HTMLElement | Element>} children -  children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these  will create multiple children
 * @param {...(number | string | HTMLElement | Element)} childrenArgs - rest parameter of children
 * @returns {HTMLElement} html element
 */
Preset.createElement = createElement_1.default;
/**
 * Creates a child element to deStagnate
 * @public
 * @static
 * @readonly
 * @param {string | null} namespaceURI - namespace uri
 * @param {string} tagName - name of HTML element
 * @param {undefined | Object.<string, string | number>} props - element properties, such as class, innerHTML, id, style, etc
 * @param {undefined | Array.<HTMLElement> | HTMLElement | Array.<string> | string | Array.<number> | number} children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
 * @param {...(HTMLElement | string | number)} childrenArgs - rest parameter of children
 * @returns {HTMLElement} html element
 */
Preset.createElementNS = createElementNS_1.default;
/**
 * Creates a reference for a nested component
 * @public
 * @static
 * @readonly
 * @returns {Object<string, null>} empty ref object
 */
Preset.createRef = createRef_1.default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX3ByZXNldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9fcHJlc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7O0dBU0c7Ozs7O0FBRUgsd0RBQThCO0FBQzlCLDRFQUFpRTtBQUNqRSxvRUFBeUQ7QUFDekQsd0VBQTZEO0FBQzdELDREQUFpRDtBQUlqRCwwQkFBMEI7QUFDMUI7O0dBRUc7QUFDSCxNQUE4QixNQUFPLFNBQVEsaUJBQU07SUFBbkQ7O1FBaURJOzs7Ozs7OztXQVFHO1FBQ2Esc0JBQWlCLEdBQUcsMkJBQWtCLENBQUE7UUFFdEQ7Ozs7Ozs7Ozs7V0FVRztRQUNhLGtCQUFhLEdBQUcsdUJBQWMsQ0FBQTtRQUU5Qzs7Ozs7Ozs7Ozs7V0FXRztRQUNhLG9CQUFlLEdBQUcseUJBQWdCLENBQUE7UUFFbEQ7Ozs7OztXQU1HO1FBQ2EsY0FBUyxHQUFHLG1CQUFVLENBQUE7UUFFdEM7Ozs7V0FJRztRQUNJLHNCQUFpQixHQUFHLENBQUMsS0FBWSxFQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBRXZFOzs7OztXQUtHO1FBQ0ksc0JBQWlCLEdBQUcsR0FBUyxFQUFFLENBQUMsU0FBUyxDQUFBO1FBRWhEOzs7OztXQUtHO1FBQ0ksdUJBQWtCLEdBQUcsR0FBUyxFQUFFLENBQUMsU0FBUyxDQUFBO1FBRWpEOzs7O1dBSUc7UUFDSSxxQkFBZ0IsR0FBRyxDQUFDLEdBQVcsRUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUVsRTs7Ozs7V0FLRztRQUNJLHVCQUFrQixHQUFHLEdBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQTtRQUVqRDs7Ozs7V0FLRztRQUNJLHlCQUFvQixHQUFHLEdBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQTtRQUVuRDs7Ozs7V0FLRztRQUNJLHdCQUFtQixHQUFHLEdBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQTtRQUVsRDs7O1dBR0c7UUFDSSwwQkFBcUIsR0FBRyxHQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUE7UUFFbEQ7Ozs7OztXQU1HO1FBQ2EsV0FBTSxHQUFHLEdBQWUsRUFBRSxDQUFDLElBQUksQ0FBQTtJQUVuRCxDQUFDOztBQXJLRCx5QkFxS0M7QUFuS0c7Ozs7Ozs7O0dBUUc7QUFDb0Isd0JBQWlCLEdBQUcsMkJBQWtCLENBQUE7QUFFN0Q7Ozs7Ozs7Ozs7R0FVRztBQUNvQixvQkFBYSxHQUFHLHVCQUFjLENBQUE7QUFFckQ7Ozs7Ozs7Ozs7O0dBV0c7QUFDb0Isc0JBQWUsR0FBRyx5QkFBZ0IsQ0FBQTtBQUV6RDs7Ozs7O0dBTUc7QUFDb0IsZ0JBQVMsR0FBRyxtQkFBVSxDQUFBIn0=

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.6.1
 * @exports Events
 * @package
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* istanbul ignore next */
class Events {
    constructor() {
        /**
         * Binds event listeners event
         * Do not call manually
         * @protected
         * @instance
         * @pacakge
         * @param {HTMLElement} element - element to bind listeners to
         * @returns {void} void;
         */
        this.bindEventListeners = (element) => {
            this._eventListener(element.addEventListener);
        };
        /**
         * Binds event listeners event
         * Do not call manually
         * @protected
         * @instance
         * @pacakge
         * @param {HTMLElement} element - element to bind listeners to
         * @returns {void} void;
         */
        this.unbindEventListeners = (element) => {
            this._eventListener(element.removeEventListener);
        };
        /**
         * Focus event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onFocus = () => undefined;
        /**
         * Blur event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onBlur = () => undefined;
        /**
         * Focus in event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onFocusIn = () => undefined;
        /**
         * Focus out event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onFocusOut = () => undefined;
        /**
         * Animation start event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onAnimationStart = () => undefined;
        /**
         * Animation cancel event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onAnimationCancel = () => undefined;
        /**
         * Animation end event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onAnimationEnd = () => undefined;
        /**
         * Animation iteration event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onAnimationIteration = () => undefined;
        /**
         * Transition start event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onTransitionStart = () => undefined;
        /**
         * Transition cancel event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onTransitionCancel = () => undefined;
        /**
         * Transition end event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onTransitionEnd = () => undefined;
        /**
         * Transition run event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onTransitionRun = () => undefined;
        /**
         * Auxillary click event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onAuxClick = () => undefined;
        /**
         * Click event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onClick = () => undefined;
        /**
         * Double click event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onDblClick = () => undefined;
        /**
         * Mousedown event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onMouseDown = () => undefined;
        /**
         * Mouse enter event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onMouseEnter = () => undefined;
        /**
         * Mouse leave event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onMouseLeave = () => undefined;
        /**
         * Mouse move event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onMouseMove = () => undefined;
        /**
         * Mouseover event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onMouseOver = () => undefined;
        /**
         * Mouseout event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onMouseOut = () => undefined;
        /**
         * Mouseup event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onMouseUp = () => undefined;
        this._eventListener = (el) => {
            for (const [event, callback] of Object.entries(this._events())) {
                el(event, callback);
            }
        };
        this._events = () => ({
            focus: this.onFocus,
            blur: this.onBlur,
            focusin: this.onFocusIn,
            focusout: this.onFocusOut,
            animationstart: this.onAnimationStart,
            animationcancel: this.onAnimationCancel,
            animationend: this.onAnimationEnd,
            animationiteration: this.onAnimationIteration,
            transitionstart: this.onTransitionStart,
            transitioncancel: this.onTransitionCancel,
            transitionend: this.onTransitionEnd,
            transitionrun: this.onTransitionRun,
            auxclick: this.onAuxClick,
            click: this.onClick,
            dblclick: this.onDblClick,
            mousedown: this.onMouseDown,
            mouseenter: this.onMouseEnter,
            mouseleave: this.onMouseLeave,
            mousemove: this.onMouseMove,
            mouseover: this.onMouseOver,
            mouseout: this.onMouseOut,
            mouseup: this.onMouseUp,
        });
    }
}
exports.default = Events;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2V2ZW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9fZXZlbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7O0dBU0c7O0FBb0NILDBCQUEwQjtBQUMxQixNQUFxQixNQUFNO0lBQTNCO1FBRUk7Ozs7Ozs7O1dBUUc7UUFDTyx1QkFBa0IsR0FBRyxDQUFDLE9BQW9CLEVBQVEsRUFBRTtZQUMxRCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1FBQ2pELENBQUMsQ0FBQTtRQUVEOzs7Ozs7OztXQVFHO1FBQ08seUJBQW9CLEdBQUcsQ0FBQyxPQUFvQixFQUFRLEVBQUU7WUFDNUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtRQUNwRCxDQUFDLENBQUE7UUFFRDs7Ozs7V0FLRztRQUNPLFlBQU8sR0FBRyxHQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUE7UUFFekM7Ozs7O1dBS0c7UUFDTyxXQUFNLEdBQUcsR0FBUyxFQUFFLENBQUMsU0FBUyxDQUFBO1FBRXhDOzs7OztXQUtHO1FBQ08sY0FBUyxHQUFHLEdBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQTtRQUUzQzs7Ozs7V0FLRztRQUNPLGVBQVUsR0FBRyxHQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUE7UUFFNUM7Ozs7O1dBS0c7UUFDTyxxQkFBZ0IsR0FBRyxHQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUE7UUFFbEQ7Ozs7O1dBS0c7UUFDTyxzQkFBaUIsR0FBRyxHQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUE7UUFFbkQ7Ozs7O1dBS0c7UUFDTyxtQkFBYyxHQUFHLEdBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQTtRQUVoRDs7Ozs7V0FLRztRQUNPLHlCQUFvQixHQUFHLEdBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQTtRQUd0RDs7Ozs7V0FLRztRQUNPLHNCQUFpQixHQUFHLEdBQVMsRUFBRSxDQUFD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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.6.1
 * @exports createDSComponent add nested component for DeStagnate components
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/naming-convention */
/**
 * Creates nested DeStagnate component
 * @deprecated do not use this function, since 1.6.1
 * @see {@link https://github.com/Luke-zhang-04/DeStagnate/wiki/createDSComponent}
 * @see {@link https://github.com/Luke-zhang-04/DeStagnate/wiki/nestedComponents}
 * @param {DeStagnateConstructor} Component - DeStagnate component
 * @param {Object<string, unknown>} props - props of component
 * @param {Object<string, undefined | DeStagnate>} ref - ref object
 * @returns {HTMLDivElement} parent of component
 */
const createDSComponent = (Component, props, ref) => {
    const element = document.createElement("div");
    element.classList.add("DeStagnate-component-parent");
    const _component = new Component(element, props);
    _component.mount();
    if (ref) {
        ref.current = _component;
    }
    return element;
};
exports.default = createDSComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlRFNDb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY3JlYXRlRFNDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7OztHQVFHOztBQVVILHlEQUF5RDtBQUN6RDs7Ozs7Ozs7O0dBU0c7QUFDSCxNQUFNLGlCQUFpQixHQUFHLENBSWxCLFNBQThDLEVBQzlDLEtBQWEsRUFDYixHQUFtQyxFQUNyQixFQUFFO0lBQ3BCLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUE7SUFFN0MsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQTtJQUVwRCxNQUFNLFVBQVUsR0FBRyxJQUFJLFNBQVMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFFaEQsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFBO0lBRWxCLElBQUksR0FBRyxFQUFFO1FBQ0wsR0FBRyxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUE7S0FDM0I7SUFFRCxPQUFPLE9BQU8sQ0FBQTtBQUNsQixDQUFDLENBQUE7QUFFRCxrQkFBZSxpQkFBaUIsQ0FBQSJ9

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.6.1
 * @exports createElement function for DOM manipulation
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._bindChildren = exports._unpackChildren = exports._bindProps = void 0;
const _1 = __importDefault(__webpack_require__(1));
/**
 * Binds children to element
 * @package
 * @param {Element} element - element to bind
 * @param {undefined | Object.<string, string | number>} props - props to bind with
 * @param {boolean} ns - if namespace element
 * @returns {void} void
 */
exports._bindProps = (element, props, ns = false) => {
    if (props) {
        for (const [key, val] of Object.entries(props)) {
            if (typeof (val) === "string" || typeof (val) === "number") {
                if (key === "innerHTML") {
                    element.innerHTML = val.toString();
                }
                else if (ns) {
                    element.setAttributeNS(null, key, val.toString());
                }
                else {
                    element.setAttribute(key, val.toString());
                }
            }
            else if (key.slice(0, 2) === "on") { // Works such as onClick, onAnimationEnd, etc.
                if (typeof (val) === "function") {
                    element.addEventListener(key.slice(2)
                        .toLowerCase(), val);
                }
            }
            else if (key === "ref" &&
                typeof (val) === "object" &&
                "current" in val) {
                val.current = element;
            }
            else {
                console.warn(`WARN: Invalid prop type "${typeof (val)}" for key "${key}". Skipping prop.`);
            }
        }
    }
};
exports._unpackChildren = (children) => {
    const newChildren = [];
    for (const child of children) {
        if (typeof (child) === "object" && child instanceof Array) {
            newChildren.push(...exports._unpackChildren(child));
        }
        else {
            newChildren.push(child);
        }
    }
    return newChildren;
};
/**
 * Binds children to element
 * @package
 * @param {Element} element - element to bind
 * @param {undefined | ChildrenType} children - children to bind with
 * @returns {void} void
 */
exports._bindChildren = (element, children) => {
    if (children !== null && children !== undefined) {
        if (children instanceof Array) {
            for (const child of children) {
                exports._bindChildren(element, child);
            }
        }
        else if (typeof (children) === "string" ||
            typeof (children) === "number") {
            element.innerText = children.toString();
        }
        else if (children instanceof _1.default) {
            if (!children.didMount && element instanceof window.HTMLElement) {
                children.mount(element);
                return;
            }
            else if (!(element instanceof window.HTMLElement)) {
                throw new Error("Cannot use non-HTMLElement as component parent");
            }
            if (children.parent !== element) {
                children.parent = element;
            }
            children.forceUpdate();
        }
        else {
            element.appendChild(children);
        }
    }
};
/**
 * Creates a child element to DynamComponent
 * @param {string} tagName - name of HTML element
 * @param {undefined | Object.<string, string | number | Element | Ref | Function>} props - element properties, such as class, innerHTML, id, style, etc
 * @param {undefined | number | string | HTMLElement | Element | Array.<number | string | HTMLElement | Element>} children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
 * @param {...(number | string | HTMLElement | Element)} childrenArgs - rest parameter of children
 * @returns {HTMLElement} html element
 */
const createElement = (tagName, props, children, ...childrenArgs) => {
    const element = document.createElement(tagName);
    exports._bindProps(element, props);
    let _children = children;
    if (children && childrenArgs) {
        if (children instanceof Array) {
            _children = [
                ...exports._unpackChildren(children),
                ...exports._unpackChildren(childrenArgs),
            ];
        }
        else {
            _children = [children, ...exports._unpackChildren(childrenArgs)];
        }
    }
    exports._bindChildren(element, _children);
    return element;
};
exports.default = createElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlRWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVFbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7R0FRRzs7Ozs7O0FBRUgseUNBQTBCO0FBMkIxQjs7Ozs7OztHQU9HO0FBQ1UsUUFBQSxVQUFVLEdBQUcsQ0FDdEIsT0FBZ0IsRUFDaEIsS0FBMkUsRUFDM0UsRUFBRSxHQUFHLEtBQUssRUFDTixFQUFFO0lBQ04sSUFBSSxLQUFLLEVBQUU7UUFDUCxLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM1QyxJQUFJLE9BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxRQUFRLElBQUksT0FBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFFBQVEsRUFBRTtnQkFDdEQsSUFBSSxHQUFHLEtBQUssV0FBVyxFQUFFO29CQUNyQixPQUFPLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtpQkFDckM7cUJBQU0sSUFBSSxFQUFFLEVBQUU7b0JBQ1gsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO2lCQUNwRDtxQkFBTTtvQkFDSCxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtpQkFDNUM7YUFDSjtpQkFBTSxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRSxFQUFFLDhDQUE4QztnQkFDakYsSUFBSSxPQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssVUFBVSxFQUFFO29CQUM1QixPQUFPLENBQUMsZ0JBQWdCLENBQ3BCLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3lCQUNQLFdBQVcs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

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.6.1
 * @exports createElementNS createElement for namespaced elements
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createElementNS = void 0;
const createElement_1 = __webpack_require__(5);
/**
 * Creates a child element to deStagnate
 * @param {string | null} namespaceURI - namespace uri
 * @param {string} tagName - name of HTML element
 * @param {undefined | Object.<string, string | number>} props - element properties, such as class, innerHTML, id, style, etc
 * @param {undefined | Element | string | number | Array.<Element> | Array.<string> | Array.<number>} children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
 * @param {...(HTMLElement | string | number)} childrenArgs - rest parameter of children
 * @returns {HTMLElement} html element
 */
exports.createElementNS = (namespaceURI, tagName, props, children, ...childrenArgs) => {
    const element = document.createElementNS(namespaceURI, tagName);
    createElement_1._bindProps(element, props, true);
    let _children = children;
    if (children && childrenArgs) {
        if (typeof (children) === "object" && children instanceof Array) {
            _children = [
                ...createElement_1._unpackChildren(children),
                ...createElement_1._unpackChildren(childrenArgs),
            ];
        }
        else {
            _children = [children, ...createElement_1._unpackChildren(childrenArgs)];
        }
    }
    createElement_1._bindChildren(element, _children);
    return element;
};
exports.default = exports.createElementNS;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlRWxlbWVudE5TLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NyZWF0ZUVsZW1lbnROUy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7O0dBUUc7OztBQUVILG1EQU13QjtBQUV4Qjs7Ozs7Ozs7R0FRRztBQUNVLFFBQUEsZUFBZSxHQUFHLENBQzNCLFlBQStHLEVBQy9HLE9BQTBDLEVBQzFDLEtBQXdDLEVBQ3hDLFFBQXVCLEVBQ3ZCLEdBQUcsWUFBK0IsRUFDM0IsRUFBRTtJQUNULE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFBO0lBRS9ELDBCQUFVLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUVoQyxJQUFJLFNBQVMsR0FBNkIsUUFBUSxDQUFBO0lBRWxELElBQUksUUFBUSxJQUFJLFlBQVksRUFBRTtRQUMxQixJQUFJLE9BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxRQUFRLElBQUksUUFBUSxZQUFZLEtBQUssRUFBRTtZQUM1RCxTQUFTLEdBQUc7Z0JBQ1IsR0FBRywrQkFBZSxDQUFDLFFBQVEsQ0FBQztnQkFDNUIsR0FBRywrQkFBZSxDQUFDLFlBQVksQ0FBQzthQUNuQyxDQUFBO1NBQ0o7YUFBTTtZQUNILFNBQVMsR0FBRyxDQUFDLFFBQVEsRUFBRSxHQUFHLCtCQUFlLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQTtTQUMzRDtLQUNKO0lBRUQsNkJBQWEsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUE7SUFFakMsT0FBTyxPQUFPLENBQUE7QUFDbEIsQ0FBQyxDQUFBO0FBRUQsa0JBQWUsdUJBQWUsQ0FBQSJ9

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Creates a reference for a nested component
 * @returns {Object<string, null>} empty ref object
 */
const createRef = () => ({
    current: null,
});
/**
 * Creates a reference for a nested component
 * @returns {Object<string, null>} empty ref object
 */
exports.default = createRef;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlUmVmLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NyZWF0ZVJlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQWVBOzs7R0FHRztBQUNILE1BQU0sU0FBUyxHQUFHLEdBQXlDLEVBQUUsQ0FBQyxDQUFDO0lBQzNELE9BQU8sRUFBRSxJQUFJO0NBQ2hCLENBQUMsQ0FBQTtBQUVGOzs7R0FHRztBQUNILGtCQUFlLFNBQVMsQ0FBQSJ9

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : {default: mod}
}

Object.defineProperty(exports, "__esModule", {value: true})
const alias_1 = __importDefault(__webpack_require__(9))
/* eslint-enable no-magic-numbers */
/**
 * Dateplus class and namespace
 * @classdesc A class and namespace program to assist with date manipulation
 * @class
 * @namespace
 */
class DatePlus extends alias_1.default {

    constructor () {
        super(...arguments)

        /**
         * Add's 0s to the instantiated (e.g 2020/4/3 => 2020/04/03)
         * @public
         * @instance
         * @param {string} seperator - char the date is seperatred by
         * @returns {string} - date with zeros
         */
        this.addZeros = (seperator = "/") => DatePlus.addZeros(this.formatDate(), seperator)

        /**
         * Format instantiated into a string in the form YYYY{seperator}MM{seperator}DD
         * @public
         * @instance
         * @param {string} seperator - char to seperate date with
         * @returns {string} formatted date
         */
        this.formatDate = (seperator = "/") => DatePlus.formatDate(this, seperator)

        /**
         * Gets instantiated day of week in word form (e.g 0 => "Sunday")
         * @public
         * @instance
         * @returns {string} stringed day of week
         */
        this.getWordDay = () => DatePlus._daysReference[this.getDay()]

        /**
         * Gets instantiated month in word form (e.g 0 => "January")
         * @public
         * @instance
         * @returns {string} stringed worded month
         */
        this.getWordMonth = () => DatePlus._monthsReference[this.getMonth()]
        /* eslint-enable max-len */
    }

}
exports.default = DatePlus

/**
 * Reference to days of the week, zero indexed
 * @private
 * @static
 * @type {Object.<number, string>}
 */
DatePlus._daysReference = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
}
/* eslint-disable id-length */
/**
 * Reference to months of a year, zero indexed
 * @private
 * @static
 * @type {Object.<number, string>}
 */
DatePlus._keysReference = {
    y: "year",
    m: "month",
    d: "day",
}
/* eslint-enable id-length */
/**
 * Reference to months of a year, zero indexed
 * @private
 * @static
 * @type {Object.<number, string>}
 */
DatePlus._monthsReference = {
    0: "January",
    1: "Feburary",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
}

/**
 * Add's 0s to date (e.g 2020/4/3 => 2020/04/03)
 * @public
 * @static
 * @param {string} date - string date to format
 * @param {string} seperator - char the date is seperatred by
 * @returns {string} - date with zeros
 */
DatePlus.addZeros = (date, seperator = "/") => {
    let newDate = ""

    for (let index = 0; index < 2; index++) {
        if (date.split(seperator)[index].length < 2) {
            newDate += `0${date.split(seperator)[index]}${seperator}`
        } else {
            newDate += `${date.split(seperator)[index]}${seperator}`
        }
    }
    if (date.split(seperator)[2].length < 2) {
        newDate += `0${date.split(seperator)[2]}`
    } else {
        newDate += date.split(seperator)[2]
    }
    
    return newDate
}

/**
 * Format date into a string in the form YYYY{seperator}MM{seperator}DD
 * @public
 * @static
 * @param {Date | DatePlus} date - date object to format
 * @param {string} seperator - string to seperate date values with
 * @returns {string} formatted date
 */
DatePlus.formatDate = (date, seperator = "/") => {
    const month = (date.getMonth()).toString(), 
        day = date.getDate().toString(), 
        year = date.getFullYear().toString()

    
    return [year, month, day].join(seperator)
}

/**
 * Gets date values and outputs an object
 * @public
 * @static
 * @param {string} date - date to extract values from, months zero indexed
 * @param {DateFormat}format - format of string date
 * @param {string} seperator - Seperator the date works with; leave auto for auto detection, limited to 1 char
 * @returns {Object<string, number>} object with all values
 */
DatePlus.getDateValues = (date, format = "y:m:d", seperator = "auto") => {
    let _seperator = "/"

    if (seperator === "auto") {
        for (const letter of date) {
            if (isNaN(Number(letter))) {
                _seperator = letter
                break
            }
        }
    } else {
        _seperator = seperator
    }
    const dateData = date.split(_seperator), 
        dateFormat = format.split(":"), 
        output = {}

    for (let index = 0; index < 3; index++) {
        const key = DatePlus._keysReference[dateFormat[index]]

        output[key] = Number(dateData[index])
    }
    
    return output
}
/* eslint-disable max-len */
/**
 * Converts numerical day of week into word form (e.g 0 => "Sunday")
 * @public
 * @static
 * @param {number} numerical - numerical day of week, 0 indexed (0-6)
 * @returns {string} stringed day of week
 */
DatePlus.getWordDay = (numerical) => DatePlus._daysReference[numerical]

/**
 * Converts numerical month into word form (e.g 0 => "January")
 * @public
 * @static
 * @param {number} numerical - numerical day of week, 0 indexed (0-11)
 * @returns {string} stringed worded month
 */
DatePlus.getWordMonth = (numerical) => DatePlus._monthsReference[numerical]
// # sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFXQSxvREFBMkI7QUFvRDNCLG9DQUFvQztBQUVwQzs7Ozs7R0FLRztBQUNILE1BQXFCLFFBQVMsU0FBUSxlQUFLO0lBQTNDOztRQWlLSTs7Ozs7O1dBTUc7UUFDSSxhQUFRLEdBQUcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxFQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQTtRQUU5Rjs7Ozs7O1dBTUc7UUFDSSxlQUFVLEdBQUcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxFQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQTtRQUVyRjs7Ozs7V0FLRztRQUNJLGVBQVUsR0FBRyxHQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBO1FBRXhFOzs7OztXQUtHO1FBQ0ksaUJBQVksR0FBRyxHQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7UUFDOUUsMkJBQTJCO0lBRS9CLENBQUM7O0FBcE1ELDJCQW9NQztBQWxNRzs7Ozs7R0FLRztBQUNZLHVCQUFjLEdBQVM7SUFDbEMsQ0FBQyxFQUFFLFFBQVE7SUFDWCxDQUFDLEVBQUUsUUFBUTtJQUNYLENBQUMsRUFBRSxTQUFTO0lBQ1osQ0FBQyxFQUFFLFdBQVc7SUFDZCxDQUFDLEVBQUUsVUFBVTtJQUNiLENBQUMsRUFBRSxRQUFRO0lBQ1gsQ0FBQyxFQUFFLFVBQVU7Q0FDaEIsQ0FBQTtBQUVELDhCQUE4QjtBQUM5Qjs7Ozs7R0FLRztBQUNZLHVCQUFjLEdBQVM7SUFDbEMsQ0FBQyxFQUFFLE1BQU07SUFDVCxD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


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : {default: mod}
}

Object.defineProperty(exports, "__esModule", {value: true})

/**
 * DatePlus
 * A simple program to assist with date manipulation
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 2.0.3
 * @exports Alias
 * @file defines alias static methods from conversion.ts with longer names
 */
const elapse_1 = __importDefault(__webpack_require__(10))

class Alias extends elapse_1.default {
}
exports.default = Alias

/**
 * Converts milliseconds to seconds with remainders
 * @public
 * @static
 * @param {number} ms - milliseconds to convert
 * @returns {Object.<string, number>} object with seconds and milliseconds
 */
Alias.msToSeconds = Alias.msToSecs

/**
 * Converts milliseconds to minutes with remainders
 * @public
 * @static
 * @param {number} ms - milliseconds to convert
 * @returns {Object.<string, number>} object with minutes, seconds, and milliseconds
 */
Alias.msToMinutes = Alias.msToMins

/**
 * Converts milliseconds to hours with remainders
 * @public
 * @static
 * @param {number} ms - milliseconds to convert
 * @returns {Object.<string, number>} object with hours, minutes, seconds, and milliseconds
 */
Alias.msToHours = Alias.msToHrs

/**
 * Converts seconds to milliseconds
 * @public
 * @static
 * @param {number} secs - seconds to convert
 * @returns {number} converted milliseconds
 */
Alias.secondsToMs = Alias.secsToMs

/**
 * Converts seconds to minutes with remainders
 * @public
 * @static
 * @param {number} secs - seconds to convert
 * @returns {Object.<string, number>} converted minutes
 */
Alias.secondsToMinutes = Alias.secsToMins

/**
 * Converts seconds to hours with remainders
 * @public
 * @static
 * @param {number} secs - seconds to convert
 * @returns {Object.<string, number>} converted hours
 */
Alias.secondsToHours = Alias.secsToHrs

/**
 * Converts seconds to days with remainders
 * @public
 * @static
 * @param {number} secs - seconds to convert
 * @returns {Object.<string, number>} converted days
 */
Alias.secondsToDays = Alias.secsToDays

/**
 * Converts hours to milliseconds
 * @public
 * @static
 * @param {number} mins - minutes to convert
 * @returns {number} converted milliseconds
 */
Alias.minutesToMs = Alias.minsToMs

/**
 * Converts hours to seconds
 * @public
 * @static
 * @param {number} mins - minutes to convert
 * @returns {number} converted seconds
 */
Alias.minutesToSeconds = Alias.minsToSecs

/**
 * Converts minutes to hours with remainders
 * @public
 * @static
 * @param {number} mins - minutes to convert
 * @returns {Object.<string, number>} converted hours
 */
Alias.minutesToHours = Alias.minsToHrs

/**
 * Converts minutes to days with remainders
 * @public
 * @static
 * @param {number} mins - minutes to convert
 * @returns {Object.<string, number>} converted days
 */
Alias.minutesToDays = Alias.minsToDays

/**
 * Converts hours to milliseconds
 * @public
 * @static
 * @param {number} hours - hours to convert
 * @returns {number} converted milliseconds
 */
Alias.hoursToMs = Alias.hrsToMs

/**
 * Converts hours to seconds
 * @public
 * @static
 * @param {number} hours - hours to convert
 * @returns {number} converted seconds
 */
Alias.hoursToSeconds = Alias.hrsToSecs

/**
 * Converts hours to minutes
 * @public
 * @static
 * @param {number} hours - hours to convert
 * @returns {number} converted minutes
 */
Alias.hoursToMinutes = Alias.hrsToMins

/**
 * Converts hours to days with remainders
 * @public
 * @static
 * @param {number} hrs - hours to convert
 * @returns {Object.<string, number>} converted days
 */
Alias.hoursToDays = Alias.hrsToDays

/**
 * Converts days to seconds
 * @public
 * @static
 * @param {number} days - days to convert
 * @returns {number} converted seconds
 */
Alias.daysToSeconds = Alias.daysToSecs

/**
 * Converts days to minutes
 * @public
 * @static
 * @param {number} days - days to convert
 * @returns {number} converted minutes
 */
Alias.daysToMinutes = Alias.daysToMins

/**
 * Converts days to hours
 * @public
 * @static
 * @param {number} days - days to convert
 * @returns {number} converted hours
 */
Alias.daysToHours = Alias.daysToHrs
// # sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxpYXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvYWxpYXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7O0dBU0c7QUFDSCxzREFBNkI7QUFFN0IsTUFBcUIsS0FBTSxTQUFRLGdCQUFNOztBQUF6Qyx3QkFvS0M7QUFsS0c7Ozs7OztHQU1HO0FBQ1csaUJBQVcsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFBO0FBRTFDOzs7Ozs7R0FNRztBQUNXLGlCQUFXLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQTtBQUUxQzs7Ozs7O0dBTUc7QUFDVyxlQUFTLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQTtBQUV2Qzs7Ozs7O0dBTUc7QUFDVyxpQkFBVyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUE7QUFFMUM7Ozs7OztHQU1HO0FBQ1csc0JBQWdCLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQTtBQUVqRDs7Ozs7O0dBTUc7QUFDVyxvQkFBYyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUE7QUFFOUM7Ozs7OztHQU1HO0FBQ1csbUJBQWEsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFBO0FBRTlDOzs7Ozs7R0FNRztBQUNXLGlCQUFXLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQTtBQUUxQzs7Ozs7O0dBTUc7QUFDVyxzQkFBZ0IsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFBO0FBRWpEOzs7Ozs7R0FNRztBQUNXLG9CQUFjLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQTtBQUU5Qzs7Ozs7O0dBTUc7QUFDVyxtQkFBYSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUE7QUFFOUM7Ozs7OztHQU1HO0FBQ1csZUFBUyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUE7QUFFdkM7Ozs7OztHQU1HO0FBQ1csb0JBQWMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFBO0FBRTlDOzs7Ozs7R0FNRztBQUNXLG9CQUFjLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQTtBQUU5Qzs7Ozs7O0dBTUc7QUFDVyxpQkFBVyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUE7QUFFM0M7Ozs7OztHQU1HO0FBQ1csbUJBQWEsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFBO0FBRTlDOzs7Ozs7R0FNRztBQUNXLG1CQUFhLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQTtBQUU5Qzs7Ozs7O0dBTUc7QUFDVyxpQkFBVyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUEifQ==


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : {default: mod}
}

Object.defineProperty(exports, "__esModule", {value: true})

/**
 * DatePlus
 * A simple program to assist with date manipulation
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 2.0.3
 * @exports Elapse
 * @file defines Elapse class for elapsed
 */
const conversions_1 = __importDefault(__webpack_require__(11)),
    hrsPerDay = 24, 
    minsPerHr = 60, 
    secsPerMin = 60, 
    msPerSec = 1000

/**
 * Elapse class and namespace
 * @classdesc A class and namespace program to find elapsed times
 * @class
 * @namespace
 */
class Elapse extends conversions_1.default {

    constructor () {
        super(...arguments)

        /**
         * Calculates number of elapsed days between instantiated date and dae
         * @public
         * @instance
         * @param {Date | DatePlus} date - ending date object to calculate
         * @returns {number} - number of elapsed days
         */
        this.getElapsedDays = (date) => Math.round((this.getTime() - date.getTime()) / Elapse._oneDay) * -1
    }

}
exports.default = Elapse

/**
 * Gets milliseconds per day
 * @private
 * @static
 * @type {number}
 */
Elapse._oneDay = hrsPerDay * minsPerHr * secsPerMin * msPerSec

/**
 * Calculates number of elapsed days between date1 and date2
 * @public
 * @static
 * @param {Date | DatePlus} date1 - starting date object to calculate
 * @param {Date | DatePlus} date2 - ending date object to calculate
 * @returns {number} - number of elapsed days
 */
Elapse.getElapsedDays = (date1, date2) => Math.round((date1.getTime() - date2.getTime()) / Elapse._oneDay) * -1
// # sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxhcHNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2VsYXBzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7R0FTRztBQUNILGdFQUFtQztBQUduQyxNQUFNLFNBQVMsR0FBRyxFQUFFLEVBQ2hCLFNBQVMsR0FBRyxFQUFFLEVBQ2QsVUFBVSxHQUFHLEVBQUUsRUFDZixRQUFRLEdBQUcsSUFBSSxDQUFBO0FBRW5COzs7OztHQUtHO0FBQ0gsTUFBcUIsTUFBTyxTQUFRLHFCQUFPO0lBQTNDOztRQTBCSTs7Ozs7O1dBTUc7UUFDSSxtQkFBYyxHQUFHLENBQUMsSUFBcUIsRUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FDakUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FDckQsR0FBRyxDQUFDLENBQUMsQ0FBQTtJQUVWLENBQUM7O0FBckNELHlCQXFDQztBQW5DRzs7Ozs7R0FLRztBQUNZLGNBQU8sR0FDbEIsU0FBUyxHQUFHLFNBQVMsR0FBRyxVQUFVLEdBQUcsUUFBUSxDQUFBO0FBRWpEOzs7Ozs7O0dBT0c7QUFDVyxxQkFBYyxHQUFHLENBQzNCLEtBQXNCLEVBQ3RCLEtBQXNCLEVBQ2hCLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUNuQixDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUN2RCxHQUFHLENBQUMsQ0FBQyxDQUFBIn0=


/***/ }),
/* 11 */
/***/ (function(module, exports) {


Object.defineProperty(exports, "__esModule", {value: true})
const hrsPerDay = 24, 
    minsPerHr = 60, 
    secsPerMin = 60, 
    msPerSec = 1000

/**
 * Convert namespace
 * @classdesc A namespace program to convert units
 * @namespace
 */
class Convert extends Date {
}
exports.default = Convert

/**
 * Converts milliseconds to seconds with remainders
 * @public
 * @static
 * @param {number} ms - milliseconds to convert
 * @returns {Object.<string, number>} object with seconds and milliseconds
 */
Convert.msToSecs = (ms) => ({
    ms: ms % msPerSec,
    seconds: (ms - ms % msPerSec) / msPerSec,
})

/**
 * Converts milliseconds to minutes with remainders
 * @public
 * @static
 * @param {number} ms - milliseconds to convert
 * @returns {Object.<string, number>} object with minutes, seconds, and milliseconds
 */
Convert.msToMins = (ms) => {
    const milliseconds = ms % msPerSec % msPerSec, 
        seconds = ((ms - ms % msPerSec) / msPerSec) % secsPerMin, 
        minutes = (ms - seconds * msPerSec - milliseconds) / (msPerSec * secsPerMin)

    
    return {
        ms: milliseconds,
        seconds,
        minutes,
    }
}

/**
 * Converts milliseconds to hours with remainders
 * @public
 * @static
 * @param {number} ms - milliseconds to convert
 * @returns {Object.<string, number>} object with hours, minutes, seconds, and milliseconds
 */
Convert.msToHrs = (ms) => {
    const milliseconds = ms % msPerSec % msPerSec, 
        seconds = ((ms - ms % msPerSec) / msPerSec) % secsPerMin, 
        minutes = (ms - seconds * msPerSec - milliseconds) / (msPerSec * secsPerMin) % minsPerHr, 
        hours = (ms -
        minutes * msPerSec * secsPerMin -
        seconds * msPerSec -
        milliseconds) / (msPerSec * secsPerMin * minsPerHr)

    
    return {
        ms: milliseconds,
        seconds,
        minutes,
        hours,
    }
}

/**
 * Converts milliseconds to days with remainders
 * @public
 * @static
 * @param {number} ms - milliseconds to convert
 * @returns {Object.<string, number>} object with days, hours, minutes, seconds, and milliseconds
 */
Convert.msToDays = (ms) => {
    const milliseconds = ms % msPerSec % msPerSec, 
        seconds = ((ms - ms % msPerSec) / msPerSec) % secsPerMin, 
        minutes = (ms -
        seconds * msPerSec -
        milliseconds) / (msPerSec * secsPerMin) % minsPerHr, 
        hours = (ms -
        minutes * msPerSec * secsPerMin -
        seconds * msPerSec -
        milliseconds) / (msPerSec * secsPerMin * minsPerHr) % hrsPerDay, 
        days = (ms -
        hours * msPerSec * secsPerMin * minsPerHr -
        minutes * msPerSec * secsPerMin -
        seconds * msPerSec -
        milliseconds) / (msPerSec * secsPerMin * minsPerHr * hrsPerDay)

    
    return {
        ms: milliseconds,
        seconds,
        minutes,
        hours,
        days,
    }
}
/* eslint-disable max-len */
/**
 * Converts seconds to milliseconds
 * @public
 * @static
 * @param {number} secs - seconds to convert
 * @returns {number} converted milliseconds
 */
Convert.secsToMs = (secs) => secs * msPerSec

/**
 * Converts seconds to minutes with remainders
 * @public
 * @static
 * @param {number} secs - seconds to convert
 * @returns {Object.<string, number>} converted minutes
 */
Convert.secsToMins = (secs) => Convert.msToMins(Convert.secsToMs(secs))

/**
 * Converts seconds to hours with remainders
 * @public
 * @static
 * @param {number} secs - seconds to convert
 * @returns {Object.<string, number>} converted hours
 */
Convert.secsToHrs = (secs) => Convert.msToHrs(Convert.secsToMs(secs))

/**
 * Converts seconds to days with remainders
 * @public
 * @static
 * @param {number} secs - seconds to convert
 * @returns {Object.<string, number>} converted days
 */
Convert.secsToDays = (secs) => Convert.msToDays(Convert.secsToMs(secs))

/**
 * Converts hours to milliseconds
 * @public
 * @static
 * @param {number} mins - minutes to convert
 * @returns {number} converted milliseconds
 */
Convert.minsToMs = (mins) => mins * secsPerMin * msPerSec

/**
 * Converts hours to seconds
 * @public
 * @static
 * @param {number} mins - minutes to convert
 * @returns {number} converted seconds
 */
Convert.minsToSecs = (mins) => mins * secsPerMin

/**
 * Converts minutes to hours with remainders
 * @public
 * @static
 * @param {number} mins - minutes to convert
 * @returns {Object.<string, number>} converted hours
 */
Convert.minsToHrs = (mins) => Convert.msToHrs(Convert.minsToMs(mins))

/**
 * Converts minutes to days with remainders
 * @public
 * @static
 * @param {number} mins - minutes to convert
 * @returns {Object.<string, number>} converted days
 */
Convert.minsToDays = (mins) => Convert.msToDays(Convert.minsToMs(mins))

/**
 * Converts hours to milliseconds
 * @public
 * @static
 * @param {number} hours - hours to convert
 * @returns {number} converted milliseconds
 */
Convert.hrsToMs = (hours) => hours * minsPerHr * secsPerMin * msPerSec

/**
 * Converts hours to seconds
 * @public
 * @static
 * @param {number} hours - hours to convert
 * @returns {number} converted seconds
 */
Convert.hrsToSecs = (hours) => hours * minsPerHr * secsPerMin

/**
 * Converts hours to minutes
 * @public
 * @static
 * @param {number} hours - hours to convert
 * @returns {number} converted minutes
 */
Convert.hrsToMins = (hours) => hours * minsPerHr

/**
 * Converts hours to days with remainders
 * @public
 * @static
 * @param {number} hrs - hours to convert
 * @returns {Object.<string, number>} converted days
 */
Convert.hrsToDays = (hrs) => Convert.msToDays(Convert.hrsToMs(hrs))

/**
 * Converts days to milliseconds
 * @public
 * @static
 * @param {number} days - days to convert
 * @returns {number} converted milliseconds
 */
Convert.daysToMs = (days) => days * hrsPerDay * minsPerHr * secsPerMin * msPerSec

/**
 * Converts days to seconds
 * @public
 * @static
 * @param {number} days - days to convert
 * @returns {number} converted seconds
 */
Convert.daysToSecs = (days) => days * hrsPerDay * minsPerHr * secsPerMin

/**
 * Converts days to minutes
 * @public
 * @static
 * @param {number} days - days to convert
 * @returns {number} converted minutes
 */
Convert.daysToMins = (days) => days * hrsPerDay * minsPerHr

/**
 * Converts days to hours
 * @public
 * @static
 * @param {number} days - days to convert
 * @returns {number} converted hours
 */
Convert.daysToHrs = (days) => days * hrsPerDay
// # sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc2lvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY29udmVyc2lvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFZQSxNQUFNLFNBQVMsR0FBRyxFQUFFLEVBQ2hCLFNBQVMsR0FBRyxFQUFFLEVBQ2QsVUFBVSxHQUFHLEVBQUUsRUFDZixRQUFRLEdBQUcsSUFBSSxDQUFBO0FBRW5COzs7O0dBSUc7QUFDSCxNQUFxQixPQUFRLFNBQVEsSUFBSTs7QUFBekMsMEJBMFBDO0FBeFBHOzs7Ozs7R0FNRztBQUNXLGdCQUFRLEdBQUcsQ0FBQyxFQUFVLEVBQXlCLEVBQUUsQ0FBQyxDQUM1RDtJQUNJLEVBQUUsRUFBRSxFQUFFLEdBQUcsUUFBUTtJQUNqQixPQUFPLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLFFBQVEsQ0FBQyxHQUFHLFFBQVE7Q0FDM0MsQ0FDSixDQUFBO0FBRUQ7Ozs7OztHQU1HO0FBQ1csZ0JBQVEsR0FBRyxDQUFDLEVBQVUsRUFBeUIsRUFBRTtJQUMzRCxNQUFNLFlBQVksR0FBRyxFQUFFLEdBQUcsUUFBUSxHQUFHLFFBQVEsRUFDekMsT0FBTyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLFFBQVEsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLFVBQVUsRUFDeEQsT0FBTyxHQUFHLENBQ04sRUFBRSxHQUFHLE9BQU8sR0FBRyxRQUFRLEdBQUcsWUFBWSxDQUN6QyxHQUFHLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxDQUFBO0lBRS9CLE9BQU87UUFDSCxFQUFFLEVBQUUsWUFBWTtRQUNoQixPQUFPO1FBQ1AsT0FBTztLQUNWLENBQUE7QUFDTCxDQUFDLENBQUE7QUFFRDs7Ozs7O0dBTUc7QUFDVyxlQUFPLEdBQUcsQ0FBQyxFQUFVLEVBQXVCLEVBQUU7SUFDeEQsTUFBTSxZQUFZLEdBQUcsRUFBRSxHQUFHLFFBQVEsR0FBRyxRQUFRLEVBQ3pDLE9BQU8sR0FBRyxDQUFD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


/***/ })
/******/ ]);
});