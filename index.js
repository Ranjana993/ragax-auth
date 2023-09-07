function handlesubmit() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const cpassword = document.getElementById("cpassword").value;
    const phone = document.getElementById("phone").value;

    let checkUser = /^[A-Za-z1-99.  ]{3,50}$/;
    let checkPassword = /^(?=.*[0-9)(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
    let checkEmail = /^[A-Za-z_0-9]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    const checkPhone = /^[789][0-9]{9}$/;

    // user check
    if (checkUser.test(username)) {
        document.getElementById('usererror').innerHTML = " "
    } else {
        document.getElementById('usererror').innerHTML = "Username is invalid or wrong.";
        return false
    }

    // email
    if (checkEmail.test(email)) {
        document.getElementById('emailerror').innerHTML = " "
    } else {
        document.getElementById('emailerror').innerHTML = "email is invalid or wrong.";
        return false
    }

    // password 
    if (checkPassword.test(password)) {
        document.getElementById('passworderror').innerHTML = " "
    } else {
        document.getElementById('passworderror').innerHTML = "password is invalid or wrong.";
        return false
    }

    // Confirm password
    if (password.match(cpassword)) {
        document.getElementById('cpassworderror').innerHTML = " "
    } else {
        document.getElementById('cpassworderror').innerHTML = "password not matched "
        return false
    }

    // checkPhone ..
    if (checkPhone.test(phone)) {
        document.getElementById('phoneerror').innerHTML = " "
    } else {
        document.getElementById('phoneerror').innerHTML = "Phone number is invalid or wrong.";
        return false
    }
    
}












