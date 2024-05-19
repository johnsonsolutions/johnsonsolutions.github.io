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
    runway.add(fitting)
    runway.add(testKit);
    runway.add(force);
    runway.run();
});

function isPortrait(){
    let size = {"x":screen.width, "y":screen.height };
    return size.x > size.y ? false : true;
}

function fitting(){
    if(isPortrait()){
        d3.select("#noForm")
        .style('width', "67%");
    }
}


class cUnit{
    constructor(
        navigation="",
        search="",
        bgVid="",
        slider="",
        cta="",
        socials="",
        footer=""
    ){ }
}

let template = () =>{
    let ret = new cUnit();

    return ret;
};



function testKit(){
    d3.select("body")
    .append("p")
    .attr('id', "demo");

}

function force(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "kits/navigation/nav0.html", true);
    xhttp.send();
}