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
  commentEle.textContent = userComment; 

  commentEle.style.color = "White";
  commentEle.style.background = "gray";
  commentEle.style.marginBottom = "4px"

  const commentDiv = document.querySelector("#commentDiv");

  commentDiv.insertBefore(commentEle, commentDiv.firstChild);

  document.querySelector("#inputId").value = "";

  commentEle.innerHTML = userComment;

}