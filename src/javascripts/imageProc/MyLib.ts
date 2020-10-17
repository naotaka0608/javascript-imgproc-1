const ImageData32To8 = (ImageData32: any, ImageData8: Array<number>) => {
    const length = ImageData32.data.length;
    const pixel = ImageData32.data;
    
    let count = 0;

    for(let i=0; i<length; i+=4){
        ImageData8[count] = pixel[i+0];
        count++;
    }    
}

const ImageData8To32 = (ImageData8: any, ImageData32: any) => {
    const length = ImageData32.data.length;
    const pixel = ImageData32.data;
    
    let count = 0;

    for(let i=0; i<length; i+=4){
        pixel[i+0] = ImageData8[count];
        pixel[i+1] = ImageData8[count];
        pixel[i+2] = ImageData8[count];
        pixel[i+3] = 255;
        count++;
    }    
}

export {ImageData32To8, ImageData8To32};