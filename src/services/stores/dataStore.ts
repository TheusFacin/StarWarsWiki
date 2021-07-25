import create from 'zustand'
import { ItemData } from '../../@types/ItemDataType'

type DataState = {
  selectedData: ItemData
  setSelectedData: (selectedData: ItemData) => void
}

const useDataStore = create<DataState>(set => ({
  selectedData: {} as ItemData,
  setSelectedData: selectedData => set({ selectedData }),
}))

export { useDataStore }
