import React, { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function SearchForm({handleSearchTerm}) {
  const [input, setInput] = useState("");

  return (
    <>
      <input
        type="text"
        className="form-control my-2 w-25"
        placeholder="Search for some joke!"
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="button" className="btn btn-outline-primary"
        value="Buscar"
        variant="outline-primary"
        onClick={()=>handleSearchTerm(input)}
      >
        Buscar
      </button>
    </>
  );
}
