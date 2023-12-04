import './style.css';
import Alpine from 'alpinejs';
import focus from '@alpinejs/focus'
import {buildProjectList, CreateProject, renameProject, loadObject, deleteProject} from './DOM.js';

Alpine.plugin(focus)
Alpine.start()

window.onload = loadObject();
buildProjectList();

document.querySelector('#projectcreatebtn').addEventListener('click', CreateProject);
document.querySelector('#project-create-cancel').addEventListener('click', () => document.querySelector('#project-name-input').value = '')
document.querySelector('#project-edit').addEventListener('click', renameProject)
window.onload = () => {if(document.querySelector('#project-list').firstChild === null){return} else {document.querySelector('#project-list').firstChild.click()}};
document.querySelector('#project-edit-cancel').addEventListener('click', () => {
    document.querySelector('#project-new-name').value = ''
});
document.querySelector('#project-delete-confirm').addEventListener('click', deleteProject)

function saveThemeSelection(){
    const themeValue = document.querySelector('#toggle-theme');
    localStorage.setItem(themeValue.id, themeValue.checked)
};

(function LoadThemeSelection(){
    const themeValue = document.querySelector('#toggle-theme');
    if(localStorage.getItem(themeValue.id, themeValue.checked) === 'true'){
        themeValue.checked = true
    }
})();

document.querySelector('#toggle-theme').addEventListener('click', function(){
    saveThemeSelection();
})

