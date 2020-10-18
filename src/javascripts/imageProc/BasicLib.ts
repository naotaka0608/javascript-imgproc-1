export class BasicLib
{

    public GrayScale = (ImageData32: any) => {
        const length: number = ImageData32.data.length;
        const pixel: any = ImageData32.data;
    
        for(let i=0; i<length; i+=4){
        
            const r: number = pixel[i+0];
            const g: number = pixel[i+1];
            const b: number = pixel[i+2];
        
            const gray: number = 0.30 * r + 0.59 * g + 0.11 * b;
        
            pixel[i+0] = gray;
            pixel[i+1] = gray;
            pixel[i+2] = gray;
            pixel[i+3] = 255;
        }    
    }

    public Reverse = (imageData32: any) => {
        const length = imageData32.data.length;
        const pixel = imageData32.data;
    
        for(let i=0; i<length; i+=4){
            pixel[i+0] = 255 - pixel[i+0];
            pixel[i+1] = 255 - pixel[i+1];
            pixel[i+2] = 255 - pixel[i+2];
        }    
    }
    
    public ImageData32To8 = (ImageData32: any, ImageData8: Array<number>) => {
        const length: number = ImageData32.data.length;
        const pixel: any = ImageData32.data;
        
        let count: number = 0;
    
        for(let i=0; i<length; i+=4){
            ImageData8[count] = pixel[i+0];
            count++;
        }    
    }

    public ImageData8To32 = (ImageData8: Array<number>, ImageData32: any) => {
        const length: number = ImageData32.data.length;
        const pixel: any = ImageData32.data;
        
        let count: number = 0;
    
        for(let i=0; i<length; i+=4){
            pixel[i+0] = ImageData8[count];
            pixel[i+1] = ImageData8[count];
            pixel[i+2] = ImageData8[count];
            pixel[i+3] = 255;
            count++;
        }    
    }    
}

