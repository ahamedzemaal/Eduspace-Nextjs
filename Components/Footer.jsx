export default function Footer(){
    return(
        <>
        <div className="bg-gray-100">
        <div className=" p-10 m-5 flex flex-wrap">
            <div className="w-1/2">
                <p className="flex text-xl font-bold text-green-500"><img className=" px-2" src="Assets/pic.png" alt=""/>Eduspace.</p>
                <ul className="flex my-2">
                    <li className="px-3"><a href=""><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg></a></li>
                    <li className="px-3"><a href=""><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.00 127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205- 165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.28 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623- 348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962 797-1.562 2.457-2.549z" />
                    </svg></a></li>
                    <li className="px-3"><a href="">Gmail</a></li>
                </ul>
            </div>
            <div className="w-1/4 bg-yellow-400">Test</div>
            <div className="w-1/4 bg-yellow-500">Test</div>
        </div>
    </div>
        </>
    )
}