// let Calculate_Fib = function () {
//

//     let    a = 0;
//     let    b = 1;
//     let    f = 1;
//     for (let i = 2; i <= n; i++) {
//         f = a + b;
//         a = b;
//         b = f;
//     }
//     return f;
// };
// document.getElementById("button").addEventListener("click", function () {
//     Post_Result();

// });

const FIBONACCI_SERVER = "http://localhost:5050/fibonacci/";
let loader = document.getElementById("spinner");

function Post_Result(Input) {
    displayLoading()
    let RESULT = fetch(FIBONACCI_SERVER + Input)
        .then(function (response) {
            console.log(response.status);
            if (response.ok) {
                return response.json();
            }

            return response.text().then((text) => {
                throw new Error(text);
            });
        })
        .then(function (data) {
            const result = document.getElementById("result");
            result.innerHTML = data.result;
        })
        .catch((error) => {
            const result = document.getElementById("result");
            result.innerHTML = error;
        })
        hideLoading()
    }
//  showing loading
function displayLoading() {
	loader.classList.remove("d-none")
    loader.classList.add("d-block")
 }

// hiding loading
function hideLoading() {
    setTimeout(() => {
    loader.classList.remove("d-block")
    loader.classList.add("d-none");
}, 1000);
}
document.getElementById("button").addEventListener("click", function () {
    let Input = document.getElementById("input").value;
    if (Input > 50) {
        result.innerHTML = "error";
    } else {
        Post_Result(Input) 
        
    }

});
