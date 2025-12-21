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
                        Développeuse full-stack avec un profil hybride en développement web et gestion de projet, renforcé par une expérience entrepreneuriale.
                        <br />
                        <br />
                        Ce parcours m'a permis d'avoir une approche technique, organisationnelle, et me pousse à contribuer à la réussite du produit, pas seulement à son implémentation.
                        <br />
                        <br />
                        Compétences technique en conception d'applications front/back, intégration d'API, automatisation de workflows et traitement de données dans un environnement SaaS exigeant.
                        <br />
                        <br />
                        <i>
                            <span className='fw-light' style={{ opacity: 0.6 }}>
                                Intéressé(e) par mon profil ?
                                <br />
                                N'hésitez pas à me contacter sur LinkedIn ou par email, je reviens vers vous très vite.
                            </span>
                        </i>

                        {/* {t("introSection.heading9")} */}
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