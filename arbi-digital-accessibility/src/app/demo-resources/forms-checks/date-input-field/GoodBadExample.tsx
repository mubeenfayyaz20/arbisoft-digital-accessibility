"use client";

import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function GoodExample() {
  const errorRef = useRef<HTMLDivElement>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [birthDate, setBirthDate] = useState<Date | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const newErrors: string[] = [];


    if (!birthDate) {
      newErrors.push("Date of Birth is required.");
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
      errorRef.current?.focus();
    } else {
      setErrors([]);
      alert("Form submitted successfully!");
      form.reset();
      setBirthDate(null);
    }
  };

  return (
    <form id="signup" onSubmit={handleSubmit} noValidate>
      {errors.length > 0 && (
        <div
          ref={errorRef}
          role="alert"
          tabIndex={-1}
          className="mb-4 p-4 border border-red-600 bg-red-100"
        >
          <h3>There are errors in your form submission:</h3>
          <ol id="errorsList">
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ol>
        </div>
      )}
      
      <label htmlFor="birthdate">Date of Birth</label>
      <DatePicker
        id="birthdate"
        selected={birthDate}
        onChange={(date) => setBirthDate(date)}
        aria-required="true"
        aria-label="Date of Birth"
        placeholderText="Select your date of birth"
        className="border px-2 py-1"
      />
      <br />

      <input type="submit" value="Submit" className="back-link margin-top-20" />
    </form>
  );
}
