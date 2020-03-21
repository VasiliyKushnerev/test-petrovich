jQuery(document).ready(function() {

// here all ready functions


    render_products();
    clicker();


});




var page = document.querySelector('.wrap');


// -----------------------------------------------------
// -----------------    RENDERING PRODUCTS    --------------------
// -----------------------------------------------------

      function render_products() {
        jQuery.getJSON('products.json', function(data){
            //console.log(data);
            for(i=0; i < data.length; i++)
            {
                document.getElementsByClassName('wrap')[0].innerHTML += '<section class="product"><div class="left_part"> ' +
                    '<a href="#" class="product_link"> ' +
                    '<img src="'+(data[i]["primaryImageUrl"]).slice(0, -4)+'_220x220_1.jpg" alt="product"> ' +
                    '</a> ' +
                    '</div><!--end left_part-->' +
                    '<div class="middle_part"> ' +
                    '<p>Код: <span>'+(data[i]["code"]).slice(5)+'</span></p>' +
                    ' <a href="#" class="name_href">'+data[i]["title"]+'</a> ' +
                    '<p> ' +
                    '<span>Могут понадобиться:</span> '+assocProduct(data[i]["assocProducts"])+'' +
                    '</p> ' +
                    '</div><!--end middle_part-->' +
                    '<div class="right_part"> ' +
                    '<p class="cash">Наличие</p> ' +
                    '<div class="price_info"> ' +
                    '<p class="card">По карте клуба</p> ' +
                    '<div class="price_price"> ' +
                    '<p> ' +
                    '<span class="view">'+rounding(data[i]["priceGoldAlt"])+'</span> ' +
                    '<span class="hider">'+rounding(data[i]["priceGold"])+'</span> ' +
                    '<span class="money"> ' +
                    '<svg version="1.0" id="rouble__b" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="18px" height="18px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve"> ' +
                    '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rouble_black">'+
                    '<svg id="rouble_black"> ' +
                    '<path fill="#010101" d="M44.431,6.112c-1.719-2.395-4.211-4.125-7.055-4.899c-3.884-0.647-7.824-0.894-11.759-0.735H9.743v22.194H3.031v8.329h6.712v4.556H3.031v8.329h6.712v5.683h9.799v-5.634h14.698v-8.329H19.542v-4.507h6.467c3.427,0.083,6.854-0.147,10.24-0.686c1.764-0.451,3.427-1.232,4.899-2.303c1.763-1.273,3.192-2.954,4.165-4.899c1.155-2.36,1.711-4.968,1.617-7.594C47.17,12.259,46.291,8.917,44.431,6.112z M35.955,19.585c-0.757,1.1-1.835,1.938-3.087,2.401c-2.557,0.664-5.201,0.928-7.839,0.784h-5.487V8.855h4.899c2.373-0.064,4.748,0.051,7.104,0.343c1.528,0.25,2.927,1.01,3.969,2.156c1.068,1.215,1.629,2.793,1.568,4.409C37.112,17.123,36.718,18.459,35.955,19.585L35.955,19.585z"></path> ' +
                    '</svg> ' +
                    '</use> ' +
                    '</svg> ' +
                    '</span> ' +
                    '</p> ' +
                    '<p> ' +
                    '<span class="view">'+rounding(data[i]["priceRetailAlt"])+'</span> ' +
                    '<span class="hider">'+rounding(data[i]["priceRetail"])+'</span> ' +
                    '<span class="money"> ' +
                    '<svg version="1.0" id="rouble__g" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="18px" height="18px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve"> ' +
                    '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rouble_gray"> ' +
                    '<svg id="rouble_gray"> ' +
                    '<path fill="#a7a7a7 " d="M28.109,29.658c5.173,0.578,10.357-0.979,14.355-4.312c4.172-4.748,5.151-11.509,2.499-17.246c-0.847-1.953-2.2-3.644-3.92-4.899c-1.813-1.204-3.872-1.991-6.026-2.303c-2.464-0.37-4.955-0.534-7.447-0.49H9.05v23.272H3.562v5.781H9.05v5.977H3.562v5.781H9.05v8.378h6.467v-8.133h20.088v-5.781H15.517v-6.026H28.06H28.109z M15.566,6.386h12.543c2.019-0.074,4.04,0.074,6.026,0.441c1.673,0.442,3.132,1.467,4.116,2.891c1.062,1.539,1.611,3.373,1.568,5.242c0.138,2.473-0.832,4.879-2.646,6.565c-2.601,1.812-5.76,2.645-8.917,2.352H15.517V6.386H15.566z"></path> ' +
                    '</svg> ' +
                    '</use> ' +
                    '</svg> ' +
                    '</span> ' +
                    '</p> ' +
                    '</div> ' +
                    '</div> ' +
                    '<p class="buy">Можно купить за 231.75 балла</p> ' +
                    '<div class="variant"> ' +
                    '<p class="selectiv active">За '+data[i]["unitAlt"]+'</p> ' +
                    '<p class="selectiv targ">За '+(data[i]["unitFull"]).slice(0,-1)+'у</p> ' +
                    '</div> ' +
                    '<div class="clearing"></div>'+
                    '<div class="info_sell"> ' +
                    '<img src="assets/images/unit--i.png" alt="unit"> ' +
                    '<div> ' +
                    '<p>Продается <span>'+data[i]["unitFull"]+"ми"+'</span>:</p> ' +
                    '<p>'+data[i]["unitRatio"]+' '+data[i]["unitFull"]+' = '+rounding(data[i]["unitRatioAlt"])+' '+data[i]["unitAlt"]+'</p> ' +
                    '</div> ' +
                    '</div> ' +
                    '<div class="bottomer"> ' +
                    '<div class="stepper"> ' +
                    '<span class="arrow up">-</span> ' +
                    '<input class="counter" type="text" value="1"> ' +
                    '<span class="arrow down">+</span> ' +
                    '</div> ' +
                    '<div class="basket" data-product-id='+data[i]["productId"]+'> ' +
                    '<span> ' +
                    '<svg class="ic ic_cart"> ' +
                    '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart"> ' +
                    '<svg id="cart"> ' +
                    '<path d="m14.571 16.381c.571 0 .952.381.952.952 0 .571-.381.952-.952.952-.571 0-.952-.381-.952-.952 0-.571.476-.952.952-.952m0-.952c-1.048 0-1.905.857-1.905 1.905 0 1.048.857 1.905 1.905 1.905 1.048 0 1.905-.857 1.905-1.905 0-1.048-.857-1.905-1.905-1.905"></path> ' +
                    '<path d="m7.905 16.381c.571 0 .952.381.952.952 0 .571-.381.952-.952.952-.571 0-.952-.381-.952-.952 0-.571.476-.952.952-.952m0-.952c-1.048 0-1.905.857-1.905 1.905 0 1.048.857 1.905 1.905 1.905 1.048 0 1.905-.857 1.905-1.905 0-1.048-.857-1.905-1.905-1.905"></path> ' +
                    '<path d="m16.476 14.476h-10.857l-.095-.381c0-.095-1.429-9.714-1.905-11.524-.381-1.524-3.333-1.429-3.333-1.429v-.952c.095 0 3.714-.286 4.286 2.19.381 1.714 1.619 9.333 1.81 11.143h10.1v.952"></path> ' +
                    '<path d="m4.095 3.048h15.238v.952h-15.238z"></path> ' +
                    '<path d="m5.05 10.667h12.381v.952h-12.381z"></path> ' +
                    '<path d="m16.476 11.619h.952l1.905-8.571h-.952l-1.905 8.571"></path> ' +
                    '</svg> ' +
                    '</use> ' +
                    '</svg> ' +
                    '</span> ' +
                    '<span>В корзину</span> ' +
                    '</div> ' +
                    '</div> ' +
                    '</div><!--end right_part-->'
            }

        });

    }

