
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

    setTimeout(function(){
      drawList(this.queue.dequeue());
    }, 500);

    if (this.queue.length != 0)
      animate();

  }

}
