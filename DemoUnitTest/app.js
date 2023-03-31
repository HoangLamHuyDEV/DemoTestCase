// Trong tài liệu đặc tả

// Mô tả tính đăng nhập: Màn hình đăng nhập gồm 2 trường tên đăng nhập và mật khẩu. 
//Mật khẩu không được trùng với tên đăng nhập. Tên đăng nhập phải tối thiểu 6 ký tự

const specialChar = ['`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '[', ']', '{', '}', ';', ':', "'", '"', '\\', '|', ',', '.', '<', '>', '/', '?', '~'];


function login(username, password) {
   
    const isWhiteSpace = password.split(" ").length > 1;

   

    if (username.length == 0 || password.length == 0) {
        return {isSuccess: false, message: "Tên đăng nhập hoặc mật khẩu không được bỏ trống!"}
    } 
    if (username.length != 0 && password.length != 0 && username == password) {
        return {isSuccess: false, message: "Tài khoản và mật khẩu không được trùng nhau"}
    } 
    if (typeof(username) === 'string' && typeof(password) === 'string') 
        {   
            for (let i = 0; i < specialChar.length; i++) {
                if (username.includes(specialChar[i])) {
                    return { isSuccess: false, message: "Tài khoản không được chứa kí tự đặc biệt" };
                }
            }
            
            
            if(isWhiteSpace) {
                return {isSuccess: false, message: "Mật khẩu không được có khoảng trống"};
            }
            if (username == "khachuong") {
                if (password.length > 6 ) {
                    if (password == "1234567") {
                        return {isSuccess: true, message: "Đăng nhập thành công!"}
                    } else {
                        return {isSuccess: false, message: "Sai mật khẩu"}
                    }
                } else {
                    return {isSuccess: false, message: "Mật khẩu phải lớn hơn 6 ký tự!"}
                }
            }else {
                return {isSuccess: false, message: "Tài khoản không tồn tại"}
            }
    }else {
        return {isSuccess: false, message: "Sai định dạng dữ liệu"}
    }
        
}



module.exports = login


// feature: tính năng

// Unit test cho function login

// Sẽ phải viết các Test case - các kịch bản test
//1 Test case cần bao gồm

// 1. Tình huống
// 2. Input data
// 3. Kết quả mong đợi


// TC01: Kiểm tra đăng nhập sai mật khẩu
// 1. Tình huống: Người dùng truyền vào tài khoản đúng nhưng mật khẩu sai 
// 2. Input: username = khachuong và password = abc
// 3. Kết qủa mong đợi (Expected result): {isSuccess: false, message: "Sai mật khẩu, vui lòng thử lại!"}

// Kết luận: Not passed (không đạt) - hay còn gọi là failed
// console.log(login("khachuong", "abc"))