const projectsContainer = document.getElementById('projectsContainer');
const articlesContainer = document.getElementById('articlesContainer');
const otherContainer = document.getElementById('otherContainer');

const projects = [
  {
    image: 'img/project-1.png',
    name: 'Design company website',
    link: 'https://vsafonova.github.io/Portfolio/SkillFactory/Project%20Lending/',
    description:
    'The straightforward design company website. It"s responsive so it looks good on a laptop and smartphone',
    tags: ['HTML', 'CSS', 'JavaScript']
  },
];

const otherProjects = [
  {
    name: 'Psychology',
    description:
      'There is no limit to perfection in self-development, since self-development lasts our whole life. My true path to myself began in 2019, when I became interested in psychological knowledge. Since then, I have come to a harmonious relationship with myself and with the people around me.',
    tags: ['Psychology', 'Self-development', 'Soft-skills', 'Self-awareness', 'Psychotherapy'],
  },
  {
    name: 'Travels',
    description:
      'For me, travel is about self-development. I love discovering new places on our amazing planet and getting to know new cultures.',
    tags: ['Travels', 'Nature', 'Beautiful planet', 'Discovery new places', 'Culture'],
  },
];

const articles = [
  {
    image: 'img/article1.jpg',
    title: 'The cat-and-mouse experience of Proton, a Swiss company, shows what it"s like to be targeted by Russian censors — and what it takes to fight back.',
    link: 'https://www.nytimes.com/2022/12/06/technology/russia-internet-proton-vpn.html',
    description:
      'The New York Times article about VPN in Russia where my partner and I were mentioned',
  },
];

projects.forEach((item) => {
  projectsContainer.innerHTML += `
  <a href=${item.link} rel="noopener" target="_blank">
  <div class="card">
    <div class="image-container" style="background-image: url('')">
      <img src="${item.image}"/>
    </div>
    <div class="card-text">
      <h2>${item.name}</h2>
      <p>
      ${item.description}
        <span class="arrow-link">>></span>
      </p>
    </div>
    <div class="tags-container" id="tags">
      ${item.tags.map((tag) => `<span class="tags">${tag}</span>`).join('')}
    </div>
  </div>
</a>
  `;
});

otherProjects.forEach((item) => {
  otherContainer.innerHTML += `
  <div class="content-container">
    <h2>${item.name}</h2>
    <p> ${item.description}</p>
  </div>
  <div class="other-tags-container">
  ${item.tags.map((tag) => `<span class="tags">${tag}</span>`).join('')}
  </div>
  `;
});

articles.forEach((item) => {
  articlesContainer.innerHTML += `
  <a class="card" href=${item.link} rel="noopener" target="_blank">
  <div class="image-container">
    <img class="image" src=${item.image} alt="code-article"/>
  </div>
  <div class="card-text">
    <h2>${item.title}</h2>
    <p>
    ${item.description}
      <span class="arrow-link">>></span>
    </p>
  </div>
</a>
  `;
});
