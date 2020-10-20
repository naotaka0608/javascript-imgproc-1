export class BasicLib
{
    // グレースケール
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

    // ネガポジ
    public Reverse = (imageData32: any) => {
        const length = imageData32.data.length;
        const pixel = imageData32.data;
    
        for(let i=0; i<length; i+=4){
            pixel[i+0] = 255 - pixel[i+0];
            pixel[i+1] = 255 - pixel[i+1];
            pixel[i+2] = 255 - pixel[i+2];
        }    
    }
    
    // 1次元32bit画像 → 1次元8bit画像
    public ImageData1d32bitTo1d8bit = (ImageData32: any, ImageData8: Array<number>) => {
        const length: number = ImageData32.data.length;
        const pixel: any = ImageData32.data;
        
        let count: number = 0;
    
        for(let i=0; i<length; i+=4){
            ImageData8[count] = pixel[i+0];
            count++;
        }    
    }

    // 1次元8bit画像 → 1次元32bit画像
    public ImageData1d8bitTo1d32bit = (ImageData8: Array<number>, ImageData32: any) => {
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

    // 1次元32bit画像 → 2次元8bit画像
    public ImageData1d32bitTo2d8bit = (ImageData32: any, ImageData8: Array<number>[]) => {
        const width: number = ImageData32.width;
        const height: number = ImageData32.height;
        const pixel: any = ImageData32.data;
        
        let count: number = 0;

        for(let h=0; h<height; h++){
            for(let w=0; w<width; w++){
                let i = ( h * width * 4 ) + (w * 4);
                ImageData8[h][w] = pixel[i+0];
            }
        }
    }

    // 2次元8bit画像 → 1次元32bit画像
    public ImageData2d8bitTo1d32bit = (ImageData8: Array<number>[], ImageData32: any) => {
        const width: number = ImageData32.width;
        const height: number = ImageData32.height;
        const pixel: any = ImageData32.data;
            
        for(let h=0; h<height; h++){
            for(let w=0; w<width; w++){
                let i = ( h * width * 4 ) + (w * 4);
                pixel[i+0] = ImageData8[h][w];
                pixel[i+1] = ImageData8[h][w];
                pixel[i+2] = ImageData8[h][w];
                pixel[i+3] = 255;
            }
        }
    }    

}

