
import Image from './Image'
import Button from './Button'

const Card = ({ Titre, Id, Text, Src1, Alt1, Src2, Alt2, Src3, Alt3, Src4, Alt4, HeureR, HeureP, LinkGit, LinkClock, Date}) => {

    return (

        <div class="col" style={{ marginBottom: '40px'}}  >

            <div class="card  h-100" style={{ 'width': '450px', 'height': '450px', boxShadow: '5px 5px 10px 1px #5d554b', borderRadius:'3%' }}>
                <div id={Id} class="carousel" data-bs-ride="carousel" slid-bs-carousel = 'false' data-bs-interval="10000000000000000">

                    <div class="carousel-inner">
                        {Src1?<Image className={"carousel-item active"} src={Src1} alt={Alt1} />:'' }
                        {Src2?<Image className={"carousel-item "} src={Src2} alt={Alt2} />:''}
                        {Src3?<Image className={"carousel-item "} src={Src3} alt={Alt3} />:''}
                        {Src4?<Image className={"carousel-item "} src={Src4} alt={Alt4} />:''}
                    </div>

                    <a class="left carousel-control" href={`#${Id}`} data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left"></span>
                        <span class="sr-only"></span>
                    </a>
                    <a class="right carousel-control" href={`#${Id}`} data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right"></span>
                        <span cla
                            ss="sr-only"></span>
                    </a>

                </div>
                <div class="card-body">
                    <div>
                    <h3 class="card-title" style={{ float: 'left' }}>{Titre}</h3>
                    <Button 
                        id = {`${Id}Modal`} 
                        text = {Text} 
                        linkGit = {LinkGit}
                        linkClock = {LinkClock}
                        titre ={Titre}
                        date = {Date}
                    />
                    </div>
                    <div style={{marginTop:'40px', fontStyle:'italic', fontSize:'10px'}}>
                        <h4> Nombre d'heure passé :{HeureP} </h4>
                        <h4> Nombre d'heure réel : {HeureR}  </h4>
                    </div>
                </div>
            </div>
           
        </div>

    )
}
export default Card; 