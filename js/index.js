// Change the span text

var profession_array = ["a developer", "a designer", "a freelancer", "an internet marketer", "a food lover"]

window.setInterval(function () {
    timedText();
}, 10000);

function timedText() {
    setTimeout(myTimeout1, 2000)
    setTimeout(myTimeout2, 4000)
    setTimeout(myTimeout3, 6000)
    setTimeout(myTimeout4, 8000)
    setTimeout(myTimeout5, 10000)
}

function myTimeout1() {
    document.getElementById("profession-span").innerHTML = profession_array[0];
    // console.log(new Date());
}

function myTimeout2() {
    document.getElementById("profession-span").innerHTML = profession_array[1];
    // console.log(new Date());
}

function myTimeout3() {
    document.getElementById("profession-span").innerHTML = profession_array[2];
    // console.log(new Date());
}

function myTimeout4() {
    document.getElementById("profession-span").innerHTML = profession_array[3];
    // console.log(new Date());
}

function myTimeout5() {
    document.getElementById("profession-span").innerHTML = profession_array[4];
    // console.log(new Date());
}



// When we scroll down, the go to top button pops up
function scrollTopFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("myBtn").style.display = "block";
        document.getElementById("navbar").style.padding = "5px 0px";
    } else {
        document.getElementById("myBtn").style.display = "none";
        document.getElementById("navbar").style.padding = "20px 0px";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// When the user scrolls the webpage, the progress container shows the percentage of scrolled percentage
function progressFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

//Shows snackbar when about heading is clicked
function aboutSnackbar() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar_about");
    // Add the "show" class to DIV
    x.className = "show";
    // After 3 seconds, remove the show class from DIV
    setTimeout(function () {
        x.className = x.className.replace("show", "");
    }, 3000);
}

//Shows snackbar when projects heading is clicked
function projectsSnackbar() {
    var x = document.getElementById("snackbar_projects");
    x.className = "show";
    setTimeout(function () {
        x.className = x.className.replace("show", "");
    }, 3000);
}

//Shows snackbar when contact heading is clicked
function contactSnackbar() {
    var x = document.getElementById("snackbar_contact");
    x.className = "show";
    setTimeout(function () {
        x.className = x.className.replace("show", "");
    }, 3000);
}

// When the user scrolls down, reduce the height of the navbar. When the user scrolls up, increase the height of the navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    scrollTopFunction();
    progressFunction();
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("contact_btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


filterSelection("all")

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("project_content");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}