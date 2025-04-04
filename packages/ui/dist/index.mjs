// src/components/Button.tsx
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
import React from "react";
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
    return /* @__PURE__ */ React.createElement("button", _object_spread({
        className: "".concat(baseStyles, " ").concat(variants[variant], " ").concat(sizes[size], " ").concat(className)
    }, props), children);
};
// src/components/Layout.tsx
import React2 from "react";
var Layout = function(param) {
    var children = param.children;
    return /* @__PURE__ */ React2.createElement("div", {
        className: "min-h-screen"
    }, children);
};
// src/components/Navigation.tsx
import React3 from "react";
var Navigation = function(param) {
    var items = param.items;
    return /* @__PURE__ */ React3.createElement("nav", {
        className: "bg-white dark:bg-gray-800"
    }, /* @__PURE__ */ React3.createElement("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    }, /* @__PURE__ */ React3.createElement("div", {
        className: "flex items-center justify-between h-16"
    }, /* @__PURE__ */ React3.createElement("div", {
        className: "flex items-center"
    }, /* @__PURE__ */ React3.createElement("div", {
        className: "flex-shrink-0"
    }, /* @__PURE__ */ React3.createElement("span", {
        className: "text-xl font-serif"
    }, "Digital Universe")), /* @__PURE__ */ React3.createElement("div", {
        className: "hidden md:block"
    }, /* @__PURE__ */ React3.createElement("div", {
        className: "ml-10 flex items-baseline space-x-4"
    }, items.map(function(item) {
        return /* @__PURE__ */ React3.createElement("a", {
            key: item.href,
            href: item.href,
            className: "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        }, item.label);
    })))))));
};
// src/components/Section.tsx
import React4 from "react";
var Section = function(param) {
    var children = param.children, _param_className = param.className, className = _param_className === void 0 ? "" : _param_className;
    return /* @__PURE__ */ React4.createElement("section", {
        className: "py-12 px-4 sm:px-6 lg:px-8 ".concat(className)
    }, /* @__PURE__ */ React4.createElement("div", {
        className: "max-w-7xl mx-auto"
    }, children));
};
export { Button, Layout, Navigation, Section };
//# sourceMappingURL=index.mjs.map