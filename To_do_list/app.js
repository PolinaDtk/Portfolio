const changeBut = document.getElementById('bgchange')
const input = document.getElementById('toDo')
const but = document.getElementById('plane')
const ulTask = document.getElementById('inProcUl')
const ulDone = document.getElementById('doneUl')
const inProcClean = document.getElementById('inProcClean')
const doneClean = document.getElementById('doneClean')
const block = document.getElementById('bg')
const imgs = ['src/1.jpg', 'src/2.jpg', 'src/3.jpg', 'src/4.jpg']

let imgCurrent = 0
function bgchange (id){
    block.style.backgroundImage = `url(${imgs[id]})`
}
bgchange(imgCurrent)
changeBut.addEventListener('click', ()=>{
    bgchange(imgCurrent+=1)
    if (imgCurrent >= imgs.length-1){
        imgCurrent = -1
    }
})

but.addEventListener('click', ()=>{
    const newTask = document.createElement('li')
    newTask.classList.add('description')
    const taskValue = document.createElement('span')
    taskValue.innerText = input.value + ' '
    const doneBut = document.createElement('button')
    doneBut.classList.add('button')
    doneBut.innerText = 'Done'
    ulTask.appendChild(newTask)
    newTask.appendChild(taskValue)
    newTask.appendChild(doneBut)
    input.value = ' '
        doneBut.addEventListener('click', ()=>{
            const doneTask = document.createElement('li')
            doneTask.classList.add('description')
            doneTask.innerText = taskValue.innerText
            ulDone.appendChild(doneTask)
            newTask.remove()
        })
})

inProcClean.addEventListener('click', ()=>{
    ulTask.innerText = ''
})

doneClean.addEventListener('click', ()=>{
    ulDone.innerText = ''
})