import { Col, Row } from "react-bootstrap"
import ProjectCard from "./project.card";
import { PROJECTS } from "helpers/data";
import { useTranslation } from "react-i18next";
// import Typewriter from "typewriter-effect";
import bg from 'assets/svg/background/hero.svg';



const Project = () => {

    const { t } = useTranslation()

    return (
        <>
            <div style={{
                backgroundImage: `url(${bg})`,
                width: "100%",
                height: 500,
                position: "absolute",
                top: 0,
                backgroundRepeat: "no-repeat",
                zIndex: 0
            }}>
            </div>
            <Row>
                <Col xs={12}>
                    <h3 className="text-center">
                        <span className="brand-red">{t("introSection.my")}&nbsp;</span>
                        {t("introSection.personal_projects")}
                    </h3>
                    {/* <h6 className="text-center mb-md-5 mb-2">
                        <Typewriter
                            options={{
                                strings: t("introSection.projectSubTitle"),
                                autoStart: true,
                                loop: true,
                                delay: 40,
                                deleteSpeed: 25,
                                wrapperClassName: "brand-green"
                            }}
                        />
                    </h6> */}
                </Col>
            </Row>

            <Row className="justify-content-center pb-2">
                {PROJECTS?.map(item => {
                    return (
                        <Col lg={4} md={6} className="project-card" key={item.id}>
                            <ProjectCard
                                imgPath={item.imgPath}
                                title={item.title}
                                description={item.description}
                                githubLink={item.githubLink}
                                demoLink={item.demoLink}
                            />
                        </Col>
                    )
                })}

            </Row>
            <div className="mb-7"></div>
        </>
    )
}

export default Project;