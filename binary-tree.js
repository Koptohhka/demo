class Node {
    constructor(value, x, y) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.x = x;
        this.y = y;
    }

    search(value) {
        if (value === this.value) {
            return this;
        } else {
            if (value < this.value && this.left !== null) {
                return this.left.search(value);
            } else if (value > this.value && this.right !== null) {
                return this.right.search(value);
            }
        }
        return null;
    }

    visitNode(parentNode) {
        if (this.left !== null) {
            this.left.visitNode(this);
        }
        console.log(this.value);
        drawLine(parentNode.x, parentNode.y, this.x, this.y);
        if (this.right !== null) {
            this.right.visitNode(this);
        }
        drawCircle(this.x, this.y, this.value);
        drawText(this.x, this.y, this.value);
    }

    addNode(newNode) {
        if (this.value === newNode.value) {
            return;
        }
        if (newNode.value < this.value) {
            if (this.left === null) {
                this.left = newNode;
                this.left.x = this.x - spaceValue;
                this.left.y = this.y + spaceValue;
            } else {
                this.left.addNode(newNode);
            }
        } else {
            if (this.right === null) {
                this.right = newNode;
                this.right.x = this.x + spaceValue;
                this.right.y = this.y + spaceValue;
            } else {
                this.right.addNode(newNode);
            }
        }
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    searchNode(value) {
        return this.root.search(value);
    }

    traverseNodes() {
        this.root.visitNode(this.root);
    }

    addValue(value) {
        const newNode = new Node(value, canvasWidth / 2, 100);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.root.addNode(newNode);
        }
    }
}

const canvas = document.getElementById('cn');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
const circleRadius = 20;
let x = canvasWidth / 2;
let y = 100;
let spaceValue = 50;

function drawText(x, y, value) {
    ctx.beginPath();
    ctx.font = "20px sans-serif";
    ctx.textBaseline = "middle";
    ctx.textAlign = 'center';
    ctx.fillStyle = 'white';
    ctx.fillText(value, x, y);
    ctx.closePath();
}

function drawCircle(x, y, value) {
    ctx.beginPath();
    ctx.arc(x, y, spaceValue / 2, 0, Math.PI * 2);
    ctx.fillStyle = '#25A89E';
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function drawLine(x, y, addX, addY) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(addX, addY);
    ctx.stroke();
    ctx.closePath();
}

function initRenderTree() {
    const newTree = new BinaryTree();
    for (let i = 0; i < 10; i++) {
        newTree.addValue(Math.floor(Math.random() * 100));
    }

    newTree.addValue(5);
    newTree.addValue(3);
    newTree.addValue(7);
    newTree.addValue(2);
    newTree.addValue(1);
    newTree.addValue(6);
    newTree.addValue(62);
    newTree.addValue(61);
    newTree.addValue(63);

    newTree.traverseNodes();
}
initRenderTree();
// function animate() {
//     initRenderTree();
//     requestAnimationFrame(animate);
// }
// animate();


document.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    initRenderTree();
})