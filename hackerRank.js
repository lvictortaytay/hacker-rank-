
let loginController = 1
let token1 = ''
let popUpDiv = document.getElementById("popup")
let popUpHidden = true
let userName = localStorage.getItem("userName")
const loginAnc = document.querySelector("#loginAnchor")
const homeAnch = document.querySelector("#homeAnchor")
const navBar = document.querySelector("#navBar")
loggedIn = localStorage.getItem("loggedIn")
let favListEmpty = null
let favs = []
let list1 = (localStorage.getItem("favs"))
let favList = []
let myPost = []





function popFavStorage(){
    if(favListEmpty == null || false){
    return
}
else{
    favListEmpty == true
}
}






let checked = null

function popUpFunc(){
    if(popUpHidden === false){
        popUpDiv.removeAttribute("hidden")
    }
    else{
        popUpDiv.setAttribute("hidden" , "hidden")
    }

}





document.addEventListener("DOMContentLoaded",function(){
    if(localStorage.getItem("loggedIn") === "true"){
    submitLogin()
 
    }
   
})






function submitLogin(){
    //localStorage.removeItem("userName")
        navBar.innerHTML = `
        <a class="text-light" id="homeAnchor" href="">Hack or Snooze</a>
        <a class="text-light"id="loginAnchor" >${localStorage.getItem("userName") }  </a>
        <a class="text-light " id="logOutAnchor" href="">logout</a>
        <a class="text-light"id="postAnchor" href="">create post</a>
        <a class="text-light"id="favAnchor" href="">favorites</a> 
        <a class="text-light"id="myStoryAnch" href="">my stories</a>`

    
           
        const homeLink = document.querySelector("#homeAnchor")
        homeLink.addEventListener("click",function(e){
        e.preventDefault()
        localStorage.removeItem("postPage")
        // location.reload()
       
        // console.log("hello")

        function homePage(){
            // homeAnch.addEventListener("click" , function(e){
                // e.preventDefault()
                navBar.setAttribute("class" , "bg-warning")
            
                loginAnc.removeAttribute("class" , "loginPgText")
                loginAnc.setAttribute("class" , "text-light")
                const listContainer2 = document.querySelector("#storiesContainerLogin")
                const listContainer = document.querySelector("#storiesContainer")
                if(listContainer2){
                    listContainer2.removeAttribute("id")
                    listContainer2.setAttribute("id", "storiesContainer")
                listContainer2.innerHTML = " "
                listContainer2.innerHTML = `  
                <ul id="storiesList">
                
                </ul>
        `
                }else{
                    listContainer.removeAttribute("id")
                    listContainer.setAttribute("id", "storiesContainer")
                listContainer.innerHTML = " "
                listContainer.innerHTML = `  
                <ul id="storiesList">
                
                </ul>
        `
                }
                
                // console.log("hello")
            
                // popStories()
        
                loginController = 1
     
        
    // })
    }
        homePage()
        popStories()
        })
        const postLink = document.querySelector("#postAnchor")
        postLink.addEventListener("click",function(e){
        e.preventDefault()
        popPost() 
        })
        const favLink = document.querySelector("#favAnchor")
        favLink.addEventListener("click" , function(e){
            e.preventDefault()
            popFavs()
        })
        const myStoriesLink = document.querySelector("#myStoryAnch")
        myStoriesLink.addEventListener("click" , function(e){
            e.preventDefault()
            console.log("there")
            popMyStories()
        })
        
        loginAnc.removeAttribute("class" , "loginPgText")
        loginAnc.setAttribute("class" , "text-light")
        const listContainer2 = document.querySelector("#storiesContainerLogin")
        listContainer2.innerHTML = `  <div class="container" id="storiesContainer">
        <ol id="storiesList">
        
        </ol>
    </div>`
  
   popStories()
    loginPage()
    popPost()


    
  
    

  




}






