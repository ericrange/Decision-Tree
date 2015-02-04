DecisionTree = (Data, ClassName, Options) ->
  BinarySplits = Options.BinarySplits || false
  #Choose Algorithm
  if(BinarySplits)
    #Use ID3
  else
    #Use C4.5
  return
