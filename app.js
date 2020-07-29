let scoreDisplay = document.querySelector("#score");
let scoreDiv = document.querySelector("#score-display");
let score = 0;
let gameStartDiv = document.querySelector("#game-start");
let gameTitle = document.querySelector("#game-start-title");
let gameInstructionsA = document.querySelector("#game-start-p1");
let gameInstructionsB = document.querySelector("#game-start-p2");
let playButton = document.querySelector("#start");
let skipButton = document.querySelector("#skip");
let skipTheGame = document.querySelector("#game-button-skip");
let gameMessage = document.querySelector(".game-message");
let gameMessageText = document.querySelector("#game-message-text");
let gameMessageDiv = document.querySelector("#game-message-div");
let project = document.querySelector("#project-div");
let projectTitle = document.querySelector("#project-title");
let projectImg = document.querySelector("#project-img");
let projectDescription = document.querySelector("#project-description");
let visitButton = document.querySelector(".visit-button");
let closeProject = document.querySelector("#close-project");
let restartButton = document.querySelector("#restart-button");
let knowMoreButton = document.querySelector("#know-more-button");
let projectIsShown = false;

// DRAW THE GRID
const GRID = document.querySelector(".grid");
const GRID_WIDTH = 56;
const GRID_LAYOUT = [				//1569 blocs
	1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
	1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,3,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,
	1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,
	1,0,1,3,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,4,4,4,4,4,4,1,0,1,
	1,0,1,0,1,0,1,1,1,0,0,0,1,4,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,4,1,0,1,
	1,0,0,0,1,0,0,0,1,0,1,0,1,4,1,0,0,0,1,3,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,4,1,0,1,
	1,0,1,0,1,0,1,0,0,0,0,0,1,4,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,
	1,0,1,0,0,0,1,1,0,1,1,0,1,4,4,4,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,
	1,0,1,0,1,0,1,0,0,0,1,0,1,4,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,2,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,
	1,0,1,0,1,0,0,0,1,0,0,0,1,4,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,5,2,5,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,
	1,0,0,0,0,0,1,1,1,0,1,0,1,4,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,5,2,5,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,
	1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,2,2,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,
	1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,5,2,2,5,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
	1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,2,2,2,2,2,2,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1, // Middle
	1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,2,2,2,2,2,2,0,1,0,0,0,0,1,3,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1, // Middle
	1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,5,2,2,5,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,
	1,6,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,2,2,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,3,1,0,1,
	1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,
	1,0,0,0,0,0,0,1,4,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,
	1,0,1,1,0,1,1,1,4,1,1,1,0,0,0,0,0,0,1,1,1,3,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,4,1,0,1,1,1,0,0,0,1,0,1,0,1,
	1,0,1,0,0,1,4,4,4,4,4,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,4,1,0,0,0,0,0,1,0,0,0,1,0,1,
	1,0,1,1,0,1,1,1,4,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,4,1,1,1,1,0,0,0,0,1,0,1,0,1,
	1,0,0,0,0,0,0,1,4,1,0,0,0,1,1,0,1,1,0,1,5,5,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,4,4,4,4,4,1,0,1,1,0,1,0,1,0,1,
	1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,2,2,2,2,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,
	1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,5,5,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,3,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,
	1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,
	1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,
	1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
]; // 0 = dot ; 1 = wall ; 2 = bug-lair ; 3 = project ; 4 = empty ; 5 = bug-lair-block;
const SQUARES = [];


// CREATE THE BOARD
function createBoard() {
	for (let i = 0; i < GRID_LAYOUT.length; i++) {
		const SQUARE = document.createElement("div");
		GRID.appendChild(SQUARE);
		SQUARES.push(SQUARE);
		
		// Layout
		if (GRID_LAYOUT[i] === 0) {
			SQUARES[i].classList.add("dot");
		}
		if (GRID_LAYOUT[i] === 1) {
			SQUARES[i].classList.add("wall");
		}
		if (GRID_LAYOUT[i] === 2) {
			SQUARES[i].classList.add("bug-lair");
		}
		if (GRID_LAYOUT[i] === 3) {
			SQUARES[i].classList.add("project");
		}
		if (GRID_LAYOUT[i] === 4) {
			SQUARES[i].classList.add("empty");
		}
		if (GRID_LAYOUT[i] === 5) {
			SQUARES[i].classList.add("bug-lair-block");
		}
		if (GRID_LAYOUT[i] === 6) {
			SQUARES[i].classList.add("start");
		}
	}
}
createBoard();


