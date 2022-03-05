document.getElementById('Tea').onclick = teaTime
document.getElementById('Coffee').onclick = coffeeTime
document.getElementById('Boba').onclick = bobaTime



function teaTime() {
  document.querySelector('body').style.backgroundImage = "url('tBack.jpg')"
  document.querySelector('body').style.color = '#264653'
}

function coffeeTime() {
  document.querySelector('body').style.backgroundImage = "url('cofBackground.jpg')"
  document.querySelector('body').style.color = '#264653'
}

function bobaTime() {
  document.querySelector('body').style.backgroundImage = "url('bob3Back.png')"
  document.querySelector('body').style.color = '#264653'
}
