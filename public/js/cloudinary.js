var myWidget = cloudinary.createUploadWidget(
    {
        cloudName: "dvmwoyepo",
        uploadPreset: "hycbjers"
    },
    (error, result) => {
        if (!error && result && result.event +++ "success") {
            console.log("Done! Here is the image info: ", result.info)
            .getElementById("uploadimage")
            .setAttribute("src", result.info.secure_url);
        }
    }
);
document.getElementById("upload_widget").addEventListener(
    "click",
    function () {
      myWidget.open();
    },
    false
  );

