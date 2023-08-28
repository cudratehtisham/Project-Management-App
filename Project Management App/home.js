function loadMenu(id){
    
}



//adding Board
var idName = 1;
function addBoard(id) {
    idName++;
    var listID = 'projectList_' + idName;
    var templateBlock = '<section class="board-block">' +
        '<div id="boardName">' + id.value +
        '<button id = "btn" onclick="removeCards()">Remove cards</button>' +
        '</div>' +
        '<div class="project-block" id=' + listID + '>' +
        ' </div>' +
        '</section>';
    document.getElementById('boardBlockList').innerHTML += templateBlock;
    showProjects(listID);
    document.getElementById('menuList').innerHTML += '<li onclick = "loadMenu('+listID+')">' + id.value + '</li>';
}
// var idName = 1;
// function addBoard(id){
//     idName++;
//     var listId = 'projectList_'+idName;
//     var boardId = 'board_'+idName;
//     var templateBlock = '<section class ="board-block" id = '+boardId+'>'+
//     '<div>'+id.value+'<button onclick="removeCard('+listId+')">Remove Card</button></div>'+
//     '<div class="project-block" id ='+listId+'>'+
        
//     '</div>'+
//     '</section>'

//     document.getElementById('boardBlockList').innerHTML += templateBlock;
//     showProject(listId);
//     document.getElementById('menuList').innerHTML +='<li onClick ="loadMenu('+boardId+')">'+id.value+"</li>";
// }

//Remove button
function removeCards() {
    document.getElementById('projectList').innerHTML = '';
}

//Projects
var projectListObject = [
    {
        name: 'JavaScript One'
    },
    {
        name: 'JavaScript Two'
    }
];


showProjects('projectList_1');
function showProjects(listID) {
    projectListObject.forEach(function (value, index) {
        var template = '<div class="project-card">' + value.name +
            '<ul>' +
            '<li>Task one</li>' +
            '<li>Task one</li>' +
            '</ul>' +
            '</div>';
        if (listID) {
            document.getElementById(listID).innerHTML += template;
        } else {
            document.getElementById('projectList').innerHTML += template;
        }
    });
}


//Menu toggle
function toggleMenu() {
    var toggleVariable = document.getElementsByClassName('menu')[0];

    if (toggleVariable.style.display == 'none') {
        toggleVariable.style.display = '';
    } else {
        toggleVariable.style.display = 'none';
    }
}