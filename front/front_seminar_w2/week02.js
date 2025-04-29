// DOM 요소 선택
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

//할 일 추가 함수

function addTodo(event) {
    event.preventDefault(); //폼 제출 방지

    const todoText = todoInput.value.trim();

    if (todoText !== "") {
        const todoItem = document.createElement("li");
        todoItem.className = "todo-item";

        const todoTextSpan = document.createElement("span");
        todoTextSpan.textContent = todoText;

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "삭제";

        todoItem.appendChild(todoTextSpan);
        todoItem.appendChild(deleteBtn);
        todoList.appendChild(todoItem);

        todoInput.value ="";

    }
    
    // 할 일 삭제 처리 함수
    function handleTodoClick(event) {
        const target = event.target;

        // 삭제 버튼 클릭 시
        if (target.classList.contains("delete-btn")) {
            target.parentElement.remove();
        }
    }
    
    // 할 일 목록에 클릭 이벤트 리스너 추가
    todoList.addEventListener("click", handleTodoClick);
}

todoForm.addEventListener("submit", addTodo);