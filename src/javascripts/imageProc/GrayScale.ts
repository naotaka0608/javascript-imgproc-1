const GrayScale = (srcImg: any) => {
    const length = srcImg.data.length;
    const pixel = srcImg.data;

    for(let i=0; i<length; i+=4){
    
        const r = pixel[i+0];
        const g = pixel[i+1];
        const b = pixel[i+2];
    
        const gray = 0.30 * r + 0.59 * g + 0.11 * b;
    
        pixel[i+0] = gray;
        pixel[i+1] = gray;
        pixel[i+2] = gray;
        pixel[i+3] = 255;
    }    
}

export default GrayScale;