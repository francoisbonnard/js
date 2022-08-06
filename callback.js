const Posts = [
    {title : "post one", body : "this is post one"},
    {title : "post two", body : "this is post two"}
]

function getPosts () {
    setTimeout( ()=> {
        let Output = ""
        Posts.forEach( (post,index)=>{
            Output += `<li>${post.title}</li>`

        } )
         document.body.innerHTML = Output
    }, 1000)
}

function createPost (post, callback) { 
    setTimeout( ()=> {
        Posts.push(post)
        callback()
    },200)
}

createPost( {title :"post three", body : "this is post three"}, getPosts)