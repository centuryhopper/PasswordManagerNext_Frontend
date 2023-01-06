import { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";

export type Account = {
  id: string,
  title: string,
  user_name: string,
  password: string,
  inserteddatetime: string,
  lastmodifieddatetime: string
}

export const getStaticProps : GetStaticProps = async (context) => {

    const res = await fetch("http://127.0.0.1:5048/api/Account/")

    const data = await res.json()

    return {
        props: {
          // dummyData: [
          //   {id:1, name: 'dummy1'},
          //   {id:2, name: 'dummy2'},

          // ]
          data
        }
    }
}


const DummyAccount : NextPage = (props: InferGetStaticPropsType<typeof getStaticProps>)  =>
{
    return (
      <>
        <p>this is my dummy_account page</p>
        {
          props.data.map((e: Account) => {
            return (<ul key={e.id}>
              <li>{e.title}</li>
              <li>{e.user_name}</li>
              <li>{e.password}</li>
              <li>{e.inserteddatetime}</li>
              <li>{e.lastmodifieddatetime}</li>
            </ul>)
          })
        }
      </>
    )
}

export default DummyAccount
