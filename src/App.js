import './App.css';
import Header from './Header';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Login from './Login'
import Register from './Register'
import CreateProduct from './CreateProduct'
import UpdateProduct from './UpdateProduct'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <h1>teste</h1>
                <Routes>
                    <Route path="/entrar" element={<Login/>}>
                    </Route>
                    <Route path="/registrar" element={<Register/>}>
                    </Route>
                    <Route path="/cadastrar-produto" element={<CreateProduct/>}>
                    </Route>
                    <Route path="/atualizar-produto" element={<UpdateProduct/>}>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
