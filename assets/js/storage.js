$(document).ready(function(){
    var username = localStorage.getItem("name");
    var namediv = document.createTextNode(username + "'s To Do list");
    $("#header-title").append(namediv);
});