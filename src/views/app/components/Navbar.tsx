import css from "./AppComp.module.css";
import {Link} from "react-router-dom";

export default function Navbar() {
    return <nav className={css.nav}>
        <ul>
            <li><Link to={"/app/home"}>Нүүр</Link></li>
            <li><Link to={"/app/settings"}>Тохиргоо</Link></li>
            <li><Link to={"/"}>Гарах</Link></li>
        </ul>
    </nav>
}
