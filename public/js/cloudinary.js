const cloudName = "dvmwoyepo";
const uploadPreset = "hycbjers";

const myWidget = cloudinary.createUploadWidget(
    {
        cloudName: "dvmwoyepo",
        uploadPreset: "hycbjers"
    },
    (error, result) => {
        
        if (!error && result && result.event === "success") {
            console.log("Done! Here is the image info: ", result)
            document.getElementById("uploadedimage").setAttribute("src",  result.info.secure_url);
            // create post route with fetch request to secure url
            keepImage.addEventListener("submit",e=>{
                e.preventDefault();
                const keepImageID = document.querySelector("#chosenLoveFlavor").value;
                fetch(`/api/users/image/${keepImageID}`,{
                    method:"POST"
                })
            })
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
