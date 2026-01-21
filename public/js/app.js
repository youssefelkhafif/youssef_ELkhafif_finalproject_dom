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



// medie

let links = document.querySelector('.links')

let openbtn = document.querySelector('.opens')
let closebtn = document.querySelector('.closee')

openbtn.addEventListener('click', () =>{
    links.classList.add('active')

    openbtn.style.display = 'none'
    closebtn.style.display = 'block'

})

closebtn.addEventListener('click' , ()=>{
  links.classList.remove('active')


  closebtn.style.display = 'none'
  openbtn.style.display = 'block'
})


// now lets make logic of boock table


let boocking = document.querySelector('#boocking')

let booking = []  //hna fin kitkhaba booking

boocking.addEventListener('click' , () =>{
  const name = document.querySelector('.boock-table input[type="text"]').value.trim()
  const meal = document.querySelector("#Drop").value
  const date = document.querySelector('.boock-table input[type="date"]').value
  const start = document.querySelector('#star').value
  const end = document.querySelector('#end').value
  const phone = document.querySelector('.boock-table input[type="number"]').value.trim()

  // nchofo wach user bsa7a 3amar input
  if (!name || !meal || !date || !start || !end || !phone ) {
    alert('Please 3amar info dyalk')
    return
  }

  // db nchofo lwa9 wach howa hadak

  if (start >= end) {
    alert('end time khaso ikon mn ba3d star time')
    return;
  }

  // hna konchofo wach tabla khawya wla 3amra 

  const conflict = booking.some(b=>
    b.date === date &&
    (
      (start >= b.start && start < b.end) ||
      (end > b.start && end <= b.end ) ||
      (start <= b.start && end >= b.end )
    )
  )

  if (conflict) {
    alert('mosam7a tabla 3amra fi had lwa9t')
    return
  }else{
    alert('good')
  }

  // dakchi li 3amro user nkhabiwh fi booking

  booking.push({name , meal , date , start , end , phone})

})