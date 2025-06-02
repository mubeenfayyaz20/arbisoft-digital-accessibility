"use client";

import React, { useState } from "react";
import styles from "../styles/components/Formfields.module.scss";

interface SearchInputProps {
  onSearch: (query: string) => void;
  label?: string;
}

const SearchInput = ({ onSearch, label }: SearchInputProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query.trim());
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      {label && (
        <label htmlFor="searchInput" className={styles.inputLabel}>
          {label}
        </label>
      )}
      <div className={styles.inputWrapper}>
        <input
          id="searchInput"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.searchField}
          placeholder=""
        />
        <button
          className={styles.searchButton}
          aria-label="Search"
        >
              <span className="material-symbols-outlined icon-color" aria-hidden="true">search</span>
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
