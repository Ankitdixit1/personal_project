// let buttonList = document.querySelectorAll(".button");
// Array.from(buttonList).forEach(function(i){
//   i.addEventListener("click", function(e){
//     document.getElementById("demo").innerHTML = e.target.innerHTML;
//   })
// })
let collect = "";
let buttonList = document.querySelectorAll(".button");
buttonList.forEach((sold)=>{
    sold.addEventListener("click", (e)=>{
        if(e.target.innerHTML == "="){
            collect = eval(collect);
            document.querySelector(".demo").innerHTML = collect;
        }else if(e.target.innerHTML == "AC"){
            collect = "";
            document.querySelector(".demo").innerHTML = collect;
        }else{
            collect = collect + e.target.innerHTML;
            document.querySelector(".demo").innerHTML = collect;
        }
    })
})