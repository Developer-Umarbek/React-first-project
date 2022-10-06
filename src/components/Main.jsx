import main1 from '../assets/images/main-1.png'
import main2 from '../assets/images/main-2.png'


const Main = () => {
    return ( 
        <>
            
    <main className="main">
        <div className="position">
            <div className="main__title">
                <h1>Kenapa Kita <span>Harus</span> Membaca Buku?</h1>
            </div>

            <div className="main__flex">

                <div className="main__flex__box1">

                    <p>“Aku rela dipenjara asalkan <b>bersama buku</b>, karena dengan buku <b>aku bebas</b>”</p>

                    <div className="main__flex__box1__avatar">
                        <img src={main1} alt="main1" />

                        <div className="main__flex__box1__avatar__words">
                            <h1>Mohammad Hatta</h1>
                            <h3>Wakil Presiden Indonesia Pertama</h3>
                        </div>
                    </div>
                </div>

                <div className="main__flex__box1">

                    <p>“Cuma perlu <b>satu buku</b> untuk jatuh cinta pada membaca, Cari Buku itu! <b>Mari jatuh
                            cinta</b>!</p>

                    <div className="main__flex__box1__avatar">
                        <img src={main2} alt="main1"/>

                        <div className="main__flex__box1__avatar__words">
                            <h1>Najwa Shihab</h1>
                            <h3>Duta Membaca</h3>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </main>
        </>
     );
}
 
export default Main;