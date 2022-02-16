import './Footer.css'

function Footer() {

    return (
        <>
            <div className="textCU">
                <h2>Contact us</h2>
                <h2>Phone: +9626548457</h2>
                <h2> <a href="mail to: Ghanem_97@outlook.com" className='linkStyle'>Email</a></h2>
                <h3>Copyright &copy;2022 Mohammad Ghanem, All rights reserved.</h3>
                <h2>Social media </h2>
            </div>
            <div className="smItem">
                <a href="http://www.facebook.com" class="SMfa fa">f</a>
                <a href="http://www.linkedin.com" class="SMin fa">in</a>
                <a href="http://www.twitter.com" class="SMt fa">t</a>
                <a href="http://www.instagram.com" class="SMins fa">ins</a>
            </div>
        </>


    );
}

export default Footer;