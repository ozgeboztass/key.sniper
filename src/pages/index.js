import axios from 'axios'

export default function Home() {



  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgb(17,24,39)',
    }}>
  
        <header className="text-gray-400 bg-gray-900 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
           {/*    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>*/}
              <span className="ml-3 text-xl">KeySniper</span>
            </a>
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
        {/*      <a className="mr-5 hover:text-white">Explore</a>
              <a className="mr-5 hover:text-white">Portfolio</a>
              <a className="mr-5 hover:text-white">Leaderboard</a>
              <a className="mr-5 hover:text-white">Toolbox</a>
                <a className="mr-5 hover:text-white">Help</a>*/}
            </nav>
           {/* <button className="inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-xs mt-4 md:mt-0">
              USD
            </button>
            <button className="inline-flex items-center bg-indigo-500 border-0 py-1 px-3 mr-2 focus:outline-none hover:bg-gray-700 rounded text-xs mt-4 md:mt-0">
              Avax
            </button>*/}
            <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
              Connect
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </header>
        <section className="text-gray-400 bg-gray-900 body-font relative">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                Leaderboard
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Rank weighted by price &gt; volume &gt; holder
              </p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mt-4 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="search" className="leading-7 text-sm text-gray-400" />
                    <input type="email" id="email" name="email" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Search by twitter, adress..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="text-gray-400 bg-gray-900 mt-0 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-2/3 w-full mx-auto overflow-auto">
              <table className="table-auto w-full text-left whitespace-no-wrap">
                <thead>
                  <tr>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800 rounded-tl rounded-bl">
                      User
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">
                      FriendTech
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">
                      StarsArena
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">
                      Followers
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">
                      Buy
                    </th>                  
                    </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-3"><img alt="blog" src="https://dummyimage.com/103x103" className="w-8 h-8 mb-1 rounded-full flex-shrink-0 object-cover object-center" />Start</td>
                    <td className="px-4 py-3">5 Mb/s</td>
                    <td className="px-4 py-3">15 GB</td>
                    <td className="px-4 py-3 text-lg text-white">Free</td>
                    <td className="w-10 text-center">
                      <input name="plan" type="radio" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t-2 border-gray-800 px-4 py-3"><img alt="blog" src="https://dummyimage.com/103x103" className="w-8 h-8 mb-1 rounded-full flex-shrink-0 object-cover object-center" />Pro</td>
                    <td className="border-t-2 border-gray-800 px-4 py-3">25 Mb/s</td>
                    <td className="border-t-2 border-gray-800 px-4 py-3">25 GB</td>
                    <td className="border-t-2 border-gray-800 px-4 py-3 text-lg text-white">
                      $24
                    </td>
                    <td className="border-t-2 border-gray-800 w-10 text-center">
                      <input name="plan" type="radio" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t-2 border-gray-800 px-4 py-3"><img alt="blog" src="https://dummyimage.com/103x103" className="w-8 h-8 mb-1 rounded-full flex-shrink-0 object-cover object-center" />Business</td>
                    <td className="border-t-2 border-gray-800 px-4 py-3">36 Mb/s</td>
                    <td className="border-t-2 border-gray-800 px-4 py-3">40 GB</td>
                    <td className="border-t-2 border-gray-800 px-4 py-3 text-lg text-white">
                      $50
                    </td>
                    <td className="border-t-2 border-gray-800 w-10 text-center">
                      <input name="plan" type="radio" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t-2 border-b-2 border-gray-800 px-4 py-3">
                      <img alt="blog" src="https://dummyimage.com/103x103" className="w-8 h-8 mb-1 rounded-full flex-shrink-0 object-cover object-center" />
                      Exclusive
                    </td>
                    <td className="border-t-2 border-b-2 border-gray-800 px-4 py-3">
                      48 Mb/s
                    </td>
                    <td className="border-t-2 border-b-2 border-gray-800 px-4 py-3">
                      120 GB
                    </td>
                    <td className="border-t-2 border-b-2 border-gray-800 px-4 py-3 text-lg text-white">
                      $72
                    </td>
                    <td className="border-t-2 border-b-2 border-gray-800 w-10 text-center">
                      <input name="plan" type="radio" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div></section>
      </div>
  );
}
