function upDate(previewPic) {

    console.log("Event triggered");
    console.log("Alt text is: " + previewPic.alt);
    console.log("Source is: " + previewPic.src);

   
    document.getElementById("image").innerHTML = previewPic.alt;

 
    document.getElementById("image").style.backgroundImage =
        "url('" + previewPic.src + "')";
}


function unDo() {

 
    document.getElementById("image").innerHTML =
        "Hover over an image below to display here.";

    
    document.getElementById("image").style.backgroundImage =
        "url('')";
}