$(document).ready(function () {
    //jQuery codes are here
    console.log("..:: I'm in a new file now ::..");
    console.log("We are using jQuery.");

    //jQuery main thing $() - selector '.' action. example:
    // $('selector').action

    //auto clicked when script loaded 
    // $("p").click();

    // when mouse clicked then some action will happen
    $("p").click(function () {
        console.log("p is clicked", this);
        // $('p').hide();
        //$(this).hide();
    });

    // when mouse double clicked then some action will happen
    $("p").dblclick(function () {
        console.log("This element is double clicked: ", this);

    });

    // when Mouse entered then some action will happen
    $("p").mouseenter(function () {
        console.log("Mouse entered on: ", this);
    });

    $("*").mouseenter(function () {
        console.log("Mouse entered on: ", this);

    });

    // when Mouse up then some action will happen
    $("p").mouseleave(function () {
        console.log("Mouse leave: ", this);

    });

    // when Mouse up then some action will happen
    $("p").mouseup(function () {
        console.log("Mouse up on: ", this);

    });

    // when Mouse hover then some action will happen
    $("p").hover(function () {
        console.log("Mouse hovered on: ", this);

    }, function () {
        console.log("Thanks for comming!");
    });


    // let clickCount = 0;
    $("#second").click(function () {

        if (clickCount === 0) {
            $('p:first').hide();
            let numOfClick = 1;
            console.log("#First p is clicked and hided, Number of Clicked: ", numOfClick);
        } else {
            console.log("#First p is already hided");
        }

        clickCount++

    });

    $('p:first').click();

    //multiple eventhandler
    $('p').on('click', function () {
        console.log('Thnaks for clicking', this);
    });

    $('p').on({
        'click': function () {
            console.log('Thnaks for clicking.', this);
        },
        mouseleave: function () {
            console.log('Mouse leave', this);
        }
    });

    // Hide/Show toggle
    $('#btn').click(function () {
        $('#wiki').toggle(1000, function () {
            console.log('I am toggling now.', this);
        });

    });

    // Fade methods
    $('#wiki').fadeIn(1000);
    $('#wiki').fadeOut("slow");
    $('#wiki').fadeToggle(1000);
    $('#wiki').fadeTo(3000, 0.15);

    // Slide methods - speed and callback parameters are optional
    $('#wiki').slideUp(1000, function(){
        console.log('done');
    });
    $('#wiki').slideDown(1000)
    $('#wiki').slideToggle(1000)

    // Animate function in jQuery
    $('#wiki').animate({
        opacity: 0.3,
        height: '150px',
        width: '350px'

    }, "fast")

    $('#wiki').animate({ opacity: 0.3 }, 4000);
    $('#wiki').animate({ opacity: 0.9 }, 1000);
    $('#wiki').animate({ width: '350px' }, 12000);

    $('#ta').val('setting it to Anindo');
    $('#ta').html('setting it to Anindo');
    $('#ta').html('setting it to Anindo');
    $('#inp').html('setting it to Anindo');
    $('#inp').val('setting it to Anindo');
    $('#inp').empty()
    $('#wiki').empty()
    $('#wiki').text('you are good')
    $('#wiki').remove()

    $('#wiki').addClass('myclass')
    $('#wiki').addClass('myclass2')
    $('#wiki').removeClass('myclass2')
    $('#wiki').css('background-color', 'red')
    $('#wiki').css('background-color')

    // AJAX Using jQuery
    $.get('https://code.jquery.com/jquery-3.3.1.js', function (data, status) { alert(data); })

    $.get('https://code.jquery.com/jquery-3.3.1.js', function (data, status) { alert(status); })

    $.post('https://code.jquery.com/jquery-3.3.1.js',
        { name: 'harry', channel: 'code with harry' },
        function (data, status) { alert(status) });

});
