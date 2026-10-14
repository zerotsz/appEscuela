import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import AlumnoCard from './components/AlumnoCard/AlumnoCard'
import Contador from './components/Contador/contador'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/*Insertamos el Navbar en la parte superior */}
      <Navbar/>

      {/*Contenedor principal de la página */}
      <div className="container">
        <h2 className="mb-4">Directorio de Alumnos</h2>

        <div className="row">
          {/*Reutilizamos el componente AlumnoCard pasándole Props diferentes */}
          <AlumnoCard
            nombre="Daniel Puccio"
            carrera="Desarrollo de Software"
            estado="Matriculado"
          />

          <AlumnoCard
            nombre="Maria Perez"
            carrera="Diseño gráfico"
            estado="Inactivo"
          />

          <AlumnoCard
            nombre="Carlos Mendoza"
            carrera="Administración Industrial"
            estado="Matriculado"
          />

          <AlumnoCard
            nombre="André Gomez"
            carrera="Ingeniería Textil"
            estado="Inactivo"
          />

          <AlumnoCard
            nombre="Omar Cruz"
            carrera="Agroindustria"
            estado="Matriculado"
          />

          <AlumnoCard
            nombre="Josue Gonzales"
            carrera="Administración Logística"
            estado="Inactivo"
          />
        </div>

        <Contador/>
      </div>
    </>
  );
}

export default App;
