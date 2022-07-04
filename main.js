
const input=document.querySelector("#addtask");
const list_el=document.querySelector("#newtask")
const taketaskk=document.querySelector("#submittask");


taketaskk.addEventListener("click", () =>{
    const task=input.value;
    if(task.length==0){
        alert('Please enter a value')
    }
    else{
        const item=document.createElement("div")
        
        // item.classList.add("toaddTask")
        // item.classList.add("items")
        item.classList.add("items")
         
        const tasks=document.createElement("div");
        tasks.classList.add("toaddTask")
        item.appendChild(tasks);

        const task_input= document.createElement("input")
        task_input.classList.add("inputt")
        task_input.value=task;
        task_input.setAttribute('readonly','readonly')
        tasks.appendChild(task_input);

        const actionbtn=document.createElement("div")
        actionbtn.classList.add("actions")

        const btnedi=document.createElement("button")
        btnedi.classList.add("edit")
        btnedi.innerHTML='Edit'

        const btndel=document.createElement("button")
        btndel.classList.add("delete")
        btndel.innerHTML='Delete'

          
        actionbtn.appendChild(btnedi)
        actionbtn.appendChild(btndel)
         
        input.value=" "
        item.appendChild(actionbtn)


        
        list_el.appendChild(item)



        btnedi.addEventListener("click",()=>{
            if(btnedi.innerHTML.toLowerCase()=="edit"){
                btnedi.innerText="Save";
                task_input.removeAttribute("readonly");
                task_input.focus();

            }
            else{
                btnedi.innerHTML="Edit";
                btnedi.setAttribute(readonly,readonly);
            }
        });


        btndel.addEventListener("click",()=>{
            list_el.removeChild(item);
        })
        
    }
})
