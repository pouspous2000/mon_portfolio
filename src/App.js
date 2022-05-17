import Card from './Component/Card'
import Navbar from './Component/Navbar';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Linux 
import Linux from './Img/Linux.jpg';
// import LouvainLinux from './Img/louvain-linux.jpg';
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
// import logoBenevola from './Img/logoBenevola.jpg';
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
// Formation 
import Certification from './Img/certification.png'
import FormationComplete from './Img/FormationComplete.png';
//Deploiement 
import EnLigne from './Img/EnLigne.png';
import RepoGit from './Img/repoGit.png';
// Equitation
import Lier from './Img/Lier.jpg'
import Opera from './Img/Opera.jpg'
import Balade from './Img/Balade.jpg'

import Clockify from './Img/clock.png';

function App() {

  return (
    <>
      <Navbar />

      <div class="row " style={{ marginLeft: '5px', marginTop: '30px' }}>

        <Card
          Titre={"Installation de Linux"}
          Theme={"Software"}
          Date={'13/02/2020'}
          HeureP={"2h"}
          HeureR={"2h"}
          Id={"Linux"}
          Text={"Afin d'installer Linux sur notre machine, l'Ephec avait organisé une session au Louvain-Li-Nux. Lors de cette activité, les membres du Kap nous ont expliqué comment ajouter une image de Linux sur notre machine virtuelle."}
          Src1={Linux} Alt1={'Linux'}
          // Src2={LouvainLinux} Alt2={'LouvainLinux'}
          Src3={LinuxGroupe} Alt3={'LinuxGroupe'}
        />

        <Card
          Titre={"Women Rock It"}
          Theme={"Conférence"}
          Date={'30/09/2021'}
          HeureP={"2h"}
          HeureR={"2h"}
          Id={"WomenRockIt"}
          Text={"J'ai assisté à une conférence très courte et haute en gurl power ! C'était génial d'écouter ces femmes parler de comment elles avaient réussi à se faire une place dans ce mode encore tellement masculin. "}
          Src1={certifWomenRockIt} Alt1={'certifWomenRockIt'}
          Src2={inscriptionWomenRockIt} Alt2={'inscriptionWomenRockIt'}
          Src3={womenRock} Alt3={'womenRock'}
        />

        <Card
          Titre={"Big Data"}
          Theme={"Salon"}
          Date={'29/09/2021'}
          HeureP={"9h"}
          HeureR={"9h"}
          Id={"Bigdata"}
          Text={"Cette année j'ai eu la chance malgré le covid de partir à paris pour assiter à la conférence BigData. C'était passionnant d'écouter parler des représentants de grosses sociétés de l'informatique. J'ai assisté à plusieurs conférences qui présentaient les nouveauté."}
          Src1={MoiPassBigData} Alt1={'MoiPassBigData'}
          Src2={goodiesParis} Alt2={'goodiesParis'}
        />

        <Card
          Titre={"Direction Mars"}
          Theme={"Hackaton"}
          Date={'26-28/03/2021'}
          HeureP={"10h"}
          HeureR={"48h"}
          Id={"Hackaton"}
          Text={"Avec une équipe de l'Ephec, nous avons participé au hackaton 'Direction Mars'. Nous avons mis en place un jeu de space invider contrôlé par eye tracking qui nous a permis d'arriver à la 3ème place."}
          Src1={inscriptionHackaton} Alt1={'inscriptionHackaton'}
          Src2={TeamHackaton2} Alt2={'TeamHackaton2'}
        />

        <Card
          Titre={"Bird's Bay"}
          Theme={"Bénévola"}
          Date={'Septembre 2021'}
          HeureP={"5h"}
          HeureR={"15h"}
          Id={"Benevola"}
          Text={"Ayant toujours vécu avec des animaux, leur présence me manquait durant la semaine au kot, j'ai donc décidé d'allez faire la formation de bénévolat chez Bird's Bay. J'ai eu la chance de m'occuper de nombreux animaux sauvages tels que des lièvre, des hérissons, des oiseaux ainsi que des chouettes."}
          Src1={hibou} Alt1={'hibou'}
          Src2={herisson} Alt2={'herisson'}
        />

        <Card
          Titre={"Equitation "}
          Theme={"Sport"}
          Date={"2005-Aujourd'hui"}
          HeureP={"5h"}
          HeureR={"+1000...h"}
          Id={"DevDay2021"}
          Text={"Je pratique l'équitation depuis que j'ai 5 ans. Cela fait parti intégrante de ma vie. Je fais des concours de saut d'obstacle. C'est un sport et une passion incroyable"}
          Src1={Balade} Alt1={'Balade'}
          Src2={Lier} Alt2={'Lier'}
          Src3={Opera} Alt3={'Opera'}
        />

        <Card
          Titre={"ReactJoyride"}
          Theme={"Developpement"}
          Date={"04/2022"}
          HeureP={"10h"}
          HeureR={"12h"}
          Id={"ReactJoyride"}
          Text={"Durant mon stage j'ai dû déployer un tutoriel automatisé pour la page d'une application. En me rensaingant sur le site j'ai découvert React Joyride qui est un composant React permettant de créer des tutoriels. J'ai donc créé un site pour découvir les bases du composant. "}
          Src1={ReactJoyrideImage} Alt1={'ReactJoyride'}
          Src2={Tutoriels} Alt2={'Tutoriels'}
          Src3={Clockify} Alt3={'Clockify'}
          LinkGit={'https://github.com/pouspous2000/TestTutoriel_ReactJoyride.git'}
          LinkClock={'https://app.clockify.me/dashboard'}
        />

        <Card
          Titre={"Deployer un site React sur GitHub"}
          Theme={"Formation"}
          Date={"17/05/2022"}
          HeureP={"3h"}
          HeureR={"3h"}
          Id={"MiseEnLigne"}
          Text={"En me renseingant sur une façon de déployer le site de mon portfolio je me suis rendue compte que gitHub offrait la possibilité d'heberger un site. La mise en ligne d'un site React à demandé des étapes supplémentaires dû au fait que ce n'est pas un site statique."}
          Src1={RepoGit} Alt1={'RepoGit'}
          Src2={EnLigne} Alt2={'EnLigne'}
          Src3={Clockify} Alt3={'Clockify'}
          LinkClock={'https://app.clockify.me/dashboard'}
        />

        <Card
          Titre={"Formation Marketing Digital"}
          Theme={"Formation"}
          Date={"16/05/2022"}
          HeureP={"7h"}
          HeureR={"7h"}
          Id={"FormationMarketingDigital"}
          Text={"Lors de mon stage, j'ai travaillé avec une équipe de marketing ce qui m'a permis de me rendre compte qu'il me manquait des soft skills dans le developpement orienté client. J'ai donc faire une formation de marketing-digital pour avoir les bases de la vente."}
          Src1={FormationComplete} Alt1={'FormationComplete'}
          Src2={Certification} Alt2={'Formation'}
          Src3={Clockify} Alt3={'Clockify'}
          LinkClock={'https://app.clockify.me/dashboard'}
        />

        <Card
          Titre={"DevDay 2020"}
          Theme={"Conférence"}
          Date={"16/11/2020"}
          HeureP={"2h"}
          HeureR={"2h"}
          Id={"DevDay2020"}
          Text={"Ce DevDay s'est déroulé en pleine période de covid ce qui nous as contraint d'y assister via discord. Plusieurs intervenant ont pris la parole pour parler de leur travail. Le distenciel à rendu la conférence moins intéractive et donc moins captivant."}
          Src1={inscriptionDevDay} Alt1={'inscriptionDevDay'}
          Src2={devConference} Alt2={'devConference'}
          Src3={devDay} Alt3={'devDay'}
        />

        <Card
          Titre={"DevDay 2021"}
          Theme={"Conférence"}
          Date={"23/11/2021"}
          HeureP={"5h"}
          HeureR={"5h"}
          Id={"DevDay2021"}
          Text={"Ce DevDay était le premier en présentiel auquel j'ai pu assister. C'était l'occasion de rencontrer de potentiels employeurs ainsi que de découvir les nouveautées du monde informatique."}
          Src1={goodiesDevDay2021} Alt1={'goodiesDevDay2021'}
          Src2={MoiPassDevDay} Alt2={'MoiPassDevDay'}
          Src3={DevDayPhoto} Alt3={'DevDayPhoto'}
        />
       <div style={{textAlign:'center', marginTop:'10px', marginBottom:'20px'}}>____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________</div> 
        <table class="table" style={{fontSize:'20px'}}>
          <thead>
            <tr>
              <th scope="col">Titre</th>
              <th scope="col">Thème</th>
              <th scope="col">Date</th>
              <th scope="col">Heures Valorisés</th>
              <th scope="col">Heures Réelles</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Installation de Linux</th>
              <td>Software</td>
              <td>13/02/2020</td>
              <td>2h</td>
              <td>2h</td>
            </tr>
            <tr>
              <th scope="row">Women Rock It</th>
              <td>Conférence</td>
              <td>30/09/2021</td>
              <td>2h</td>
              <td>2h</td>
            </tr>
            <tr>
              <th scope="row">DevDay 2020</th>
              <td>Conférence</td>
              <td>16/11/2020</td>
              <td>2h</td>
              <td>2h</td>
            </tr>
            <tr>
              <th scope="row">DevDay 2021</th>
              <td>Conférence</td>
              <td>23/11/2021</td>
              <td>5h</td>
              <td>5h</td>
            </tr>
            <tr>
              <th scope="row">Big Data</th>
              <td>Salon</td>
              <td>29/09/2021</td>
              <td>9h</td>
              <td>9h</td>
            </tr>
            <tr>
              <th scope="row">Direction Mars</th>
              <td>Hackaton</td>
              <td>26-28/03/2021</td>
              <td>10h</td>
              <td>48h</td>
            </tr>
            <tr>
              <th scope="row">Bird's Bay</th>
              <td>Bénévola</td>
              <td>Septembre 2021</td>
              <td>5h</td>
              <td>15h</td>
            </tr>
            <tr>
              <th scope="row">Equitation</th>
              <td>Sport</td>
              <td>2005-Aujourd'hui</td>
              <td>5h</td>
              <td>+1000...h</td>
            </tr>
            <tr>
              <th scope="row">React Joyride</th>
              <td>Developpement</td>
              <td>04/2022</td>
              <td>10h</td>
              <td>12h</td>
            </tr>
            <tr>
              <th scope="row">Deployer un site React sur GitHub</th>
              <td>Formation</td>
              <td>17/05/2022</td>
              <td>3h</td>
              <td>3h</td>
            </tr>
            <tr>
              <th scope="row">Formation Marketing Digital</th>
              <td>Formation</td>
              <td>16/05/2022</td>
              <td>7h</td>
              <td>7h</td>
            </tr>
          </tbody>
        </table>


      </div>

    </>

  );
}
export default App;
