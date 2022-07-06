import Logo from '../assets/logo.png';
import TimeLocationPanel from './TimeLocationPanel';

const Header = ()=>{
    const currentDate = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return(
        <div className="header">
            <div className="title">
                <div>
                <h1>Royal Palace, Stockholm</h1>
                <p>{currentDate.getDate()} {months[currentDate.getMonth()]} {currentDate.getFullYear()}</p>
                </div>
                {window.innerWidth <= 768 ? <TimeLocationPanel/> : null}
            </div>
            <div className="logo">
                <img src={Logo} alt="Royal Palace"/>
                
            </div>
        </div>
    )
}

export default Header;