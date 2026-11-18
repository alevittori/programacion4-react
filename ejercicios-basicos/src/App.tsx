
import { Producto } from './components/Ej7';
import { Contador } from './components/Ej2';
import { PreguntaRespuesta } from './components/Ej3.tsx';
import { ListaCompras } from './components/Ej5.tsx';
import { Buscador } from './components/Ej6.tsx';
import './App.css'
import { ConversorTemperatura } from './components/Ej4.tsx';

function App() {
 

  return (
    <main style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Prácticas de React - Parte 1</h1>
      
      <section style={{ marginTop: '20px' }}>
        <h2>Ejercicios 1 y 7: Tarjetas de Producto</h2>
        <div style={{ display: 'flex', gap: '16px', marginTop: '10px' }}>
          <Producto nombre="Teclado" precio={45000} stock={12} oferta={true} />
          <Producto nombre="Mouse" precio={18000} stock={0} />
          <Producto nombre="Monitor" precio={320000} stock={3} />
        </div>
      </section>

      <hr style={{ margin: '30px 0' }} />

      <section>
        <h2>Ejercicio 2: Contador con límites</h2>
        <div>
          <Contador />
        </div>
      </section>

      <hr style={{ margin: '30px 0' }} />

      <section>
        <h2>Ejercicio 3: Mostrar y ocultar</h2>
        <PreguntaRespuesta />
      </section>

      <hr style={{ margin: '30px 0' }} />

      <section>
        <h2>Ejercicio 4: Conversor de temperatura</h2>
        <ConversorTemperatura />
      </section>

      <hr style={{ margin: '30px 0' }} />

      <section>
        <h2>Ejercicio 5: Lista de compras</h2>
        <ListaCompras />
      </section>

      <hr style={{ margin: '30px 0' }} />

      <section style={{ marginBottom: '40px' }}>
        <h2>Ejercicio 6: Buscador</h2>
        <Buscador />
      </section>


    </main>
  );
}

export default App


