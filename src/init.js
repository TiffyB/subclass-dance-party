$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(   //may need to change
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);

  });

  $('.addLineUpButton').on('click', function(event) {

    for (var i = 0; i < window.dancers.length; i++) {
      //lineUp(window.dancers[i]);
      window.dancers[i].lineUp();
    }

    // get the maker function for the kind of dancer we're supposed to make

  });
  $('body').on('click', '.dancer', function(event) {
    var styleAttr = $(this).attr("style");
    var styleAttr = styleAttr.split(";");
    var top = Number(styleAttr[1].slice(6, styleAttr[1].length - 2));
    var left = Number(styleAttr[2].slice(7, styleAttr[1].length - 2));

    var resultsArr = [];
    for (var i = 0; i < window.dancers.length; i++) {
      var topTarget = window.dancers[i].top;
      var leftTarget = window.dancers[i].left;
      var pyth = Math.pow((Math.pow((top - topTarget), 2) + Math.pow((left - leftTarget), 2)), 0.5);
      resultsArr.push(Math.floor(pyth));
    }

    var minValue = Math.min.apply(null, resultsArr.filter(Boolean));
    var index = resultsArr.indexOf(minValue);
    var closest = window.dancers[index];
    $(this).removeClass('dancer').addClass('pair');
    closest.$node.removeClass('dancer').addClass('pair');
  });

  $('.dancer').mouseover(function() {
    $(this).css("border", "20px");

  });

});

