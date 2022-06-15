const  dodger = document.getElementById("dodger");
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left <360) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  })
  function moveDodgerRight() {
    let RightNumbers = dodger.style.right.replace();
    let right = parseInt( 10,RightNumbers)
    if (right > 0) {
      dodger.right = `${right-1}px`
    }
  }

  document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight()
    }
  })


