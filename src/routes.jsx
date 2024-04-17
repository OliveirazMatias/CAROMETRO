import { Routes, Route } from "react-router-dom";
import Registro from "./pages/cadastro/RegistrationForm";
import Login from "./pages/login/Login";
import Turmas from "./pages/home/Turmas";

function Rotas() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Registro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/turmas" element={<Turmas />} />
            </Routes>
        </div>
    )
}
export default Rotas