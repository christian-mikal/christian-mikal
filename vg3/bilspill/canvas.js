//@ts-check

function setup() {

    let canvas = document.querySelector("canvas");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let c = canvas.getContext("2d");


    /*  for (let i = 0; i < 10; i++)  {
  
          let x = Math.random() * canvas.width;
          let y = Math.random() * canvas.height;
          c.beginPath();
          c.arc(x, y, 40, 0, 2 * Math.PI);
          c.strokeStyle = "rgb(red, green, blue)";
          let color = ['red', 'blue', 'yellow', 'black', 'grey', 'green', 'orange'];
          let strokeStyle = color[Math.floor(Math.random() * color.length)];
          c.strokeStyle = strokeStyle;
          c.stroke();
      }
      
  */

  let mouse = {
      x: undefined,
      y: undefined
  }

  let maxRadius = 40;
  let minRadius = 2;

      window.addEventListener("mousemove", 
      function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
      })

      window.addEventListener("resize", function(){

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        init();
      })


      function init() {

         circleArray = [];

        for (let i = 0; i < 400; i++) {
            let radius = Math.random() * 3 + 1;
    
            let x = Math.random() * (canvas.width - radius * 2) + radius;
            let y = Math.random() * (canvas.height - radius * 2) + radius;
            let dx = ((Math.random() * -0.5));
            let dy = ((Math.random() * -0.5));
            circleArray.push(new Circle(x, y, dx, dy, radius));
    
        }
      }
    function Circle(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.minRadius = radius;
        let color = ["#E6E2AF", "#A7A37E", "#EFECCA", "#046380", "#002F2F"];
       let strokeStyle = color[Math.floor(Math.random() * color.length)];


        this.draw = function () {
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
           
           

            c.stroke();
           // c.strokeStyle = strokeStyle;
            c.fillStyle = strokeStyle;
            c.fill();


        }
        this.update = function () {

            if (((this.x + this.radius) > innerWidth) || ((this.x - this.radius) < 0)) {
                this.dx = -this.dx;
            }

            if (((this.y + this.radius) > innerHeight) || ((this.y - this.radius) < 0)) {
                this.dy = -this.dy;
            }
            this.x += this.dx;
            this.y += this.dy;

             //interaktivitet
        if ( mouse.x - this.x < 50 && mouse.x - this.x > - 50 && mouse.y - this.y < 50 && mouse.y -this.y > - 50) {
            if (this.radius < maxRadius) {
                this.radius += 1;
            }
        } 
        else if (this.radius >  this.minRadius){
            this.radius -= 1;
        }

            this.draw();
        }

    }



    let circleArray = [];

    for (let i = 0; i < 400; i++) {
        let radius = Math.random() * 3 + 1;

        let x = Math.random() * (canvas.width - radius * 2) + radius;
        let y = Math.random() * (canvas.height - radius * 2) + radius;
        let dx = ((Math.random() * -0.5));
        let dy = ((Math.random() * -0.5));
        circleArray.push(new Circle(x, y, dx, dy, radius));

    }


    function animate() {

        requestAnimationFrame(animate);
        c.clearRect(0, 0, innerWidth, innerHeight);

        for (let i = 0; i < circleArray.length; i++) {
            circleArray[i].update();
        }




        if (((this.x + this.radius) > innerWidth) || ((this.x - this.radius) < 0)) {
            this.dx = -this.dx;
        }

        if (((this.y + this.radius) > innerHeight) || ((this.y - this.radius) < 0)) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

    }

    animate();
}

