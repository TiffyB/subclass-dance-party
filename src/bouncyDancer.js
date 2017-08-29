var makeBouncyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  //this.$node = $('<span class="bouncyDancer"></span>');
  //this.$node.removeClass("dancer").addClass("bouncyDancer");
  this.$node.addClass("bouncyDancer");
};

makeBouncyDancer.prototype = Object.create(makeDancer.prototype);
makeBouncyDancer.prototype.constructor = makeBouncyDancer;

makeBouncyDancer.prototype.step = function(timeBetweenSteps) {
  // call the old version of step at the beginning of any call to this new version of step

  makeDancer.prototype.step.call(this);
  //console.log(this);

  //this.$node.toggle();



};

makeBouncyDancer.prototype.lineUp = function() {
  this.left = 5;
  makeDancer.prototype.setPosition.call(this, this.top, this.left);

}
