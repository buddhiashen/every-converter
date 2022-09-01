function pixel_conv(valNum){
    if (valNum < 0){
        var modal = document.getElementById("myModal");
        var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        span.onclick = function() {
            modal.style.display = "none";
          }
        modal.style.display = "block";
    }
    else if(valNum >= 0){
        document.getElementById("output_pix_to_rem").innerHTML = valNum*0.0625;
        document.getElementById("output_pix_to_pt").innerHTML = valNum*0.75;
    }
    
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal


// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


}