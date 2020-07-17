class Player{
    constructor(){
        this.index = null;
        this.name = null;
        this.rank = 0;
        this.distance = 0;

    }

    getRank(){
        var playerrankref = database.ref("Rank");

        playerrankref.on("value", (data)=>{
            this.rank = data.val();
        });

    }
    static updateRank(rank){
        var playerrankref = database.ref("/");

        playerrankref.update({
            Rank: rank

        });


    }

    getplayercount(){
        var playercountref = database.ref("playerCount");
        playercountref.on("value", function(data){
        playercount = data.val();

        });

    }

    updateplayercount(count){

        var playercountref = database.ref('/');
            playercountref.update({
            playerCount: count
        });

    }

    updateplayerinfo(){
        var playerindex = "players/player" + this.index;
        var playerindexref = database.ref(playerindex);
        playerindexref.set({
            name: this.name,
            distance: this.distance
        });


    }

    static getallplayerinfo(){
        var playerinforef = database.ref("players");
        playerinforef.on("value", (data) => {
            allplayers = data.val();

          });


    }


}