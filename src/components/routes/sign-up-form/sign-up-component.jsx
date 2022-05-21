import { useState } from "react";

const defaultformFields = {
  displayName: "",
  email: "",
  password: "",
  conformPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultformFields);
  const { displayName, email, password, conformPassword } = formFields;

  // console.log(formFields);

  const handleChange = (event) => {
    const { name, value } = event.target;
    // console.log({ ...formFields, [name]: value });
    // console.log(name);
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign Up with your email and pasword</h1>
      <form onSubmit={() => {}}>
        <label htmlFor="name">Display Name</label>
        <input
          type="text"
          id="name"
          name="displayName"
          value={displayName}
          required
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />

        <label htmlFor="pass1">Password</label>
        <input
          type="password"
          id="pass1"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />

        <label htmlFor="pass2">Conform Password</label>
        <input
          type="password"
          id="pass2"
          name="conformPassword"
          value={conformPassword}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
