
var modal = document.getElementsByClassName("modal");
var btn = document.getElementById("myBtn"); 

btn.onclick = function() {
    modal.style.display = "block";
}

window.onclick = function() {
    modal.style.dispaly = "none";
}
