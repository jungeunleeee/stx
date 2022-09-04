// Common JS
$(document).ready(function () {
    preventDefaultAnchor();
    navTransition();
    moveSlide();
});

function moveSlide() {
    let cnt = 0;
    $('a.prev').css({
        'display': 'none'
    });

    //클릭했을 때: next
    $('a.next').click(function (e) {
        cnt++;
        e.preventDefault();
        $('a.prev').css({
            'display': 'block'
        });
        $(this).addClass('on');
        $('a.prev').removeClass('on');

        if (cnt === 5) {
            $('main').animate({
                'left': '-=190px'
            }, function () {
                $('main').animate({
                    'left': 0
                });
                cnt = 0;
                $('a.next').removeClass('on');
                $('a.prev').css({
                    'display': 'none'
                })
            });

        } else {
            $('a.prev').css({
                'display': 'block'
            })
            $('main').animate({
                'left': '-=380px'
            });

        }

    });

    //클릭했을 때: prev
    $('a.prev').click(function (e) {
        e.preventDefault();
        $(this).addClass('on');
        $('a.next').removeClass('on');
        cnt--;
        if (cnt === 0) {
            $('a.prev').css({
                'display': 'none'
            });
        }
        $('main').animate({
            'left': '+=380px'
        });
    });
}


function navTransition() {
    const liElem = document.querySelectorAll('nav > ul.gnb-list > li');
    console.log(liElem);


    // hover했을 때 nav변화
    liElem.forEach(function (item, idx) {
        let img = item.querySelector("a img");
        let out = img.src;
        let hover = img.getAttribute("data-hover");
        console.log(hover);

        img.onmouseover = function () {
            img.src = hover;
        }

        img.onmouseout = function () {
            img.src = out;
        }
    });

}

function preventDefaultAnchor() {
    $(document).on('click', 'a[href="#"]', function (e) {
        e.preventDefault();
    });
}