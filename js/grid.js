 document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".gallery-item img").forEach(img => {
      img.onload = function () {
        const aspectRatio = img.naturalWidth / img.naturalHeight;
        const container = img.parentElement;
        if (aspectRatio > 1.2) {
          container.classList.add("horizontal");
        } else if (aspectRatio < 0.8) {
          container.classList.add("vertical");
        }
      };
    });
  });
