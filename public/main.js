const qs = s => document.querySelector(s)
const qsa = s => document.querySelectorAll(s)

const main = () => {
  const drop = qs('.droplet')

  drop.style.top = '0px'

  setInterval(() => {
    drop.style.top = '0px'
  }, 6000)

  const animate = () => {
    drop.style.top = `${parseInt(drop.style.top) + 1}px`
  }

  setInterval(animate, 12)

  /*setTimeout(() => {
   drop.style.backgroundColor = 'green'
 }, 5000)*/
}
  //document.getElementById('root').textContent = 'Hello, World!'


document.addEventListener('DOMContentLoaded', main)
