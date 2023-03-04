// function get(){
//     document.querySelectorAll(".button")
// }
// get.array.forEach(Element => {
//     Element.add
// });
const element = document.querySelectorAll("button");
element.forEach((sold)=>{
    sold.addEventListener("click", (e)=>{
        let select = document.getElementsByName("h1");
        select = select + e.target.innerHTML;
        if(e.target.innerHTML == "="){
            eval(select);
        }
    })
})