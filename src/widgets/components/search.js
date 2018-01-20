import React from 'react'
import './search.css';
// function Search(props) {
//     return(
//         <form action="" className="Search">
//             <input  type="text" 
//                 name="" 
//                 id=""
//                 className="Search-input"
//              />
//          </form>
//     )
// }

const Search = () => ( //parentecis para implicar el return
    <form action="" className="Search">
        <input  type="text" 
                name="" 
                id=""
                className="Search-input"
        />
    </form>
)
//diferente manera de exporta una funcion sin tener que colocar el return ya que viene implicito
export default Search;