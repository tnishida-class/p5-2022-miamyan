// 小手調べ
function setup(){
  noFill();
 

  for(let i = 0; i < 10; i++){
    // BLANK[1]
    if(i<4){stroke(0,0,255)
    }
    if(i>4){stroke(255,0,0)
    }
    ellipse(50,50,i*10+10);
  }
    
  }
