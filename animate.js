
class animationQueue{

  constructor(){
    this.queue = [];
  }

  enqueue(item){
    this.queue.push(item);
  }

  dequeue(){

    if (this.queue.length == 0) return null;

    return this.queue.shift();
  }

  animate(){

    setTimeout(function(animObj){
      c.clearRect(0, 0, canvas.width, canvas.height);
      drawList(animObj.dequeue());

      if (animObj.queue.length != 0)
        animObj.animate();

    }, 100, this);

  }

}
