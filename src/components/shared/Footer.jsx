import Container from "../ui/Container";
import Logo from "../ui/Logo";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaHeart } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="mt-24 pt-20 bg-primary-black text-secondary-black">
      <Container marginTop={0}>
        <div className="flex flex-wrap justify-between gap-12">
          <div className="md:w-[35%] space-y-4">
            <div className="text-primary-white">
              <Logo />
            </div>
            <p>
              &ldquo;Discover the Joy of Personalized Fashion with Our Exquisite
              Collection of Customizable Dresses. Find Your Perfect Fit and
              Express Your Unique Style!&rdquo;
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-primary-white">Site Links</h4>
            <div className="flex flex-col gap-4">
              <a to="/">Home</a>
              <a href="/">Dresses</a>
              <a href="/">Create New</a>
              <a href="/">About Us</a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-primary-white">
              Terms & Conditons
            </h4>
            <div className="flex flex-col gap-4">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Return Policy</a>
              <a href="#">Exchange Policy</a>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h4 className="font-semibold text-primary-white">Follow Us</h4>
              <div className="flex gap-4 items-center">
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
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-round-white"
                >
                  <FaLinkedinIn />
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

            <div className="space-y-4">
              <h4 className="font-semibold text-primary-white">Subscribe Us</h4>
              <form className="flex flex-wrap items-center">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="p-2 bg-transparent border border-primary-white focus:outline-none"
                />
                <button type="submit" className="p-2 bg-primary-white border border-primary-white text-primary-black font-semibold">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="text-xs py-6 mt-12 border-t border-gray-400 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p>Copyright &copy;{currentYear} All Rights Reserved</p>

          <p className="flex items-center gap-1">
            <span>Made with</span>
            <FaHeart />
            <span>by</span>
            <a
              href="https://rownok-zahan-rupa.netlify.app/"
              target="_blank"
              className="text-primary"
            >
              Rownok Zahan Rupa
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