function popFavs(){
    const listContainer = document.querySelector("#storiesContainer")
    const listContainer2 = document.querySelector("#storiesContainerLogin")
    
    let innerHtml = `<div>
        <ul id = "favPostList">
        </ul>
    </div>`
    
    if(listContainer2){
        listContainer2.setAttribute("id" , "storiesContainer")
        listContainer2.innerHTML = innerHtml
       
    }
    else{
        listContainer.innerHTML = innerHtml
        
    }
    function loopFavs(){
        ul = document.querySelector("#favPostList")
        for(let i = 0 ; i < favs.length  ; i++){
            favLi = document.createElement("li")
            favLi.setAttribute("id" , `${i}`)
            favLi.innerHTML = favList[i].innerHTML
            ul.append(favLi)


    for(let i = 0 ; i < favList.length ; i++){
        let newlist = []
        if(newlist.includes(favList[i])){
            newlist.pop(favList[i])
            

        }
        else{
            newlist.push(favList[i])
            }
            
        
    }
   
    
    
        
        
        }
        
    }
    
    
    loopFavs()
    
    


  

    

}




function popPost(){
    const postLink = document.querySelector("#postAnchor")
    let innerHTML = 
        
        ` <div class="container text-center" id="createAccForm">
        <form>
            <h3>create post!</h3><br>
            <input class="container-fluid inputBox" type="text" placeholder="author name" id="name" > <br>
            <input class="container-fluid inputBox" type="text" placeholder="title" id="username"> <br>
            <input class="container-fluid inputBox" type="text" placeholder="url" id="password"> <br>
            <button class="btn text-light btn-warning" id="postBtn">submit post!</button>
        </form>
 
     </div>

`
    loginAnc.setAttribute("class" ,"loginPgText")
    
    const listContainer = document.querySelector("#storiesContainer") || document.querySelector("#storiesContainerLogin")
    listContainer.innerHTML = innerHTML 
    listContainer.setAttribute("id" ,"storiesContainerLogin")
        
        

localStorage.setItem("postPage" , "1")

function makePost(){
    if(localStorage.getItem("postPage") == 1){
const postBtn = document.querySelector("#postBtn")
postBtn.addEventListener("click" , function(e){
  e.preventDefault()
  async function createPost(){
    const authorName = document.querySelector("#name").value
    const title = document.querySelector("#username").value
    const url = document.querySelector("#password").value
    console.log(authorName)
    console.log(title)
    console.log(url)
    const favLink = document.querySelector("#favAnchor")
    const res = await axios.post("https://hack-or-snooze-v3.herokuapp.com/stories",{
        "token": `${localStorage.getItem("token")}`,
        "story": {
            "author": `${authorName}`,
            "title": `${title}`,
            "url": `${url}`   //does not work without http or https
        }
    })
    console.log(res)

    homeAnch.click()
    let container = document.getElementById("storiesContainerLogin")
    container.removeAttribute("id")
    container.setAttribute("id" , "storiesContainer")
    // location.reload()

    
    
  
}
  createPost()
})
    }
  }


  makePost()

        }




        













function homePage(){
    homeAnch.addEventListener("click" , function(e){
        e.preventDefault()
        navBar.setAttribute("class" , "bg-warning")
       
        loginAnc.removeAttribute("class" , "loginPgText")
        loginAnc.setAttribute("class" , "text-light")
//         const listContainer2 = document.querySelector("#storiesContainerLogin")
//         listContainer2.innerHTML = " "
//         listContainer2.innerHTML = `  
//         <ul id="storiesList">
        
//         </ul>
//   `
        const listContainer2 = document.querySelector("#storiesContainerLogin")
        const listContainer = document.querySelector("#storiesContainer")
        if(listContainer2){
            listContainer2.removeAttribute("id")
            listContainer2.setAttribute("id", "storiesContainer")
            listContainer2.innerHTML = " "
            listContainer2.innerHTML = `  
                <ul id="storiesList">
                
                </ul>
        `
                }
        else{
            listContainer.removeAttribute("id")
            listContainer.setAttribute("id", "storiesContainer")
            listContainer.innerHTML = " "
            listContainer.innerHTML = `  
                <ul id="storiesList">
                
                </ul>
        `
                }
        
    
        popStories()
   
        loginController = 1
     
        
    })
    }






