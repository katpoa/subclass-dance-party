var TontonDancer = function(top, left, timeBetweenSteps) {
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node = '<img src="../img/kawaii/tonton.gif" height ="300px"></img>';
};
TontonDancer.prototype = Object.create(BlinkyDancer.prototype);
TontonDancer.prototype.constructor = TontonDancer;
