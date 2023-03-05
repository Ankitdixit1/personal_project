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
            // let select = document.querySelector(".demo")
            collect = eval(collect);
            document.querySelector(".demo").innerHTML = collect;
        }else{
            collect = collect + e.target.innerHTML;
            document.querySelector(".demo").innerHTML = collect;
            // soldd.innertext = collect;
            // console.log(collect);
        }
    })
})