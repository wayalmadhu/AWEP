let likeFun = function (likeBtn) {
    // Access the child element SPAN
    let likeVar = likeBtn.children[0].innerHTML;
    console.log(likeVar);
  
    // innerHTML returns string
    let likeCount = parseInt(likeVar);
  
    likeCount++;
  
    likeBtn.children[0].innerHTML = likeCount;
  
  }