console.log("This is assignment 2");

function addTask() {
  var taskInput = "First Task";
  // Remove data
localStorage.removeItem("TaskData");

// Clear all
localStorage.clear();

  taskData.title = document.getElementById("title").value;
//   taskData.priority = document.getElementById("priority").value;
//   taskData.deadline = document.getElementById("deadline").value;
//   taskData.comments = document.getElementById("comments").value;

  console.log(taskData.title);

  //Main Div
  var div = document.createElement("div");
  div.setAttribute("class", "row");

  //Check box
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  div.appendChild(checkbox);

  // Text Node
  var textNode = document.createTextNode(taskData.title);
  div.appendChild(textNode);

  //Edit Button
  var editBtn = document.createElement("button");
  editBtn.type = "button";
  editBtn.setAttribute("class", "edit-btn");
  div.appendChild(editBtn);

  var editImg = document.createElement("img");
  editImg.type = "img";
  editImg.setAttribute("style", "height: 10px;");
  editImg.setAttribute("src", "images/edit.png");
  editBtn.appendChild(editImg);

  var statusSpan = document.createElement("span");
  statusSpan.type = "span";
  statusSpan.textContent = "Pending";
  statusSpan.setAttribute("class", "status");
  div.appendChild(statusSpan);

  // Add the list item to the task list
  var divMain = document.getElementById("task-list");
  divMain.appendChild(div);

  localStorage.setItem("TaskData", taskData.title);


  closePopup();

  // Clear the input field
  console.log("addTask Executed");

  // <div class="row">
  //      <input type="radio" name="item" />
  //      <span class="text">Task Name</span>
  //      <button class="edit-btn">
  //         <img style="height: 10px;" src="images/edit.png" />
  //      </button>
  //      <span class="status">Pending</span>
  // </div>
}

function openPopup() {
  document.getElementById("popup").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}
function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

const taskData = {
  title: 'Default',
  priority : 'Low',
  comments : 'Default Comments'
};
