(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@reach/router"), require("core-js/modules/es6.array.iterator"), require("core-js/modules/es6.array.sort"), require("core-js/modules/es6.function.name"), require("core-js/modules/es6.map"), require("core-js/modules/es6.object.assign"), require("core-js/modules/es6.object.to-string"), require("core-js/modules/es6.regexp.constructor"), require("core-js/modules/es6.regexp.split"), require("core-js/modules/es6.regexp.to-string"), require("core-js/modules/es6.string.ends-with"), require("core-js/modules/es6.string.iterator"), require("core-js/modules/web.dom.iterable"), require("fs"), require("lodash"), require("path"), require("react"), require("react-dom/server"), require("react-helmet"));
	else if(typeof define === 'function' && define.amd)
		define("lib", ["@reach/router", "core-js/modules/es6.array.iterator", "core-js/modules/es6.array.sort", "core-js/modules/es6.function.name", "core-js/modules/es6.map", "core-js/modules/es6.object.assign", "core-js/modules/es6.object.to-string", "core-js/modules/es6.regexp.constructor", "core-js/modules/es6.regexp.split", "core-js/modules/es6.regexp.to-string", "core-js/modules/es6.string.ends-with", "core-js/modules/es6.string.iterator", "core-js/modules/web.dom.iterable", "fs", "lodash", "path", "react", "react-dom/server", "react-helmet"], factory);
	else if(typeof exports === 'object')
		exports["lib"] = factory(require("@reach/router"), require("core-js/modules/es6.array.iterator"), require("core-js/modules/es6.array.sort"), require("core-js/modules/es6.function.name"), require("core-js/modules/es6.map"), require("core-js/modules/es6.object.assign"), require("core-js/modules/es6.object.to-string"), require("core-js/modules/es6.regexp.constructor"), require("core-js/modules/es6.regexp.split"), require("core-js/modules/es6.regexp.to-string"), require("core-js/modules/es6.string.ends-with"), require("core-js/modules/es6.string.iterator"), require("core-js/modules/web.dom.iterable"), require("fs"), require("lodash"), require("path"), require("react"), require("react-dom/server"), require("react-helmet"));
	else
		root["lib"] = factory(root["@reach/router"], root["core-js/modules/es6.array.iterator"], root["core-js/modules/es6.array.sort"], root["core-js/modules/es6.function.name"], root["core-js/modules/es6.map"], root["core-js/modules/es6.object.assign"], root["core-js/modules/es6.object.to-string"], root["core-js/modules/es6.regexp.constructor"], root["core-js/modules/es6.regexp.split"], root["core-js/modules/es6.regexp.to-string"], root["core-js/modules/es6.string.ends-with"], root["core-js/modules/es6.string.iterator"], root["core-js/modules/web.dom.iterable"], root["fs"], root["lodash"], root["path"], root["react"], root["react-dom/server"], root["react-helmet"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__reach_router__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_iterator__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_sort__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_function_name__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_map__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_assign__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_to_string__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_constructor__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_split__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_to_string__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_ends_with__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_iterator__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_web_dom_iterable__, __WEBPACK_EXTERNAL_MODULE_fs__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_path__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom_server__, __WEBPACK_EXTERNAL_MODULE_react_helmet__) {
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./.cache/static-entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./.cache/api-runner-ssr.js":
/*!**********************************!*\
  !*** ./.cache/api-runner-ssr.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var plugins = [{
  plugin: __webpack_require__(/*! ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr */ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js"),
  options: {
    "plugins": []
  }
}]; // During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

var apis = __webpack_require__(/*! ./api-ssr-docs */ "./.cache/api-ssr-docs.js"); // Run the specified API in any plugins that have implemented it


module.exports = function (api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log("This API doesn't exist", api);
  } // Run each plugin in series.
  // eslint-disable-next-line no-undef


  var results = plugins.map(function (plugin) {
    if (!plugin.plugin[api]) {
      return undefined;
    }

    var result = plugin.plugin[api](args, plugin.options);

    if (result && argTransform) {
      args = argTransform({
        args: args,
        result: result
      });
    }

    return result;
  }); // Filter out undefined results.

  results = results.filter(function (result) {
    return typeof result !== "undefined";
  });

  if (results.length > 0) {
    return results;
  } else {
    return [defaultReturn];
  }
};

/***/ }),

/***/ "./.cache/api-ssr-docs.js":
/*!********************************!*\
  !*** ./.cache/api-ssr-docs.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Replace the default server renderer. This is useful for integration with
 * Redux, css-in-js libraries, etc. that need custom setups for server
 * rendering.
 * @param {Object} $0
 * @param {function} $0.replaceBodyHTMLString Call this with the HTML string
 * you render. **WARNING** if multiple plugins implement this API it's the
 * last plugin that "wins". TODO implement an automated warning against this.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {Object} pluginOptions
 * @example
 * // From gatsby-plugin-glamor
 * const { renderToString } = require("react-dom/server")
 * const inline = require("glamor-inline")
 *
 * exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
 *   const bodyHTML = renderToString(bodyComponent)
 *   const inlinedHTML = inline(bodyHTML)
 *
 *   replaceBodyHTMLString(inlinedHTML)
 * }
 */
exports.replaceRenderer = true;
/**
 * Called after every page Gatsby server renders while building HTML so you can
 * set head and body components to be rendered in your `html.js`.
 *
 * Gatsby does a two-pass render for HTML. It loops through your pages first
 * rendering only the body and then takes the result body HTML string and
 * passes it as the `body` prop to your `html.js` to complete the render.
 *
 * It's often handy to be able to send custom components to your `html.js`.
 * For example, it's a very common pattern for React.js libraries that
 * support server rendering to pull out data generated during the render to
 * add to your HTML.
 *
 * Using this API over [`replaceRenderer`](#replaceRenderer) is preferable as
 * multiple plugins can implement this API where only one plugin can take
 * over server rendering. However, if your plugin requires taking over server
 * rendering then that's the one to
 * use
 * @param {Object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {Object} pluginOptions
 * @example
 * const { Helmet } = require("react-helmet")
 *
 * exports.onRenderBody = (
 *   { setHeadComponents, setHtmlAttributes, setBodyAttributes },
 *   pluginOptions
 * ) => {
 *   const helmet = Helmet.renderStatic()
 *   setHtmlAttributes(helmet.htmlAttributes.toComponent())
 *   setBodyAttributes(helmet.bodyAttributes.toComponent())
 *   setHeadComponents([
 *     helmet.title.toComponent(),
 *     helmet.link.toComponent(),
 *     helmet.meta.toComponent(),
 *     helmet.noscript.toComponent(),
 *     helmet.script.toComponent(),
 *     helmet.style.toComponent(),
 *   ])
 * }
 */

exports.onRenderBody = true;
/**
 * Called after every page Gatsby server renders while building HTML so you can
 * replace head components to be rendered in your `html.js`. This is useful if
 * you need to reorder scripts or styles added by other plugins.
 * @param {Object} $0
 * @param {Array<ReactNode>} $0.getHeadComponents Returns the current `headComponents` array.
 * @param {function} $0.replaceHeadComponents Takes an array of components as its
 * first argument which replace the `headComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPreBodyComponents Returns the current `preBodyComponents` array.
 *  @param {function} $0.replacePreBodyComponents Takes an array of components as its
 * first argument which replace the `preBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPostBodyComponents Returns the current `postBodyComponents` array.
 *  @param {function} $0.replacePostBodyComponents Takes an array of components as its
 * first argument which replace the `postBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Object} pluginOptions
 * @example
 * // Move Typography.js styles to the top of the head section so they're loaded first.
 * exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
 *   const headComponents = getHeadComponents()
 *   headComponents.sort((x, y) => {
 *     if (x.key === 'TypographyStyle') {
 *       return -1
 *     } else if (y.key === 'TypographyStyle') {
 *       return 1
 *     }
 *     return 0
 *   })
 *   replaceHeadComponents(headComponents)
 * }
 */

exports.onPreRenderHTML = true;
/**
 * Allow a plugin to wrap the page element.
 *
 * This is useful for setting wrapper component around pages that won't get
 * unmounted on page change. For setting Provider components use [wrapRootElement](#wrapRootElement).
 *
 * _Note:_ [There is equivalent hook in Browser API](/docs/browser-apis/#wrapPageElement)
 * @param {object} $0
 * @param {ReactNode} $0.element The "Page" React Element built by Gatsby.
 * @param {object} $0.props Props object used by page.
 * @example
 * import React from "react"
 * import Layout from "./src/components/layout"
 *
 * export const wrapPageElement = ({ element, props }) => {
 *   // props provide same data to Layout as Page element will get
 *   // including location, data, etc - you don't need to pass it
 *   return <Layout {...props}>{element}</Layout>
 * }
 */

exports.wrapPageElement = true;
/**
 * Allow a plugin to wrap the root element.
 *
 * This is useful to setup any Providers component that will wrap your application.
 * For setting persistent UI elements around pages use [wrapPageElement](#wrapPageElement).
 *
 * _Note:_ [There is equivalent hook in Browser API](/docs/browser-apis/#wrapRootElement)
 * @param {object} $0
 * @param {ReactNode} $0.element The "Root" React Element built by Gatsby.
 * @example
 * import React from "react"
 * import { Provider } from "react-redux"
 *
 * import createStore from "./src/state/createStore"
 * const store = createStore()
 *
 * export const wrapRootElement = ({ element }) => {
 *   return (
 *     <Provider store={store}>
 *       {element}
 *     </Provider>
 *   )
 * }
 */

exports.wrapRootElement = true;

/***/ }),

/***/ "./.cache/data.json":
/*!**************************!*\
  !*** ./.cache/data.json ***!
  \**************************/
/*! exports provided: pages, dataPaths, default */
/***/ (function(module) {

module.exports = {"pages":[{"componentChunkName":"component---src-pages-index-js","jsonName":"index","path":"/"},{"componentChunkName":"component---src-pages-404-js","jsonName":"404-html-516","path":"/404.html"},{"componentChunkName":"component---src-pages-404-js","jsonName":"404-22d","path":"/404/"},{"componentChunkName":"component---src-pages-about-js","jsonName":"about-f34","path":"/about/"},{"componentChunkName":"component---src-pages-contact-js","jsonName":"contact-26a","path":"/contact/"},{"componentChunkName":"component---src-pages-services-js","jsonName":"services-522","path":"/services/"}],"dataPaths":{"404-22d":"820/path---404-22-d-bce-0SUcWyAf8ecbYDsMhQkEfPzV8","404-html-516":"285/path---404-html-516-62a-0SUcWyAf8ecbYDsMhQkEfPzV8","about-f34":"708/path---about-f-34-4c2-0SUcWyAf8ecbYDsMhQkEfPzV8","contact-26a":"279/path---contact-26-a-cd9-0SUcWyAf8ecbYDsMhQkEfPzV8","dev-404-page-5f9":"386/path---dev-404-page-5-f-9-fab-0SUcWyAf8ecbYDsMhQkEfPzV8","index":"140/path---index-6a9-0SUcWyAf8ecbYDsMhQkEfPzV8","services-522":"984/path---services-522-7f2-0SUcWyAf8ecbYDsMhQkEfPzV8","sq--src-components-layout-js":410629607}};

/***/ }),

/***/ "./.cache/default-html.js":
/*!********************************!*\
  !*** ./.cache/default-html.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HTML; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


function HTML(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html", props.htmlAttributes, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("head", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    httpEquiv: "x-ua-compatible",
    content: "ie=edge"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no"
  }), props.headComponents), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body", props.bodyAttributes, props.preBodyComponents, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("noscript", {
    key: "noscript",
    id: "gatsby-noscript"
  }, "This app works best with JavaScript enabled."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: "body",
    id: "___gatsby",
    dangerouslySetInnerHTML: {
      __html: props.body
    }
  }), props.postBodyComponents));
}
HTML.propTypes = {
  htmlAttributes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  headComponents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  bodyAttributes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  preBodyComponents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  body: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  postBodyComponents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};

/***/ }),

/***/ "./.cache/gatsby-browser-entry.js":
/*!****************************************!*\
  !*** ./.cache/gatsby-browser-entry.js ***!
  \****************************************/
/*! exports provided: Link, withPrefix, graphql, parsePath, navigate, push, replace, navigateTo, StaticQueryContext, StaticQuery, PageRenderer, useStaticQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return graphql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQueryContext", function() { return StaticQueryContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQuery", function() { return StaticQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStaticQuery", function() { return useStaticQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["withPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["parsePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "push", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["push"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["replace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigateTo"]; });

/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./public-page-renderer */ "./.cache/public-page-renderer.js");
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "PageRenderer", function() { return _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default.a; });




var StaticQueryContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});

var StaticQuery = function StaticQuery(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryContext.Consumer, null, function (staticQueryData) {
    if (props.data || staticQueryData[props.query] && staticQueryData[props.query].data) {
      return (props.render || props.children)(props.data ? props.data.data : staticQueryData[props.query].data);
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading (StaticQuery)");
    }
  });
};

var useStaticQuery = function useStaticQuery(query) {
  if (typeof react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext !== "function" && "production" === "development") {
    throw new Error("You're likely using a version of React that doesn't support Hooks\n" + "Please update React and ReactDOM to 16.8.0 or later to use the useStaticQuery hook.");
  }

  var context = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(StaticQueryContext);

  if (context[query] && context[query].data) {
    return context[query].data;
  } else {
    throw new Error("The result of this StaticQuery could not be fetched.\n\n" + "This is likely a bug in Gatsby and if refreshing the page does not fix it, " + "please open an issue in https://github.com/gatsbyjs/gatsby/issues");
  }
};

