import React, { useState } from 'react'

const SearchBar = (props:any) =>
{

  return (
    <input type="text" className="form-control" placeholder="Filter by title" onChange={e => {
        console.log(props.searchTerm)
        props.setSearchTerm(e.target.value)
    }}/>
  )
}

export default SearchBar