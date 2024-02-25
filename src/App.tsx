import './App.css'
import Home from './paginas/home/Home';
import Contador from './paginas/contador/Contador'; 
import ConcluirTarefa from './paginas/concluir_tarefa/ConcluirTarefa';
function App() {

  return (
    <><Home title="Componente Home"
      description="Este é um componente Home que recebe props." />
      
      <Contador />

      <ConcluirTarefa />
    
    </>
   );
  
}

export default App
