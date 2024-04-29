Object.prototype.yell = function(){ console.log(this); return this; };

$(document).ready(
    function(){
        injector.inject();
    }
);

let injector = {
    "prep": 
        function(args){
            this.injection.push(...args);
        },
    "injection": [],
    "inject": 
        function(){
            for(let i = 0; i < this.injection.length; i++){
                this.injection[i]();
            }
        }
}

function fetch(path){
    $.ajax({
        url: path,
        type: 'GET',
        dataType:'html',
        success: function(response){
            return response;
        },
        error:function(xhr, status, error){
            console.error('badRead: ', error);
        }
    });
}

function sPrint(){
    $("body").html(sample());
}




function sample(){
    let testO = new cUnit();

    testO.cta = ("");
    //testO.navigation = "<div class='nameTag'><h1>Tevin Johnson</h1><br/><nav><ul class='navMnu'><li><a href='index.html'>Home</a></li><li><a>Next..</a></li></ul></nav></div>";
    testO.navigation = fetch("../kits/navigation/nav0.html");
    testO.navigation.yell();
    testO.bgVid = "<div class='bgvCont'><video autoplay class='bgVid' loop><source src='assets/video/IntroL1.mp4' type='video/mp4'></video></div>";

    return testO.print();
}

class cUnit{
    constructor(){}
    print(){ 
        let op = "";
        op += this.navigation != null ? this.navigation : "";
        op += this.search != null ? this.search : "";
        op += this.bgVid != null ? this.bgVid : "";
        op += this.slider != null ? this.slider : "";
        op += this.cta != null ? this.cta : "";
        op += this.socials != null ? this.socials : "";
        op += this.footer != null ? this.footer : "";
        return op;
    }
}


injector.prep([sPrint]);
