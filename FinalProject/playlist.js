temp = JSON.parse(localStorage.getItem('list_info'))

const app = document.getElementById('root')
const container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(container);

var i
for(i=0;i<temp.length;i++){

    const card = document.createElement('div');
    card.setAttribute('class', 'card');
    const track_name = document.createElement("header")
    track_name.textContent = temp[i]

    const delete_button = document.createElement("text_display")
    delete_button.textContent = "Delete Song"
    delete_button.onclick = function(){
        var delete_list = confirm("Delete " + track_name.textContent + " from playlist?")
        if (delete_list == true){
             var j;
             for(j=0; j<i;j++){
                 if(temp[j] == track_name.textContent){
                     temp1 = temp.slice(0,j)
                     //alert(temp1)
                     temp2 = temp.slice(j+1,i)
                     //alert(temp2)
                     var children = temp1.concat(temp2)
                     alert("Delete successfully")
                     localStorage.setItem('list_info',JSON.stringify(children))
                     location.replace("http://localhost:63342/FinalProject/list_result.html?_ijt=lkqh3ldpd29559g8lcgnqioi91")

                 }
             }
         }
         else{
             alert("Delete Failed")
        }

    }

    const play_button = document.createElement("text_display2")
    play_button.textContent = "Play Song"
    play_button.onclick = function(){
         var children = confirm("Do you want to play " + track_name.textContent + " ?")
             if(children == true){
                 var request = new XMLHttpRequest();
                 request.open('GET', 'https://api.myjson.com/bins/e7aii', true);
                 request.onload = function () {
                     var data = JSON.parse(this.response);
                     var i;
                     for(i=0;i<data.song.length;i++){
                         if(data.song[i].track_name == track_name.textContent){
                             //temp_genre = []
                             //temp_genre.push(data.song[i].genre)
                             //localStorage.setItem("playlist_genre",JSON.stringify(temp_genre))
                             var preview = new Audio()
                             preview.controls = true;
                             preview.src = data.song[i].preview
                             card.appendChild(preview)
                             break;
                         }
                     }

                 }
                 request.send();
             }
         }





    card.appendChild(track_name)
    card.appendChild(delete_button)
    card.appendChild(play_button)
    container.appendChild(card)

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
