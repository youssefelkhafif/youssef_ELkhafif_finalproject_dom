// first carousel

let allcarousel = document.querySelectorAll('.carousel-second')



allcarousel.forEach(e => {

  if (e.hasAttribute('autoslide')) {
    let time = e.getAttribute('autoslide')
    setInterval(() => {
      let btn = e.querySelector('[data-slide="next"]')
      btn.click()
    }, time);
    
  }


  console.log(e);
  let buttons = e.querySelectorAll('.btn')

  let items = e.querySelectorAll('.item')

  let dots = e.querySelectorAll('.n9atldakhl')

  let index = 0

  


  // lets make function for update the img

  function update() {
    items.forEach(item => item.classList.remove('ban'))
    dots.forEach(dot => dot.classList.remove('active'))

    items[index].classList.add('ban')
    dots[index].classList.add('active')
    
  }


  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      console.log(btn.dataset);

      // nm7i tswira l9dima
      items[index].classList.remove('ban')
      if (btn.dataset.slide === 'next') {
        index++
        if (index >= items.length) {
          index = 0

        }

      } else {
        index--
        if (index < 0) {
          index = items.length - 1;
        }
      }
      //  katbayan tswira jdida
      items[index].classList.add('ban');
    })
  })
    
    dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      index = i
      console.log(index);
      update()
    })
  })

})




