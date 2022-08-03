function clickCounter() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
            document.getElementById("result").innerHTML = localStorage.clickcount;
        } else {
            document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
        }
}

function serviceClickCounter() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)-1;
        } else {
            localStorage.clickcount = 1;
        }
            document.getElementById("service-block-one-result").innerHTML = localStorage.clickcount;
        } else {
            document.getElementById("service-block-one-result").innerHTML = "Sorry, your browser does not support web storage...";
        }
}


function dashboardDropDownDiv() {
    var x = document.getElementById("dashboard-dropdown-block");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function mobileDashboardDropDownDiv() {
    var x = document.getElementById("mobile-sidebar-dropdown-block");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function dropColorController () {
    document.getElementById("color-controller").style.color = "#fff";
}