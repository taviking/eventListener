const btn = document.getElementById('btn')
const square = document.getElementById('square')
const e_btn = document.getElementById('e_btn').style='display: none;'
const range = document.getElementById('range')


const changeColor = function () {
  let text = document.querySelector('[type="text"]').value
  square.style=`background-color: ${text};`
}

btn.addEventListener('click', changeColor)


const changeWH = function (event) {
  let circle = document.getElementById('circle')
  let span = document.getElementById('range-span')
  span.textContent = event.target.value
  span.innerHTML = range.value;
  circle.style.width = range.value +'%';
  circle.style.height = range.value +'%';

}


range.addEventListener('input', changeWH)
range.addEventListener('change', changeWH)

console.dir(circle)

