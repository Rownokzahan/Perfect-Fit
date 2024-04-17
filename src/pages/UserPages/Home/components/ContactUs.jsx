import Container from "../../../../components/ui/Container";
import Title from "../../../../components/ui/Title";
import ContactUsForm from "../../../../components/forms/ContactUsForm";
import bg_flower from "../../../../assets/images/home/contact/daisy.png";
import bg_fabric from "../../../../assets/images/home/contact/bg-fabric.jpg";
import { AiOutlineClockCircle, AiOutlineMail } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { LuMapPin } from "react-icons/lu";
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import { PiPinterestLogoBold } from "react-icons/pi";

const ContactUs = () => {
  return (
    <section>
      <Container>
        <div
          style={{ backgroundImage: `url(${bg_fabric})` }}
          className="bg-fixed bg-cover sm:p-20"
        >
          <div className="py-20 lg:p-20 bg-primary-white relative z-20 overflow-hidden">
            <Title>Contact Us</Title>
            <div className="grid xl:grid-cols-4 gap-12 p-2">
              <div className="xl:col-span-3 md:px-12">
                <ContactUsForm />
              </div>

              <div className="flex flex-col gap-6 text-center xl:text-left">
                <div className="space-y-2">
                  <h5 className="text-lg font-semibold">Email Us</h5>
                  <p className="flex items-center gap-4 justify-center xl:justify-start">
                    <AiOutlineMail />
                    <span>perfectfit@email.com</span>
                  </p>
                </div>

                <div className="space-y-2">
                  <h5 className="text-lg font-semibold">Call Us</h5>
                  <p className="flex items-center gap-4 justify-center xl:justify-start">
                    <IoCallOutline />
                    <span>123-456-7890</span>
                  </p>
                </div>

                <div className="space-y-2">
                  <h5 className="text-lg font-semibold">Visit Us</h5>
                  <p className="flex items-center gap-4 justify-center xl:justify-start">
                    <LuMapPin />
                    <span>123 Main Street, City, Country</span>
                  </p>

                  <div className="space-y-2">
                    <p className="flex items-center gap-4 justify-center xl:justify-start">
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
                  <div className="flex items-center gap-4 justify-center xl:justify-start">
                    <SlSocialFacebook />
                    <SlSocialInstagram />
                    <PiPinterestLogoBold />
                  </div>
                </div>
              </div>
            </div>

            {/* Flower Design */}
            <>
              <div className="absolute -z-10 -top-32 -bottom-32 -left-32 opacity-10 w-72 flex flex-col justify-between">
                <img src={bg_flower} className="w-full" alt="" />
                <img src={bg_flower} className="w-full" alt="" />
              </div>

              <div className="absolute -z-10 -top-32 -bottom-32 -right-32 opacity-10 w-72 flex flex-col justify-between">
                <img src={bg_flower} className="w-full" alt="" />
                <img src={bg_flower} className="w-full" alt="" />
              </div>
            </>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactUs;
