import './style.css';
import Alpine from 'alpinejs';
import projects from './components/ProjectMethods';
import TodoItem from './components/TodoMethods';

const Content = {}

projects.create(Content, 'myProject1');

projects.addItem(Content, 'myProject1', new TodoItem("Task 1", "This is just a test description", "15/11/2023", "Urgent"))
projects.addItem(Content, 'myProject1', new TodoItem("Task 2", "This is just a test description", "15/11/2023", "Urgent"))
projects.addItem(Content, 'myProject1', new TodoItem("Task 3", "This is just a test description", "15/11/2023", "Urgent"))

projects.create(Content, 'myProject2');

projects.addItem(Content, 'myProject2', new TodoItem("Task 1.2", "This is just a test description", "15/11/2023", "Urgent"))
projects.addItem(Content, 'myProject2', new TodoItem("Task 2.2", "This is just a test description", "15/11/2023", "Urgent"))
projects.addItem(Content, 'myProject2', new TodoItem("Task 3.2", "This is just a test description", "15/11/2023", "Urgent"))

projects.rename(Content, 'myProject1', 'newName')

projects.create(Content, 'myProject3')

console.log(Content)

Alpine.start()

document.querySelector('input').valueAsDate = new Date();

document.querySelector('input').addEventListener('input', function(e){console.log(this.valueAsDate)})

console.log(new Date())



