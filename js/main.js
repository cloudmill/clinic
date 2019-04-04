$(document).ready(function(){
    sliders();
    custom();
    find_in_select();
    blackhole();
    convas();
    inputs();
})
var last_scroll = 0;
$(document).scroll(function(e){
    if($('.section.sidebar').length){
        for(i = 0; i < $(document).find('.sec_in_sidebar').length;i++){
            if($('.sec_in_sidebar').eq(i).offset().top - $(document).scrollTop() < $(window).height()/2){
                id = $('.sec_in_sidebar').eq(i).attr('id')
                for(j = 0;j< $('.section.sidebar').find('li').length;j++){
                    if($('.section.sidebar').find('li').eq(j).find('a').attr('href') == '#'+id){
                        $('.section.sidebar').find('li').eq(j).addClass('up')
                    }
                }
                $('.section.sidebar').find('li').removeClass('active');
                $('.section.sidebar').find('li').eq( $('.section.sidebar').find('li.up').length-1).addClass('active');
            }
            else{
                id = $('.sec_in_sidebar').eq(i).attr('id')
                for(j = 0;j< $('.section.sidebar').find('li').length;j++){
                    if($('.section.sidebar').find('li').eq(j).find('a').attr('href') == '#'+id){
                        $('.section.sidebar').find('li').eq(j).removeClass('up')
                        $('.section.sidebar').find('li').eq(j).removeClass('active')
                    }
                    
                }
            }
        }
        
        $('.section.sidebar li a').each(function(){
            index = $(this).index();
            if($(this).offset().top < $('.head_sections').eq(0).offset().top 
            || $(this).eq(index).offset().top +$(this).eq(index).height()/2>$('.head_sections').eq(0).offset().top +$('.head_sections').eq(0).height()+120){
                $(this).eq(index).addClass('black');
            }
            else{
                $(this).eq(index).removeClass('black');
            }

            if($(this).eq(index).offset().top + $(this).eq(index).height() >$('.slider_block').eq(0).offset().top){
                $(this).eq(index).parent().addClass('hide');
            }
            else{
                $(this).eq(index).parent().removeClass('hide');
            }
        })

    }
    /* var top = $(window).scrollTop();
    if(last_scroll > top){
        $('.header').css('top',0)
        $('.wrapper').addClass('header_fixed')
    }
    else{
        $('.header').css('top',-140)
        $('.block_menu').removeClass('active')
    }   
    last_scroll = $(window).scrollTop(); */
})


