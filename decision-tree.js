var C45, ClassName, Dataset, DecisionTree, Features, ID3, entropy, gain, log2, _;

_ = require("lodash");

Dataset = null;

Features = null;

ClassName = null;

DecisionTree = function(_Dataset, _Features, _ClassName, _Options) {
  var BinarySplits;
  if (_Options == null) {
    _Options = {};
  }
  Dataset = _Dataset;
  Features = _Features;
  ClassName = _ClassName;
  BinarySplits = _Options.BinarySplits || false;
  console.log(entropy(Dataset, ClassName));
  if (BinarySplits) {
    ID3();
  } else {
    C45();
  }
};

ID3 = function() {};

C45 = function() {};

gain = function() {};

entropy = function(Values, Class) {
  var Entropy, Proportion, UniqueValues, Value, _i, _len, _ref;
  Entropy = 0;
  UniqueValues = _.countBy(Values, function(Entry) {
    return Entry[Class];
  });
  _ref = Object.keys(UniqueValues);
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    Value = _ref[_i];
    Proportion = UniqueValues[Value] / Values.length;
    Entropy += Proportion * log2(Proportion);
  }
  return -Entropy;
};

log2 = function(x) {
  return Math.log(x) / Math.log(2);
};

module.exports = DecisionTree;
