import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
const Header = () => {

    return <>
        <div className="flex justify-between h-12 text-white items-center px-5">
            <div>
                <MenuIcon />
            </div>
            <div className='relative h-12 w-12 z-10'>
                <Image src="/images/logo.png" layout='fill' className='absolute object-contain' />
            </div>
            <div>
                <SearchIcon  className='hover:text-Template-color3 ml-2'/>
                <PersonIcon  className='hover:text-Template-color3 '/>
            </div>
        </div>
    </>
}
export default Header