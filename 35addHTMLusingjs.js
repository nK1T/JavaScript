//1.by using innerHTML
// const todo = document.querySelector(".todo-list");
// todo.innerHTML += "<li>hello bro</li>" //it will add new HTML --> but we dont use this as it decreases the performance.



//2.document.createElement()
//(a)append-->add element in the last
// const newTodo = document.createElement("li"); //step1--> create element
// newTodo.textContent="hello"; //step2--> enter the text that would be inside the element
// const todoList = document.querySelector(".todo-list"); //step3-->select where u want to add that element
// todoList.append(newTodo);  //step4--> add the new element in last

//(b)append-->add element in the beginning
// const newTodo = document.createElement("li"); //step1--> create element
// newTodo.textContent="hello"; //step2--> enter the text that would be inside the element
// const todoList = document.querySelector(".todo-list"); //step3-->select where u want to add that element
// todoList.prepend(newTodo);  //step4--> add the new element in beginning

//(c)remove-->remove an already existing element
// const todo1 = document.querySelector(".todo-list li");  //step1-->it will select the first li item of todo-list class
// todo1.remove(); //step2-->it will remove that element

//(d).before-->
// const newTodo = document.createElement("li"); //step1--> create element
// newTodo.textContent="hello"; //step2--> enter the text that would be inside the element
// const todoList = document.querySelector(".todo-list"); //step3-->select where u want to add that element
// todoList.before(newTodo);  //step4--> add the new element before selected element in step3

//(e).after-->add the new element after selected element
// const newTodo = document.createElement("li"); //step1--> create element
// newTodo.textContent="hello"; //step2--> enter the text that would be inside the element
// const todoList = document.querySelector(".todo-list"); //step3-->select where u want to add that element
// todoList.after(newTodo);  //step4--> add the new element after selected element in step3



//3.elem.insertAdjacentHTML(where, html)
// beforebegin
// afterbegin;
// beforeend;
// afterend;

// const todoList = document.querySelector(".todo-list");
// todoList.insertAdjacentHTML("beforeend", "<li>Teach Students </li>");

// const newitem = document.createElement("h1");
// newitem.textContent = "by bye";
// const todo = document.querySelector(".todo-list");
// todo.prepend(newitem);

