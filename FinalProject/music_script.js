
//cite: I learn how to get data from API from this page: https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/

var obj = JSON.parse(localStorage.getItem('search_info')).artist_name;
const app = document.getElementById('root')
const container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(container);
var request = new XMLHttpRequest();
request.open('GET', 'https://api.myjson.com/bins/wnem6', true);
request.onload = function () {
    var data = JSON.parse(this.response);
    var i;
    for(i = 0; i<data.artist.length;i++){
        if ((data.artist[i].name).toUpperCase().includes(obj.toUpperCase())){
                const card = document.createElement('div');
                card.setAttribute('class', 'card');
                const logo = document.createElement('img')
                logo.src = data.artist[i].image
                const header = document.createElement('header');
                header.textContent = data.artist[i].album;

                const year = document.createElement('text_display');
                year.textContent = "Relase Date " + data.artist[i].year

                const genre = document.createElement('text_display')
                genre.textContent = "Genre: " + data.artist[i].genre
                card.appendChild(header);
                card.appendChild(logo)
                card.appendChild(year)
                card.appendChild(genre)
                var j
                for(j = 0; j<5;j++){
                    const songs = document.createElement('text_display')
                    songs.textContent = data.artist[i].song[j]
                    card.appendChild(songs)
                }
                container.appendChild(card);
        }
    }
  }
  request.send();

