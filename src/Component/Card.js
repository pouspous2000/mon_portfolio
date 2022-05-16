
import Image from './Image'
import Button from './Button'

const Card = ({ Titre, Id, Text, Src1, Alt1, Src2, Alt2, Src3, Alt3, HeureR, HeureP, LinkGit, linkClock}) => {

    return (

        <div class="col" style={{ marginBottom: '20px'}}  >

            <div class="card  h-100" style={{ 'width': '300px', 'height': '300px', boxShadow: '5px 5px 10px 1px #5d554b' }}>
                <div id={Id} class="carousel slide" data-bs-ride="false" data-bs-interval="false" ride = 'false'>

                    <div class="carousel-inner">

                        <Image className={"carousel-item active"} src={Src1} alt={Alt1} />
                        <Image className={"carousel-item "} src={Src2} alt={Alt2} />
                        <Image className={"carousel-item "} src={Src3} alt={Alt3} />

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
                    <h5 class="card-title" style={{ float: 'left' }}>{Titre}</h5>
                    <Button 
                        id = {`${Id}Modal`} 
                        text = {Text} 
                        src1 = {Src1} alt1 = {Alt1}
                        src2 = {Src2} alt2 = {Alt2}
                        src3 = {Src3} alt3 = {Alt3}
                        linkGit = {LinkGit}
                        linkClock = {linkClock}
                        titre ={Titre}
                    />
                    </div>
                    <div style={{marginTop:'40px', fontStyle:'italic'}}>
                        <h6> Nombre d'heure passé :{HeureP} </h6>
                        <h6> Nombre d'heure réel : {HeureR}  </h6>
                    </div>
                </div>
            </div>
           
        </div>

    )
}
export default Card; 