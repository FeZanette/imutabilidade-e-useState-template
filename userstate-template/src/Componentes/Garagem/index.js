import { Carro } from "../Carro";
import { Botao, Estacionamento, GaragemContainer } from "./styles";

export function Garagem({ nome, automovel, setNome, setAutomovel, carro1, carro2, carro3, index, setIndex }) {

  const alterarNome = () => {
    setNome("Maia")
  }

  const passarObjeto = () => {
    setAutomovel(carro1)
  }

  return (
    <GaragemContainer>
      <h1>Garagem da {nome}</h1>
      <Botao onClick={alterarNome}>Muda nome</Botao>
      <Botao onClick={passarObjeto}>Muda carro</Botao>

      <Estacionamento>
        <Carro
          modelo={automovel.modelo}
          cor={automovel.cor}
          ano={automovel.ano}
          adicionadoPor={automovel.adicionadoPor}
          flex={automovel.flex}
        />
      </Estacionamento>
    </GaragemContainer>
  );
}