StaticQuery.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  render: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

function graphql() {
  throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls " + "are supposed to only be evaluated at compile time, and then compiled away,. " + "Unfortunately, something went wrong and the query was left in the compiled code.\n\n." + "Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.");
}



/***/ }),

/***/ "./.cache/public-page-renderer.js":
/*!****************************************!*\
  !*** ./.cache/public-page-renderer.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

if (false) {} else if (false) {} else {
  module.exports = function () {
    return null;
  };
}

/***/ }),

/***/ "./.cache/static-entry.js":
/*!********************************!*\
  !*** ./.cache/static-entry.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.string.ends-with */ "core-js/modules/es6.string.ends-with");
/* harmony import */ var core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "core-js/modules/es6.function.name");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.sort */ "core-js/modules/es6.array.sort");
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "core-js/modules/es6.object.assign");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "core-js/modules/es6.regexp.to-string");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "core-js/modules/es6.regexp.split");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.regexp.constructor */ "core-js/modules/es6.regexp.constructor");
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "core-js/modules/web.dom.iterable");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "core-js/modules/es6.array.iterator");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "core-js/modules/es6.object.to-string");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es6.string.iterator */ "core-js/modules/es6.string.iterator");
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es6.map */ "core-js/modules/es6.map");
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_12__);














var React = __webpack_require__(/*! react */ "react");

var fs = __webpack_require__(/*! fs */ "fs");

var _require = __webpack_require__(/*! path */ "path"),
    join = _require.join;

var _require2 = __webpack_require__(/*! react-dom/server */ "react-dom/server"),
    renderToString = _require2.renderToString,
    renderToStaticMarkup = _require2.renderToStaticMarkup;

var _require3 = __webpack_require__(/*! @reach/router */ "@reach/router"),
    ServerLocation = _require3.ServerLocation,
    Router = _require3.Router,
    isRedirect = _require3.isRedirect;

var _require4 = __webpack_require__(/*! lodash */ "lodash"),
    get = _require4.get,
    merge = _require4.merge,
    isObject = _require4.isObject,
    flatten = _require4.flatten,
    uniqBy = _require4.uniqBy;

var apiRunner = __webpack_require__(/*! ./api-runner-ssr */ "./.cache/api-runner-ssr.js");

var syncRequires = __webpack_require__(/*! ./sync-requires */ "./.cache/sync-requires.js");

var _require5 = __webpack_require__(/*! ./data.json */ "./.cache/data.json"),
    dataPaths = _require5.dataPaths,
    pages = _require5.pages;

var _require6 = __webpack_require__(/*! gatsby/package.json */ "./node_modules/gatsby/package.json"),
    gatsbyVersion = _require6.version; // Speed up looking up pages.


var pagesObjectMap = new Map();
pages.forEach(function (p) {
  return pagesObjectMap.set(p.path, p);
});
var stats = JSON.parse(fs.readFileSync(process.cwd() + "/public/webpack.stats.json", "utf-8"));
var chunkMapping = JSON.parse(fs.readFileSync(process.cwd() + "/public/chunk-map.json", "utf-8")); // const testRequireError = require("./test-require-error")
// For some extremely mysterious reason, webpack adds the above module *after*
// this module so that when this code runs, testRequireError is undefined.
// So in the meantime, we'll just inline it.

var testRequireError = function testRequireError(moduleName, err) {
  var regex = new RegExp("Error: Cannot find module\\s." + moduleName);
  var firstLine = err.toString().split("\n")[0];
  return regex.test(firstLine);
};

var Html;

try {
  Html = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../src/html'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
} catch (err) {
  if (testRequireError("../src/html", err)) {
    Html = __webpack_require__(/*! ./default-html */ "./.cache/default-html.js");
  } else {
    throw err;
  }
}

Html = Html && Html.__esModule ? Html.default : Html;

var getPage = function getPage(path) {
  return pagesObjectMap.get(path);
};

var createElement = React.createElement;

var sanitizeComponents = function sanitizeComponents(components) {
  if (Array.isArray(components)) {
    // remove falsy items
    return components.filter(function (val) {
      return Array.isArray(val) ? val.length > 0 : val;
    });
  } else {
    // we also accept single components, so we need to handle this case as well
    return components ? [components] : [];
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function (pagePath, callback) {
  var _postBodyComponents;

  var bodyHtml = "";
  var headComponents = [React.createElement("meta", {
    name: "generator",
    content: "Gatsby " + gatsbyVersion,
    key: "generator-" + gatsbyVersion
  })];
  var htmlAttributes = {};
  var bodyAttributes = {};
  var preBodyComponents = [];
  var postBodyComponents = [];
  var bodyProps = {};

  var replaceBodyHTMLString = function replaceBodyHTMLString(body) {
    bodyHtml = body;
  };

  var setHeadComponents = function setHeadComponents(components) {
    headComponents = headComponents.concat(sanitizeComponents(components));
  };

  var setHtmlAttributes = function setHtmlAttributes(attributes) {
    htmlAttributes = merge(htmlAttributes, attributes);
  };

  var setBodyAttributes = function setBodyAttributes(attributes) {
    bodyAttributes = merge(bodyAttributes, attributes);
  };

  var setPreBodyComponents = function setPreBodyComponents(components) {
    preBodyComponents = preBodyComponents.concat(sanitizeComponents(components));
  };

  var setPostBodyComponents = function setPostBodyComponents(components) {
    postBodyComponents = postBodyComponents.concat(sanitizeComponents(components));
  };

  var setBodyProps = function setBodyProps(props) {
    bodyProps = merge({}, bodyProps, props);
  };

  var getHeadComponents = function getHeadComponents() {
    return headComponents;
  };

  var replaceHeadComponents = function replaceHeadComponents(components) {
    headComponents = sanitizeComponents(components);
  };

  var getPreBodyComponents = function getPreBodyComponents() {
    return preBodyComponents;
  };

  var replacePreBodyComponents = function replacePreBodyComponents(components) {
    preBodyComponents = sanitizeComponents(components);
  };

  var getPostBodyComponents = function getPostBodyComponents() {
    return postBodyComponents;
  };

  var replacePostBodyComponents = function replacePostBodyComponents(components) {
    postBodyComponents = sanitizeComponents(components);
  };

  var page = getPage(pagePath);
  var dataAndContext = {};

  if (page.jsonName in dataPaths) {
    var pathToJsonData = join(process.cwd(), "/public/static/d", dataPaths[page.jsonName] + ".json");

    try {
      dataAndContext = JSON.parse(fs.readFileSync(pathToJsonData));
    } catch (e) {
      console.log("error", pathToJsonData, e);
      process.exit();
    }
  }

  var RouteHandler =
  /*#__PURE__*/
  function (_React$Component) {
    _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4___default()(RouteHandler, _React$Component);

    function RouteHandler() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = RouteHandler.prototype;

    _proto.render = function render() {
      var props = Object.assign({}, this.props, dataAndContext, {
        pathContext: dataAndContext.pageContext
      });
      var pageElement = createElement(syncRequires.components[page.componentChunkName], props);
      var wrappedPage = apiRunner("wrapPageElement", {
        element: pageElement,
        props: props
      }, pageElement, function (_ref) {
        var result = _ref.result;
        return {
          element: result,
          props: props
        };
      }).pop();
      return wrappedPage;
    };

    return RouteHandler;
  }(React.Component);

  var routerElement = createElement(ServerLocation, {
    url: "" + "" + pagePath
  }, createElement(Router, {
    baseuri: "" + ""
  }, createElement(RouteHandler, {
    path: "/*"
  })));
  var bodyComponent = apiRunner("wrapRootElement", {
    element: routerElement,
    pathname: pagePath
  }, routerElement, function (_ref2) {
    var result = _ref2.result;
    return {
      element: result,
      pathname: pagePath
    };
  }).pop(); // Let the site or plugin render the page component.

  apiRunner("replaceRenderer", {
    bodyComponent: bodyComponent,
    replaceBodyHTMLString: replaceBodyHTMLString,
    setHeadComponents: setHeadComponents,
    setHtmlAttributes: setHtmlAttributes,
    setBodyAttributes: setBodyAttributes,
    setPreBodyComponents: setPreBodyComponents,
    setPostBodyComponents: setPostBodyComponents,
    setBodyProps: setBodyProps,
    pathname: pagePath,
    pathPrefix: ""
  }); // If no one stepped up, we'll handle it.

  if (!bodyHtml) {
    try {
      bodyHtml = renderToString(bodyComponent);
    } catch (e) {
      // ignore @reach/router redirect errors
      if (!isRedirect(e)) throw e;
    }
  } // Create paths to scripts


  var scriptsAndStyles = flatten(["app", page.componentChunkName].map(function (s) {
    var fetchKey = "assetsByChunkName[" + s + "]";
    var chunks = get(stats, fetchKey);
    var namedChunkGroups = get(stats, "namedChunkGroups");

    if (!chunks) {
      return null;
    }

    chunks = chunks.map(function (chunk) {
      if (chunk === "/") {
        return null;
      }

      return {
        rel: "preload",
        name: chunk
      };
    });
    namedChunkGroups[s].assets.forEach(function (asset) {
      return chunks.push({
        rel: "preload",
        name: asset
      });
    });
    var childAssets = namedChunkGroups[s].childAssets;

    var _loop = function _loop(rel) {
      chunks = merge(chunks, childAssets[rel].map(function (chunk) {
        return {
          rel: rel,
          name: chunk
        };
      }));
    };

    for (var rel in childAssets) {
      _loop(rel);
    }

    return chunks;
  })).filter(function (s) {
    return isObject(s);
  }).sort(function (s1, s2) {
    return s1.rel == "preload" ? -1 : 1;
  }); // given priority to preload

  scriptsAndStyles = uniqBy(scriptsAndStyles, function (item) {
    return item.name;
  });
  var scripts = scriptsAndStyles.filter(function (script) {
    return script.name && script.name.endsWith(".js");
  });
  var styles = scriptsAndStyles.filter(function (style) {
    return style.name && style.name.endsWith(".css");
  });
  apiRunner("onRenderBody", {
    setHeadComponents: setHeadComponents,
    setHtmlAttributes: setHtmlAttributes,
    setBodyAttributes: setBodyAttributes,
    setPreBodyComponents: setPreBodyComponents,
    setPostBodyComponents: setPostBodyComponents,
    setBodyProps: setBodyProps,
    pathname: pagePath,
    bodyHtml: bodyHtml,
    scripts: scripts,
    styles: styles,
    pathPrefix: ""
  });
  scripts.slice(0).reverse().forEach(function (script) {
    // Add preload/prefetch <link>s for scripts.
    headComponents.push(React.createElement("link", {
      as: "script",
      rel: script.rel,
      key: script.name,
      href: "" + "/" + script.name
    }));
  });

  if (page.jsonName in dataPaths) {
    var dataPath = "" + "/static/d/" + dataPaths[page.jsonName] + ".json";
    headComponents.push(React.createElement("link", {
      as: "fetch",
      rel: "preload",
      key: dataPath,
      href: dataPath,
      crossOrigin: "use-credentials"
    }));
  }

  styles.slice(0).reverse().forEach(function (style) {
    // Add <link>s for styles that should be prefetched
    // otherwise, inline as a <style> tag
    if (style.rel === "prefetch") {
      headComponents.push(React.createElement("link", {
        as: "style",
        rel: style.rel,
        key: style.name,
        href: "" + "/" + style.name
      }));
    } else {
      headComponents.unshift(React.createElement("style", {
        "data-href": "" + "/" + style.name,
        dangerouslySetInnerHTML: {
          __html: fs.readFileSync(join(process.cwd(), "public", style.name), "utf-8")
        }
      }));
    }
  }); // Add page metadata for the current page

  var windowData = "/*<![CDATA[*/window.page=" + JSON.stringify(page) + ";" + (page.jsonName in dataPaths ? "window.dataPath=\"" + dataPaths[page.jsonName] + "\";" : "") + "/*]]>*/";
  postBodyComponents.push(React.createElement("script", {
    key: "script-loader",
    id: "gatsby-script-loader",
    dangerouslySetInnerHTML: {
      __html: windowData
    }
  })); // Add chunk mapping metadata

  var scriptChunkMapping = "/*<![CDATA[*/window.___chunkMapping=" + JSON.stringify(chunkMapping) + ";/*]]>*/";
  postBodyComponents.push(React.createElement("script", {
    key: "chunk-mapping",
    id: "gatsby-chunk-mapping",
    dangerouslySetInnerHTML: {
      __html: scriptChunkMapping
    }
  })); // Filter out prefetched bundles as adding them as a script tag
  // would force high priority fetching.

  var bodyScripts = scripts.filter(function (s) {
    return s.rel !== "prefetch";
  }).map(function (s) {
    var scriptPath = "" + "/" + JSON.stringify(s.name).slice(1, -1);
    return React.createElement("script", {
      key: scriptPath,
      src: scriptPath,
      async: true
    });
  });

  (_postBodyComponents = postBodyComponents).push.apply(_postBodyComponents, bodyScripts);

  apiRunner("onPreRenderHTML", {
    getHeadComponents: getHeadComponents,
    replaceHeadComponents: replaceHeadComponents,
    getPreBodyComponents: getPreBodyComponents,
    replacePreBodyComponents: replacePreBodyComponents,
    getPostBodyComponents: getPostBodyComponents,
    replacePostBodyComponents: replacePostBodyComponents,
    pathname: pagePath,
    pathPrefix: ""
  });
  var html = "<!DOCTYPE html>" + renderToStaticMarkup(React.createElement(Html, Object.assign({}, bodyProps, {
    headComponents: headComponents,
    htmlAttributes: htmlAttributes,
    bodyAttributes: bodyAttributes,
    preBodyComponents: preBodyComponents,
    postBodyComponents: postBodyComponents,
    body: bodyHtml,
    path: pagePath
  })));
  callback(null, html);
});

/***/ }),

