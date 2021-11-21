// alert('che minchia guaddi');
// Ricreiamo le card del nostro team aggiungendo al layout di base fornito, il nostro javascript in cui:
// Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Prendendo come riferimento il layout di esempio presente nell'html, stampiamo tutte le card del nostro team.
// BONUS: Utilizziamo poi gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team.



members = [
    {
        'name': "Wayne Barnett",
        'role': "Founder & CEO",
        'img': "img/wayne-barnett-founder-ceo.jpg",
    },
    {
        'name': "Angela Caroll",
        'role': "Cheif Editor",
        'img': "img/angela-caroll-chief-editor.jpg",
    },
    {
        'name': "Walter Gordon",
        'role': "Office Manager",
        'img': "img/walter-gordon-office-manager.jpg",
    },
    {
        'name': "Angela Lopez",
        'role': "Social Media Manager",
        'img': "img/angela-lopez-social-media-manager.jpg",
    },
    {
        'name': "Scott Estrada",
        'role': "Developer",
        'img': "img/scott-estrada-developer.jpg",
    },
    {
        'name': "Barabara Ramos",
        'role': "Graphic Desiner",
        'img': "img/barbara-ramos-graphic-designer.jpg",
    },
];

let items; 

const container = document.querySelector('.team-container');
// console.log(container);

for (let i = 0; i < members.length; i++){
   
   items =`
   <div class="team-card">
        <div class="card-image">
            <img src=${members[i].img} alt=${members[i].name}>
        </div>
        <div class="card-text">
            <h3>${members[i].name}</h3>
            <p>${members[i].role}</p>
        </div>
    </div>
   `
    // console.log(items);
    container.innerHTML += items;
}


const addButton = document.getElementById('addMemberButton');
// console.log(addButton);
addButton.addEventListener('click', function(){
    let newName = document.getElementById('name').value;
    let newRole = document.getElementById('role').value;
    let newImage = document.getElementById('image').value;

    const newMember = {
        'name': newName,
        'role': newRole,
        'img': newImage,
    }

    members.push(newMember);


    items =`
    <div class="team-card">
         <div class="card-image">
             <img src=${newMember.img} alt=${newMember.name}>
         </div>
         <div class="card-text">
             <h3>${newMember.name}</h3>
             <p>${newMember.role}</p>
         </div>
     </div>
    `
    console.log(items);
    container.innerHTML += items;

});    