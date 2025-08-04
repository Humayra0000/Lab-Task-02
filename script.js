function validate()
{
    let fullname = document.getElementById('fullname').value;
    let email = document.getElementById('email').value;
    let num = document.getElementById('num').value;
    let pass = document.getElementById('pass').value;
    let cpass = document.getElementById('cpass').value;
    let exlevel = document.getElementById('exlevel').value;
    let salary = document.getElementById('salary').value;
    let check = document.getElementById('check').checked;

    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const phoneRegex = /^\d{11}$/;
    
    


    if (fullname == "" || email == "" || num== "" || pass == "" || cpass == "" || exlevel == "" || salary == "" ) {
        document.getElementById('error').innerHTML = "*Please all the field fill first";
    return false;
    }       
    

    if (!nameRegex.test(fullname)) {
        document.getElementById('error').innerHTML = "*Number is not allowed";
        return false;
    }
     
    
    if(!emailRegex.test(email)) {
        document.getElementById('error').innerHTML = "*Email should be example@gmail.com formate";
        return false;
    }

    if (!phoneRegex.test(num)) {
        document.getElementById('error').innerHTML = "*Phone number must be 11";
        return false;
    }

    if(!passwordRegex.test(pass)) {
        document.getElementById('error').innerHTML = "*Password must be at least 8 character long and use at least one special characters and numbers";
        return false;
    }


    if(pass != cpass) {
        document.getElementById('error').innerHTML = "*Passwod doesn't matched";
        return false;
    }

    if (!phoneRegex.test(num)) {
        document.getElementById('error').innerHTML = "*Phone number must be 11";
        return false;
    }


    if (!check) {
        document.getElementById('error').innerHTML = "*Please accept terms and conditions..";
        return false;
    }

    alert("Form submitted successfully!!");

    return true;
}