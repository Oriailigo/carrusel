document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();

   

    //carousel activation
    var elems = document.querySelectorAll('.carousel');
    var xinstances = M.Carousel.init(elems, 
    {
        duration: 150,
                dist: -80,
                shift: 5,
                padding: 5,
                numVisible: 3,
                indicators: false,
                noWrap: false
    });

    //carousel Next function
    window.next = function() {
      
      var el = document.querySelector(".carousel");
      var l = M.Carousel.getInstance(el);
      l.next(1);
    }
    //carousel previous function
    window.prev = function() {
        var el = document.querySelector(".carousel");
        var l = M.Carousel.getInstance(el);
        l.prev(1);
    }

// ME quedo con las teclas
    window.onload=function(){
      document.onkeyup =teclas;
    }
    function teclas(event){
      var codigo= event.keyCode;
      console.log(codigo);
      if(codigo===37){
          console.log("holaa 37");
          var el = document.querySelector(".carousel");
          var l = M.Carousel.getInstance(el);
          l.prev(1);
      }
      if(codigo===39){      
          var el = document.querySelector(".carousel");
          var l = M.Carousel.getInstance(el);
          l.next(1);
      }

    }
    
    
})



CarouselItem.prototype.hide = function () {
    this.domNode.classList.remove('active');
  };
  
  CarouselItem.prototype.show = function () {
    this.domNode.classList.add('active');
  };
  