// MILESTONE 2


    /*window.onload = function() {
          fetch("http://localhost:3333/products")
          .then( response => {
              if(!response.ok) {
                  throw Error ("ERROR");
              }
              return response.json();
          })
          .then( data => {
              
            //if( $( window ).width() <= 500 )
            //{
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
                cloneDiv.querySelectorAll("p")[2].innerHTML = o.releaseDate;
                cloneDiv.querySelectorAll("p")[3].innerHTML = o.price;
                cloneDiv.querySelectorAll("p")[4].innerHTML = o.starRating;
    
                let btnDelete = cloneDiv.querySelector("button.divDelete");
    
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
                    document.getElementsByClassName("contentDiv")[index+1].remove();
                }
                return cloneDiv;
            })
                .forEach ( function (cloneDiv) { return element.appendChild(cloneDiv); } );
            //}
            
            //else
            //{
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
            //}


          }).catch( error => {
              console.log(error);
          });
        }*/

        window.onload = async () => {
            try {
                const response = await fetch("http://localhost:3333/products");
                const json = await response.json();
                    {
                      let element = document.createElement('li');
                      element.classList.add("element");
                      let unorderedList = document.getElementById("tableID");
                      unorderedList.appendChild(element);
                      let divTemp = document.getElementById("divModel");
                  json
                  .map( function (o) {
                      let cloneDiv = divTemp.content.cloneNode(true);
          
                      cloneDiv.querySelectorAll("p")[0].innerHTML = o.productName;
                      cloneDiv.querySelectorAll("p")[1].innerHTML = o.productCode;
                      cloneDiv.querySelectorAll("p")[2].innerHTML = o.releaseDate;
                      cloneDiv.querySelectorAll("p")[3].innerHTML = o.price;
                      cloneDiv.querySelectorAll("p")[4].innerHTML = o.starRating;
          
                      let btnDelete = cloneDiv.querySelector("button.divDelete");
          
                      btnDelete.onclick = function (){
                          let id = o.productId;
                      $.ajax({
                          url: `http://localhost:3333/product/${id}`,
                          type: 'DELETE',
                          success: function(result) {
                              console.log(`product with Id ${id} deleted`);
                          }
                      });
      
                          let index = json.indexOf(o);
                          json.splice(index, 1);
                          console.log(json);
                          document.getElementsByClassName("contentDiv")[index+1].remove();
                      }
                      return cloneDiv;
                  })
                      .forEach ( function (cloneDiv) { return element.appendChild(cloneDiv); } );

                      console.log(json);
                      let table = document.querySelector("#tableID tbody");
                      let rowTemp = document.getElementById("rowModel");
                      json 
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
      
                      let index = json.indexOf(o);
                      data.splice(index, 1);
                      console.log(json);
                      document.getElementsByTagName("tr")[index+1].remove();
                  }
      
                  return cloneRow;
              })
                          .forEach ( function (cloneRow) { return table.appendChild(cloneRow); } );
            }
        }
            catch( error ) {
                console.log(error);
            }
        }