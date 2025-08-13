"use client";
import { useRef, useState } from "react";

export default function GoodExample() {
  const errorRef = useRef<HTMLDivElement>(null);
  const [errors, setErrors] = useState<string[]>([]);

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const form = e.currentTarget as HTMLFormElement;
  const formData = new FormData(form);
  const newErrors: string[] = [];

  const fields = [
    { id: "first", label: "First Name" },
    { id: "last", label: "Last Name" },
    { id: "email", label: "Email Address" },
    { id: "phone", label: "Phone Number" },
  ];

  fields.forEach(({ id, label }) => {
    const input = form.elements.namedItem(id) as HTMLInputElement;
    if (!formData.get(id)?.toString().trim()) {
      newErrors.push(`${label} is empty.`);
      input.setAttribute("aria-invalid", "true");
    } else {
      input.removeAttribute("aria-invalid");
    }
  });

  if (newErrors.length > 0) {
    setErrors(newErrors);
    errorRef.current?.focus();
  } else {
    setErrors([]); // Clear any previous errors
    alert("Form submitted successfully!");
    form.reset();
  }
};


  return (
    <form id="signup" onSubmit={handleSubmit} noValidate>
      {errors.length > 0 && (
        <div
          ref={errorRef}
          role="alert"
          tabIndex={-1}
          style={{
            border: "1px solid red",
            padding: "1rem",
            marginBottom: "1rem",
            backgroundColor: "#ffe6e6",
          }}
        >
          <h3>There are errors in your form submission listed below:</h3>
          <ol id="errorsList">
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ol>
        </div>
      )}

      <label htmlFor="first">First Name</label>
      <input id="first" name="first" type="text" aria-required="true" /> <br />

      <label htmlFor="last">Last Name</label>
      <input id="last" name="last" type="text" aria-required="true" /> <br />

      <label htmlFor="email">Email Address</label>
      <input id="email" name="email" type="email" aria-required="true" /> <br />

      <label htmlFor="phone">Phone Number</label>
      <input id="phone" name="phone" type="tel" aria-required="true" /> <br />

      <input
        type="submit"
        className="back-link margin-top-20"
        value="Submit"
      />
    </form>
  );
}


export const goodExampleCode = `
<form name="signup" id="signup" method="post" action="">
  <div role="alert">
    <h3 tabIndex={-1}>There are errors in your form submission listed below:</h3>
    <ol id="errorsList">
      <li>First Name is empty.</li>
      <li>Last Name is empty.</li>
      <li>Email Address is empty.</li>
      <li>Phone Number is empty.</li>
    </ol>
  </div>

  <label htmlFor="first">First Name</label>
  <input id="first" name="first" type="text" aria-required="true" aria-invalid="true" />

  <label htmlFor="last">Last Name</label>
  <input id="last" name="last" type="text" aria-required="true" aria-invalid="true" />

  <label htmlFor="email">Email Address</label>
  <input id="email" name="email" type="email" aria-required="true" aria-invalid="true" />

  <label htmlFor="phone">Phone Number</label>
  <input id="phone" name="phone" type="tel" aria-required="true" aria-invalid="true" />

  <input type="submit" value="Submit" />
</form>

`;
