import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Livros from './components/livros';
import Login from './components/login';
import Usuarios from './components/usuarios';
import CadastroLivros from './components/cadastro_livros';
import CadastroUsuarios from './components/cadastro_usuarios';
import AddFavoritos from './components/add_favoritos';
import EditarLivros from './components/editar_livros';
import EditarUsuarios from './components/editar_usuarios';
import Apagar from './components/apagar_dialog';




function App() {

 
  return (

    //Inicio setar as rotas
      <Router>
        <Routes>
            <Route index element={<Login/>}/>
            <Route path="/livros" element={<Livros/>}/>
            <Route path="/usuarios" element={<Usuarios/>}/>
            <Route path="/cadastro_livros" element={<CadastroLivros/>}/>
            <Route path="/cadastro_usuarios" element={<cadastroUsuarios/>}/>
            <Route path="/editar_livros" element={<EditarLivros/>}/>
            <Route path="/editar_usuarios" element={<EditarUsuarios/>}/>
            <Route path="/add_favoritos" element={<AddFavoritos/>}/>
            <Route path="/apagar" element={<Apagar/>}/>

        </Routes>
      </Router>


    //Fim setar as rotas



   
  );
}

export default App;
