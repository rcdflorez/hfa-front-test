import { useEffect, useState } from "react";
import "./Titan.scss";
import TitanGallery from "../../components/TitanGallery/TitanGallery";
import TitanAbout from "../../components/TitanAbout/TitanAbout";

const Titan = () => {
  const [titan, setTitan] = useState(false);
  const [aboutSection, setAboutSection] = useState(false);
  const [footerImage, setFooterImage] = useState(false);

  const titleNormalized = (title) => {
    let text = title;
    if (title.includes("HIVE’S"))
      text = title.replace("HIVE’S", "<br /> HIVE’S");
    return text;
  };
  const textNormalized = (text) => {
    const textData = {
      p1: text.split("\n")[0],
      p2: text.split("\n").slice(1).join("<br />"),
    };
    return textData;
  };
  useEffect(() => {
    const env = import.meta.env;
    fetch(`${env.VITE_CMS_BASE_URL}${env.VITE_CMS_API_URL}titan`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        const data = json.find((data) =>
          data.title.rendered.includes("JP James named to Atlanta 500 List")
        );
        const about = json.filter((data) =>
          data.title.rendered.includes("About section")
        );

        setTitan(data);
        setAboutSection(about.sort((a, b) => a.id - b.id));
        if (window.innerWidth >= 768)
          setFooterImage(data.custom_fields.titan_footer_image[0]);
      });
  }, []);
  return (
    <section className="titan-page titan">
      {titan && (
        <>
          <div className="container-md">
            <div className="titan_content">
              <div className="titan_title ">
                <h3
                  className="fw-bold"
                  dangerouslySetInnerHTML={{
                    __html: titleNormalized(titan.title.rendered),
                  }}
                ></h3>
              </div>

              <div className="titan_description">
                <p
                  className=""
                  dangerouslySetInnerHTML={{
                    __html: textNormalized(
                      titan.custom_fields.titan_description[0]
                    ).p1,
                  }}
                ></p>
                <aside className="titan_description_img">
                  <img
                    src={titan.custom_fields.titan_logo}
                    alt="Titan logo"
                    className="atl-500-logo"
                  />
                </aside>

                <p
                  className="pb-5"
                  dangerouslySetInnerHTML={{
                    __html: textNormalized(
                      titan.custom_fields.titan_description[0]
                    ).p2,
                  }}
                ></p>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Titan;
