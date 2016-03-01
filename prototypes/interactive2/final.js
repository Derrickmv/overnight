//Javascript

//call to jQuery ready function
//make sure html and css are loaded

$(document).ready(function () {

        console.log("ready");

        $(window).ready(function () {

            var vid = $('#introvid');

            $('h4').hide();

            //hide for prototype
            $('h2#housein').hide();
            $('h2#lroomin').hide();

            $('div').hide();

            $('section#introduction').hide();
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
                    $('#mainmenu').css('display', 'none');
                    $('#introduction').fadeIn(1000);
                    $('#introvid').get(0).play();
                    $('#introduction').delay(34000).fadeOut(1000, function () {
                        $('#carscene').fadeIn(1000);
                        $('#bgmusic').get(0).play();
                        $('#textbox').animate({
                            opacity: 1
                        });
                        $("span#dialogue1").typed({
                            stringsElement: $('#script1'),
                            typeSpeed: 20,
                            backDelay: 4500,
                            startDelay: 4000
                        });

                        //$('#carskip').delay(2400).fadeIn(1000);

                    });
                });
            });

            $('#skipintro').one('click', function () {
                $('#introduction').hide();
                $('#introvid').get(0).pause();
                $('#bgmusic').get(0).play();
                $('#carscene').delay(2000).fadeIn(1000);
                        $('#textbox').delay(2000).animate({
                            opacity: 1
                        });
                        $("span#dialogue1").typed({
                            stringsElement: $('#script1'),
                            typeSpeed: 20,
                            backDelay: 4500,
                            startDelay: 4000
                        });

            });



            $('.nextbtn').hover(function () {
                    $('.nextbtn').attr('src', 'images/rightarrow-h.gif')
                },
                function () {
                    $('.nextbtn').attr('src', 'images/rightarrow.gif');
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




        }); //end window ready function


    }) //end doc ready function