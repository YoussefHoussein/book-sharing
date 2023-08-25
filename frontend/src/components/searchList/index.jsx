import React from 'react'
import Modal from 'react-modal'
import './style.css'
import SearchCard from '../searchCard'
const SearchList = ({isOpen,handleCloseAddModal,results}) => {
  return (
    <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseAddModal}
        className={"modal"}
    >
        {
            results.map((result)=>{
                <SearchCard name={result.name} author={result.author} picture={result.picture}/>
            })
        }
    </Modal>
  )
}

export default SearchList