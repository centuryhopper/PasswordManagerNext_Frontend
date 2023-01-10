import { FC, useRef, useState } from 'react'
import { AccountType, dialogType} from '../../interfaces/interfaces'
import {AccountTitle} from './account_tile'
import SearchBar from './search_bar'
import useSWR from 'swr'
import AddAccount from './addAccount'
import { Dialog } from './Dialog'
import {URL} from '../../constants/constants'


const TableView : FC = () =>
{
    const [searchTerm, setSearchTerm] = useState<string>('')

    const [lstOfAccounts, setLstOfAccounts] = useState<AccountType[]>([])
    const idProductRef = useRef<string>();

    const { data, error } = useSWR(URL, async (url : string) =>
    {
        const res = await fetch(url)

        const data = await res.json()

        setLstOfAccounts(JSON.parse(data))

        // for (const acc of lstOfAccounts)
        // {
        //     console.log(acc);
        // }

        return data
    })

    const handleDelete = async (id: string): Promise<void> =>
    {
        console.log('deleting account from database')

        // confirm deletion by asking the user again

        // TODO: delete request

        try {
        const index = lstOfAccounts.findIndex((p) => p.id === id);

        handleDialog("Are you sure you want to delete?", true, lstOfAccounts[index].title!)
        idProductRef.current = id;

        } catch (error : any) {
        console.log(error.message)
        }
    }

    const [dialog, setDialog] = useState<dialogType>({
        message: "",
        isLoading: false,
        //Update
        title: ""
    });

    const handleDialog = (message:string, isLoading:boolean, title:string) : void => {
        setDialog({
            message,
            isLoading,
            //Update
            title
        });
    };

    const areUSureDelete = async (choose: boolean, id: string) : Promise<void> => {
        if (choose)
        {
            setLstOfAccounts(lstOfAccounts.filter((p) => p.id !== id));

            try {
                const response = await fetch(`${URL}${id}`, {method: 'DELETE'})

                const result = await response.json()

                console.log(result);
            } catch (error : any) {
                console.log(error.message)
            }

            // close dialog
            handleDialog("", false, '');
        }
        else
        {
            // close dialog
            handleDialog("", false, '');
        }
      };

    const handleUpdate = async (): Promise<void> =>
    {
        // TODO put request
        console.log('updated account')

        const response = await fetch('')

        const result = await response.json()

        // grab the state of the lstOfAccounts on component mount (i.e. use useEffect(()=>{}, []))
        // if any fields have changed, then ask the user if he/she wants to confirm the update. If so, then update the list
        // and the database. Otherwise, revert the changes made from the current account selected
    }

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
                        <div className="col-12">
                            <div className="form-outline">
                                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                                <AddAccount lstOfAccounts={lstOfAccounts} setLstOfAccounts={setLstOfAccounts}/>

                            </div>
                        </div>

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
                                lstOfAccounts
                                .filter((account: AccountType) => searchTerm === '' || searchTerm.toLowerCase().includes(account.title!))
                                .map((account : AccountType) =>
                                    {
                                        return (<AccountTitle
                                            key={account.id}
                                            account={account}
                                            lstOfAccounts={lstOfAccounts}
                                            setLstOfAccounts={setLstOfAccounts}
                                            handleDelete={handleDelete}
                                            handleUpdate={handleUpdate}
                                        />)
                                    }
                                )
                            }
                        </tbody>
                        </table>
                        <Dialog
                            id={idProductRef.current!}
                            title={dialog.title}
                            onDialog={areUSureDelete}
                            message={dialog.message}
                            dialog={dialog}
                            handleDialog={handleDialog}
                        />
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default TableView

