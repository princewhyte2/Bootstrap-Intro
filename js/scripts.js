$(function() {
    $("#reserveTable").on("click",
        function() {
            $("#reserveTable").attr("data-toggle", "modal");
            $("#reserveTable").attr("data-target", "#reservationModal");

        }
    );
    $("#login").on("click",
        function() {
            $("#login").attr("data-toggle", "modal");
            $("#login").attr("data-target", "#loginModal");

        }
    );

    $("#mycarousel").carousel({
        interval: 2000
    });
    $("#carouselButton").on("click", function() {
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        } else {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }
    });
});