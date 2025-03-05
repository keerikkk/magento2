require(['jquery', 'jquery/ui', 'slick'], function($) {
    $(document).ready(function() {
        $(".carousel > .pagebuilder-column-line").slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1
        });
    });
});
