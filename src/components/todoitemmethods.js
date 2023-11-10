class TodoItem {
    constructor(title, description, dueDate, priority){
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.status = false
    }

    set changeTodoItemTitle(newTitle){
        this.title = newTitle
    }

    set changeTodoItemDescription(newDescription){
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