/***/ "./.cache/sync-requires.js":
/*!*********************************!*\
  !*** ./.cache/sync-requires.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! react-hot-loader/root */ "./node_modules/react-hot-loader/root.js"),
    hot = _require.hot; // prefer default export if available


var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

exports.components = {
  "component---src-pages-404-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/404.js */ "./src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/about.js */ "./src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/contact.js */ "./src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/index.js */ "./src/pages/index.js"))),
  "component---src-pages-services-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/services.js */ "./src/pages/services.js")))
};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/gatsby-link/index.js":
/*!*******************************************!*\
  !*** ./node_modules/gatsby-link/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.withPrefix = withPrefix;
exports.navigateTo = exports.replace = exports.push = exports.navigate = exports.default = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! @reach/router */ "@reach/router");

var _parsePath = __webpack_require__(/*! ./parse-path */ "./node_modules/gatsby-link/parse-path.js");

exports.parsePath = _parsePath.parsePath;

/*global __PATH_PREFIX__ */
function withPrefix(path) {
  return normalizePath("" + "/" + path);
}

function normalizePath(path) {
  return path.replace(/\/+/g, "/");
}

var NavLinkPropTypes = {
  activeClassName: _propTypes.default.string,
  activeStyle: _propTypes.default.object,
  partiallyActive: _propTypes.default.bool // Set up IntersectionObserver

};

var handleIntersection = function handleIntersection(el, cb) {
  var io = new window.IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (el === entry.target) {
        // Check if element is within viewport, remove listener, destroy observer, and run link callback.
        // MSEdge doesn't currently support isIntersecting, so also test for  an intersectionRatio > 0
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          io.unobserve(el);
          io.disconnect();
          cb();
        }
      }
    });
  }); // Add element to the observer

  io.observe(el);
};

var GatsbyLink =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(GatsbyLink, _React$Component);

  function GatsbyLink(props) {
    var _this;

    _this = _React$Component.call(this, props) || this; // Default to no support for IntersectionObserver

    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "defaultGetProps", function (_ref) {
      var isPartiallyCurrent = _ref.isPartiallyCurrent,
          isCurrent = _ref.isCurrent;

      if (_this.props.partiallyActive ? isPartiallyCurrent : isCurrent) {
        return {
          className: [_this.props.className, _this.props.activeClassName].filter(Boolean).join(" "),
          style: (0, _extends2.default)({}, _this.props.style, _this.props.activeStyle)
        };
      }

      return null;
    });
    var IOSupported = false;

    if (typeof window !== "undefined" && window.IntersectionObserver) {
      IOSupported = true;
    }

    _this.state = {
      IOSupported: IOSupported
    };
    _this.handleRef = _this.handleRef.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }

  var _proto = GatsbyLink.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // Preserve non IO functionality if no support
    if (this.props.to !== prevProps.to && !this.state.IOSupported) {
      ___loader.enqueue((0, _parsePath.parsePath)(this.props.to).pathname);
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    // Preserve non IO functionality if no support
    if (!this.state.IOSupported) {
      ___loader.enqueue((0, _parsePath.parsePath)(this.props.to).pathname);
    }
  };

  _proto.handleRef = function handleRef(ref) {
    var _this2 = this;

    if (this.props.innerRef && this.props.innerRef.hasOwnProperty("current")) {
      this.props.innerRef.current = ref;
    } else if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    if (this.state.IOSupported && ref) {
      // If IO supported and element reference found, setup Observer functionality
      handleIntersection(ref, function () {
        ___loader.enqueue((0, _parsePath.parsePath)(_this2.props.to).pathname);
      });
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props = this.props,
        to = _this$props.to,
        _this$props$getProps = _this$props.getProps,
        getProps = _this$props$getProps === void 0 ? this.defaultGetProps : _this$props$getProps,
        _onClick = _this$props.onClick,
        _onMouseEnter = _this$props.onMouseEnter,
        $activeClassName = _this$props.activeClassName,
        $activeStyle = _this$props.activeStyle,
        $innerRef = _this$props.innerRef,
        partiallyActive = _this$props.partiallyActive,
        state = _this$props.state,
        replace = _this$props.replace,
        rest = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["to", "getProps", "onClick", "onMouseEnter", "activeClassName", "activeStyle", "innerRef", "partiallyActive", "state", "replace"]);
    var LOCAL_URL = /^\/(?!\/)/;

    if (false) {}

    var prefixedTo = withPrefix(to);
    return _react.default.createElement(_router.Link, (0, _extends2.default)({
      to: prefixedTo,
      state: state,
      getProps: getProps,
      innerRef: this.handleRef,
      onMouseEnter: function onMouseEnter(e) {
        if (_onMouseEnter) {
          _onMouseEnter(e);
        }

        ___loader.hovering((0, _parsePath.parsePath)(to).pathname);
      },
      onClick: function onClick(e) {
        if (_onClick) {
          _onClick(e);
        }

        if (e.button === 0 && // ignore right clicks
        !_this3.props.target && // let browser handle "target=_blank"
        !e.defaultPrevented && // onClick prevented default
        !e.metaKey && // ignore clicks with modifier keys...
        !e.altKey && !e.ctrlKey && !e.shiftKey) {
          e.preventDefault(); // Make sure the necessary scripts and data are
          // loaded before continuing.

          navigate(to, {
            state: state,
            replace: replace
          });
        }

        return true;
      }
    }, rest));
  };

  return GatsbyLink;
}(_react.default.Component);

GatsbyLink.propTypes = (0, _extends2.default)({}, NavLinkPropTypes, {
  onClick: _propTypes.default.func,
  to: _propTypes.default.string.isRequired,
  replace: _propTypes.default.bool
});

var _default = _react.default.forwardRef(function (props, ref) {
  return _react.default.createElement(GatsbyLink, (0, _extends2.default)({
    innerRef: ref
  }, props));
});

exports.default = _default;

var navigate = function navigate(to, options) {
  window.___navigate(withPrefix(to), options);
};

exports.navigate = navigate;

var push = function push(to) {
  console.warn("The \"push\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");

  window.___push(withPrefix(to));
};

exports.push = push;

var replace = function replace(to) {
  console.warn("The \"replace\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");

  window.___replace(withPrefix(to));
}; // TODO: Remove navigateTo for Gatsby v3


exports.replace = replace;

var navigateTo = function navigateTo(to) {
  console.warn("The \"navigateTo\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");
  return push(to);
};

exports.navigateTo = navigateTo;

/***/ }),

/***/ "./node_modules/gatsby-link/parse-path.js":
/*!************************************************!*\
  !*** ./node_modules/gatsby-link/parse-path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parsePath = parsePath;

function parsePath(path) {
  var pathname = path || "/";
  var search = "";
  var hash = "";
  var hashIndex = pathname.indexOf("#");

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf("?");

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === "?" ? "" : search,
    hash: hash === "#" ? "" : hash
  };
}

/***/ }),

/***/ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js":
/*!***************************************************************!*\
  !*** ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.onRenderBody = void 0;

var _reactHelmet = __webpack_require__(/*! react-helmet */ "react-helmet");

var onRenderBody = function onRenderBody(_ref) {
  var setHeadComponents = _ref.setHeadComponents,
      setHtmlAttributes = _ref.setHtmlAttributes,
      setBodyAttributes = _ref.setBodyAttributes;

  var helmet = _reactHelmet.Helmet.renderStatic(); // These action functions were added partway through the Gatsby 1.x cycle.


  if (setHtmlAttributes) {
    setHtmlAttributes(helmet.htmlAttributes.toComponent());
  }

  if (setBodyAttributes) {
    setBodyAttributes(helmet.bodyAttributes.toComponent());
  }

  setHeadComponents([helmet.title.toComponent(), helmet.link.toComponent(), helmet.meta.toComponent(), helmet.noscript.toComponent(), helmet.script.toComponent(), helmet.style.toComponent()]);
};

exports.onRenderBody = onRenderBody;

/***/ }),

/***/ "./node_modules/gatsby/package.json":
/*!******************************************!*\
  !*** ./node_modules/gatsby/package.json ***!
  \******************************************/
/*! exports provided: name, description, version, author, bin, bugs, dependencies, devDependencies, engines, files, homepage, keywords, license, main, module, peerDependencies, repository, resolutions, scripts, types, yargs, gitHead, default */
/***/ (function(module) {

module.exports = {"name":"gatsby","description":"Blazing fast modern site generator for React","version":"2.3.14","author":"Kyle Mathews <mathews.kyle@gmail.com>","bin":{"gatsby":"./dist/bin/gatsby.js"},"bugs":{"url":"https://github.com/gatsbyjs/gatsby/issues"},"dependencies":{"@babel/code-frame":"^7.0.0","@babel/core":"^7.0.0","@babel/parser":"^7.0.0","@babel/polyfill":"^7.0.0","@babel/runtime":"^7.0.0","@babel/traverse":"^7.0.0","@gatsbyjs/relay-compiler":"2.0.0-printer-fix.2","@mikaelkristiansson/domready":"^1.0.9","@pieh/friendly-errors-webpack-plugin":"1.7.0-chalk-2","@reach/router":"^1.1.1","@stefanprobst/lokijs":"^1.5.6-b","address":"1.0.3","autoprefixer":"^9.4.3","babel-core":"7.0.0-bridge.0","babel-eslint":"^9.0.0","babel-loader":"^8.0.0","babel-plugin-add-module-exports":"^0.2.1","babel-plugin-dynamic-import-node":"^1.2.0","babel-plugin-remove-graphql-queries":"^2.6.3","babel-preset-gatsby":"^0.1.11","better-opn":"0.1.4","better-queue":"^3.8.6","bluebird":"^3.5.0","browserslist":"3.2.8","cache-manager":"^2.9.0","cache-manager-fs-hash":"^0.0.6","chalk":"^2.3.2","chokidar":"2.1.2","common-tags":"^1.4.0","compression":"^1.7.3","convert-hrtime":"^2.0.0","copyfiles":"^1.2.0","core-js":"^2.5.0","css-loader":"^1.0.0","debug":"^3.1.0","del":"^3.0.0","detect-port":"^1.2.1","devcert-san":"^0.3.3","dotenv":"^4.0.0","eslint":"^5.6.0","eslint-config-react-app":"^3.0.0","eslint-loader":"^2.1.0","eslint-plugin-flowtype":"^2.46.1","eslint-plugin-graphql":"^2.0.0","eslint-plugin-import":"^2.9.0","eslint-plugin-jsx-a11y":"^6.0.3","eslint-plugin-react":"^7.8.2","event-source-polyfill":"^1.0.5","express":"^4.16.3","express-graphql":"^0.6.12","fast-levenshtein":"~2.0.4","file-loader":"^1.1.11","flat":"^4.0.0","fs-exists-cached":"1.0.0","fs-extra":"^5.0.0","gatsby-cli":"^2.5.5","gatsby-link":"^2.0.16","gatsby-plugin-page-creator":"^2.0.12","gatsby-react-router-scroll":"^2.0.7","gatsby-telemetry":"^1.0.5","glob":"^7.1.1","graphql":"^14.1.1","graphql-compose":"^6.0.3","graphql-playground-middleware-express":"^1.7.10","graphql-relay":"^0.6.0","graphql-tools":"^3.0.4","hash-mod":"^0.0.5","invariant":"^2.2.4","is-relative":"^1.0.0","is-relative-url":"^2.0.0","is-wsl":"^1.1.0","jest-worker":"^23.2.0","joi":"12.x.x","json-loader":"^0.5.7","json-stringify-safe":"^5.0.1","kebab-hash":"^0.1.2","lodash":"^4.17.10","md5":"^2.2.1","md5-file":"^3.1.1","mime":"^2.2.0","mini-css-extract-plugin":"^0.4.0","mitt":"^1.1.2","mkdirp":"^0.5.1","moment":"^2.21.0","name-all-modules-plugin":"^1.0.1","normalize-path":"^2.1.1","null-loader":"^0.1.1","opentracing":"^0.14.3","optimize-css-assets-webpack-plugin":"^5.0.1","parseurl":"^1.3.2","physical-cpu-count":"^2.0.0","pnp-webpack-plugin":"^1.4.1","postcss-flexbugs-fixes":"^3.0.0","postcss-loader":"^2.1.3","prop-types":"^15.6.1","raw-loader":"^0.5.1","react-dev-utils":"^4.2.1","react-error-overlay":"^3.0.0","react-hot-loader":"^4.6.2","redux":"^4.0.0","request":"^2.85.0","semver":"^5.6.0","shallow-compare":"^1.2.2","sift":"^5.1.0","signal-exit":"^3.0.2","slash":"^1.0.0","socket.io":"^2.0.3","stack-trace":"^0.0.10","string-similarity":"^1.2.0","style-loader":"^0.21.0","terser-webpack-plugin":"^1.2.2","true-case-path":"^1.0.3","type-of":"^2.0.1","url-loader":"^1.0.1","util.promisify":"^1.0.0","uuid":"^3.1.0","v8-compile-cache":"^1.1.0","webpack":"~4.28.4","webpack-dev-middleware":"^3.0.1","webpack-dev-server":"^3.1.14","webpack-hot-middleware":"^2.21.0","webpack-merge":"^4.1.0","webpack-stats-plugin":"^0.1.5","xstate":"^4.3.2","yaml-loader":"^0.5.0"},"devDependencies":{"@babel/cli":"^7.0.0","@babel/runtime":"^7.0.0","babel-preset-gatsby-package":"^0.1.4","cross-env":"^5.1.4","rimraf":"^2.6.1"},"engines":{"node":">=6.0.0"},"files":["cache-dir","dist","graphql.js","index.d.ts"],"homepage":"https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby#readme","keywords":["blog","generator","jekyll","markdown","react","ssg","website"],"license":"MIT","main":"cache-dir/commonjs/gatsby-browser-entry.js","module":"cache-dir/gatsby-browser-entry.js","peerDependencies":{"react":"^16.4.2","react-dom":"^16.4.2"},"repository":{"type":"git","url":"git+https://github.com/gatsbyjs/gatsby.git"},"resolutions":{"graphql":"^14.1.1"},"scripts":{"build":"npm run build:src && npm run build:internal-plugins && npm run build:rawfiles && npm run build:cjs","build:internal-plugins":"copyfiles -u 1 src/internal-plugins/**/package.json dist","build:rawfiles":"copyfiles -u 1 src/internal-plugins/**/raw_* dist","build:cjs":"babel cache-dir --out-dir cache-dir/commonjs --ignore **/__tests__","build:src":"babel src --out-dir dist --source-maps --ignore **/gatsby-cli.js,**/raw_*,**/__tests__","clean-test-bundles":"find test/ -type f -name bundle.js* -exec rm -rf {} +","prebuild":"rimraf dist && rimraf cache-dir/commonjs","prepare":"cross-env NODE_ENV=production npm run build","watch":"rimraf dist && mkdir dist && npm run build:internal-plugins && npm run build:rawfiles && npm run build:src -- --watch"},"types":"index.d.ts","yargs":{"boolean-negation":false},"gitHead":"169c9640938864414189bfb744694678bf973a89"};

/***/ }),

