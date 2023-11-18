//This module is responsible of creating and manipulating all the todo items that will go inside projects

class TodoItem {
    constructor(title, description, dueDate, priority){
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.status = false
    }

    set changeTitle(newTitle){
        this.title = newTitle
    }

    set changeDescription(newDescription){
        this.description = newDescription
    }

    set changeDueDate(newDate){
        this.dueDate = newDate
    }

    set changePriority(newPriority){
        this.priority = newPriority
    }
}

export default TodoItem;
