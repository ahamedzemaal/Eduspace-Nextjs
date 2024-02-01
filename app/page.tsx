import Image from "next/image";
import HeadImage from '../Assets/web3Developer.png'
import Pic from '../Assets/pic.png'
import Study1 from '../Assets/Study1.jpg'
import Study2 from '../Assets/Study2.png'

export default function Home() {
  return (
    <>
    {/* Header */}
    <div className="bg-gray-100 p-5 my-5 shadow">
        <div className="container mx-auto py-12 px-8">
            <div className="flex">
                <div className="w-1/2 p-4">
                    <h2 className="text-6xl font-bold mb-2">Start learning skill From your favorite mentor.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum vel officiis iure rem rerum eius!</p>
                    <button className="bg-green-500 px-3 py-2 rounded my-4 hover:bg-white border border-green-500">Explore More</button>
                </div>
                <div className="w-1/2 "><Image className=" w-3/5 h-8/12 object-fit mx-auto" src={HeadImage} alt=""/>
                </div>
            </div>
        </div>
    </div>

    {/* Benefits */}
    <div className="bg-white shadow-xl p-8 my-8 mx-24">
        <div className="container ">
            <div className="flex">
                <div className="w-1/2 my-auto">
                    <Image className="w-4/6 h-8/12 mx-auto rounded-2xl shadow-2xl" src={Study1} alt=""/>
                </div>
                <div className="w-1/2 px-3">
                  <h2 className="text-3xl font-semibold">Benifits from Our Eduspace.</h2>
                  <ol className="px-3">
                    <li className="my-3">
                        <h3 className="text-xl flex font-bold">Paptpaper</h3>
                        <p className="text-gray-600 w-2/3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, autem.</p>
                    </li>
                    <li className="my-3">
                            <h3 className="text-xl flex font-bold">Elobrations</h3>
                            <p className="text-gray-600 w-2/3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, autem.</p>
                    </li>
                    <li className="my-3">
                          <h3 className="text-xl flex font-bold">Online Tutorials</h3>
                          <p className="text-gray-600 w-2/3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, autem.</p>
                    </li>
                    </ol>
                </div>
            </div>
        </div>
    </div>

    {/* Latest */}
    <section className="bg-gray-100 p-5 shadow">
        <div className=" mb-4">
            <h2 className="text-3xl font-bold text-center">Latest Past Papers</h2>
            <p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, perferendis.</p>
        </div>
        <div className="flex flex-wrap px-5 justify-center">
            <div className="w-1/3 p-5">
                <div className="w-8/12 h-full bg-gray-200 rounded-xl shadow cursor-pointer hover:bg-green-500">
                    <Image className="rounded-t-xl" src={Study1} alt=""/>
                    <h3 className="text-xl font-bold text-center m-3">Designs</h3>
                </div>
            </div>
            <div className="w-1/3 p-5">
                <div className="w-8/12 h-full bg-gray-200 rounded-xl shadow cursor-pointer hover:bg-green-500">
                    <Image className="rounded-t-xl" src={Study1} alt=""/>
                    <h3 className="text-xl font-bold text-center m-3">Designs</h3>
                </div>
            </div>
            <div className="w-1/3 p-5">
                <div className="w-8/12 h-full bg-gray-200 rounded-xl shadow cursor-pointer hover:bg-green-500">
                    <Image className="rounded-t-xl" src={Study1} alt=""/>
                    <h3 className="text-xl font-bold text-center m-3">Designs</h3>
                </div>
            </div>
            <div className="w-1/3 p-5">
                <div className="w-8/12 h-full bg-gray-200 rounded-xl shadow cursor-pointer hover:bg-green-500">
                    <Image className="rounded-t-xl" src={Study1} alt=""/>
                    <h3 className="text-xl font-bold text-center m-3">Designs</h3>
                </div>
            </div>
            <div className="w-1/3 p-5">
                <div className="w-8/12 h-full bg-gray-200 rounded-xl shadow cursor-pointer hover:bg-green-500">
                    <Image className="rounded-t-xl" src={Study1} alt=""/>
                    <h3 className="text-xl font-bold text-center m-3">Designs</h3>
                </div>
            </div>
            <div className="w-1/3 p-5">
                <div className="w-8/12 h-full bg-gray-200 rounded-xl shadow cursor-pointer hover:bg-green-500">
                    <Image className="rounded-t-xl" src={Study1} alt=""/>
                    <h3 className="text-xl font-bold text-center m-3">Designs</h3>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}
