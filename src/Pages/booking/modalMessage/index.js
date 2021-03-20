/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function ModalMessage() {
    const refreshPage = () => {
        window.location.reload();
    }
    return (
        <div className="modalBooking">
            <div className="modalMessage">
                <div className="modalMessage-dialog">
                    <div className="modalMessage-content">
                        <div className="modalMessage-body">
                            <div className="seat-error-content">
                                Đã hết thời gian giữ ghế. Vui lòng thực hiện đơn hàng trong thời hạn 5 phút.
                                <a onClick={() => refreshPage()} style={{ color: "#FB4226" }}> Đặt&nbsp;vé&nbsp;lại</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
