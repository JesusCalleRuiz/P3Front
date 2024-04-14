import { FunctionComponent } from "preact";

type MenuProps = {
  selected: "Perfiles" | "Filtrar" | "Crear perfil" | "Iniciar sesion";
};
const Menu: FunctionComponent<MenuProps> = ({ selected }) => {
  return (
    <div class="menu">
      <a href="/" class={selected === "Perfiles" ? "selected" : ""}>
        Perfiles
      </a>
      <a href="/filtrar" class={selected === "Filtrar" ? "selected" : ""}>
        Filtrar
      </a>
      <a href="/crearperfil" class={selected === "Crear perfil" ? "selected" : ""}>
        Crear perfil
      </a>
      <a href="/iniciarsesion" class={selected === "Iniciar sesion" ? "selected" : ""}>
        Iniciar sesion
      </a>
    </div>
  );
};

export default Menu;
