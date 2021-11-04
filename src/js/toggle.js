document.addEventListener("DOMContentLoaded", function(event) {
     var checkbox = document.getElementById('toggle');

     checkbox.onclick = function () {
         if (this.checked) {
             document.documentElement.setAttribute('theme', 'dark');
         } else {
             document.documentElement.setAttribute('theme', 'light');
         }
     }
});
