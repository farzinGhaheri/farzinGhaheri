document.getElementById('getBody').onload= function() {getDate()};
function getDate() {
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
document.getElementById("selectDate").innerHTML = date;
}
function changeTabs(evt, item) {
    var i, tabContent, tabLinks, checkBio;
    tabContent = document.getElementsByClassName("tabContent")
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName("tabLinks")
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    document.getElementById(item).style.display = "block";
    evt.currentTarget.className += " active";
    if(evt.currentTarget.className === 'navbar-brand tabLinks active'){
    document.getElementById('bioText').style.display="inline-flex";
    }
}
