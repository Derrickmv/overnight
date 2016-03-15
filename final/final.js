//Javascript

//call to jQuery ready function
//make sure html and css are loaded

$(document).ready(function () {

        console.log("ready");

        $(window).ready(function () {

            var vid = $('#introvid');

            //hide dialogue/script stuff
            $('div').hide();
            $('.tooltips').hide();

            //hide dialogue before they show up and take up space
            $('.hidedialogue').hide();

            //video next button
            $('#videonext').hide();
            $('#restartgame').hide();

            //hide room sections before they show up
            $('section#introduction').hide();
            $('section#instructions').hide();
            $('section#carscene').hide();
            $('section#house').hide();
            $('section#hallway').hide();
            $('section#uphallway').hide();
            $('section#livingroom').hide();
            $('section#studio').hide();
            $('section#masterroom').hide();
            $('section#bedroom').hide();
            $('section#credits').hide();
            $('section#note').hide();
            $('section#abtgame').hide();

            //skip button for car scene
            $('#carskip').hide();

            //hide definitions sections before they show up
            $('section#portrait').hide();
            $('section#landscape').hide();
            $('section#pricolors').hide();
            $('section#drawerkey').hide();
            $('section#fampic').hide();
            $('section#abstract').hide();
            
            //hide actual definitions before they show up
            $('#portrait-d').hide();
            $('#landscape-d').hide();
            $('#pricolors-d').hide();
            $('#crsha-d').hide();
            $('#abs-d').hide();

            //hide buttons because people may accidentally click them when they click the first one
            $('img.nextbtn').hide();
            $('img.backbtn').hide();
            $('img.upbtn').hide();

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
            
            //about game functions
            $('#abtgamebtn').click(function () {
                $('#abtgame').fadeIn(1000);
            });

            //click to close button
            $('.close').click(function () {
                $(this).parent().fadeOut(1000);
            });



            //start game
            $('#start').click(function () {

                $('#overnight').fadeOut(1200);
                $('.menubutton').fadeOut(1000);

                //main menu fades out and video fade in
                $('#mainmenu').animate({
                    opacity: 0
                }, 3000, function () {
                    $('#mainmenu').css('display', 'none');
                    $('#introduction').fadeIn(1000);
                    $('#introvid').get(0).currentTime = 0;
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
                        $('#firstp').delay(1000).fadeIn(2000, function () {
                            $("span#dialogue1").typed({
                                stringsElement: $('#script1'),
                                typeSpeed: 25,
                                backDelay: 3000,
                                startDelay: 2000
                            });
                            $('#carnext').delay(75000).fadeIn(1000);
                        });
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

                        $('#firstp').delay(1000).fadeIn(2000, function () {
                            $("span#dialogue1").typed({
                                stringsElement: $('#script1'),
                                typeSpeed: 25,
                                backDelay: 3000,
                                startDelay: 3000
                            });
                        });
                    });
                    $('#carnext').delay(75000).fadeIn(1000);
                });


                //arrow button hover functions
                $('.nextbtn').stop().hover(function () {
                        $(this).attr('src', 'images/rightarrow-h.gif');
                        $(this).next().fadeIn(500);
                    },
                    function () {
                        $(this).attr('src', 'images/rightarrow.gif');
                        $(this).next().fadeOut(500);
                    });

                $('.backbtn').stop().hover(function () {
                        $(this).attr('src', 'images/leftarrow-h.gif');
                        $(this).next().fadeIn(500);
                    },
                    function () {
                        $(this).attr('src', 'images/leftarrow.gif');
                        $(this).next().fadeOut(500);
                    });

                $('.upbtn').stop().hover(function () {
                        $(this).attr('src', 'images/uparrow-h.gif');
                        $(this).next().fadeIn(500);
                    },
                    function () {
                        $(this).attr('src', 'images/uparrow.gif');
                        $(this).next().fadeOut(500);
                    });


                //car to house function
                $('#carnext').one("click", function () {
                    $('section#carscene').fadeOut(1000);
                    $('#firstp').fadeOut(function () {
                        $('#secondp').delay(1000).fadeIn(2000, function () {
                            $("span#dialogue2").typed({
                                stringsElement: $('#script2'),
                                typeSpeed: 20,
                                backDelay: 4000,
                                startDelay: 2000
                            });
                        });
                    });
                    $('section#house').delay(1200).fadeIn(2000);
                    $('#housenext').delay(59000).fadeIn(1000);
                });

                //house to hallway function
                $('#housenext').one("click", function () {
                    $('section#house').fadeOut(1000);
                    $('#secondp').fadeOut(function () {
                        $('#thirdp').delay(1000).fadeIn(2000, function () {
                            $("span#dialogue3").typed({
                                stringsElement: $('#script3'),
                                typeSpeed: 20,
                                backDelay: 4000,
                                startDelay: 2400
                            });
                        });
                    });
                    $('section#hallway').delay(1200).fadeIn(2000);
                    $('#hallwaynext').delay(19000).fadeIn(1000);
                });

                //hallway to living room function
                $('#hallwaynext').stop().click(function () {
                    $('section#hallway').fadeOut(1000);
                    $('#thirdp').fadeOut(function () {
                        $('#fourthp').delay(2000).fadeIn();
                        $("span#dialogue4").typed({
                            stringsElement: $('#script4'),
                            typeSpeed: 20,
                            backDelay: 3000,
                            startDelay: 2400
                        });
                    });
                    $('section#livingroom').delay(1200).fadeIn(2000);
                    $('#lroomnexts').delay(26000).fadeIn(1000);
                    $('#hallwaynext').fadeOut(1000);
                });
                
                //hallway to living room function NO TEXT
                $('#hallwaynext-n').stop().click(function () {
                    $('section#hallway').fadeOut(1000);
                    $('section#livingroom').delay(2200).fadeIn(2000);
                });


                //hallway to upstairs function
                $('#hallwayup').stop().click(function () {
                    $('section#hallway').fadeOut(1000);
                    $('#fifthp').fadeOut(function () {
                        $('#sixthp').delay(2000).fadeIn();
                        $("span#dialogue6").typed({
                            stringsElement: $('#script6'),
                            typeSpeed: 20,
                            backDelay: 4000,
                            startDelay: 3000
                        });
                    });
                    $('section#uphallway').delay(1200).fadeIn(2000);
                    $('#uphallnext').delay(5300).fadeIn(1000);
                    $('#hallwayup').fadeOut(1000);
                });
                
                //hallway to upstairs function NO TEXT
                $('#hallwayup-n').stop().click(function () {
                    $('section#hallway').fadeOut(1000);
                    $('section#uphallway').delay(2200).fadeIn(2000);
                });

                //upstairs to hallway BACK function
                $('#uphallback').stop().click(function () {
                    $('section#uphallway').fadeOut(1000);
                    $('#sixthp').fadeOut(function () {
                        $('#ninthp').delay(2000).fadeIn(1000, function () {
                            $("span#dialogue9").typed({
                                stringsElement: $('#script9'),
                                typeSpeed: 20,
                                backDelay: 4000,
                                startDelay: 3000
                            });
                        });
                    });
                    $('section#hallway').delay(1200).fadeIn(2000);
                    $('#hallwaydown').delay(5000).fadeIn(1000);
                    $('#hallwayup-n').fadeIn(1000);
                });

                //living room to hallway BACK function
                $('#lroomback').stop().click(function () {
                    $('section#livingroom').fadeOut(1000);
                    $('section#hallway').delay(1200).fadeIn(2000);
                    $('#hallwaynext-n').fadeIn(1000);
                    $('#hallwayup').delay(5000).fadeIn(1000);
                    
                });

                //living room to studio function
                $('#lroomnexts').stop().click(function () {
                    $('section#livingroom').fadeOut(1000);
                    $('#fourthp').fadeOut(function () {
                        $('#fifthp').delay(2000).fadeIn(2000);
                        $("span#dialogue5").typed({
                            stringsElement: $('#script5'),
                            typeSpeed: 25,
                            backDelay: 3000,
                            startDelay: 3000
                        });
                    });
                    $('section#studio').delay(1200).fadeIn(2000);
                    $('#studioback').delay(20000).fadeIn(1000);
                    $('#lroomnexts').fadeOut(1000);
                });
                
                //living room to studio function NO TEXT
                $('#lroomnexts-n').stop().click(function () {
                    $('section#livingroom').fadeOut(1000);
                    $('section#studio').delay(2200).fadeIn(2000);
                });


                //studio to living room BACK function
                $('#studioback').stop().click(function () {
                    $('section#studio').fadeOut(1000);
                    $('section#livingroom').delay(1200).fadeIn(2000);
                    $('#lroomback').delay(3000).fadeIn(1000);
                    $('#lroomnexts-n').fadeIn(1000);
                });

                //upstairs to bedroom function
                $('#uphallnext').stop().click(function () {
                    $('section#uphallway').fadeOut(1000);
                    $('#sixthp').fadeOut(function () {
                        $('#seventhp').delay(2000).fadeIn(2000);
                        $("span#dialogue7").typed({
                            stringsElement: $('#script7'),
                            typeSpeed: 20,
                            backDelay: 4000,
                            startDelay: 3000
                        });
                    });
                    $('section#bedroom').delay(1200).fadeIn(2000);
                    $('#bedback').delay(15000).fadeIn(1000);
                    $('#uphallnext-n').fadeOut(1000);
                });
                
                //upstairs to bedroom function NO TEXT
                $('#uphallnext-n').stop().click(function () {
                    $('section#uphallway').fadeOut(1000);
                    $('section#bedroom').delay(2200).fadeIn(2000);
                });


                //bedroom to upstairs hallway BACK function
                $('#bedback').stop().click(function () {
                    $('section#bedroom').fadeOut(1000);
                    $('#seventhp').fadeOut();
                    $('section#uphallway').delay(1200).fadeIn(2000);
                    $('#uphallup').delay(4900).fadeIn(1000);
                    $('#uphallnext-n').fadeIn(1000);
                });

                //upstairs to master bedroom function
                $('#uphallup').stop().click(function () {
                    $('section#uphallway').fadeOut(1000);
                    $('#sixthp').fadeOut(function () {
                        $('#eighthp').delay(2000).fadeIn(2000);
                        $("span#dialogue8").typed({
                            stringsElement: $('#script8'),
                            typeSpeed: 20,
                            backDelay: 4000,
                            startDelay: 3000
                        });
                    });
                    $('section#masterroom').delay(1200).fadeIn(2000);
                    $('#mbedback').delay(13000).fadeIn(1000);
                    $('#uphallup').fadeOut(1000);
                });
                
                //upstairs to master bedroom function NO TEXT
                $('#uphallup-n').stop().click(function () {
                    $('section#uphallway').fadeOut(1000);
                    $('section#masterroom').delay(2200).fadeIn(2000);
                });


                //master bedroom to upstairs hallway BACK function
                $('#mbedback').stop().click(function () {
                    $('section#masterroom').fadeOut(1000);
                    $('#eighthp').fadeOut();
                    $('section#uphallway').delay(1200).fadeIn(2000);
                    $('#uphallback').delay(3600).fadeIn(1000);
                    $('#uphallup-n').fadeIn(1000);
                });

                //hallway to basement END of GAME
                $('#hallwaydown').stop().click(function () {
                    $('section#hallway').fadeOut(1000);
                    $('#textbox').fadeOut(1000);
                    $('#bgmusic').get(0).pause();
                    $('#credits').delay(2000).fadeIn(1000, function () {
                        $('#creditvid').get(0).currentTime = 0;
                        $('#creditvid').get(0).play();
                        $('#restartgame').delay(45000).fadeIn(1000);
                    });
                });

                $('#restartgame').stop().click(function () {
                    location.reload();
                });

                //definition clicks
                $('#lr-small').click(function () {
                    $('#portrait').fadeIn(1000);
                });

                $('#lr-large').click(function () {
                    $('#landscape').fadeIn(1000);
                });
                $('#stdpainting').click(function () {
                    $('#pricolors').fadeIn(1000);
                });
                $('#drawer').click(function () {
                    $('#drawerkey').fadeIn(1000);
                });
                $('#bdroomdraw-th').click(function () {
                    $('#fampic').fadeIn(1000);
                });
                 $('#note-th').click(function () {
                    $('#note').fadeIn(1000);
                });
                $('#abs-painting').click(function () {
                    $('#abstract').fadeIn(1000);
                });

            }); //end beginning click function

            //picture hovers
            $('#stdpainting').stop().hover(function () {
                    $(this).attr('src', 'images/std-painting-th-h.png');
                },
                function () {
                    $(this).attr('src', 'images/std-painting-th.png');
                });
            $('#note-th').stop().hover(function () {
                    $(this).attr('src', 'images/note-th-h.png');
                },
                function () {
                    $(this).attr('src', 'images/note-th.png');
                });


            //show definition hover
            $('.boldd').mouseover(function () {
                $(this).parent().next().fadeIn(1000);
            });

        }); //end window ready function


    }) //end doc ready function