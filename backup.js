/*CreateDrop function:
  Create a new drop
  Append it to the drops container

Animate function:
  For every drop in the drops container,
    Increase it's 'top' property

Main function:
  When a button is clicked, call CreateDrop function
  At an interval, call Animate function

When document is ready, call Main function*/

const qs = s => document.querySelector(s)
const qsa = s => document.querySelectorAll(s)

 const drop = qs('.droplet')
 drop.setAttribute('height', '40px')
 drop.setAttribute('width', '20px')
 drop.style.top = '0px'
 drop.style.left = `${Math.round(Math.random * document.clientWidth)}px`

 const createDrop = () => {
   const rain = document.createElement('drop')
   //qs('figure').appendChild(rain)
   document.getElementById('container').appendChild(rain)
   //drop.style.top = '0px'
   //drop.style.left = `${Math.round(Math.random * document.clientWidth)}px`
  console.log("drip drop")
}

const animate = () => {
  for (let i = 0; i < document.clientWidth; i++) {
  drop.style.top = `${parseInt(drop.style.top) + 1}px`
}}
setInterval(animate, 9)

const main = () => {
  qs('button').addEventListener('click', createDrop)
}
  /*drop.style.visibility = "visible"
  drop.style.top = "0px"

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
//qs('button').addEventListener('click', main)

//document.addEventListner('click', main)
document.addEventListener('DOMContentLoaded', main)
