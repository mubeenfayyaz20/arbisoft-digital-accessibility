"use client";
import React, { useState } from "react";

export const AccessibleAgeInput = () => {
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const validateAge = (value: string) => {
    const numericAge = Number(value);
    if (!numericAge || numericAge < 18 || numericAge > 99) {
      setError("Age must be between 18 and 99.");
    } else {
      setError("");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAge(value);
    validateAge(value);
  };

  return (
    <>
      <form noValidate>
        <label htmlFor="accessible-age">Age</label>
        <input
          type="text" // Avoids VO issues with type="number"
          inputMode="numeric"
          pattern="[0-9]*"
          id="accessible-age"
          name="age"
          value={age}
          onChange={handleChange}
          aria-required="true"
          aria-describedby="ageHint ageError"
          aria-invalid={!!error}
          className="border px-2 py-1 block w-full mt-1"
          required
        />
        <span id="ageHint" className="text-sm text-gray-600">
          Enter an age between 18 and 99
        </span>
      </form>

      {/* Put aria-live outside the form */}
      {error && (
        <div
          id="ageError"
          className="text-red-600 text-sm mt-1"
          role="alert"
          aria-live="assertive"
        >
          {error}
        </div>
      )}
    </>
  );
};

export const InaccessibleAgeInput = () => {
  return (
    <form>
      <label htmlFor="inaccessible-age">Age</label>
      <input
        type="number"
        id="inaccessible-age"
        name="age"
        min="18"
        max="99"
        required
        className="border px-2 py-1 block w-full mt-1"
      />
      <button type="submit" className=" margin-top-20 back-link ">
        Submit
      </button>
    </form>
  );
};
