require(['jquery', 'jquery/ui', 'slick'], function($) {
    $(document).ready(function() {
        $(".carousel > .pagebuilder-column-line").slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    });
});
