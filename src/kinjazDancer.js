var Kinjaz = function(top, left, timeBetweenSteps) {
  UrbanDancer.call(this);
  this.$node = '<img src=' + this.dancers['kinjaz'] + ' height=300px></img>';
};

Kinjaz.prototype = Object.create(UrbanDancer.prototype);
Kinjaz.prototype.constructor = Kinjaz;