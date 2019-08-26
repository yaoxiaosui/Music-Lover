const app = document.getElementById('root')
const container = document.createElement('div')
container.setAttribute('class', 'container')


const tempx = JSON.parse(localStorage.getItem("post_info"))
const tempy = JSON.parse(localStorage.getItem("title_content"))

var i;
for(var i = 0; i < tempx.length;i++){
    const new_card = document.createElement('div');
    new_card.setAttribute('class', 'card');
    const post_title1 = document.createElement("header")
    post_title1.textContent = tempy[i]

    const post_content1 = document.createElement("text_display")
    post_content1.textContent = tempx[i]

    const delete_button = document.createElement("text_display2")
    delete_button.textContent = "Delete Post"
    delete_button.onclick = function(){
        var children = confirm("Do you want to delete this post? ")
        if(children == true){
            var j;
            for(j =0; j<tempy.length;j++){
                if(tempy[j] == post_title1.textContent){
                    tempa = tempy.slice(0,j)
                    tempb = tempy.slice(j+1,i)
                    tempc = tempx.slice(0,j)
                    tempd = tempx.slice(j+1,i)

                    final_temp_title = tempa.concat(tempb)
                    final_temp_content = tempc.concat(tempd)
                    localStorage.setItem("title_content",JSON.stringify(final_temp_title))
                    localStorage.setItem("post_info",JSON.stringify(final_temp_content))
                    location.replace("http://localhost:63342/FinalProject/post.html?_ijt=jv4596pp8rjv1ojjg7hqh7nd2s")
                }
            }
        }
    }

    new_card.appendChild(post_title1)
    new_card.appendChild(post_content1)
    new_card.appendChild(delete_button)
    container.appendChild(new_card)
    app.appendChild(container)
}









function newPost(){
    const card = document.createElement('div');
    card.setAttribute('class', 'card');
    const post_title = document.createElement("header")

    const post_content = document.createElement("text_display")
    const delete_button = document.createElement("text_display2")
    delete_button.textContent = "Delete Post"
    delete_button.onclick = function(){
        alert("Delete me")
    }


    var title = prompt("Type to edit title")
    if(title == ""){
        post_title.textContent = null
    }
    else{
        post_title.textContent = title
        card.appendChild(post_title)
        container.appendChild(card)

        title_temp = JSON.parse(localStorage.getItem('title_content'))
        title_temp.push(post_title.textContent)
        localStorage.setItem("title_content",JSON.stringify(title_temp))

    }


    var content = prompt("Type to edit content")
    if(content == ""){
        post_content.textContent = null
    }
    else{
        post_content.textContent = content
        card.appendChild(post_content)
        container.appendChild(card)

        content_temp = JSON.parse(localStorage.getItem('post_info'))
        content_temp.push(post_content.textContent)
        localStorage.setItem("post_info",JSON.stringify(content_temp))
    }
    card.appendChild(delete_button)
    app.appendChild(container)
    location.replace("http://localhost:63342/FinalProject/post.html?_ijt=jv4596pp8rjv1ojjg7hqh7nd2s")
}

function toHome(){
    location.replace("http://localhost:63342/FinalProject/homepage.html?_ijt=jofvptmlu1oetoji6acdgp8rh4")
}

function toMusic(){
    location.replace("http://localhost:63342/FinalProject/music.html?_ijt=9arlv49kh9n34p2c8f90u6q81b")

}

function toVideo(){
    location.replace("http://localhost:63342/FinalProject/video.html?_ijt=9arlv49kh9n34p2c8f90u6q81b")
}

function toProfile() {
    location.replace("http://localhost:63342/FinalProject/profile.html?_ijt=bvg1j52r17qcu08lek45eh7ldk")
}





