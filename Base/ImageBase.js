import Image from 'next/image';

const ImageBase = ({container ,...rest}) => {

    return <>
        <div className={container ?? ""}>
            <Image  {...rest} />
        </div>
    </>

}

export default ImageBase
