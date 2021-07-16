let getEmail = document.getElementById('email');
let getPhone = document.getElementById('phone');
let getPCode = document.getElementById('postcode');
let result = document.getElementById('ui');

function checkEmail(email) {
    const chk = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return chk.test(String(email).toLowerCase());
}

function checkPhone(phone) {
    const chk = /\+?(88)?0?1[0-9][0-9]{8}\b/;
    return chk.test(String(phone));
}

function checkPCode(postcode) {
    const chk = /^\d{4}$/;
    return chk.test(String(postcode));
}

function checkAll() {
    result.classList.remove('text-warning');
    result.classList.remove('text-success');
    result.classList.remove('text-danger');
}

function checkAns(str, checkValid) {
    input = prompt(`Enter the ${str}: `);
    if (input === '') {
        result.classList.add('text-danger');
        result.innerHTML = "ERROR!";
    }
    else if (checkValid(input)) {
        result.classList.add('text-success');
        result.innerHTML = `${input} is CORRECT`;
    } else {
        result.classList.add('text-danger');
        result.innerHTML = `${input} is INCORRECT`;
    }
}


getEmail.addEventListener('click', function () {
    checkAll();
    checkAns("Email", checkEmail);
});


getPhone.addEventListener('click', function () {
    checkAll();
    checkAns("Phone Number", checkPhone);
});

getPCode.addEventListener('click', function () {
    checkAll();
    checkAns("Post Code", checkPCode);
});
