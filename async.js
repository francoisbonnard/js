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
            const error = false
            if (!error) {
                resolve()
            } else {
                reject("error dude")
            }
        },500)
    } ) 
}

async function init() {

    await createPost( {title :"post three", body : "this is post three"})

    getPosts()
}

init()