var UrbanDancer = function (top, left, timeBetweenSteps) {
  //keone mari, sean/kaycee, melvin timtim;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.dancers = {
    'kinjaz': '../img/urban/kinjaz.gif',
    'keonemari': '../img/urban/keonemari.gif',
  };
};

UrbanDancer.prototype = Object.create(Dancer.prototype);

UrbanDancer.prototype.constructor = UrbanDancer;


