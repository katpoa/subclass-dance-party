var UrbanDancer = function (top, left, timeBetweenSteps) {
  //keone mari, sean/kaycee, melvin timtim;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.dancers = {
    'kinjaz': '../img/urban/kinjaz.gif',
    'keonemari': '../img/urban/keonemari.gif',
  };
  this.step();
};

UrbanDancer.prototype = Object.create(Dancer.prototype);

UrbanDancer.prototype.constructor = UrbanDancer;

UrbanDancer.prototype.oldStep = Dancer.prototype.step;

UrbanDancer.prototype.step = function () {
  this.oldStep();
  this.top = Math.random() * 600;
  this.left = Math.random() * 1000;
  this.setPosition(this.top, this.left);
  // this.$node.toggle();
};