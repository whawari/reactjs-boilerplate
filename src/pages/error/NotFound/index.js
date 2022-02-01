import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t: translation } = useTranslation("notFoundPage");

  return <div>{translation("pageTitle")}</div>;
};

export default NotFound;
