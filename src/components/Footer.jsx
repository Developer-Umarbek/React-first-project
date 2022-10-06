import logo from "../assets/images/logo.png";

const Footer = () => {
    return ( 
        <>
        
    <div className="information">
        <h2>Ingin <span>Membantu</span> Meningkatkan Literasi Anak-Anak Sekitar Kita?</h2>
        <p>Percayakan melalui kegiatan kita</p>
        <button>Donasi dengan Kami</button>
        <h4>Atau</h4>
        <h3>Hubungi Kami <i className="fas fa-phone"></i></h3>
    </div>

    <footer className="footer">
        <div className="footer__flex">
            <ul className="footer__flex__ul">
                <li><img src={logo} alt="logo" /> Pojok Baca Probolinggo</li>
                <li><i className="fab fa-instagram"></i><i className="fab fa-facebook"></i><i className="fab fa-youtube"></i></li>
            </ul>

            <ul className="footer__flex__ul2">
                <p>Kontak</p>
                <li>Email</li>
                <li>Alamat</li>
                <li>No. Rekening</li>
            </ul>

            <ul className="footer__flex__ul3">
                <p>Tentang Kami</p>
                <li>Umum</li>
            </ul>

            <ul className="footer__flex__ul4">
                <p>Galery</p>
                <li>Kegiatan 2018</li>
                <li>Kegiatan 2019</li>
                <li>Kegiatan 2020</li>
                <li>Kegiatan 2021</li>
            </ul>
        </div>
    </footer>

<div className="footer-bottom">
    <div className="footer-bottom__position">
        <p>&copy Pojok Baca Probolinggo 2022</p>
    </div>
</div>


        </>
     );
}
 
export default Footer;