const ContactUsForm = () => {
  return (
    <form className="space-y-8">
      <div className="space-y-2 relative">
        <input
          type="text"
          id="name"
          name="name"
          autoComplete="off"
          placeholder="Full Name"
          className="peer floating-input"
        />

        <label htmlFor="name" className="floating-label">
          Full Name
        </label>
      </div>

      <div className="space-y-2 relative">
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="off"
          placeholder="Email Address"
          className="peer floating-input"
        />

        <label htmlFor="email" className="floating-label">
          Email Address
        </label>
      </div>

      <div className="space-y-2 relative">
        <input
          type="text"
          id="subject"
          name="subject"
          autoComplete="off"
          placeholder="Subject"
          className="peer floating-input"
        />

        <label htmlFor="subject" className="floating-label">
          Subject
        </label>
      </div>

      <div className="space-y-2 relative">
        <textarea
          id="message"
          name="message"
          autoComplete="off"
          placeholder="Message"
          className="peer floating-input"
          rows="4"
        ></textarea>

        <label htmlFor="message" className="floating-label">
          Message
        </label>
      </div>

      <button type="submit" className="button-black-solid w-full">
        Send Message
      </button>
    </form>
  );
};

export default ContactUsForm;