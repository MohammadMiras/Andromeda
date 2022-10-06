import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Image from 'next/image';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import DownloadingIcon from '@mui/icons-material/Downloading';

const Posts = () => {
    const posts = [1, 2, 3, 4]
    return <>
        <div className="columns-1 px-2 sm:columns-2 mt-2">

            <div>
                {
                    posts.map(item => <>
                        <div className="p-2 my-2 bg-Template-color2 rounded-2xl text-white">
                            <div className="flex justify-between px-2 py-2">
                                <p className='text-sm'> عنوان  فیلم  دراین بخش  </p>
                                <BookmarkBorderIcon />
                            </div>
                            <div className='flex justify-start'>
                                <div className='w-24 h-36 relative overflow-hidden rounded-xl'>
                                    <Image
                                        src={`/images/${item}.jpg`} layout="fill" className="object-cover" />
                                </div>
                                <div className='mr-3'>
                                    <div className='flex justify-start  mt-1'>
                                        <div className='w-[2px] bg-Template-color3 rounded-2xl '>

                                        </div>
                                        <p className='text-xs font-iransans mr-3'>
                                            فصل سوم به صورت کامل با دوبله فارسی قرار گرفت
                                        </p>

                                    </div>
                                    <div className='flex justify-between flex-wrap mt-5'>
                                        <div className='flex justify-start text-sm  group'>
                                            <MovieFilterIcon className='text-sm ml-2 text-Template-color4 group-hover:text-Template-color3' />
                                            <p className="text-xs">
                                                اکشن- درام - فانتزی -کمدی
                                            </p>
                                        </div>
                                        <div className='flex  justify-start text-sm '>
                                            <StarOutlineIcon className='text-sm  pl-1' />
                                            <p > امتیاز : </p>
                                            <div className=' flex px-1 text-xs bg-Template-color1 rounded-3xl items-center text-Template-color3' >22</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between px-2 py-2 mt-3'>
                                <div className='px-2 py-2  border-[1px]  border-Template-color3 rounded-lg text-white hover:bg-Template-color3 hover:text-black text-sm
                                '>
                                    نسخه زیرنویس فارسی
                                </div>
                                <div className='px-2 py-2 bg-Template-color3 rounded-lg bg-opacity-90'>
                                    <DownloadingIcon className='text-Template-color1'/>
                                </div>
                            </div>
                        </div>
                    </>)
                }

            </div>
            <div className="hidden sm:block sm:w-60 sm:h-11 bg-red-800"></div>


        </div>
    </>
}

export default Posts