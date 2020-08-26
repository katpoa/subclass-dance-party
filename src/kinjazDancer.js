var Kinjaz = function (top, left, timeBetweenSteps) {
  UrbanDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src=' + this.dancers['kinjaz'] + '></img>');
};

Kinjaz.prototype = Object.create(UrbanDancer.prototype);
Kinjaz.prototype.constructor = Kinjaz;