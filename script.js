function openModal( img, caption )
{
    var modal = document.getElementById("modal");
    var modalImage = document.querySelector("div#modal > img");
    var modalText = document.querySelector("div#modal > span");

    modal.style.height = "100%";
    modalImage.src = img.src;
    modalText.textContent = caption;
}


function closeModal()
{
    var modal = document.getElementById("modal");

    modal.style.height = "0%";
}