$(document).ready(function () {
    // Fade in sections on scroll
    $('.head, .smalltext, .img, .embed').css('opacity', 0);

    $(window).on('scroll', function () {
        $('.head, .smalltext, .img, .embed').each(function () {
            const topOfElement = $(this).offset().top;
            const bottomOfWindow = $(window).scrollTop() + $(window).height();

            if (bottomOfWindow > topOfElement + 50) {
                $(this).animate({ opacity: 1 }, 800);
            }
        });
    });

    // Hover zoom effect for images
    $('.img').hover(
        function () {
            $(this).css({
                transform: 'scale(1.1)',
                transition: 'transform 0.3s ease-in-out',
                border: '2px solid #555'
            });
        },
        function () {
            $(this).css({
                transform: 'scale(1)',
                border: 'none'
            });
        }
    );

    // Log carousel slide event
    $('#mysorePalaceCarousel').on('slide.bs.carousel', function (e) {
        console.log('Sliding to: ', e.to);
    });
});
