/***********************************************************************************************/
function showclock() {
    var date = new Date(),
        hours = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds(),
        timeZone = "AM",
        showTime = document.getElementById("clocktime");
    if (hours === 0) {
        hours = 12;
    }
    if (hours > 12) {
        hours = hours - 12;
        timeZone = "PM";
    }
    hours = (hours < 10) ? "0" + hours : hours;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    var realTime = hours + " : " + min + " : " + sec + " " + timeZone;
    showTime.innerHTML = realTime;
    setTimeout(showclock, 1000);
}
/*-------------------------------------------------------------------------------------------*/
function validationSignIn() {
    var name = document.getElementById("username").value,
        password = document.getElementById("password").value,
        labelName = document.getElementById("name"),
        labelpass = document.getElementById("pass"),
        valid = true;

    if (name === "") {
        labelName.innerHTML = "Required *";
        return valid = false;
    } else if (!isNaN(name) || name.length < 3 || name.indexOf(" ") != -1) {
        labelName.innerHTML = "Please Enter Valid Username";
        return valid = false;
    } else if (password === "") {
        labelpass.innerHTML = "Required *";
        return valid = false;
    } else if (password.length < 4) {
        labelpass.innerHTML = "Wrong Password";
        return valid = false;
    } else {
        labelName.innerHTML = "";
        labelpass.innerHTML = "";
        return valid = true;
    }
}

/*************************************************************************/
// sign up function

function validationSignUp() {
    let inputFName = document.querySelector(".inputfname").value,
        labelFName = document.querySelector(".first-name"),
        inputLName = document.querySelector(".inputlname").value,
        labelLName = document.querySelector(".last-name"),
        inputmail = document.querySelector(".inputmail").value,
        labelmail = document.querySelector(".mail"),
        inputphone = document.querySelector(".inputphone").value,
        labelPhone = document.querySelector(".lphone"),
        phoneReg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
        validUp = true;


    // first name validate
    if (inputFName === "") {
        labelFName.innerHTML = "required *";
        labelFName.style.color = "blue";
        return validUp = false;
    } else if (!isNaN(inputFName) || inputFName.length < 3 || inputFName.indexOf(" ") != -1) {
        labelFName.innerHTML = "enter valid user name";
        labelFName.style.color = "blue";
        return validUp = false;
    }

    // last name validate
    else if (inputLName === "") {
        labelLName.innerHTML = "required *";
        labelLName.style.color = "blue";
        return validUp = false;
    } else if (!isNaN(inputLName) || inputLName.length < 3 || inputLName.indexOf(" ") != -1) {
        labelLName.innerHTML = "enter valid user name";
        labelLName.style.color = "blue";
        return validUp = false;
    }

    // email validate
    else if (inputmail === "") {
        labelmail.innerHTML = "required *";
        labelmail.style.color = "blue";
        return validUp = false;
    } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputmail) !== true) {
        labelmail.innerHTML = "in-valid mail";
        labelmail.style.color = "blue";
        return validUp = false
    }
    // phone validate
    if (inputphone === "") {
        labelPhone.innerHTML = "required *";
        labelPhone.style.color = "blue";
        return validUp = false;
    } else if (phoneReg.test(inputphone) !== true) {
        labelPhone.innerHTML = "in-valid phone number";
        labelPhone.style.color = "blue";
        return validUp = false;
    } else {
        labelFName.innerHTML = "first name :";
        labelLName.innerHTML = "last name :";
        labelFName.style.color = "black";
        labelLName.style.color = "black";
        labelmail.innerHTML = "email :";
        labelPhone.innerHTML = "mobile number :";
        labelmail.style.color = "black";
        labelPhone.style.color = "black";
        return validUp = true;
    }
}