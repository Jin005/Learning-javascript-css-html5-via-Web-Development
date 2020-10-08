// var bodys = document.querySelector("body");
// var button = document.querySelector("button");
// var isPurple=false;
// button.addEventListener("click",function(){
//   if(isPurple){
//     bodys.style.background="white";
//     isPurple=false;
//   }else{
//     bodys.style.background="purple";
//     isPurple=true;
//   }
// });


// 还可以这样做：简化：在最后一行最大的括号里面写isPurple=!isPurple，就不用中间的isPurple=false or true 了。

// 最简化的是：在html中head里写入<style type="text/css">.purple{
// background:purple;}

// 然后在js中写入：button.addEventListener("click", function(){
// bodys.classList.toggle("purple");
// }); 此法不需要再用if等判断是否是purple,toggle 本身会关闭purple这个class，当它出现时。而当purple这个class不存在时，则会再加上。可从inspector中看出。
