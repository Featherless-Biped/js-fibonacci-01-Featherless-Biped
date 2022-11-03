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

function Post_Result(Input) {
    let RESULT = fetch(FIBONACCI_SERVER + Input)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            const result = document.getElementById("result");
            result.innerHTML = data.result;
        });
}

document.getElementById("button").addEventListener("click", function () {
    let Input = document.getElementById("input").value;
    Post_Result(Input);
});