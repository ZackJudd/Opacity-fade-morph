// morph-image.js
//  Enter on Github: 10/31/17 1:39 P.M.  (Happy Halloween!)
//    Zachary Judd
//
//    Place code below in appropriate directory and link to it in your html head with: <script type="text/javascript" src="morph-image.js" />
//    Alternatively, you can copy and paste the code below into your own javascript file.

var elem = document.getElementById("ID1"), /* Replace ID1 with the id of the element you want to fade out.  This element should be visible. */
    elem2 = document.getElementById("ID2"), /* Replace ID2 with the id of the element you want to fade in.  This element should NOT be visible. */
    op = 1,
    secondOp = 0,
    show;



// Put this function in the onmouseover attribute of the HTML element you want the effect on.

function hoverOn_logo() {
  
  var play = setInterval(frame, 100);
  function frame() {
    if (op <= 0 || show == "false"){
      clearInterval(play);
      show = "";
    } else {
      show = "true";
      op = op - 0.1; 
      secondOp = secondOp + 0.1;
      elem.style.opacity = op;
      elem2.style.opacity = secondOp;
    }
  };
}; 



// Put this function in the onmouseover attribute of the HTML element you want the effect on.

function hoverOff_logo() {

  var play = setInterval(frame, 100);
  function frame() {
    if (op >= 1 || show == "true") {
      clearInterval(play);
      show = "";
    } else {
      show = "false";
      op = op + 0.1; 
      secondOp = secondOp - 0.1;
      elem.style.opacity = op;
      elem2.style.opacity = secondOp;
    }
  };
};

// Thanks for checking out my work!
// Zachary Judd
//
// EOF morph-image.js
