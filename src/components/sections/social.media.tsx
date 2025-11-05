import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

interface IProps {
    github: string;
    linkedin: string;
}

const SocialMedia = (props: IProps) => {
    const { github, linkedin } = props;

    return (
        <div className="my-4 d-flex items-center gap-3">

            <a href={github} target='_blank' className="highlight" title="github">
                <FaGithub size={30} />
            </a>
            <a href={linkedin} target='_blank' className="highlight" title="linkedin">
                <FaLinkedinIn size={30} />
            </a>

        </div>
    )
}

export default SocialMedia;