var app = new Vue({
     el: '#root',
     data: {
          counter : 0,

          items: [{
               image: '01.jpg',
               title: 'Svezia' ,
               text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
          },

          {

               image: '02.jpg',
               title: 'Svizzera' ,
               text: 'Lorem ipsum',
          },

          {
               image: '03.jpg',
               title: 'Gran Bretagna' ,
               text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
          },      
     
          {
               image: '04.jpg',
               title: 'Germania' ,
               text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
          },

          {
               image: '05.jpg',
               title: 'Paradise' ,
               text:'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
          }

          ]
     },
     
     methods: {

          cronometro : setInterval(() => {
               app.counter++
               if(app.counter == app.items.length){
                    app.counter = 0
               }

          }, 3000)
     }
   })

   