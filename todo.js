var list = document.querySelector('.section ul');
var form = document.forms['form2'];
var span1;

form.addEventListener('submit', function(e) {
    e.preventDefault();

    var value = document.getElementById('input');
    if (value.value === '') {
        alert("Add some task");
    } else {
        var li = document.createElement('li');
         span1 = document.createElement('span');
        var span2 = document.createElement('span');
        li.appendChild(span1);
        li.appendChild(span2);
        list.appendChild(li);
        
        span1.innerHTML = value.value;
        span2.innerHTML = 'x';

        span1.classList.add('name');
        span2.classList.add('Delete');

        span2.addEventListener('click', function(){
            li.remove();
        })

        // Add event listener for span2 here
        // span2.addEventListener("click", function() {
        //     this.parentNode.remove();
            // saveData();
        // });
        value.value = ''
        // saveData();
    }
});

var hideForm = document.querySelector('#form2 input[type = checkbox]');
hideForm.addEventListener('click', function() {
    if (list.style.display == 'none') {
        list.style.display = 'block';
    } else {
        list.style.display = 'none';
    }
});

// function saveData(){
//     localStorage.setItem("data",span1.innerHTML);
// }

// function showTask(){
//     if(localStorage.getItem != ''){
//     span1.innerHTML = localStorage.getItem("data");
//     }
// }
// showTask();

var inputValue = document.getElementById('input');
inputValue.addEventListener('keyup', function(){
    var item = inputValue.value.toLowerCase();
    var liItem = list.getElementsByTagName('li')
    for (var i=0; i<liItem.length;i++){
        var names = liItem[i].querySelector('.name').innerHTML.toLowerCase();
        if(names.includes(item)){
            liItem[i].style.display='block'
        }else{
            liItem[i].style.display='none'
        }
    }
})