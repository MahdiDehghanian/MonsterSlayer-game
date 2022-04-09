new Vue ({

  el : '#app',

  data : {
    playerHealth : 100 ,
    monsterHealth : 100 , 
    gameIsRunning : false,
    logs : [],
  },
  methods: {
    startGame (){
      this.gameIsRunning = true ;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.logs = [] ;
      
    },
    attack (){
      min = 3 ;
      max = 10 ;
      var damage = Math.max(Math.floor(Math.random() * max) + 1 , min) ;
      this.monsterHealth -= damage ; 
      this.logs.unshift({
        isplayer : true ,
        text : 'player hits monster for-' + damage ,
      })
     
      if (this.monsterHealth <= 0) {
        alert("you won!!!");
       this.gameIsRunning = false;
       logs = [];
        return;
      }

      min = 5 ;
      max = 12 ;
      var damage = Math.max(Math.floor(Math.random() * max) + 1 , min) ;
      this.playerHealth -= damage ; 
      this.logs.unshift({
        isplayer : false ,
        text : 'monster hits player for-' + damage ,
      })

      if (this.playerHealth <= 0) {
        alert("you lose!!!");
       this.gameIsRunning = false;
       
        return;
      }
    },
    specialAttack () {
      min = 10 ;
      max = 20 ;
      var damage = Math.max(Math.floor(Math.random() * max) + 1 , min) ;
      this.monsterHealth -= damage ; 

      if (this.monsterHealth <= 0) {
        alert("you won!!!");
       this.gameIsRunning = false;
      
        return;
      }
      min = 5 ;
      max = 12 ;
      var damage = Math.max(Math.floor(Math.random() * max) + 1 , min) ;
      this.playerHealth -= damage ;
      this.logs.unshift({
        isplayer : true ,
        text : 'player S-hits monster for-' + damage ,
      }) 

      if (this.playerHealth <= 0) {
        alert("you lose!!!");
       this.gameIsRunning = false;
       
        return;
      }
    },
    heal(){
    
      var heal = 10;
      
      if (this.playerHealth < 90) {
        this.playerHealth += heal ; 
      } else {
        this.playerHealth = 100;
      }

     
      
    },
    giveUp () {
      this.gameIsRunning = false;
      this.playerHealth = 100 ;
      this.monsterHealth = 100 ;
      alert("you lostt !!")

    }
  },

 
});