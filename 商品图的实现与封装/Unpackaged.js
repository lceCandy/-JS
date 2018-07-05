//未封装版
window.onload=function () {
    let li01 = document.getElementById("li01");
    let li02 = document.getElementById("li02");
    let li03 = document.getElementById("li03");
    let li04 = document.getElementById("li04");
    let li05 = document.getElementById("li05");
    let box = document.getElementById("box");
    li01.onmouseover=function () {
        box.style.background='url("01.jpg") no-repeat ';
        li01.setAttribute("class","img-hover")
    }
    li01.onmouseout=function () {
        li01.removeAttribute("class")
    }
    li02.onmouseover=function () {
        box.style.background='url("02.jpg") no-repeat ';
        li02.setAttribute("class","img-hover")
    }
    li02.onmouseout=function () {
        li02.removeAttribute("class")
    }
    li03.onmouseover=function () {
        box.style.background='url("03.jpg") no-repeat ';
        li03.setAttribute("class","img-hover")
    }
    li03.onmouseout=function () {
        li03.removeAttribute("class")
    }
    li04.onmouseover=function () {
        box.style.background='url("04.jpg") no-repeat ';
        li04.setAttribute("class","img-hover")
    }
    li04.onmouseout=function () {
        li04.removeAttribute("class")
    }
    li05.onmouseover=function () {
        box.style.background='url("05.jpg") no-repeat ';
        li05.setAttribute("class","img-hover")
    }
    li05.onmouseout=function () {
        li05.removeAttribute("class")
    }
}