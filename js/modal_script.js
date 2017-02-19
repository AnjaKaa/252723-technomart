{  var link = document.querySelector(".btn-feedback-form");
  var popup = document.querySelector(".modal-content");
  var link1 = document.querySelector(".buy-product");
  var popup1 = document.querySelector(".modal-content-order");
  var overlay = document.querySelector(".overlay");
  var close = popup.querySelectorAll(".modal-content-close");
  var form = popup.querySelector("form");
  var ffname = popup.querySelector("[name=feedback-form-name]");
  var ffemail = popup.querySelector("[name=feedback-form-email]");
  var ffcontent = popup.querySelector("[name=feedback-form-content]");
 

 
  link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
    overlay.classList.add("overlay-show");
    ffname.focus();
  });
 
link1.addEventListener("click", function(event) {
    event.preventDefault();
    popup1.classList.add("modal-content-show");
    overlay.classList.add("overlay-show");
  });
 

  close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    overlay.classList.remove("overlay-show");
  });

   close1.addEventListener("click", function(event) {
    event.preventDefault();
    popup1.classList.remove("modal-content-show");
    overlay.classList.remove("overlay-show");
  });
 
  form.addEventListener("submit", function(event) {
    if (!ffname.value || !ffemail.value || !ffcontent.value) {
      event.preventDefault();
      console.log("Нужно ввести имя,почту и сообщение");
    }
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (popup.classList.contains("modal-content-show")) {
        popup.classList.remove("modal-content-show");
        overlay.classList.remove("overlay-show");
      }
    }
  });
 
      var mapOpen = document.querySelector(".map");

      var mapPopup = document.querySelector(".modal-content-map");
      var mapClose = mapPopup.querySelector(".modal-content-close");
  mapOpen.addEventListener("click", function(event) {
        event.preventDefault();
        mapPopup.classList.add("modal-content-show");
      });

      mapClose.addEventListener("click", function(event) {
        event.preventDefault();
        mapPopup.classList.remove("modal-content-show");
      });

      window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (mapPopup.classList.contains("modal-content-show")) {
            mapPopup.classList.remove("modal-content-show");
          }
        }
      });
}
