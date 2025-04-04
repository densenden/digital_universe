"use strict";
function _define_property(obj, key, value) {
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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && (typeof from === "undefined" ? "undefined" : _type_of(from)) === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod);
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// src/index.ts
var index_exports = {};
__export(index_exports, {
    Button: function() {
        return Button;
    },
    Layout: function() {
        return Layout;
    },
    Navigation: function() {
        return Navigation;
    },
    Section: function() {
        return Section;
    }
});
module.exports = __toCommonJS(index_exports);
// src/components/Button.tsx
var import_react = __toESM(require("react"));
var Button = function(_param) {
    var children = _param.children, _param_variant = _param.variant, variant = _param_variant === void 0 ? "primary" : _param_variant, _param_size = _param.size, size = _param_size === void 0 ? "md" : _param_size, _param_className = _param.className, className = _param_className === void 0 ? "" : _param_className, props = _object_without_properties(_param, [
        "children",
        "variant",
        "size",
        "className"
    ]);
    var baseStyles = "rounded font-medium transition-colors";
    var variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300"
    };
    var sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg"
    };
    return /* @__PURE__ */ import_react.default.createElement("button", _object_spread({
        className: "".concat(baseStyles, " ").concat(variants[variant], " ").concat(sizes[size], " ").concat(className)
    }, props), children);
};
// src/components/Layout.tsx
var import_react2 = __toESM(require("react"));
var Layout = function(param) {
    var children = param.children;
    return /* @__PURE__ */ import_react2.default.createElement("div", {
        className: "min-h-screen"
    }, children);
};
// src/components/Navigation.tsx
var import_react3 = __toESM(require("react"));
var Navigation = function(param) {
    var items = param.items;
    return /* @__PURE__ */ import_react3.default.createElement("nav", {
        className: "bg-white dark:bg-gray-800"
    }, /* @__PURE__ */ import_react3.default.createElement("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    }, /* @__PURE__ */ import_react3.default.createElement("div", {
        className: "flex items-center justify-between h-16"
    }, /* @__PURE__ */ import_react3.default.createElement("div", {
        className: "flex items-center"
    }, /* @__PURE__ */ import_react3.default.createElement("div", {
        className: "flex-shrink-0"
    }, /* @__PURE__ */ import_react3.default.createElement("span", {
        className: "text-xl font-serif"
    }, "Digital Universe")), /* @__PURE__ */ import_react3.default.createElement("div", {
        className: "hidden md:block"
    }, /* @__PURE__ */ import_react3.default.createElement("div", {
        className: "ml-10 flex items-baseline space-x-4"
    }, items.map(function(item) {
        return /* @__PURE__ */ import_react3.default.createElement("a", {
            key: item.href,
            href: item.href,
            className: "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        }, item.label);
    })))))));
};
// src/components/Section.tsx
var import_react4 = __toESM(require("react"));
var Section = function(param) {
    var children = param.children, _param_className = param.className, className = _param_className === void 0 ? "" : _param_className;
    return /* @__PURE__ */ import_react4.default.createElement("section", {
        className: "py-12 px-4 sm:px-6 lg:px-8 ".concat(className)
    }, /* @__PURE__ */ import_react4.default.createElement("div", {
        className: "max-w-7xl mx-auto"
    }, children));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    Button: Button,
    Layout: Layout,
    Navigation: Navigation,
    Section: Section
});
//# sourceMappingURL=index.js.map