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
  var ArrayLength, Entropy, ValueGroups;
  Entropy = 0;
  ArrayLength = Values.length;
  ValueGroups = _.countBy(Values, function(Entry) {
    return Entry[Class];
  });
  Object.keys(ValueGroups).forEach(function(Value) {
    var Proportion;
    Proportion = ValueGroups[Value] / ArrayLength;
    Entropy += Proportion * log2(Proportion);
  });
  return -Entropy;
};

log2 = function(x) {
  return Math.log(x) / Math.log(2);
};

module.exports = DecisionTree;
