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
const span = document.getElementById('number');
const h2 = document.getElementById('result');
let selected = 0;


const resultList = {
  0:"現在薄毛の可能性は低いですが、症状が出る前に予防治療を行うこともできます。",
  1:"女性の薄毛のサインが出ているので、まずは当院で実施している無料診断をおすすめします",
  2:"女性の薄毛である可能性が高いので、毛根が死滅する前に薄毛治療を行うことが大切です。"
}

console.log(resultList[1])



function addSelection(){
    selected++
}


function removeSelection(){
    selected--
}

function clearText(){
    span.textContent = "";
    result.textContent=""

}
function updateText(n){
    span.textContent =`${selected}`;
    h2.textContent =`${resultList[n]}`;
    if(n === 1){
      h2.style.color = 'blue';
    }else if(n === 2){
      h2.style.color = 'red';
    }else{
      h2.style.color = 'black';
    }
}

function determineResult(n){
  
if(n >= 1 && n < 3){
  return 1;
}else if(n >= 3){
  return 2;
}else{
  return 0
}
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change',(e)=>{
        if(checkbox.checked){
       
            addSelection();
            const result = determineResult(selected);
            clearText()
            updateText(result)
            console.log(selected)
        }
        else{
            removeSelection()
            const result = determineResult(selected);
            clearText()
            updateText(result)
            console.log(selected)
        }
    })
})










// const button = document.querySelector(".button-one");


//   button.addEventListener("click", () => {
//     const currentState = button.getAttribute("data-state");

//     if (!currentState || currentState === "closed") {
//       button.setAttribute("data-state", "opened");
//       button.setAttribute("aria-expanded", "true");
//     } else {
//       button.setAttribute("data-state", "closed");
//       button.setAttribute("aria-expanded", "false");
//     }
//   });

