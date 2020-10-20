export class NoiseFilter
{
    // 移動平均法
    Smooth = () => {

    }

    // ノイズ付加
    Noise_ramdom = () => {

    }

    // メディアン
    Median = () => {

    }

    // 収縮・膨張
    public Opening = (ImageData8: Array<number>[], width: number, height: number, num: number) => {
        for(let n=0; n<num; n++){
            this.erosion(ImageData8, width, height);    
            this.dilation(ImageData8, width, height);    
        }
    }

    // 膨張・収縮
    public Closing = (ImageData8: Array<number>[], width: number, height: number, num: number) => {
        for(let n=0; n<num; n++){
            this.dilation(ImageData8, width, height);    
            this.erosion(ImageData8, width, height);    
        }
    }

    public dilation = (ImageData8: Array<number>[], width: number, height: number) => {
        
        //let tmpData: Array<number> = new Array(width * height);

        let tmpData = new Array(height);
        for(let h = 0; h < height; h++) {
            tmpData[h] = new Array(width).fill(0);
        }

        for(let h=1; h<height-1; h++){
            for(let w=1; w<width-1; w++){

                tmpData[h][w] = ImageData8[h][w];
                if(ImageData8[h-1][w-1] === 255) tmpData[h][w] = 255;
                if(ImageData8[h-1][w+0] === 255) tmpData[h][w] = 255;
                if(ImageData8[h-1][w+1] === 255) tmpData[h][w] = 255;
                if(ImageData8[h][w-1] === 255) tmpData[h][w] = 255;
                if(ImageData8[h][w+1] === 255) tmpData[h][w] = 255;
                if(ImageData8[h+1][w-1] === 255) tmpData[h][w] = 255;
                if(ImageData8[h+1][w+0] === 255) tmpData[h][w] = 255;
                if(ImageData8[h+1][w+1] === 255) tmpData[h][w] = 255;                
            }
        }

        for(let h=1; h<height-1; h++){
            for(let w=1; w<width-1; w++){
                ImageData8[h][w] = tmpData[h][w];
            }
        }
    }

    public erosion = (ImageData8: Array<number>[], width: number, height: number) => {
        
        let tmpData = new Array(height);
        for(let h = 0; h < height; h++) {
            tmpData[h] = new Array(width).fill(0);
        }

        for(let h=1; h<height-1; h++){
            for(let w=1; w<width-1; w++){
                tmpData[h][w] = ImageData8[h][w];
                if(ImageData8[h-1][w-1] === 0) tmpData[h][w] = 0;
                if(ImageData8[h-1][w+0] === 0) tmpData[h][w] = 0;
                if(ImageData8[h-1][w+1] === 0) tmpData[h][w] = 0;
                if(ImageData8[h][w-1] === 0) tmpData[h][w] = 0;
                if(ImageData8[h][w+1] === 0) tmpData[h][w] = 0;
                if(ImageData8[h+1][w-1] === 0) tmpData[h][w] = 0;
                if(ImageData8[h+1][w+0] === 0) tmpData[h][w] = 0;
                if(ImageData8[h+1][w+1] === 0) tmpData[h][w] = 0;                
            }
        }

        for(let h=1; h<height-1; h++){
            for(let w=1; w<width-1; w++){
                ImageData8[h][w] = tmpData[h][w];
            }
        }
    }

}