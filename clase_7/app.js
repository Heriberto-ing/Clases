const usersChoice = document.createElement('h1');
const computersChoice = document.createElement('h1');
const resultDisplay = document.createElement('h1');
//encontrando el section del HTML que tiene id= "root"
const gameGrid = document.getElementById('root');
gameGrid.append(usersChoice);
gameGrid.append(computersChoice);
gameGrid.append(resultDisplay);

const choices =['Piedra','Papel','Tijera'];
let userChoice;
let computerChoice;

const generateComputerPlay = () =>{
    const randomChoice =choices[Math.floor(Math.random()*choices.length)];
    computerChoice = randomChoice;
    computersChoice.innerHTML = `La jugada de la computadora es: ${computerChoice}`; 
}

const generateResult =()=>{
    switch(userChoice+computerChoice){
        case 'TijeraPapel':
        case 'PiedraTijera':
        case 'PapelPiedra':
            resultDisplay.innerHTML ='Ganó el usuario';
            break;
        case 'PiedraPapel':
        case 'TijeraPiedra':
        case 'PapelTijera':
            resultDisplay.innerHTML ='Perdió el usuario';
            break;
        default:
            resultDisplay.innerHTML ='Es un empate';
            break;
    }
}

const handleClick = (e) =>{
    userChoice = e.target.id;
    usersChoice.innerHTML = 'Su jugada es: '+userChoice;
    generateComputerPlay();
    generateResult();
}

for (let index = 0; index < choices.length; index++) {
    const button = document.createElement('button');
    button.id = choices[index];
    button.innerHTML = choices[index]; 
    //cuando le hagan click, llama a la función handleClick
    button.addEventListener('click',handleClick);
    gameGrid.appendChild(button);
}