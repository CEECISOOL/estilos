import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { usuarioCreated } from '../../../redux/actions/actionCreatedUser'
import Books from './Books'
import NavBar from '../../CommonComponents/NavBar/NavBar.jsx'
import Footer from '../../CommonComponents/Footer/Footer'
import s from './BooksCreated.module.css'
import { useParams, Link } from 'react-router-dom'

export default function BooksCreated() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const allBooks = useSelector((state) => state.booksCreated)
  console.log(allBooks)

  useEffect(() => {
    dispatch(usuarioCreated(id))
  }, [dispatch]);

  return (
    <div className={s.todo}>
      <NavBar />
      <Link to = '/profile'>
        <button className={s.buttonPerfil}>VOLVER AL MENU</button>
      </Link>
      <h3 className={s.titulo}>MIS LIBROS</h3>
      <div className={s.contenedorGral}>
        <div className={s.contenedorBooks}>
          {allBooks?.map((e, i) => {
            return (
              <div key={i}>
                <Books
                  order={e.order}
                  id={e._id}
                  nombre={e.nombre}
                  image={e.image}
                  price={"$" + e.price + ".00"}
                />
              </div>
            )
          })}
        </div>

        <Footer />
      </div>

    </div>
  )
}
