import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { HeaderStyle } from "./header";

export const Header = ({ setSearch }) => {
  const [searchInput, setSearchInput] = useState("");

  const submit = (event) => {
    event.preventDefault();
    setSearch(searchInput);
    setSearchInput("");
  };

  return (
    <HeaderStyle>
      <img src={Logo} alt="Logo" />
      <form onSubmit={submit}>
        <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} type="text" placeholder="Digitar Pesquisa" />
        <button type="submit" placeholder="Digitar Pesquisa">
          Pesquisar
        </button>
      </form>
    </HeaderStyle>
  );
};
