var KeoneMariDancer = function () {
  UrbanDancer.call(this);
  console.log(this.dancers);
  this.$node = '<img src=' + this.dancers['keonemari'] + '></img>';
  console.log(this.$node);
};

KeoneMariDancer.prototype = Object.create(UrbanDancer.prototype);
KeoneMariDancer.prototype.constructor = KeoneMariDancer;