// These functions select each individual tile, and then change their styling
// by toggling a class on and off.

function zoomTopLeft() {
    var element = document.getElementById("topleft-zoom-tile");
    element.classList.toggle("topleft-zoom-style");
}
  function zoomTopRight() {
    var element = document.getElementById("topright-zoom-tile");
    element.classList.toggle("topright-zoom-style");
  }

  function zoomBottomLeft() {
    var element = document.getElementById("bottomleft-zoom-tile");
    element.classList.toggle("bottomleft-zoom-style");
  }

  function zoomBottomRight() {
    var element = document.getElementById("bottomright-zoom-tile");
    element.classList.toggle("bottomright-zoom-style");
  }