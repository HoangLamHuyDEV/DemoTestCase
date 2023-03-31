function signin(username,password,confirmpassword) {
    const isWhiteSpace = password.split(" ").length > 1;
    const specialChar = ['`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '[', ']', '{', '}', ';', ':', "'", '"', '\\', '|', ',', '.', '<', '>', '/', '?', '~'];


    if (typeof(username) === 'string' &&typeof(password) === 'string' && typeof(confirmpassword) === 'string') {

        for (let i = 0; i < specialChar.length; i++) {
            if (username.includes(specialChar[i])) 
            {
                return { isSuccess: false, message: "Tên đăng nhập không được chứa các ký tự đặc biệt!" };
            }
        }

        if (isWhiteSpace) {
            return {isSuccess:false, message: 'Mật khẩu không được có khoảng trắng!'}
        }
        if (username != 'khachuong') {
        
            

            if (username.length == 0 || password.length == 0 || confirmpassword == 0) {
                return {isSuccess:false, message: 'Thiếu thông tin, xin mời bổ sung!'}
            } 

            if (username.length != 0 && password.length != 0 && username == password) {
                        return {isSuccess: false, message: "Tài khoản và mật khẩu không được trùng nhau!"}
                    } 
            
            if(password.length <= 6) {
                return{isSuccess:false, message: 'Mật khẩu phải lớn hơn 6 ký tự!'}
            }
                    
            if (password == confirmpassword)
            {
                return {isSuccess: true, message: "Đăng ký thành công!"}
            }else {
                return {isSuccess:false, message: 'Mật khẩu xác nhận sai!'}
            }
        
        }else {
            return {isSuccess:false, message: 'Tên tài khoản đã tồn tại,vui lòng chọn lại!'}
        }
    }else {
        return {isSuccess:false, message: 'Sai định dạng dữ liệu'}
    }
    
}
module.exports = signin