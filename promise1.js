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

function createPost (post) {
    return new Promise( (resolve,reject) => {
        setTimeout( ()=> {
            Posts.push(post)
            const error = true
            if (!error) {
                resolve()
            } else {
                reject("error dude")
            }
        },500)
    } ) 
}

createPost( {title :"post three", body : "this is post three"})
    .then(getPosts())
    .catch(err => console.log(err))