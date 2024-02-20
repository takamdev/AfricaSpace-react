import React from 'react'
import { create } from 'zustand'

 export const useStore = create((set) => ({
  CARD: [],
  updateProduit: (produit) => set((state) => ({ CARD:[...state.CARD , {...produit , qte:1}] })),
  updateCart:(produit)=>set(()=>({CARD:produit}))

}))