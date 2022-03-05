import { React } from 'react'
import webLogo from "../../assets/image/web-logo.png"

export default function Loading() {
    return (
        <div className="logo__loading active">
            <div className="logo__loading__img">
                <img width="130px" src={webLogo} alt="logoLoader" />
            </div>
        </div>
    )
}
