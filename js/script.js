// Seleciona os elementos da página
const paginationSlider = document.querySelector('.pagination');
const prevButton = paginationSlider.querySelector('.prev');
const nextButton = paginationSlider.querySelector('.next');
const displayCounter = paginationSlider.querySelector('.counter');
const displayLimit = paginationSlider.querySelector('.limit');
const imageProject = document.querySelector(
	'.project > .image-container > img'
);
const linkRepository = document.querySelector(
	'.project > .image-container .repository'
);

const linkDeploy = document.querySelector(
	'.project > .image-container .deploy'
);

const projectTitle = document.querySelector('.project-title');
const projectTech = document.querySelector('.project-tech');
const projectDescription = document.querySelector('.project-description');

// Define o array de projetos
const projects = [
	{
		img: '../assets/project1.png',
		repository: 'https://github.com/willy4nn/My-Portfolio',
		deploy: 'https://willy4nn.github.io/Web-X/',
		title: 'Web-X',
		tech: 'HTML, CSS, JavaScript',
		description:
			'Projeto básico focado no aprimoramento de habilidades em HTML, CSS e JavaScript, com ênfase em boas práticas de desenvolvimento responsivo.',
	},
];

// Define o limite máximo da paginação
const limit = projects.length;

// Inicializa o contador com base
let counter = 1;

// Adiciona evento de clique no botão "próximo"
nextButton.addEventListener('click', () => {
	incrementCounter();
});

// Adiciona evento de clique no botão "anterior"
prevButton.addEventListener('click', () => {
	decreaseCounter();
});

// Incrementa o contador, garantindo que não exceda o limite
function incrementCounter() {
	counter++;
	if (counter > limit) {
		counter = 1; // Reinicia o contador se passar do limite
	}
	updateProjectDisplay(); // Atualiza a exibição do projeto
}

// Decrementa o contador, garantindo que não fique abaixo de 1
function decreaseCounter() {
	counter--;
	if (counter < 1) {
		counter = limit; // Reinicia o contador para o último item se ficar abaixo de 1
	}
	updateProjectDisplay(); // Atualiza a exibição do projeto
}

// Atualiza a exibição do projeto atual na interface com transição suave
function updateProjectDisplay() {
	// Remove a classe 'visible' para iniciar o fade-out
	imageProject.classList.remove('visible');

	// Aguardar o fade-out antes de trocar a imagem
	setTimeout(() => {
		displayCounter.innerText = counter;
		displayLimit.innerText = limit;
		imageProject.src = projects[counter - 1].img;
		linkRepository.href = projects[counter - 1].repository;
		linkDeploy.href = projects[counter - 1].deploy;

		projectTitle.innerText = projects[counter - 1].title;
		projectTech.innerText = projects[counter - 1].tech;
		projectDescription.innerText = projects[counter - 1].description;

		// Adiciona a classe 'visible' para fazer o fade-in
		imageProject.classList.add('visible');
	}, 300); // Tempo para o fade-out (meio segundo)
}

// Chama a função para exibir o primeiro projeto ao carregar a página
updateProjectDisplay();
