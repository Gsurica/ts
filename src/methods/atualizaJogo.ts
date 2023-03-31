import { Jogo } from "../types"
import { jogos } from ".."

// Omit 
// Partial
// Pick
// |

/**
 * ! - da certeza que o dado irá vir.
 * 
 * ? - verifica se o dado existe.
 */

export const atualizaJogo = (jogo: Partial<Jogo>, id: string): Partial<Jogo> => {
  
  if (!!jogos) {

    const jogoIndex = jogos.findIndex(jogo => jogo.id === id) // = 3
    const novoJogo: Partial<Jogo> = {
      id: jogos[jogoIndex].id,
      nome: jogo.nome,
      criador: jogo.criador !== undefined ? jogo.criador : jogos[jogoIndex].criador
    }
                // 3 // 1 // substitui por esse
    jogos.splice(jogoIndex, 1, novoJogo)

    return novoJogo

  }
  
  return {} as Jogo
}