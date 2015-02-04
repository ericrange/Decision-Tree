Dataset = null
Features = null
ClassName = null

DecisionTree = (_Dataset, _Features, _ClassName, _Options) ->
  
  #Set Global Variables
  Dataset = _Dataset;
  Features = _Features;
  ClassName = _ClassName;
  
  #Options for specify the right algorithm
  BinarySplits = _Options.BinarySplits || false
  
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

module.exports = DecisionTree
