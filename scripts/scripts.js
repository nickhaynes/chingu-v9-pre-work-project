$(document).ready(function() {
    var target = $("#search-results");
    var trigger = $("#search-container")

    $(trigger).click(function() {
        console.log("Triggered");
        $(target).html("Changes");
    });
});