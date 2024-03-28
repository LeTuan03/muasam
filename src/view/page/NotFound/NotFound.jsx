import { Button } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

function NotFound(props) {
    return (
        <>
            404<p>Xin lỗi, trang bạn truy cập không tồn tại.</p>
            <Button type="primary">
                <Link to={"/"}>Trở lại trang chủ</Link>
            </Button>
        </>
    )
}

export default NotFound
