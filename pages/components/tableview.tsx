import { FC, useState } from 'react'
import { AccountType } from '../../interfaces/interfaces'
import {AccountTitle} from './account_tile'
import SearchBar from './search_bar'
import useSWR from 'swr'
import AddAccount from './addAccount'


// const getData = async () => {
//     const res = await fetch("http://127.0.0.1:5048/api/Account/")

//     const data = await res.json()

//     return null
// }


const dataFetcher = async (url : string) =>
{
    const res = await fetch(url)

    const data = await res.json()

    return data
}


const TableView : FC = () =>
{
    let dummyAccounts : AccountType[] = [
        {
          id: '1',
          title: 'a',
          user_name: 'user',
          password: 'pass'
        },
        {
          id: '2',
          title: 'b',
          user_name: 'user2',
          password: 'pass2'
        },
    ]

    const [searchTerm, setSearchTerm] = useState<string>('')

    // const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
    const { data, error } = useSWR('http://127.0.0.1:5048/api/Account/', dataFetcher)


    if (error)
    {
        console.log(error)
        return <div>Failed to load</div>
    }
    if (!data)
    {
        return <div>Loading...</div>
    }

    // console.log(data)
    // console.log('hello')
    // console.log(error)

    return (
        <section className="vh-100" style={{backgroundColor: "#eee"}}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-lg-9 col-xl-7">
                    <div className="card rounded-3">
                    <div className="card-body p-4">
                        <h4 className="text-center my-3 pb-3">Password database query</h4>
                        <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                        <div className="col-12">
                            <div className="form-outline">
                                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                                <AddAccount/>

                            {/* <label className="form-label" for="form1">Enter a task here</label> */}
                            </div>
                        </div>
                        </form>

                        {/* {JSON.stringify(data)} */}

                        <table className="table mb-4">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Title</th>
                                <th scope="col">Username</th>
                                <th scope="col">Password</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data
                                .filter((account: AccountType) => searchTerm === '' || searchTerm.toLowerCase().includes(account.title!))
                                .map((account : AccountType) =>
                                    {
                                        return (<AccountTitle
                                            key={account.id}
                                            id={account.id}
                                            title={account.title}
                                            user_name={account.user_name}
                                            password={account.password}
                                        />)
                                    }
                                )
                            }
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default TableView
