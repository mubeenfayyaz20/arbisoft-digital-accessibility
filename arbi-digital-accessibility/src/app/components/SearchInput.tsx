"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { searchIndex } from "../data/searchIndex";
import { SearchSharp } from "@mui/icons-material";
import styles from "../styles/components/Formfields.module.scss";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState<{ title: string; href: string }[]>(
    []
  );
  const [submitted, setSubmitted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const wrapperRef = useRef<HTMLFormElement>(null);
  const resultsRef = useRef<HTMLUListElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Live filtering
  useEffect(() => {
    if (query.trim() === "") {
      setFiltered([]);
      setSubmitted(false);
      setActiveIndex(-1);
      return;
    }

    const results = searchIndex.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(results);
    setSubmitted(true);
    setActiveIndex(-1);
  }, [query]);

  // Handle global keyboard events
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!submitted || filtered.length === 0) return;

      switch (e.key) {
        case "Escape":
          e.preventDefault();
          setSubmitted(false);
          setActiveIndex(-1);
          inputRef.current?.focus();
          break;

        case "ArrowDown":
          e.preventDefault();
          setActiveIndex((prev) => (prev < filtered.length - 1 ? prev + 1 : 0));
          break;

        case "ArrowUp":
          e.preventDefault();
          setActiveIndex((prev) => (prev > 0 ? prev - 1 : filtered.length - 1));
          break;

        case "Enter":
          if (activeIndex >= 0) {
            window.location.href = filtered[activeIndex].href;
          }
          break;

        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [filtered, submitted, activeIndex]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setSubmitted(false);
        setActiveIndex(-1);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResultClick = () => {
    setQuery("");
    setSubmitted(false);
    setActiveIndex(-1);
    inputRef.current?.focus();
  };

  return (
    <form
      ref={wrapperRef}
      onSubmit={handleSubmit}
      aria-label="Search for Anything"
      className="relative w-full  flex"
    >
      <label htmlFor="search-input" className={styles.inputLabel}>
        <SearchSharp
          className="icon-color"
          aria-hidden="true"
          fontSize="large"
        />
        <span aria-hidden>Search</span>
      </label>

      <div className={styles.inputWrapper}>
        <input
          id="search-input"
          type="text"
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.searchField}
          aria-controls="search-results"
          aria-expanded={submitted && filtered.length > 0}
          aria-haspopup="menu"
          role="combobox"
          autoComplete="off"
        />
      </div>

      {submitted && filtered.length > 0 && (
        <ul
          id="search-results"
          role="menu"
          ref={resultsRef}
          aria-label="Search results"
          className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded shadow z-10"
        >
          {filtered.map((item, index) => (
            <li key={item.href} role="none">
              <Link
                href={item.href}
                role="menuitem"
                onClick={handleResultClick}
                className={`block px-4 py-2 focus:outline-none ${
                  index === activeIndex ? "bg-gray-200" : "hover:bg-gray-100"
                }`}
                tabIndex={0} // all items are tabbable in natural order
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {submitted && query && filtered.length === 0 && (
        <ul
          id="search-results"
          role="menu"
          aria-label="Search results"
          className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded shadow z-10"
        >
          <li className="p-2 text-gray-500" role="none">
            No results found
          </li>
        </ul>
      )}
    </form>
  );
}
