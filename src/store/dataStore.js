import { create } from 'zustand'

// const useCountStore = create((set) => ({
//   count: 0,
//   inc: () => set((state) => ({ count: state.count + 1 })),
// }))

export const useDataStore=create((set)=>({
    data:"",
    setData:(newData)=>set({data:newData})
}))