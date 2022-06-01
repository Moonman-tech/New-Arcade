function dashboardDropDownDiv() {
    var x = document.getElementById("dashboard-dropdown-block");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function mobileDashboardDropDownDiv() {
    var x = document.getElementById("controller");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}