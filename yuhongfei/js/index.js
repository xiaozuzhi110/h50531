window.onload=function(){
    // 二级菜单激活样式
let a = document.querySelectorAll('#menu li');
for (let i = 0; i < a.length; i++) {
    a[i].onmouseover = function () {
        this.children[0].className = "active";
        this.children[1].className = "active";
    }
    a[i].onmouseout = function () {
        this.children[0].className = "";
        this.children[1].className = "";
    }
}
    //    轮播图
let ul = document.querySelector('#tu ul');                 //获取ul节点(给用户看的框)
let li = document.querySelectorAll('#tu li');              //获取li节点(每一张图)
ul.appendChild(li[0].cloneNode(true));              //在li节点后面复制一个第一张图
ul.style.width = li[0].offsetWidth * (li.length+1)+'px';        //设定ul宽度防止超出部分换行      
let n = 0;
let timer;
const c = () => {                                            //设置轮播次数标杆
    timer = setInterval(function () {
        n++;
        startMove(ul, { left: -(li[0].offsetWidth * n) },1500, 'linear', function () {   //开始运动
            if (n == li.length) {
                n = 0;
                ul.style.left = 0;        //到最后一张图时，闪现到第一张图重新循环；
            }
        })
    }, 3000)
}
c();
tu.onmouseenter = () => {
    clearInterval(timer);
}
tu.onmouseleave = function () {            //移出时候，重新开启定时器
    c();
}
zuo.onclick=function(){
    zuo.disabled='true';
    setTimeout(function(){
        zuo.disabled='';
    },3000)
    let x = parseInt(ul.style.left);
    if(x<0){
        startMove(ul,{left:x+li[0].offsetWidth+'px'},1500,'linear')
    }
}
you.onclick=function(){
    you.disabled='true';
    setTimeout(function(){
        you.disabled='';
    },3000)
    let x = parseInt(ul.style.left);
    if(x>-(li[0].offsetWidth * (li.length-1))){
        startMove(ul,{left:x-li[0].offsetWidth+'px'},1500,'linear')
    }
}

    var oDate = new Date();
    var nowTime = oDate.getTime(); //现在的毫秒数
    oDate.setDate(oDate.getDate() + 1); // 设定截止时间为第二天
    var targetDate = new Date(oDate.toLocaleDateString());
    run(targetDate);


function run(enddate) {
    getDate(enddate);
    // setInterval("getDate('" + enddate + "')", 500);
    setInterval(()=>{
        getDate(enddate);
    },500)
}
    


function getDate(enddate) {
    var oDate = new Date(); //获取日期对象

    var nowTime = oDate.getTime(); //现在的毫秒数
    var enddate = new Date(enddate);
    var targetTime = enddate.getTime(); // 截止时间的毫秒数
    var second = Math.floor((targetTime - nowTime) / 1000); //截止时间距离现在的秒数

    var day = Math.floor(second / 24 * 60 * 60); //整数部分代表的是天；一天有24*60*60=86400秒 ；
    second = second % 86400; //余数代表剩下的秒数；
    var hour = Math.floor(second / 3600); //整数部分代表小时；
    second %= 3600; //余数代表 剩下的秒数；
    var minute = Math.floor(second / 60);
    second %= 60;
    var spanH = $('.se-txt')[0];
    var spanM = $('.se-txt')[1];
    var spanS = $('.se-txt')[2];

    spanH.innerHTML = tow(hour);
    spanM.innerHTML = tow(minute);
    spanS.innerHTML = tow(second);
}

function tow(n) {
    return n >= 0 && n < 10 ? '0' + n : '' + n;
}


// 中部滚动图
    var  lunbo2=document.querySelector("#lunbo2");
    console.log(lunbo2);
}


