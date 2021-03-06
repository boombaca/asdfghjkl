var Background = function(canvas, assetsManager) {
    this.canvas = canvas;
    this.assetsManager = assetsManager;

    this.scrollSpeed = 2;
    this.xPosition = 0;
    this.yPosition = 0;
};

Background.prototype.update = function() {
    this.yPosition += this.scrollSpeed;

    if (this.yPosition >= this.canvas.height) {
        this.yPosition = 0;
    }
};

Background.prototype.draw = function(ctx) {
    ctx.drawImage(this.assetsManager.images["background"],
        this.xPosition, this.yPosition);
    ctx.drawImage(this.assetsManager.images["background"],
        this.xPosition, this.yPosition - this.canvas.height);
};