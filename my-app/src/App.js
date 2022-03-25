import './App.css';
import {useEffect,useState} from 'react'
import {Users} from './users'
import {Table} from './table'
import axios from 'axios'

// ---- simple search feature
// function App() {
//   const [query,setQuery] = useState("");
//   //console.log(Users.filter(user=>user.first_name.toLowerCase().includes(query)));
//   return (
//     <div className="app">
//       <input type="text" className="search" placeholder="search...." onChange={(e)=>setQuery(e.target.value)} />
//       <ul className="list">
//         {Users.filter((user)=>
//         user.first_name.toLowerCase().includes(query))
//         .map((user)=>(
//           <li key={user.id} className="listItem">{user.first_name}</li>
//         ))}
        
//       </ul> 
//     </div>
//   );
// }


// using data table to search 
// function App(){
//   const [query,setQuery] = useState("");
//   const keys = ["first_name","last_name","email"];

//   //console.log(Users[2]["last_name"])
//   const Search = (data)=> {
//     return data.filter((item)=>
//     keys.some((key) => item[key].toLowerCase().includes(query))
//     )
//   }
//       return (
//         <div className="app">
//             <input type="text" placeholder='search by name' className='search'
//            onChange={(e)=>setQuery(e.target.value)}/>
//           {<Table data={Search(Users)}/>}
//         </div>
//       )
// }


////////////////////// API SEARCH

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:5000?q=${query}`);
      setData(res.data);
    };
    if (query.length === 0 || query.length > 2) fetchData();
  }, [query]);
    return (
    <div className="app">
        <input
          className="search"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
      {<Table data={data} />}
    </div>
  );
}



export default App;
