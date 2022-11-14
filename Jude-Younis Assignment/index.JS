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
const FIBONACCI_SERVER_Results = "http://localhost:5050/getFibonacciResults";
const Open = '<p class="pb-3 border-bottom border-dark"> The Fibonacci of ';
const Middle = " is <b>";
const MiddleEnd = "</b>";
const Close = "</p>";
let loader = document.getElementById("spinner");

function Log_Results() {
    let History = fetch(FIBONACCI_SERVER_Results)
        .then(async function (response) {
            console.log(response.status);
            if (response.ok) {
                return response.json();
            }
        })
        .then(function (data) {
            console.log(data.results);
            let list = data.results;
            let newList = [];
            for (let i = 0; i < list.length; i++) {
                let obj = list[i];
                let _id = obj._id;
                let number = obj.number;
                let createdDate = Date(obj.createdDate);
                let result = obj.result;
                newElement =
                    Open +
                    number +
                    Middle +
                    result +
                    MiddleEnd +
                    ".Calucalated at: " +
                    createdDate +
                    Close;
                newList.push(newElement);
            }
            console.log(newList);
            document.querySelector("#posted_Results").innerHTML =
                newList.join(" ");
        });
}

function Post_Result(Input) {
    displayLoading();
    let RESULT = fetch(FIBONACCI_SERVER + Input)
        .then(async function (response) {
            console.log(response.status);
            if (response.ok) {
                return response.json();
            }

            const text = await response.text();
            throw new Error(text);
        })
        .then(function (data) {
            const result = document.getElementById("result");
            result.innerHTML = data.result;
        })
        .catch((error) => {
            const result = document.getElementById("result");
            result.innerHTML = error;
        });
    return hideLoading();
}
//  showing loading
function displayLoading() {
    loader.classList.remove("d-none");
    loader.classList.add("d-block");
}

// hiding loading
function hideLoading() {
    setTimeout(() => {
        loader.classList.remove("d-block");
        loader.classList.add("d-none");
    }, 500);
}
document.getElementById("button").addEventListener("click", function () {
    let Input = document.getElementById("input").value;
    if (Input > 50) {
        result.innerHTML = "error";
    } else {
        Post_Result(Input)
        Log_Results();
    }
});
