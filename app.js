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