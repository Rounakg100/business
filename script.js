const menulist=document.querySelector(".menu-list");
const menubtn=document.querySelector(".menu-btn");
const closebtn=document.querySelector(".close-btn");
 
menubtn.onclick=()=> {
    menubtn.classList.add("hide");
    closebtn.classList.remove("hide");
    menulist.classList.add("active");
}
closebtn.onclick=()=> {
    menubtn.classList.remove("hide");
    closebtn.classList.add("hide");
    menulist.classList.remove("active");
}