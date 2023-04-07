import { BiHomeSmile } from 'react-icons/bi';
import { BsInfoCircle } from 'react-icons/bs';
import DarkModeSwitch from './DarkModeSwitch';
import Link from 'next/link';
import MenuItem from './MenuItem';

export default function Header() {
  return (
    <div className='flex justify-between py-4 mx-2 max-w-6xl sm:mx-auto items-center select-none'>
      <div className='flex'>
        <MenuItem title='Home' address='/' Icon={BiHomeSmile} />
        <MenuItem title='About' address='/about' Icon={BsInfoCircle} />
      </div>
      <div className='flex items-center space-x-5'>
        <DarkModeSwitch />
        <Link href='/'>
          <h2 className='hidden sm:inline text-xl font-bold bg-blue-400 text-amber-500 p-2 rounded-lg'>
            Video Search
          </h2>
          <h2 className='sm:hidden text-xl font-bold bg-blue-400 text-amber-500 p-2 rounded-lg'>
            VS
          </h2>
        </Link>
      </div>
    </div>
  );
}
