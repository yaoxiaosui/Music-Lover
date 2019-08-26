
var list_info = JSON.parse(localStorage.getItem('list_info'))
temp_genre = []
temp_song = []
temp_preview = []
const app = document.getElementById('root')
const container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(container);
const card = document.createElement('div');
card.setAttribute('class', 'card');
const header = document.createElement("header")
header.textContent = "Recommendation"
card.appendChild(header)
var request = new XMLHttpRequest();
request.open('GET', 'https://api.myjson.com/bins/e7aii', true);
request.onload = function () {
    var data = JSON.parse(this.response);
    var i;
    var j;
    for(i = 0; i< list_info.length;i++){
        for(j = 0; j< data.song.length; j++){
            if(list_info[i] == data.song[j].track_name){
                temp_genre.push(data.song[j].genre)
                break
            }
        }
    }


    var k;
    for(k = 0; k<temp_genre.length;k++) {
        var random = Math.floor(Math.random() * data.song.length);

        while (data.song[random].genre != temp_genre[k]) {
            random = Math.floor(Math.random() * data.song.length);

            if (data.song[random].genre == temp_genre[k]) {
                temp_song.push(data.song[random].track_name)
            }
        }
    }

    var h;
    for(h = 0; h < temp_song.length; h++){
        const title = document.createElement('text_display')
        title.textContent = temp_song[h]
        title.onclick = function(){
            var children = confirm("Add " + title.textContent + " to the playlist?")
            if (children == true){
                temp_array = JSON.parse(localStorage.getItem('list_info'))
                temp_array.push(title.textContent)
                localStorage.setItem('list_info',JSON.stringify(temp_array))
            }
        }
        card.appendChild(title)
    }
    container.appendChild(card)

}
request.send();




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