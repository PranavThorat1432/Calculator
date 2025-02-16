let input = document.getElementById("input-box");
let buttons = document.querySelectorAll("button");
let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            // Replace 'x' with '*' and '÷' with '/'
            string = string.replace(/x/g, '*').replace(/÷/g, '/');
            
            try {
                string = eval(string);
                if (string === Infinity || string === -Infinity || isNaN(string)) {
                    throw new Error("Invalid calculation");
                }
                input.value = string;
            } catch (error) {
                input.value = "Error";
                string = "";
            }

        } else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;

        } else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;

        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
