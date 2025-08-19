"use client";

import React, { useState, useRef } from "react";

// Modal Example
export const ModalExample: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openBtnRef = useRef<HTMLButtonElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const openModal = () => {
    setIsOpen(true);
    setTimeout(() => closeBtnRef.current?.focus(), 0);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => openBtnRef.current?.focus(), 0);
  };

  return (
    <>
      <button ref={openBtnRef} onClick={openModal}>
        Open Modal
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          style={{
            padding: "20px",
            background: "#eee",
            marginTop: "10px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          <h2 id="modal-title">Example Modal</h2>
          <p>Modal Content</p>
          <button ref={closeBtnRef} onClick={closeModal}>
            Close
          </button>
        </div>
      )}
    </>
  );
};
export const MouseOnlyDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ border: "1px solid #ccc", padding: "8px" }}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: "pointer", padding: "4px" }}
      >
        ⚙ Options
      </div>
      {isOpen && (
        <div style={{ marginTop: "4px" }}>
          <p>Profile</p>
          <p>Settings</p>
          <p>Logout</p>
        </div>
      )}
    </div>
  );
};


// Dropdown Example
export const DropdownExample: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        Options
      </button>
      {isOpen && (
        <ul
          role="listbox"
          style={{
            border: "1px solid #ccc",
            marginTop: "4px",
            padding: "4px",
            listStyle: "none",
          }}
        >
          <li tabIndex={0}>Profile</li>
          <li tabIndex={0}>Settings</li>
          <li tabIndex={0}>Logout</li>
        </ul>
      )}
    </div>
  );
};

// Form Example with Error Focus
export const FormExample: React.FC = () => {
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputRef.current?.value) {
      setError("Name is required");
      inputRef.current?.focus();
    } else {
      setError("");
      alert(`Submitted: ${inputRef.current.value}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <label>
        Name: <input ref={inputRef} type="text" aria-describedby="err" />
      </label>
      {error && (
        <p id="err" style={{ color: "red" }}>
          {error}
        </p>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};


export const BadErrorHandling: React.FC = () => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "8px" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const error = e.currentTarget.querySelector<HTMLSpanElement>(
            "#bad-error"
          );
          if (error) {
            error.style.display = "inline"; // ❌ just show the error
          }
          // ❌ focus is NOT moved to input (Accessibility failure)
        }}
      >
        <label>
          Name: <input id="bad-input" />
        </label>
        <br />
        <span id="bad-error" style={{ color: "red", display: "none" }}>
          Name is required
        </span>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

