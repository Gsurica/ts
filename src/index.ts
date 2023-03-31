// import { Jogo } from "./types/game";
import { atualizaJogo } from "./methods/atualizaJogo"
import { Jogo } from "./types"

/**
 * 
 * Partial<Jogo> = export interface NovoJogo {
 *                  id?: string,
 *                  nome?: string,
 *                  criador?: string
 *                }
 * 
 */

export const jogos: Partial<Jogo>[] = []

const criaJogo = (jogo: Jogo) => {

  const novoJogo: Jogo = {
    id: jogo.id,
    nome: jogo.nome,
    criador: jogo.criador,
  }

  jogos.push(novoJogo)

  return novoJogo;
}

criaJogo({
  id: '1',
  nome: 'Fifa',
  criador: 'EA'
})

criaJogo({
  id: '2',
  nome: 'Pes',
  criador: 'Konomi'
})

criaJogo({
  id: '3',
  nome: 'League of legends',
  criador: 'Riot'
})

atualizaJogo({ nome: 'God of war: Ragnarok', criador: 'Santa Monica'}, '2')
atualizaJogo({ nome: 'Uncharted' }, '3')

// const pizza = ['peperoni', 'mussarela']

// console.log(typeof !!pizza)
// console.log(!pizza.values)

console.log(jogos)