
const app = document.getElementById('root')
const container = document.createElement('div')
container.setAttribute('class', 'container')


const cover_title = JSON.parse(localStorage.getItem('cover_title'))
const cover_description = JSON.parse(localStorage.getItem('cover_description'))
const cover_preview = JSON.parse(localStorage.getItem('cover_preview'))

var i;
for(i = 0; i< cover_title.length; i++){
    const new_card = document.createElement('div');
    new_card.setAttribute('class', 'card');

    const title = document.createElement("header")
    title.textContent = cover_title[i]

    const description = document.createElement("text_display")
    description.textContent = cover_description[i]

    const delete_button = document.createElement("text_display2")
    delete_button.textContent = "Delete Cover"
    delete_button.onclick = function(){
        var children = confirm("Do you want to delete this cover? ")
        if(children == true){
                var j;
                for(j = 0; j < cover_title.length;j++){
                    if(cover_title[j] == title.textContent){
                        tempa = cover_title.slice(0,j)
                        tempb = cover_title.slice(j+1,i)

                        tempc = cover_description.slice(0,j)
                        tempd = cover_description.slice(j+1,i)

                        tempe = cover_preview.slice(0,j)
                        tempf = cover_preview.slice(j+1,i)

                        final_title = tempa.concat(tempb)
                        final_description = tempc.concat(tempd)
                        final_preview = tempe.concat(tempf)

                        localStorage.setItem("cover_title",JSON.stringify(final_title));
                        localStorage.setItem("cover_description",JSON.stringify(final_description));
                        localStorage.setItem("cover_preview",JSON.stringify(final_preview))
                        location.replace("http://localhost:63342/FinalProject/cover.html?_ijt=ifp0epkaeceda6la1gnvs8ilk2")
                    }
                }
        }

    }

    var preview = new Audio()
    preview.controls = true
    preview.src = cover_preview[i]

    new_card.appendChild(title)
    new_card.appendChild(description)
    new_card.appendChild(preview)
    new_card.appendChild(delete_button)
    container.appendChild(new_card)

}








var songs = document.getElementById("songs")
var _next = 0;
var files;
var len;
songs.addEventListener('change', function() {
    files = songs.files;
    len = files.length;
    var url = URL.createObjectURL(files[0]);
    //temp_url = JSON.parse(localStorage.getItem('cover_url'))
    //temp_url.push(url);
    //localStorage.setItem("cover_url",JSON.stringify(temp_url));

    createCard(url);
});


function createCard(url){
    const card = document.createElement('div');
    card.setAttribute('class', 'card');
    const header = document.createElement('header')
    //header.textContent = "My Cover"

    const cover_description = document.createElement('text_display')

    const cover_artist = document.createElement('text_display')
    const delete_button = document.createElement("text_display2")
    delete_button.textContent = "Delete Cover"

    var cover_title = prompt("Please Enter your Cover Name")
    if(cover_title == ""){
        header.textContent = null
    }
    else{
        header.textContent = cover_title
        card.appendChild(header)
        temp_title = JSON.parse(localStorage.getItem('cover_title'))
        temp_title.push(header.textContent);
        localStorage.setItem("cover_title",JSON.stringify(temp_title));
    }

    var description = prompt("Please enter your Cover Description")
    if(description == ""){
        cover_description.textContent = null
    }
    else{
        cover_description.textContent = description
        card.appendChild(cover_description)
        temp_description = JSON.parse(localStorage.getItem('cover_description'))
        temp_description.push(cover_description.textContent);
        localStorage.setItem("cover_description",JSON.stringify(temp_description));
    }


    var preview = new Audio();
    preview.controls = true;
    preview.src = url;

    temp_preview = JSON.parse(localStorage.getItem('cover_preview'))
    temp_preview.push(url)
    localStorage.setItem("cover_preview",JSON.stringify(temp_preview));


    card.appendChild(preview);
    card.appendChild(delete_button)
    container.appendChild(card)
    location.replace("http://localhost:63342/FinalProject/cover.html?_ijt=ifp0epkaeceda6la1gnvs8ilk2")

}
app.appendChild(container)



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