const boxes = document.querySelectorAll(".box");

console.log(boxes)

const reset=document.querySelector(".reset");

let turnX=true;

const winners=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];


// btn.addEventlistner("click",()=>{
//     console.log("Hello")
// })

boxes.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        console.log("Hiii");
        
    })
    
})

console.log{"Hello On Every Button"}


//  boxes.forEach((box)=> {
//     box.addEventlistner("Click",()=>{
//         console.log("cLick");
//     });
// });