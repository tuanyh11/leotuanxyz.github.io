
    // const e = document.querySelector.bind(document);
    // const ee = document.querySelectorAll.bind(document);
    // const header = e('.header');
    // const btnMenu = e('.header-menu');
    // const btnMenuElement = e('.menu-bars');
    // const navHeader = e('.navbar');
    // window.onscroll = function() {
    //     if(this.scrollY > 20) {
    //         header.classList.add('sticky')
    //     } else {
    //         header.classList.remove('sticky')
    //     }
        
    // }

    $(window).scroll(() => {
        if(window.scrollY > 20) {
            $('.header').addClass('sticky');
        }else {
            $('.header').removeClass('sticky');
        }
    })

    $('.header-menu').click(() => {
        console.log($('.header-menu'))
        $('.nav__item-link').each((index, element) => {
            $(element).click(() => {
                $('.navbar').toggleClass('active', false);
                $('.menu-bars').toggleClass('active', false);
            }) 
        })
        $('.navbar').toggleClass('active');
        $('.menu-bars').toggleClass('active');
    })




    $('.owl-carousel').owlCarousel({
        loop:true,
        nav: false,
        margin:20,
        stagePadding: 10,
        dotsEach: true,
        outoplayHoverPause: true,
        autoplaySpeed: 10000,
        responsive:{
            0:{
                items:1,
                nav: true
            },
            600:{
                items:2,
                nav: true
                
            },
            1000:{
                items:3,
                nav: true
            }
        }
    })

    var typed = new Typed(".name-job", {
        strings: ["Designers Website","Youtuber", "Handsome Guy :))"], 
        typeSpeed: 100,
        backSpeed: 40,
        startDelay: 40,
        loop: true
    })

    var typed = new Typed(".name-job-2", {
        strings: ["Designers Website","Youtuber", "Handsome Guy :))"], 
        typeSpeed: 100,
        backSpeed: 40,
        loop: true
    })

    // // xử lý form
    function validator (option) {
        
        var selectorRules= {};
        let validate = (element, rule, errorMes) => {
            let valueInput = $(rule.selector).val();
            let rules = selectorRules[rule.selector]
           
            for (let i = 0; i < rules.length; i++) {
                errorMes = rules[i](valueInput);
                if(errorMes) break;
            }
        

            if(errorMes) {
                console.log($(element))
                $(element).html(errorMes);
                $(element).toggleClass("active", true);
                $(rule.selector).toggleClass("active", true);
           } else {
                $(element).html('');
                $(element).toggleClass("active", false);
                $(rule.selector).toggleClass("active", false);
           }
        }
        
        if( $(option.form)) {
            $(option.form).submit((e) => {
                e.preventDefault();
                $(option.rules).each((index, rule) => {
                    var element = $(rule.selector).parent().children('span');
                    validate(element, rule);
                })
            })

            $(option.rules).each((index, rule) => {
                if(Array.isArray(selectorRules[rule.selector])) {
                    selectorRules[rule.selector].push(rule.check);
                } else {
                    selectorRules[rule.selector] = [rule.check];
                }
                var element = $(rule.selector).parent().children('span');
                $(rule.selector).blur(() => {
                    validate(element, rule);
                })
    
                $(rule.selector).focus(() => {
                    $(element).innerText = '';
                    $(element).toggleClass("active", false);
                    $(rule.selector).toggleClass("active", false);
                })
            })  
       }
    }   
    

    validator.isRequired = selector => ({
        selector: selector,
        check: (value) => {
            console.log(value)
            return value ? undefined : 'vui lòng nhập trường này'; 
        }
    })

        

    validator.isConfirmed = (selector, mes) => ({
        selector: selector,
        check: (value) => {
              var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
              return regex.test(value.trim()) ? undefined : mes;
        }   
    })

    validator.isPhone = (selector, mes) => ({
        selector: selector,
        check: (value) => {
              var regex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
              return regex.test(value.trim()) ? undefined : mes;
        }   
    })
    
