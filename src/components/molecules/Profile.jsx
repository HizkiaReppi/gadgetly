import { Link } from "react-router-dom";

const Profile = ({ image, name, position, usernameGithub }) => {
  return (
    <div className="mb-10 flex flex-col items-center">
      <Link to={`https://github.com/${usernameGithub}`} target="_blank">
        <img
          src={image}
          alt={name}
          className="h-40 w-40 rounded object-cover md:h-52 md:w-52 md:rounded-md"
        />
      </Link>
      <h3 className="mb-1 mt-1.5 text-center text-base font-semibold md:text-lg lg:text-xl">
        <Link
          to={`https://github.com/${usernameGithub}`}
          className="text-black "
          target="_blank"
        >
          {name}
        </Link>
      </h3>
      <p className="text-center text-sm md:text-base lg:text-lg">{position}</p>
    </div>
  );
};

export default Profile;
