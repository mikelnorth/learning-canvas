var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// c.fillStyle = 'rgba(255, 0, 0, 0.5)';
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = 'rgba(0, 0, 255, 0.5)';
// c.fillRect(0, 0, 100, 100);
// c.fillStyle = 'rgba(0, 255, 0, 0.5)';
// c.fillRect(0, 200, 100, 100);

//Line

// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = '#fa34a3';
// c.stroke();

//arc / circles 

// c.arc(x, y, radius, Int, startAngle: Float in radians, 
//     endAngle: Float in radians, drawCounterClockwise, Bool (false))

// c.beginPath(); //this creates a new path so that old lines and paths do not connect
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = 'blue'
// c.stroke();

// for (let i = 0; i < 50; i++) {
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     c.beginPath(); //this creates a new path so that old lines and paths do not connect
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.strokeStyle = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
//     c.stroke();
// }

// c.beginPath(); //this creates a new path so that old lines and paths do not connect
// c.arc(200, 200, 30, 0, Math.PI * 2, false);
// c.strokeStyle = 'blue';
// c.stroke();





function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function () {
        c.beginPath(); //this creates a new path so that old lines and paths do not connect
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = 'blue';
        c.stroke();
    }

    this.update = function () {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}


var circleArray = []

for (let i = 0; i < 100; i++) {
    var x = Math.random() * innerWidth;
    var dx = (Math.random() - 0.5) * 10;
    var y = Math.random() * innerHeight;
    var dy = (Math.random() - 0.5) * 10;
    var radius = 30
    circleArray.push(new Circle(x, y, dx, dy, radius))

}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for(let i = 0; i < circleArray.length; i++){
        circleArray[i].update();
    }
}

animate();
