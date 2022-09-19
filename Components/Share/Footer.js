import MoreVertIcon from '@mui/icons-material/MoreVert';
import NavigationIcon from '@mui/icons-material/Navigation';

const Footer = () => {
    return <>
        <div className="w-full bg-Template-color2 bg-opacity-80 h-14 fixed bottom-0 flex 
        px-5 justify-between text-white items-center">
            <div className='bg-white bg-opacity-50
            rounded-lg px-1  '><NavigationIcon className='text-sm m-auto'/></div> 
            <div className='text-xs'>قوانین</div>
            <div className='text-xs'>تماس با ما</div>
            <div className='text-xs'>در باره ما</div>
            <div><MoreVertIcon className='text-md' /></div>
        </div>
    </>
}
export default Footer