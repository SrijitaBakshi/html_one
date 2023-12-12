// alert()
AOS.init();
document.getElementById('bar_icon').addEventListener('click',display)
function display(){
    console.log("click");
    document.getElementById('navlist').classList.toggle('show')
}

let d_down=document.getElementById('drop_down');
let d_content=document.getElementById('dropdown_content');

d_down.addEventListener('click',Show)
function Show(){
    console.log("click");
    d_content.classList.toggle('view')

}