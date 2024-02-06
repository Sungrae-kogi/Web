//앱 오류를 발생시키는 코드
class AppError extends Error{
    constructor(message, status) {
        super();
        this.message = message;
        this.status = status;
    }
}

module.exports = AppError;
