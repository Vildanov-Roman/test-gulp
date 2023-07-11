import $ from "jquery";
import validator from "jquery-validation";
import { Fancybox } from "@fancyapps/ui";

$.validator.setDefaults({
  debug: true,
  success: "valid",
});

$(".causebox-bottom__form").validate({
  rules: {
    field: {
      required: true,
      email: true,
    },
  },
});

$(".popup-right__btn").on("click", () => {
  Fancybox.close();
});

$(".causebox-bottom__form").on("submit", () => {
  if ($(".causebox-bottom__form").valid()) {
    Fancybox.show([{ src: "#dialog-content", type: "inline" }]);
  }
});

//on same addEventListener
