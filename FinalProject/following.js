const app = document.getElementById('root')
const container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(container);
const card = document.createElement('div');
card.setAttribute('class', 'card');
const header = document.createElement('header');
header.textContent = "Following"
card.appendChild(header)
container.appendChild(card);

var i
user_temp = JSON.parse(localStorage.getItem('user_information'))
for(i = 0; i< user_temp.length;i++){
    const user_name = document.createElement("text_display")
    user_name.textContent = user_temp[i]
    user_name.onclick = function(){
        var unfollow = confirm("Unfollow " + user_name.textContent + " ?")
        if(unfollow == true){
            var j
            for(j = 0; j< user_temp.length;j++){
                if(user_temp[j] == user_name.textContent){
                    temp1 = user_temp.slice(0,j)
                    temp2 = user_temp.slice(j+1,i)
                    //alert(temp1)
                    //alert(temp2)
                    var new_user_temp = temp1.concat(temp2)
                    //alert(new_user_temp)
                    localStorage.setItem('user_information',JSON.stringify(new_user_temp))
                    location.replace("http://localhost:63342/FinalProject/following.html?_ijt=8inkminau4bmniv2enbra47cek")
                    alert("You unfollowed " + user_name.textContent)
                }
            }
        }
    }
    card.appendChild(user_name)
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