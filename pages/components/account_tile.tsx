import React, { FC, useState } from 'react'
import { AccountType } from '../../interfaces/interfaces';

export const AccountTitle : FC<AccountType> = ({id, title, user_name, password}) =>
{

  const [visible, setVisible] = useState<boolean>(false);

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
            className="btn btn-success ms-1"
            onClick={() => setVisible(!visible)}
            >Toggle</button>
        </td>
    </tr>
  )
}
