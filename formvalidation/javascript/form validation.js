const form = document.getElementById("form")
const name = document.getElementById("name");
const email = document.getElementById("email");
const phonenumber = document.getElementById("phonenumber");
const degreedetails = document.getElementById("degreedetails");
const yearofpass = document.getElementById("yearofpass");
const presentstatus = document.getElementById("presentstatus");
const textarea = document.getElementById("textarea");

form.addEventListener('submit', function(e) {
    e.preventDefault();
    validation();
})

const validation = function() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;
    const phoneRegex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/g;
    if (_name.value === "") {
        nameErr.innerText = "Please enter valid name";
        nameErr.style.color = "red"
        _name.style.border = "1px solid red";
    } else {
        nameErr.style.display = "none";
        _name.style.border = "1px solid green";
    }

    if ( 
        email.value === "" ||
        email.value.indexOf("@") === -1 ||
        !email.value.includes(".com" || ".in") ||
        !emailRegex.test(email.value)
    ) {
        emailErr.style.display = "block";
        emailErr.innerText = "Please enter valid Email";
        emailErr.style.color = "red"
        email.style.border = "1px solid red";
    } else {
        emailErr.style.display = "none";
        email.style.border = "1px solid green";
    }


    if (phonenumber.value === "" || !phoneRegex.test(phonenumber.value)) {
        phoneErr.innerText = "Please enter valid Phone Number";
        phoneErr.style.color = 'red';
        phonenumber.style.border = "1px solid red";
    } else {
        phonenumber.style.border = '1px solid green';
        phoneErr.style.display = "none";
    }


    if (degreedetails.value === "select") {
        degreeErr.innerText = "Please select any Option";
        degreeErr.style.color = "red";
        degreedetails.style.border = "1px solid red";
    } else {
        degreeErr.style.display = "none";
        degreedetails.style.border = "1px solid green";
    }


    if (yearofpass.value === "select") {
        yearofpass.style.border = "1px solid red";
        yearErr.innerText = "Please select any Option";
        yearErr.style.color = "red";
    } else {
        yearErr.style.display = "none";
        yearofpass.style.border = "1px solid green";
    }

    if (presentstatus.value === "select") {
        presentstatus.style.border = "1px solid red";
        statusErr.innerText = "Please select any Option";
        statusErr.style.color = "red";
    } else {
        presentstatus.style.border = "1px solid green";
        statusErr.style.display = "none";
    }

    if (textarea.value === "") {
        textarea.style.border = "1px solid red";
        textErr.innerText = "Please say something";
        textErr.style.color = "red";
    } else {
        textarea.style.border = "1px solid green";
        textErr.style.display = "none";
    }
}