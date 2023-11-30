import React,{useState} from 'react'

export default function Search({setCity}) {
    const [searchInput,setSearchInput] = useState("")
  return (
    <form onSubmit={(e)=>{
        e.preventDefault()
        setCity(searchInput)
    }}>
        <input type='text' onChange={(e)=>{setSearchInput(e.target.value)}} placeholder='Search for City'/>
        <input type='submit'/>
    </form>
  )
}
