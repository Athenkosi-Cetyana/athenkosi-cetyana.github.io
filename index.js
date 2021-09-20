$(document).ready(function() {
  
    $(".item i").hover(function() {
      $(this).addClass("shake");
      $(this).addClass("animated");
       },
     function() {
      $(this).removeClass("shake");
      $(this).removeClass("animated");
    
     }); 
     
      
      $().hover(function() {
      $(this).addClass("bounce");
      $(this).addClass("animated");
      },
     function() {
      $(this).removeClass("bounce");
      $(this).removeClass("animated");
    
      }); 
      
    });
    
    
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    
    /*------------------------------SCROLLIFY	-----------------------------------*/
    
    
    
    $.scrollify({
            section : "section",
            sectionName : "section-name",
            easing: "easeOutExpo",
            scrollSpeed: 900,
            offset : 0,
            scrollbars: true,
            standardScrollElements: "",
            setHeights: true,
            before:function() {},
            after:function() {},
            afterResize:function() {},
            afterRender:function() {}
        });
    
    /*------------------------------SCROLLIFY	FOOTER-----------------------------------*/
    
    
    
    
    /*------------------------------SCROLLIFY	FOOTER-----------------------------------*/
    
        $.fn.jQuerySimpleCounter = function( options ) {
            var settings = $.extend({
                start:  0,
                end:    100,
                easing: 'swing',
                duration: 400,
                complete: ''
            }, options );
    
            var thisElement = $(this);
    
        
    
            $({count: settings.start}).animate({count: settings.end}, {
                duration: settings.duration,
                easing: settings.easing,
                step: function() {
           
                    var mathCount = Math.ceil(this.count);
                    thisElement.text(mathCount);
                },
                complete: settings.complete
            });
        };
     
    
    
    $('#number1').jQuerySimpleCounter({end: 9,duration: 10000});
    $('#number2').jQuerySimpleCounter({end: 100000,duration: 10000});
    $('#number3').jQuerySimpleCounter({end: 120,duration: 8000});
    $('#number4').jQuerySimpleCounter({end: 246,duration: 9000});
        
    
    /*------------------------------SKILLS-----------------------------------*/
    
    var champData = {
        labels: ["html", "css", "javascript", "drupal", "wordpress", "bootstrap", "jQuery", "Ajax", "Angular JS"],
        datasets: [
            {
                label: "Data",
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "#fff",
                highlightFill: "rgba(220,220,220,0.75)",
                highlightStroke: "rgba(220,220,220,1)",
                data: [100, 100, 60, 80, 35, 100, 65, 20, 20]
            }
        ]
    };
    
    var ctx = document.getElementById("champData").getContext("2d");
    window.myBarChart = new Chart(ctx).Bar(champData, {responsive: true});
    
    
    var timeData = {
        labels: [" September", "october", "november", "december 2015", "January", "February", "March", "April", "May"],
        datasets: [
            {   
                label: "This Year",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [45, 50, 55, 20, 40, 55, 70, 70, 80]
            }
        ]
    };
    
    var ctx = document.getElementById("timeData").getContext("2d");
    window.myLineChart = new Chart(ctx).Line(timeData, {responsive: true});
    
    
    /*------------------------------PORTFOLIO ISOTOPE-----------------------------------*/
    
    
    $(function(){
      var $container = $('#Portfolio');
    
      $container.isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows',
      });
    
      $('#filters').on( 'click', 'a', function() {
        var filterValue = $(this).attr('data-filter');
        $('#filters a').removeClass('active');
        $(this).addClass('active');
        $container.isotope({ filter: filterValue });
      });
    });
    
    
    
    /*--SCROLL REVEAL-------------------------------------------------------------------------*/
    
    $(function() {
    
      var $window           = $(window),
          win_height_padded = $window.height() * 1.1,
          isTouch           = Modernizr.touch;
    
      if (isTouch) { $('.revealOnScroll').addClass('animated'); }
    
      $window.on('scroll', revealOnScroll);
    
      function revealOnScroll() {
        var scrolled = $window.scrollTop(),
            win_height_padded = $window.height() * 1.1;
    
        // Showed...
        $(".revealOnScroll:not(.animated)").each(function () {
          var $this     = $(this),
              offsetTop = $this.offset().top;
    
          if (scrolled + win_height_padded > offsetTop) {
            if ($this.data('timeout')) {
              window.setTimeout(function(){
                $this.addClass('animated ' + $this.data('animation'));
              }, parseInt($this.data('timeout'),10));
            } else {
              $this.addClass('animated ' + $this.data('animation'));
            }
          }
        });
        // Hidden...
       $(".revealOnScroll.animated").each(function (index) {
          var $this     = $(this),
              offsetTop = $this.offset().top;
          if (scrolled + win_height_padded < offsetTop) {
            $(this).removeClass('animated fadeInUp fadeInDown fadeInLeft fadeInRight flipInX lightSpeedIn')
          }
        });
      }
    
      revealOnScroll();
    });
    
    /*https://codepen.io/benske/pen/yJoqz*/
    
    