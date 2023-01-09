import React, { FC, useState } from 'react'
import { AccountType } from '../../interfaces/interfaces';

export const AccountTitle : FC<AccountType> = ({id, title, user_name, password}) =>
{
  const [visible, setVisible] = useState<boolean>(false);

  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>): void =>
  {
    console.log('deleted account')

    // confirm deletion by asking the user again

    // TODO: delete request
  }

  const handleUpdate = (event: React.MouseEvent<HTMLButtonElement>): void =>
  {
    // TODO put request
    console.log('updated account')
  }

  return (
    <tr>
        <th scope="row">{id}</th>
        <td>{title}</td>
        <td>{user_name}</td>
        <td className='text-wrap' style={{wordBreak: 'break-all'}}>
          <input
            value={password}
            type={visible ? "text" : "password"}
            // className={styles.input_area}
            readOnly
          />
        </td>
        <td>
            <button
            type="submit"
            className="btn btn-primary ms-1"
            onClick={() => setVisible(!visible)}
            >
              Toggle
            </button>
            &nbsp;
            <button
            type="submit"
            className="btn btn-danger ms-1"
            onClick={handleDelete}
            >
              Delete
            </button>
            &nbsp;
            <button
            type="submit"
            className="btn btn-success"
            onClick={handleUpdate}
            >
              Update
            </button>
        </td>
    </tr>
  )
}
