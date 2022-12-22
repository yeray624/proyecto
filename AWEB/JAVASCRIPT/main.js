const li        = document.querySelectorAll('.js__li')
const bloque   = document.querySelectorAll('.js__bloque')

// cuando click en li quitrar clase activo

li.forEach((cadaLi , i)=>{
    li[i].addEventListener('click', ()=>{
        li.forEach( (cadaLi , i)=>{
            li[i].classList.remove('activo')
            bloque[i].classList.remove('activo')
        })

        li[i].classList.add('activo')
        bloque[i].classList.add('activo')
    })
})





