let container=document.querySelector(".container")
let menu=document.querySelector(".menu")
let add=document.querySelector(".add")
let remove=document.querySelector(".remove")
// console.log(remove)
// console.log(add)
add.addEventListener("click",function(){
    container.classList.toggle("active")
    menu.classList.remove("active")
})
remove.addEventListener("click",function(){
    container.classList.remove("active")
    menu.classList.toggle("active")
})