/***/ "./node_modules/prop-types/factoryWithThrowingShims.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithThrowingShims.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(/*! ./factoryWithThrowingShims */ "./node_modules/prop-types/factoryWithThrowingShims.js")();
}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-hot-loader/root.js":
/*!***********************************************!*\
  !*** ./node_modules/react-hot-loader/root.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) { var parent, cache, hot; } else {
  // prod mode
  exports.hot = function(a) {
    return a
  }
}


/***/ }),

/***/ "./public/static/d/410629607.json":
/*!****************************************!*\
  !*** ./public/static/d/410629607.json ***!
  \****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"site":{"siteMetadata":{"title":"Restorer Motors","menu":[{"key":"home","title":"Home","url":"/"},{"key":"services","title":"Services","url":"/services"},{"key":"about","title":"About","url":"/about"},{"key":"contact","title":"Contact","url":"/contact"}]}}}};

/***/ }),

/***/ "./src/assets/images/banner-pickup.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/banner-pickup.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/banner-pickup-5a44d8a19b7ec924c5fae5805a6475a2.jpg";

/***/ }),

/***/ "./src/assets/images/banner-service-price.jpg":
/*!****************************************************!*\
  !*** ./src/assets/images/banner-service-price.jpg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/banner-service-price-3d258bfe9a99e5fdc386089669317a89.jpg";

/***/ }),

/***/ "./src/assets/images/brand-new-tyres.jpg":
/*!***********************************************!*\
  !*** ./src/assets/images/brand-new-tyres.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/brand-new-tyres-89af508f2d4870ba6400aca2121df9a3.jpg";

/***/ }),

/***/ "./src/assets/images/fix_it.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/fix_it.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/fix_it-61d39e4cd7c551c5f376775f8e7c1d46.jpg";

/***/ }),

/***/ "./src/assets/images/full-service.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/full-service.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/full-service-a7a3909a8374d6a458fcc7d1900ee227.jpg";

/***/ }),

/***/ "./src/assets/images/intirim-service.jpg":
/*!***********************************************!*\
  !*** ./src/assets/images/intirim-service.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/intirim-service-0af00b0c1334c0ed496e9c3b9461bc15.jpg";

/***/ }),

/***/ "./src/assets/images/map.png":
/*!***********************************!*\
  !*** ./src/assets/images/map.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/map-08944a5816e6155ff73bb7f010ea93cd.png";

/***/ }),

/***/ "./src/assets/images/mot-logo.png":
/*!****************************************!*\
  !*** ./src/assets/images/mot-logo.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/mot-logo-9449272fa68d67295d06ffaad246580d.png";

/***/ }),

/***/ "./src/assets/images/motors-logo.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/motors-logo.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/motors-logo-0e7fc3567cd74ba23b013ef43beabf0f.svg";

/***/ }),

/***/ "./src/assets/images/picknfix.jpg":
/*!****************************************!*\
  !*** ./src/assets/images/picknfix.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/picknfix-a5514ca73cc72104cbe45146165383e7.jpg";

/***/ }),

/***/ "./src/assets/images/recovery-van.png":
/*!********************************************!*\
  !*** ./src/assets/images/recovery-van.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/scss/index.scss":
/*!************************************!*\
  !*** ./src/assets/scss/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/carousel.js":
/*!************************************!*\
  !*** ./src/components/carousel.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Carousel; });
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_4__);





var CAROUSEL_TIMER_INTERVAL = 5000;

var Carousel =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(Carousel, _Component);

  function Carousel(context, props) {
    var _this;

    _this = _Component.call(this, context, props) || this;
    _this.state = {
      index: 0
    };
    _this.handleNext = _this.handleNext.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this));
    _this.handlePrevious = _this.handlePrevious.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this));
    _this.handleTimer = _this.handleTimer.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this));
    return _this;
  }

  var _proto = Carousel.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.handleTimer();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = undefined;
  };

  _proto.handleNext = function handleNext(e) {
    e.preventDefault();
    this.setState(function (prev, props) {
      return {
        index: prev.index >= props.items.length - 1 ? 0 : prev.index + 1
      };
    });
  };

  _proto.handlePrevious = function handlePrevious(e) {
    e.preventDefault();
    var index = this.state.index;
    var items = this.props.items;
    var newIndex = index <= 0 ? items.length - 1 : index - 1;
    this.setState({
      index: newIndex
    });
  };

  _proto.handleTimer = function handleTimer() {
    var _this2 = this;

    this.timer = setInterval(function () {
      _this2.setState(function (prevState, props) {
        return {
          index: prevState.index >= props.items.length - 1 ? 0 : prevState.index + 1
        };
      });
    }, CAROUSEL_TIMER_INTERVAL);
  };

  _proto.render = function render() {
    var items = this.props.items;
    var index = this.state.index;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "carousel slide",
      "data-ride": "carousel"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ol", {
      className: "carousel-indicators"
    }, items.map(function (item, index_) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
        key: item.key,
        className: index === index_ ? 'active' : ''
      });
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "carousel-inner"
    }, items.map(function (item, index_) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: index === index_ ? 'carousel-item active' : 'carousel-item',
        key: item.key,
        style: {
          backgroundImage: "url(" + item.image + ")"
        }
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "carousel-caption text-left"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", null, item.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, item.content), item.url ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: "btn btn-lg btn-primary",
        to: item.url,
        role: "button"
      }, "Learn more")) : undefined)));
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      className: "carousel-control-prev",
      role: "button",
      "data-slide": "prev",
      onClick: this.handlePrevious,
      href: "#previous"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "carousel-control-prev-icon",
      "aria-hidden": "true"
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "sr-only"
    }, "Previous")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      className: "carousel-control-next",
      role: "button",
      "data-slide": "next",
      onClick: this.handleNext,
      href: "#next"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "carousel-control-next-icon",
      "aria-hidden": "true"
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "sr-only"
    }, "Next")));
  };

  return Carousel;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);


Carousel.propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    key: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    image: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.stirng,
    content: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    url: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
  })).isRequired
};

/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_motors_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/motors-logo.svg */ "./src/assets/images/motors-logo.svg");
/* harmony import */ var _assets_images_motors_logo_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_motors_logo_svg__WEBPACK_IMPORTED_MODULE_1__);



var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "footer-section"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-8"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("address", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_motors_logo_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
    alt: "Company Logo"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Restorer Motors"), "12 Conway Road, Plumstead,", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "London,", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "SE18 1AQ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-phone"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "tel:+442083174430"
  }, "020 8317 4430"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "footer-heading"
  }, "Opening Times"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "opening-time"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Mon:"), ' 8:30am - 6:30pm'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Tue:"), ' 8:30am - 6:30pm'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Wed:"), ' 8:30am - 6:30pm'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Thu:"), ' 8:30am - 6:30pm'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Fri:"), ' 8:30am - 6:30pm'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Sat:"), ' 8:30am - 6:30pm'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Sun:"), ' Closed'))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_motors_logo_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/motors-logo.svg */ "./src/assets/images/motors-logo.svg");
/* harmony import */ var _assets_images_motors_logo_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_motors_logo_svg__WEBPACK_IMPORTED_MODULE_5__);







var Header =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(Header, _React$Component);

  function Header(context, props) {
    var _this;

    _this = _React$Component.call(this, context, props) || this;
    _this.state = {
      open: false
    };
    _this.handleToggleMenu = _this.handleToggleMenu.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this));
    return _this;
  }

  var _proto = Header.prototype;

  _proto.handleToggleMenu = function handleToggleMenu(e) {
    e.preventDefault();
    this.setState(function (prev) {
      return {
        open: !prev.open
      };
    });
  };

  _proto.render = function render() {
    var _this$props = this.props,
        siteTitle = _this$props.siteTitle,
        siteMenu = _this$props.siteMenu;
    var open = this.state.open;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("nav", {
      className: "navbar navbar-expand-md navbar-dark fixed-top bg-dark"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "container"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      to: "/",
      className: "navbar"
    }, _assets_images_motors_logo_svg__WEBPACK_IMPORTED_MODULE_5___default.a ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      src: _assets_images_motors_logo_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
      alt: "logo"
    }) : siteTitle), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
      className: "navbar-toggler collapsed",
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbarCollapse",
      "aria-controls": "navbarCollapse",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation",
      onClick: this.handleToggleMenu
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "navbar-toggler-icon"
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: open ? 'navbar-collapse collapse show' : 'navbar-collapse collapse',
      id: "navbarCollapse"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
      className: "navbar-nav ml-auto"
    }, siteMenu.map(function (item) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
        key: item.key,
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        key: item.key,
        to: item.url,
        className: "nav-link"
      }, item.title));
    })))));
  };

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);


Header.propTypes = {
  siteTitle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  siteMenu: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    key: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
    url: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
    title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired
  })).isRequired
};

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_410629607_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/static/d/410629607.json */ "./public/static/d/410629607.json");
var _public_static_d_410629607_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/static/d/410629607.json */ "./public/static/d/410629607.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header */ "./src/components/header.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer */ "./src/components/footer.js");
/* harmony import */ var _assets_scss_index_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/scss/index.scss */ "./src/assets/scss/index.scss");
/* harmony import */ var _assets_scss_index_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_index_scss__WEBPACK_IMPORTED_MODULE_7__);









var Layout = function Layout(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["StaticQuery"], {
    query: "410629607",
    render: function render(_ref2) {
      var site = _ref2.site;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_4___default.a, {
        defaultTitle: site.siteMetadata.title,
        meta: [{
          name: 'description',
          content: 'Restorer Motors'
        }, {
          name: 'keywords',
          content: 'restorer, motors, garage, plumstead, woolwich, london, repair, fix'
        }]
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_header__WEBPACK_IMPORTED_MODULE_5__["default"], {
        siteTitle: site.siteMetadata.title,
        siteMenu: site.siteMetadata.menu
      }), children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_footer__WEBPACK_IMPORTED_MODULE_6__["default"], null));
    },
    data: _public_static_d_410629607_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

Layout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/pages/404.js":
/*!**************************!*\
  !*** ./src/pages/404.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");



var NotFoundPage = function NotFoundPage() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "NOT FOUND"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "You just hit a route that doesn't exist... the sadness."));
};

/* harmony default export */ __webpack_exports__["default"] = (NotFoundPage);

/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sections_section_about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sections/section-about */ "./src/sections/section-about.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");



