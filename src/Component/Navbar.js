import Pdf from '../Cv_Cecile_Bonnet.pdf';
const Navbar = () => {
    return (
        <nav class="navbar fixed-top" style={{ backgroundColor: '#AECBD8',color: 'transparent', opacity: 0.9 , height: '300px', position:'static'}}>
            <div class="container-fluid" >
                <span style={{ color: ' #f9fbfc'}}>
                    <h1>Portfolio</h1>
                    <h3>Année 2021-2022</h3>
                    <h4>Cécile Bonnet</h4>
                </span>
                <span style={{ textAlign :'center', color: ' #f9fbfc',fontSize: '18px'}}>
                    Dans le cadre de mon bachelier en science de l'informatique à l'Ephec de Louvain-La-Neuve, <br/>
                    j'ai du effectuer un total de 60h d'activitées extrascholaire. <br/>
                    En voici le détail. <br/>
                    <span>
                        Retrouvez mon cv 
                        <a href = {Pdf} target = "_blank">  ici </a>
                    </span>
                    
                 </span>
            </div>
        </nav>
    )
}
export default Navbar; 