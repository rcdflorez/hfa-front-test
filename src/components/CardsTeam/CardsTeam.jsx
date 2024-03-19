import PropTypes from "prop-types";
import "./CardsTeam.scss";
import iconLink from "../../assets/icons/linkedin-brown.webp";
import { useEffect, useState } from "react";

const CardsTeam = ({ user, className }) => {
  const [descriptionPlus, setDescriptionPlus] = useState(false);

  const dataDescriptionPlus = () => {
    return (
      <article className={"card-team grid" + className} id={"user-" + user.id}>
        <div className="card-team_img">
          <img src={user.featured_image_src} alt="member team" />
        </div>

        <div className="card-team_data">
          <div className="title">
            <p id={user.id} className="title_name">
              {user.title.rendered}
            </p>
            <p
              className="title_title"
              dangerouslySetInnerHTML={{ __html: user.excerpt.rendered }}
            ></p>
          </div>
          <div className="description">
            <p
              dangerouslySetInnerHTML={{
                __html: textNormalized(
                  user.custom_fields.member_description[0]
                ),
              }}
            ></p>

            <h3>{descriptionPlus.author[0]}</h3>
            <ul>
              {descriptionPlus.author.map((text, index) => {
                if (index > 0 && index < 4) return <li key={index}>{text}</li>;
              })}
            </ul>
          </div>
        </div>

        <div className="card-team_data card-team_data1">
          <div className="description p-0">
            <ul>
              {descriptionPlus.author.map((text, index) => {
                if (index > 3) return <li key={index}>{text}</li>;
              })}
            </ul>

            <div
              dangerouslySetInnerHTML={{ __html: descriptionPlus.founder }}
            ></div>

            <div
              dangerouslySetInnerHTML={{ __html: descriptionPlus.chairman }}
            ></div>

            <div
              dangerouslySetInnerHTML={{ __html: descriptionPlus.former }}
            ></div>

            <div
              dangerouslySetInnerHTML={{ __html: descriptionPlus.libreum }}
            ></div>

            <div
              dangerouslySetInnerHTML={{ __html: descriptionPlus.education }}
            ></div>

            <div
              dangerouslySetInnerHTML={{ __html: descriptionPlus.family }}
            ></div>
          </div>

          <div className="linkedIn mt-3">
            <a
              href={user.custom_fields.social_linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={iconLink} alt="linkedIn" />
            </a>
          </div>
        </div>
      </article>
    );
  };

  const dataDescription = () => {
    return (
      <article className={"card-team " + className} id={"user-" + user.id}>
        <div className="card-team_img">
          <img src={user.featured_image_src} alt="member team" />
        </div>
        <div className="card-team_data">
          <div className="title">
            <p className="title_name">{user.title.rendered}</p>
            <p
              className="title_title"
              dangerouslySetInnerHTML={{ __html: user.excerpt.rendered }}
            ></p>
          </div>
          <div className="description">
            <p
              dangerouslySetInnerHTML={{
                __html: textNormalized(
                  user.custom_fields.member_description[0]
                ),
              }}
            ></p>
          </div>
          <div className="linkedIn">
            <a
              href={user.custom_fields.social_linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={iconLink} alt="linkedIn" />
            </a>
          </div>
        </div>
      </article>
    );
  };

  const textNormalized = (text) => {
    return text.replaceAll(/\r\n/g, "<br />");
  };

  useEffect(() => {
    if (user.custom_fields.member_description_Author) {
      const userData = user.custom_fields;
      setDescriptionPlus({
        author: userData.member_description_Author[0].split("\r\n\r\n"),
        founder: userData.member_description_Founder[0],
        chairman: userData.member_description_Chairman[0],
        former: userData.member_description_Former[0],
        libreum: userData.member_description_Libreum[0],
        education: userData.member_description_Education[0],
        family: userData.member_description_Family[0],
      });
    }
  }, [user]);

  return <>{descriptionPlus ? dataDescriptionPlus() : dataDescription()}</>;
};

export default CardsTeam;

CardsTeam.propTypes = {
  user: PropTypes.object.isRequired,
  className: PropTypes.string,
};
