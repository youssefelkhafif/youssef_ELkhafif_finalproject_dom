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


// modals 

let mybutton = document.querySelectorAll(".modalbtn");
let mydiv = document.querySelectorAll(".modaldiv");


mybutton.forEach((element) => {
  element.addEventListener("click", () => {
    let value = element.getAttribute("data-bs-target");
    console.log(value);
    mydiv.forEach((m) => {
      if (m.id == value) {
        m.style.display = "block";

      }
      let close = m.querySelector(".close");

      close.addEventListener('click', () => {
        m.style.display = 'none'
      })
    });
  });
});


// carousel of 3 img 

const track = document.querySelector('.track')
const nextbtn = document.querySelector('.next' )

const next = document.querySelector('.nexts')
const trac = document.querySelector('.stylimg')
let moving = false
let mov = false


// carousel one 
nextbtn.addEventListener('click', () => {
  if (mov) return
  mov = true

  track.style.transform = 'translateX(-450px)';

  track.addEventListener('transitionend', () => {
    track.appendChild(track.firstElementChild);
    track.style.transition = 'none';
    track.style.transform ='translateX(0)';
    track.offsetHeight;
    track.style.transition = 'transform 0.5s ease';
    mov = false

  }, { once: true });
});

setInterval(() => {
  nextbtn.click();
}, 3000)

// carousel two

next.addEventListener('click', () => {
  if (moving) return
  moving = true

  trac.style.transform = 'translateX(-450px)';

  trac.addEventListener('transitionend', () => {
    trac.appendChild(trac.firstElementChild);
    trac.style.transition = 'none';
    trac.style.transform ='translateX(0)';
    trac.offsetHeight;
    trac.style.transition = 'transform 0.5s ease';
    moving = false

  }, { once: true });
});

setInterval(() => {
  next.click();
}, 3000)












