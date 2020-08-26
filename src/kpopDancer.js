var KpopDancer = function (top, left, timeBetweenSteps) {
  // Blackpink, BTS, Twice
  Dancer.call(this, top, left, timeBetweenSteps);
  this.types = ['lisa.gif', 'bts.gif', 'snsd.gif', 'tt.gif'];
  // this.types = ['lisa.gif']; // spam lisa xD
  this.random = Math.floor(Math.random() * this.types.length); //0-1 * this.types.length
  this.$node = $('<img src="../img/kpop/' + this.types[this.random] + '"></img>');
  //this.$node
  this.step();
};

KpopDancer.prototype = Object.create(Dancer.prototype);
KpopDancer.prototype.constructor = KpopDancer;

KpopDancer.prototype.oldStep = Dancer.prototype.step;

KpopDancer.prototype.step = function () {
  this.oldStep();
  this.top = Math.random() * 600;
  this.left = Math.random() * 1000;
  this.setPosition(this.top, this.left);
  // this.$node.toggle();
};

