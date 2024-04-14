import { useState, useEffect } from "preact/hooks";
import { FunctionalComponent } from "preact";
import axios from "npm:axios";
import { Lover } from "../types.ts";

const Filtrar: FunctionalComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [lovers, setLovers] = useState<Lover[]>([]);
  const [filteredLovers, setFilteredLovers] = useState<Lover[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchLovers = async () => {
      try {
        const response = await axios.get<Lover[]>("https://lovers.deno.dev");
        setLovers(response.data);
      } catch (error) {
        setError("Error al cargar los datos");
      }
    };

    fetchLovers();
  }, []); 

  const onSearch = () => {
    const filtered = lovers.filter(lover =>
      lover.name.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
    setFilteredLovers(filtered);
  };

  return (
    <div class="search-container">
      <h1>Buscar perfiles</h1>
      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={searchQuery}
        onInput={(e) => setSearchQuery(e.currentTarget.value)}
        class="search-input"
      />
      <button onClick={onSearch} class="search-button">
        Buscar
      </button>
      {error && <div>Error: {error}</div>}
      <div>
        {filteredLovers.map((lover, index) => (
          <div key={index}>
            <h2>{lover.name}</h2>
            <p>Edad: {lover.age}</p>
            <p>Sexo: {lover.sex}</p>
            <p>Descripción: {lover.description}</p>
            <img src={lover.photo} alt={lover.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filtrar;
