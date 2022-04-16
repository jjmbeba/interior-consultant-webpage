const ham = document.getElementById("ham");
const close = document.getElementById("close");

ham.addEventListener("click",e=>{
    document.querySelector(".menu").classList.remove("remove");
    document.querySelector(".menu__close").classList.remove("remove");
    document.querySelector(".card").classList.add("remove");
});

close.addEventListener("click",e=>{
    document.querySelector(".menu").classList.add("remove");
    document.querySelector(".menu__close").classList.add("remove");
    document.querySelector(".card").classList.remove("remove");
})