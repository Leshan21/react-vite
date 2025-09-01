import { useEffect, useState } from "react"

const Search = () => {
    const [query, setQuery] = useState("pizza");

    useEffect(()=>{
        function demo(){
            console.log("demo function execute...!")
        }
        demo()
    },[query]) //syntax of the useEffect hook
  return (
    <div>
        <input value={query} onChange={e => setQuery(e.target.value)} type="text" />
    </div>
  )
}

export default Search