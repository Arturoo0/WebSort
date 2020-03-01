
class animationQueue{

  constructor(){
    this.queue = [];
    this.speed = 0;
  }

  enqueue(item){
    this.queue.push(item);
  }

  dequeue(){

    if (this.queue.length == 0) return null;

    return this.queue.shift();
  }

  setSpeed(){
    let getSpeed = document.querySelector("#speedRange");
    this.speed = 100 - getSpeed.value;
  }

  animate(){

    setTimeout(function(animObj){
      c.clearRect(0, 0, canvas.width, canvas.height);
      drawList(animObj.dequeue());

      if (animObj.queue.length != 0)
        animObj.animate();

    }, this.speed, this);
    // if (this.queue.length === 1)
    //   solveButton.disabled == false;
    // console.log(solveButton.disabled);

  }

}
