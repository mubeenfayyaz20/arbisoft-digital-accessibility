// BadExample.tsx
"use client";

import { useState } from "react";

export default function BadExample() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    alert("Form submitted successfully!"); // no validation, always succeeds
  };

  return (
    <form name="signup" id="signup" method="post" onSubmit={handleSubmit}>
      <label>
        First Name
        <input type="text" />
      </label>
      <br />

      <label>
        Last Name
        <input type="text" />
      </label>
      <br />

      <label>
        Email Address
        <input type="email" />
      </label>
      <br />

      <label>
        Phone Number
        <input type="tel" />
      </label>
      <br />

      <input type="submit" value="Submit" disabled={submitted} />
    </form>
  );
}



export const badExampleCode = `<form name="signup" id="signup" method="post" action="">
  <label>First Name
    <input type="text" />
  </label>

  <label>Last Name
    <input type="text" />
  </label>

  <label>Email Address
    <input type="email" />
  </label>

  <label>Phone Number
    <input type="tel" />
  </label>

  <input type="submit" value="Submit" />
</form>
`;
