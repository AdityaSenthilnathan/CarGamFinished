class Form{
    constructor(){
        this.title = createElement('h2');
        this.inputbox = createInput("name");
       this.button = createButton("ENTER");
       this.button2 = createButton("Reset");
       this.greeting = createElement('h4');
    }
    display(){
       console.log(displayHeight);
        this.title.html("Car Racing Game!!");
        this.title.position(displayWidth- 260,displayHeight - 810);

        
        this.inputbox.position(displayWidth- 250,displayHeight - 740);

       
        this.button.position(displayWidth - 200,displayHeight - 700);

        this.button2.position(displayWidth - 100,displayHeight - 700);

        this.button2.mousePressed(()=>{
            player.updateplayercount(0);
            game.updategameState(0);
            Player.updateRank(0);
        });
        
        this.button.mousePressed(()=>{
            this.inputbox.hide();
            this.button.hide();
            player.name = this.inputbox.value();
            playercount++;
            player.index = playercount;
            player.updateplayerinfo();
            player.updateplayercount(playercount);
         

            this.greeting.html("Welcome " + player.name);
            this.greeting.position(130,160);

        });



        


    }
    hide(){

        this.inputbox.hide();
       this.button.hide();
       this.greeting.hide();
       this.title.hide();


        
    }

}