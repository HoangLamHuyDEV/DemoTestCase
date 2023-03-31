const login = require('./app')
const signin = require('./signin')
const repassword = require('./rePassword')

describe('Đây là nhóm test case dành cho hàm Login()', () => {
    test('TC01: Tên đăng nhập bị bỏ rỗng', () => {
        expect(login("", "12345")).toMatchObject({isSuccess: false, message: "Tên đăng nhập hoặc mật khẩu không được bỏ trống!"})
    })
    
    test('TC02: Mật khẩu có độ dài < 6 ký tự', () => {
        expect(login("khachuong", "12345")).toMatchObject({isSuccess: false, message: "Mật khẩu phải lớn hơn 6 ký tự!"})
    })
    
    
    test('TC03: Kiểu dữ liệu truyền vào bị sai', () => {
        expect(login(399944,"12345678")).toMatchObject({isSuccess: false, message: "Sai định dạng dữ liệu"})
    })

    test('TC04: Đăng nhập tài khoản không tồn tại', () => {
        expect(login("hjggd","123456")).toMatchObject({isSuccess: false,message: "Tài khoản không tồn tại"})
    })

    test('TC05: Đăng nhập sai mật khẩu',() => {
        expect(login("khachuong","12345678")).toMatchObject({isSuccess:false,message: "Sai mật khẩu"})
    })

    test('TC06: Tài khoản và mật khẩu trùng nhau',() => {
        expect(login("khachuong","khachuong")).toMatchObject({isSuccess:false, message: "Tài khoản và mật khẩu không được trùng nhau"})
    })

    test('TC07: Đăng nhập khi mật khẩu có khoản trống',() => {
        expect(login("khachuong","kha chuong")).toMatchObject({isSuccess:false, message: "Mật khẩu không được có khoảng trống"})
    })

    test('TC08: Tài khoản có kí tự đặc biệt',() => {
        expect(login("khachuong@","khachuong")).toMatchObject({isSuccess:false, message: "Tài khoản không được chứa kí tự đặc biệt"})
    })
})

describe('Đây là nhóm test case dành cho hàm signin()', () =>{
    test('TC01: Đăng kí thành công',() =>{
        expect(signin("huyhoang","1234567","1234567")).toMatchObject({isSuccess:true, message: 'Đăng ký thành công!'})
    })

    test('TC02: Tài khoản đã tồn tại',() =>{
        expect(signin("khachuong","1234567","1234567")).toMatchObject({isSuccess:false, message: 'Tên tài khoản đã tồn tại,vui lòng chọn lại!'})
    })

    test('TC03: Sai xác nhận mật khẩu',() =>{
        expect(signin("huyhoang","1234567","1234566")).toMatchObject({isSuccess:false, message: 'Mật khẩu xác nhận sai!'})
    })

    test('TC04: Mật khẩu có độ dài < 6 ký tự',() =>{
        expect(signin("huyhoang","123456","123456")).toMatchObject({isSuccess:false, message: 'Mật khẩu phải lớn hơn 6 ký tự!'})
    })

    test('TC05: Tên đăng nhập không được chứa các ký tự đặc biệt',() =>{
        expect(signin("huyhoang@","123456","123456")).toMatchObject({isSuccess:false, message: 'Tên đăng nhập không được chứa các ký tự đặc biệt!'})
    })

    test('TC06: Mật khẩu không được có khoảng trắng',() =>{
        expect(signin("huyhoang","1234 56","123456")).toMatchObject({isSuccess:false, message: 'Mật khẩu không được có khoảng trắng!'})
    })

    test('TC07: Tài khoản và mật khẩu không được bỏ trống',() =>{
        expect(signin("","1234567","1234567")).toMatchObject({isSuccess:false, message: 'Thiếu thông tin, xin mời bổ sung!'})
    })

    test('TC08: Kiểu dữ liệu truyền vào bị sai', () => {
        expect(signin(65399944,"12345678",'12345678')).toMatchObject({isSuccess: false, message: "Sai định dạng dữ liệu"})
    })

    test('TC09:Tài khonar và mật khẩu trùng nhau',() =>{
        expect(signin("huyhoang","huyhoang","123456")).toMatchObject({isSuccess:false, message: 'Tài khoản và mật khẩu không được trùng nhau!'})
    })
})

describe('Đây là nhóm test case dành cho hàm RePassword',() => {
    test('TC01: Đổi password thành công',() =>{
        expect(repassword("huyhoang","1234567","1234568","1234568")).toMatchObject({isSuccess:true, message: 'Mật khẩu đổi thành công!'})
    })

    test('TC02: Tài khoản không tồn tại',() =>{
        expect(repassword("khachuong","1234567","12345677",'12345677')).toMatchObject({isSuccess:false, message: 'Tài khoản không tồn tại,vui lòng chọn lại!'})
    })

    test('TC03: Sai xác nhận mật khẩu',() =>{
        expect(repassword("huyhoang","1234567","1234566",'1234568')).toMatchObject({isSuccess:false, message: 'Mật khẩu xác nhận sai!'})
    })

    test('TC04: Mật khẩu có độ dài < 6 ký tự',() =>{
        expect(repassword("huyhoang","123456","123456","1234567")).toMatchObject({isSuccess:false, message: 'Mật khẩu phải lớn hơn 6 ký tự!'})
    })

    test('TC05: Tên đăng nhập không được chứa các ký tự đặc biệt',() =>{
        expect(repassword("huyhoang@","12345678","12345678",'12345678')).toMatchObject({isSuccess:false, message: 'Tên đăng nhập không được chứa các ký tự đặc biệt!'})
    })

    test('TC06: Mật khẩu không được có khoảng trắng',() =>{
        expect(repassword("huyhoang","1234 56","1234567",'1234567')).toMatchObject({isSuccess:false, message: 'Mật khẩu không được có khoảng trắng!'})
    })

    test('TC07: Tài khoản và mật khẩu không được bỏ trống',() =>{
        expect(repassword("","1234567","12345677",'12345677')).toMatchObject({isSuccess:false, message: 'Thiếu thông tin, xin mời bổ sung!'})
    })

    test('TC08: Kiểu dữ liệu truyền vào bị sai', () => {
        expect(repassword(65399944,"12345678",'123456788','123456788')).toMatchObject({isSuccess: false, message: "Sai định dạng dữ liệu"})
    })

    test('TC09:Tài khoan và mật khẩu trùng nhau',() =>{
        expect(repassword("huyhoang","12345678","huyhoang",'huyhoang')).toMatchObject({isSuccess:false, message: 'Tài khoản và mật khẩu không được trùng nhau!'})
    })

    test('TC10:Mật khẩu mới và mật khẩu cũ trùng nhau',() =>{
        expect(repassword("huyhoang","12345678","12345678",'12345678')).toMatchObject({isSuccess:false, message: 'Mật khẩu mới và mật khẩu cũ không được trùng nhau!'})
    })
})