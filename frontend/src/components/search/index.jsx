import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import './style.css'
import axios from 'axios'
import SearchList from '../searchList'
const Search = () => {
    const [active , setActive] = useState(false)
    const [text,setText] = useState("")
    const [modalOpen,setModalOpen] = useState(false)
    const [result,setResult]=useState([])
    const toggleSearch = () => {
        if(active === false){
            setActive(true)
        }
        else{
            handleSearch()
        }
        
    }
    const handleChange = (e) =>{
        setText(e.target.value)
    }
    const handleSearch = async () => {
        try{
            const config = {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`,
                }
            };
            const data = {
                text: text,
            }
            const response = await axios.post('http://127.0.0.1:8000/books/search',data,config)
            console.log(response.data)
            setResult(response.data)
            setModalOpen(true)
        }
        catch(err){
            console.log(err)
        }
    }
    const handleCloseAddModal = () => setModalOpen(false)
  return (
    <div>
        <div className='flex center'>
            <AiOutlineSearch className='search-icon pointer' onClick={toggleSearch}/>
            <div>{active ? <input type="text" name="search" className='search-input-element' placeholder='Search..' onChange={handleChange} value={text}/> : ""}</div>
        </div>
        <SearchList isOpen={modalOpen} handleCloseAddModal={handleCloseAddModal} results={result}/>        
    </div>
  )
}

export default Search