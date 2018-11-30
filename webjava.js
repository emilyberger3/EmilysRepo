window.addEventListener('DOMContentLoaded',init,false);

function init() {
    var buttons = document.getElementsByTagName("button")
buttons[0].addEventListener('click', changeColor0,false)
buttons[1].addEventListener('click', changeColor1,false)
buttons[2].addEventListener('click', changeColor2,false)
        }
        
function changeColor0() {
    var ul = document.getElementById("hello0")
    {ul.style.backgroundColor = "violet";}
    }
    function changeColor1() {
    var ul = document.getElementById("hello1")
    {ul.style.backgroundColor = "pink";}
    }
    function changeColor2() {
    alert ('Warning: Blue and Yellow are going to look ugly together!!');
    var ul = document.getElementById("hello2")
    {ul.style.backgroundColor = "skyblue";}
    }
    