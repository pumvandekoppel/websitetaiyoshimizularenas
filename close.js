$("div.modal-background, div.modal-close").on("click", function (ev) {
    $("div.modal").fadeOut(0);
    ev.preventDefault();
  });