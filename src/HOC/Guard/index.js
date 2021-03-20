import { useSelector } from "react-redux"

export default function Guard(props) {
  const user = useSelector(state => state.signInReducer.userSignIn)
  return user?.maLoaiNguoiDung === "QuanTri" ? props.children : ""
}
