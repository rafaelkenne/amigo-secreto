import { atom } from "recoil";

const listaParticipantesState = atom<string[]>({
  key: 'listaParticipantesState',
  default: []
})

export const resultadoAmigoSecreto = atom<Map<string, string>>({
  key: 'resultadoAmigoSecreto',
  default: new Map()
})

export default listaParticipantesState;

export const erroState = atom<string>({
  key: 'erroState',
  default: ''
})