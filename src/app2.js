import "./app2.css";
import $ from "jquery";
const $tabBar = $("#app2 .tab-bar");
const $tabContent = $("#app2 .tab-content");

$tabBar.on("click", "li", (e) => {
  const $li = $(e.currentTarget);
  $li //
    .addClass("selected")
    .siblings()
    .removeClass("selected");
  const index = $li.index();

  $tabContent // 找到子孙们的第index个变成block，它的兄弟就变成none
    .children()
    .eq(index)
    .addClass("active")
    .siblings()
    .removeClass("active");
});

$tabBar.children().eq(0).trigger("click");
