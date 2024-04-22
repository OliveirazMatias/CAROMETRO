import { Routes, Route } from "react-router-dom";
import Registro from "./pages/cadastro/RegistrationForm";
import Login from "./pages/login/Login";
import Turmas from "./pages/home/Turmas";
import Idev1 from "./pages/turmas/dev/Idev1";
import Idev2 from "./pages/turmas/dev/Idev2";
import Idev3 from "./pages/turmas/dev/Idev3";
import Ilecmec1 from "./pages/turmas/ilecmec/Ilecmec1";
import Ilecmec2 from "./pages/turmas/ilecmec/Ilecmec2";
import Ilecmec3 from "./pages/turmas/ilecmec/Ilecmec3";

function Rotas() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Registro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/turma" element={<Turmas />} />
                <Route path="/idev1" element={<Idev1 />} />
                <Route path="/idev2" element={<Idev2 />} />
                <Route path="/idev3" element={<Idev3 />} />
                <Route path="/ilecmec1" element={<Ilecmec1 />} />
                <Route path="/ilecmec2" element={<Ilecmec2 />} />
                <Route path="/ilecmec3" element={<Ilecmec3 />} />
            </Routes>
        </div>
    )
}
export default Rotas