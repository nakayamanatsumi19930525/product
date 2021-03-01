$(document).ready(function () {

  //コンテンツを非表示に
  $(".accordion-content").css("display", "none");

  //タイトルがクリックされたら
  $(".js-accordion-title").click(function () {
    //クリックしたjs-accordion-title以外の全てのopenを取る
    $(".js-accordion-title").not(this).removeClass("open");
    //クリックされたjs-accordion-title以外のcontentを閉じる
    $(".js-accordion-title").not(this).next().slideUp(300);
    //thisにopenクラスを付与
    $(this).toggleClass("open");
    //thisのcontentを展開、開いていれば閉じる
    $(this).next().slideToggle(300);
  });
  
});


/* <script type="text/javascript">

  $(function() {
    $('.multiple-items').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1
    });
});

</script> */



