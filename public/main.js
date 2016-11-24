const qs = s => document.querySelector(s)
const qsa = s => document.querySelectorAll(s)


const drop = qs('.droplet')
  drop.style.visibility = "hidden"

const newdrop = () => {
  const li = document.createElement('li')
  const figure = document.createElement('drop')
  figure.style = drop
  li.appendChild(drop)
  qs('ul').appendChild(li)
}


const main = () => {
  newdrop()
}
  //drop.style.visibility = "visible"
  //drop.style.top = "0px"

  //setInterval(() => {
    //drop.style.top = '0px'
  //}, 6000)

  //const animate = () => {
    //drop.style.top = `${parseInt(drop.style.top) + 1}px`
  //}
  //setInterval(animate, 12)
//}
  /*setTimeout(() => {
   drop.style.backgroundColor = 'green'
 }, 5000)
*/
qs('button').addEventListener('click', main)
  //document.getElementById('root').textContent = 'Hello, World!'

//document.addEventListner('click', main)
//document.addEventListener('DOMContentLoaded', main)
