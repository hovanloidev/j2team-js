function dom(selector) {
    return document.querySelector(selector);
}

function validateUserEmail() {
    let email = dom("#Email").value;
    let noti = dom("#notiEmail");

    if (!email) {
        noti.innerHTML = "Email không được trống";
        return false;
    }

    let regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!regex.test(email)) {
        noti.innerHTML = " Email phải đúng định dạng";
    }
    noti.innerHTML = "";
    return true;
}

function validateUserName() {
    let name = dom("#Name").value;
    let noti = dom("#notiName");

    if (!name) {
        noti.innerHTML = "Tên không được trống";
        return false;
    }

    if (!isNaN(name)) {
        notification.innerHTML = "Tên phải là chữ";
        return false;
    }

    let regex = /^[A-Z][a-z]+( [A-Z][a-z]*)*$/
    if (!regex.test(name)) {
        notification.innerHTML = "Tên sai định dạng";
        return false;
    }
    noti.innerHTML = "";
    return true;
}

function validateUserPw() {
    let passW = dom("#Pass").value;
    let noti = dom("#notiPass");

    if (!passW) {
        noti.innerHTML = "Mật khẩu không để trống";
        return false;
    }

    let regex =
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,8}$/;
    if (!regex.test(passW)) {
        noti.innerHTML =
            " mật khẩu phải đúng định dạng (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,8}$/) tự mò đi";
        return false;
    }
    noti.innerHTML = "";
    return true;
}

function validateUserSex() {
    let loaiGt = document.getElementsByName("sex");
    let noti = dom("#notiSex");

    if (!(loaiGt[0].checked || loaiGt[1].checked)) {
        noti.innerHTML = "Giới tính không được trống";
        return false;
    }

    noti.innerHTML = "";
    return true;
}

function validateAddress() {
    let desc = dom("#Address").value;
    let noti = dom("#notiAddress");

    if (!desc) {
        noti.innerHTML = "Địa chỉ không được trống";
        return false;
    }

    if (desc.length > 5 && desc.length < 30) {
        noti.innerHTML = "Địa chỉ không được quá 30 ký tự và ngắn hơn 5 ký tự";
        return false;
    }
    noti.innerHTML = "";
    return true;
}

function validateForm() {
    let isValid = true;
    isValid =
        validateUserEmail() &
        validateUserName() &
        validateUserPw() &
        validateUserSex() &
        validateAddress();

    if (!isValid) {
        return false;
    }
    return true;
}
