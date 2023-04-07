import NavbarItem from './NavbarItem';

export default function Navbar() {
  return (
    <div className='flex justify-center dark:bg-gray-700 bg-blue-50 p-4 lg:text-lg'>
      <NavbarItem title='Trending' param='trending' />
      <NavbarItem title='Top Rated' param='top-rated' />
    </div>
  );
}
