//cite: I learn how to get data from API from this page: https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/

var obj = JSON.parse(localStorage.getItem('video_search_info')).video_name;
const app = document.getElementById('root')
const container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(container);
var request = new XMLHttpRequest();
request.open('GET', 'https://api.myjson.com/bins/1ftzq6', true);
request.onload = function () {
    var data = JSON.parse(this.response);
    var i;
    for(i = 0; i<data.video.length;i++){
        if ((data.video[i].name).toUpperCase().includes(obj.toUpperCase())){
                //alert(data.video[i].collection_name)
                const card = document.createElement('div');
                card.setAttribute('class', 'card');

                //const logo = document.createElement('img')
                //logo.src = data.video[i].image

                const header = document.createElement('header')
                header.textContent = data.video[i].collection_name

                const year = document.createElement('text_display')
                year.textContent = "Release Date: " + data.video[i].year

                //const video_type = document.createElement('text_display')
                //video_type.textContent = data.video[i].type

                //const name = document.createElement('text_display')
                //name.textContent = "Track name: " + data.video[i].name

                const preview = document.createElement('iframe')
                preview.src = data.video[i].preview_link

                //card.appendChild(logo)
                card.appendChild(header)
                //card.appendChild(name)
                card.appendChild(year)
                card.appendChild(preview)


                container.appendChild(card);
        }
    }
  }
  request.send();

