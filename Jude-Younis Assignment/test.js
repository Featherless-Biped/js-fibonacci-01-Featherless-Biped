const FIBONACCI_SERVER = "http://localhost:5050/fibonacci/";
const FIBONACCI_SERVER_Results = "http://localhost:5050/getFibonacciResults"
const Open ='<p class="pb-3 border-bottom border-dark">'
const Close = '</p>'
let loader = document.getElementById("spinner");

function Log_Results(){
    let RESULT = fetch(FIBONACCI_SERVER_Results)
        .then(async function (response) {
            console.log(response.status);
            if (response.ok) {
                return response.json();
            }
        })
        console.log(response)
        // .then(function (data) {
        //     const results = document.getElementById("mt-5 mx-2");
        //     console.log(data.results)
        //     });
        //     const newArr = arr.map((element) => {
        //         return Open + element + Close;                 
        //     });
        //     console.log(newArr)     
        }