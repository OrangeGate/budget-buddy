document.addEventListener('DOMContentLoaded', function() {
    var _budget = localStorage.getItem("bName");
    document.getElementById("bOutput").innerHTML = _budget;
});