class MovableObject {
    x = 120;
    y = 270;
    img;
    height = 150;
    width = 120;
    imageCache = {};
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;

     // loadImage('img/test.png');
    loadImage(path) {
        this.img = new Image(); // this.img = document.getelementById('image') <img id="image" src>
        this.img.src = path;
       
    }
    
    /**
     * 
     * @param {Array} arr - ['img/image1.png','img/image2.png', ...]
     */
    loadImages(arr) {
      
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

     moveRight() {
        console.log('Moving right');
        
    }

    moveLeft() {
        setInterval( () => {
           this.x -= this.speed;  //1
       }, 1000 / 60);  // 50
   }
}