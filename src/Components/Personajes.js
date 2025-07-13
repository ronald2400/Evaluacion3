import { useState } from 'react';

function Personajes() {
  const personajes = [
    {
      id: 'Astarion',
      nombre: 'Astarion',
      imagen: 'Imagenes/Astarion.png',
      descripcion: 'Un elfo vampiro espadachín con un oscuro pasado.'
    },
    {
      id: 'ShadowHeart',
      nombre: 'Shadowheart',
      imagen: 'Imagenes/ShadowHeart.png',
      descripcion: 'Una clériga misteriosa dedicada a Shar.'
    },
    {
      id: 'Laezel',
      nombre: 'Lae\'zel',
      imagen: 'Imagenes/Laezel.png',
      descripcion: 'Una guerrera githyanki con gran determinación.'
    },
    {
      id: 'Gale',
      nombre: 'Gale',
      imagen: 'Imagenes/Gale.png',
      descripcion: 'Un mago ambicioso con una bomba mágica en el pecho.'
    }
  ];

  const [personajeSeleccionado, setPersonajeSeleccionado] = useState(null);

  return (
    <section id="personajes">
      <h1>Personajes Principales</h1>
      <div>
        {personajes.map((p) => (
          <img
            key={p.id}
            id={p.id}
            src={p.imagen}
            alt={p.nombre}
            className={`personaje-img ${p.id.toLowerCase()}`}
            onClick={() => {
              if (personajeSeleccionado?.id === p.id) {
                setPersonajeSeleccionado(null);
              } else {
                setPersonajeSeleccionado(p);
              }
            }}
          />
        ))}
      </div>

      {personajeSeleccionado && (
        <div id="detalle">
          <h2>{personajeSeleccionado.nombre}</h2>
          <p>{personajeSeleccionado.descripcion}</p>
          <img
            src={personajeSeleccionado.imagen}
            alt={personajeSeleccionado.nombre}
          />
        </div>
      )}
    </section>
  );
}

export default Personajes;