import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export const SearchNavAdmin = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      // Navegar a la URL con la búsqueda realizada
      window.location.href = `/${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <Form className="d-flex" onSubmit={handleSearch}>
      <Form.Control
        type="search"
        placeholder="Buscar"
        className="me-2"
        aria-label="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button variant="outline-success" type="submit">
        Buscar
      </Button>
    </Form>
  );
};
