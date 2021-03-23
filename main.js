//Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// alert("Ciao non ti piace il titolo? cambialo nel input sotto l'imagine");
var app = new Vue(
  {
    el:'#root',
    data: {
      message:'Benvenuti io sono Vue 👨‍💻',
      srcc:"papera.png",
      descrizione:'immagine papera assassina 🐤',
      color: 'black',
    },
    methods: {
      change: function(message){
        if(this.color == 'black'){
            this.color ='white'
        }else if (this.color =='white') {
          this.color = 'yellow'
        }else{
          this.color = 'black'
        }

      }
    }


  }
);
