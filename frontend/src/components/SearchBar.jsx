import React from "react";

function SearchBar({ onSearch }) {
    const ref = React.useRef(null); 
  return (
    <nav className="bg-gray-100 py-4  top-0 left-0 w-full h-16 z-10">
      <div className="flex items-center justify-center mt-4 ">
        <input
        ref={ref}
          type="text"
          placeholder="Buscar tarefas..."
          className="border border-gray-300 rounded-l px-4 py-2 w-64 focus:outline-none focus:ring focus:border-blue-300"
          onChange={(e) => {  onSearch(e.target.value) }}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 focus:outline-none focus:ring"
          onClick={() =>    { ref.current.value = ''; onSearch(''); }}
        >
          Limpar
        </button>
      </div>
    </nav>
  );
}

export default SearchBar;
