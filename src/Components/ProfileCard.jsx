import "./ProfileCard.css";


function ProfileCard({
  name,
  profession,
  company,
  price,
  image,
  skills,
  description,
}) {
  return (
    <div className="profile-card">

      <div className="profile-price">
        {price}
      </div>

      <div className="profile-image-box">
        <img
          className="profile-image"
          src={image}
          alt={name}
        />
      </div>

      <div className="profile-info">

        <h1 className="profile-name">
          {name}
        </h1>

        <p className="profile-profession">
          {profession}
        </p>

        <p className="profile-company">
          🏢 {company}
        </p>

        <div className="profile-skills">
          {skills.map((skill, index) => (
            <span className="profile-skill" key={index}>
              {skill}
            </span>
          ))}

          <span className="profile-skill profile-more">
            +4
          </span>
        </div>

        <p className="profile-description">
          {description}
        </p>

        <div className="profile-divider"></div>

        <button className="profile-btn">
          VIEW PROFILE
        </button>

      </div>
    </div>
  );
}

export default ProfileCard;