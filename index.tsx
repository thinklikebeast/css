import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import mypic from './images/banner.jpg'
import pic from './images/image.jpg'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-[20vh] w-screen overflow-hidden flex justify-center items-center">
        <img
         className="w-full object-cover"
         src={mypic.src}
         alt="Picture of the banner"
        />
      </div>
      <div className="w-screen px-4">
        <div className="w-full flex justify-center text-white">
         <img
            className="w-40 h-40 object-cover rounded-full border-2 border-[#202225] mt-[-4rem]"
            src={pic.src}
            alt="profile image"
          />
        </div>
      </div>
      <div className="w-full flex justify-center text-white">
        <div className="text-5xl font-bold mb-4">Dagim painting</div>
      </div>
      <div className="w-full flex justify-center text-white">
        Negadras:{''}
        <span className="text-[#2081e2]">Dagim</span>
      </div>
      <div className="w-full flex justify-center text-white">
        <div className="w-[44vw] flex justify-between py-4 border border-[#151b22] rounded-xl mb-4">
          <div className="w-1/4">
            <div className="text-3xl font-bold w-full flex items-center justify-center">129</div>
            <div className="text-lg w-full text-center mt-1">Item</div>
          </div>
          <div className="w-1/4">
            <div className="text-3xl font-bold w-full flex items-center justify-center">5</div>
            <div className="text-lg w-full text-center mt-1">Rating</div>
          </div>
          <div className="w-1/4">
            <div className="text-3xl font-bold w-full flex items-center justify-center">painting</div>
            <div className="text-lg w-full text-center mt-1">shop type</div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center text-white">
        <div className="text-[#8a939b] text-xl w-max-1/4 flex-wrap mt-4">this shop contain d/t natural painting of anime .thank you</div>
      </div>
    </div>
  )
}

export default Home
