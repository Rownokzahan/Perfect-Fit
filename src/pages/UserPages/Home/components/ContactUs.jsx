import Container from "../../../../components/ui/Container";
import Title from "../../../../components/ui/Title";
import ContactUsForm from "../../../../components/forms/ContactUsForm";
import bg_flower from "../../../../assets/images/home/contact/daisy.png";
import { AiOutlineClockCircle, AiOutlineMail } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { LuMapPin } from "react-icons/lu";
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import { PiPinterestLogoBold } from "react-icons/pi";

const ContactUs = () => {
  return (
    <section>
      <Container>
        <Title>Contact Us</Title>
        <div className="grid lg:grid-cols-6 gap-16 p-2">
          <div className="lg:col-span-4">
            <ContactUsForm />
          </div>

          <div className="lg:col-span-2 flex flex-col gap-6 relative overflow-hidden">
            <div className="space-y-2">
              <h5 className="text-lg font-semibold">Email Us</h5>
              <p className="flex items-center gap-4">
                <AiOutlineMail />
                <span>perfectfit@email.com</span>
              </p>
            </div>

            <div className="space-y-2">
              <h5 className="text-lg font-semibold">Call Us</h5>
              <p className="flex items-center gap-4">
                <IoCallOutline />
                <span>123-456-7890</span>
              </p>
            </div>

            <div className="space-y-2">
              <h5 className="text-lg font-semibold">Visit Us</h5>
              <p className="flex items-center gap-4">
                <LuMapPin />
                <span>123 Main Street, City, Country</span>
              </p>

              <div className="space-y-2">
                <p className="flex items-center gap-4">
                  <AiOutlineClockCircle />
                  <span>Visiting Hours:</span>
                </p>

                <div className="text-sm space-y-2 ps-8">
                  <p>Monday - Friday: 9am - 6pm</p>
                  <p>Saturday: 10am - 4pm</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h5 className="text-lg font-semibold">Connect with Us</h5>
              <div className="flex items-center gap-4">
                <SlSocialFacebook />
                <SlSocialInstagram />
                <PiPinterestLogoBold />
              </div>
            </div>

            {/* Flower Design */}
            <div className="w-40 absolute z-10 -inset-y-20 -right-20 opacity-10 flex flex-col justify-between">
              <img
                src={bg_flower}
                className="w-full animate-spin-slow"
                alt=""
              />
              <img
                src={bg_flower}
                className="w-full animate-spin-slow"
                alt=""
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactUs;
