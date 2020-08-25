var CatDancer = function(top, left, timeBetweenSteps) {
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node = '<img src="../img/kawaii/cat.gif" height ="300px"></img>';
};
CatDancer.prototype = Object.create(BlinkyDancer.prototype);
CatDancer.prototype.constructor = CatDancer;
