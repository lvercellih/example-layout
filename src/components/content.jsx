import { TriangleDownIcon, ArrowUpIcon, CalendarIcon, DollarIcon, ArrowDownIcon } from "./icons";

export function Content() {
  return (
    <div className="h-screen px-4 pb-24 overflow-auto md:px-6">
      <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">
        Good afternoom, Charlie
      </h1>
      <h2 className="text-gray-400 text-md">
        Here&#x27;s what&#x27;s happening with your ambassador account today.
      </h2>
      <div className="flex flex-col items-center w-full my-6 space-y-4 md:space-x-4 md:space-y-0 md:flex-row">
        <div className="w-full md:w-6/12">
          <div className="relative w-full overflow-hidden bg-white shadow-lg dark:bg-gray-700">
            <a href="#" className="block w-full h-full">
              <div className="flex items-center justify-between px-4 py-6 space-x-4">
                <div className="flex items-center">
                  <span className="relative p-5 bg-yellow-100 text-yellow-500 rounded-full">
                    <DollarIcon />
                  </span>
                  <p className="ml-2 text-sm font-semibold text-gray-700 border-b border-gray-200 dark:text-white">
                    Level 2 Ambassador
                  </p>
                </div>
                <div className="mt-6 text-xl font-bold text-black border-b border-gray-200 md:mt-0 dark:text-white">
                  $44,453.39
                  <span className="text-xs text-gray-400">
                    /$100K
                  </span>
                </div>
              </div>
              <div className="w-full h-3 bg-gray-100">
                <div className="w-2/5 h-full text-xs text-center text-white bg-green-400">
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="flex items-center w-full space-x-4 md:w-1/2">
          <div className="w-1/2">
            <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
              <p className="text-2xl font-bold text-black dark:text-white">
                12
              </p>
              <p className="text-sm text-gray-400">
                Active projects
              </p>
            </div>
          </div>
          <div className="w-1/2">
            <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
              <p className="text-2xl font-bold text-black dark:text-white">
                $93.76
              </p>
              <p className="text-sm text-gray-400">
                Commission in approval
              </p>
              <span className="absolute p-4 bg-purple-500 text-white rounded-full top-2 right-4">
                <DollarIcon />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="flex items-center px-4 py-2 text-gray-400 border border-gray-300 rounded-r-full rounded-tl-sm rounded-bl-full text-md">
          <CalendarIcon />
          Last month
          <TriangleDownIcon />
        </button>
        <span className="text-sm text-gray-400">
          Compared to oct 1- otc 30, 2020
        </span>
      </div>
      <GridLayout>
        <div className="w-full">
          <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
            <p className="text-sm font-semibold text-gray-700 border-b border-gray-200 w-max dark:text-white">
              Project Reffered
            </p>
            <div className="flex items-end my-6 space-x-2">
              <p className="text-5xl font-bold text-black dark:text-white">
                12
              </p>
              <span className="flex items-center text-xl font-bold text-green-500">
                <ArrowUpIcon />
                22%
              </span>
            </div>
            <div className="dark:text-white">
                <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                    <p>
                      Unique URL
                    </p>
                    <div className="flex items-end text-xs">
                        34
                        <span className="flex items-center">
                            <ArrowUpIcon extraClass='text-green-500' />
                            22%
                        </span>
                    </div>
                </div>
                <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                    <p>
                        Embedded form
                    </p>
                    <div className="flex items-end text-xs">
                        13
                        <span className="flex items-center">
                            <ArrowUpIcon extraClass='text-green-500' />
                            12%
                        </span>
                    </div>
                </div>
                <div className="flex items-center justify-between space-x-12 text-sm md:space-x-24">
                    <p>
                        New visitor
                    </p>
                    <div className="flex items-end text-xs">
                        45
                        <span className="flex items-center">
                            <ArrowUpIcon extraClass='text-green-500' />
                            41%
                        </span>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div className="w-full">
            <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
                <p className="text-sm font-semibold text-gray-700 border-b border-gray-200 w-max dark:text-white">
                    Project Paid
                </p>
                <div className="flex items-end my-6 space-x-2">
                    <p className="text-5xl font-bold text-black dark:text-white">
                        23
                    </p>
                    <span className="flex items-center text-xl font-bold text-green-500">
                        <ArrowUpIcon />
                        12%
                    </span>
                </div>
                <div className="dark:text-white">
                    <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                        <p>
                            User paid
                        </p>
                        <div className="flex items-end text-xs">
                            21
                            <span className="flex items-center">
                                <ArrowUpIcon extraClass='text-green-500' />
                                20%
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                        <p>
                            Income
                        </p>
                        <div className="flex items-end text-xs">
                            10
                            <span className="flex items-center">
                                <ArrowUpIcon extraClass='text-green-500' />
                                2%
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between space-x-12 text-sm md:space-x-24">
                        <p>
                            Royal tees
                        </p>
                        <div className="flex items-end text-xs">
                            434
                            <span className="flex items-center">
                                <ArrowDownIcon extraClass={'text-red-500'} />
                                12%
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full">
            <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
                <p className="text-sm font-semibold text-gray-700 border-b border-gray-200 w-max dark:text-white">
                    New features
                </p>
                <div className="flex items-end my-6 space-x-2">
                    <p className="text-5xl font-bold text-black dark:text-white">
                        12
                    </p>
                    <span className="flex items-center text-xl font-bold text-red-500">
                        <ArrowDownIcon />
                        2%
                    </span>
                </div>
                <div className="dark:text-white">
                    <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                        <p>
                            Down
                        </p>
                        <div className="flex items-end text-xs">
                            34
                            <span className="flex items-center">
                                <ArrowDownIcon extraClass={'text-red-500'} />
                                22%
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                        <p>
                            Up
                        </p>
                        <div className="flex items-end text-xs">
                            13
                            <span className="flex items-center">
                                <ArrowUpIcon extraClass='text-green-500' />
                                12%
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between space-x-12 text-sm md:space-x-24">
                        <p>
                            No developed
                        </p>
                        <div className="flex items-end text-xs">
                            45
                            <span className="flex items-center">
                                <ArrowDownIcon extraClass={'text-red-500'} />
                                41%
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full">
            <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
                <p className="text-sm font-semibold text-gray-700 border-b border-gray-200 w-max dark:text-white">
                    Sign in
                </p>
                <div className="flex items-end my-6 space-x-2">
                    <p className="text-5xl font-bold text-black dark:text-white">
                        16
                    </p>
                    <span className="flex items-center text-xl font-bold text-red-500">
                        <ArrowDownIcon />
                        14%
                    </span>
                </div>
                <div className="dark:text-white">
                    <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                        <p>
                            Amercia
                        </p>
                        <div className="flex items-end text-xs">
                            43
                            <span className="flex items-center">
                                <ArrowDownIcon extraClass={'text-red-500'} />
                                12%
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                        <p>
                            Europe
                        </p>
                        <div className="flex items-end text-xs">
                            133
                            <span className="flex items-center">
                                <ArrowUpIcon extraClass='text-green-500' />
                                19%
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between space-x-12 text-sm md:space-x-24">
                        <p>
                            Asia
                        </p>
                        <div className="flex items-end text-xs">
                            23
                            <span className="flex items-center">
                                <ArrowDownIcon extraClass={'text-red-500'} />
                                4%
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full">
            <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
                <p className="text-sm font-semibold text-gray-700 border-b border-gray-200 w-max dark:text-white">
                    Sales
                </p>
                <div className="flex items-end my-6 space-x-2">
                    <p className="text-5xl font-bold text-black dark:text-white">
                        9
                    </p>
                    <span className="flex items-center text-xl font-bold text-green-500">
                        <ArrowUpIcon />
                        34%
                    </span>
                </div>
                <div className="dark:text-white">
                    <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                        <p>
                            Templates
                        </p>
                        <div className="flex items-end text-xs">
                            345
                            <span className="flex items-center">
                                <ArrowDownIcon extraClass={'text-red-500'} />
                                12%
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                        <p>
                            Components
                        </p>
                        <div className="flex items-end text-xs">
                            139
                            <span className="flex items-center">
                                <ArrowUpIcon extraClass='text-green-500' />
                                10%
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between space-x-12 text-sm md:space-x-24">
                        <p>
                            Icons
                        </p>
                        <div className="flex items-end text-xs">
                            421
                            <span className="flex items-center">
                                <ArrowDownIcon extraClass={'text-red-500'} />
                                4%
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full">
            <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
                <p className="text-sm font-semibold text-gray-700 border-b border-gray-200 w-max dark:text-white">
                    Maintenance
                </p>
                <div className="flex items-end my-6 space-x-2">
                    <p className="text-5xl font-bold text-black dark:text-white">
                        15
                    </p>
                    <span className="flex items-center text-xl font-bold text-green-500">
                        <ArrowUpIcon />
                        34%
                    </span>
                </div>
                <div className="dark:text-white">
                    <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                        <p>
                            Cloud
                        </p>
                        <div className="flex items-end text-xs">
                            123
                            <span className="flex items-center">
                                <ArrowDownIcon extraClass={'text-red-500'} />
                                22%
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                        <p>
                            Infra
                        </p>
                        <div className="flex items-end text-xs">
                            134
                            <span className="flex items-center">
                                <ArrowUpIcon extraClass='text-green-500' />
                                9%
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between space-x-12 text-sm md:space-x-24">
                        <p>
                            Office
                        </p>
                        <div className="flex items-end text-xs">
                            23
                            <span className="flex items-center">
                                <ArrowUpIcon extraClass='text-green-500' />
                                41%
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </GridLayout>
    </div>
  )
}

function GridLayout({ children }) {
  return (
    <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  )
}