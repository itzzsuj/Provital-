import leftar from './assets/leftarrow.png';
import rightar from './assets/arrow.png';
import nutrition from './assets/nutrition.png';
import physicalact from './assets/physicalact.png';
import restore from './assets/restorativesleep.png';
import social from './assets/social.png';
import stress from './assets/stressman.png';
import substance from './assets/substanceab.png';
import h1 from './assets/heart1.png';
import h2 from './assets/heart2.png';
import h3 from './assets/heart3.png';
import time from './assets/time.png';
import sleep1 from './assets/sleep1.png';



function Pillars(){
    return(
        <div className="pillars">
            <div className="pillars_content">
                <div className="pillars_content_c1">
                    <h4 style={{color:'#707070'}}>HOW IT WORKS</h4>
                    <p style={{fontSize: '28px',fontFamily: 'Inter',fontStyle:'italic',color:'#707070'}}><span style={{color:"#F1CA72"}}>Lifestyle as medicine: </span>The six pillars</p>
                </div>
                <div className="pillars_content_c2">
                    <div>
                    <img src={leftar} alt="leftarrow" style={{backgroundColor:'white',width:'20px',border:'solid 2px LightGray',borderRadius:'50%',margin:'10px',padding:'10px'}}></img>
                    </div>
                    <div>
                    <img src={rightar} alt="leftarrow" style={{backgroundColor:'white',width:'20px',border:'solid 2px LightGray',borderRadius:'50%',marign:'10px',padding:'10px'}}></img>
                    </div>
                </div>
            </div>
            <div className='pillars_content_2'>
                <p>Nutrition</p>
                <p>Physical Activity</p>
                <p>Restorative Sleep</p>
                <p>Stress Management</p>
                <p>Soical Connection</p>
                <p>Substance abuse</p>
            </div>
            <div className='pillars_content_cards'>
                <div className='pillars_content_cards_c1'>
                    <img src={nutrition} alt='nutrition' style={{width:'400px'}}></img>
                    <div className='pillars__c1__icon' style={{display:"flex",backgroundColor:'#FFFFFFDE',borderRadius:'20px',position:'relative',left:'10px',top:'-50px',width:'150px',padding:'2px'}}>
                        <img src={h1} alt='heart' style={{width:'30px'}}></img>
                        <p>121/80 mmHg</p>
                    </div>
                    <h4>Nutrition</h4>
                    <p>Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.</p>
                </div>
                <div className='pillars_content_cards_c1'>
                    <img src={physicalact} alt='physicalact' style={{width:'400px'}}></img>
                    <div className='pillars__c1__icon' style={{display:"flex",backgroundColor:'#FFFFFFDE',borderRadius:'20px',position:'relative',left:'10px',top:'-50px',width:'150px',padding:'2px'}}>
                        <img src={h2} alt='heart2' style={{width:'30px'}}></img>
                        <p>32 minutes</p>
                    </div>
                    <h4>Physical Activity</h4>
                    <p>Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.</p>
                </div>
                <div className='pillars_content_cards_c1'>
                    <img src={restore} alt='restore' style={{width:'400px'}}></img>
                    <div className='pillars__c1__icon' style={{display:"flex",backgroundColor:'#FFFFFFDE',borderRadius:'20px',position:'relative',left:'10px',top:'-50px',width:'150px',padding:'2px'}}>
                        <img src={sleep1} alt='sleep' style={{width:'30px'}}></img>
                        <p>8 hours</p>
                    </div>
                    <h4>Restorative Sleep</h4>
                    <p>Consistent, quality sleep is essential for cognitive function and physical health.</p>
                </div>
                <div className='pillars_content_cards_c1'>
                    <img src={social} alt='social' style={{width:'400px'}}></img>
                    <div className='pillars__c1__icon' style={{display:"flex",backgroundColor:'#FFFFFFDE',borderRadius:'20px',position:'relative',left:'10px',top:'-50px',width:'150px',padding:'2px'}}>
                        <img src={h3} alt='heart3' style={{width:'30px'}}></img>
                        <p>Feeling Better</p>
                    </div>
                    <h4>Social Connection</h4>
                    <p>Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health.</p>
                </div>
                <div className='pillars_content_cards_c1'>
                    <img src={stress} alt='stress' style={{width:'400px'}}></img>
                    <div className='pillars__c1__icon' style={{display:"flex",backgroundColor:'#FFFFFFDE',borderRadius:'20px',position:'relative',left:'10px',top:'-50px',width:'150px',padding:'2px'}}>
                        <img src={h2} alt='heart2' style={{width:'30px'}}></img>
                        <p>60bpm</p>
                    </div>
                    <h4>Stress Management</h4>
                    <p>Effective stress management techniques are crucial for mental well-being and overall health.</p>
                </div>
                <div className='pillars_content_cards_c1'>
                    <img src={substance} alt='substance' style={{width:'400px'}}></img>
                    <div className='pillars__c1__icon' style={{display:"flex",backgroundColor:'#FFFFFFDE',borderRadius:'20px',position:'relative',left:'10px',top:'-50px',width:'150px',padding:'2px'}}>
                        <img src={time} alt='time' style={{width:'30px'}}></img>
                        <p>62days</p>
                    </div>
                    <h4>Substance Abuse</h4>
                    <p>Avoiding tobacco, limiting alcohol use, and abstaining from harmful substances are vital for long-term health.</p>
                </div>

            </div>
        </div>
    )
}
export default Pillars