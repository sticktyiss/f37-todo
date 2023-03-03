let task1 = 'Sweep floor'
let task2 = 'Get Groceries'
let task3 = 'Make dinner'

//write if statement to check if task1 is 'Make dinner'
//if it is, print completed, if not incomplete
let tasks = [task1, task2, task3]

function complete(x){
    if (x==='Make dinner'){
        return('completed')
    }else{
        return('incomplete')
    }
}

for (let i=0; i<tasks.length; i++){
    let completed = complete(tasks[i])
    console.log(`${tasks[i]} : ${completed} `)
}