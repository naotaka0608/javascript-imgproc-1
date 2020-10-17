import Reverse from "./imageProc/Reverse";
import GrayScale from "./imageProc/GrayScale";
import OtsuBinary from "./imageProc/OtsuBinary";
import { Opening, Closing } from "./imageProc/OpenClose";
import Labeling from "./imageProc/Labeling";
import { ImageData32To8, ImageData8To32 } from "./imageProc/MyLib";

// ------------------------------------------------------------------
// 
const showImage1: any = document.getElementById('ShowImage1');

showImage1.addEventListener('click', () => {
  
    const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas1');
    if(!canvas){
        console.log('Canvas要素の取得に失敗');
        return;
    }

    const context: any = canvas.getContext('2d');
    
    const image = new Image();

    image.src = "../images/lenna.jpeg"

    image.onload = () => {
        context.drawImage(image, 0, 0);
    }
  
}, false);


// ------------------------------------------------------------------
// 
const showImage2: any = document.getElementById('ShowImage2');

showImage2.addEventListener('click', () => {
  
    const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas5');
    if(!canvas){
        console.log('Canvas要素の取得に失敗');
        return;
    }

    const context: any = canvas.getContext('2d');
    
    const image = new Image();

    image.src = "../images/fruit.jpeg"

    image.onload = () => {
        context.drawImage(image, 0, 0);
    }
  
}, false);

// ------------------------------------------------------------------
// 

const reverse: any = document.getElementById('Reverse');

reverse.addEventListener('click', () => {
  
    const canvas = <HTMLCanvasElement>document.getElementById('canvas2');
    if(!canvas){
        console.log('Canvas要素の取得に失敗');
        return;
    }

    const context: any = canvas.getContext('2d');

    const image = new Image();

    image.src = "../images/lenna.jpeg"

    image.onload = () => {
        context.drawImage(image, 0, 0);

        const imageData = context.getImageData(0, 0, image.width, image.height);

        Reverse(imageData);

        context.putImageData(imageData, 0, 0);
    };
  
}, false);
// ------------------------------------------------------------------
// 

const grayScale: any = document.getElementById('GrayScale1');

grayScale.addEventListener('click', () => {
  
    const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas3');
    if(!canvas){
        console.log('Canvas要素の取得に失敗');
        return;
    }

    const context: any = canvas.getContext('2d');
    
    const image = new Image();

    image.src = "../images/lenna.jpeg"

    image.onload = () => {
        context.drawImage(image, 0, 0);

        const imageData = context.getImageData(0, 0, image.width, image.height);

        GrayScale(imageData);

        context.putImageData(imageData, 0, 0);
    };

    
  
}, false);

// ------------------------------------------------------------------
// 

const otsuBinary: any = document.getElementById('OtsuBinary');

otsuBinary.addEventListener('click', () => {
  
    const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas4');
    if(!canvas){
        console.log('Canvas要素の取得に失敗');
        return;
    }

    const context: any = canvas.getContext('2d');
    
    const image = new Image();

    image.src = "../images/lenna.jpeg"

    image.onload = () => {
        
        context.drawImage(image, 0, 0);
        const ImageData32 = context.getImageData(0, 0, image.width, image.height);

        const width = ImageData32.width;
        const heigth = ImageData32.height;
        const length = ImageData32.data.length;

        let ImageData8: Array<number> = new Array(ImageData32.width * ImageData32.height);

        // グレースケール
        GrayScale(ImageData32);

        // 32bitから8bitへ変換
        ImageData32To8(ImageData32, ImageData8);

        // 判別分析法による2値化
        OtsuBinary(ImageData8, width, heigth);

        // 8bitから32bitへ変換
        ImageData8To32(ImageData8, ImageData32);

        context.putImageData(ImageData32, 0, 0);
    };  
}, false);

// ------------------------------------------------------------------
// 

const opening: any = document.getElementById('Opening');

opening.addEventListener('click', () => {
  
    const canvas : HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas6');
    if(!canvas){
        console.log('Canvas要素の取得に失敗');
        return;
    }

    const context: any = canvas.getContext('2d');

    const image = new Image();

    image.src = "../images/fruit.jpeg"

    image.onload = () => {
            
        context.drawImage(image, 0, 0);
        const ImageData32 = context.getImageData(0, 0, image.width, image.height);

        const width = ImageData32.width;
        const heigth = ImageData32.height;
        const length = ImageData32.data.length;
    
        let ImageData8: Array<number> = new Array(ImageData32.width * ImageData32.height);
    
        // グレースケール
        GrayScale(ImageData32);
    
        // 32bitから8bitへ変換
        ImageData32To8(ImageData32, ImageData8);
    
        // 判別分析法による2値化
        OtsuBinary(ImageData8, width, heigth);
    
        // OpenClose
        Closing(ImageData8, width, heigth, 3);
        Opening(ImageData8, width, heigth, 3);
    
        // 8bitから32bitへ変換
        ImageData8To32(ImageData8, ImageData32);

        context.putImageData(ImageData32, 0, 0);
    };
  
}, false);

// ------------------------------------------------------------------
// 
/*
const labeling: any = document.getElementById('Labeling');

labeling.addEventListener('click', () => {
  
    const canvas : HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas7');
    if(!canvas){
        console.log('Canvas要素の取得に失敗');
        return;
    }

    const context: any = canvas.getContext('2d');

    const image = new Image();

    image.src = "../images/fruit.jpeg"

    image.onload = () => {
            
        context.drawImage(image, 0, 0);
        const ImageData32 = context.getImageData(0, 0, image.width, image.height);

        const width = ImageData32.width;
        const heigth = ImageData32.height;
        const length = ImageData32.data.length;
    
        let ImageData8: Array<number> = new Array(ImageData32.width * ImageData32.height);
    
        // グレースケール
        GrayScale(ImageData32);
    
        // 32bitから8bitへ変換
        ImageData32To8(ImageData32, ImageData8);
    
        // 判別分析法による2値化
        OtsuBinary(ImageData8, width, heigth);
    
        // OpenClose
        Closing(ImageData8, width, heigth, 3);
        Opening(ImageData8, width, heigth, 3);
    
        // ラベリング
        Labeling(ImageData8, width, heigth);
    
        // 8bitから32bitへ変換
        ImageData8To32(ImageData8, ImageData32);

        context.putImageData(ImageData32, 0, 0);
    };
  
}, false);
*/