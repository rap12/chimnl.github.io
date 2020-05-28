$(document).ready(function() {
    $('#member-close').click(function() {
        $('#member-overlay').hide();
        $('body').removeClass('stiff');
        $('.navbar').removeClass('z');
        $('#see').css("display", "block");
    });

    $('#member-click-off').click(function() {
        $('#member-overlay').hide();
        $('body').removeClass('stiff');
        $('.navbar').removeClass('z');
        // $('#see').css("display", "block");
    });

    $('.user a').click(function() {
        var index = $('.user a').index(this);
        console.log(index);
        $('body').addClass('stiff');
        $('.navbar').addClass('z');
        $('#member-overlay').show();
        $('#member-container #member-content').empty();
        $('.user').eq(index).clone().appendTo('#member-content');
        $('#member-container *').removeClass('d-none');
        $('#member-container .user-bio').attr("hidden", false);
        $('#member-container .user').removeClass('shadow');
        $('#member-container .user').removeClass('user');
        $('#member-container .user-bio').addClass('mb-3');
        $('#member-container a').addClass("hidden");

        // let socials = $.parseHTML($('#modal-container .socials-wrapper').clone().text());

        // $('#modal-container .socials-wrapper').empty();
        // $('#modal-container .socials-wrapper').html(socials);
        // $('#modal-container .socials-wrapper').addClass('d-flex justify-content-center margin-y-24');
        // $('#modal-container .socials-wrapper i').addClass('fa-2x margin-x-16');
    });
});
