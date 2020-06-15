var x=0; //to give item an id when created
function addToDo(){
    console.log('adding a new task')
    //get the value from input
    var text = $('#txt-task').val();
    console.log(text);
    //create the list item template 
    var li = `<li id="${x}">${text} <button onclick="deleteToDo(${x});"><i class="fa fa-trash" aria-hidden="true"></i>
    </button></li>`

    
    x++;
    //display the li under the ul
    
    //set the focus to the input
    if(text==''){
        alert("please add text")
    }else{
        
        $('#pending-list').append(li);
        $('#txt-task').val('');
    }
    $('#txt-task').focus();
}

function deleteToDo(id){
    console.log('deleting task ' + id)
    var deleteMe = document.getElementById(id);
    console.log(deleteMe);
    deleteMe.remove();

}

function init(){
    console.log("init the to do app");
    
    $('#txt-task').val('');
    $('#btn-add').click(addToDo);
    //sensing the user actions/events
    $("#txt-task").keypress(function(e){
        // console.log(e.key);
        if(e.key==="Enter"){
            console.log("you pressed enter");
            addToDo();
        }
    });
}

//when the browser finishes rendering html, execute init
window.onload=init;