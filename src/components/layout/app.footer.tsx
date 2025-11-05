import { useTranslation } from "react-i18next";

const AppFooter = () => {

    const { t } = useTranslation();

    return (
        <footer className="text-center mt-7">
            <p>
                Copyright © {new Date().getFullYear()} · {t("appFooter.credit")} {t("appHeader.brand")}
            </p>
        </footer>
    );
};

export default AppFooter;