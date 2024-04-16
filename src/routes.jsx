import { Routes, Route } from "react-router-dom";
import Registro from "./components/RegistrationForm";
import Login from "./components/Login";

function Rotas() {
    return (
        <div>

            <Routes>
                <Route path="/" element={<Registro />} />
                <Route path="/login" element={<Login />} />
            </Routes>

        </div>
    )
}
export default Rotas