var logoSVGStyle = {
  opacity: 1,
  fill: 'rgb(116, 121, 126)',
  fillOpacity: 1,
  stroke: 'none',
  strokeWidth: 0.69999999,
  strokeLinejoin: 'miter',
  strokeMiterlimit: 4,
  strokeDasharray: 'none',
  strokeDashoffset: 0,
  strokeOpacity: 0.88757396
};
var logoTextStyle = {
  fontStyle: 'normal',
  fontVariant: 'normal',
  fontWeight: '900',
  fontStretch: 'normal',
  fontSize: '27.19413948px',
  lineHeight: '100%',
  fontFamily: 'Umpush',
  textAlign: 'start',
  letterSpacing: '0px',
  wordSpacing: '0px',
  writingMode: 'lr-tb',
  textAnchor: 'start',
  fill: 'rgb(116, 121, 126)',
  fillOpacity: 1,
  stroke: 'none',
  strokeWidth: '1px',
  strokeLinecap: 'butt',
  strokeLinejoin: 'miter',
  strokeOpacity: 1
};

var About = function About() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    role: "main",
    className: "main-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center",
    style: {
      maxWidth: '700px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "78.936325mm",
    height: "35.407242mm",
    viewBox: "0 0 279.69564 125.45873",
    id: "svg4171",
    version: "1.1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "layer1",
    transform: "translate(-11.75772,-9.9185619)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "path4254",
    style: logoSVGStyle,
    d: "m 250.02757,35.921239 c -11.41498,1.2e-5 -20.66866,5.099568 -20.66875,11.390217 9e-5,6.290648 9.25377,11.390204 20.66875,11.390216 5.49795,-0.003 10.76718,-1.213019 14.64214,-3.362416 -3.37806,1.042242 -7.33916,1.598957 -11.39087,1.600937 -11.41489,-1.1e-5 -20.66853,-4.31091 -20.66875,-9.628737 -1.7e-4,-5.317952 9.25359,-9.629048 20.66875,-9.629059 4.05792,0.0021 8.02473,0.560711 11.4058,1.606073 -3.87717,-2.153185 -9.15268,-3.365151 -14.65707,-3.367231 z M 49.881603,37.548468 c -12.304793,1.4e-5 -22.279813,5.435807 -22.27991,12.141227 9.8e-5,6.70542 9.975118,12.141212 22.27991,12.141226 5.926528,-0.0032 11.606502,-1.292998 15.78352,-3.584115 -3.641383,1.110961 -7.911263,1.704384 -12.27881,1.706493 -12.304697,-1.1e-5 -22.279677,-4.595149 -22.27991,-10.263604 -1.79e-4,-5.668589 9.974922,-10.263936 22.27991,-10.263947 4.374243,0.0023 8.650258,0.597683 12.29489,1.71197 -4.179396,-2.295154 -9.866138,-3.587031 -15.7996,-3.58925 z m 5.07892,-13.459667 c -2.87754,-1.831163 17.95192,-6.434979 39.651307,-5.66447 21.69939,0.77051 54.16648,16.63938 54.16648,16.63938 0,0 -75.006077,-2.628457 -82.134797,-3.540292 -7.12873,-0.911835 -11.68299,-7.434618 -11.68299,-7.434618 z m -41.77545,-1.416117 c 0,0 49.87471,-10.958566 80.010647,-11.328942 30.13591,-0.370374 41.10738,12.456743 66.55751,15.223266 25.45012,2.766523 47.28605,-3.607605 85.32107,-0.708059 38.03504,2.899545 44.96174,25.490114 44.96174,25.490114 0,0 -14.73499,-16.016913 -43.62693,-20.222948 -28.01565,-4.078469 -63.46854,4.400629 -82.40754,2.875507 -34.3052,-2.762531 -30.52951,-15.83103 -70.45182,-19.117584 -39.922307,-3.286555 -44.655827,10.906865 -63.017227,11.32894 -18.3614,0.422076 -17.34745,-3.540294 -17.34745,-3.540294 z m 247.201297,104.254246 3.04966,-0.39151 c 0.18355,1.35161 0.55417,2.34434 1.11186,2.9782 0.56475,0.63387 1.32363,0.9508 2.27664,0.9508 1.00949,0 1.76838,-0.27964 2.27665,-0.83893 0.51533,-0.56861 0.773,-1.23044 0.773,-1.98547 0,-0.48473 -0.10942,-0.89487 -0.32827,-1.23043 -0.21178,-0.3449 -0.58593,-0.64319 -1.12244,-0.89486 -0.36709,-0.16779 -1.20362,-0.46609 -2.5096,-0.89488 -1.68013,-0.54996 -2.85904,-1.22577 -3.53675,-2.02742 -0.95301,-1.1279 -1.42952,-2.50281 -1.42952,-4.12474 0,-1.044 0.22237,-2.0181 0.66711,-2.92229 0.4518,-0.9135 1.09773,-1.60795 1.9378,-2.08334 0.84713,-0.4754 1.8672,-0.7131 3.06023,-0.7131 1.94839,0 3.41321,0.56395 4.39446,1.69186 0.98832,1.12789 1.50719,2.6333 1.5566,4.51625 l -3.13437,0.18177 c -0.13413,-1.05333 -0.42356,-1.80838 -0.86829,-2.26513 -0.43769,-0.46607 -1.09774,-0.69911 -1.98017,-0.69911 -0.91065,0 -1.62365,0.24702 -2.13898,0.74106 -0.33179,0.31693 -0.49768,0.74106 -0.49768,1.27238 0,0.48473 0.1553,0.89953 0.46591,1.24442 0.39532,0.4381 1.3554,0.89485 2.88023,1.37025 1.52482,0.47541 2.65079,0.96944 3.3779,1.48211 0.73418,0.50336 1.30599,1.19781 1.71543,2.08336 0.4165,0.87621 0.62475,1.96216 0.62475,3.25784 0,1.17452 -0.24708,2.27446 -0.74123,3.29981 -0.49415,1.02536 -1.19303,1.78972 -2.09662,2.29308 -0.90361,0.49403 -2.02958,0.74105 -3.37792,0.74105 -1.96251,0 -3.46969,-0.59657 -4.52153,-1.78971 -1.05185,-1.20247 -1.68013,-2.95024 -1.88486,-5.24332 z m -8.92655,6.66949 0,-17.0303 -4.60624,0 0,-3.4676 12.33625,0 0,3.4676 -4.59566,0 0,17.0303 z m -18.77439,-6.66949 3.04966,-0.39151 c 0.18354,1.35161 0.55415,2.34434 1.11183,2.9782 0.56475,0.63387 1.32364,0.9508 2.27666,0.9508 1.00949,0 1.76837,-0.27964 2.27665,-0.83893 0.51533,-0.56861 0.773,-1.23044 0.773,-1.98547 0,-0.48473 -0.10942,-0.89487 -0.32827,-1.23043 -0.21178,-0.3449 -0.58593,-0.64319 -1.12244,-0.89486 -0.36708,-0.16779 -1.20361,-0.46609 -2.5096,-0.89488 -1.68013,-0.54996 -2.85905,-1.22577 -3.53675,-2.02742 -0.95301,-1.1279 -1.42952,-2.50281 -1.42952,-4.12474 0,-1.044 0.22237,-2.0181 0.66711,-2.92229 0.4518,-0.9135 1.09774,-1.60795 1.93781,-2.08334 0.84712,-0.4754 1.86719,-0.7131 3.06022,-0.7131 1.94839,0 3.41321,0.56395 4.39446,1.69186 0.98831,1.12789 1.50718,2.6333 1.5566,4.51625 l -3.13437,0.18177 c -0.13413,-1.05333 -0.42356,-1.80838 -0.86829,-2.26513 -0.43768,-0.46607 -1.09774,-0.69911 -1.98017,-0.69911 -0.91065,0 -1.62365,0.24702 -2.13898,0.74106 -0.33179,0.31693 -0.49768,0.74106 -0.49768,1.27238 0,0.48473 0.1553,0.89953 0.46591,1.24442 0.39532,0.4381 1.3554,0.89485 2.88023,1.37025 1.52482,0.47541 2.65078,0.96944 3.37789,1.48211 0.73418,0.50336 1.30599,1.19781 1.71544,2.08336 0.4165,0.87621 0.62475,1.96216 0.62475,3.25784 0,1.17452 -0.24708,2.27446 -0.74123,3.29981 -0.49415,1.02536 -1.19303,1.78972 -2.09664,2.29308 -0.9036,0.49403 -2.02957,0.74105 -3.3779,0.74105 -1.96251,0 -3.46968,-0.59657 -4.52153,-1.78971 -1.05185,-1.20247 -1.68013,-2.95024 -1.88485,-5.24332 z m -5.31571,6.66949 0,-20.4979 3.13436,0 0,20.4979 z m -13.07746,0 0,-20.33011 3.13435,0 0,16.87651 7.79355,0 0,3.4536 z m -1.80014,0 -3.40969,0 -1.35539,-4.65605 -6.20518,0 -1.28129,4.65605 -3.32495,0 6.04634,-20.4979 3.31437,0 z m -5.77104,-8.10966 -2.13899,-7.60632 -2.09663,7.60632 z m -14.33756,8.10966 0,-20.4979 3.13435,0 0,20.4979 z m -5.64397,-7.53641 3.03905,1.27238 c -0.46591,2.23715 -1.24244,3.90104 -2.32959,4.99166 -1.08007,1.0813 -2.45312,1.62195 -4.11914,1.62195 -2.06133,0 -3.75558,-0.92749 -5.08274,-2.78248 -1.32715,-1.86429 -1.99073,-4.40905 -1.99073,-7.63428 0,-3.41166 0.66711,-6.05896 2.00133,-7.94189 1.33422,-1.89226 3.08847,-2.83839 5.26274,-2.83839 1.89899,0 3.44146,0.74106 4.62743,2.22318 0.70593,0.87621 1.23538,2.13461 1.58835,3.77519 l -3.10259,0.97877 c -0.18355,-1.06265 -0.56828,-1.90159 -1.15421,-2.51682 -0.57886,-0.61521 -1.2848,-0.92282 -2.11781,-0.92282 -1.15068,0 -2.08605,0.54531 -2.8061,1.63593 -0.713,1.09061 -1.0695,2.85702 -1.0695,5.29924 0,2.59136 0.35297,4.43702 1.05891,5.53697 0.70595,1.09993 1.62367,1.6499 2.75317,1.6499 0.833,0 1.54952,-0.34955 2.14956,-1.04866 0.60005,-0.69912 1.03068,-1.79906 1.29187,-3.29983 z m -24.41833,7.53641 0,-20.4979 11.51028,0 0,3.4676 -8.37594,0 0,4.5442 7.79355,0 0,3.4536 -7.79355,0 0,5.5789 8.67244,0 0,3.4536 z m -14.48583,0 0,-20.4979 5.0298,0 c 1.90603,0 3.14848,0.10254 3.72735,0.30761 0.88947,0.30761 1.63424,0.97875 2.23429,2.01344 0.60004,1.02536 0.90006,2.35367 0.90006,3.98492 0,1.2584 -0.17296,2.31639 -0.51887,3.17396 -0.3459,0.85757 -0.78711,1.53337 -1.32362,2.02742 -0.52946,0.48473 -1.0695,0.80632 -1.62013,0.96478 -0.7483,0.19575 -1.83191,0.29362 -3.25083,0.29362 l -2.04368,0 0,7.73215 z m 3.13437,-17.0303 0,5.81659 1.71541,0 c 1.23539,0 2.06134,-0.1072 2.47784,-0.3216 0.4165,-0.21439 0.74123,-0.54997 0.9742,-1.00672 0.24001,-0.45675 0.36002,-0.98807 0.36002,-1.59398 0,-0.74571 -0.16589,-1.36092 -0.49768,-1.84563 -0.33179,-0.48473 -0.75183,-0.78767 -1.26011,-0.90884 -0.37414,-0.0932 -1.12596,-0.13982 -2.25545,-0.13982 z m -18.41437,10.36081 3.04966,-0.39151 c 0.18354,1.35161 0.55415,2.34434 1.11183,2.9782 0.56475,0.63387 1.32364,0.9508 2.27666,0.9508 1.00949,0 1.76836,-0.27964 2.27663,-0.83893 0.51535,-0.56861 0.77302,-1.23044 0.77302,-1.98547 0,-0.48473 -0.10942,-0.89487 -0.32827,-1.23043 -0.21178,-0.3449 -0.58593,-0.64319 -1.12244,-0.89486 -0.36708,-0.16779 -1.20361,-0.46609 -2.5096,-0.89488 -1.68013,-0.54996 -2.85905,-1.22577 -3.53675,-2.02742 -0.95301,-1.1279 -1.42952,-2.50281 -1.42952,-4.12474 0,-1.044 0.22237,-2.0181 0.66711,-2.92229 0.4518,-0.9135 1.09774,-1.60795 1.93781,-2.08334 0.84712,-0.4754 1.86719,-0.7131 3.06022,-0.7131 1.94839,0 3.41321,0.56395 4.39446,1.69186 0.9883,1.12789 1.50717,2.6333 1.5566,4.51625 l -3.13437,0.18177 c -0.13413,-1.05333 -0.42356,-1.80838 -0.86831,-2.26513 -0.43767,-0.46607 -1.09772,-0.69911 -1.98015,-0.69911 -0.91065,0 -1.62365,0.24702 -2.13899,0.74106 -0.33178,0.31693 -0.49767,0.74106 -0.49767,1.27238 0,0.48473 0.1553,0.89953 0.46591,1.24442 0.39532,0.4381 1.35539,0.89485 2.88021,1.37025 1.52483,0.47541 2.6508,0.96944 3.37791,1.48211 0.73418,0.50336 1.30599,1.19781 1.71544,2.08336 0.4165,0.87621 0.62475,1.96216 0.62475,3.25784 0,1.17452 -0.24708,2.27446 -0.74125,3.29981 -0.49415,1.02536 -1.19303,1.78972 -2.09662,2.29308 -0.9036,0.49403 -2.02957,0.74105 -3.3779,0.74105 -1.96251,0 -3.46968,-0.59657 -4.52151,-1.78971 -1.05185,-1.20247 -1.68014,-2.95024 -1.88487,-5.24332 z m -19.70623,6.66949 0,-20.4979 11.5103,0 0,3.4676 -8.37593,0 0,4.5442 7.79353,0 0,3.4536 -7.79353,0 0,5.5789 8.67243,0 0,3.4536 z m -13.17276,0 0,-20.33011 3.13435,0 0,16.87651 7.79354,0 0,3.4536 z m -5.82399,-7.53641 3.03906,1.27238 c -0.465913,2.23715 -1.24244,3.90104 -2.32958,4.99166 -1.080093,1.0813 -2.45314,1.62195 -4.11914,1.62195 -2.061347,0 -3.755596,-0.92749 -5.082747,-2.78248 -1.327173,-1.86429 -1.99076,-4.40905 -1.99076,-7.63428 0,-3.41166 0.667117,-6.05896 2.00135,-7.94189 1.334218,-1.89226 3.088464,-2.83839 5.262737,-2.83839 1.898973,0 3.441447,0.74106 4.62742,2.22318 0.70594,0.87621 1.235397,2.13461 1.58837,3.77519 l -3.10258,0.97877 c -0.183553,-1.06265 -0.568297,-1.90159 -1.15423,-2.51682 -0.57886,-0.61521 -1.284797,-0.92282 -2.11781,-0.92282 -1.150667,0 -2.086033,0.54531 -2.8061,1.63593 -0.712987,1.09061 -1.06948,2.85702 -1.06948,5.29924 0,2.59136 0.352967,4.43702 1.0589,5.53697 0.70594,1.09993 1.62366,1.6499 2.75316,1.6499 0.833,0 1.549527,-0.34955 2.14958,-1.04866 0.60004,-0.69912 1.030657,-1.79906 1.29185,-3.29983 z m -16.042397,7.53641 0,-20.4979 3.13434,0 0,20.4979 z m -15.56591,0 0,-20.4979 3.13435,0 0,8.06772 6.14166,0 0,-8.06772 3.13437,0 0,20.4979 -3.13437,0 0,-8.96258 -6.14166,0 0,8.96258 z m -14.49641,0 0,-20.4979 11.5103,0 0,3.4676 -8.37594,0 0,4.5442 7.79353,0 0,3.4536 -7.79353,0 0,5.5789 8.67243,0 0,3.4536 z m -10.52551,0 -5.54866,-20.4979 3.39908,0 3.92853,15.1707 3.80148,-15.1707 3.32497,0 -5.55926,20.4979 z m 199.192997,-43.50925 13.74975,0 0,9.8865 c 0,0.98165 0.9422,1.47247 2.82661,1.47247 1.82053,0 2.7308,-0.49082 2.7308,-1.47247 l 0,-5.10852 c 0,-1.5626 -1.66083,-3.39566 -4.98249,-5.49918 -6.41975,-3.906513 -10.41213,-6.530893 -11.97715,-7.87314 -1.56501,-1.342247 -2.34752,-2.814707 -2.34752,-4.41738 l 0,-4.83806 c 0,-5.589339 5.81291,-8.384008 17.43873,-8.384008 10.41213,0 15.61819,2.544246 15.61819,7.632738 l 0,7.45244 -13.74976,0 0,-7.93325 c 0,-0.86142 -0.75057,-1.29213 -2.25171,-1.29213 -1.75664,0 -2.63496,0.83138 -2.63496,2.49414 l 0.28743,2.79466 c 0,1.60268 1.69277,3.465797 5.07831,5.58935 6.292,3.786313 10.28438,6.430723 11.97715,7.93323 1.72471,1.50252 2.58706,3.205367 2.58706,5.10854 l 0,5.49918 c 0,5.72956 -5.82888,8.59434 -17.48663,8.59434 -11.24254,0 -16.86381,-2.60435 -16.86381,-7.81304 z m -1.96425,17.3089 -15.09121,0 c -1.62888,-1.22205 -2.44332,-4.68783 -2.44332,-10.39736 l 0,-0.0601 0.0958,-2.5843 c 0.0958,-3.585993 0.14371,-5.419053 0.14371,-5.49918 0,-1.462447 -1.56501,-2.19367 -4.69503,-2.19367 l 0,20.67451 -15.09119,0 0,-43.09193 18.63643,0 c 4.24789,0 7.93684,0.611017 11.06687,1.83305 3.16197,1.222047 4.74296,3.155277 4.74296,5.79969 l 0,5.16863 c 0,3.345587 -3.11406,5.609367 -9.34218,6.79134 6.26005,0.92154 9.39007,3.295503 9.39007,7.12189 l -0.23953,4.71787 c 0,6.89151 0.9422,10.79803 2.82661,11.71957 z m -17.29501,-28.24716 0,-7.09184 c 0,-1.5025 -1.56501,-2.25375 -4.69503,-2.25375 l 0,11.6294 c 3.13002,0 4.69503,-0.76127 4.69503,-2.28381 z m -57.68187,20.82476 0,-27.73628 c 0,-5.589339 5.78096,-8.384008 17.34289,-8.384008 11.40223,0 17.10334,2.774629 17.10334,8.323888 l 0,27.73631 c 0,2.50417 -1.59695,4.4374 -4.79086,5.79969 -3.16195,1.34223 -7.29805,2.01335 -12.4083,2.01335 -11.49805,0 -17.24707,-2.58432 -17.24707,-7.75295 z m 19.6904,0.45076 0,-29.35901 c 0,-0.86144 -0.81444,-1.29216 -2.44333,-1.29216 -1.69277,0 -2.53916,0.43072 -2.53916,1.29216 l 0,29.35901 c 0,0.86145 0.84639,1.29217 2.53916,1.29217 1.62889,0 2.44333,-0.43072 2.44333,-1.29217 z m -22.3733,-30.56101 -8.43189,0 0,37.47255 -15.09121,0 0,-37.47255 -8.4319,0 0,-5.619386 31.955,0 z m -69.17996,30.11025 0,-27.73628 c 0,-5.589339 5.78097,-8.384008 17.34291,-8.384008 11.40223,0 17.10334,2.774629 17.10334,8.323888 l 0,27.73631 c 0,2.50417 -1.59694,4.4374 -4.79083,5.79969 -3.16198,1.34223 -7.29809,2.01335 -12.40833,2.01335 -11.49806,0 -17.24709,-2.58432 -17.24709,-7.75295 z m 19.69043,0.45076 0,-29.35901 c 0,-0.86144 -0.81445,-1.29216 -2.44334,-1.29216 -1.69278,0 -2.53917,0.43072 -2.53917,1.29216 l 0,29.35901 c 0,0.86145 0.84639,1.29217 2.53917,1.29217 1.62889,0 2.44334,-0.43072 2.44334,-1.29217 z m -22.948217,6.91154 -13.46228,0 0,-24.19037 -7.85701,24.19037 -10.39616,0 -9.00679,-24.19037 0,24.19037 -11.78551,0 0,-43.091936 19.40294,0 6.89886,22.357316 5.98856,-22.357316 20.21739,0 z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    style: logoTextStyle,
    x: "63.56612",
    y: "62.971485",
    id: "text4136",
    transform: "scale(1.0708822,0.93380956)"
  }, "RESTORER")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sections_section_about__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _assets_images_map_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/map.png */ "./src/assets/images/map.png");
