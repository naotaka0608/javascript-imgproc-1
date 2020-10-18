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
    public Opening = (ImageData8: Array<number>, width: number, height: number, num: number) => {
        for(let n=0; n<num; n++){
            this.erosion(ImageData8, width, height);    
            this.dilation(ImageData8, width, height);    
        }
    }

    // 膨張・収縮
    public Closing = (ImageData8: Array<number>, width: number, height: number, num: number) => {
        for(let n=0; n<num; n++){
            this.dilation(ImageData8, width, height);    
            this.erosion(ImageData8, width, height);    
        }
    }

    public dilation = (ImageData8: Array<number>, width: number, height: number) => {
        
        let tmpData: Array<number> = new Array(width * height);

        for(let h=1; h<height-1; h++){
            for(let w=1; w<width-1; w++){
                let pos1 = ((h-1)*width)+(w-1); 
                let pos2 = ((h-1)*width)+(w+0); 
                let pos3 = ((h-1)*width)+(w+1); 
                let pos4 = ((h+0)*width)+(w-1); 
                let pos5 = ((h+0)*width)+(w+0); 
                let pos6 = ((h+0)*width)+(w+1); 
                let pos7 = ((h+1)*width)+(w-1); 
                let pos8 = ((h+1)*width)+(w+0); 
                let pos9 = ((h+1)*width)+(w+1); 

                tmpData[pos5] = ImageData8[pos5];
                if(ImageData8[pos1] === 255) tmpData[pos5] = 255;
                if(ImageData8[pos2] === 255) tmpData[pos5] = 255;
                if(ImageData8[pos3] === 255) tmpData[pos5] = 255;
                if(ImageData8[pos4] === 255) tmpData[pos5] = 255;
                if(ImageData8[pos6] === 255) tmpData[pos5] = 255;
                if(ImageData8[pos7] === 255) tmpData[pos5] = 255;
                if(ImageData8[pos8] === 255) tmpData[pos5] = 255;
                if(ImageData8[pos9] === 255) tmpData[pos5] = 255;                
            }
        }

        for(let wh=0; wh<width*height; wh++){
            ImageData8[wh] = tmpData[wh];
        }
    }

    public erosion = (ImageData8: Array<number>, width: number, height: number) => {
        
        let tmpData: Array<number> = new Array(width * height);

        for(let h=1; h<height-1; h++){
            for(let w=1; w<width-1; w++){
                let pos1 = ((h-1)*width)+(w-1); 
                let pos2 = ((h-1)*width)+(w+0); 
                let pos3 = ((h-1)*width)+(w+1); 
                let pos4 = ((h+0)*width)+(w-1); 
                let pos5 = ((h+0)*width)+(w+0); 
                let pos6 = ((h+0)*width)+(w+1); 
                let pos7 = ((h+1)*width)+(w-1); 
                let pos8 = ((h+1)*width)+(w+0); 
                let pos9 = ((h+1)*width)+(w+1); 

                tmpData[pos5] = ImageData8[pos5];
                if(ImageData8[pos1] === 0) tmpData[pos5] = 0;
                if(ImageData8[pos2] === 0) tmpData[pos5] = 0;
                if(ImageData8[pos3] === 0) tmpData[pos5] = 0;
                if(ImageData8[pos4] === 0) tmpData[pos5] = 0;
                if(ImageData8[pos6] === 0) tmpData[pos5] = 0;
                if(ImageData8[pos7] === 0) tmpData[pos5] = 0;
                if(ImageData8[pos8] === 0) tmpData[pos5] = 0;
                if(ImageData8[pos9] === 0) tmpData[pos5] = 0;                
            }
        }

        for(let wh=0; wh<width*height; wh++){
            ImageData8[wh] = tmpData[wh];
        }
    }

}