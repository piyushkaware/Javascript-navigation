var navbar = false;

function opennav() {
  if (!navbar) {
    $(".maindiv").css("width", "100%");
    $("li").css("display", "block");
    navbar = true;
  } else {
    $(".maindiv").css("width", "0%");
    $("li").css("display", "none");
    navbar = false;
  }
}
