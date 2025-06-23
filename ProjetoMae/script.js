const canvas = document.getElementById('heart');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function heartFunction(t) {
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
    return {x, y};
}

for (let i = 0; i < 1000; i++) {
    const t = Math.random() * Math.PI * 2;
    const pos = heartFunction(t);
    particles.push({
        x: canvas.width / 2 + pos.x * 20,
        y: canvas.height / 2 - pos.y * 20,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
    });
}

function animate() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'red';
        ctx.fill();
    });

    requestAnimationFrame(animate);
}

animate();
