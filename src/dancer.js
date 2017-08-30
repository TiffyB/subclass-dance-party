// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {



  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  //this.step = this.step.bind(this);
  this.setPosition = this.setPosition.bind(this);
  this.timeBetweenSteps = timeBetweenSteps;
  this.step(this.timeBetweenSteps);
  this.top = top;
  this.left = left;
  this.setPosition(this.top, this.left);

  //this.step(); //should we invoke this here?



  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  //this.setPosition(top, left);

};

makeDancer.prototype.step = function(timeBetweenSteps) {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  //console.log(this.timeBetweenSteps);
  //var context = this;
  //console.log('coming from super class', this);
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};