// STARTING POSITION OF MARGAUX
let margauxCurrentIndex = 897; 
SQUARES[margauxCurrentIndex].classList.add("lil-margaux");


// CREATE THE BUGS
class Bug {
	constructor (className, startIndex, speed) {
		this.className = className;
		this.startIndex = startIndex;
		this.speed = speed;
		this.isScared = false;
		this.timerID = NaN;
		this.currentIndex = startIndex;
	}
}

const bugs = [
	new Bug("bug1", 541, 180),
	new Bug("bug2", 598, 170),
	new Bug("bug3", 543, 210),
	new Bug("bug4", 698, 200),
	new Bug("bug6", 757, 220),
	new Bug("bug8", 812, 190),
	new Bug("bug9", 867, 220),
	new Bug("bug10", 869, 250),
	new Bug("bug11", 1252, 210),
	new Bug("bug12", 1309, 170),
	new Bug("bug13", 1364, 180)
];


//DRAW THE BUGS
bugs.forEach(bug => {
	SQUARES[bug.currentIndex].classList.add(bug.className);
	SQUARES[bug.currentIndex].classList.add("bug");
});



////////////////////////////////     START THE GAME     /////////////////////////////////
function gameOn () {
	
	gameStartDiv.style.display = "none";
	scoreDiv.style.display = "flex";
	skipTheGame.style.display = "flex";
	
	// MOVE THE MARGAUX
	function moveMargaux (e) {
		if (!projectIsShown) {
			SQUARES[margauxCurrentIndex].classList.remove("lil-margaux");
			switch (e.keyCode) {
				case 37:
					//Move left
					if (margauxCurrentIndex % GRID_WIDTH !== 0 && !SQUARES[margauxCurrentIndex - 1].classList.contains("wall") && !SQUARES[margauxCurrentIndex - 1].classList.contains("bug-lair") && !SQUARES[margauxCurrentIndex - 1].classList.contains("bug-lair-block")) {
						margauxCurrentIndex -= 1;
						document.documentElement.style.setProperty("--img", "url(\"images/persoSide1.png\")");
						document.documentElement.style.setProperty("--img2", "url(\"images/persoSide2.png\")");
						document.documentElement.style.setProperty("--rot", "scaleX(1)");
					}
					break;
				case 38:
					// Move up
					if (margauxCurrentIndex - GRID_WIDTH >= 0 && !SQUARES[margauxCurrentIndex - GRID_WIDTH].classList.contains("wall") && !SQUARES[margauxCurrentIndex - GRID_WIDTH].classList.contains("bug-lair") && !SQUARES[margauxCurrentIndex - 1].classList.contains("bug-lair-block")) {
						margauxCurrentIndex -= GRID_WIDTH;
						document.documentElement.style.setProperty("--img", "url(\"images/persoBottom.png\")");
						document.documentElement.style.setProperty("--img2", "url(\"images/persoBottom.png\")");
					}
					break;
				case 39:
					// Move right
					if (margauxCurrentIndex % GRID_WIDTH < GRID_WIDTH - 1 && !SQUARES[margauxCurrentIndex + 1].classList.contains("wall") && !SQUARES[margauxCurrentIndex].classList.contains("bug-lair") && !SQUARES[margauxCurrentIndex - 1].classList.contains("bug-lair-block")) {
						margauxCurrentIndex += 1;
						document.documentElement.style.setProperty("--img", "url(\"images/persoSide1.png\")");
						document.documentElement.style.setProperty("--img2", "url(\"images/persoSide2.png\")");
						document.documentElement.style.setProperty("--rot", "scaleX(-1)");
					}
					break;
				case 40:
					// Move down
					if (margauxCurrentIndex + GRID_WIDTH < GRID_WIDTH * GRID_WIDTH && !SQUARES[margauxCurrentIndex + GRID_WIDTH].classList.contains("wall") && !SQUARES[margauxCurrentIndex + GRID_WIDTH].classList.contains("bug-lair") && !SQUARES[margauxCurrentIndex - 1].classList.contains("bug-lair-block")) {
						margauxCurrentIndex += GRID_WIDTH;
						document.documentElement.style.setProperty("--img", "url(\"images/persoFace.png\")");
						document.documentElement.style.setProperty("--img2", "url(\"images/persoFace.png\")");
					}
					break;
			}

			SQUARES[margauxCurrentIndex].classList.add("lil-margaux");

			bugs.forEach(bug => {
				if (SQUARES[bug.currentIndex].classList.contains("lil-margaux") && bug.isScared) {
					SQUARES[bug.currentIndex].classList.remove(bug.className, "bug", "scared-bug");
					bug.currentIndex = bug.startIndex;
					score += 100;
					scoreDisplay.innerHTML = score;
					SQUARES[bug.currentIndex].classList.add(bug.className, "bug");
				}
			})


			dotEaten();
			projectEaten();
			checkForGameOver();
			checkForVictory();
		}
	}

	// MOVE THE MARGAUX ON TACTILE DEVICES
	let initialX = null;
	let initialY = null;

	function startTouch (e) {
		initialX = e.touches[0].clientX;
		initialY = e.touches[0].clientY;
	}

	function moveTouch (e) {
		if (initialX === null) return;
		if (initialY === null) return;

		let currentX = e.touches[0].clientX;
		let currentY = e.touches[0].clientY;
		let diffX = initialX - currentX;
		let diffY = initialY - currentY;

		if (!projectIsShown) {
			SQUARES[margauxCurrentIndex].classList.remove("lil-margaux");

			if (Math.abs(diffX) > Math.abs(diffY)) {
				if (diffX > 0) {
					// Swipe left
					if (margauxCurrentIndex % GRID_WIDTH !== 0 && !SQUARES[margauxCurrentIndex - 1].classList.contains("wall") && !SQUARES[margauxCurrentIndex - 1].classList.contains("bug-lair") && !SQUARES[margauxCurrentIndex - 1].classList.contains("bug-lair-block")) {
						margauxCurrentIndex -= 1;
						document.documentElement.style.setProperty("--img", "url(\"images/persoSide1.png\")");
						document.documentElement.style.setProperty("--img2", "url(\"images/persoSide2.png\")");
						document.documentElement.style.setProperty("--rot", "scaleX(1)");
					}
				} else {
					// Swipe right
					if (margauxCurrentIndex % GRID_WIDTH < GRID_WIDTH - 1 && !SQUARES[margauxCurrentIndex + 1].classList.contains("wall") && !SQUARES[margauxCurrentIndex].classList.contains("bug-lair") && !SQUARES[margauxCurrentIndex - 1].classList.contains("bug-lair-block")) {
						margauxCurrentIndex += 1;
						document.documentElement.style.setProperty("--img", "url(\"images/persoSide1.png\")");
						document.documentElement.style.setProperty("--img2", "url(\"images/persoSide2.png\")");
						document.documentElement.style.setProperty("--rot", "scaleX(-1)");
					}
				}
			} else {
				if (diffY > 0) {
					// Swipe Up
					if (margauxCurrentIndex - GRID_WIDTH >= 0 && !SQUARES[margauxCurrentIndex - GRID_WIDTH].classList.contains("wall") && !SQUARES[margauxCurrentIndex - GRID_WIDTH].classList.contains("bug-lair") && !SQUARES[margauxCurrentIndex - 1].classList.contains("bug-lair-block")) {
						margauxCurrentIndex -= GRID_WIDTH;
						document.documentElement.style.setProperty("--img", "url(\"images/persoBottom.png\")");
						document.documentElement.style.setProperty("--img2", "url(\"images/persoBottom.png\")");
					}
				} else {
					// Swipe down
					if (margauxCurrentIndex + GRID_WIDTH < GRID_WIDTH * GRID_WIDTH && !SQUARES[margauxCurrentIndex + GRID_WIDTH].classList.contains("wall") && !SQUARES[margauxCurrentIndex + GRID_WIDTH].classList.contains("bug-lair") && !SQUARES[margauxCurrentIndex - 1].classList.contains("bug-lair-block")) {
						margauxCurrentIndex += GRID_WIDTH;
						document.documentElement.style.setProperty("--img", "url(\"images/persoFace.png\")");
						document.documentElement.style.setProperty("--img2", "url(\"images/persoFace.png\")");
					}
				}
			}

			SQUARES[margauxCurrentIndex].classList.add("lil-margaux");
			initialX = null;
			initialY = null;
			e.preventDefault();

			bugs.forEach(bug => {
				if (SQUARES[bug.currentIndex].classList.contains("lil-margaux") && bug.isScared) {
					SQUARES[bug.currentIndex].classList.remove(bug.className, "bug", "scared-bug");
					bug.currentIndex = bug.startIndex;
					score += 100;
					scoreDisplay.innerHTML = score;
					SQUARES[bug.currentIndex].classList.add(bug.className, "bug");
				}
			})

			dotEaten();
			projectEaten();
			checkForGameOver();
			checkForVictory();
		}
	}

	// DOT EATEN
	function dotEaten () {
		if (SQUARES[margauxCurrentIndex].classList.contains("dot")){
			score++;
			SQUARES[margauxCurrentIndex].classList.remove("dot");
		}
		scoreDisplay.innerHTML = score;
	}

	// PROJECT EATEN
	function projectEaten () {
		let projectCurrentIndex = 0;
		if (SQUARES[margauxCurrentIndex].classList.contains("project")) {
			projectCurrentIndex = margauxCurrentIndex;
			SQUARES[margauxCurrentIndex].classList.remove("lil-margaux");
			SQUARES[margauxCurrentIndex].classList.remove("project");
			SQUARES[margauxCurrentIndex].classList.add("openedproject");
			margauxCurrentIndex += GRID_WIDTH;
			SQUARES[margauxCurrentIndex].classList.add("lil-margaux");
			score += 10;
			bugs.forEach(bug => bug.isScared = true);
			setTimeout(unScareBugs, 5500);
			setTimeout(() => {showProject(projectCurrentIndex);},100); 
		}

		scoreDisplay.innerHTML = score;

		if (SQUARES[margauxCurrentIndex].classList.contains("openedproject")) {
			projectCurrentIndex = margauxCurrentIndex;
			SQUARES[margauxCurrentIndex].classList.remove("lil-margaux");
			margauxCurrentIndex += GRID_WIDTH;
			SQUARES[margauxCurrentIndex].classList.add("lil-margaux");
			setTimeout(() => {showProject(projectCurrentIndex);},100);
		}
	}

	//SHOW THE PROJECT
	function showProject (index) {
		projectIsShown = true;
		project.style.display = "block";
		switch (index) {
			case 94:
				projectTitle.innerHTML = "ROBBIE THE CONVERTER ROBOT";
				projectImg.innerHTML = "<img src=\"images/robbieImg\" alt=\"Capture d'écran de la web app Robbie The Robot\">";
				projectDescription.innerHTML = "Un convertisseur qui transpose votre texte en code binaire.";
				visitButton.innerHTML = "<a href=\"https://margaux-dev.github.io/binary-converter/\" id=\"see-site\" target=\"_blank\">Visiter le site</a>"
				break;
			case 171:
				projectTitle.innerHTML = "ASTEROIDS : LE JEU";
				projectImg.innerHTML = "<img src=\"images/asteroidsImg\" alt=\"Capture d'écran du jeu Asteroids\">";
				projectDescription.innerHTML = "Asteroids, réplique sur célèbre jeu d'arcade éponyme.";
				visitButton.innerHTML = "<a href=\"https://margaux-dev.github.io/asteroids-game/\" id=\"see-site\" target=\"_blank\">Visiter le site</a>"
				break;
			case 299:
				projectTitle.innerHTML = "TO DO LIST";
				projectImg.innerHTML = "<img src=\"images/todoImg\" alt=\"Capture d'écran de la web app To Do List\">";
				projectDescription.innerHTML = "Une application web qui vous permet de noter et de garder en mémoire votre liste de choses à faire.";
				visitButton.innerHTML = "<a href=\"https://margaux-dev.github.io/ToDoList/\" id=\"see-site\" target=\"_blank\">Visiter le site</a>"
				break;
			case 822:
				projectTitle.innerHTML = "FORMULAIRE DE SONDAGE";
				projectImg.innerHTML = "<img src=\"images/surveyImg\" alt=\"Capture d'écran du formulaire de sondage\">";
				projectDescription.innerHTML = "Un modèle de formulaire de sondage sur une page, sur le thème de la série \"The Good Place\"";
				visitButton.innerHTML = "<a href=\"https://margaux-dev.github.io/FCC_Survey_Form/\" id=\"see-site\" target=\"_blank\">Visiter le site</a>"
				break;
			case 948:
				projectTitle.innerHTML = "RESTAURANT PAST'A MAMMA";
				projectImg.innerHTML = "<img src=\"images/restaurant-pasta-mamma.jpg\" alt=\"Capture d'écran de la page web Past'a Mamma\">";
				projectDescription.innerHTML = "Un site one-page pour un restaurant familial.";
				visitButton.innerHTML = "<a href=\"https://margaux-dev.github.io/restaurant-pasta-mamma/\" id=\"see-site\" target=\"_blank\">Visiter le site</a>"
				break;
			case 1085:
				projectTitle.innerHTML = "PASSION SURF";
				projectImg.innerHTML = "<img src=\"images/passionsurf.jpg\" alt=\"Capture d'écran du site web Passion Surf\">";
				projectDescription.innerHTML = "Un site one-page pour une école de surf.";
				visitButton.innerHTML = "<a href=\"https://margaux-dev.github.io/passion-surf/\" id=\"see-site\" target=\"_blank\">Visiter le site</a>"
				break;
			case 1381:
				projectTitle.innerHTML = "MEMORY GAME";
				projectImg.innerHTML = "<img src=\"images/memoryImg\" alt=\"Capture d'écran de la web app memory game\">";
				projectDescription.innerHTML = "Un jeu simple et mignon pour entraîner sa mémoire durant l'été !";
				visitButton.innerHTML = "<a href=\"https://margaux-dev.github.io/memory-game/\" id=\"see-site\" target=\"_blank\">Visiter le site</a>"
				break;
			default:
				break;
		}
		closeProject.addEventListener("click", () => {
			project.style.display = "none";
			projectIsShown = false;
		});
	}
	
	// UNSCARE THE BUGS
	function unScareBugs() {		
		bugs.forEach(bug => bug.isScared = false);
	}

	// MOVE THE BUGS
	bugs.forEach(bug => moveBug(bug));

	function moveBug (bug) {
		const directions = [-1, +1, GRID_WIDTH, -GRID_WIDTH];
		let direction = directions[Math.floor(Math.random() * directions.length)];
		bug.timerID = setInterval(() => {
			if (!projectIsShown) {if (!SQUARES[bug.currentIndex + direction].classList.contains("bug") & !SQUARES[bug.currentIndex + direction].classList.contains("wall") && !SQUARES[bug.currentIndex + direction].classList.contains("bug-lair-block") && !SQUARES[bug.currentIndex + direction].classList.contains("project") && !SQUARES[bug.currentIndex + direction].classList.contains("openedproject")) {
				SQUARES[bug.currentIndex].classList.remove(bug.className);
				SQUARES[bug.currentIndex].classList.remove("bug", "scared-bug");
				bug.currentIndex += direction;
				SQUARES[bug.currentIndex].classList.add(bug.className);
				SQUARES[bug.currentIndex].classList.add("bug");
			} else {
				direction = directions[Math.floor(Math.random() * directions.length)];
			}
			if (bug.isScared) {
				SQUARES[bug.currentIndex].classList.add("scared-bug");
			}
			if (SQUARES[margauxCurrentIndex].classList.contains("scared-bug")) {
				SQUARES[bug.currentIndex].classList.remove(bug.className, "bug", "scared-bug");
				bug.currentIndex = bug.startIndex;
				score += 100;
				scoreDisplay.innerHTML = score;
				SQUARES[bug.currentIndex].classList.add(bug.className, "bug");
			}
			checkForGameOver();}
		}, bug.speed);
	}

	// CHECK FOR GAME OVER
	function checkForGameOver () {
		if (SQUARES[margauxCurrentIndex].classList.contains("bug") && !SQUARES[margauxCurrentIndex].classList.contains("scared-bug")) {
			bugs.forEach(bug => {
				clearInterval(bug.timerID);
				bug.timerID = NaN;});
			document.removeEventListener("keydown", moveMargaux);
			document.removeEventListener("touchmove", moveMargaux);
			document.documentElement.style.setProperty("--img", "url(\"images/persoFace.png\")");
			document.documentElement.style.setProperty("--img2", "url(\"images/persoFace.png\")");
			scoreDisplay.innerHTML = score;
			gameMessage.innerHTML = "GAME OVER";
			gameMessageText.innerHTML = "Dommage... La prochaine fois sera la bonne !";
			gameMessageDiv.style.display = "block";
		}
	}

	// CHECK FOR VICTORY
	function checkForVictory () {
		for (let i=0; i < SQUARES.length; i++) {
			if (!SQUARES.some(project => project.classList.contains("project"))) {
				closeProject.addEventListener("click", () => {
					bugs.forEach(bug => {
						clearInterval(bug.timerID);
						bug.timerID = NaN;});
					document.removeEventListener("keydown", moveMargaux);
					document.removeEventListener("touchmove", moveMargaux);
					document.documentElement.style.setProperty("--img", "url(\"images/persoFace.png\")");
					document.documentElement.style.setProperty("--img2", "url(\"images/persoFace.png\")");
					gameMessage.innerHTML = "Victoire !!";
					gameMessageText.innerHTML = "Bravo !<br>Vous avez découvert mes derniers projets sans vous faire piquer !";
					gameMessageDiv.style.display = "block";
					restartButton.style.display = "none";
					knowMoreButton.style.display = "inline";
					// LIEN VERS LA DEUXIEME PAGE ONCLICK KNOWMORE
				});
			}
		}
	}

	// EVENT LISTENERS
	document.addEventListener("keydown", moveMargaux);
	GRID.addEventListener("touchstart", startTouch, false);
	GRID.addEventListener("touchmove", moveTouch, false);
}



