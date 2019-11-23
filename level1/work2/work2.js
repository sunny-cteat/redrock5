//打印li标签
(function (){
    var ul=document.getElementById('zimu');
    var lis=ul.getElementsByTagName("li");
    for(var i=0;i<lis.length;i++){
        lis[i].addEventListener('click', show,false);
    };
    function show(e){
        var x=e.target;
        console.log(x.innerHTML);
    }
}) ();
//改变li的css样式
zimu.onclick=function(){   
    var lis2=document.getElementsByTagName("li");
    for(var j=0;j<lis2.length;j++){
        lis2[j].style.color=j%2 == 0 ? "red" : "lightgreen";
    }
};
