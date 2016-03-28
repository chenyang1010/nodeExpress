var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var model = require('./model');

for (var name in model) {
    mongoose.model(name, new Schema(model[name]));
}

var _getModel = function(type) {
    return mongoose.model(type);
}

module.exports = {
    getModel : function (type) {
        return _getModel(type);
    }
}