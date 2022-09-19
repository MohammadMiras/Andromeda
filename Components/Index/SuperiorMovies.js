import Image from 'next/image'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const SuperiorMovies = () => {
    const items = [1, 2, 3, 4, 5]
    return <>

        <div className="flex justify-between items-center px-2 py-5 text-white">
            <p> 250 فیلم برتر</p>
            <a className="border-2 rounded-md border-white hover:border-Template-color3 hover:text-Template-color3 px-5 py-2 ">
                مشاهده بیشتر
            </a>
        </div>
        <div className="px-2" >

            {
                items.map(i => <>
                    <div key={i} className="flex justify-between h-20 rounded-xl  overflow-hidden bg-Template-color2 my-2 items-center">
                        <div className="flex justify-start ">
                            <div className="relative h-20 w-20">
                                <Image
                                    src={`/images/${i}.jpg`}
                                    layout="fill"
                                    className="object-cover overflow-hidden"
                                />
                            </div>
                            <div className="mr-3 max-w-[200px] flex flex-col justify-between py-1">
                                <p className="text-white"> Test Text</p>
                                <p className="text-Template-color4 text-sm"> Test Text - Test Text - Test Text</p>
                            </div>
                        </div>
                        <div>
                            <PlayCircleOutlineIcon className='pl-1 h-9 w-9 text-Template-color3 opacity-50' />
                        </div>
                    </div>
                </>
                )
            }

        </div>
    </>
}
export default SuperiorMovies