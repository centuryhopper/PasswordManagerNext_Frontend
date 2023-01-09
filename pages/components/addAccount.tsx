import React, { FC, SetStateAction } from 'react'

// interface Props {
//   searchTerm: string;
//   setSearchTerm: (value: SetStateAction<string>) => void;
// }

const AddAccount : FC<any> = ({}) : JSX.Element =>
{
    const handleAdd = (event : React.MouseEvent<HTMLButtonElement>) : void =>
    {
        event.preventDefault()

        console.log('added account to database');

        // TODO: make post request and update overall list of accounts in the table
    }

  return (
    <>
        {/* <input type="text" className="form-control" placeholder="Add an account" onChange={e => { */}
            {/* // console.log(searchTerm)
            // setSearchTerm(e.target.value)
        }}/> */}

        <div className="input-group">
            {/* <span className="input-group-text">First and last name</span> */}
            <input type="text" aria-label="title" className="form-control" placeholder="Enter a title..."/>
            <input type="text" aria-label="username" className="form-control" placeholder="Enter a username..."/>
            <input type="text" aria-label="password" className="form-control" placeholder="Enter a password..."/>
        </div>

        <button
            type="submit"
            className="btn btn-primary ms-1"
            onClick={handleAdd}
        >
            Add account
        </button>

    </>

  )
}

export default AddAccount