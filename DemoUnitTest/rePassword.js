function repassword(username,password,rePassword,confirmRePassword) {
    const specialChar = ['`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '[', ']', '{', '}', ';', ':', "'", '"', '\\', '|', ',', '.', '<', '>', '/', '?', '~'];
   

    if (typeof(username) === 'string' &&typeof(password) === 'string' && typeof(rePassword) === 'string' && typeof(confirmRePassword) ==='string') {
        const isWhiteSpacePass = (password.split(" ").length > 1);
        const isWhiteSpaceRePass = (rePassword.split(" ").length > 1);
        const isWhiteSpaceCofPass = (confirmRePassword.split(" ").length > 1);


        if (username.length == 0 || password.length == 0 || rePassword.length == 0 || confirmRePassword.length == 0){
            return {isSuccess:false, message: 'Thiếu thông tin, xin mời bổ sung!'}
        }

        if(password.length <= 6) {
            return{isSuccess:false, message: 'Mật khẩu phải lớn hơn 6 ký tự!'}
        }

        if (username == rePassword) {
            return {isSuccess:false, message: 'Tài khoản và mật khẩu không được trùng nhau!'}
        }

        if (isWhiteSpacePass || isWhiteSpaceRePass || isWhiteSpaceCofPass) {
            return {isSuccess:false, message: 'Mật khẩu không được có khoảng trắng!'}
        }


        for (let i = 0; i < specialChar.length; i++) {
            if (username.includes(specialChar[i])) 
            {
                return { isSuccess: false, message: "Tên đăng nhập không được chứa các ký tự đặc biệt!" };
            }
        }

        if (password == rePassword){
            return {isSuccess:false, message: 'Mật khẩu mới và mật khẩu cũ không được trùng nhau!'}
        }


        if (username == 'huyhoang' && password != rePassword){
            if (rePassword == confirmRePassword){
                return {isSuccess:true, message: 'Mật khẩu đổi thành công!'}
            }else {
                return {isSuccess:false, message: 'Mật khẩu xác nhận sai!'}
            }
        }else {
            return {isSuccess:false, message: 'Tài khoản không tồn tại,vui lòng chọn lại!'}
        }

    }else {
        return {isSuccess:false, message: 'Sai định dạng dữ liệu'}
    }

}

module.exports = repassword