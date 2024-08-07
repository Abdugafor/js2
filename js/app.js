// let tasks = []

// while (true) {
//     const answer = prompt('Что вы хотите сделать (1 2 3)')

//     if (answer === '1') {
//         addTask()
//     }else if(answer === '2') {
//         showTasks()
//     }else if (answer === '3') {
//         alert('Всего хорошего')
//         break
//     }
// }


// function addTask() {
//     const task = prompt('Чи мехохи добавить кадан?')
//     tasks.push(task)
//     alert('Выполнено')
// }

// function showTasks() {
//     let otvet = ''

//     for (let i = 0; i < tasks.length; i++) {
//         otvet += tasks[i] + ' ' + '\n'
//     }

//     alert(otvet)
// }

// const users = [10, 15 , 18, 20, 22 ,7, 12]


// users.forEach(item => {
//     console.log(item)
// })

// const newArray = users.filter(item => item  <= 18)
// console.log(newArray)

// const products = ["Яблоко", 'Банан', "Яблоко" , 'Мандарин']

const text = document.getElementById('text')
// const btn = document.getElementById('btn')
const kalonBtn = document.getElementById('kalon')
const maydaBtn = document.getElementById('mayda')

// btn.addEventListener('click', changeColor)

// function changeColor() {
//     text.style.backgroundC
// }

let size = 20
text.style.fontSize = size + 'px'

kalonBtn.addEventListener('click', kalon)
maydaBtn.addEventListener('click', mayda)

function kalon() {
    size = size + 1
    text.style.fontSize = size + 'px'

}

function mayda() {
    size = size - 1
    text.style.fontSize = size + 'px'

}
