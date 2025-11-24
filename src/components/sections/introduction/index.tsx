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
                        {/* 🎓 {t("introSection.heading2")}&nbsp;
                        <b className='text-pink-100'>{t("introSection.heading3")}</b>
                        {t("introSection.heading4")}&nbsp;
                        <b className='text-pink-100'>{t("introSection.heading5")}&nbsp;</b>
                        {t("introSection.heading6")}
                        <br />
                        <br /> */}

                        🎓 Diplômée d'un Bac+5 en Informatique, je cumule plus de 5 ans d'expérience en développement web, automatisation et projets data, à travers des missions en entreprise et une aventure entrepreneuriale.
                        <br />
                        <br />
                        J'ai travaillé sur des technologies web, des outils full-stack, des workflows automatisés et des solutions orientées data/IA, tout en prenant part à la gestion de projet. Ce parcours m'a appris à aborder un projet avec une vision technique, mais aussi organisationnelle.
                        <br />
                        <br />
                        Curieuse, rigoureuse et engagée, je porte une attention constante à produire un code maintenable, structuré, testé et documenté.
                        <br />
                        Mon approche de travail est organisée, avec une vraie discipline sur la qualité des livrables et le respect des délais.
                        <br />
                        <br />
                        <i>
                            <span className='fw-light' style={{ opacity: 0.6 }}>
                                Intéressé(e) par mon profil ?
                                <br />
                                N'hésitez pas à me contacter sur LinkedIn ou par email, je vous répondrai rapidement !
                            </span>
                        </i>

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

            {/* <br />
            <br />
            <div>
                <p className="text-center brand-red">"{t("introSection.quote")}"</p>
                <p className="text-center brand-red">— Albert Einstein —</p>
            </div> */}

        </section >
    )
}

export default Introduction;