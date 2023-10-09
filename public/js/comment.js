

const commentHandler = async(e)=>{
    e.preventDefault()
    const post_id = document.getElementById("postid").value
    const comment =document.getElementById("project-desc").value
    console.log(post_id, comment)
    const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ post_id, comment }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok){
        document.location.reload()
      }
      else{
        alert("failed to create comment")
      }
}
document.querySelector(".new-project-form").addEventListener("submit",commentHandler)