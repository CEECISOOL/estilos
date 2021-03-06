import React, { useEffect, useState } from "react"
import Modal from "react-modal"
import { Link } from "react-router-dom"
import { usuarioActual } from "../../../redux/actions/actionUser"
import { useDispatch, useSelector } from "react-redux"
import profile from "../../../assets/images/avatar2.png"
import io from "socket.io-client"
import home from '../../../assets/images/home2.png'
import homee from '../../../assets/images/home3.png'

let socket

import ProfileSettings from "../../UserRegisteredComponents/ProfileSettings/ProfileSettings"

const customStyls = {
  overlay: {
    backgroundColor: "rgba(11,12,41,0.48)",
  },
}

export default function NavBar() {
  const dispatch = useDispatch()
  const params = window.location.href
  const usuarioAct = useSelector((state) => state.usuarioActual)
  const [showModal, setShowModal] = useState(false)
  const [showModalNotification, setShowModalNotification] = useState(false)

  const token = localStorage.getItem("token")

  useEffect(() => {
    token
      ? (dispatch(usuarioActual())
        , socket = io(import.meta.env.VITE_BACKEND_URL)
        , socket.emit("Actualizar", params))
      : null
  }, [])

  function handleButton() {
    setShowModal(true)
  }
  function closeModal() {
    showModalNotification && setShowModalNotification(false)
    showModal && setShowModal(false)
  }
  return (
    <div>
      <nav className="nav" onClick={closeModal}>
        <Link to="/" className="home"><img src={home} alt="" /></Link>
        {token ? (<Link to="/create" className="link">VENDER</Link>) : null}
        <Link to="/about" className="link">ABOUT</Link>
        {!token ? (<Link to="/homeout" className="link">REGISTRO / LOGIN</Link>) : null}
        <div className="perfilIcon">
          {token ? <p className="nameUser">{`¡Hola ${usuarioAct.nombre}!`}</p> : null}
          {usuarioAct.length !== 0 ? (
            <div>
              <img
                className="fotoperfil"
                src={usuarioAct.image.url ? usuarioAct.image.url : profile}
                alt="Perfil de usuario"
                onClick={handleButton}
              />
            </div>
          ) : null}
          <Modal style={customStyls} isOpen={showModal} className="customStyles">
            <ProfileSettings />
          </Modal>
        </div>
      </nav>
    </div>
  )
}
