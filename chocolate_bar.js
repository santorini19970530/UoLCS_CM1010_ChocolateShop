//An object to store the chocolate bars. the name and imageFile are strings
//weight and price are numbers and display is an object storing x,y,width and height
//properties

function ChocolateBar(name, imageFile, weight, price, display) {
  this.name = name;
  //load image from file path
  this.image = loadImage(imageFile);
  this.weight = weight;

  this.price = price;

  /*this.display = {
    x: display.x,
    y: display.y,
    width: display.width,
    height: display.height,
  };*/
  this.display = Object.assign({}, display);

  //draw the chocolate bars image to the values set in the display object
  //also display the price and price per 100grams
  this.draw = function () {
    image(
      this.image,
      this.display.x,
      this.display.y,
      this.display.width,
      this.display.height
    );
    let pricePer100g = (price / weight) * 100;
    let priceString =
      "£" +
      price.toFixed(2) +
      "p ( £" +
      pricePer100g.toFixed(2) +
      "p per 100 grams)";
    textAlign(CENTER);
    fill(0);
    text(
      priceString,
      this.display.x + this.display.width / 2,
      this.display.y + this.display.height + 30
    );
  };

  //was the chocolate bar clicked. If so return true false otherwise
  this.wasClicked = function (x, y) {
    if (
      x > this.display.x &&
      x < this.display.x + this.display.width &&
      y > this.display.y &&
      y < this.display.y + this.display.height
    ) {
      return true;
    }

    return false;
  };
}
