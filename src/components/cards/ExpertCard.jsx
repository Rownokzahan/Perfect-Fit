import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const ExpertCard = ({expert}) => {
  return (
    <div key={expert.id} className="text-center group overflow-hidden">
      <div className="h-[200px] overflow-hidden relative">
        <img
          src={expert.image}
          className="w-full h-full object-cover object-top group-hover:scale-105 duration-300"
          alt=""
        />

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 duration-300 bg-black bg-opacity-50 flex items-center justify-center gap-6">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="button-round-white"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="button-round-white"
          >
            <RiInstagramFill />
          </a>

          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="button-round-white"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>

      <div className="p-3 bg-white">
        <h4 className="text-lg font-semibold">{expert.name}</h4>
        <p className="text-sm">{expert.designation}</p>
      </div>
    </div>
  );
};

export default ExpertCard;
