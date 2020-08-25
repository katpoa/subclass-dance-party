var UrbanDancer = function (top, left, timeBetweenSteps, URL) {
  //keone mari, sean/kaycee, melvin timtim;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.master = ['keoneMari', 'seanKaycee', 'melvinTim', 'kinjaz'];
};

UrbanDancer.prototype = Object.create(Dancer.prototype);

UrbanDancer.prototype.constructor = UrbanDancer;





