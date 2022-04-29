let box = false;
document.querySelector('.fa-solid').addEventListener('click', ()=>{
    box = !box
    if(box){
        document.querySelector('nav').classList.add('box')

    } else{
        document.querySelector('nav').classList.remove('box')
    }
})

let arrayA = [...document.querySelectorAll('a')]
arrayA.map(i=>{
    i.addEventListener('click', ()=>{
        if(window.innerWidth < 600){
            document.querySelector('nav').classList.contains('box') ? document.querySelector('nav').classList.remove('box') : null
            box = !box
        }
    })
})

if(window.innerWidth < 600){
    [...document.querySelector('nav').classList].map(i=>{
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

