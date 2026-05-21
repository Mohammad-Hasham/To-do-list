let inputText = document.getElementById("text-type")
let addBtn = document.getElementById("add-btn");
let unOrderList = document.getElementById("list");
addBtn.addEventListener("click" ,()=> {
let value = inputText.value;
value = value.charAt(0).toUpperCase()+
value.slice(1).toLowerCase()
 if(value === ""){
  alert("Plaese Write somthing ")
}


else{

  
  
    let newLi = document.createElement("li");
newLi.contentEditable = true;
newLi.style.outline = "none"
unOrderList.append(newLi)
newLi.textContent = `${value}`;
inputText.value = "";

  



// create delete button for all list //
let place2 = document.querySelector(".place2")
let place2Child = document.createElement("div");
place2Child.classList.add("place2-child");
place2.append(place2Child);


// checkBox//

let checklist = document.createElement("input");
checklist.classList.add("check")
checklist.type = "checkbox";
place2Child.append(checklist);
checklist.addEventListener("change", () => {
  if (checklist.checked) {
    newLi.style.textDecoration = "line-through";
    newLi.contentEditable = false;
  } else {
    newLi.style.textDecoration = "";
    newLi.contentEditable = true;
  }
});


let deleteBtn = document.createElement("button");
deleteBtn.classList.add("Delete-btn")
deleteBtn.innerText = "Delete";
place2Child.append(deleteBtn);

deleteBtn.addEventListener("click" , () =>{
  place2Child.remove();
  newLi.remove();
})

}

})