function sliders(){
    if($('.section.slider_block .slider').length){
        $('.section.slider_block .slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
            arrows: true,
            dots : false,
            infinite: false,
        })
    }
    if($('.section.slider_block .slider_mobile').length){
        $('.section.slider_block .slider_mobile').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
            arrows: false,
            dots : true,
            infinite: false,
        })
    }
    if($('.section.comment .slider_comment').length){
        $('.section.comment .slider_comment').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
            arrows: false,
            dots : true,
            infinite: false,
        })
    }
    if($('.section.workers .slider').length){
        $('.section.workers .slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
            arrows: true,
            dots : false,
            infinite: false,
        })
    }
    if($('.section.rooms .slider > div').length){
        $('.section.rooms .slider > div').slick({//3 слайдера
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
            arrows: true,
            dots : false,
            infinite: false,
        })
    }
    if($('.section.slider_new_detail_img .slider').length){
        $('.section.slider_new_detail_img .slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
            arrows: true,
            dots : true,
            infinite: false,
        })
    }
    if($('.photo_gallery .slider').length){
        /* $('.photo_gallery .slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
            arrows: true,
            dots : true,
            infinite: false,
        }) */
    }
    if($('.why_we .content .statistic + .row').length && $(window).width()<= 1024){
        $('.why_we .content .statistic + .row').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
            arrows: false,
            dots : true,
            infinite: false,
        })
    }
    if($('.footer .list_menus').length && $(window).width()<= 950){
        $('.footer .list_menus').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
            arrows: false,
            dots : true,
            infinite: false,
        })
    }
    if($('.section.about .content_big .row').length && $(window).width()<= 850){
        $('.section.about .content_big .row').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
            arrows: false,
            dots : true,
            infinite: false,
        })
    }
    if($('#how_we_can_help .row').length && $(window).width()<= 550){
        $('#how_we_can_help .row').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
            arrows: false,
            dots : true,
            infinite: false,
        })
    }
    
}
function custom(){

    $(document).on('click','.drop-down .drop-down-but',function(e){
        e.preventDefault();
        $(this).parent('.drop-down').toggleClass('active');
    })
    $(document).on('click','.toggle-active-class',function(e){
        e.preventDefault();
        //search
        if($(this).find('+ input').val()!='' && $(this).hasClass('active')){
            $('.wrapper-blackhole').addClass('active');
            $('.wrapper-blackhole #search_popup').addClass('active');
            $('.wrapper-blackhole #search_popup .results').height($('.wrapper-blackhole').height()-$('.wrapper-blackhole #search_popup .search_area').height())
            $('.wrapper-blackhole #search_popup .search_area input').val($(this).find('+ input').val())
            $(this).find('+ input').val('')
        }
        //search
        $(this).toggleClass('active')
    })

    $('.dropdown-wrapper .value').click(function(){
        $(this).parent('.dropdown-wrapper').toggleClass('active')
        open_drop_down = true;
    })
    $(document).on('click','body',function(e){
        if(($('.dropdown-wrapper').has(e.target).length === 0)){
            $('.dropdown-wrapper').removeClass('active')
            open_drop_down = false;
        }
        if(($('.open_menu').has(e.target).length === 0)){
            $('.open_menur').removeClass('active')
        }
    })
    $('.dropdown-wrapper .list li').click(function(){
        $(this).parent().parent().find('input').val($(this).text())
        $(this).parent().find('li').removeClass('checked')
        $(this).addClass('checked')
        $(this).parent().parent().toggleClass('active')
    })

    $('.link_in_block').click(function(){
        window.history.pushState('forward', null, location.href);
        document.location.href = $(this).find('>a.hide').attr('href')
    })

    
    //show more
    $('.show-more-container > li, .show-more-container > div, .show-more-container > a').hide()
    var show_more_count = 2;
    var show_more_step = 2;
    for(i=0;i<show_more_count;i++){
        $('.show-more-container > li, .show-more-container > div, .show-more-container > a').eq(i).show()
    }
    $(document).on('click','.show-more',function(e){
        e.preventDefault();
        var cor =show_more_count
        for(i=show_more_count;i<show_more_count+show_more_step;i++){
            $(this).parent().find('.show-more-container > li, .show-more-container > div, .show-more-container > a').eq(i).delay(80*(i-cor)).fadeIn(300)
        }
        show_more_count +=show_more_step;
        if(show_more_count >= $('.show-more-container > li, .show-more-container > div, .show-more-container > a').length){
            $(this).hide();
            $(this).parent().find('>.line').hide();
        }
    })
    //show more

    $(document).on('click','.active_parent',function(e){
        e.preventDefault();
        $(this).parent().toggleClass('active');
    })
    $(document).on('click','.toggle_active',function(e){
        e.preventDefault();
        $(this).toggleClass('active');
    })
    
    
    $(document).on('click','.open_menu',function(event){
        event.preventDefault()
        $(this).parent().find('.block_menu').addClass('active');
    })
    $(document).on('click','.close_menu',function(event){
        event.preventDefault()
        $(this).parent().removeClass('active');
    })
}
function blackhole(){
    $('.wrapper-blackhole').height($(window).height())
    $(document).on('click','.js-popup',function(e){
        e.preventDefault();
        $('body').css('overflow','hidden');
        $('.wrapper-blackhole').find('#'+$(this).data('popup-name')).addClass('active')
        if($('.wrapper-blackhole').find('#'+$(this).data('popup-name')).hasClass('small-popup')){
            $('.wrapper-blackhole > .popup-close').hide()
        }
        console.log($(this).data('popup-name'))
        $('.wrapper-blackhole').addClass('active');
        
        if($(this).data('popup-name') == 'photo-gallery'){
            var photo_gallery = document.getElementById("photo-gallery");;
            photo_gallery.innerHTML = '';
            var items = '<div class="content_midlle_big slider arrow-req">';
            for(i = 0;i<$(this).parent().find('.item').length;i++){
                var img = '<img src="'+ $(this).parent().find('.item').eq(i).find('img').attr('src') +'">';
                var p = "<p>"+ $(this).parent().find('.item').eq(i).find('p').text() +"</p>"
                var item = "<div class='item'>"+ img + p +"</div>"
                console.log(item)
                items += item;
            }
            items += "</div>";
            photo_gallery.innerHTML += items;
            $(document).find('#photo-gallery .slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 1000,
                arrows: true,
                dots : true,
                infinite: false,
            })
            $(this).index()
            $(document).find('#photo-gallery .slider').slick('slickGoTo',$(this).index())
        }
        if($(this).data('popup-name') == 'zoom'){
            var zoom= document.getElementById("zoom");
            zoom.innerHTML = '';
            var img = '<img src='+ $(this).find('img').attr('src') +'>';
            zoom.innerHTML += img;
        }
    })
    $(document).on('click','.popup-close',function(){
        $('.wrapper-blackhole').find('.item-popup').removeClass('active')
        $('.wrapper-blackhole').removeClass('active');
        $('body').css('overflow','auto');
        $('.wrapper-blackhole > .popup-close').show()
    })
    $(document).on('click','.block_menu .search input + label', function(event){
        event.preventDefault();
        if($(this).parent().find('input').val() !=''){
            $('.wrapper-blackhole').addClass('active');
            $('.wrapper-blackhole #search_popup').addClass('active');
            $('.wrapper-blackhole #search_popup .results').height($('.wrapper-blackhole').height()-$('.wrapper-blackhole #search_popup .search_area').height())
            $('.wrapper-blackhole #search_popup .search_area input').val($(this).parent().find('input').val())
            $(this).parent().find('input').val('')
        }
        else{
            $(this).parent().find('input').focus();
        }
        
    })
    $(document).on('keyup','.mini_search + input , .block_menu .search input', function(event){
        if(event.keyCode == 13 && $(this).val() !=''){
            $('body').css('overflow','hidden');
            $('.wrapper-blackhole').addClass('active');
            $('.wrapper-blackhole #search_popup').addClass('active');
            $('.wrapper-blackhole #search_popup .results').height($('.wrapper-blackhole').height()-$('.wrapper-blackhole #search_popup .search_area').height())
            $('.wrapper-blackhole #search_popup .search_area input').val($(this).val())
            $(this).val('')
        }
    })
}
function inputs(){
    $('#date').daterangepicker({
        singleDatePicker: true,
        timePicker: true,
        timePicker24Hour: true,
        locale: {
            format: 'DD.MM.YY в hh:mm'
            }
    });
    $('.phone-input').mask("+7 (999) 99-99-999");
    $(document).on('change','#date',function(){
        $(this).parent().parent().find('input[name="time"]#sometimes').prop('checked', true)
    })
}
function find_in_select(){
    $(document).on('keyup','.dropdown-wrapper .value input',function(e){
        word = $(this).val().toLowerCase();
        if(e.keyCode){
            $(this).parent().parent().find('.list li').hide();
        for(i=0;i<$(this).parent().parent().find('.list li').length;i++){
            var str = $(this).parent().parent().find('.list li').eq(i).text().toLowerCase()
            if(str.indexOf(word)+1){
                $(this).parent().parent().find('.list li').eq(i).show()
            }
        }
        if(word == ''){
            $(this).parent().parent().find('.list li').show();
        }
        }
    })
}