// EVENT LISTENER : START THE GAME
playButton.addEventListener("click", () => {
	gameTitle.innerHTML = "Instructions";
	if (screen.width < 1025){
		gameInstructionsA.innerHTML = "Dirigez Pix-Margaux vers les ordinateurs en swipant vers le haut, le bas, la droite ou la gauche.";
	} else {
		gameInstructionsA.innerHTML = "Dirigez Pix-Margaux vers les ordinateurs en utilisant les touches directionnelles du clavier.";
	}
	gameInstructionsB.innerHTML ="Quand vous débloquez un projet, les bugs prennent peur ; foncez sur eux pour les supprimer et marquer 100pts de plus !";
	playButton.innerHTML = "Commencer";
	playButton.addEventListener("click", gameOn);
});


// EVENT LISTENER : RESTART THE GAME
restartButton.addEventListener("click", () => {
	SQUARES[margauxCurrentIndex].classList.remove("lil-margaux");
	bugs.forEach(bug => SQUARES[bug.currentIndex].classList.remove(bug.className, "bug", "scared-bug"));
	gameMessageDiv.style.display = "none";
	for (let i = 0; i < GRID_LAYOUT.length; i++) {
		// Layout
		if (GRID_LAYOUT[i] === 0) {
			SQUARES[i].classList.add("dot");
		}
		if (GRID_LAYOUT[i] === 1) {
			SQUARES[i].classList.add("wall");
		}
		if (GRID_LAYOUT[i] === 2) {
			SQUARES[i].classList.add("bug-lair");
		}
		if (GRID_LAYOUT[i] === 3) {
			SQUARES[i].classList.remove("openedproject");
			SQUARES[i].classList.add("project");
		}
		if (GRID_LAYOUT[i] === 4) {
			SQUARES[i].classList.add("empty");
		}
		if (GRID_LAYOUT[i] === 5) {
			SQUARES[i].classList.add("bug-lair-block");
		}
		if (GRID_LAYOUT[i] === 6) {
			SQUARES[i].classList.add("start");
		}
	}
	margauxCurrentIndex = 897;
	SQUARES[margauxCurrentIndex].classList.add("lil-margaux");
	bugs.forEach(bug => {
		bug.timerID = NaN;
		bug.currentIndex = bug.startIndex;
		SQUARES[bug.currentIndex].classList.add(bug.className, "bug");
	});
	gameOn();
});



// SHOW TRADITIONNAL PORTFOLIO
function showPortfolio (e) {
	e.preventDefault();
	document.location.href = "https://www.margauxdev.com/portfolio"
}
skipButton.addEventListener("click", showPortfolio);
skipTheGame.addEventListener("click", showPortfolio);
knowMoreButton.addEventListener("click", showPortfolio);


