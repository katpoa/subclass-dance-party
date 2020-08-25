var KeoneMariDancer = function() {
  UrbanDancer.call(this);
  console.log(this.dancers);
  this.$node = '<img src=' + this.dancers['keonemari'] + ' height="300px"></img>';
  console.log(this.$node);
};

KeoneMariDancer.prototype = Object.create(UrbanDancer.prototype);
KeoneMariDancer.prototype.constructor = KeoneMari;