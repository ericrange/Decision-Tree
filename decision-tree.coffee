_ = require "lodash"

Dataset = null
Features = null
ClassName = null

DecisionTree = (_Dataset, _Features, _ClassName, _Options = {}) ->
  
  #Set Global Variables
  Dataset = _Dataset;
  Features = _Features;
  ClassName = _ClassName;
  
  #Options for specify the right algorithm
  BinarySplits = _Options.BinarySplits || false
  
  console.log entropy(Dataset, ClassName);

  #Choose Algorithm
  if(BinarySplits)
    ID3()
  else
    C45()
  return
  
ID3 = () ->
  return
  
C45 = () ->
  return

gain = () ->
  return

entropy = (Values, Class) ->
  Entropy = 0;
  ArrayLength = Values.length;

  #Count unique values
  ValueGroups = _.countBy Values, (Entry) -> return Entry[Class]
  
  #Calc entropy
  Object.keys(ValueGroups).forEach (Value) ->
    Proportion = ValueGroups[Value] / ArrayLength;
    Entropy += Proportion * log2 Proportion;
    return
    
  return -Entropy

log2 = (x) ->
  return Math.log(x) / Math.log(2);

module.exports = DecisionTree
