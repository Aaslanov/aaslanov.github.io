window.onload = function() {
    
    var todoList = [];
    if (localStorage.getItem('todo') !=undefined) {
        todoList = JSON.parse(localStorage.getItem('todo'));
        out();
    }
    document.getElementById('button').onclick = function() {
        var d = document.getElementById('addtothelist').value;
        var temp = {};
        temp.todo = d;
        temp.check = false;
        var i = todoList.length;
        todoList[i] = temp;
        console.log(todoList);
        out();
        localStorage.setItem('todo', JSON.stringify(todoList) );
        document.getElementById("addtothelist").value = "";
    }
    
    function out() {
        var out='';
        for (var key in todoList) {
            if (todoList[key].check == true) {
                out += '<input type="checkbox" checked>';
            }
            else {
                out += '<input type="checkbox">';
            }         
            
            out += todoList[key].todo + '<br>';   

        }
        document.getElementById('out').innerHTML = out;
        
        document.getElementById('clear').onclick = function() {
        localStorage.clear();
        document.location.reload(true);    
    }
    }
}
