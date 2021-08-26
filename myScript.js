$(function () {
  var character = '<div id="character"></div>';
  $("#map").append(character);

  $(document).keydown(function (e) {
    var position = $("#character").position();
    // alert(position);
    switch (e.keyCode) {
      case 37:
        $("#character").css("left", position.left - 20 + "px");
        break;
      case 38:
        $("#character").css("top", position.top - 20 + "px");
        break;
      case 39:
        $("#character").css("left", position.left + 20 + "px");
        break;
      case 40:
        $("#character").css("top", position.top + 20 + "px");
        break;
    }
  });
});
