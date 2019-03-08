//@ts-check

function setup() {

    let started = true;
    let poeng = 0;
    

    let melding = document.getElementById("melding");

    let startside = document.getElementById("start");
    let canvasdisplay = document.getElementById("canvas");
    canvasdisplay.style.display = "none";

    let header = document.getElementById("header");
   

    let startKnapp = document.getElementById("startknapp");
    startKnapp.addEventListener("click", startSpill);


    function startSpill() {
        canvasdisplay = document.getElementById("canvas");
        canvasdisplay.style.display = "block";
        startside.style.display = "none";

        var canvas = document.querySelector('canvas'); //@ts-check 

        var c = canvas.getContext('2d');

        let requestId;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight - 60;

        var mouse = {
            x: innerWidth / 2,
            y: innerHeight / 2
        };

        var colors = ['#FF0000'];

        // utility functions

        function randomIntFromRange(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        function randomColor(colors) {
            return colors[Math.floor(Math.random() * colors.length)];
        }

        function distance(x1, y1, x2, y2) {
            var xDist = x2 - x1;
            var yDist = y2 - y1;

            return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
        }
        /**
         * Rotates coordinate system for velocities
         *
         * Takes velocities and alters them as if the coordinate system they're on was rotated
         *
         * @param  Object | velocity | The velocity of an individual particle
         * @param  Float  | angle    | The angle of collision between two objects in radians
         * @return Object | The altered x and y velocities after the coordinate system has been rotated
         */

        function rotate(velocity, angle) {
            var rotatedVelocities = {
                x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
                y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
            };

            return rotatedVelocities;
        }

        /**
         * Swaps out two colliding particles' x and y velocities after running through
         * an elastic collision reaction equation
         *
         * @param  Object | particle      | A particle object with x and y coordinates, plus velocity
         * @param  Object | otherParticle | A particle object with x and y coordinates, plus velocity
         * @return Null | Does not return a value
         */

        function resolveCollision(particle, otherParticle) {
            var xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
            var yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;

            var xDist = otherParticle.x - particle.x;
            var yDist = otherParticle.y - particle.y;

            // Prevent accidental overlap of particles
            if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {

                // Grab angle between the two colliding particles
                var angle = -Math.atan2(otherParticle.y - particle.y, otherParticle.x - particle.x);

                // Store mass in var for better readability in collision equation
                var m1 = particle.mass;
                var m2 = otherParticle.mass;

                // Velocity before equation
                var u1 = rotate(particle.velocity, angle);
                var u2 = rotate(otherParticle.velocity, angle);

                // Velocity after 1d collision equation
                var v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
                var v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y };

                // Final velocity after rotating axis back to original location
                var vFinal1 = rotate(v1, -angle);
                var vFinal2 = rotate(v2, -angle);

                // Swap particle velocities for realistic bounce effect
                particle.velocity.x = vFinal1.x;
                particle.velocity.y = vFinal1.y;

                otherParticle.velocity.x = vFinal2.x;
                otherParticle.velocity.y = vFinal2.y;
            }
        }

        // Event Listeners
        addEventListener('mousemove', function (event) {
            mouse.x = event.clientX;
            mouse.y = event.clientY - 60;
        });

        addEventListener('resize', function () {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight - 60;

            init();
        });

        // Objects
        function Partikkel(x, y, radius, color) {
            var _this = this;
            this.x = x;
            this.y = y;
            this.velocity = {
                x: (Math.random() - 0.5) * 5,
                y: (Math.random() - 0.5) * 5
            };
            this.mass = 1;
            this.opacity = 0;
            this.radius = radius;
            this.color = color;
            this.update = function (particles) {
                _this.draw();

                for (var i = 0; i < particles.length; i++) {
                    if (_this === particles[i]) continue;
                    if (distance(_this.x, _this.y, particles[i].x, particles[i].y) - _this.radius * 2 < 0) {
                        resolveCollision(_this, particles[i]);
                    }
                }
                if (_this.x - _this.radius <= 0 || _this.x + _this.radius >= canvas.width) {
                    _this.velocity.x = -_this.velocity.x;
                }
                if (_this.y - _this.radius <= 0 || _this.y + _this.radius >= canvas.height) {
                    _this.velocity.y = -_this.velocity.y;
                }



                // mouse colliton- detection

                if (distance(mouse.x, mouse.y, _this.x, _this.y) < 50 && _this.opacity < 0.4) {
                    _this.opacity += 0.02; 
                    started = false;
                   startKnapp = document.getElementById("startknapp");
    startKnapp.addEventListener("click", startSpill);
                    canvas.style.cursor = "auto";
                    melding.style.display = "block";
                    melding.innerHTML = `Poeng: ${Math.floor(poeng/10)} <br>
                    `
                   

                } else if (_this.opacity > 0) {
                    _this.opacity -= 0.02;
                    _this.opacity = Math.max(0, _this.opacity);
                }
                if (distance(mouse.x, mouse.y, _this.x, _this.y) < 150 && _this.opacity < 0.4) {
                    _this.opacity += 0.02;

                }

                _this.x += _this.velocity.x;
                _this.y += _this.velocity.y;
            };

            this.draw = function () {
                c.beginPath();
                c.arc(_this.x, _this.y, _this.radius, 0, Math.PI * 2, false);
                c.save();
                c.globalAlpha = _this.opacity;
                c.fill();
                c.fillStyle = _this.color;
                c.restore();
                c.strokeStyle = _this.color;
                c.stroke();
                c.closePath();
            };
        }

        // Implementation
        let particles = void 0;
        let circle1;

        function init() {

            circle1 = new Partikkel(undefined, undefined, 10, "green");

            particles = [];

            for (var i = 0; i < 20; i++) {
                var x = randomIntFromRange(radius, canvas.width - radius);
                var y = randomIntFromRange(radius, canvas.height - radius);
                var radius = 40;
                var color = randomColor(colors);

                if (i !== 0) {
                    for (var j = 0; j < particles.length; j++) {
                        if (distance(x, y, particles[j].x, particles[j].y) - radius * 2 < 0) {
                            x = randomIntFromRange(radius, canvas.width - radius);
                            y = randomIntFromRange(radius, canvas.height - radius);

                            j = -1;
                        }
                    }
                }
                particles.push(new Partikkel(x, y, radius, color));
            }
        }

        // Animation Loop
        function animate() {
            requestId = undefined;
            if (started) {
                requestAnimationFrame(animate);
            }
            c.clearRect(0, 0, canvas.width, canvas.height);
            poeng++;
            header.setAttribute("username", `Poeng:${Math.floor(poeng/10)}`);

            particles.forEach(function (particle) {
                particle.update(particles);
            });

            circle1.x = mouse.x;
            circle1.y = mouse.y;
            circle1.update();
        }

        init();
        animate();


    }


    function randomIntFromRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function randomColor(colors) {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function distance(x1, y1, x2, y2) {
        var xDist = x2 - x1;
        var yDist = y2 - y1;

        return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
    }

    module.exports = { randomIntFromRange: randomIntFromRange, randomColor: randomColor, distance: distance };




}