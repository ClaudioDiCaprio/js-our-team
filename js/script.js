// alert('che minchia guaddi');




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