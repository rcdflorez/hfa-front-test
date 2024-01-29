import PropTypes from 'prop-types';

const SkillCard = ({data, className}) => {
  return (
    <section className={'skills_card ' + className}>
      {/* <img src={data.custom_fields.skill_icon[0]} alt="" /> */}
      <img src={data.icon} alt="" />
      <h3>{data.title.rendered}</h3>
      <p>{data.custom_fields.skill_description}</p>
    </section>
  )
}

export default SkillCard

SkillCard.propTypes = {
  data: PropTypes.object.isRequired,
  className: PropTypes.string,
};