webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ResourceList.js":
/*!************************************!*\
  !*** ./components/ResourceList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store-js */ "./node_modules/store-js/dist/store.legacy.js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_4__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query getProducts($ids: [ID!]!) {\n    nodes(ids: $ids) {\n      ... on Product {\n        title\n        handle\n        descriptionHtml\n        id\n        images(first: 1) {\n          edges {\n            node {\n              originalSrc\n              altText\n            }\n          }\n        }\n        variants(first: 1) {\n          edges {\n            node {\n              price\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var GET_PRODUCTS_BY_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject());

var ResourceListWithProducts =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ResourceListWithProducts, _React$Component);

  function ResourceListWithProducts() {
    _classCallCheck(this, ResourceListWithProducts);

    return _possibleConstructorReturn(this, _getPrototypeOf(ResourceListWithProducts).apply(this, arguments));
  }

  _createClass(ResourceListWithProducts, [{
    key: "render",
    value: function render() {
      var twoWeeksFromNow = new Date(Date.now() + 12096e5).toDateString();
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
        query: GET_PRODUCTS_BY_ID,
        variables: {
          ids: store_js__WEBPACK_IMPORTED_MODULE_4___default.a.get("ids")
        }
      }, function (_ref) {
        var data = _ref.data,
            loading = _ref.loading,
            error = _ref.error;
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading\u2026");
        if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, error.message);
        console.log(data);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["ResourceList"], {
          showHeader: true,
          resourceName: {
            singular: "Product",
            plural: "Products"
          },
          items: data.nodes,
          renderItem: function renderItem(item) {
            var media = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Thumbnail"], {
              source: item.images.edges[0] ? item.images.edges[0].node.originalSrc : "",
              alt: item.images.edges[0] ? item.images.edges[0].node.altText : ""
            });
            var price = item.variants.edges[0].node.price;
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["ResourceList"].Item, {
              id: item.id,
              media: media,
              accessibilityLabel: "View details for ".concat(item.title)
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Stack"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Stack"].Item, {
              fill: true
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["TextStyle"], {
              variation: "strong"
            }, item.title))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Stack"].Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "$", price)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Stack"].Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Expires on ", twoWeeksFromNow, " "))));
          }
        }));
      });
    }
  }]);

  return ResourceListWithProducts;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ResourceListWithProducts);

/***/ })

})
//# sourceMappingURL=index.js.d61531f740deb0e3bcb0.hot-update.js.map