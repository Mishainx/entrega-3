import './Home.scss';
import NavBar from '../../componentes/Home/Navbar/NavBar';
import { useParams } from 'react-router-dom';


function Home() {
  const {id} = useParams();

  return (
    <div className="Home">
      <NavBar/>
    </div>
  );
}

export default Home;
