import { useTranslation } from "react-i18next";

const Homepage = () => {
  const { t: translation } = useTranslation("homepage");

  return <div>{translation("pageTitle")}</div>;
};

export default Homepage;
