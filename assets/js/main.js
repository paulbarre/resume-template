var lnStickyNavigation;


$(document).ready(function()
{	
    lnStickyNavigation = $('#menu').offset().top;
    stickyNavigation();
    $(window).on('scroll', function()
    {  
        stickyNavigation();  
    });

    applyClickEvent();

	document.webL10n.ready(prepareLocalization);

    prepareResumeDownload();
});

function stickyNavigation()
{      
    if($(window).scrollTop() > lnStickyNavigation)
    {   
        $('#menu').addClass('fixed');
    }
    else 
    {  
        $('#menu').removeClass('fixed');   
    }  
}

function applyClickEvent()
{
    $('a[href*="#"]').on('click', function(e)
    {
        e.preventDefault();

        if ($($.attr(this, 'href')).length > 0)
        {
            $('html, body').animate({scrollTop: $($.attr(this, 'href')).offset().top}, 400);
        }

        return false;
    });

    $('.nav a').on('click', function(){
        if ($('#myNavbar').hasClass('in'))
            $('#button-collapse').click();
    });
}

function prepareLocalization() 
{
    var l10n = document.webL10n;
    flag = $('.default-lang').data('flag');

    var langCode = l10n.getLanguage().split('-', 1)[0];
    l10n.setLanguage(langCode);
    $('.lang').on('click', function(e)
    {
        l10n.setLanguage(this.hreflang);
        return false;
    });    
}

function prepareResumeDownload()
{
    $("#dialog-resume").hide();
    $('#btn-resume').click(function()
    {
        $("#dialog-resume").dialog({
            modal: true,
            dialogClass: 'dialog',
            buttons: [{
                text: document.webL10n.get('DialogClose'),
                click: function() {
                    $(this).dialog('close');
                }
            }],
            draggable: false,
            resizable: false
        });
        $('.ui-dialog-titlebar').hide();
    });
}