const taskManagement = []

function addTask(taskName){
    const task={
        id:taskManagement.length+1,
        name:taskName,
        completed:false,
    }
    taskManagement.push(task)
}
const completeTask = function(taskId){
    const task = taskManagement.find(task=>task.id===taskId)
    if(task){
        task.completed = true;
    }
}
const getTask = ()=> taskManagement;

addTask('Buy groceries')
addTask('Clean the house')
addTask('Finish the report')
completeTask(1)
// console.log('Tasks:')
getTask().forEach(task=>{
    const status = task.completed? '(completed)':'';
    console.log(`Task ${task.id}: ${task.name}${status}`)
})