/* harmony import */ var _assets_images_map_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_map_png__WEBPACK_IMPORTED_MODULE_2__);



var mapStyle = {
  backgroundImage: "url(" + _assets_images_map_png__WEBPACK_IMPORTED_MODULE_2___default.a + ")",
  backgroundPosition: 'center center',
  backgroundSize: 'cover',
  height: '500px'
};
var logoSVGStyle = {
  opacity: 1,
  fill: 'rgb(116, 121, 126)',
  fillOpacity: 1,
  stroke: 'none',
  strokeWidth: 0.69999999,
  strokeLinejoin: 'miter',
  strokeMiterlimit: 4,
  strokeDasharray: 'none',
  strokeDashoffset: 0,
  strokeOpacity: 0.88757396
};
var logoTextStyle = {
  fontStyle: 'normal',
  fontVariant: 'normal',
  fontWeight: '900',
  fontStretch: 'normal',
  fontSize: '27.19413948px',
  lineHeight: '100%',
  fontFamily: 'Umpush',
  textAlign: 'start',
  letterSpacing: '0px',
  wordSpacing: '0px',
  writingMode: 'lr-tb',
  textAnchor: 'start',
  fill: 'rgb(116, 121, 126)',
  fillOpacity: 1,
  stroke: 'none',
  strokeWidth: '1px',
  strokeLinecap: 'butt',
  strokeLinejoin: 'miter',
  strokeOpacity: 1
};