async function popStories(){
    const res = await axios.get("https://hack-or-snooze-v3.herokuapp.com/stories")
    const table = document.querySelector("#storiesList")
   
    for(let x = 0 ; x < res.data.stories.length; x++){

        const lI = document.createElement("li")
        lI.setAttribute("id" , `${x}`)
        const anchorLi = document.createElement("a")
        const author = document.createElement("small")
        anchorLi.setAttribute("href", `${res.data.stories[x].url}`)
        anchorLi.setAttribute("id", `storyLinks`)
        anchorLi.setAttribute("target", `_blank`)
        anchorLi.innerText = (res.data.stories[x].title)
        author.innerText = (`  by ${res.data.stories[x].author}`)
        lI.append(anchorLi)
        lI.append(author)
        table.append(lI)
        console.log(res.data.stories[x].url)
        
        
        
    }
   

}


function loginPage(){
loginAnc.addEventListener("click" , function(e){
    e.preventDefault()
    localStorage.removeItem("userName")
        //loginAnc.innerText = "login/signup"
    if(loginController === 1){
        navBar.setAttribute("class" , "bg-warning")
        // loginAnc.innerText = "logout"
         loginAnc.setAttribute("class" ,"loginPgText")
         const listContainer = document.querySelector("#storiesContainer")
         listContainer.innerHTML = " "
         listContainer.setAttribute("id" ,"storiesContainerLogin")
         listContainer.innerHTML = " "
         listContainer.innerHTML = 
         
         ` <div class="container text-center" id="createAccForm">
         <form>
             create account<br>
             <input class="container-fluid inputBox" type="text" placeholder="name" id="name" > <br>
             <input class="container-fluid inputBox" type="text" placeholder="username" id="username"> <br>
             <input class="container-fluid inputBox" type="password" placeholder="password" id="password"> <br>
             <button class="btn btn-primary" id="createAccBtn">sign up!</button>
         </form>
  
      </div>

      <div class="container text-center" id="loginForm">
         <form>
             login<br>
             <input class="container-fluid inputBox" type="text" placeholder="username" id="loginusername"> <br>
             <input class="container-fluid inputBox" type="password" placeholder="password" id="loginpassword"> <br>
             <button class="btn btn-secondary" id="loginBtn">login!</button>
         </form>
      </div>
`

        
   
    }
    if(loginController === 2){
        navBar.setAttribute("class" , "bg-warning")
        loginAnc.removeAttribute("class" , "loginPgText")
        loginAnc.setAttribute("class" , "text-light")
    }




    const createAccBtn = document.getElementById("createAccBtn")
    createAccBtn.addEventListener("click",function(e){
        e.preventDefault()
        const name = document.querySelector("#name").value
        const userName = document.querySelector("#username").value
        const password = document.querySelector("#password").value
        async function signUp(name,username,password){
            const res = await axios.post("https://hack-or-snooze-v3.herokuapp.com/signup" , 
            
            { user:
                {
        
                name,
                username,
                password
            }
            })
            localStorage.setItem("loggedIn" , "true")
            localStorage.setItem("userName" , `${userName}`)
            
           
            token1 = (res.data.token)
            localStorage.setItem("token" , `${token1}`)
            

            submitLogin()
            
            loginController = 1
            return res.data.token
        }
        signUp(name,userName,password)

        //submitLogin()

        



    })
    const loginBtn = document.getElementById("loginBtn")
    loginBtn.addEventListener("click",function(e){
        e.preventDefault()
        console.log("this is the login button")
        const username = document.querySelector("#loginusername").value
        const password = document.querySelector("#loginpassword").value
    
    })


    


    loginController = loginController === 1? 2:1

})
}
loginPage()
homePage()



