"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/*
    Class for representing structures.
    Struct:
        pairs: Array of the base pairs in the struct (2d array each inner array contains one pair).
        exterior: Set of exterior motifs: dangling ends and terminal mismatches (being a set it ensures that on base does not counted as both).
        mfe: The free energy associated with the structure.
    
        addEnergy(e): Changes mfe by e.
        addPair(e, pair):   Adds pair (pair: [i,j]) to pairs and changes mfe by e (the energy contribution of the structure closed by the pair).
        addExterior(e, bases): Adds exterior bases (bases: [i] or [i,j]) to exterior and changes mfe by e (the energy contribution of exterior motif).
        clone(org): Returns a copy of org.
        merge(a, b): Merges a and b and returns the new combined Struct.
*/
var Struct = /*#__PURE__*/function () {
  function Struct(mfe) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$pairs = _ref.pairs,
      pairs = _ref$pairs === void 0 ? [] : _ref$pairs,
      _ref$exterior = _ref.exterior,
      exterior = _ref$exterior === void 0 ? [] : _ref$exterior;
    _classCallCheck(this, Struct);
    this.pairs = pairs;
    this.exterior = new Set(exterior);
    this.mfe = mfe;
  }
  _createClass(Struct, [{
    key: "addEnergy",
    value: function addEnergy(e) {
      this.mfe += e;
    }
  }, {
    key: "addPair",
    value: function addPair(e, pair) {
      this.mfe += e;
      this.pairs.push(pair);
    }
  }, {
    key: "addExterior",
    value: function addExterior(e, bases) {
      var _this = this;
      this.mfe += e;
      bases.forEach(function (b) {
        _this.exterior.add(b);
      });
    }
  }], [{
    key: "clone",
    value: function clone(org) {
      return new Struct(org.mfe, {
        pairs: _toConsumableArray(org.pairs),
        exterior: org.exterior
      });
    }
  }, {
    key: "merge",
    value: function merge(a, b) {
      var mfe = a.mfe + b.mfe;
      var pairs = a.pairs.concat(b.pairs);
      var pairedBases = [];
      for (var i = 0; i < pairs.length; i++) {
        if (pairedBases.includes(pairs[i][0]) || pairedBases.includes(pairs[i][1])) {
          mfe = Infinity;
          break;
        }
        pairedBases.push(pairs[i][0]);
        pairedBases.push(pairs[i][1]);
      }
      var exterior = new Set([].concat(_toConsumableArray(a.exterior), _toConsumableArray(b.exterior)));
      return new Struct(mfe, {
        pairs: pairs,
        exterior: exterior
      });
    }
  }]);
  return Struct;
}();
var _default = exports["default"] = Struct;