import React from 'react'
import { realizarSorteio } from './realizarSorteio'

describe('dado um sorteio de um amigo secreto', ()=>{
  test('cada participante não sorteie o próprio nome', ()=>{
    const participantes = [
      'Homer', 
      'Marge',
      'Bart',
      'Lisa',
      'Maggie'
    ]

    const sorteio = realizarSorteio(participantes)
    participantes.forEach(participante => {
      const amigoSeceto = sorteio.get(participante)
      expect(amigoSeceto).not.toEqual(participante)
    });
  })
})