let task1 = {name: 'Sweep floor', priority: 'low', status: false}

let task2 = {name: 'Get Groceries', priority: 'med', status: true}

let task3 = {name: 'Make dinner', priority: 'high', status: false}

let tasks = [task1, task2, task3]

const addTask = task => {
    tasks.push(task)
}

addTask({name: 'Take out the trash', priority: 'med', status: false})

console.log(tasks)

const delTask = task => {
    for(let i=0; i<tasks.length; i++) {
        // if (tasks.includes(task)===true) {
        if (task===tasks[i].name) {
            tasks.splice(i,1)
            console.log('Task was deleted')
            return
        }
    }
    console.log(`"${task}" was not in the array`)
}

delTask('Take out the trash')

// for (let i=0; i<tasks.length; i++){
//     let completed = complete(tasks[i])
//     console.log(`${tasks[i]} : ${completed} `)
// }
console.log(tasks)

// const incompleteTasks = tasks.filter((task) => {
//     if(!task.status){
//         return true
//     } else {
//         return false
//     }
// })
const incompleteTasks = tasks.filter((task) => !task.status)


console.log(incompleteTasks)