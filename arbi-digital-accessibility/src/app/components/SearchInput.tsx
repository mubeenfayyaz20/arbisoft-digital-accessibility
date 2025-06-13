// "use client";

// import React, { useState } from "react";
// import styles from "../styles/components/Formfields.module.scss";

// interface SearchInputProps {
//   onSearch: (query: string) => void;
//   label?: string;
// }

// const SearchInput = ({ onSearch, label }: SearchInputProps) => {
//   const [query, setQuery] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onSearch(query.trim());
//   };

//   return (
//     <form onSubmit={handleSubmit} className={styles.searchForm}>
//       {label && (
//         <label htmlFor="searchInput" className={styles.inputLabel}>
//           {label}
//         </label>
//       )}
//       <div className={styles.inputWrapper}>
//         <input
//           id="searchInput"
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           className={styles.searchField}
//           placeholder=""
//         />
//         <button
//           className={styles.searchButton}
//           aria-label="Search"
//         >
//               <span className="material-symbols-outlined icon-color" aria-hidden="true">search</span>
//         </button>
//       </div>
//     </form>
//   );
// };

// export default SearchInput;
// components/SearchBar.tsx

// components/SearchBar.tsx
// components/SearchBar.tsx
"use client";
import styles from "../styles/components/Formfields.module.scss";
import { useState, useRef, useEffect } from "react";
import { searchIndex } from "../data/searchIndex";
import Link from "next/link";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(searchIndex);
  const [submitted, setSubmitted] = useState(false);

  const handleSearch = () => {
    const results = searchIndex.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(results);
    setSubmitted(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch();
  };

  const handleResultClick = () => {
    setQuery(""); // clear the search input
    setSubmitted(false); // hide the dropdown
  };

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Search for Anything"
      className="relative w-full max-w-md flex"
    >
      <label htmlFor="search-input" className={styles.inputLabel}>
      <span aria-hidden> Search</span>
      </label>

      <div className={styles.inputWrapper}>
        <input
          id="search-input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.searchField}
          aria-controls="search-results"
          aria-expanded={submitted && query.length > 0}
          aria-haspopup="listbox"
          role="combobox"
        />
        <button
          className={styles.searchButton}
          aria-label="Search"
          type="submit"
        >
          <span
            className="material-symbols-outlined icon-color"
            aria-hidden="true"
          >
            search
          </span>
        </button>
      </div>
      {submitted && query && (
        <ul
          id="search-results"
          role="listbox"
          className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded shadow z-10"
        >
          {filtered.length === 0 ? (
            <li
              className="p-2 text-gray-500"
              role="option"
              aria-disabled="true"
            >
              No results found
            </li>
          ) : (
            filtered.map((item) => (
              <li key={item.href} role="option">
                <Link
                  href={item.href}
                  onClick={handleResultClick}
                  className="block px-4 py-2 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none"
                >
                  {item.title}
                </Link>
              </li>
            ))
          )}
        </ul>
      )}
    </form>
  );
}
