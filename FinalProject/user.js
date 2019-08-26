var obj = JSON.parse(localStorage.getItem('user_search_info')).search_user_name;

const app = document.getElementById('root')
const container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://api.myjson.com/bins/112doq', true);
request.onload = function () {
    var data = JSON.parse(this.response);
    var i;
    for(i = 0; i< data.user.length; i++){

        if(data.user[i].username.toUpperCase().includes(obj.toUpperCase())){

            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            const user_name = document.createElement('header')
            user_name.textContent = data.user[i].username

            const birth = document.createElement("text_display")
            birth.textContent = "Birthday: " + data.user[i].birthday

            const email = document.createElement("text_display")
            email.textContent = "Email: " + data.user[i].email

            const follow = document.createElement("text_display")
            follow.textContent = "Follow User"
            follow.onclick = function(){
                var children = confirm("Do you want to follow " + user_name.textContent + " ?")
                if(children == true){
                    temp_array1 = JSON.parse(localStorage.getItem('user_information'))
                    temp_array1.push(user_name.textContent)
                    localStorage.setItem('user_information',JSON.stringify(temp_array1))
                    alert("You have followed " + user_name.textContent )
                }

            }
            card.appendChild(user_name)
            card.appendChild(birth)
            card.appendChild(email)
            card.appendChild(follow)
            container.appendChild(card);
        }
    }
}
request.send()