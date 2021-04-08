

var PowerUp = function(xPosition, yPosition, type, assetsManager) {
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.type = type;
    this.assetsManager = assetsManager;
    this.width = 34;
    this.height = 33;
    this.isPickedUp = false;
};

PowerUp.prototype.update = function() {

};

PowerUp.prototype.draw = function(ctx) {
    ctx.drawImage(this.assetsManager.images[this.type], this.xPosition, this.yPosition,
        this.width, this.height);
};