// MILESTONE 2


window.onload = function() {

      function fetchData() {
          fetch("http://localhost:3333/products")
          .then( response => {
              if(!response.ok) {
                  throw Error ("ERROR");
              }
              return response.json();
          })
          .then( data => {
              console.log(data);
              let table = document.querySelector("#tableID tbody");
              let rowTemp = document.getElementById("rowModel");
            data 
                .map( function (o) {
            let cloneRow = rowTemp.content.cloneNode(true);

            cloneRow.querySelectorAll("tr .tdclass")[0].innerHTML = o.productName;
            cloneRow.querySelectorAll("tr .tdclass")[1].innerHTML = o.productCode;
            cloneRow.querySelectorAll("tr .tdclass")[2].innerHTML = o.releaseDate;
            cloneRow.querySelectorAll("tr .tdclass")[3].innerHTML = o.price;
            cloneRow.querySelectorAll("tr .tdclass")[4].innerHTML = o.starRating;

            let btnDelete = cloneRow.querySelector("button.delete");

            btnDelete.onclick = function (){
                let id = o.productId;
                $.ajax({
                    url: `http://localhost:3333/product/${id}`,
                    type: 'DELETE',
                    success: function(result) {
                        console.log(`product with Id ${id} deleted`);
                    }
                });

                let index = data.indexOf(o);
                data.splice(index, 1);
                console.log(data);
                document.getElementsByTagName("tr")[index+1].remove();
            }

            return cloneRow;
        })
            .forEach ( function (cloneRow) { return table.appendChild(cloneRow); } );
          }).catch( error => {
              console.log(error);
          });
        }
        fetchData();
    }