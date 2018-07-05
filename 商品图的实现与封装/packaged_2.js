/**
 * 封装方式二
 *
 */
let box = document.getElementById('box');
let all_li= box.getElementsByTagName('li');
for(let i=0;i<all_li.length;i++){
    let li = all_li[i];
    li.onmouseover = function () {
        box.style.background='url("0'+(i+1)+'.jpg") no-repeat ';
        li.setAttribute("class","img-hover");
    }
    li.onmouseout = function () {
        li.removeAttribute('class');
    }
}