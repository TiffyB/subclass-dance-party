var makeShrinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  //this.$node = $('<span class="bouncyDancer"></span>');
  //this.$node.removeClass("dancer").addClass("bouncyDancer");
  this.$node.addClass("shrinkyDancer");
};

makeShrinkyDancer.prototype = Object.create(makeDancer.prototype);
makeShrinkyDancer.prototype.constructor = makeShrinkyDancer;
/*
makeShrinkyDancer.prototype.step = function(timeBetweenSteps) {
  // call the old version of step at the beginning of any call to this new version of step

  makeDancer.prototype.step.call(this);
  //console.log(this);

  //this.$node.toggle();



};
*/
makeShrinkyDancer.prototype.lineUp = function() {
  this.left = 5;
  makeDancer.prototype.setPosition.call(this, this.top, this.left);

}
