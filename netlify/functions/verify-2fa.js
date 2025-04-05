const speakeasy = require('speakeasy');

exports.handler = async (event, context) => {
    const { code } = JSON.parse(event.body);

    // Khóa bí mật 2FA của bạn (Đã được chia sẻ cho gia đình)
    const secret = 'GED22WQXSMETG4WETQNXBSZZJCSWFNGV'; // Khóa 2FA của bạn

    // Kiểm tra mã 2FA người dùng nhập vào
    const isValid = speakeasy.totp.verify({
        secret: secret,
        encoding: 'base32',
        token: code
    });

    if (isValid) {
        return {
            statusCode: 200,
            body: JSON.stringify({ success: true, message: 'Mã 2FA hợp lệ. Đăng nhập thành công!' })
        };
    } else {
        return {
            statusCode: 400,
            body: JSON.stringify({ success: false, message: 'Mã 2FA không hợp lệ. Vui lòng thử lại.' })
        };
    }
};
