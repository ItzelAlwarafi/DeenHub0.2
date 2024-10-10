import { MenuData } from "./MenuData"
import { Link } from "react-router-dom"

export default function MenuBoxesComp() {
   

    return (
        <div className="MenuBoxes-PageContainer">
            {MenuData.map((item, index) => (
                <div key={index} id={item.cName} className="box-menu-container">
                    <Link to={item.path} className="box-link">
                        <h1 className="menu-box-icons">{item.icon}</h1> 
                        <h1 className="menu-box-text">{item.title}</h1>
                    </Link>
                </div>
            ))}
        </div>
    )
}
