const SignupForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoUrl = e.target.photoUrl.value;
    const password = e.target.password.value;

    console.log(name, email, photoUrl, password);
    // You can add further logic here, such as sending the form data to a server
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      <div className="space-y-2 relative">
        <input
          type="text"
          id="name"
          name="name"
          autoComplete="off"
          placeholder="Your Name"
          className="peer floating-input"
          required
        />

        <label htmlFor="name" className="floating-label">
          Your Name
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
          required
        />

        <label htmlFor="email" className="floating-label">
          Email Address
        </label>
      </div>

      <div className="space-y-2 relative">
        <input
          type="text"
          id="photoUrl"
          name="photoUrl"
          autoComplete="off"
          placeholder="Photo URL"
          className="peer floating-input"
          required
        />

        <label htmlFor="photoUrl" className="floating-label">
          Photo URL
        </label>
      </div>

      <div className="space-y-2 relative">
        <input
          type="password"
          id="password"
          name="password"
          autoComplete="off"
          placeholder="Password"
          className="peer floating-input"
          required
        />

        <label htmlFor="password" className="floating-label">
          Password
        </label>
      </div>

      <button type="submit" className="button-black-solid w-full">
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;
