let box = false;
document.querySelector('.fa-solid').addEventListener('click', ()=>{
    box = !box
    console.log(box)
    if(box){
        document.querySelector('nav').classList.add('box')

    } else{
        document.querySelector('nav').classList.remove('box')
    }
})

if(window.innerWidth < 600){
    let array = [...document.querySelector('nav').classList].map(i=>{
        document.querySelector('nav').classList.remove(i)
    })
} else {
    let array = [...document.querySelector('nav').classList].map(i=>{
        document.querySelector('nav').classList.remove(i)
    })
    document.querySelector('nav').classList.add('normal')
}

window.addEventListener('resize', ()=>{
    if(window.innerWidth < 600){
        let array = [...document.querySelector('nav').classList].map(i=>{
            document.querySelector('nav').classList.remove(i)
        })
    } else {
        let array = [...document.querySelector('nav').classList].map(i=>{
            document.querySelector('nav').classList.remove(i)
        })
        document.querySelector('nav').classList.add('normal')
    }    
})

