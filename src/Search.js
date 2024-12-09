import i1 from './assets/search.png';
import i2 from './assets/location.png';
import i3 from './assets/id-card.png';

function Search(){
    return(
        <div>
        <div className="Searchbar">
            <div className="Searchbar_i1">
                <img src={i1} style={{width:"20px",height:"20px"}} alt="icon"></img>
                <input placeholder="Condition,procedure,Speciality.."></input>
            </div>
            <div className="Searchbar_i2">
                <img src={i2} style={{width:"20px",height:"20px"}} alt="icon2"></img>
                <input placeholder="City,State or zipcode"></input>
            </div>
            <div className="Searchbar_i3">
                <img src={i3} style={{width:"20px",height:"20px"}} alt="icon3"></img>
                <input placeholder="Insurance carrier"></input>
            </div>
            <div className="Searchbar_b1">
                <button>Find now</button>
            </div>
        </div>
        <div className='sep'>
        </div>
        </div>
    )
}
export default Search