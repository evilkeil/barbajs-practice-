// function pageTransition(){
//     let tl = gsap.timeline();
//     return tl.to('.transition',{
//         duration:1,
//         scaleY:1,
//         trasnformOrigin:'bottom',
//         ease:"power4.inOut",
//     })

// }

// function temp(){
//     let tl = gsap.timeline();
//   return  tl.to('.transition',{
//         duration:1,
//         scaleY:0,
//         trasnformOrigin:'top',
//         ease:"power4.inOut",
//         delay:0.2,
//     })

// }


// function contentAnimation(){
//     tl.to('h1',{
//         duration:1,
//         top:0,
//         ease:"power4.inOut",
//         delay:0.75,
//     })
// }

// function delay(n){
//     n = n||0;
//     return new Promise((done)=>{
//         setTimeout(()=>{
//             done();
//         },n);
//     });
// }

// barba.init({
//     sync:true,
//     transitions:[
//         {
//             async leave(data){
//                 const done = this.async();
//                 pageTransition();
//                 // temp();
//                 await delay(1000);
//                 done();
//             },
//             async enter(data){
//                 temp();
//                 //  contentAnimation();
//             }
//         }
//     ]
// })


const checkboxes = document.querySelectorAll('.option');
const span = document.getElementById('result');
let selected = 0;


function addSelection(){
    selected++
}


function removeSelection(){
    selected--
}

function clearText(){
    span.textContent = "";
}
function updateText(){
    span.textContent =`${selected}`;
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change',(e)=>{
        if(checkbox.checked){
            addSelection();
            clearText()
            updateText()
            console.log(selected)
        }
        else{
            removeSelection()
            clearText()
            updateText()
            console.log(selected)
        }
    })
})