//Javascript

//call to jQuery ready function
//make sure html and css are loaded

$(document).ready(function () {

        console.log("ready");

        $(window).ready(function () {

            var vid = $('#introvid');

            //hide for prototype
            $('h2#housein').hide();
            $('h2#lroomin').hide();
            $('h2#studin').hide();

            //hide dialogue/script stuff
            $('div').hide();

            //video next button
            $('#videonext').hide();

            //hide room sections before they show up
            $('section#introduction').hide();
            $('section#instructions').hide();
            $('section#carscene').hide();
            $('#carskip').hide();
            $('section#house').hide();
            $('section#hallway').hide();
            $('section#livingroom').hide();
            $('section#studio').hide();
            
            //hide definitions sections before they show up
            $('section#portrait').hide();
            $('section#landscape').hide();
            
            //hide actual definitions before they show up
            $('#portrait-d').hide();
            $('#landscape-d').hide();

            //hide buttons because people may accidentally click them when they click the first one
            $('img.nextbtn').hide();
            $('img.backbtn').hide();

            //main menu
            $('#mainmenu').animate({
                opacity: 1
            }, 2000, function () {
                $('#overnight').animate({
                    opacity: 1
                }, 3000);
                $('.menubutton').animate({
                    opacity: 1
                }, 2000);
            });

            //instruction functions
            $('#instructionbtn').click(function () {
                $('#instructions').fadeIn(1000);
            });
            
            //click to close button
                $('.close').click(function () {
                    $(this).parent().fadeOut(1000);
                });
                
            
            
            //start game
            $('#start').one("click", function () {

                $('#overnight').fadeOut(1200);
                $('.menubutton').fadeOut(1000);

                //main menu fades out and video fade in
                $('#mainmenu').animate({
                    opacity: 0
                }, 3000, function () {
                    $('#mainmenu').css('display', 'none');
                    $('#introduction').fadeIn(1000);
                    $('#introvid').get(0).play();
                    $('video').addClass('show');

                    //skip intro video
                    $('#skipintro').click(function () {
                        $('#introduction').hide();
                        $('#introvid').get(0).pause();
                        $('video').removeClass('show');
                        $('video').addClass('hide');
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
                        $('#carnext').delay(5000).fadeIn(1000);
                    });

                    //after video plays, next button fades in
                    $('#skipintro').delay(32000).fadeOut(1000);
                    $('#videonext').delay(34000).fadeIn(1000);

                    $('#videonext').click(function () {
                        $('#introduction').fadeOut(1000);
                        $('#carscene').delay(1000).fadeIn(1000);
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
                    });

                    $('#carnext').delay(5000).fadeIn(1000);

                    //$('#carskip').delay(2400).fadeIn(1000);

                });


                //button hover functions
                $('.nextbtn').hover(function () {
                        $('.nextbtn').attr('src', 'images/rightarrow-h.gif')
                    },
                    function () {
                        $('.nextbtn').attr('src', 'images/rightarrow.gif');
                    });

                $('.backbtn').hover(function () {
                        $('.backbtn').attr('src', 'images/leftarrow-h.gif')
                    },
                    function () {
                        $('.backbtn').attr('src', 'images/leftarrow.gif');
                    });

                
                
                //car to house function
                $('#carnext').one("click", function () {
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
                    $('#housenext').delay(5000).fadeIn(1000);
                });

                //house to hallway function
                $('#housenext').one("click", function () {
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
                    $('#hallwaynext').delay(5000).fadeIn(1000);
                });

                //hallway to living room function
                $('#hallwaynext').stop().click(function () {
                    $('section#hallway').fadeOut(1000);
                    $('#thirdp').fadeOut(function () {
                        $('#fourthp').delay(2000).fadeIn();
                        $("span#dialogue4").typed({
                            stringsElement: $('#script4'),
                            typeSpeed: 20,
                            backDelay: 4500,
                            startDelay: 3400
                        });
                    });
            $('section#livingroom').delay(1200).fadeIn(2000);
                    $('#lroomnexts').delay(5000).fadeIn(1000);
                    $('#lroomback').delay(5000).fadeIn(1000);
                    $('#hallwaynext').fadeOut(1000);
                });

                //living room to hallway BACK function
                $('#lroomback').stop().click(function () {
                    $('section#livingroom').fadeOut(1000);
                    $('#fourthp').fadeOut(function () {
                        $('#thirdp').delay(2000).fadeIn(1000, function () {
                            $("span#dialogue3").typed({
                                stringsElement: $('#script3'),
                                typeSpeed: 20,
                                backDelay: 4500,
                                startDelay: 3400
                            });
                        });
                    });
                $('section#hallway').delay(1200).fadeIn(2000);
                    $('#hallwaynext').delay(5000).fadeIn(1000);
                    $('#lroomback').fadeOut(1000);
                    $('#lroomnexts').fadeOut(1000);
                });

                //living room to studio function
                $('#lroomnexts').stop().click(function () {
                    $('section#livingroom').fadeOut(1000);
                    $('#fourthp').fadeOut(function () {
                        $('#fifthp').delay(2000).fadeIn(2000);
                        $("span#dialogue5").typed({
                            stringsElement: $('#script5'),
                            typeSpeed: 20,
                            backDelay: 4500,
                            startDelay: 3400
                        });
                    });
                $('section#studio').delay(1200).fadeIn(2000);
                    $('#studioback').delay(5000).fadeIn(1000);
                    $('#lroomback').fadeOut(1000);
                    $('#lroomnexts').fadeOut(1000);
                });

                
                //studio to living room BACK function
                $('#studioback').stop().click(function () {
                    $('section#studio').fadeOut(1000);
                    $('#fifthp').fadeOut(function () {
                        $('#fourthp').delay(2000).fadeIn(2000, function () {
                            $("span#dialogue4").typed({
                                stringsElement: $('#script4'),
                                typeSpeed: 20,
                                backDelay: 4500,
                                startDelay: 3400
                            });
                        });
                    });
            $('section#livingroom').delay(1200).fadeIn(2000);
                    $('#lroomnexts').delay(5000).fadeIn(1000);
                    $('#lroomback').delay(5000).fadeIn(1000);
                    $('#studioback').fadeOut(1000);
                });
                
                
                //definition clicks
                $('#lr-small').click(function () {
                   $('#portrait').fadeIn(1000); 
                });
                
                $('#lr-large').click(function () {
                   $('#landscape').fadeIn(1000); 
                });
                
                
            }); //end beginning click function
            
            
            
            //show definition hover
            $('#por-bold').mouseover(function () {
                        $('#portrait-d').fadeIn(1000);
                    });
            $('#land-bold').mouseover(function () {
                        $('#landscape-d').fadeIn(1000);
                    });
            
        }); //end window ready function


    }) //end doc ready function