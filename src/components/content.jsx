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
        <Card
          title='Project Reffered'
          hightlight={{ value: '12', percent: '22', icon: <ArrowUpIcon />, percentExtraClass: 'text-green-500' }}
          rows={[
            { caption: 'Unique URL', value: '34', icon: <ArrowUpIcon extraClass='text-green-500' />, percent: '22' },
            { caption: 'Embedded form', value: '13', icon: <ArrowUpIcon extraClass='text-green-500' />, percent: '12' },
            { caption: 'New visitor', value: '45', icon: <ArrowUpIcon extraClass='text-green-500' />, percent: '41' },
          ]}
        />
        <Card
          title='Project Paid'
          hightlight={{ value: '23', percent: '12', icon: <ArrowUpIcon />, percentExtraClass: 'text-green-500' }}
          rows={[
            { caption: 'User paid', value: '21', icon: <ArrowUpIcon extraClass='text-green-500' />, percent: '20' },
            { caption: 'Income', value: '10', icon: <ArrowUpIcon extraClass='text-green-500' />, percent: '02' },
            { caption: 'Royal tees', value: '434', icon: <ArrowDownIcon extraClass='text-red-500' />, percent: '12' },
          ]}
        />
        <Card
          title='New features'
          hightlight={{ value: '12', percent: '2', icon: <ArrowDownIcon />, percentExtraClass: 'text-red-500' }}
          rows={[
            { caption: 'Down', value: '34', icon: <ArrowDownIcon extraClass='text-red-500' />, percent: '22' },
            { caption: 'Up', value: '13', icon: <ArrowUpIcon extraClass='text-green-500' />, percent: '12' },
            { caption: 'No developed', value: '45', icon: <ArrowDownIcon extraClass='text-red-500' />, percent: '41' },
          ]}
        />
        <Card
          title='Sign in'
          hightlight={{ value: '16', percent: '14', icon: <ArrowDownIcon />, percentExtraClass: 'text-red-500' }}
          rows={[
            { caption: 'Amercia', value: '43', icon: <ArrowDownIcon extraClass='text-red-500' />, percent: '12' },
            { caption: 'Europe', value: '133', icon: <ArrowUpIcon extraClass='text-green-500' />, percent: '19' },
            { caption: 'Asia', value: '23', icon: <ArrowDownIcon extraClass='text-red-500' />, percent: '04' },
          ]}
        />
        <Card
          title='Sales'
          hightlight={{ value: '9', percent: '34', icon: <ArrowUpIcon />, percentExtraClass: 'text-green-500' }}
          rows={[
            { caption: 'Templates', value: '345', icon: <ArrowDownIcon extraClass='text-red-500' />, percent: '12' },
            { caption: 'Components', value: '139', icon: <ArrowUpIcon extraClass='text-green-500' />, percent: '10' },
            { caption: 'Icons', value: '421', icon: <ArrowDownIcon extraClass='text-red-500' />, percent: '04' },
          ]}
        />
        <Card
          title='Maintenance'
          hightlight={{ value: '15', percent: '34', icon: <ArrowUpIcon />, percentExtraClass: 'text-green-500' }}
          rows={[
            { caption: 'Cloud', value: '123', icon: <ArrowDownIcon extraClass='text-red-500' />, percent: '22' },
            { caption: 'Infra', value: '134', icon: <ArrowUpIcon extraClass='text-green-500' />, percent: '09' },
            { caption: 'Office', value: '23', icon: <ArrowUpIcon extraClass='text-green-500' />, percent: '41' },
          ]}
        />
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

/**
 * 
 * @param {object} param0
 * @param {object} param0.hightlight { value, icon, percent, percentExtraClass }
 * @param {object} param0.rows { caption, value, icon, percent }
 * @returns 
 */
function Card({ title, hightlight, rows }) {
  return (
    <div className="w-full">
      <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
        <p className="text-sm font-semibold text-gray-700 border-b border-gray-200 w-max dark:text-white">
          {title}
        </p>
        <div className="flex items-end my-6 space-x-2">
          <p className="text-5xl font-bold text-black dark:text-white">
            {hightlight.value}
          </p>
          <span className={`flex items-center text-xl font-bold ${hightlight.percentExtraClass}`}>
            {hightlight.icon}
            {hightlight.percent}%
          </span>
        </div>
        <div className="dark:text-white">
          {rows?.length && rows.map((row, index, { length }) => (
            <div key={index} className={`flex items-center justify-between space-x-12 text-sm md:space-x-24 ${index + 1 < length && 'mb-2 pb-2 border-b border-gray-200'}`}>
              <p>
                {row.caption}
              </p>
              <div className="flex items-end text-xs">
                {row.value}
                <span className="flex items-center">
                  {row.icon}
                  {row.percent}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
