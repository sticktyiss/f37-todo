let task1 = {name: 'Sweep the floor', priority: 'Low', status: false}

let task2 = {name: 'Get groceries', priority: 'Medium', status: true}

let task3 = {name: 'Make dinner', priority: 'High', status: false}

let tasks = [task1, task2, task3]

console.log(tasks)

const addTask = event => {
  event.preventDefault()

  const name = document.querySelector('#new-task-name')
  const priority = document.querySelector('#new-task-priority')

  const newTask = {name: name.value, priority: priority.value, status: false}

  tasks.push(newTask)
  console.log(tasks)
}