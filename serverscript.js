// MILESTONE 2


    function fetchData() {
          fetch("http://localhost:3333/products")
          .then( response => {
              if(!response.ok) {
                  throw Error ("ERROR");
              }
              return response.json();
          })
          .then( data => {
              
            if( $( window ).width() <= 500 )
            {
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
            }
            
            else
            {
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
            }


          }).catch( error => {
              console.log(error);
          });
        }
        
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
    fetchData();
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
            fetchData();
            console.log("resize");
        }
        oldState = newState;
        console.log(`old: ${oldState}`);
        }, 200);
        });
    }