const Header = () => {
  return (
    <div className="mt-8 h-56 w-full max-w-lg">
      <div className="flex w-full h-4/5">
        <div className="w-1/3">
          <div className="md:w-36 md:h-36 w-28 h-28 bg-yellow-300 rounded-md flex justify-center items-center">
            <h1 className="text-white text-4xl font-semibold">2048</h1>
          </div>
        </div>
        <div className="w-2/3 flex justify-end">
          <div>
            <div className="md:w-28 w-24 md:h-28 h-24 bg-stone-400 p-1 rounded-md flex flex-col items-center m-2">
              <h3 className="text-stone-200  text-xl font-semibold">Score</h3>
              <h2 className="text-white text-2xl font-semibold m-2">0</h2>
            </div>
          </div>
          <div>
            <div className="md:w-28 w-24 md:h-28 h-24 bg-stone-400 p-1 rounded-md flex flex-col items-center m-2">
              <h3 className="text-stone-200  text-xl font-semibold">Score</h3>
              <h2 className="text-white text-2xl font-semibold m-2">0</h2>
            </div>
            <div className="p-2">
              <button className="bg-amber-500 text-white rounded-md md:w-28 w-24 py-1 font-semibold md:text-sm text-xs uppercase hover:bg-amber-600 hover:bg-opacity-80 hover:text-stone-100">
                new game
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-1/5">
        <h2 className="text-stone-500  md:text-xl text-lg font-semibold">
          Join the numbers and get to the 2048 tile!
        </h2>
      </div>
    </div>
  )
}

export default Header
