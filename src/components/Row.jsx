import card1 from '../assets/images/card-1.png';
import card2 from '../assets/images/card-2.png';
import card3 from '../assets/images/card-3.png';

const Row = () => {
    return (  
        <>

        <div className="row">
        <div className="row__title">
            <ul className="row__title__ul">
                <li>Apa Kata Mereka?</li>
                <li>Mereka yang telah menjadi pengunjung tetap kami</li>
            </ul>
            <ul className="row__title__ul2">
                <li>Selengkapnya</li>
            </ul>
        </div>

        <div className="row__cards">
            <img src={card1} alt="card1" />
            <img src={card2} alt="card2" />
            <img src={card3} alt="card3" />
        </div>
    </div>
        </>
    );
}
 
export default Row;