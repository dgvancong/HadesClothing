function signup(e){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (username == null || username == "") {
        alert("Tên người dùng không được để trống! Vui lòng nhập lại!");
        return false;
    }
    else if (email != "" && email != null && (atposition < 1 || dotposition < (atposition + 2) || (dotposition + 2) >= email.length)) {
        alert("Email khách hàng không hợp lệ! Vui lòng nhập lại!");
        return false;
    }
    else if (password == null || password == "") {
        alert("Mật khẩu khách hàng không được để trống! Vui lòng nhập lại!");
        return false;
    }
    var user = {
        "username": username,
        "email": email,
        "password": password
    };
    var json = JSON.stringify(user);
    localStorage.setItem(username,json);
    alert("Đăng Ký Thành Công");

}

function login(e){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);

    if(user == null){
        alert("Vui lòng nhập Email và Password")
    }
    else if(username == data.username && email == data.email && password == data.password){
        alert("Đăng Nhập Thành Công")
        window.location.href ="Index.html"
    }
    else{
        alert("Đăng Nhập Không Thành Công")
    }
};