
var clicks = document.querySelector(".btn btn-primary")
var final= clicks.addEventListener("click", ()=>{
  function ten(callback) {
setTimeout(()=>{
    document.querySelector(".display").innerText = 10;
    callback()
      },1000)
    }
 
    function nine(callback) {
setTimeout(()=>{
    document.querySelector(".display").innerText = 9;
    callback()
      },1000)
    }

function eight(callback) {
setTimeout(()=>{
    document.querySelector(".display").innerText = 8;
    callback()
      },1000)
      }

function seven(callback) {
setTimeout(()=>{
    document.querySelector(".display").innerText = 7;
    callback()
      },1000)
      }

function six(callback) {
setTimeout(()=>{
    document.querySelector(".display").innerText = 6;
    callback()
      },1000)
      }
          
function five(callback) {
setTimeout(()=>{
    document.querySelector(".display").innerText = 5;
    callback()
      },1000)
      }

      function four(callback) {
setTimeout(()=>{
    document.querySelector(".display").innerText = 4;
    callback()
      },1000)
     }
    
function three (callback) {
setTimeout(()=>{
    document.querySelector(".display").innerText = 3;
    callback()
      },1000)
   }

function two(callback) {
setTimeout(()=>{
    document.querySelector(".display").innerText = 2;
    callback()
      },1000)
      }
    
function one(callback) {
setTimeout(()=>{
    document.querySelector(".display").innerText = 1;
    callback()
      },1000)
      }
                 
function independence(callback) {
setTimeout(()=>{
    document.querySelector(".display").innerText = "HAPPY INDEPENDENCE DAY";
      },1000)}
      

ten(()=>{
    nine(()=>{
        eight(()=>{
            seven(()=>{
                six(()=>{
                    five(()=>{
                        four(()=>{
                            three(()=>{
                                two(()=>{
                                    one(()=>{
                                        independence()
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    });
})
})
  