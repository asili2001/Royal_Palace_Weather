import { NavLink } from "react-router-dom";

const InteractionMenu = ({slideto, currentslide})=>{
    
    return(
        <div className="interaction-menu">
            <div className="item">
                {
                    currentslide === 0 ? 
                        <NavLink to="/daily" replace>
                            <button className="active" onClick={()=>slideto(0)}>Daily Forecast</button> 
                        </NavLink>
                        : 
                        <NavLink to="/daily" replace>
                            <button onClick={()=>slideto(0)}>Daily Forecast</button>
                        </NavLink>
                }
            </div>
            <div className="item">
                {
                    currentslide === 1 ? 
                        <NavLink to="/hourly" replace>
                            <button className="active" onClick={()=>slideto(1)}>Hourly Forecast</button> 
                        </NavLink>
                        :
                        <NavLink to="/hourly" replace>
                            <button onClick={()=>slideto(1)}>Hourly Forecast</button>
                        </NavLink>
                }
            </div>
            <div className="item right">
                {
                    currentslide === 2 ? 
                        <NavLink to="/bookmarks" replace>
                            <button className="active right" onClick={()=>slideto(2)}>Bookmarks</button> 
                        </NavLink>
                        : 
                        <NavLink to="/bookmarks" replace>
                            <button onClick={()=>slideto(2)}>Bookmarks</button>
                        </NavLink>
                }
            </div>
        </div>
    )
}

export default InteractionMenu;