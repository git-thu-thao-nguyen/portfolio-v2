import Typewriter from "typewriter-effect";
import SocialMedia from "components/sections/social.media";
import { useTranslation } from "react-i18next";
import './hero.scss';
import ResizeButton from "components/sections/resize.button";
import { APP_DATA } from 'helpers/data';
import { MdFileDownload } from "react-icons/md";
import { AiFillFire } from "react-icons/ai";

interface IProps {
    scrollToExperienceSection: () => void
}

const HeroLeft = (props: IProps) => {

    const { scrollToExperienceSection } = props;

    const { t } = useTranslation();

    const handleDownloadCV = () => {
        const url = APP_DATA.CV_URL
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <div className='hero-left'>
            <h3>
                {t("heroSection.hello")}&nbsp;
                <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                </span>
            </h3>
            <h3 className="pt-3 pb-3">
                {t("heroSection.introduction")}&nbsp;
                <strong className="brand-red">{t("appHeader.brand")}</strong>
            </h3>
            <Typewriter
                options={{
                    strings: [
                        t("heroSection.job1"),
                        // t("heroSection.job2")
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 40,
                    deleteSpeed: 25,
                    wrapperClassName: "brand-green"
                }}
            />
            <div className="mt-md-6 mt-3 mb-md-5 mb-2">
                <SocialMedia
                    github={APP_DATA.GITHUB_URL}
                    linkedin={APP_DATA.LINKEDIN_URL}
                />
            </div>
            <div className="d-md-flex d-none gap-4">
                <ResizeButton
                    onClick={scrollToExperienceSection}
                    btnText={t("heroSection.exp")}
                    btnIcons={<AiFillFire className="text-warning" />}
                    btnStyle={{
                        background: "unset",
                        border: "1px solid var(--border-hero-right)",
                        color: "var(--text-white-1)"
                    }}
                />
                <ResizeButton
                    btnText={t("heroSection.cv")}
                    btnIcons={<MdFileDownload />}
                    onClick={handleDownloadCV}
                />
            </div>

        </div>
    )
}

export default HeroLeft;