async function commentCode() {
    return new Promise((CommentPosted)=>{
        CommentPosted("Comment posted successfully in the post created");
    })
}
async function likeCode() {
    return new Promise((like)=>{
        like("liked the post successfully");
    })
}
async function createPost(){
    var post = new Promise((cPost)=>{
        cPost("Post created successfully");
    })
    var [posts,comment,like] = await Promise.all([post,commentCode(),likeCode()])
    console.log(posts);
    console.log(comment);
    console.log(like);
}
createPost()


//