const fileInput = document.getElementById("passport");
    const previewImage = document.getElementById("preview");

    fileInput.addEventListener("change", function () {
      const file = this.files[0];

      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          previewImage.src = e.target.result;
          previewImage.style.display = "block"; // Show the preview
        };
        reader.readAsDataURL(file);
      }
    });