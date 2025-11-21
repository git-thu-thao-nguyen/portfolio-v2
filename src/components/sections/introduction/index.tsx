import { Col, Row } from 'react-bootstrap';
import Tilt from "react-parallax-tilt";
import avatarImg from "assets/svg/avatar/photo.png";
import './introduction.scss';
import { useTranslation } from 'react-i18next';

const Introduction = () => {
    const { t } = useTranslation();

    return (
        <section className='introduction-section my-5 my-md-7' style={{ position: "relative" }}>
            <Row>
                <Col xs={12} md={8} lg={9} >
                    <h2 className='text-center text-md-start'>
                        <span className='text-pink-100'>{t("introSection.about")}</span>
                    </h2>
                    <br />
                    <p>
                        🎓 {t("introSection.heading2")}&nbsp;
                        <b className='text-pink-100'>{t("introSection.heading3")}</b>
                        {t("introSection.heading4")}&nbsp;
                        <b className='text-pink-100'>{t("introSection.heading5")}&nbsp;</b>
                        {t("introSection.heading6")}
                        <br />
                        <br />

                        {/* {t("introSection.heading1")} */}
                        Mon parcours, entre développement web et gestion de projet, m'a appris à aborder un projet avec une vision technique mais aussi organisationnelle.
                        <br />
                        <br />
                        Curieuse, rigoureuse et très investie dans le travail, j'accorde une vraie importance à la qualité, à la maintainabilité du code et au respect des délais, ainsi qu'à la cohérence des solutions que je mets en place.
                        <br />
                        <br />
                        Vous êtes intéressé(e) par mon profil ? N'hésitez pas à me contacter sur LinkedIn ou par email. Je reviendrai vers vous dans les plus brefs délais.

                        {/* <br />
                        <br />
                        {t("introSection.heading7")}
                        <br />
                        <br />
                        {t("introSection.heading8")}
                        <br />
                        {t("introSection.heading9")} */}


                    </p>
                </Col>
                {/* <Col md={3} className='d-md-block d-none'> */}
                <Col xs={12} md={4} lg={3} className="text-center mt-4 mt-md-0">
                    <Tilt>
                        <img src={avatarImg} className="img-fluid" alt="avatar" />
                    </Tilt>
                </Col>
            </Row>
            <div className="about-container d-none d-md-flex">
                <span className="about-label">{t("introSection.about")}</span>
                <span className="vertical-line"></span>
            </div>
            <br />
            <br />
            {/* <div>
                <p className="text-center brand-red">"{t("introSection.quote")}"</p>
                <p className="text-center brand-red">— Albert Einstein —</p>
            </div> */}
        </section >
    )
}

export default Introduction;