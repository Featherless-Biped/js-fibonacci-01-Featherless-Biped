// const FIBONACCI_SERVER = "http://localhost:5050/fibonacci/:number"
// const btn = document.getElementById("button");
// const input = document.getElementById("input");
// const spinner = document.querySelector(".spinner-border");

let Calculate_Fib = function () {
    let n = document.getElementById("input").value;
    
    let    a = 0;
    let    b = 1;
    let    f = 1;
    for (let i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return f;
};
function Post_Result() {
    let RESULT = Calculate_Fib();
    document.getElementById("result").innerHTML = RESULT;
  }

  document.getElementById("button").addEventListener("click", function () {
    Post_Result();
    
});

// fetch(FIBONACCI_SERVER)
// 	.then(function (response) {
// 		return response.json();
// 	})
// 	.then(function (data) {
		
// 		const result = document.getElementById("result");
// 		login.innerHTML = data.login;//data.name
// 	});