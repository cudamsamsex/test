exports.handler = async (event, context) => {
    const { code } = JSON.parse(event.body);

    // Giả sử bạn có một hàm kiểm tra mã 2FA
    const isValid = check2FACode(code);

    if (isValid) {
        return {
            statusCode: 200,
            body: JSON.stringify({ success: true, message: 'Mã 2FA hợp lệ.' })
        };
    } else {
        return {
            statusCode: 400,
            body: JSON.stringify({ success: false, message: 'Mã 2FA không hợp lệ.' })
        };
    }
};

// Hàm kiểm tra mã 2FA (tùy chỉnh theo cách bạn muốn)
function check2FACode(code) {
    // Logic kiểm tra mã 2FA (có thể tích hợp với Google Authenticator API, v.v.)
    return code === '123456'; // Ví dụ mã kiểm tra đơn giản
}
