import main3 from '../assets/images/main-3.png'
import main4 from '../assets/images/main-4.png'
import sircle from '../assets/images/sircle.png';

const Section = () => {
    return (
        <>
    
    <div className="col">
        <div className="col__box">
            <img src={sircle} alt="sircle" />
            <div className="col__box__words">
                <h1>500+</h1>
                <p>Judul Buku</p>
            </div>
        </div>

        <div className="col__box">
            <img src={sircle} alt="sircle" />
            <div className="col__box__words">
                <h1>$0</h1>
                <p>Gratis Peminjaman</p>
            </div>
        </div>

        <div className="col__box">
            <img src={sircle} alt="sircle" />
            <div className="col__box__words">
                <h1>5</h1>
                <p>Kegiatan Rutin</p>
            </div>
        </div>
    </div>

    <section className="section">
        <div className="section__title">
            <ul className="section__title__ul">
                <li>Apa Kata Mereka?</li>
                <li>Mereka yang telah menjadi pengunjung tetap kami</li>
            </ul>
            <ul className="section__title__ul2">
                <li>Selengkapnya</li>
            </ul>
        </div>

        <div className="section__cards">

            <div className="section__cards__box">
            
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                <div className="section__cards__box__flex">
                    <ul className="section__cards__box__flex__ul">
                        <li><img src={main3} alt="main-3" /></li>
                    </ul>

                    <ul className="section__cards__box__flex__ul2">
                        <li>Guy Hawkins</li>
                        <li>32 Tahun, Karyawan</li>
                    </ul>

                </div>

            </div>


            <div className="section__cards__box2">
            
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

            <div className="section__cards__box2__flex">
                <ul className="section__cards__box2__flex__ul">
                    <li><img src={main4} alt="main-4" /></li>
                </ul>

                <ul className="section__cards__box2__flex__ul2">
                    <li>Brooklyn Simmons</li>
                    <li>20 Tahun, Mahasiswa</li>
                </ul>

            </div>

        </div>

        </div>

    </section>

        </>

    );
}

export default Section;