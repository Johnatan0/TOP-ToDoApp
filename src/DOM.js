//Module responsible for manipulating the projects in the DOM

import projects from "./ProjectMethods";

let Content = {
    'myLibrary1': [
        {
            title: "Task 4",
            description: "Description for Task 4",
            dueDate: "2023-12-15",
            priority: "High",
            status: false
          },
          {
            title: "Task 5",
            description: "Description for Task 5",
            dueDate: "2023-12-20",
            priority: "Medium",
            status: false
          },
          {
            title: "Task 6",
            description: "Description for Task 6",
            dueDate: "2023-12-25",
            priority: "Low",
            status: false
          },
          {
            title: "Task 7",
            description: "Description for Task 7",
            dueDate: "2023-12-30",
            priority: "High",
            status: false
          },
          {
            title: "Task 8",
            description: "Description for Task 8",
            dueDate: "2024-01-05",
            priority: "Medium",
            status: false
          },

    ],
    'myLibrary2': [
            {
            title: "Task 1",
            description: "Description for Task 1",
            dueDate: "2023-11-30",
            priority: "High",
            status: false
            },
            {
            title: "Task 2",
            description: "Description for Task 2",
            dueDate: "2023-12-05",
            priority: "Medium",
            status: false
            },
            {
            title: "Task 3",
            description: "Description for Task 3",
            dueDate: "2023-12-10",
            priority: "Low",
            status: false
            },
    ]
}

function loadObject(){
  if(!localStorage.getItem('PageContent')) return
  Content = JSON.parse(localStorage.getItem('PageContent'))
}

//This function build the projects inside the object into the sidebar
function buildProjectList(){

    const ProjectList = document.querySelector('#project-list')
    ProjectList.textContent = '';

    for(let key in Content){
        const icon = document.createElement('ion-icon');
        icon.setAttribute('name', 'file-tray-full-outline');
        icon.className = 'mr-3 text-base';

        const item = document.createElement('li');
        item.className = "flex text-sm p-2 my-2 items-center gap-2 text-gray-500 hover:font-extrabold dark:hover:text-DarkAccent rounded-lg transition duration-200 ease-in-out transform focus:shadow-outline dark:hover:bg-slate-800 font-medium w-full border-dotted border-2 dark:border-DarkSecondaryText border-opacity-10 focus:dark:text-DarkAccent focus:bg-slate-800 outline-none cursor-pointer"
        item.appendChild(icon);
        item.appendChild(document.createTextNode(key));
        item.setAttribute('tabindex', '0');
        item.setAttribute('data-project', key)
        item.addEventListener('click', renderProject);

        ProjectList.appendChild(item)
    }
}

//This function adds the funcionality of creating projects to the "New Project" button of the sidebar
function CreateProject() {
    const projectNameInput = document.querySelector('#project-name-input');

    if(!projectNameInput.value) return;

    projects.create(Content, projectNameInput.value);

    projectNameInput.value = '';
    document.querySelector('#projectcreatebtn').addEventListener('click', CreateProject);
    localStorage.setItem('PageContent', JSON.stringify(Content))
    
    buildProjectList()
}

//This function will be used to rename projects
function renameProject(){
  const CurrentName = document.querySelector('#title-project').dataset.project;
  const NewName = document.querySelector('#project-new-name').value;

  if(NewName === '') return;

  projects.rename(Content, CurrentName, NewName)
  document.querySelector('#title-project').textContent = NewName;
  document.querySelector('#title-project').dataset.project = NewName;
  
  localStorage.setItem('PageContent', JSON.stringify(Content))

  buildProjectList();
  document.querySelector('#project-edit-cancel').click();
}

function deleteProject(){
  const SelectedProject = document.querySelector('#title-project').dataset.project;

  projects.delete(Content, SelectedProject);
  buildProjectList();
  localStorage.setItem('PageContent', JSON.stringify(Content))
  if(document.querySelector('#project-list').firstChild === null) return;
  document.querySelector('#project-list').firstChild.click();
}

//This function renders into the main content section the project that was clicked on the sidebar and its todo's items 
function renderProject(){
    const title = document.querySelector('#title-project');
    const todoList = document.querySelector('#todo-list');
  
    title.textContent = this.dataset.project;
    title.setAttribute('data-project', this.dataset.project)
    todoList.textContent = '';
  
    for(let item of Content[this.dataset.project]){
      const todoItem = document.createElement('li');
      todoItem.className = "flex justify-between border border-l-DarkAccent border-l-4 border-DarkSecondaryText text-DarkPrimaryText p-4 hover:bg-DarkAccent rounded-sm hover:bg-opacity-5 transition"
      todoItem.setAttribute('data-index', Content[this.dataset.project].indexOf(item));
      todoItem.setAttribute('data-project', this.dataset.project);
  
      const firstDiv = document.createElement('div');
      firstDiv.className = 'flex gap-2 items-center'
  
      const checkBox = document.createElement('input');
      checkBox.setAttribute('type', 'checkbox');
      checkBox.id = ('checkbox' + Content[this.dataset.project].indexOf(item));
      checkBox.className = "peer appearance-none grid place-content-center w-4 h-4 border-DarkPrimaryText border before:content-[''] before:w-4 before:h-4 before:bg-DarkAccent  before:scale-0 checked:before:scale-75 before:transition-transform before:duration-300 before:clip-path";
  
      const Label = document.createElement('label');
      Label.setAttribute("for", `checkbox${Content[this.dataset.project].indexOf(item)}`)
      Label.className = 'peer-checked:line-through';
      Label.textContent = item.title;
  
      firstDiv.appendChild(checkBox);
      firstDiv.appendChild(Label);
  
      const secondDiv = document.createElement('div');
      secondDiv.className = "flex gap-4 items-center";
  
      const date = document.createElement('p');
      date.className = "border-b mr-4";
      date.textContent = item.dueDate;
  
      secondDiv.appendChild(date);
  
      for(let i = 0; i < 3; i++){
        const iconNames = ["alert-circle-outline", "create-outline", "trash-outline"];
  
        const icon = document.createElement('ion-icon');
        icon.setAttribute('name', iconNames[i]);
        icon.className = "text-xl hover:scale-125 hover:text-DarkAccent transition cursor-pointer";
        icon.setAttribute('tabindex', '0');
  
        secondDiv.appendChild(icon);
      }
  
      todoItem.appendChild(firstDiv);
      todoItem.appendChild(secondDiv);
      todoList.appendChild(todoItem);

      localStorage.setItem('PageContent', JSON.stringify(Content))
    }
  }

  
  export {buildProjectList, CreateProject, renameProject, loadObject, deleteProject}