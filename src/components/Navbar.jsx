import header1 from '../assets/images/header-1.png';
import header2 from '../assets/images/header-2.png';
import header3 from '../assets/images/header-3.png';
import header4 from '../assets/images/header-4.png';
import header5 from '../assets/images/header-5.png';
import header6 from '../assets/images/header-6.png';
import header7 from '../assets/images/header-7.png';
import logo from "../assets/images/logo.png";

const header = () =>  {
    return (
        <>
            <header className="header">
                <div className="color">
                    <nav className="nav">
                        <div className="nav__logo"><img src={logo} alt="logo" /></div>

                        <ul className="nav__ul">
                            <li className="nav__ul__li"><a href="#" className="nav__ul__li__a">Beranda</a></li>
                            <li className="nav__ul__li"><a href="#" className="nav__ul__li__a">Koleksi</a></li>
                            <li className="nav__ul__li"><a href="#" className="nav__ul__li__a">Syarat dan Ketentuan</a></li>
                            <li className="nav__ul__li"><a href="#" className="nav__ul__li__a">Kontak</a></li>
                            <li classname="nav__ul__li"><a href="#" classname="nav__ul__li__a  btn">Masuk</a></li>
                        </ul>
                    </nav>
                </div>

                <div classname="header__title">
                    <h3><span>Pojok Baca</span> Probolinggo</h3>

                    <h2>Pinjam Buku Secara <span>Gratis</span> untuk Masyarakat</h2>

                    <div classname="buttons">
                        <button classname="btn1">Cari Judul Buku <i classname="fas fa-search"></i></button>
                        <button classname="btn2">Donasi dengan Kami</button>
                    </div>
                </div>



                <div classname="header__cards">
                    <div classname="header__cards__box1">
                        <h3>Sedang Tuhan pun Cemburu</h3>
                        <p><span>Emha Ainun Nadjib</span></p>
                        <img src={header1} alt="header" />
                    </div>

                    <div classname="header__cards__box2">
                        <h3>Hati-Hati dengan Sampah</h3>
                        <p><span>Ukjae Lee</span></p>
                        <img src={header2} alt="header" />
                    </div>

                    <div classname="header__cards__box3">
                        <h3>Laut Bercerita</h3>
                        <p><span>Leila S. Chudori</span></p>
                        <img src={header3} alt="header" />
                    </div>
                    <div classname="header__cards__box4">
                        <h3>Toto-chan : The Little Girl At The Window</h3>
                        <p><span>Testuko Kuroyanagi</span></p>
                        <img src={header4} alt="header" />
                    </div>

                    <div className="header__cards__box5">
                        <h3>Anatomi Rasa</h3>
                        <p><span>Anatomi Rasa</span></p>
                        <img src={header5} alt="header" />
                    </div>

                    <div className="header__cards__box6">
                        <h3>Perempuan di Titik Nol</h3>
                        <p><span>Nawal eEl Saadawi</span></p>
                        <img src={header6} alt="header" />
                    </div>

                    <div className="header__cards__box7">
                        <h3>Berjalan di Atas Cahaya</h3>
                        <p><span>Hanum Salsabiela Rais</span></p>
                        <img src={header7} alt="header" />
                    </div>
                </div>

            </header>
        </>
    );
}

export default header;