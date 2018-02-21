const Request = require('../services/request.js');

const GameData = function(url){
  this.url = url;
  this.data = [];
}

GameData.prototype.getData = function(){
  const request = new Request(this.url);
  const successGet = function(dataIn){
    this.data = dataIn;
    this.giveData();
  }.bind(this);
  request.get(successGet);
}

GameData.prototype.giveData = function () {
  return this.data;
};

module.exports = GameData;
