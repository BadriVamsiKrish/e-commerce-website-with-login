import ToursList from './TourList';
import classes from './TourList.module.css';
import { cartstore } from '../App';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
const list = [
    {
        date: 'JUL 16',
        country: 'DETROIT MI',
        place: 'DTE ENERGY MUSIC THEATRE',
    },
    {
        date: 'JUL 19',
        country: 'TORONTO ON',
        place: 'BUDWEISER STAGE'
    },
    {
        date: 'JUL 22',
        country: 'BRISTOW VA',
        place: 'JIGGY LUBE LIVE'
    },
    {
        date: 'JUL  29',
        country: 'PHOENIX AZ',
        place: 'AK CHIN PAVILION'
    },
    {
        date: 'AUG 2',
        country: 'LAS VEGAS NV',
        place: 'T MOBILE ARENA'
    },
    {
        date: 'AUG 7',
        country: 'CONCORD CA',
        place:' CONCORD PAVILION'
    }
]

const HomePage = () => {
    const[cart,setCart,showcart,setShowcart,login,setLogin]=useContext(cartstore);

    const tourSchedule = list.map((ele) => (
        <ToursList 
        key={Math.random()}
        date={ele.date}
        country={ele.country}
        place={ele.place}
        />
    ))

    return (
        <>{console.log(login)}
            <h1 style={{color:'white',background:'gray',padding:'20px',fontSize:'50px',fontFamily:'revert'}}><center>The Generics</center></h1>
            <h2 style={{textAlign:'center'}}>Tours</h2>
            <ul className={classes.tours}>
                {tourSchedule}
            </ul>
        </>
    )
}

export default HomePage;