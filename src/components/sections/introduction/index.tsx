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
                <Col xs={12} md={8} lg={9} style={{ textAlign: "justify" }}>
                    <h2 className='text-center text-md-start'>
                        <span className='text-pink-100'>{t("introSection.about")}</span>
                    </h2>
                    <br />
                    <p>
                        {t("introSection.heading1")}
                        <br />
                        <br />
                        {t("introSection.heading2")}&nbsp;
                        <i><b className='text-pink-100'>{t("introSection.heading3")}</b> </i>
                        👩🏻‍🎓
                        {t("introSection.heading4")}&nbsp;
                        <i><b className='text-pink-100'>{t("introSection.heading5")}&nbsp;</b></i>
                        {t("introSection.heading6")}
                        <br />
                        <br />
                        {t("introSection.heading7")}
                        <br />
                        <br />
                        {t("introSection.heading8")}
                        <br />
                        <br />
                        {t("introSection.heading9")}


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
            <div>
                <p className="text-center brand-red">"{t("introSection.quote")}"</p>
                <p className="text-center brand-red">— Albert Einstein —</p>
            </div>
        </section>
    )
}

export default Introduction;