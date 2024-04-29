import { Routes, Route } from "react-router-dom";
import Registro from "./pages/cadastro/RegistrationForm";
import Login from "./pages/login/Login";
import Turmas from "./pages/home/Turmas";
import Idev2 from "./pages/turmas/Idev2";

function Rotas() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Registro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/turma" element={<Turmas />} />
                <Route path="/idev2" element={<Idev2 />} />
            </Routes>
        </div>
    )
}
export default Rotas