//Javascript

//call to jQuery ready function
//make sure html and css are loaded

$(document).ready(function () {

        console.log("ready");

        $(window).ready(function () {

            $('h4').hide();

            //hide for prototype
            $('h2#housein').hide();
            $('h2#lroomin').hide();

            $('div').hide();


            $('section#carscene').hide();
            $('#carskip').hide();
            $('section#house').hide();
            $('section#hallway').hide();

            $('#overnight').animate({
                opacity: 1
            }, 3000);
            $('.menubutton').animate({
                opacity: 1
            }, 2000);

            $('#start').one("click", function () {
                $('#overnight').fadeOut(1200);
                $('.menubutton').fadeOut(1000);
                
                $('#mainmenu').animate({
                    opacity: 0
                }, 3000, function () {
                    $('#carscene').fadeIn(1000);
                    $('#textbox1').animate({
                        opacity: 1
                    });
                    $('#mainmenu').css('display', 'none');


                    $("span#dialogue1").typed({
                        stringsElement: $('#script1'),
                        typeSpeed: 20,
                        backDelay: 4500,
                        startDelay: 4000
                    });

                    //$('#carskip').delay(2400).fadeIn(1000);

                });
            });

            $('#carnext').hover(function () {
                    $('#carnext').attr('src', 'images/rightarrow-h.gif')
                },
                function () {
                    $('#carnext').attr('src', 'images/rightarrow.gif');
                });

            $('#housenext').hover(function () {
                    $('#housenext').attr('src', 'images/rightarrow-h.gif')
                },
                function () {
                    $('#housenext').attr('src', 'images/rightarrow.gif');
                });

            $('#hallwaynext').hover(function () {
                    $('#hallwaynext').attr('src', 'images/rightarrow-h.gif')
                },
                function () {
                    $('#hallwaynext').attr('src', 'images/rightarrow.gif');
                });

            $('#carnext').click(function () {
                $('section#carscene').fadeOut(1000);
                $('#firstp').fadeOut(function () {
                    $("span#dialogue2").typed({
                    stringsElement: $('#script2'),
                    typeSpeed: 20,
                    backDelay: 4500,
                    startDelay: 3400
                });
                });
                $('section#house').delay(1200).fadeIn(2000);
                

                return false;
            });

            $('#housenext').click(function () {
                $('section#house').fadeOut(1000);
                $('#secondp').fadeOut(function () {
                    $("span#dialogue3").typed({
                        stringsElement: $('#script3'),
                        typeSpeed: 20,
                        backDelay: 4500,
                        startDelay: 3400
                    });
                });
                $('section#hallway').delay(1200).fadeIn(2000);


                return false;
            });
            
            $('#hallwaynext').click(function () {
                $('section#hallway').fadeOut(1000);
                $('#thirdp').fadeOut(function () {
                    $("span#dialogue4").typed({
                        stringsElement: $('#script4'),
                        typeSpeed: 20,
                        backDelay: 4500,
                        startDelay: 3400
                    });
                });
                //$('section#livingroom').delay(1200).fadeIn(2000);


                return false;
            });










        });


    }) //end function