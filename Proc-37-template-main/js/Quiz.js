class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  
  }

  play(){

    question.hide();

   
    Contestant.getPlayerInfo();

    textSize(30);
    text("Result of the Quiz " ,130,230);
    
    var display_height=290;
   
       if(allContestants !== undefined)
        {
         
        fill("blue");
        textSize(20)
        text("NOTE : Contestant who answered correctly are highlighted in green color",15,270);

       //var index;
       //var y;
        
       for(var plr in allContestants) 
       {
         var correctAns="Peacock";

           if(correctAns === allContestants[plr].answer)
             {
               fill("green");
             }
              else
            {
               fill("red");
            }
             display_height=display_height+30;

            text(allContestants[plr].name + " : " +allContestants[plr].answer,70,display_height);
          }

        }

         
      }
        //{
    }