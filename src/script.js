document.addEventListener("DOMContentLoaded", () => {
document.getElementById("navbar-toggle-btn").addEventListener("click", (event)=>{
  console.log(document.getElementById("navbar-toggle-btn").classList.contains("collapsed"));
  if(document.getElementById("navbar-toggle-btn").classList.contains("collapsed")){
    // hide bar icon
      document.getElementById("bars-icons").classList.remove("show-icon");
      document.getElementById("bars-icons").classList.add("hide-icon");
    // show cancel icon
      document.getElementById("cancel-icons").classList.remove("hide-icon");
      document.getElementById("cancel-icons").classList.add("show-icon");
  }
  else{
    // hide bar icon
      document.getElementById("cancel-icons").classList.remove("show-icon");
      document.getElementById("cancel-icons").classList.add("hide-icon");
    // show cancel icon
      document.getElementById("bars-icons").classList.remove("hide-icon");
      document.getElementById("bars-icons").classList.add("show-icon");
  }

});
  
});