import { BiHomeSmile } from 'react-icons/bi';
import { BsInfoCircle } from 'react-icons/bs';
import Link from 'next/link';
import MenuItem from './MenuItem';

export default function Header() {
  return (
    <div className='flex justify-between py-4 mx-2 max-w-6xl sm:mx-auto items-center'>
      <div className='flex'>
        <MenuItem title='Home' address='/' Icon={BiHomeSmile} />
        <MenuItem title='About' address='/about' Icon={BsInfoCircle} />
      </div>
      <div>
        <Link href='/'>
          <h2 className='sm:hidden md:inline text-xl'>Video Search</h2>
          <h2 className='hidden md:hidden text-xl'>VS</h2>
        </Link>
      </div>
    </div>
  );
}
