let items=document.getElementById("items");
let btn=document.getElementById('btn');
//点击事件
btn.onclick=function(){
    //创建li
    var li=document.createElement("li");
    //var一个放文本（留言）的内容
    var val=text.value;
    //创建span标签
    var span=document.createElement("span");
    //li放进ul里面
    items.appendChild(li);
    //span放进li里面
    li.appendChild(span);
    //span的内容等于val
    span.innerHTML=val;
    //文本的内容放进span里面，文本的值清空
    text.value="";
}