function convas(){
    $('.block_stocks .item .right .img img').after('<canvas class="canvas"></canvas>')
    if(document.getElementsByClassName('canvas').length > 0){
        var Canvas = document.getElementsByClassName('canvas');
    }
    else{
        var Canvas = 0;
    }
    var resize = function() {
        for(i=0;i< Canvas.length;i++){
            Canvas[i].width = Canvas[i].clientWidth;
            Canvas[i].height = Canvas[i].clientHeight;
        }
    };
    window.addEventListener('resize', resize);
    resize();
    var ctx = [];
    var elements = [];
    var presets = [];

    for(i=0;i< Canvas.length;i++){
        
        var ctx_temp = Canvas[i].getContext('2d');
        elements[i] = [];
        presets[i] = {};
        presets[i].o = function (x, y, s, dx, dy) {
            return {
                x: x,
                y: y,
                r: 12 * s,
                w: 5 * s,
                dx: dx,
                dy: dy,
                draw: function(ctx_temp, t) {
                    this.x += this.dx;
                    this.y += this.dy;
                    
                    ctx_temp.beginPath();
                    ctx_temp.arc(this.x + + Math.sin((50 + x + (t / 10)) / 100) * 3, this.y + + Math.sin((45 + x + (t / 10)) / 100) * 4, this.r, 0, 2 * Math.PI, false);
                    ctx_temp.lineWidth = this.w;
                    ctx_temp.strokeStyle = '#fff';
                    ctx_temp.stroke();
                }
            }
        };
        presets[i].x = function (x, y, s, dx, dy, dr, r) {
            r = r || 0;
            return {
                x: x,
                y: y,
                s: 20 * s,
                w: 5 * s,
                r: r,
                dx: dx,
                dy: dy,
                dr: dr,
                draw: function(ctx_temp, t) {
                    this.x += this.dx;
                    this.y += this.dy;
                    this.r += this.dr;
                    
                    var _this = this;
                    var line = function(x, y, tx, ty, c, o) {
                        o = o || 0;
                        ctx_temp.beginPath();
                        ctx_temp.moveTo(-o + ((_this.s / 2) * x), o + ((_this.s / 2) * y));
                        ctx_temp.lineTo(-o + ((_this.s / 2) * tx), o + ((_this.s / 2) * ty));
                        ctx_temp.lineWidth = _this.w;
                        ctx_temp.strokeStyle = c;
                        ctx_temp.stroke();
                    };
                    
                    ctx_temp.save();
                    
                    ctx_temp.translate(this.x + Math.sin((x + (t / 10)) / 100) * 5, this.y + Math.sin((10 + x + (t / 10)) / 100) * 2);
                    //ctx_temp.rotate(this.r * Math.PI / 180);
                    
                    line(-1, -1, 1, 1, '#fff');
                    line(1, -1, -1, 1, '#fff');
                    
                    ctx_temp.restore();
                }
            }
        };
        ctx[i] = ctx_temp;

        for(var x = 10; x < Canvas[i].width-10; x++) {
            for(var y = 10; y < Canvas[i].height-10; y++) {
                if(Math.round(Math.random() * 8000) == 1) {
                    var s = ((Math.random() * 5) + 1) / 8;
                    if(Math.round(Math.random()) == 1)
                        elements[i].push(presets[i].o(x, y, s, 0, 0));
                    else
                        elements[i].push(presets[i].x(x, y, s, 0, 0, ((Math.random() * 3) - 1) / 10, (Math.random() * 360)));
                }
            }
        }
    }

    setInterval(function() {
        for(i=0;i< Canvas.length;i++){
            ctx[i].clearRect(0, 0, Canvas[i].width, Canvas[i].height);
            var time = new Date().getTime();
            for (var e in elements[i])
                elements[i][e].draw(ctx[i], time);
        }
        
    }, 10);
    
}
function range(){
    var
    val = $('.range').val();
    $('.range').css({'background':'-webkit-linear-gradient(left ,#ef214d 0%,#fedc35 '+val*10+'%,#fff '+val*10+'%, #fff 100%)'});
    $('.range').parent().find('.value span').text(val)
 }