function addStudent() {
    let name = document.getElementById("studentName").value;
    if (name.trim() === "") {
        alert("Please enter a name");
        return;
    }
    let li = document.createElement("li");
    // Set innerHTML with the delete button and counter update function
    li.innerHTML = name + ' <button onclick="this.parentElement.remove(); updateCount();">Delete</button>';
    document.getElementById("studentList").appendChild(li);
    document.getElementById("studentName").value = "";
    // Update counter after adding
    updateCount();
}
 
function updateCount() {
    document.getElementById("count").innerText = document.getElementById("studentList").children.length;
}