$(document).ready(function () {
  window.dancers = [];
  window.music = false;

  $('.addDancerButton').on('click', function (event) {
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

    // start the music
    if (!window.music) {
      dancerMakerFunctionName !== 'KpopDancer' ? $('#rnb')[0].play() : $('#kpop')[0].play();
      window.music = true;
    }
    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      (Math.random() * 1000) + 500
    );
    $('.dancespace').append(dancer.$node);
  });

  $('.lineup-btn').on('click', function (event) {
    event.preventDefault(); // stops page refreshing
    var dancers = $('.dancespace').detach();
    let dancersArray = Array.from(dancers[0].children);
    $('.gap').css('height', '60vh');
    for (var i = 0; i < dancersArray.length; i++) {
      let newImg = $(dancersArray[i]);
      var styleSettings = {
        position: 'static'
      };
      newImg.css(styleSettings); //stop toggle,
      $('.dancefloor').append(newImg);
      // $('.gap).css(height = 80vh);
      //add gap's 80vh back to css
    }

  });

  $('img').on('mouseover', function (event) {
    $(this).css(("height", "300px"));
  });

  // $('img').hover(function () {
  //   console.log("triggered");
  //   $(this).css("height", "200px");
  //   console.log(this);
  // });

  // // document.getElementById('hide_me').addEventListener('click', function () {
  // //   this.style.display = 'none';
  // // });

});
