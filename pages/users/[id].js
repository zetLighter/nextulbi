import styles from '../../styles/user.module.scss'
import MainContainer from '../../components/MainContainer.js'

export default function User({user}) {
    return (
        <MainContainer keywords={user.name}>
            <div className={styles.user}>
                <h1>
                    {user.id}. {user.name}
                </h1>
            </div>
        </MainContainer>
    )
}

export async function getServerSideProps(context) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`)
    const user = await response.json()
    return {props: {user}}
}