import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <Link to={"/team?id=" + user.id}>
      <section className="user_team">
        <div
          className="user_photo"
          style={{
            backgroundImage: `url('${user.custom_fields?.member_image}')`,
          }}
        ></div>

        <aside className="container-user-data">
          <h3>
            <strong>{user.title.rendered.split(" ")[0]}</strong>
            <br />
            {user.title.rendered.split(" ")[1]}
          </h3>
          <p dangerouslySetInnerHTML={{ __html: user.excerpt.rendered }}></p>
        </aside>
      </section>
    </Link>
  );
};

export default UserCard;

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
};
