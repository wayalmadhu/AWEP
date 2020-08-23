let likeFun = function (likeBtn) {
    // Access the child element SPAN
    let likeVar = likeBtn.children[0].innerHTML;
    console.log(likeVar);
  
    // innerHTML returns string
    let likeCount = parseInt(likeVar);
  
    likeCount++;
  
    likeBtn.children[0].innerHTML = likeCount;
  };
  
  let commentFun = function (commentBtn) {
    // Access the child element INPUT
    let commentVar = commentBtn.parentElement.parentElement.children[1].children[0].value
    //console.log(commentVar);
  
    const commentBox = commentBtn.parentElement.parentElement.parentElement.children[2];
  
    //console.log(commentBox);
  
    //ceating node for comment row
    let newElement = commentBox.children[0].cloneNode(true);
  
    // adding new ele to commentBox div
    /* commentBtn.parentElement.parentElement.parentElement.children[2].appendChild(newElement); */
    commentBox.insertBefore(newElement, commentBox.firstChild);
  
    // storing user comment in var
    const inputEle = commentVar;
  
    // adding user comment to the new element content.
    newElement.children[0].innerHTML = inputEle;
  
    // clear the comment from input box
    commentBtn.parentElement.parentElement.children[1].children[0].value = "";
  
  };
  
  let deleteFun = function (deleteBtn) {
    
    console.log(deleteBtn.parentElement.parentElement);
  
    deleteBtn.parentElement.parentElement.remove();
  
  };