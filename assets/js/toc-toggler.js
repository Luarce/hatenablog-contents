// 開閉する目次

// 前提：
// <script src="https://code.jquery.com/jquery-3.6.0.min.js">

$(function () {
    var contentsText = "目次";
    var closeText = "[ 閉じる ]";
    var openText = "[ 展開 ]";

    var $contents = $(".table-of-contents");
    var $li = $contents.find("li");

    $contents.prepend(
      '<span class="contents">' +
        contentsText +
        "</span>" +
        '<span class="switch">' +
        closeText +
        "</span>"
    );

    var $switch = $contents.find(".switch");

    $switch.on("click", function () {
      var isHidden = $li.is(":hidden");
      $li.toggle(400);
      $switch.text(isHidden ? closeText : openText);
    });
  });