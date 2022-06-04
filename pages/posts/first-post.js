import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/layout";


export default function FirstPost() {
    return (
        <>
            <Head>
                <title>First Post</title>
            </Head>
            <Layout>
                <h1>First Post</h1>
                <h2>
                    <Link href="/">
                        <a>Back to home</a>
                    </Link>
                </h2>
                <YourComponent/>
            </Layout>
        </>
    );
}

const YourComponent = () => (
    <Image
        src="/images/profile.jpeg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
    />
);