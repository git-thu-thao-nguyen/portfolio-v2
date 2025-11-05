import { useTranslation } from "react-i18next";

const AppFooter = () => {

    const { t } = useTranslation();

    return (
        <footer className="text-center py-6 text-sm text-gray-500 border-t border-gray-200">
            <p>
                Copyright © {new Date().getFullYear()} · {t("appFooter.rights")}
            </p>
            <p className="mt-1 text-xs text-gray-400"> {t("appFooter.credit")} {t("appHeader.brand")}</p>
        </footer>
    );
};

export default AppFooter;