import Head from 'next/head'
import A from './A.js'
const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={'zet, light' + keywords}/>
                <title>Hydrostatic</title>
            </Head>
            <div className='navbar'>
                <A href={'/'} title={'Chief'}/>
                <A href={'/users'} title={'Users'}/>
            </div>
            <div>
                {children}
            </div>
        </>
    )
}

export default MainContainer