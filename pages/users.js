import MainContainer from '../components/MainContainer.js'
import Link from 'next/link'
const Users = ({users}) => {
    return (
        <MainContainer keywords={'users'}>
            <h1>Users page</h1>
            <ul>
                {users.map(user => <li key={user.id}><Link href={`/users/${user.id}`}>{user.id}. {user.name}</Link></li>)}
            </ul>
        </MainContainer>
    )
}

export default Users

export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    return {props: {users}}
}