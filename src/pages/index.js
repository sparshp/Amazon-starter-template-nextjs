import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";


const btnKey='14154ef7d9a79744860cddeff634b1482e956eca572e1d8b807a3e2338fdd0dc/stage'

export default function Home({ products }) {
  
  return (
    <div className='alan-btn bg-gray-100'>
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      {/* ----header ---- */}
      <Header />
      <main className='max-w-screen-2xl mx-auto'>
        {/* ----Banner ---- */}
        <Banner/>
        {/* ----Product feed ---- */}
        <ProductFeed products={products} />
       
        
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch('https://fakestoreapi.com/products').then((res) => res.json());
    
  return {
    props: {
    products,
  }}
}
