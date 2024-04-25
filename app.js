//input tag
var inputText= document.getElementById("input")
//add button
var subBtn= document.getElementById("button")

//To do list
var todoListTag= document.getElementById("todolist")

//array to store all todo elements,intially empty
var todoArr=[]

//When button is clicked 
subBtn.addEventListener("click",addItemToArray)

//If Input is on FOCUS and enter is Clicked addItemToArray should be called to Add element to array
inputText.addEventListener("keypress",(event)=>{
    // console.log(event.key)
    if(event.key=="Enter"){
        addItemToArray()
    }
})

function addItemToArray(event){
    

    //!event.target.value==inputText.value
    
    //push the value to the array
    if(inputText.value!=""){
        todoArr.push(inputText.value)
    }

    //reset the value to empty string""
    inputText.value=""
    // console.log("todoArr:",todoArr)

    display()

}
function display(){
    //clear out previous
    todoListTag.innerHTML=""
   //structure of li tag 
    todoArr.map((curr,i)=>{
        var listItem = `<li id=""item>
        <div>${curr}</div>
        <div>
        <span onclick="deleteItem(${i})">&times;</span>
        <span>|</span>
        <span onclick="editItem(${i})">Edit</span>
        </div>
    </li>`
    //insert it inside <ul id="todoList">
    todoListTag.innerHTML+=listItem

    })

}

function deleteItem(index){

    //delete the element[index] from todoArr
    todoArr.splice(index,1)
    display()
}

function editItem(index){
    var newvalue = prompt("Pls Edit")
    // console.log("newValue:",newvalue)

    //Insert the value to array at the index
    todoArr.splice(index,1,newvalue)
    display()
    
}

document.getElementById("reset").addEventListener
("click",()=>{
    todoArr=[]
    display()
})