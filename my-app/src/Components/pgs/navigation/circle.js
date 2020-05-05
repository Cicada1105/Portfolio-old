class Circle {
	#CENTER_X = 150;
	#CENTER_Y = 75;

	constructor(r, startAngle, endAngle,context) {
		this.radius = r;
		this.sAngle = startAngle;
		this.eAngle = endAngle;
		this.ctx = context;
	}
	draw() {
		this.ctx.beginPath();
		this.ctx.arc(this.#CENTER_X,this.#CENTER_Y,this.radius,this.sAngle,this.eAngle);
		this.ctx.stroke();
	}
}

export default Circle;