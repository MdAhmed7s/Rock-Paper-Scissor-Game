let score = JSON.parse(localStorage.getItem('score'));

    if(!score){
      score = {
        wins: 0,
        losses: 0,
        ties: 0
      };
    }

    
    // function call for updating and showing score on web-page..
    updateScore();
    
    function playGame(playerMove){
      const computerMove = pickComputerMove();

        let result = '';


        if(playerMove === 'rock')
        {
          if(computerMove === 'rock')
          {
            result = 'Tie';
          }
          else if(computerMove === 'paper')
          {
            result = 'You Lose';
          }
          else if(computerMove === 'scissor')
          {
            result = 'You Win';
          }

        }

        else if(playerMove === 'paper')
        {
          if(computerMove === 'rock')
          {
            result = 'You Win';
          }
          else if(computerMove === 'paper')
          {
            result = 'Tie';
          }
          else if(computerMove === 'scissor')
          {
            result = 'You Lose';
          }
        }
        
        else if(playerMove === 'scissor')
        {
          if(computerMove === 'rock')
          {
            result = 'You Lose';
          }
          else if(computerMove === 'paper')
          {
            result = 'You Win';
          }
          else if(computerMove === 'scissor')
          {
            result = 'Tie';
          }
        }

        if(result === 'You Win') {
          score.wins+=1;
        }
        else if(result === 'You Lose'){
          score.losses+=1;
        }
        else if(result === 'Tie'){
          score.ties+=1;
        }

        document.querySelector('.js-result').innerHTML = result;
        document.querySelector('.js-moves').innerHTML =  `You
          <img src="images/${playerMove}-emoji.png" class="moves-icon">
          <img src="images/${computerMove}-emoji.png" class="moves-icon">
          Computer`;

        // Storing in Local Storage .. method localStorage.setItem()-->
        localStorage.setItem('score', JSON.stringify(score));

        // function call for updating and showing the score on web-page..
        updateScore();


//     alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
// Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
 };




    function pickComputerMove(){
      const randomNumber = Math.random();

        let computerMove='';

        if(randomNumber >=0 && randomNumber < 1/3)
        {
          computerMove = 'rock';
        }
        else if(randomNumber >=1/3 && randomNumber <2/3)
        {
          computerMove = 'paper';
        }
        else if(randomNumber >=2/3 && randomNumber <1)
        {
          computerMove = 'scissor';
        }

        return computerMove;
    }

    // Function for updating score on web page..
    function updateScore(){
      document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    }


    // computer will auto play game

    let isAutoPlaying = false;
    let intervalId;

    function autoPlay(){
      if(!isAutoPlaying)
      {
        intervalId = setInterval(function (){
          const playerMove = pickComputerMove();
          playGame(playerMove);
        },1000);

        isAutoPlaying = true;
      }
      else
      {
        clearInterval(intervalId);
        isAutoPlaying=false;
      }
    }


    document.body.addEventListener('keydown', (event)=>{
      if(event.key === 'r')
      {
        playGame('rock');
      }
      else if(event.key === 'p')
      {
        playGame('paper');
      }
      else if(event.key === 's')
      {
        playGame('scissor');
      }
    });