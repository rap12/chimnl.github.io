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

    $('.user .more').click(function() {
        var index = $('.user .more').index(this);
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
        $('#member-container .more').addClass("hidden");
        $('#member-container .more-name').removeAttr('class');
        $('#member-container .member-name').addClass('text-dark');
        $('#member-container .socials').attr("hidden", false);

        // let socials = $.parseHTML($('#modal-container .socials-wrapper').clone().text());

        // $('#modal-container .socials-wrapper').empty();
        // $('#modal-container .socials-wrapper').html(socials);
        // $('#modal-container .socials-wrapper').addClass('d-flex justify-content-center margin-y-24');
        // $('#modal-container .socials-wrapper i').addClass('fa-2x margin-x-16');
    });

    $('.user .more-name').click(function() {
        var index = $('.user .more-name').index(this);
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
        $('#member-container .more').addClass("hidden");
        $('#member-container .more-name').removeAttr('class');
        $('#member-container .member-name').addClass('text-dark');
        $('#member-container .socials').attr("hidden", false);


        // let socials = $.parseHTML($('#modal-container .socials-wrapper').clone().text());

        // $('#modal-container .socials-wrapper').empty();
        // $('#modal-container .socials-wrapper').html(socials);
        // $('#modal-container .socials-wrapper').addClass('d-flex justify-content-center margin-y-24');
        // $('#modal-container .socials-wrapper i').addClass('fa-2x margin-x-16');
    });


});
