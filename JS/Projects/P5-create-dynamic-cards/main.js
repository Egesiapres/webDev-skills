const cards = [
  {
    url: 'https://images.pexels.com/photos/17504536/pexels-photo-17504536.jpeg',
    alt: 'tattoed-girl-in-a-minimarket',
    title: 'Goth girl',
    text: 'A beautiful tattoed girl posing in a minimarket',
  },
  {
    url: 'https://images.pexels.com/photos/14786701/pexels-photo-14786701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'boy-with-exotic-hat-hidden-behind-flowers',
    title: 'Mysterious boy',
    text: "A boy with an exotic hat, hidding behind a flowers' bouquet and staring",
  },
  {
    url: 'https://images.pexels.com/photos/3098970/pexels-photo-3098970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'man-in-sub-suit-exploring-the-abyss',
    title: 'Underwater man',
    text: 'A man in sub suit whose exploring the abyss with a torch',
  },
];

const container = document.getElementById('container');

const card = document.getElementById('card');
const cardClass = card.getAttribute('class');

const cardContent = document.getElementById('card-content');
const cardContentClass = cardContent.getAttribute('class');

const img = document.querySelector('img');
const imgClass = img.getAttribute('class');

const description = document.getElementById('description');
const descriptionClass = description.getAttribute('class');

const head3 = document.querySelector('h3');
const head3Class = head3.getAttribute('class');

const par = document.querySelector('p');
const parClass = par.getAttribute('class');

cards.forEach(({ url, alt, title, text }) => {
  const newCard = document.createElement('div');
  newCard.setAttribute('class', cardClass);
  container.appendChild(newCard);

  const newCardContent = document.createElement('div');
  newCardContent.setAttribute('class', cardContentClass);
  newCard.appendChild(newCardContent);

  const newImg = document.createElement('img');
  newImg.setAttribute('class', imgClass);
  newImg.setAttribute('src', url);
  newImg.setAttribute('alt', alt);
  newCardContent.appendChild(newImg);

  const newDescription = document.createElement('div');
  newDescription.setAttribute('class', descriptionClass);
  newCardContent.appendChild(newDescription);

  const newHead3 = document.createElement('h3');
  newHead3.setAttribute('class', head3Class);
  newHead3.textContent = title;
  newDescription.appendChild(newHead3);

  const newPar = document.createElement('p');
  newPar.setAttribute('class', parClass);
  newPar.textContent = text;
  newDescription.appendChild(newPar);
});
