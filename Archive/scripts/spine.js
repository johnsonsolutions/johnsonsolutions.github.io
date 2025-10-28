

let yell = function(inp){ console.log(inp); return inp; };
let say = function(inp, targ){ $(targ).html(inp); };

let runway = {
    "func": [],
    "run": ()=>{ runway.func.forEach((f) => {
        f();
    });},
    "add": (i)=>{ runway.func[runway.func.length] = i; }
}

$(document).ready(function(){
    //runway.add();
    runway.add(sampleDeck);
    runway.run();
});

function isPortrait(){
    let size = {"x":screen.width, "y":screen.height };
    return size.x > size.y ? false : true;
}







function sampleDeck(){

}




