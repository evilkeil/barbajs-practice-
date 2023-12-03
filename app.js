function pageTransition(){
    let tl = gsap.timeline();

    tl.to('.transition',{
        duration:1,
        scaleY:1,
        trasnformOrigin:'bottom',
        ease:"power4.inOut",
    })

    tl.to('.transition',{
        duration:1,
        scaleY:0,
        trasnformOrigin:'top',
        ease:"power4.inOut",
        delay:0.2,
    })

}



function contentAnimation(){
    tl.to('h1',{
        duration:1,
        top:0,
        ease:"power4.inOut",
        delay:0.75,
    })
}

function delay(n){
    n = n||0;
    return new Promise((done)=>{
        setTimeout(()=>{
            done();
        },n);
    });
}