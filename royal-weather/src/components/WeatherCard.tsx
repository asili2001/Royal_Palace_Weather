import BookmarkBtn from './BookmarkBtn';

import ArrowUp from '../assets/symbols/arrow-up.svg';

export interface Props {
    title : string;
    date :  string;
    temp? : number;
    hTemp? : number;
    lTemp? : number;
    bg : string;
    size: string;
    type: string;
    unixTimeStamp?: number;
}


const WeatherCard = ({data} : {data : Props}) => {
    return(
        <div className={`item ${data.size} ${data.bg}`} >
            <div className="wrapper">
                {
                    data.type === 'day' ?
                        <BookmarkBtn date={data.unixTimeStamp || undefined}/>
                    :
                    null
                }
                <h1>{data.title}</h1>
                <p>{data.date}</p>
                
                {
                    data.type === "hour" ? <h1>{data.temp}°</h1> : 
                    
                    <div className="hlTemp">
                        <div>
                            <img src={ArrowUp} />
                            <p>{data.hTemp}°</p>
                        </div>
                        <div>
                            <img src={ArrowUp} style={{transform : 'rotate(180deg)'}}/>
                            <p>{data.lTemp}°</p>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default WeatherCard;