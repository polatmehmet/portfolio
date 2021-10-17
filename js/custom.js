$( document ).ready(function() {
    AOS.init();

   let swiper = new Swiper(".mySwiper", {
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: false,
        },
    });

    $('#comment-form').submit(function(e) {
        e.preventDefault();
        let commentBy = $.trim($('#comment-name').val());
        let comment = $.trim($('#comment-message').val());
        if (!comment || !commentBy) {
            alert('Please, fill all the areas correctly!');
        } else {
            let d = new Date();
            let month = d.getMonth()+1;
            let day = d.getDate();
            let output = (day<10 ? '0' : '') + day + '/' + (month<10 ? '0' : '') + month + '/' + (day<10 ? '0' : '') + d.getFullYear() ;
            $( '.comment-list').append( '<li class="item"><div class="comment"><h4>'+commentBy+' <strong>Says</strong></h4><p>'+comment+'</p></div><div class="others"><span>'+output+'</span><a href="javascript:;" class="remove"><i class="far fa-trash-alt"></i></a></div></li>' );
        }
    });

    $('#contact-form').submit(function(e) {
        e.preventDefault();
        let name = $.trim($('#name').val());
        let mail = $.trim($('#mail').val());
        let subject = $.trim($('#subject').val());
        let message = $.trim($('#message').val());
        if (!name || !mail || !subject || !message) {
            alert('Please, fill all the areas correctly!');
        } else {
            var values = $(this).serialize();
            $.ajax({
                url: "test.php",
                type: "post",
                data: values ,
                success: function (response) {
                    // Response => Mailiniz başarıyla gönderildi.
                    alert(response);
                },
                error: function(jqXHR, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
                }
            });
        }
    });
});

$(document).on('click','.remove',function(){
    $( this ).parent().parent().remove();
});