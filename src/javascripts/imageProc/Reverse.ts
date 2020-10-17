const Reverse = (imageData: any) => {
    const length = imageData.data.length;
    const pixel = imageData.data;

    for(let i=0; i<length; i+=4){
        pixel[i+0] = 255 - pixel[i+0];
        pixel[i+1] = 255 - pixel[i+1];
        pixel[i+2] = 255 - pixel[i+2];
    }    
}

export default Reverse;