var Contact = function Contact() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    role: "main",
    className: "main-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "page-section",
    style: mapStyle
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center",
    style: {
      maxWidth: '700px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "78.936325mm",
    height: "35.407242mm",
    viewBox: "0 0 279.69564 125.45873",
    id: "svg4171",
    version: "1.1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "layer1",
    transform: "translate(-11.75772,-9.9185619)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "path4254",
    style: logoSVGStyle,
    d: "m 250.02757,35.921239 c -11.41498,1.2e-5 -20.66866,5.099568 -20.66875,11.390217 9e-5,6.290648 9.25377,11.390204 20.66875,11.390216 5.49795,-0.003 10.76718,-1.213019 14.64214,-3.362416 -3.37806,1.042242 -7.33916,1.598957 -11.39087,1.600937 -11.41489,-1.1e-5 -20.66853,-4.31091 -20.66875,-9.628737 -1.7e-4,-5.317952 9.25359,-9.629048 20.66875,-9.629059 4.05792,0.0021 8.02473,0.560711 11.4058,1.606073 -3.87717,-2.153185 -9.15268,-3.365151 -14.65707,-3.367231 z M 49.881603,37.548468 c -12.304793,1.4e-5 -22.279813,5.435807 -22.27991,12.141227 9.8e-5,6.70542 9.975118,12.141212 22.27991,12.141226 5.926528,-0.0032 11.606502,-1.292998 15.78352,-3.584115 -3.641383,1.110961 -7.911263,1.704384 -12.27881,1.706493 -12.304697,-1.1e-5 -22.279677,-4.595149 -22.27991,-10.263604 -1.79e-4,-5.668589 9.974922,-10.263936 22.27991,-10.263947 4.374243,0.0023 8.650258,0.597683 12.29489,1.71197 -4.179396,-2.295154 -9.866138,-3.587031 -15.7996,-3.58925 z m 5.07892,-13.459667 c -2.87754,-1.831163 17.95192,-6.434979 39.651307,-5.66447 21.69939,0.77051 54.16648,16.63938 54.16648,16.63938 0,0 -75.006077,-2.628457 -82.134797,-3.540292 -7.12873,-0.911835 -11.68299,-7.434618 -11.68299,-7.434618 z m -41.77545,-1.416117 c 0,0 49.87471,-10.958566 80.010647,-11.328942 30.13591,-0.370374 41.10738,12.456743 66.55751,15.223266 25.45012,2.766523 47.28605,-3.607605 85.32107,-0.708059 38.03504,2.899545 44.96174,25.490114 44.96174,25.490114 0,0 -14.73499,-16.016913 -43.62693,-20.222948 -28.01565,-4.078469 -63.46854,4.400629 -82.40754,2.875507 -34.3052,-2.762531 -30.52951,-15.83103 -70.45182,-19.117584 -39.922307,-3.286555 -44.655827,10.906865 -63.017227,11.32894 -18.3614,0.422076 -17.34745,-3.540294 -17.34745,-3.540294 z m 247.201297,104.254246 3.04966,-0.39151 c 0.18355,1.35161 0.55417,2.34434 1.11186,2.9782 0.56475,0.63387 1.32363,0.9508 2.27664,0.9508 1.00949,0 1.76838,-0.27964 2.27665,-0.83893 0.51533,-0.56861 0.773,-1.23044 0.773,-1.98547 0,-0.48473 -0.10942,-0.89487 -0.32827,-1.23043 -0.21178,-0.3449 -0.58593,-0.64319 -1.12244,-0.89486 -0.36709,-0.16779 -1.20362,-0.46609 -2.5096,-0.89488 -1.68013,-0.54996 -2.85904,-1.22577 -3.53675,-2.02742 -0.95301,-1.1279 -1.42952,-2.50281 -1.42952,-4.12474 0,-1.044 0.22237,-2.0181 0.66711,-2.92229 0.4518,-0.9135 1.09773,-1.60795 1.9378,-2.08334 0.84713,-0.4754 1.8672,-0.7131 3.06023,-0.7131 1.94839,0 3.41321,0.56395 4.39446,1.69186 0.98832,1.12789 1.50719,2.6333 1.5566,4.51625 l -3.13437,0.18177 c -0.13413,-1.05333 -0.42356,-1.80838 -0.86829,-2.26513 -0.43769,-0.46607 -1.09774,-0.69911 -1.98017,-0.69911 -0.91065,0 -1.62365,0.24702 -2.13898,0.74106 -0.33179,0.31693 -0.49768,0.74106 -0.49768,1.27238 0,0.48473 0.1553,0.89953 0.46591,1.24442 0.39532,0.4381 1.3554,0.89485 2.88023,1.37025 1.52482,0.47541 2.65079,0.96944 3.3779,1.48211 0.73418,0.50336 1.30599,1.19781 1.71543,2.08336 0.4165,0.87621 0.62475,1.96216 0.62475,3.25784 0,1.17452 -0.24708,2.27446 -0.74123,3.29981 -0.49415,1.02536 -1.19303,1.78972 -2.09662,2.29308 -0.90361,0.49403 -2.02958,0.74105 -3.37792,0.74105 -1.96251,0 -3.46969,-0.59657 -4.52153,-1.78971 -1.05185,-1.20247 -1.68013,-2.95024 -1.88486,-5.24332 z m -8.92655,6.66949 0,-17.0303 -4.60624,0 0,-3.4676 12.33625,0 0,3.4676 -4.59566,0 0,17.0303 z m -18.77439,-6.66949 3.04966,-0.39151 c 0.18354,1.35161 0.55415,2.34434 1.11183,2.9782 0.56475,0.63387 1.32364,0.9508 2.27666,0.9508 1.00949,0 1.76837,-0.27964 2.27665,-0.83893 0.51533,-0.56861 0.773,-1.23044 0.773,-1.98547 0,-0.48473 -0.10942,-0.89487 -0.32827,-1.23043 -0.21178,-0.3449 -0.58593,-0.64319 -1.12244,-0.89486 -0.36708,-0.16779 -1.20361,-0.46609 -2.5096,-0.89488 -1.68013,-0.54996 -2.85905,-1.22577 -3.53675,-2.02742 -0.95301,-1.1279 -1.42952,-2.50281 -1.42952,-4.12474 0,-1.044 0.22237,-2.0181 0.66711,-2.92229 0.4518,-0.9135 1.09774,-1.60795 1.93781,-2.08334 0.84712,-0.4754 1.86719,-0.7131 3.06022,-0.7131 1.94839,0 3.41321,0.56395 4.39446,1.69186 0.98831,1.12789 1.50718,2.6333 1.5566,4.51625 l -3.13437,0.18177 c -0.13413,-1.05333 -0.42356,-1.80838 -0.86829,-2.26513 -0.43768,-0.46607 -1.09774,-0.69911 -1.98017,-0.69911 -0.91065,0 -1.62365,0.24702 -2.13898,0.74106 -0.33179,0.31693 -0.49768,0.74106 -0.49768,1.27238 0,0.48473 0.1553,0.89953 0.46591,1.24442 0.39532,0.4381 1.3554,0.89485 2.88023,1.37025 1.52482,0.47541 2.65078,0.96944 3.37789,1.48211 0.73418,0.50336 1.30599,1.19781 1.71544,2.08336 0.4165,0.87621 0.62475,1.96216 0.62475,3.25784 0,1.17452 -0.24708,2.27446 -0.74123,3.29981 -0.49415,1.02536 -1.19303,1.78972 -2.09664,2.29308 -0.9036,0.49403 -2.02957,0.74105 -3.3779,0.74105 -1.96251,0 -3.46968,-0.59657 -4.52153,-1.78971 -1.05185,-1.20247 -1.68013,-2.95024 -1.88485,-5.24332 z m -5.31571,6.66949 0,-20.4979 3.13436,0 0,20.4979 z m -13.07746,0 0,-20.33011 3.13435,0 0,16.87651 7.79355,0 0,3.4536 z m -1.80014,0 -3.40969,0 -1.35539,-4.65605 -6.20518,0 -1.28129,4.65605 -3.32495,0 6.04634,-20.4979 3.31437,0 z m -5.77104,-8.10966 -2.13899,-7.60632 -2.09663,7.60632 z m -14.33756,8.10966 0,-20.4979 3.13435,0 0,20.4979 z m -5.64397,-7.53641 3.03905,1.27238 c -0.46591,2.23715 -1.24244,3.90104 -2.32959,4.99166 -1.08007,1.0813 -2.45312,1.62195 -4.11914,1.62195 -2.06133,0 -3.75558,-0.92749 -5.08274,-2.78248 -1.32715,-1.86429 -1.99073,-4.40905 -1.99073,-7.63428 0,-3.41166 0.66711,-6.05896 2.00133,-7.94189 1.33422,-1.89226 3.08847,-2.83839 5.26274,-2.83839 1.89899,0 3.44146,0.74106 4.62743,2.22318 0.70593,0.87621 1.23538,2.13461 1.58835,3.77519 l -3.10259,0.97877 c -0.18355,-1.06265 -0.56828,-1.90159 -1.15421,-2.51682 -0.57886,-0.61521 -1.2848,-0.92282 -2.11781,-0.92282 -1.15068,0 -2.08605,0.54531 -2.8061,1.63593 -0.713,1.09061 -1.0695,2.85702 -1.0695,5.29924 0,2.59136 0.35297,4.43702 1.05891,5.53697 0.70595,1.09993 1.62367,1.6499 2.75317,1.6499 0.833,0 1.54952,-0.34955 2.14956,-1.04866 0.60005,-0.69912 1.03068,-1.79906 1.29187,-3.29983 z m -24.41833,7.53641 0,-20.4979 11.51028,0 0,3.4676 -8.37594,0 0,4.5442 7.79355,0 0,3.4536 -7.79355,0 0,5.5789 8.67244,0 0,3.4536 z m -14.48583,0 0,-20.4979 5.0298,0 c 1.90603,0 3.14848,0.10254 3.72735,0.30761 0.88947,0.30761 1.63424,0.97875 2.23429,2.01344 0.60004,1.02536 0.90006,2.35367 0.90006,3.98492 0,1.2584 -0.17296,2.31639 -0.51887,3.17396 -0.3459,0.85757 -0.78711,1.53337 -1.32362,2.02742 -0.52946,0.48473 -1.0695,0.80632 -1.62013,0.96478 -0.7483,0.19575 -1.83191,0.29362 -3.25083,0.29362 l -2.04368,0 0,7.73215 z m 3.13437,-17.0303 0,5.81659 1.71541,0 c 1.23539,0 2.06134,-0.1072 2.47784,-0.3216 0.4165,-0.21439 0.74123,-0.54997 0.9742,-1.00672 0.24001,-0.45675 0.36002,-0.98807 0.36002,-1.59398 0,-0.74571 -0.16589,-1.36092 -0.49768,-1.84563 -0.33179,-0.48473 -0.75183,-0.78767 -1.26011,-0.90884 -0.37414,-0.0932 -1.12596,-0.13982 -2.25545,-0.13982 z m -18.41437,10.36081 3.04966,-0.39151 c 0.18354,1.35161 0.55415,2.34434 1.11183,2.9782 0.56475,0.63387 1.32364,0.9508 2.27666,0.9508 1.00949,0 1.76836,-0.27964 2.27663,-0.83893 0.51535,-0.56861 0.77302,-1.23044 0.77302,-1.98547 0,-0.48473 -0.10942,-0.89487 -0.32827,-1.23043 -0.21178,-0.3449 -0.58593,-0.64319 -1.12244,-0.89486 -0.36708,-0.16779 -1.20361,-0.46609 -2.5096,-0.89488 -1.68013,-0.54996 -2.85905,-1.22577 -3.53675,-2.02742 -0.95301,-1.1279 -1.42952,-2.50281 -1.42952,-4.12474 0,-1.044 0.22237,-2.0181 0.66711,-2.92229 0.4518,-0.9135 1.09774,-1.60795 1.93781,-2.08334 0.84712,-0.4754 1.86719,-0.7131 3.06022,-0.7131 1.94839,0 3.41321,0.56395 4.39446,1.69186 0.9883,1.12789 1.50717,2.6333 1.5566,4.51625 l -3.13437,0.18177 c -0.13413,-1.05333 -0.42356,-1.80838 -0.86831,-2.26513 -0.43767,-0.46607 -1.09772,-0.69911 -1.98015,-0.69911 -0.91065,0 -1.62365,0.24702 -2.13899,0.74106 -0.33178,0.31693 -0.49767,0.74106 -0.49767,1.27238 0,0.48473 0.1553,0.89953 0.46591,1.24442 0.39532,0.4381 1.35539,0.89485 2.88021,1.37025 1.52483,0.47541 2.6508,0.96944 3.37791,1.48211 0.73418,0.50336 1.30599,1.19781 1.71544,2.08336 0.4165,0.87621 0.62475,1.96216 0.62475,3.25784 0,1.17452 -0.24708,2.27446 -0.74125,3.29981 -0.49415,1.02536 -1.19303,1.78972 -2.09662,2.29308 -0.9036,0.49403 -2.02957,0.74105 -3.3779,0.74105 -1.96251,0 -3.46968,-0.59657 -4.52151,-1.78971 -1.05185,-1.20247 -1.68014,-2.95024 -1.88487,-5.24332 z m -19.70623,6.66949 0,-20.4979 11.5103,0 0,3.4676 -8.37593,0 0,4.5442 7.79353,0 0,3.4536 -7.79353,0 0,5.5789 8.67243,0 0,3.4536 z m -13.17276,0 0,-20.33011 3.13435,0 0,16.87651 7.79354,0 0,3.4536 z m -5.82399,-7.53641 3.03906,1.27238 c -0.465913,2.23715 -1.24244,3.90104 -2.32958,4.99166 -1.080093,1.0813 -2.45314,1.62195 -4.11914,1.62195 -2.061347,0 -3.755596,-0.92749 -5.082747,-2.78248 -1.327173,-1.86429 -1.99076,-4.40905 -1.99076,-7.63428 0,-3.41166 0.667117,-6.05896 2.00135,-7.94189 1.334218,-1.89226 3.088464,-2.83839 5.262737,-2.83839 1.898973,0 3.441447,0.74106 4.62742,2.22318 0.70594,0.87621 1.235397,2.13461 1.58837,3.77519 l -3.10258,0.97877 c -0.183553,-1.06265 -0.568297,-1.90159 -1.15423,-2.51682 -0.57886,-0.61521 -1.284797,-0.92282 -2.11781,-0.92282 -1.150667,0 -2.086033,0.54531 -2.8061,1.63593 -0.712987,1.09061 -1.06948,2.85702 -1.06948,5.29924 0,2.59136 0.352967,4.43702 1.0589,5.53697 0.70594,1.09993 1.62366,1.6499 2.75316,1.6499 0.833,0 1.549527,-0.34955 2.14958,-1.04866 0.60004,-0.69912 1.030657,-1.79906 1.29185,-3.29983 z m -16.042397,7.53641 0,-20.4979 3.13434,0 0,20.4979 z m -15.56591,0 0,-20.4979 3.13435,0 0,8.06772 6.14166,0 0,-8.06772 3.13437,0 0,20.4979 -3.13437,0 0,-8.96258 -6.14166,0 0,8.96258 z m -14.49641,0 0,-20.4979 11.5103,0 0,3.4676 -8.37594,0 0,4.5442 7.79353,0 0,3.4536 -7.79353,0 0,5.5789 8.67243,0 0,3.4536 z m -10.52551,0 -5.54866,-20.4979 3.39908,0 3.92853,15.1707 3.80148,-15.1707 3.32497,0 -5.55926,20.4979 z m 199.192997,-43.50925 13.74975,0 0,9.8865 c 0,0.98165 0.9422,1.47247 2.82661,1.47247 1.82053,0 2.7308,-0.49082 2.7308,-1.47247 l 0,-5.10852 c 0,-1.5626 -1.66083,-3.39566 -4.98249,-5.49918 -6.41975,-3.906513 -10.41213,-6.530893 -11.97715,-7.87314 -1.56501,-1.342247 -2.34752,-2.814707 -2.34752,-4.41738 l 0,-4.83806 c 0,-5.589339 5.81291,-8.384008 17.43873,-8.384008 10.41213,0 15.61819,2.544246 15.61819,7.632738 l 0,7.45244 -13.74976,0 0,-7.93325 c 0,-0.86142 -0.75057,-1.29213 -2.25171,-1.29213 -1.75664,0 -2.63496,0.83138 -2.63496,2.49414 l 0.28743,2.79466 c 0,1.60268 1.69277,3.465797 5.07831,5.58935 6.292,3.786313 10.28438,6.430723 11.97715,7.93323 1.72471,1.50252 2.58706,3.205367 2.58706,5.10854 l 0,5.49918 c 0,5.72956 -5.82888,8.59434 -17.48663,8.59434 -11.24254,0 -16.86381,-2.60435 -16.86381,-7.81304 z m -1.96425,17.3089 -15.09121,0 c -1.62888,-1.22205 -2.44332,-4.68783 -2.44332,-10.39736 l 0,-0.0601 0.0958,-2.5843 c 0.0958,-3.585993 0.14371,-5.419053 0.14371,-5.49918 0,-1.462447 -1.56501,-2.19367 -4.69503,-2.19367 l 0,20.67451 -15.09119,0 0,-43.09193 18.63643,0 c 4.24789,0 7.93684,0.611017 11.06687,1.83305 3.16197,1.222047 4.74296,3.155277 4.74296,5.79969 l 0,5.16863 c 0,3.345587 -3.11406,5.609367 -9.34218,6.79134 6.26005,0.92154 9.39007,3.295503 9.39007,7.12189 l -0.23953,4.71787 c 0,6.89151 0.9422,10.79803 2.82661,11.71957 z m -17.29501,-28.24716 0,-7.09184 c 0,-1.5025 -1.56501,-2.25375 -4.69503,-2.25375 l 0,11.6294 c 3.13002,0 4.69503,-0.76127 4.69503,-2.28381 z m -57.68187,20.82476 0,-27.73628 c 0,-5.589339 5.78096,-8.384008 17.34289,-8.384008 11.40223,0 17.10334,2.774629 17.10334,8.323888 l 0,27.73631 c 0,2.50417 -1.59695,4.4374 -4.79086,5.79969 -3.16195,1.34223 -7.29805,2.01335 -12.4083,2.01335 -11.49805,0 -17.24707,-2.58432 -17.24707,-7.75295 z m 19.6904,0.45076 0,-29.35901 c 0,-0.86144 -0.81444,-1.29216 -2.44333,-1.29216 -1.69277,0 -2.53916,0.43072 -2.53916,1.29216 l 0,29.35901 c 0,0.86145 0.84639,1.29217 2.53916,1.29217 1.62889,0 2.44333,-0.43072 2.44333,-1.29217 z m -22.3733,-30.56101 -8.43189,0 0,37.47255 -15.09121,0 0,-37.47255 -8.4319,0 0,-5.619386 31.955,0 z m -69.17996,30.11025 0,-27.73628 c 0,-5.589339 5.78097,-8.384008 17.34291,-8.384008 11.40223,0 17.10334,2.774629 17.10334,8.323888 l 0,27.73631 c 0,2.50417 -1.59694,4.4374 -4.79083,5.79969 -3.16198,1.34223 -7.29809,2.01335 -12.40833,2.01335 -11.49806,0 -17.24709,-2.58432 -17.24709,-7.75295 z m 19.69043,0.45076 0,-29.35901 c 0,-0.86144 -0.81445,-1.29216 -2.44334,-1.29216 -1.69278,0 -2.53917,0.43072 -2.53917,1.29216 l 0,29.35901 c 0,0.86145 0.84639,1.29217 2.53917,1.29217 1.62889,0 2.44334,-0.43072 2.44334,-1.29217 z m -22.948217,6.91154 -13.46228,0 0,-24.19037 -7.85701,24.19037 -10.39616,0 -9.00679,-24.19037 0,24.19037 -11.78551,0 0,-43.091936 19.40294,0 6.89886,22.357316 5.98856,-22.357316 20.21739,0 z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    style: logoTextStyle,
    x: "63.56612",
    y: "62.971485",
    id: "text4136",
    transform: "scale(1.0708822,0.93380956)"
  }, "RESTORER")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "page-section"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container text-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Restorer Motors"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "12 Conway Road, Plumstead,", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "London,", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "SE18 1AQ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "020 8317 4430", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _sections_page_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sections/page-carousel */ "./src/sections/page-carousel.js");