// -----------------------------------------------------
// -----------------    ASSOCIATED PRODUCTS    --------------------
// -----------------------------------------------------
    function assocProduct(e) {
        var assocProducts = e.split(/;/);
        var Link = '';

        for (var i = 0; i < assocProducts.length - 1; i++) {
            Link += "<a href=\"#\" class=\"link\"> ".concat(assocProducts[i], "; </a>");
        }

        return Link;
    }

// -----------------------------------------------------
// -----------------    ROUNDING    --------------------
// -----------------------------------------------------
    function rounding(e) {
        return (e).toFixed(2);
    }

// -----------------------------------------------------
// -----------------    CLICKER    --------------------
// -----------------------------------------------------

    function clicker() {
    var page = document.querySelector('.wrap');

    page.addEventListener('click', function (e) {
        if (e.target.classList.contains('arrow')) {
            increment(e);
        }
        else if(e.target.classList.contains('selectiv')){
            swither(e);
        }
         else {
            return;
        }
    });




}

// -----------------------------------------------------
// -----------------    INCREMENT    --------------------
// -----------------------------------------------------

    function increment(e) {

        var el = e.target;
        var input = el.parentNode.querySelector('.counter');
        var count = parseInt(input.value);

        if (el.classList.contains('up')) {
            count++;
            input.value = count;
        } else if (el.classList.contains('down') && input.value > 0) {
            count--;
            input.value = count;
            if (input.value < 1) {
                input.value = 1;
            }
        } else {
            return;
        }
    }


// -----------------------------------------------------
// -----------------    SWITHER    --------------------
// -----------------------------------------------------

    function swither(e) {
     var clickTarget = e.target;
     jQuery(clickTarget).addClass('active').siblings().removeClass('active');
     var elem = jQuery(clickTarget).parent(".variant").siblings(".price_info").find(".hider");
     if(jQuery(clickTarget).hasClass('targ')){
            jQuery(elem).addClass('view').siblings().removeClass('view');
        }
        else {
            jQuery(elem).removeClass('view').siblings().addClass('view');
        }

   }


