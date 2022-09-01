import Image from 'next/image';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Specials = () => {

    const items = [1, 2, 3, 4, 5, 2]

    return <>
        <div className='py-2'>
            {/* <div className="flex justify-between mx-4 mt-5 mb-2 items-center text-white">
            <div> ویژه ها</div>
            <div className="border-2 px-8 py-2 rounded-lg border-Template-color3 leading-normal">بیشتر </div>
        </div> */}
            <div className=" flex flex-row flex-wrap gap-2 ">
                {
                    items.map(item => <>
                        <div className="relative h-44 w-[31.3%] overflow-hidden  shadow-lg sm:w-52 sm:h-48 group">
                            <div className="h-full w-full relative">
                                <Image src={`/images/${item}.jpg`} layout="fill" className="object-cover" />
                                <div className=" absolute w-8 h-10 bg-white rounded-xl left-2 bottom-2 bg-opacity-70 text-center py-2 group-hover:hidden">
                                    <p className="text-[10px] font-bold">IMB</p>
                                    <p className="text-[10px]">10</p>
                                </div>
                            </div>
                            <div className='group-hover:w-full group-hover:h-full  group-hover:bg-black  group-hover:absolute  group-hover:top-0  group-hover:bg-opacity-20 flex justify-center  items-center'>
                                <PlayArrowIcon className='h-24 w-24 opacity-70' />
                            </div>
                        </div>
                    </>
                    )
                }
            </div>

            <div className=' flex justify-center items-center my-5'>
                <div className='px-16 py-3 rounded-lg  text-center text-white border-2 m-auto border-white hover:border-Template-color3 hover:text-Template-color3'>
                    بیشتر
                </div>

            </div>

        </div>
    </>
}
export default Specials