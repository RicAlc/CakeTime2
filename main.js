document.getElementById('buy').addEventListener('click',
function(){
    document.querySelector(".bg-modal").style.display = "flex";
});
document.getElementById('close_product_modal').addEventListener('click',
function(){
    document.querySelector(".bg-modal").style.display = "none";
});

function customCake(){
    document.querySelector(".custom-cake").style.display = "flex";
}
function closeCustomCake(){
    document.querySelector(".custom-cake").style.display = "none";
}
function showCart(){
    if (document.querySelector(".cart").style.display == "none") {
        document.querySelector(".cart").style.display = "inline-block";
    }else{
        document.querySelector(".cart").style.display = "none";
    }
}

