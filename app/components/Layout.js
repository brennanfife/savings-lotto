import Head from 'next/head'

const Layout = (props) => (
    <div>
        <Head>
            <title>The Savings Lotto</title>
        </Head>
        <div>
            {props.children}
        </div>
    </div>
)

export default Layout