/* harmony import */ var _sections_section_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sections/section-about */ "./src/sections/section-about.js");
/* harmony import */ var _sections_section_marketing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sections/section-marketing */ "./src/sections/section-marketing.js");
/* harmony import */ var _sections_section_featured__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sections/section-featured */ "./src/sections/section-featured.js");







var IndexPage = function IndexPage() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    role: "main",
    className: "main-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sections_page_carousel__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sections_section_about__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sections_section_marketing__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sections_section_featured__WEBPACK_IMPORTED_MODULE_5__["default"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ "./src/pages/services.js":
/*!*******************************!*\
  !*** ./src/pages/services.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");



var ServicesPage = function ServicesPage() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    role: "main",
    className: "main-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center",
    style: {
      maxWidth: '700px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "display-4"
  }, "Services"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "lead"
  }, "We provide all the necessary services for your vehicles. Main services that we provide are as follows:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-deck mb-3 text-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card mb-4 box-shadow"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "my-0 font-weight-normal"
  }, "MOT")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "card-title pricing-card-title"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "text-muted"
  }), "\xA340"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-unstyled mt-3 mb-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "All kind of vehicle"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "We make sure you vehicle pass MOT")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card mb-4 box-shadow"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "my-0 font-weight-normal"
  }, "Full Service")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "card-title pricing-card-title"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "text-muted"
  }, "from "), "\xA3130"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-unstyled mt-3 mb-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Full servicing of your car"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Labour cost included"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Additional cost for only changed parts")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card mb-4 box-shadow"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "my-0 font-weight-normal"
  }, "Interim Service")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "card-title pricing-card-title"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "text-muted"
  }, "from "), "\xA370"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-unstyled mt-3 mb-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Intrim Service for your vehicle"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Quick"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Reliable"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-deck mb-3 text-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card mb-4 box-shadow"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "my-0 font-weight-normal"
  }, "Repairing")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-unstyled mt-3 mb-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "All kinds of repairing"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Body repairing"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Engine repairing")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card mb-4 box-shadow"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "my-0 font-weight-normal"
  }, "Tyres")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-unstyled mt-3 mb-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Tyre inspection"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Brand new tyres")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card mb-4 box-shadow"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "my-0 font-weight-normal"
  }, "Recovery Service")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-unstyled mt-3 mb-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Pick and Fix Service"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Break down recovery")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card mb-4 box-shadow"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "my-0 font-weight-normal"
  }, "Car Accessories")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-unstyled mt-3 mb-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Li-on Battery"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Engine Oil"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Engine Filters"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Polishing Wax"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Car bulbs and lights"))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ServicesPage);

/***/ }),

/***/ "./src/sections/page-carousel.js":
/*!***************************************!*\
  !*** ./src/sections/page-carousel.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/carousel */ "./src/components/carousel.js");
/* harmony import */ var _assets_images_banner_service_price_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/banner-service-price.jpg */ "./src/assets/images/banner-service-price.jpg");
/* harmony import */ var _assets_images_banner_service_price_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_banner_service_price_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_banner_pickup_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/banner-pickup.jpg */ "./src/assets/images/banner-pickup.jpg");
/* harmony import */ var _assets_images_banner_pickup_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_banner_pickup_jpg__WEBPACK_IMPORTED_MODULE_3__);




var pageCarouselItems = [{
  key: '001',
  title: '',
  content: '',
  image: _assets_images_banner_service_price_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
  url: ''
}, {
  key: '002',
  title: 'Pickup Service',
  content: 'Pickup service when you need it',
  image: _assets_images_banner_pickup_jpg__WEBPACK_IMPORTED_MODULE_3___default.a
}];

var PageCarousel = function PageCarousel() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_carousel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    items: pageCarouselItems
  });
};

/* harmony default export */ __webpack_exports__["default"] = (PageCarousel);

/***/ }),

/***/ "./src/sections/section-about.js":
/*!***************************************!*\
  !*** ./src/sections/section-about.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var SectionAbout = function SectionAbout() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "page-section home-welcome-message"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "page-section-heading"
  }, "Restorer Motors"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "lead"
  }, "We are small workshop that provide best care, repair and \n            maintenance service. We are well equipped to provide better \n            service in resonable price. We have capability of full dealer.\n            "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "lead"
  }, "A part from being new local garage, we have experice of more than \n            20 years providing service. Our aim is to provide quality service\n            so that you enjoy your motoring experice.")))));
};

/* harmony default export */ __webpack_exports__["default"] = (SectionAbout);

/***/ }),

/***/ "./src/sections/section-featured.js":
/*!******************************************!*\
  !*** ./src/sections/section-featured.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_full_service_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/full-service.jpg */ "./src/assets/images/full-service.jpg");
/* harmony import */ var _assets_images_full_service_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_full_service_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_recovery_van_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/recovery-van.png */ "./src/assets/images/recovery-van.png");
/* harmony import */ var _assets_images_recovery_van_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_recovery_van_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_picknfix_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/picknfix.jpg */ "./src/assets/images/picknfix.jpg");
/* harmony import */ var _assets_images_picknfix_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_picknfix_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_brand_new_tyres_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/brand-new-tyres.jpg */ "./src/assets/images/brand-new-tyres.jpg");
/* harmony import */ var _assets_images_brand_new_tyres_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_brand_new_tyres_jpg__WEBPACK_IMPORTED_MODULE_4__);






var SectionFeatured = function SectionFeatured() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "page-section"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "featurette-divider"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row featurette"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-7"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "featurette-heading"
  }, "MOT -", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-muted"
  }, " Servicing"), "- Repairs", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-muted"
  }, " Diagnostics")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "lead"
  }, "We provide full car service from \xA3130. We also guarantee 100% satisfaction.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "featurette-image img-fluid mx-auto",
    alt: "Full Vehicle Service",
    src: _assets_images_full_service_jpg__WEBPACK_IMPORTED_MODULE_1___default.a
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "featurette-divider"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row featurette"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-7 order-md-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "featurette-heading"
  }, "Break Down", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-muted"
  }, " Recovery")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "lead"
  }, "If you are car is stuck somewhere we can recover and repair it and can devliver it to you. ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-5 order-md-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "featurette-image img-fluid mx-auto",
    alt: "Break down recovery service",
    src: _assets_images_recovery_van_png__WEBPACK_IMPORTED_MODULE_2___default.a
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "featurette-divider"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row featurette"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-7"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "featurette-heading"
  }, "Pick &", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-muted"
  }, " Fix")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "lead"
  }, "If you are not able to drop your car for repairing then \n            can come to pick up your car, repair it and drop it again. \n            We call it Pick &amp; Fix service.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "featurette-image img-fluid mx-auto",
    src: _assets_images_picknfix_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "Fix it quick"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "featurette-divider"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row featurette"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-7 order-md-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "featurette-heading"
  }, "Brand new Tyres"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "lead"
  }, "Get your tyres checked and replaced if required. We only replace \n            old tyre with brand new tyres.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-5 order-md-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "featurette-image img-fluid mx-auto",
    src: _assets_images_brand_new_tyres_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "New Typres"
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (SectionFeatured);

/***/ }),

/***/ "./src/sections/section-marketing.js":
/*!*******************************************!*\
  !*** ./src/sections/section-marketing.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_mot_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/mot-logo.png */ "./src/assets/images/mot-logo.png");
/* harmony import */ var _assets_images_mot_logo_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_mot_logo_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_fix_it_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/fix_it.jpg */ "./src/assets/images/fix_it.jpg");
/* harmony import */ var _assets_images_fix_it_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_fix_it_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_intirim_service_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/intirim-service.jpg */ "./src/assets/images/intirim-service.jpg");
/* harmony import */ var _assets_images_intirim_service_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_intirim_service_jpg__WEBPACK_IMPORTED_MODULE_3__);





var SectionMarketing = function SectionMarketing() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "page-section shaded-orange"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container marketing"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "rounded-circle",
    src: _assets_images_fix_it_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "Full service logo",
    width: "140",
    height: "140"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Full service from \xA3130")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "rounded-circle",
    src: _assets_images_intirim_service_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "Intrim Service Logo",
    width: "140",
    height: "140"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Interim Service from \xA370")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "rounded-circle",
    src: _assets_images_mot_logo_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    alt: "MOT Logo",
    width: "140",
    height: "140"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "MOT only \xA340")))));
};

/* harmony default export */ __webpack_exports__["default"] = (SectionMarketing);

/***/ }),

/***/ "@reach/router":
/*!********************************!*\
  !*** external "@reach/router" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__reach_router__;

/***/ }),

/***/ "core-js/modules/es6.array.iterator":
/*!*****************************************************!*\
  !*** external "core-js/modules/es6.array.iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_iterator__;

/***/ }),

/***/ "core-js/modules/es6.array.sort":
/*!*************************************************!*\
  !*** external "core-js/modules/es6.array.sort" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_sort__;

/***/ }),

/***/ "core-js/modules/es6.function.name":
/*!****************************************************!*\
  !*** external "core-js/modules/es6.function.name" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_function_name__;

/***/ }),

/***/ "core-js/modules/es6.map":
/*!******************************************!*\
  !*** external "core-js/modules/es6.map" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_map__;

/***/ }),

/***/ "core-js/modules/es6.object.assign":
/*!****************************************************!*\
  !*** external "core-js/modules/es6.object.assign" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_assign__;

/***/ }),

/***/ "core-js/modules/es6.object.to-string":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.object.to-string" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_to_string__;

/***/ }),

/***/ "core-js/modules/es6.regexp.constructor":
/*!*********************************************************!*\
  !*** external "core-js/modules/es6.regexp.constructor" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_constructor__;

/***/ }),

/***/ "core-js/modules/es6.regexp.split":
/*!***************************************************!*\
  !*** external "core-js/modules/es6.regexp.split" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_split__;

/***/ }),

/***/ "core-js/modules/es6.regexp.to-string":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.regexp.to-string" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_to_string__;

/***/ }),

/***/ "core-js/modules/es6.string.ends-with":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.string.ends-with" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_ends_with__;

/***/ }),

/***/ "core-js/modules/es6.string.iterator":
/*!******************************************************!*\
  !*** external "core-js/modules/es6.string.iterator" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_iterator__;

/***/ }),

/***/ "core-js/modules/web.dom.iterable":
/*!***************************************************!*\
  !*** external "core-js/modules/web.dom.iterable" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_web_dom_iterable__;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_fs__;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_path__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom_server__;

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_helmet__;

/***/ })

/******/ });
});
//# sourceMappingURL=render-page.js.map