import {MenuData} from './MenuData';
import { Link } from "react-router-dom";
import { IoCloseCircle } from "react-icons/io5"


export default function SideMenu({ isOpen, onClose }) {
    return (
        <div className={`Side-menu-container ${isOpen ? 'open' : ''}`}>
            <IoCloseCircle onClick={onClose} className="close-button" />
            {MenuData.map((item, index) => (
                <div key={index} id={item.cName} className="sidemenu-container">
                    <Link to={item.path} className="side-box-link" onClick={onClose}>
                        <h1 className="sidemenu-text">{item.title}</h1>
                    </Link>
                </div>
            ))}
           
        </div>
    );
}