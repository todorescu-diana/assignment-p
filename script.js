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

window.onload = function(){
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

            return cloneRow;
        })
            .forEach ( function (cloneRow) { return table.appendChild(cloneRow); } );
}