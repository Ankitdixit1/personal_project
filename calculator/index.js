// let buttonList = document.querySelectorAll(".button");
// Array.from(buttonList).forEach(function(i){
//   i.addEventListener("click", function(e){
//     document.getElementById("demo").innerHTML = e.target.innerHTML;
//   })
// })
let collect = "";
let buttonList = document.querySelectorAll(".button");
Array.from(buttonList).forEach((sold)=>{
    sold.addEventListener("click", (e)=>{
        if(e.target.innerHTML == "="){
            collect = eval(collect);
            document.querySelector("demo").value = collect;
        }else{
            collect = collect + e.target.innerHTML;
            document.querySelector("demo").value = collect;
        }
    })
})