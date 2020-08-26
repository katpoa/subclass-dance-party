var KeoneMariDancer = function (top, left, timeBetweenSteps) {
  UrbanDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src=' + this.dancers['keonemari'] + '></img>');
};

KeoneMariDancer.prototype = Object.create(UrbanDancer.prototype);
KeoneMariDancer.prototype.constructor = KeoneMariDancer;