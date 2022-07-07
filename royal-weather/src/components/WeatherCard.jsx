import BookmarkBtn from './BookmarkBtn';

import ArrowUp from '../assets/symbols/arrow-up.svg';

const WeatherCard = ({data}) => {
    return(
        <div className={`item ${data.size} ${data.bg}`} >
            {
                data.type === 'day' ?
                    <BookmarkBtn date={data.unixTimeStamp}/>
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
    )
}

export default WeatherCard;