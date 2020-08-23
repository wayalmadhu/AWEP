var likeCounter = 1;

function likeFun() {
  let likeEle = document.querySelector("#likeId");
  
  likeEle.style.color = "White";
  likeEle.style.background = "gray";

  likeEle.innerHTML = "Likes " + likeCounter;

  likeCounter++;

}

function commentFun() {
  let userComment = document.querySelector("#inputId").value;
  
  const commentEle = document.createElement("div");

  const child1 = document.createElement("div");
  child1.textContent = userComment;
  
  const child2 = document.createElement("button");
  child2.textContent = "Delete";

  commentEle.appendChild(child1);
  commentEle.appendChild(child2);

  commentEle.style.color = "White";
  commentEle.style.background = "gray";
  commentEle.style.marginBottom = "4px";
  commentEle.style.justifyContent = "space-between";

  const commentDiv = document.querySelector("#commentDiv");

  commentDiv.insertBefore(commentEle, commentDiv.firstChild);

  document.querySelector("#inputId").value = "";

  commentEle.innerHTML = userComment;

}