import React from 'react'

const AccountTitle = (props: any) => {
  return (
    <tr>
        <th scope="row">{props.account.id}</th>
        <td>{props.account.title}</td>
        <td>{props.account.username}</td>
        <td>{props.account.password}</td>
        <td>
            <button type="submit" className="btn btn-danger">Delete</button>
            <button type="submit" className="btn btn-success ms-1">Show</button>
            <button type="submit" className="btn btn-success ms-1">Hide</button>
        </td>
    </tr>
  )
}

export default AccountTitle