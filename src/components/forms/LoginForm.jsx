const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
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
        Login
      </button>
    </form>
  );
};

export default LoginForm;
