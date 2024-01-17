import  { useRef } from 'react'
import { useDataStore } from './store/dataStore'

const App = () => {
  const dataref = useRef()
  const [data,setData] = useDataStore((state)=>[state.data,state.setData])
  const handleSubmit=(e)=>{
    e.preventDefault()
    setData(dataref.current.value)
    dataref.current.value=""
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" ref={dataref} />
        <button>Submit</button>
    </form>
    <h1 style={{color:"white"}}>{data}</h1>
    </>
  )
}

export default App




// import {create} from 'zustand';

// const useDataStore = create((set) => ({
//   data: '',
//   setData: (newData) => set({ data: newData }),
// }));

// // Example component using the data store
// const DataComponent = () => {
//   const { data, setData } = useDataStore();

//   const handleDataChange = (event) => {
//     const newData = event.target.value;
//     setData(newData);
//   };

//   return (
//     <div>
//       <input type="text" value={data} onChange={handleDataChange} />
//       <p>Entered Data: {data}</p>
//     </div>
//   );
// };

// export default DataComponent;
