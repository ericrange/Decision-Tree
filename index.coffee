DT = require "./decision-tree.coffee"
TrainingSet = require "./samples/shapes.json"

dt = new DT(TrainingSet.data, ["shapes", "color"], "liked") ;
