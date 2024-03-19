// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  }
  
  window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    var btn = document.getElementById("top-up-btn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  }
  