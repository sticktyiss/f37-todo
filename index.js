let task1 = {name: 'Sweep floor', priority: 'low', status: false}

let task2 = {name: 'Get Groceries', priority: 'med', status: false}

let task3 = {name: 'Make dinner', priority: 'high', status: false}

let tasks = [task1, task2, task3]

addTask = task => {
    tasks.push(task)
}

addTask({name: 'Take out the trash', priority: 'med', status: false})

console.log(tasks)

delTask = task => {
    if (tasks.includes(task)===true) {
        for(let i=0; i<tasks.length; i++) {
            if (task===tasks[i].name) {
                tasks.splice(i,1)
            }
        }
        console.log('Task was deleted')
    } else {
        console.log(`"${task}" was not in the array`)
    }
}

delTask('Take out the trash')

for (let i=0; i<tasks.length; i++){
    let completed = complete(tasks[i])
    console.log(`${tasks[i]} : ${completed} `)
}
