var KpopDancer = function(top, left, timeBetweenSteps, style) {
  // Blackpink, BTS, Twice
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.types = [gif1, gif2];
  this.style = Math.random(this.types);
};

KpopDancer.prototype = Object.create(BlinkyDancer);

KpopDancer.prototype.constructor = KpopDancer;


