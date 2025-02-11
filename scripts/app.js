const container = document.querySelector('.container');
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

prev.addEventListener('click',()=>{
    const slides = document.querySelectorAll('.slide')
    
    container.append(slides[0])
  })

  
next.addEventListener('click',()=>{
    const slides = document.querySelectorAll('.slide')
    
    container.prepend(slides[slides.length-1])
  })