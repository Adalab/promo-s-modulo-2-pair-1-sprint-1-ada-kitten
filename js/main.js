'use strict'

const plus=document.querySelector(".js-fa-plus-circle");

const kittenOneImage = 'https://dev.adalab.es/gato-siames.webp';
const kittenOneName = 'Anastacio';
const kittenOneDesc = 'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenOneRace = 'Siamés';

const kittenTwoImage = 'https://dev.adalab.es/sphynx-gato.webp';
const kittenTwoName = 'Fiona';
const kittenTwoDesc = 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.';
const kittenTwoRace = 'Sphynx';

const kittenThreeImage = 'https://dev.adalab.es/maine-coon-cat.webp';
const kittenThreeName = 'Cielo';
const kittenThreeDesc = 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.';
const kittenThreeRace = 'Maine Coon';

const form=document.querySelector('.js-new-form');
function showNewCatForm() {
  form.classList.remove('collapsed');
}
function hideNewCatForm() {
  form.classList.add('collapsed');
}
function handleClickNewCatForm (ev){
  ev.preventDefault();
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  const valueRace = inputRace.value;
  const valueDesc = inputDesc.value;

  if (valueDesc === '' || valuePhoto === '' || valueName === '' || valueRace === '') {
    label.innerHTML = '¡Uy! parece que has olvidado algo';
  } else {
    //completa el código
  }
}
plus.addEventListener("click", (event)=>{
  event.preventDefault();
  if (form.classList.contains('collapsed')) {
    showNewCatForm ();
    //form.classList.remove("collapsed");
  } else {
    //form.classList.add("collapsed");
    hideNewCatForm ();
  }
})



const btnAdd = document.querySelector('.js-btn-add');
btnAdd.addEventListener ('click', handleClickNewCatForm);
  


const cancel = document.querySelector('.js-button-cancel');
cancel.addEventListener("click", (event)=>{
  event.preventDefault();
    inputPhoto.value = ('');
    inputName.value = ('');
    inputRace.value = ('');
    inputDesc.value = ('');

    form.classList.add("collapsed");
  
})

const inputPhoto = document.querySelector ('.js-input-photo');
const inputName = document.querySelector ('.js-input-name');
const inputRace = document.querySelector ('.js-input-race');
const inputDesc = document.querySelector ('.js-input-desc');
const label = document.querySelector ('.js-label-error');

const list=document.querySelector(".js-list")
//const kittenOne=document.querySelector("card")

const renderOneKitten = (kitten) =>{
  return `<li class="card">
  <article>
    <img
      class="card_img"
      src="${kittenOneImage}"
      alt="siames-cat"
    />
    <h3 class="card_title">${kittenOneName}</h3>
    <h4 class="card_race">${kittenOneRace}</h4>
    <p class="card_description">${kittenOneDesc}</p>
  </article>
</li>`;
}
const renderTwoKitten = (kitten) =>{
  return   `<li class="card">
  <img
    class="card_img"
    src="${kittenTwoImage}"
    alt="sphynx-cat"/>
  <h3 class="card_title">${kittenTwoName}</h3>
  <h4 class="card_race">${kittenTwoRace}</h4>
  <p class="card_description">${kittenTwoDesc}</p>
  </li>`;
}
const renderThreeKitten = (kitten) =>{
  return `<li class="card">
  <img
    class="card_img"
    src="${kittenThreeImage}"
    alt="maine-coon-cat"
  />
  <h3 class="card_title">${kittenThreeName}</h3>
  <h4 class="card_race">${kittenThreeRace}</h4>
  <p class="card_description">${kittenThreeDesc}</p>
  </li>`;  
}

// const kittenOne = `<li class="card">
//             <article>
//               <img
//                 class="card_img"
//                 src="${kittenOneImage}"
//                 alt="siames-cat"
//               />
//               <h3 class="card_title">${kittenOneName}</h3>
//               <h4 class="card_race">${kittenOneRace}</h4>
//               <p class="card_description">${kittenOneDesc}</p>
//             </article>
          
//           </li>`;


// const kittenTwo = `<li class="card">
//               <img
//                 class="card_img"
//                 src="${kittenTwoImage}"
//                 alt="sphynx-cat"/>
//               <h3 class="card_title">${kittenTwoName}</h3>
//               <h4 class="card_race">${kittenTwoRace}</h4>
//               <p class="card_description">${kittenTwoDesc}</p>
//               </li>`;

// const kittenThree = `<li class="card">
//                 <img
//                   class="card_img"
//                   src="${kittenThreeImage}"
//                   alt="maine-coon-cat"
//                 />
//                 <h3 class="card_title">${kittenThreeName}</h3>
//                 <h4 class="card_race">${kittenThreeRace}</h4>
//                 <p class="card_description">${kittenThreeDesc}</p>
//                 </li>`;

const input_search_desc = document.querySelector('.js_in_search_desc');
const descrSearchText = input_search_desc.value;
if( kittenOneDesc.includes(descrSearchText) ) {
  list.innerHTML=kittenOne;
  }
  
if( kittenTwoDesc.includes(descrSearchText) ) {
  list.innerHTML+=kittenTwo;
}

if( kittenThreeDesc.includes(descrSearchText) ) {
  list.innerHTML+=kittenThree;
}
