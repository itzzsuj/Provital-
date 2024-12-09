import p1 from './assets/p1.png';
import p2 from './assets/p2.png';
import p3 from './assets/p3.png';
import p4 from './assets/p4.png';
import p5 from './assets/p5.png';
import p6 from './assets/p6.png';
import p7 from './assets/p7.png';
import p8 from './assets/p8.png';



function Main(){
    return(
        <div>
        <div className="container">
            <div className="main_img_container">
                    <img src={p1} alt='p1'></img>
                    <img src={p2} alt='p2'></img>
                    <img src={p3} alt='p3'></img>
                    <img src={p4} alt='p4'></img>
                    <img src={p5} alt='p5'></img>
                    <img src={p6} alt='p6'></img>
                    <img src={p7} alt='p7'></img>
                    <img src={p8} alt='p8'></img>
            </div>
            <div className="container_header">
                <h1>Book an Appointment with <span >lifestyle medicine</span> experts.</h1>
                <div className="container_header2">
                <p>Optimize your lifestyle and reverse chronic diseases.</p>
            </div>
            </div>
        </div>

        </div>
    )
}
export default  Main