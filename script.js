var tl = gsap.timeline({
    scrollTrigger:{
    trigger:".two",
    start:"0% 95%",
    end:"50% 50%",
    scrub:2,
    // markers:true,
}
})

tl.to("#fanta",{
    top:"120%",
    left:"5%",
},"hello")
tl.to("#orange-cut",{
    top:"160%",
    left:"25%"
},"hello")
tl.to("#orange",{
    top:"160%",
    right:"0%",
    scale:"0.8"
},"hello")

tl.to("#leaf",{
    top:"110%",
    left:"80%",
    rotate:"130deg"

},"hello")
tl.to("#leaf2",{
    top:"110%",
    left:"5%",
    rotate:"130deg"

},"hello")



var tl2=gsap.timeline({
    scrollTrigger:{
        trigger:".three",
        start:"10% 95%",
    end:"70% 90%",
    scrub:2,
    // markers:true,
    }
})

tl2.from(".lemon1",{
    left:"-100%",
    top:"110%",
    rotate:"-90deg"
},"can")
tl2.from("#cocacola",{
    left:"-100%",
    top:"110%",
    rotate:"-90deg",
},"world")

tl2.from(".lemon2",{
    left:"100%",
    top:"110%",
    rotate:"90deg"
},"can")
tl2.from("#pepsi",{
    left:"100%",
    top:"110%",
    rotate:"90deg",
},"world")

tl2.to("#fanta",{
    
    top:"210%",
    left:"30%",
    scale:0.85,
},"world")
tl2.to("#orange-cut",{
    top:"205%",
    left:"42%",
    scale:1.3,
},"world")




