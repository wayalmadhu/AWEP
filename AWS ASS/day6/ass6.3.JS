var likeCounter = 1;

function likeFun() {
  
  let likeEle = document.querySelector("#likeId");

  likeEle.innerHTML = "Likes " + likeCounter;

  likeCounter++;
}

function commentFun() {
  let userComment = document.querySelector("#commentId").value;

  const newEle = document.querySelector("#userCommentId").cloneNode(true);

  newEle.removeAttribute("id");
  newEle.children[0].innerHTML = userComment;

  const commentBox = document.querySelector("#commentBoxId");

  commentBox.insertBefore(newEle, commentBox.firstChild);

  document.querySelector("#inputId").value = "";

}