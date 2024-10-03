import type { FC } from 'react'
import React from 'react'
import {
  PencilSquareIcon,
} from '@heroicons/react/24/solid'
import AppIcon from '@/app/components/base/app-icon'
export type IHeaderProps = {
  title: string
  isMobile?: boolean
  onShowSideBar?: () => void
  onCreateNewChat?: () => void
}
const Header: FC<IHeaderProps> = ({

  isMobile,
  // onShowSideBar,
  onCreateNewChat,
}) => {
  return (
    <div className="shrink-0 flex items-center justify-between  h-12 px-3 bg-gray-100">
      {isMobile
        ? (
          <div className='flex items-center justify-center h-8 w-8 cursor-pointer'
            onClick={() => onCreateNewChat?.()}
          >
            <PencilSquareIcon className="h-4 w-4 text-gray-500" />
          </div>)
        : <div className='flex items-center justify-center h-8 w-8 cursor-pointer'
          onClick={() => onCreateNewChat?.()}
        >
          <PencilSquareIcon className="h-4 w-4 text-gray-500" />
        </div>
      }

      {/* {isMobile
        ? (
          <div
            className='flex items-center justify-center h-8 w-8 cursor-pointer'
            onClick={() => onShowSideBar?.()}
          >
            <Bars3Icon className="h-4 w-4 text-gray-500" />
          </div>
        )
        : <div></div>} */}
      {/*  removed classes flex items-start space-x-4 ml-0 */}
      <div className="flex-grow flex items-center justify-center space-x-4 ">
        <AppIcon size="small" />
        <div className="text-sm text-gray-800 font-bold font-domine ">
          Link Product Design <br /> Assistant (Coca-Cola)
        </div>
      </div>

    </div>
  )
}

export default React.memo(Header)
