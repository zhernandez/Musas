window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.scrollTop > 350 && document.documentElement.scrollTop > 350) {
        document.getElementById("custo-nav").className = "test";
    } else {
       // document.getElementById("custo-nav").className = "";
    }
}