import { useState } from 'react';

function CrearPersonaje() {
  const [form, setForm] = useState({
    nombre: '',
    genero: '',
    raza: '',
    clase: ''
  });

  const [mostrarResultado, setMostrarResultado] = useState(false);

  const imagenesClases = {
    Barbaro: "Imagenes/Clases/180px-Class_Barbarian_Badge_Icon.png",
    Bardo: "Imagenes/Clases/180px-Class_Bard_Badge_Icon.png",
    Clérigo: "Imagenes/Clases/180px-Class_Cleric_Badge_Icon.png",
    Druida: "Imagenes/Clases/180px-Class_Druid_Badge_Icon.png",
    Guerrero: "Imagenes/Clases/180px-Class_Fighter_Badge_Icon.png",
    Monje: "Imagenes/Clases/180px-Class_Monk_Badge_Icon.png",
    Paladin: "Imagenes/Clases/180px-Class_Paladin_Badge_Icon.png",
    Explorador: "Imagenes/Clases/Class_Ranger_Badge_Icon.png",
    Picaro: "Imagenes/Clases/180px-Class_Rogue_Badge_Icon.png",
    Hechicero: "Imagenes/Clases/180px-Class_Sorcerer_Badge_Icon.png",
    Brujo: "Imagenes/Clases/180px-Class_Warlock_Badge_Icon.png",
    Mago: "Imagenes/Clases/180px-Class_Wizard_Badge_Icon.png"
  };

  const imagenesRazas = {
    "Drow_Masculino": "Imagenes/Razas/Drow_Masculino.jpg",
    "Drow_Femenino": "Imagenes/Razas/Drow_Femenino.png",
    "Elfo_Masculino": "Imagenes/Razas/Elfo_Masculino.jpeg",
    "Elfo_Femenino": "Imagenes/Razas/Elfo_Femenino.png",
    "Humano_Femenino": "Imagenes/Razas/Humano_Femenino.webp",
    "Humano_Masculino": "Imagenes/Razas/Humano_Masculino.jpg",
    "Mediano_Masculino": "Imagenes/Razas/Mediano_Masculino.jpg",
    "Mediano_Femenino": "Imagenes/Razas/Mediano_Femenino.png",
    "Tiefling_Femenino": "Imagenes/Razas/Tiefling_Femenino.jpg",
    "Tiefling_Masculino": "Imagenes/Razas/Tiefling_Masculino.png",
    "Orco_Masculino": "Imagenes/Razas/Orco_Masculino.png",
    "Orco_Femenino": "Imagenes/Razas/Orco_Femenino.png",
    "Gnomo_Masculino": "Imagenes/Razas/Gnomo_Masculino.png",
    "Gnomo_Femenino": "Imagenes/Razas/Gnomo_Femenino.png",
    "Enano_Masculino": "Imagenes/Razas/Enano_Masculino.png",
    "Enano_Femenino": "Imagenes/Razas/Enano_Femenino.png",
    "Githyanki_Masculino": "Imagenes/Razas/Githyanki_Masculino.png",
    "Githyanki_Femenino": "Imagenes/Razas/Githyanki_Femenino.png",
    "Dragonborn_Masculino": "Imagenes/Razas/Dragonborn_Masculino.png",
    "Dragonborn_Femenino": "Imagenes/Razas/Dragonborn_Femenino.png",
    "Semielfo_Masculino": "Imagenes/Razas/Semielfo_Masculino.png",
    "Semielfo_Femenino": "Imagenes/Razas/Semielfo_Femenino.png"
  };

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setMostrarResultado(true);
  }

  return (
    <section id="crear-personaje">
      <h1>Crear Personaje</h1>
      <form id="form-personaje" onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          required
          value={form.nombre}
          onChange={handleChange}
        />

        <label htmlFor="genero">Género:</label>
        <select
          name="genero"
          id="genero"
          required
          value={form.genero}
          onChange={handleChange}
        >
          <option value="">Selecciona</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
        </select>

        <label htmlFor="raza">Raza:</label>
        <select
          name="raza"
          id="raza"
          required
          value={form.raza}
          onChange={handleChange}
        >
          <option value="">Selecciona</option>
          <option value="Humano">Humano</option>
          <option value="Elfo">Elfo</option>
          <option value="Drow">Drow</option>
          <option value="Semielfo">Semielfo</option>
          <option value="Orco">Orco</option>
          <option value="Mediano">Mediano</option>
          <option value="Enano">Enano</option>
          <option value="Gnomo">Gnomo</option>
          <option value="Tiefling">Tiefling</option>
          <option value="Githyanki">Githyanki</option>
          <option value="Dragonborn">Dragonborn</option>
        </select>

        <label htmlFor="clase">Clase:</label>
        <select
          name="clase"
          id="clase"
          required
          value={form.clase}
          onChange={handleChange}
        >
          <option value="">Selecciona</option>
          <option value="Barbaro">Barbaro</option>
          <option value="Bardo">Bardo</option>
          <option value="Clérigo">Clérigo</option>
          <option value="Druida">Druida</option>
          <option value="Guerrero">Guerrero</option>
          <option value="Monje">Monje</option>
          <option value="Paladin">Paladin</option>
          <option value="Explorador">Explorador</option>
          <option value="Picaro">Picaro</option>
          <option value="Hechicero">Hechicero</option>
          <option value="Brujo">Brujo</option>
          <option value="Mago">Mago</option>
        </select>

        <button type="submit">Visualizar Personaje</button>
      </form>

      {mostrarResultado && (
        <div id="resultado-personaje" className="resultado">
          <h2>Personaje Creado:</h2>
          <p>Nombre: {form.nombre}</p>
          <p>Género: {form.genero}</p>
          <p>Raza: {form.raza}</p>
          <p>Clase: {form.clase}</p>

          {form.clase && (
            <img
              src={imagenesClases[form.clase]}
              alt={form.clase}
              width="100"
              style={{ marginTop: '10px' }}
            />
          )}

          {form.raza && form.genero && (
            <img
              src={imagenesRazas[`${form.raza}_${form.genero}`]}
              alt={`${form.raza} ${form.genero}`}
              width="100"
              style={{ marginTop: '10px' }}
            />
          )}
        </div>
      )}
    </section>
  );
}

export default CrearPersonaje;