import { IconType } from 'react-icons/lib';
import Link from 'next/link';
import { Url } from 'next/dist/shared/lib/router/router';

interface MenuIconProps {
  title: String;
  address: Url;
  Icon: IconType;
}

export default function MenuItem({ title, address, Icon }: MenuIconProps) {
  return (
    <div className='flex'>
      <Link href={address} className='mx-4 lg:mx-6 hover:text-amber-600'>
        <Icon className='text-2xl sm:hidden mx-4' />
        <p className='hidden sm:inline my-2 text-sm'>{title}</p>
      </Link>
    </div>
  );
}
