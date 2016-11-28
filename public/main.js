const qs = s => document.querySelector(s)
const qsa = s => document.querySelectorAll(s)


/*CreateDrop function:
  Create a new drop
  Append it to the drops container*/
const createDrop = () => {
  const createDiv = document.createElement('div')
  createDiv.style.top = '0px'
  createDiv.style.left = `${Math.round(Math.random() * document.body.clientWidth)}px`
  createDiv.className = 'droplet'
  document.querySelector('div.drops').appendChild(createDiv)
}
//const randomNumber = () => {
//  Math.floor((Math.random() * 100))
//}

/*Animate function:
  For every drop in the drops container,
    Increase it's 'top' property*/
const animate = () => {
  const drops = qsa('.droplet')
  for (let i = 0; i < drops.length; i++) {
    console.log(drops[i].style.top)
    console.log(i)
    // if (drops[i].style.top < '8px') {
    drops[i].style.top = `${parseInt(drops[i].style.top) + 1}px`
  //   console.log('drop')
  // } else {
  //   qs('div.drops').removeChild(drops[i])
  //   console.log('stop')
  // }
  }
}

const stopAnimation = () => {
  const ht = document.body.clientHeight + 'px'
  const drops = qsa('.droplet')
  for (let i = 0; i < drops.length; i++) {
    //console.log('stop')
    if (drops[i].style.top === ht) {
      qs('div.drops').removeChild(drops[i])

    }
  }
}

/* Main function:
  When a button is clicked, call CreateDrop function
  At an interval, call Animate function*/
const main = () => {
  qs('button').addEventListener('click', createDrop)
  setInterval(animate, 9)
  setInterval(stopAnimation, 9)
  }

document.addEventListener('DOMContentLoaded', main)
