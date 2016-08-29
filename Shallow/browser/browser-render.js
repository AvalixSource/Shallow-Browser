var $ = require('jquery');

$(".url").submit(function(event){
  event.preventDefault();

  url = $("#url-input").val();

  $("#pageView.active").attr('src', url);

});

$(".new-tab-button").click(function() {

  $(".tab").removeClass("active");
  $("#pageView").removeClass("active");

  $("#tabs-list").append('<li class="tab active"><div class="tab-favicon left"><div></div></div><div class="tab-title left"><p>http://google.com/searchssssssssss</p></div></li>');
  $(".wrapper").append('<webview id="pageView" class="active" src="https://www.github.com/" autosize="on" nodeintergration allowpopups></webview>');

});

$('body').on('click', '.tab', function() {

  $(".tab, #pageView").removeClass("active");

  var index = $("li").index(this);
  var webviewIndex = index + 1;

  $(".tab").eq(index).addClass('active');
  $("#pageView:nth-of-type("+ webviewIndex +")").addClass('active');

  var newUrl = $("#pageView:nth-of-type("+ webviewIndex +")").attr('src');
  $("#url-input").val(newUrl);

});
