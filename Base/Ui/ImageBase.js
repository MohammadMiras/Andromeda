import Image from 'next/image';

const ImageBase = (prop) => {
    const { continer } = prop
    prop = { ...prop }
    delete prop["continer"];
    return <>
        <div className={continer ?? ""}>
            <Image  {...prop} />
        </div>
    </>

}

export default ImageBase