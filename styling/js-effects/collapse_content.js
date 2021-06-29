//for collapsible level 1

// var coll = document.getElementsByClassName("collapsible");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

//for collapsible level2

// var coll2 = document.getElementsByClassName("collapsible2");
// var j;

// for (j = 0; j < coll2.length; j++) {
//   coll2[j].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content2 = this.nextElementSibling;
//     if (content2.style.display === "block") {
//       content2.style.display = "none";
//     } else {
//       content2.style.display = "block";
//     }
//   });
// }
var coll2 = document.getElementsByClassName("collapsible2");
var i2;

for (i2 = 0; i2 < coll2.length; i2++) {
  coll2[i2].addEventListener("click", function() {
    this.classList.toggle("active");
    var content2 = this.nextElementSibling;
    if (content2.style.maxHeight){
      content2.style.maxHeight = null;
    } else {
      content2.style.maxHeight = content2.scrollHeight + "px";
    } 
  });
}