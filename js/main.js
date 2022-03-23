document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();

    resetTab()

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
          // resetTab();
          // aux1 = document.getElementsByClassName('carousel-item active').children[0].children[1].tabIndex = 0
          // console.log(aux1);
      }
      if(codigo===39){      
          var el = document.querySelector(".carousel");
          var l = M.Carousel.getInstance(el);
          l.next(1);
          // resetTab();
          // aux2 = document.getElementsByClassName('carousel-item active').children[0].children[1].tabIndex = 0
          // console.log(aux2);
      }

    }
    
    
})



CarouselItem.prototype.hide = function () {
    this.domNode.classList.remove('active');
  };
  
  CarouselItem.prototype.show = function () {
    this.domNode.classList.add('active');
  };
  

  function resetTab() {
    aux = document.getElementsByClassName('carousel-item');
    for (i=0; i < aux.length ; i++){
      aux[i].children[0].children[1].tabIndex = -1
    }    
  }
