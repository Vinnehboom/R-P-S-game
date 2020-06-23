

(() => {
    let playerPick; let PcPick;
    let playerScore = 0; let PcScore = 0;
    let playerScoreTarget = document.getElementById('player-score'); let PcScoreTarget = document.getElementById('pc-score');
    let playerImage = document.getElementById('player-image'); let PcImage = document.getElementById('pc-image');
    playerScoreTarget.innerText = playerScore; PcScoreTarget.innerText = PcScore;


    document.getElementById('button-1').addEventListener('click', function () {
        playerPick = "rock";
        playerImage.setAttribute('src', './assets/img/rock.png');
        PcChoice();
        console.log(PcPick);
        compareChoices(playerPick, PcPick);
    })
    document.getElementById('button-2').addEventListener('click', function () {
        playerPick = "paper";
        playerImage.setAttribute('src', './assets/img/paper.png');
        PcChoice();
        compareChoices(playerPick, PcPick);
    })
    document.getElementById('button-3').addEventListener('click', function () {
        playerPick = "scissors";
        playerImage.setAttribute('src', './assets/img/scissors.png');

        PcChoice();
        compareChoices(playerPick, PcPick);
    })


    const PcChoice = () => {
        let randomNr = Math.floor(Math.random() * 3) + 1;
        switch (randomNr) {
            case 1:
                PcPick = "rock";
                PcImage.setAttribute('src', './assets/img/rock.png');

                return PcPick;
            case 2:
                PcPick = "paper";
                PcImage.setAttribute('src', './assets/img/paper.png');
                return PcPick;
            case 3:
                PcPick = "scissors";
                PcImage.setAttribute('src', './assets/img/scissors.png');
                return PcPick;
        }
    }

    const compareChoices = (playerPick, PcPick) => {
        if (playerPick === PcPick) {
            document.getElementById('target').innerText = "It's a tie! Nobody gets any points. \n" +
                "Try again!";
        } else if (
            playerPick === "rock" && PcPick === "scissors" ||
            playerPick === "paper" && PcPick === "rock" ||
            playerPick === "scissors" && PcPick === "paper") {
            document.getElementById('target').innerText = "You win! You got a point.";
            playerScore++;
            playerScoreTarget.innerText = playerScore;


        } else if (
            playerPick === "rock" && PcPick === "paper" ||
            playerPick === "paper" && PcPick === "scissors" ||
            playerPick === "scissors" && PcPick === "rock") {
            document.getElementById('target').innerText = "You lost...  The PC  got one on you.";
            PcScore++;
            PcScoreTarget.innerText = PcScore;

        }
    }



})()