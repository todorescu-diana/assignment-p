// MILESTONE 1


let data = [
    {
        productName: "Leaf Rake" ,
        productCode: "gdn 0011" ,
        productAvailable: "March 19, 2019" ,
        productPrice: "$19.95" ,
        productRating: "4"
    },
    {
        productName: "Garden Cart" ,
        productCode: "gdn 0023" ,
        productAvailable: "March 18, 2019" ,
        productPrice: "$32.99" ,
        productRating: "5"
    },
    {
        productName: "Hammer" ,
        productCode: "tbx 0048" ,
        productAvailable: "May 21, 2019" ,
        productPrice: "$8.90" ,
        productRating: "3"
    },
    {
        productName: "Saw" ,
        productCode: "tbx 0022" ,
        productAvailable: "May 15, 2019" ,
        productPrice: "$11.55" ,
        productRating: "4"
    },
    {
        productName: "Video Game Controller" ,
        productCode: "gmg 0042" ,
        productAvailable: "October 15, 2018" ,
        productPrice: "$35.95" ,
        productRating: "3"
    }
];

function dataCollect(){

    if( $( window ).width() <= 500 ){
        let element = document.createElement('li');
        element.classList.add("element");
        let unorderedList = document.getElementById("tableID");
        unorderedList.appendChild(element);
        let divTemp = document.getElementById("divModel");
        data
            .map( function (o) {
                let cloneDiv = divTemp.content.cloneNode(true);
    
                cloneDiv.querySelectorAll("p")[0].innerHTML = o.productName;
                cloneDiv.querySelectorAll("p")[1].innerHTML = o.productCode;
                cloneDiv.querySelectorAll("p")[2].innerHTML = o.productAvailable;
                cloneDiv.querySelectorAll("p")[3].innerHTML = o.productPrice;
                cloneDiv.querySelectorAll("p")[4].innerHTML = o.productRating;
    
                let btnDelete = cloneDiv.querySelector("button.divDelete");
    
                btnDelete.onclick = function (){
                    let index = data.indexOf(o);
                    data.splice(index, 1);
                    document.getElementsByClassName("contentDiv")[index+1].remove();
                }
                return cloneDiv;
            })
                .forEach ( function (cloneDiv) { return element.appendChild(cloneDiv); } );

        console.log("small");
    }

    else{
        let table = document.querySelector("#tableID tbody");
        let rowTemp = document.getElementById("rowModel");
        data 
            .map( function (o) {
                let cloneRow = rowTemp.content.cloneNode(true);

                cloneRow.querySelectorAll("tr .tdclass")[0].innerHTML = o.productName;
                cloneRow.querySelectorAll("tr .tdclass")[1].innerHTML = o.productCode;
                cloneRow.querySelectorAll("tr .tdclass")[2].innerHTML = o.productAvailable;
                cloneRow.querySelectorAll("tr .tdclass")[3].innerHTML = o.productPrice;
                cloneRow.querySelectorAll("tr .tdclass")[4].innerHTML = o.productRating;

                let btnDelete = cloneRow.querySelector("button.delete");

                btnDelete.onclick = function (){
                    let index = data.indexOf(o);
                    data.splice(index, 1);
                    console.log(data);
                    document.getElementsByTagName("tr")[index+1].remove();
                }
            return cloneRow;
        })
            .forEach ( function (cloneRow) { return table.appendChild(cloneRow); } );
            console.log("big");
    }
    }

let resizeTimer;
let oldState;
let newState;

window.onload = function(){
    let oldWidth = window.innerWidth;
    if(oldWidth <= 500)
    {
        oldState = "small";
    }
    else
    {
        oldState = "big";
    }
    dataCollect();
    $(window).one('resize',function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            let newWidth = window.innerWidth;
            if(newWidth <= 500)
                {
                    newState = "small";
                }
            else
                {
                    newState = "big";
                }
            console.log(`old: ${oldState}`);
            console.log(`new: ${newState}`);
            if(oldState !== newState)
                {
                    dataCollect();
                    console.log("resize");
                }
            oldState = newState;
            console.log(`old: ${oldState}`);
        }, 200);
      });
}