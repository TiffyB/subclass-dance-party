var makeBlinkyDancer = function() {
  makeDancer.call(this);


  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //this.oldStep = this.step; //what do we do with this???




};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;


makeBlinkyDancer.prototype.step = function(timeBetweenSteps) {
  // call the old version of step at the beginning of any call to this new version of step
  //this.oldStep();
  //debugger;
  this.oldStep = this.$node;
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
  //setTimeout(this.step, 100);
  //var context = this;
  //makeDancer.prototype.step.bind(context);
  console.log(this.step);
  var context = this;
  setTimeout(function() {
    this.step.bind(context);

  }, 100);

};

