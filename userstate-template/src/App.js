import { Garagem } from "./Componentes/Garagem";
import { GlobalStyled } from "./GlobalStyled";
import { useState } from "react";

export default function App() {
  // Criando um estado chamado nome
  const [nome, setNome] = useState("Fernanda");

  // Criando um estado automóvel para guardar infos do carro
  const [automovel, setAutomovel] = useState({
    modelo: "Corsa",
    cor: "Branco",
    ano: 2020,
    flex: true,
    adicionadoPor: "Labenu",
  });

  const carro1 = {
    modelo: "Fusca",
    cor: "Azul",
    ano: 1980,
    flex: false,
    adicionadoPor: "Fernanda",
  };

  const carro2 = {
    modelo: "Civic",
    cor: "Verde",
    ano: 2008,
    flex: true,
    adicionadoPor: "Maia",
  };

  const carro3 = {
    modelo: "CRV",
    cor: "Prata",
    ano: 2023,
    flex: true,
    adicionadoPor: "Clara",
  };

  // const [index, setIndex] = useState(0)

  return (
    <div className="App">
      <GlobalStyled />

      <Garagem
        nome={nome}
        automovel={automovel}
        setNome={setNome}
        setAutomovel={setAutomovel}
        carro1={carro1}
        carro2={carro2}
        carro3={carro3}
      />
    </div>
  );
}
