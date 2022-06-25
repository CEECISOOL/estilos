import React from "react"
import book from "../../../assets/images/book.svg"

function Book({ nombre, image, price, imageUser, nameUser, descripcion }) {
  return (
    <div className="container">
      <div className="card-book">
        <div className="cardheader-book">
        <img className="book" src={image || book} alt='Imagen no encontrada' />
        </div>
        <div className="cardbody-book">
          <p className="tagtagteal-book">{nombre}</p>
          <p className="price" >{price}</p>
          <p className="parrafo-book">{descripcion.join(', ')}</p>
          <div className="user-book">
            <img src={imageUser} alt="user" />
            <div className="userinfo-book">
              <h5>{nameUser}</h5>
              <small></small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Book
