//import './style.css';
//import Alpine from 'alpinejs';

//Alpine.start()

class createTodoItem {
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

const rankedPlay = new createTodoItem('Play ranked 10 matches', 'Log into overwatch and play 10 ranked matches', '10/11/2023', 'Not urgent');

//console.log(rankedPlay);

//rankedPlay.changeTitle = 'Play ranked'

//console.log(rankedPlay);

console.log(rankedPlay)
