
//cite: I learn how to get data from API from this page: https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/
var obj = JSON.parse(localStorage.getItem('search_info')).song_name;
//alert(obj)
const app = document.getElementById('root')
const container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(container);
var request = new XMLHttpRequest();
request.open('GET', 'https://api.myjson.com/bins/e7aii', true);
request.onload = function () {
    var data = JSON.parse(this.response);
    var i;
    for(i = 0; i<data.song.length;i++){
        if ((data.song[i].track_name).toUpperCase().includes((obj).toUpperCase())){
                const card = document.createElement('div');
                card.setAttribute('class', 'card');
                const logo = document.createElement('img')
                logo.src = data.song[i].image
                const header = document.createElement('header');
                header.textContent = data.song[i].track_name;

                var preview = new Audio()
                preview.controls = true;
                preview.src = data.song[i].preview

                const artist = document.createElement("text_display")
                artist.textContent = "Artist: " + data.song[i].artist


                const year = document.createElement('text_display');
                year.textContent = "Relase Date: " + data.song[i].data

                const genre = document.createElement('text_display')
                genre.textContent = "Genre: " + data.song[i].genre

                const album = document.createElement("text_display")
                album.textContent = "Album: " + data.song[i].album


                var test = document.createElement("text_display2")
                test.style.borderBottomColor = "black"
                test.textContent = "Add to Playlist"
                test.onclick = function(){
                    //alert(header.textContent)
                    var children = confirm("Add " + header.textContent + " to playlist?")
                    if (children == true){
                        temp_array = JSON.parse(localStorage.getItem('list_info'))
                        temp_array.push(header.textContent)
                        localStorage.setItem('list_info',JSON.stringify(temp_array))
                    }

                }


                card.appendChild(header);
                card.appendChild(logo)
                card.appendChild(preview)

                card.appendChild(artist)
                card.appendChild(year)
                card.appendChild(genre)
                card.appendChild(album)
                card.appendChild(test)

                container.appendChild(card);
        }
    }
  }
  request.send();

