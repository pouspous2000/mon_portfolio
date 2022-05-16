import Card from './Component/Card'
import Navbar from './Component/Navbar';

import 'bootstrap/dist/css/bootstrap.css';
import'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Linux 
import Linux from './Img/Linux.jpg' ;
import LouvainLinux from './Img/louvain-linux.jpg';
import LinuxGroupe from './Img/linuxGroup.jpg';
// Women Rock It 
import certifWomenRockIt from './Img/certifWomenRockIt.jpg'; 
import inscriptionWomenRockIt from './Img/inscriptionWomenRockIt.jpg';
import womenRock from './Img/womenRock.jpg';
// DevDay 2021
import goodiesDevDay2021 from './Img/goodiesDevDay2021.jpg';
import DevDayPhoto from './Img/DevDayPhoto.jpg';
import MoiPassDevDay from './Img/MoiPassDevDay.jpg';
// Paris
import goodiesParis from './Img/goodiesParis.jpg';
import MoiPassBigData from './Img/MoiPassBigData.jpg';
// Bénévola
import hibou from './Img/hibou.jpg';
import herisson from './Img/herisson.jpg';
import logoBenevola from './Img/logoBenevola.jpg';
// DevDay 2020
import inscriptionDevDay from './Img/inscriptionDevDay.jpg';
import devDay from './Img/devDay.png';
import devConference from './Img/devConference.jpg';
//Hackaton 
import inscriptionHackaton from './Img/inscriptionHackaton.jpg';
import TeamHackaton2 from './Img/TeamHackaton2.jpg';
//React Joyride
import ReactJoyrideImage from './Img/ReactJoyride.jpg';
import Tutoriels from './Img/Tutoriels.jpg';

function App() {

  return (
    <>
      <Navbar />

      <div class="row " style={{ marginLeft: '20px', marginTop:'30px'}}>

        <Card 
          Titre={"Installation de Linux"} 
          HeureP={"2h"} 
          HeureR={"2h"} 
          Id={"Linux"} 
          Text={"Afin d'installer Linux sur notre machine, nous nous sommes rendu au Louvain-Li-Nux. Lors de cette activité, nous avons installé " } 
          Src1={Linux} Alt1={'Linux'} 
          Src2={LouvainLinux} Alt2={'LouvainLinux'}
          Src3={LinuxGroupe} Alt3={'LinuxGroupe'}
        />

<Card 
          Titre={"Women Rock It"}  
          HeureP={"2h"} 
          HeureR={"2h"}
          Id={"WomenRockIt"} 
          Text={'Coucou je suis le text'} 
          Src1={certifWomenRockIt} Alt1={'certifWomenRockIt'} 
          Src2={inscriptionWomenRockIt} Alt2={'inscriptionWomenRockIt'} 
          Src3={womenRock} Alt3={'womenRock'}
        />

<Card 
          Titre={"Big Data"}  
          HeureP={"9h"} 
          HeureR={"9h"}
          Id={"Bigdata"} 
          Text={'Coucou je suis le text'} 
          Src1={MoiPassBigData} Alt1={'MoiPassBigData'} 
          Src2={goodiesParis} Alt2={'goodiesParis'} 
        />

<Card 
          Titre={"Hackaton"}  
          HeureP={"10h"} 
          HeureR={"48h"}
          Id={"Hackaton"} 
          Text={'Coucou je suis le text'} 
          Src1={inscriptionHackaton} Alt1={'inscriptionHackaton'} 
          Src2={TeamHackaton2 } Alt2={'TeamHackaton2'} 
        />

        <Card 
          Titre={"Bénévola"}  
          HeureP={"10h"} 
          HeureR={"15h"}
          Id={"Benevola"} 
          Text={'Coucou je suis le text'} 
          Src1={hibou} Alt1={'hibou'} 
          Src2={herisson} Alt2={'herisson'} 
          Src3={logoBenevola} Alt3={'logoBenevola'}
        />


        <Card 
          Titre={"ReactJoyride"}  
          HeureP={"10h"} 
          HeureR={"12h"}
          Id={"ReactJoyride"} 
          Text={''}
          Src1={ReactJoyrideImage} Alt1={'ReactJoyride'} 
          Src2={Tutoriels} Alt2={'Tutoriels'} 
          LinkGit={'https://github.com/pouspous2000/TestTutoriel_ReactJoyride.git'}
          LinkClock={'https://app.clockify.me/dashboard'}

        />

        <Card 
          Titre={"Mise en ligne Portflio"}  
          HeureP={"3h"} 
          HeureR={"3h"}
          Id={"MiseEnLigne"} 
          Text={''}
          Src1={''} Alt1={''} 
          Src2={''} Alt2={''} 
        />  

        <Card 
          Titre={""}  
          HeureP={"10h"} 
          HeureR={"12h"}
          Id={"ReactJoyride"} 
          Text={''}
          Src1={''} Alt1={''} 
          Src2={''} Alt2={''} 
        />  
<Card 
          Titre={"DevDay 2020"}  
          HeureP={"2h"} 
          HeureR={"2h"}  
          Id={"DevDay2020"} 
          Text={'Coucou je suis le text'} 
          Src1={inscriptionDevDay} Alt1={'inscriptionDevDay'} 
          Src2={devConference} Alt2={'devConference'} 
          Src3={devDay} Alt3={'devDay'}
        />

<Card 
          Titre={"DevDay 2021"}  
          HeureP={"5h"} 
          HeureR={"5h"}  
          Id={"DevDay2021"} 
          Text={'DevDay'} 
          Src1={goodiesDevDay2021} Alt1={'goodiesDevDay2021'} 
          Src2={MoiPassDevDay} Alt2={'MoiPassDevDay'} 
          Src3={DevDayPhoto} Alt3={'DevDayPhoto'}
        />

      </div>

    </>

  );
}
export default App;
