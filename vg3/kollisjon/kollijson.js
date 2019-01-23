// @ts-check

function setup() {


    const canvas = document.querySelector('canvas')
    const c = canvas.getContext('2d')

    canvas.width = innerWidth
    canvas.height = innerHeight

    const mouse = {
        x: innerWidth / 2,
        y: innerHeight / 2
    }

    const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

    // Event Listeners
    addEventListener('mousemove', event => {
        mouse.x = event.clientX
        mouse.y = event.clientY
    })

    addEventListener('resize', () => {
        canvas.width = innerWidth
        canvas.height = innerHeight

        init()
    })

    // Objects
    function Ball(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }

    Object.prototype.draw = function () {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
        c.closePath()
    }

    Object.prototype.update = function () {
        this.draw()
    }

    // Implementation
    let objects
    let ball;
    function init() {
        ball = new Ball(canvas.width / 2, canvas.height / 2, 30, "red");
        console.log(ball);
    }

    // Animation Loop
    function animate() {
        requestAnimationFrame(animate)
        c.clearRect(0, 0, canvas.width, canvas.height)

        ball.update();
        // });
    }

    init()
    animate()

}