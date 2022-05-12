import negosyo from "../../images/negosyo-basics.png";

const Article = () => {
    return (
        <div className="content article">
            <div className="tag-date">
                <div className="article-tag">BUSINESS</div>
                <div className="article-date">April 27, 2022</div>
            </div>
            <div className="article-image">
                <img src={negosyo} alt="" />
            </div>
            <div className="image-information">Photo Information: Usapang Pinansyal</div>
            <div className="article-title">Negosyo Basics: Ano ang Paraan ng Pagnenegosyo?</div>
            <div className="article-body">
                <p>Tunay na magandang oportunidad ang negosyo, pero paano ba ito tatagal nang may tubo, para hindi masayang ang puhunan?
                    <br /><br />
                    Basahin ang Negosyo Basics para matutunan ang mga bagay na dapat kabisado ng bawat negosyante! Para tumagal ang
                    negosyo, importanteng kabisaduhin ang iba't ibang usapang pinansyal. Basahin ang ilang mga payo upang maayos ang pagnenegosyo!
                    <br /><br />
                    <span className="heading">Ano ang Negosyo Ngayon?</span> <br />
                    Ang Negosyo Ngayon ay isang proyekto ng mga mag-aaral ng UP Diliman na may layuning tulungan ang mga residente ng DRCNAI na
                    magtayo ng sarili nilang negosyo.
                    <br /><br />
                    <span className="heading">Ano ang Mangyayari?</span> <br />
                    Magkakaroon ng mga post dito, sa DRCNAI Facebook page, tungkol sa Negosyo Basics at Business Finances. Pagkatapos nito,
                    magkakaroon ng evaluation ng mga natutunan niyo, at consultation para mga naisip niyong negosyo.
                    <br /><br />
                </p>
            </div>
            <div className="back-to-top" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>Back To Top</div>
        </div>
    );
}

export default Article;