//This module is responsible of creating and manipulating projects and the items inside it

const projects = {
    create(object, projectName){
        if(object[projectName]){
          return console.log("Its not possible to create an project with an existing name!")
        } 

        return object[projectName.toString()] = []
    },

    delete(object, projectName){
        delete object[projectName]
    },

    addItem(object, project, item){
        object[project].push(item)
    },

    deleteItem(object, project, item){
        object[project].splice(item, 1)
    },

    rename(object, projectName, newName){

        const newObj = {};

        for(let key in object){
            if(key === projectName && newName != undefined){
                newObj[newName] = object[key];
                continue;
            }
            newObj[key] = object[key]
        }

        if(newObj == object) return console.log("Nope");
        
        for(let key in object){
            delete object[key]
        }

        for(let key in newObj){
            object[key] = newObj[key]
        }
    }
}

export default projects

