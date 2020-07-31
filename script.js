/* *** Usuarios *** */
const users = [{
     name: "Mario",
     gender: 'M',
     hobby: 'pets',
     avatar: 'avatar_1.png'
}, 
{
     name: "Lucy",
     gender: 'F',
     hobby: 'books',
     avatar: 'avatar_2.png'
},
{
     name: "Ariana",
     gender: 'F',
     hobby: 'programing',
     avatar: 'avatar_3.png'
},
{
     name: "Tulio",
     gender: 'M',
     hobby: 'cosplay',
     avatar: 'avatar_4.png'
},
{
     name: "Melisa",
     gender: 'F',
     hobby: 'cook',
     avatar: 'avatar_5.png'
},
{
     name: "Roberto",
     gender: 'M',
     hobby: 'music',
     avatar: 'avatar_6.png'
},
{
     name: "Darwin",
     gender: 'M',
     hobby: 'watch movies',
     avatar: 'avatar_7.png'
},
{
     name: "Sky",
     gender: 'F',
     hobby: "watch youtube's videos",
     avatar: 'avatar_8.png'
},
{
     name: "Louis",
     gender: 'M',
     hobby: 'cats',
     avatar: 'avatar_9.png'
}]

window.addEventListener('load', function () {

     function search() {
          results.innerHTML = 'hola';

          //Get Hobby
          let hobbyField = document.getElementById('hobby');
          let hobby = hobbyField.value;
          console.log(hobby)

          //Get Gender
          let genderField = document.getElementById('gender');
          let selected = genderField.selectedIndex
          let gender = genderField.options[selected].value;


          let resultsHTML = '';
          let numUsers = users.length;

          for (let i = 0; i < numUsers; i++) {

               if (gender === 'A' || gender == users[i].gender) {
                    if (hobby == '' || hobby == users[i].hobby) {

                         resultsHTML += '<div class="person-row">\
               <img src="imagenes/' + users[i].avatar + '" />\
               <div class="person-info">\
                    <div>' + users[i].name + '</div>\
                    <div>' + users[i].hobby + ' </div>\
               </div>\
               <button>Add as friend</button> '
                    }
               }
          }

          results.innerHTML = resultsHTML;
     };

     let results = document.getElementById('results');
     let searchBtn = document.getElementById('searchBtn');

     searchBtn.addEventListener('click', search);
});