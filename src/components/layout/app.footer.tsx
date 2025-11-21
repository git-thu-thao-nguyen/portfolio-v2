import { useTranslation } from "react-i18next";

const AppFooter = () => {
    const { t } = useTranslation();

    return (
        <footer
            className="text-center mt-7 py-4 position-relative"
            style={{ letterSpacing: "0.8px" }}
        >
            <div className="container">
                {/* <p className="m-0 fw-light" style={{ opacity: 0.85 }}>
                    {t("appFooter.credit")}{" "}
                    <span className="font-mars">{t("appHeader.brand")}</span>
                </p> */}

                <div className="mt-2">
                    <small className="text-secondary" style={{ fontSize: "0.85rem" }}>
                        © {new Date().getFullYear()} ·
                        <span className="font-mars">{t("appHeader.brand")}</span>
                    </small>
                </div>
            </div>
        </footer>
    );
};

export default AppFooter;
