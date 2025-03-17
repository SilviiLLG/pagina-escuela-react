import CardAutoridad from '../../CardAutoridad/CardAutoridad'
import styles from './Autoridades.module.css'

function Autoridades() {
  return (
    <section className="content-container">
      <div className="contenedor-titulo">
        <h2 className="titulo-seccion">Autoridades</h2>
      </div>
      <div className={styles.contenedorImagenes}>
        <CardAutoridad
          foto={'./fotoUser.webp'}
          cargo={'Rector'}
          nombre={'Lic. Diego Baron'}
        />
        <CardAutoridad
          foto={'./fotoUser.webp'}
          cargo={'Vicerrectora'}
          nombre={'Prof. Karina Pereyra'}
        />
        <CardAutoridad
          foto={'./fotoUser.webp'}
          cargo={'Regente Tecnico'}
          nombre={'prof. Juan de Abreu'}
        />
      </div>
      <div className={styles.contenedorImagenes}>
        <CardAutoridad
          foto={'./fotoUser.webp'}
          cargo={'Regente De Cultura'}
          nombre={"Lic. Silvina De'Aquino"}
        />
        <CardAutoridad
          foto={'./fotoUser.webp'}
          cargo={'Secretaria'}
          nombre={'Andrea Torres'}
        />
      </div>
    </section>
  )
}

export default Autoridades
