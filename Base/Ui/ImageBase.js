import Image from 'next/image';

const ImageBase = (prop) => {
    const { continer } = prop
    prop = { ...prop }
    delete prop["container"];
    return <>
        <div className={container ?? ""}>
            <Image  {...prop} />
        </div>
    </>

}

export default ImageBase
