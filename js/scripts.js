$(document).ready(function(){
    
    $(window).click(function(){
        $('ul.acount').removeClass('show');
    });

    // Header Acount
	$('#acount-menu, .user-image a').click(function(){
        $('ul.acount').toggleClass('show');
        return false;
    });
    // Notification Allart
	$('.notification-alart').children('#close-alart').click(function(){
        $(this).parent().fadeOut('100');
        return false;
    });

    // Statics Tab
    $('.statics-content-menu ul li a').click(function(){
        $('.statics-content-menu ul li a').removeClass('active');
        $(this).addClass('active');
        return false;
    });
    $('.statics-content-menu ul li #one').click(function(){
        $('.statics-content').hide();
        $('.statics-content.one').fadeIn();
        return false;
    });
    $('.statics-content-menu ul li #two').click(function(){
        $('.statics-content').hide();
        $('.statics-content.two').fadeIn();
        return false;
    });
    $('.statics-content-menu ul li #three').click(function(){
        $('.statics-content').hide();
        $('.statics-content.three').fadeIn();
        return false;
    });
    $('.statics-content-menu ul li #four').click(function(){
        $('.statics-content').hide();
        $('.statics-content.four').fadeIn();
        return false;
    });
    $('.statics-content-menu ul li #five').click(function(){
        $('.statics-content').hide();
        $('.statics-content.five').fadeIn();
        return false;
    });

    
    // EOMS Menu
    $('.eoms-menu ul li a').click(function(){
        $('.eoms-menu ul li a').removeClass('active');
        $(this).addClass('active');
        return false;
    });
    // EOMS Tab
    $('#em-1').click(function(){
        $('.e-content, .eoms-button input').hide();
        $('.e-1, .eoms-button button').fadeIn();
        return false;
    });
    $('#em-2').click(function(){
        $('.e-content, .eoms-button input').hide();
        $('.e-2, .eoms-button button').fadeIn();
        return false;
    });
    $('#em-3').click(function(){
        $('.e-content, .eoms-button input').hide();
        $('.e-3, .eoms-button button').fadeIn();
        return false;
    });
    $('#em-4').click(function(){
        $('.e-content, .eoms-button button').hide();
        $('.e-4, .eoms-button input').fadeIn();
        return false;
    });
    $('#em-5').click(function(){
        $('.e-content, .eoms-button input').hide();
        $('.e-5, .eoms-button button').fadeIn();
        return false;
    });

    
    // Segment step
    $('#seg-1').click(function(){
        $('.segmentation-input-content-area').hide();
        $('#seg-1').hide();
        $('.segmentation-input-content-area.ges-step-2').fadeIn();
        $('#seg-2').fadeIn();
        $('.seg-a-2').addClass('active');
        return false;
    });
    $('#seg-2').click(function(){
            $('.segmentation-input-content-area').hide();
            $('#seg-1,#seg-2').hide();
            $('.segmentation-input-content-area.ges-step-3').fadeIn();
            $('#seg-3').fadeIn();
            $('.seg-a-3').addClass('active');
            return false;
        });


 // Form step
    $('#fs-one').click(function(){
        $('.unifiecom-step-1-content-area').hide();
        $('.skip-btn.two').hide();
        $('.unifiecom-step-1-content-area.step-one').fadeIn();
        $('.skip-btn.one').fadeIn();
        $('#fs-one').addClass('active');
        return false;
    });

    $('#fs-two, .skip-btn.one a, #fsb-one').click(function(){
        $('.unifiecom-step-1-content-area').hide();
        $('.skip-btn.one').hide();
        $('.unifiecom-step-1-content-area.step-two').fadeIn();
        $('.skip-btn.two').fadeIn();
        $('#fs-two').addClass('active');
        return false;
    });
    $('#fs-three, .skip-btn.two a, #fsb-two').click(function(){
        $('.unifiecom-step-1-content-area').hide();
        $('.skip-btn').hide();
        $('.unifiecom-step-1-content-area.step-three').fadeIn();
        $('#fs-three').addClass('active');
        $('#fs-two').addClass('active');
        return false;
    });


    

    // Mobile Nav
    $('#mobile-nav').click(function(){
        $('.mobile-nav').addClass('show');
        $('body').addClass('canvasShow');
        return false;
    });
    $('#close-nav').click(function(){
        $('.mobile-nav').removeClass('show');
        $('body').removeClass('canvasShow');
        return false;
    });
    // Spark Popup
    $('#sparkPopup').click(function(){
        $('.content-left.pop').hide();
        $('.spark-triger-popup').fadeIn();
        return false;
    });
    $('#closePopup').click(function(){
        $('.spark-triger-popup').hide();
        $('.content-left.pop').fadeIn();
        return false;
    });
    // Scroll Bar
    $('.product-title-single-items').each(element, new SimpleBar);

	
})