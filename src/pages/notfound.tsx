// import { Link } from "react-router-dom";
import animation404 from "../assets/lottie/404.json";
import AnimationLottie from "@/components/share/animation-lottie";

const NotFound = () => {
    return (
        <div className="d-flex flex-column gap-6 align-items-center justify-content-center min-vh-100">
            <AnimationLottie animationPath={animation404} width="30%" />
            {/* <h3 className="font-bold mt-4">Page introuvable</h3> */}
        </div>
    );
};

export default NotFound;
