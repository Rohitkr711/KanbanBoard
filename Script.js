const AddTaskButton = document.querySelectorAll(".add-task-btn");
const TodoBoard = document.getElementById("TodoBoard");
const ProgressBoard = document.getElementById("ProgressBoard");
const CompletionBoard = document.getElementById("CompletionBoard");

// Adding Flying-Class To Already & Dynamic Created Cards
function CardDragEvent(target) {
    target.addEventListener('dragstart', () => {
        target.classList.add('flyingCard');
    })
    target.addEventListener('dragend', () => {
        target.classList.remove('flyingCard');
    })
}

// Adding New Item In a Board
AddTaskButton.forEach((CurrentAddButton)=>{

    CurrentAddButton.addEventListener("click", () => {
        const newItemTextContent = prompt("Enter new Item.");
        if (!newItemTextContent)
            return;
        
        const newCardItem=document.createElement('div');
        newCardItem.classList.add('boardCardItem');
        newCardItem.setAttribute("draggable",true);
        
        const newCardItemContent = document.createElement('p');
        newCardItemContent.classList.add("boardCardItemContent");
        newCardItemContent.innerText = newItemTextContent;
        
        newCardItem.appendChild(newCardItemContent);
        CardDragEvent(newCardItem);  // helping in identifying flying card by add new class
        
        if(CurrentAddButton.id === "TodoBoardAddBtn"){
            console.log("inside if");
            TodoBoard.querySelector(".boardCardItems").appendChild(newCardItem);
        }
        else if(CurrentAddButton.id === "ProgressBoardBtn"){
            console.log("inside else if");
            ProgressBoard.querySelector(".boardCardItems").appendChild(newCardItem);
        }
        else{
            console.log("inside last else");
            CompletionBoard.querySelector(".boardCardItems").appendChild(newCardItem);
        }
            
    });
})


// Appending the DragOver Card In A Board

const AllBoards = document.querySelectorAll(".board");
const AllCardItems = document.querySelectorAll(".boardCardItem");
AllCardItems.forEach(CardDragEvent);


AllBoards.forEach((CurrentBoard) => {
    CurrentBoard.addEventListener('dragover', () => {
        const flyingCard = document.querySelector('.flyingCard');
        console.log("Something is over me", CurrentBoard);
        CurrentBoard.querySelector(".boardCardItems").appendChild(flyingCard);
    })
})
