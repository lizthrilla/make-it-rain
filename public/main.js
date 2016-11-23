const qs = s => document.querySelector(s)
const qsa = s => document.querySelectorAll(s)
const drop = qs('.droplet')
  drop.style.visibility = "hidden"

const main = () => {
    drop.style.visibility = "visible"
    drop.style.top = "0px"
    drop.style.left = "0px"
  setInterval(() => {
    drop.style.top = '0px'
  }, 6000)
  const animate = () => {
    drop.style.top = `${parseInt(drop.style.top) + 1}px`
  }
  setInterval(animate, 12)
}
  /*setTimeout(() => {
   drop.style.backgroundColor = 'green'
 }, 5000)
*/
qs('button').addEventListener('click', main)
  //document.getElementById('root').textContent = 'Hello, World!'

//document.addEventListner('click', main)
//document.addEventListener('DOMContentLoaded', main)
