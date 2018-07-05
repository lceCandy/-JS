/**
 * 封装方式一
 *
 */
window.onload = function () {
    /**
     *根据id获取标签
     * @param {string}id
     * @returns {any}
     */
    function getNode(id) {
        return typeof id === "string" ? document.getElementById(id): null;
    }

    function changeImg(id,imgSrc) {
        getNode(id).onmouseover = function() {
            getNode("box").style.background=imgSrc;
            getNode(id).setAttribute("class","img-hover");
        }
        getNode(id).onmouseout = function() {
            getNode(id).removeAttribute("class");
        }
    }
    for(let i=0;i<5;i++){
        index=i+1;
        changeImg("li0"+index,'url("0'+index+'.jpg") no-repeat');
    }
}