async function popStories(){
    
    const res = await axios.get("https://hack-or-snooze-v3.herokuapp.com/stories")
    console.log(res)
    const table = document.querySelector("#storiesList")
    if(loginAnc.innerText === ""){
        loginAnc.innerText = "login/signup"
        }
    
    for(let x = 0 ; x < res.data.stories.length; x++){
        
        const lI = document.createElement("li")
        lI.setAttribute("id" , `${x}`)
        lI.setAttribute("class" , `li`)
        const anchorLi = document.createElement("a")
        const author = document.createElement("small")
        const starElement =  document.createElement("input")
        const star = document.createElement("label")
        star.setAttribute("id" , `heart`)
        star.setAttribute("for" , `heart${x}`)
        starElement.setAttribute("type" , "checkbox")
        starElement.setAttribute("id" , `heart${x}`)
        star.append(starElement)
        anchorLi.setAttribute("href", `${res.data.stories[x].url}`)
        anchorLi.setAttribute("id", `storyLinks`)
        anchorLi.setAttribute("target", `_blank`)
        spacer = document.createElement("br")
        anchorLi.innerText = (res.data.stories[x].title)
        author.innerText = (`  by ${res.data.stories[x].author}`)
        lI.append(anchorLi)
        lI.append(author)
        table.append(lI)
        lI.append(spacer)
        lI.append(star)
        let listId = lI.id
        if(favs.includes(`${listId}`)){
            star.append(starElement)
            star.removeAttribute("id" , "heart")
            star.setAttribute("class" , "liked")
            starElement.checked = true
           
            
        }
        if(res.data.stories[x].username == localStorage.getItem("userName")){
            myPost.push(lI)
        }
        
        
            
        
        //console.log(res.data.stories[x].url)
        
        starElement.addEventListener("click" , function click(e){
            if (localStorage.getItem("loggedIn") === "true"){
                if(starElement.checked){
                    let id = (starElement.id.slice(5))
                    let post = document.getElementById(`${id}`)
                    favList.push(post)
                    star.append(starElement)
                    star.removeAttribute("id" , "heart")
                    star.setAttribute("class" , "liked")
                    
                    if(favs.includes(`${id}`)){
                        console.log("in there")
                        localStorage.setItem("favs", JSON.stringify(favs))
                    }else{
                        favs.push(`${id}`)
                    }
                    

                    // localStorage.setItem("favs", JSON.stringify(favs))
                    

                    
                    
                    
                    
                }
                else{
                    // console.log("unchecked")
                    // star.append(starElement)
                    
                    star.removeAttribute("class" , "liked")
                    star.setAttribute("id" , `heart`)
                    let id = (starElement.id.slice(5))
                    let post = document.getElementById(`${id}`)
                    favList.filter(function(value,index,arr){
                        return value !== favList[2]
                    })
                    
                    const target = post;
                    var i = 0;
                    while (i < favList.length) {
                    if (favList[i] === target) {
                        favList.splice(i, 1);
                    } else {
                        ++i;
                    }
                    }
                    
                    // console.log(star)
              
                    
                    localStorage.removeItem("favs")
                    
                    localStorage.setItem("favs", JSON.stringify(favs))
                    let tempArr = [...favs]
                    let filtered = tempArr.filter(function(value, index, arr){ 
                        return value !== `${e.target.id.slice(5)}` ;
                    });
                    // console.log(filtered)
                    // console.log(tempArr)
                    favs = []
                    favs = [...filtered]
                    
                    console.log(favs)
                    
              
                }
            }
            else{
                popUpHidden = false
                popUpFunc()
                body = document.querySelector("#biggerContainer")
                body.setAttribute("class" , "dim")
                // loginAnc.click()
                
            }
            
        })

    }
    
    



const loginBtn = document.getElementById("loginpopup")
loginBtn.addEventListener("click",function(){
    popUpHidden = true
    popUpFunc()
    loginAnc.click()
    body = document.querySelector("#biggerContainer")
    body.removeAttribute("class" , "dim")

})

const goBackBtn = document.getElementById("go-back")
goBackBtn.addEventListener("click",function(){
    popUpHidden = true
    popUpFunc()
    homeAnch.click()
    body = document.querySelector("#biggerContainer")
    body.removeAttribute("class" , "dim")

})


    
    const logOutLink = document.querySelector("#logOutAnchor")
    logOutLink.addEventListener("click", function(e){
        e.preventDefault()
        console.log(e.target)
        localStorage.removeItem("loggedIn")
        location.reload()
        
        
    })

    
    
  
    const newPost = document.querySelector("li")
    newPost.setAttribute("class" , "li1")
}





// function logINFirstPage(){
//     page = document.getElementById("storiesContainer")
//     page.innerText = ("")
// }


popStories()


async function signUp(name,username,password){
    const res = await axios.post("https://hack-or-snooze-v3.herokuapp.com/signup" , 
    
    { user:
        {

        name,
        username,
        password
    }
    })
    console.log(res)
}




function popMyStories(){
    const listContainer2 = document.querySelector("#storiesContainer")
    const listContainer = document.querySelector("#storiesContainerLogin")
        if(listContainer2){
            
            listContainer2.innerHTML = `  
        <ol id="myPost">
        
        </ol>
    `
        }else{
            listContainer.innerHTML = ''
            listContainer.innerHTML = `  <div class="container" id="storiesContainerLogin">
        <ol id="myPost">
            
        </ol>
    </div>`
        }
        function popMyPost(){
            ol = document.querySelector("#myPost")
            for(let i = 0 ; i < myPost.length  ; i++){
                myPostLi = document.createElement("li")
                myPostLi.setAttribute("id" , `${i}`)
                myPostLi.innerHTML = myPost[i].innerHTML
                ol.append(myPostLi)
        
            }
                        }
                        popMyPost()
}


























//signUp("rando1","ran2d3om111" , "passwew333wecweacword") 

// async function logIn(username, password){
//     const res = await axios.post("https://hack-or-snooze-v3.herokuapp.com/login", {user:{
//     username,
//     password
//     }})
//     console.log(res)
//     token =  (res.data.token)
//     return token
    
// }

//logIn("ran2d3om111" ,"passwew333wecweacword")


// async function getUsers(token){
//     const res = await axios.get("https://hack-or-snooze-v3.herokuapp.com/users", {params:{token}})
//     console.log(res)

// }
//getUsers()

// async function getUsersWithAuth(){
//     const token = await logIn("ran2d3om111" ,"passwew333wecweacword");
//     console.log(getUsers(token))
    
// }
// getUsersWithAuth()



// const storyLink = document.querySelector("#postAnchor")
// storyLink.addEventListener("click",function(e){
// e.preventDefault()
// console.log(e.target)



// })






// const storyLink = document.querySelector("#postAnchor")
// storyLink.addEventListener("click",function(e){
// e.preventDefault()
// console.log(e.target)
// loginAnc.setAttribute("class" ,"loginPgText")
// const listContainer = document.querySelector("#storiesContainer")
// listContainer.innerHTML = " "
// listContainer.setAttribute("id" ,"storiesContainerLogin")
// listContainer.innerHTML = " "
// listContainer.innerHTML = 

// ` <div class="container text-center" id="createAccForm">
// <form>
//     create post!<br>
//     <input class="container-fluid inputBox" type="text" placeholder="author name" id="name" > <br>
//     <input class="container-fluid inputBox" type="text" placeholder="title" id="username"> <br>
//     <input class="container-fluid inputBox" type="password" placeholder="url" id="password"> <br>
//     <button class="btn btn-primary" id="createAccBtn">submit post!</button>
// </form>

// </div>

// `




// })