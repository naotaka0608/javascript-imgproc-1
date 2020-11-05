import React, { useEffect, useState } from 'react'
import { BasicLib } from "./imageProc/BasicLib";
import { Binary } from "./imageProc/Binary"
import { NoiseFilter } from "./imageProc/NoiseFilter"
import { FeatureExtra } from "./imageProc/FeatureExtra";

const App = (props: any) => {

    const onShowImage1 = () =>{
        const canvas: any = document.getElementById('canvas1');
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

    }
    const onShowImage2 = () =>{
        const canvas: any = document.getElementById('canvas5');
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

    }
    const onReverse = () => {
        const canvas: any = document.getElementById('canvas2');
        if(!canvas){
            console.log('Canvas要素の取得に失敗');
            return;
        }
    
        const context: any = canvas.getContext('2d');
    
        const image = new Image();
        const basicLib = new BasicLib();
    
        image.src = "../images/lenna.jpeg"
    
        image.onload = () => {
            context.drawImage(image, 0, 0);
    
            const imageData = context.getImageData(0, 0, image.width, image.height);
    
            basicLib.Reverse(imageData);
    
            context.putImageData(imageData, 0, 0);
        };
    }

    const onGrayScale = () => {
        const canvas: any = document.getElementById('canvas3');
        if(!canvas){
            console.log('Canvas要素の取得に失敗');
            return;
        }
    
        const context: any = canvas.getContext('2d');
        
        const image = new Image();
        const basicLib = new BasicLib();
    
        image.src = "../images/lenna.jpeg"
    
        image.onload = () => {
            context.drawImage(image, 0, 0);
    
            const imageData = context.getImageData(0, 0, image.width, image.height);
    
            basicLib.GrayScale(imageData);
    
            context.putImageData(imageData, 0, 0);
        };        
    }

    const onOtsuBinary = () => {
        const canvas: any = document.getElementById('canvas4');
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
            const height = ImageData32.height;
            const length = ImageData32.data.length;
            const basicLib = new BasicLib();
            const binary = new Binary();
    
            let imageData8 = new Array(height);
            for(let h = 0; h < height; h++) {
                imageData8[h] = new Array(width).fill(0);
            }
    
            // グレースケール
            basicLib.GrayScale(ImageData32);
    
    
            // 32bitから8bitへ変換
            basicLib.ImageData1d32bitTo2d8bit(ImageData32, imageData8);
    
            // 判別分析法による2値化
            binary.OtsuBinary(imageData8, width, height);
    
            // 8bitから32bitへ変換
            basicLib.ImageData2d8bitTo1d32bit(imageData8, ImageData32);
    
            context.putImageData(ImageData32, 0, 0);
        };   
    }

    const onOpening = () => {
        const canvas: any = document.getElementById('canvas6');
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
            const height = ImageData32.height;
            const length = ImageData32.data.length;
            const basicLib = new BasicLib();
            const noiseFilter = new NoiseFilter();
            const binary = new Binary();
    
            let imageData8 = new Array(height);
            for(let h = 0; h < height; h++) {
                imageData8[h] = new Array(width).fill(0);
            }
        
            // グレースケール
            basicLib.GrayScale(ImageData32);
        
            // 32bitから8bitへ変換
            basicLib.ImageData1d32bitTo2d8bit(ImageData32, imageData8);
        
            // 判別分析法による2値化
            binary.OtsuBinary(imageData8, width, height);
        
            // OpenClose
            noiseFilter.Closing(imageData8, width, height, 3);
            noiseFilter.Opening(imageData8, width, height, 3);
        
            // 8bitから32bitへ変換
            basicLib.ImageData2d8bitTo1d32bit(imageData8, ImageData32);
    
            context.putImageData(ImageData32, 0, 0);
        };
    }

    const onLabeling = () => {
        const canvas: any = document.getElementById('canvas7');
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
            const height = ImageData32.height;
            const length = ImageData32.data.length;
            const basicLib = new BasicLib();
            const noiseFilter = new NoiseFilter();
            const binary = new Binary();
            const featureExtra = new FeatureExtra();
    
            let imageData8 = new Array(height);
            for(let h = 0; h < height; h++) {
                imageData8[h] = new Array(width).fill(0);
            }
        
            // グレースケール
            basicLib.GrayScale(ImageData32);
        
            // 32bitから8bitへ変換
            basicLib.ImageData1d32bitTo2d8bit(ImageData32, imageData8);
        
            // 判別分析法による2値化
            binary.OtsuBinary(imageData8, width, height);
        
            // OpenClose
            noiseFilter.Closing(imageData8, width, height, 3);
            noiseFilter.Opening(imageData8, width, height, 3);
        
            // ラベリング
            let imageData8_labeling = new Array(height);
            for(let h = 0; h < height; h++) {
                imageData8_labeling[h] = new Array(width).fill(0);
            }
    
            featureExtra.Labeling(imageData8, imageData8_labeling, width, height);
            let cnt = featureExtra.GetLabelCnt();
            console.log("ラベル数：" + cnt);
            // 8bitから32bitへ変換
            //basicLib.ImageData2d8bitTo1d32bit(imageData8, ImageData32);
            basicLib.ImageData2d8bitTo1d32bit(imageData8_labeling, ImageData32);
    
            context.putImageData(ImageData32, 0, 0);
        };
    }

    return(    
        <React.Fragment>
            <button onClick={onShowImage1}> 表示 </button>
            <button onClick={onReverse}> 反転 </button>
            <button onClick={onGrayScale}> グレースケール </button>
            <button onClick={onOtsuBinary}> 2値化 </button>
            <br/>
            <canvas id="canvas1" width="225" height="225" />
            <canvas id="canvas2" width="225" height="225" />
            <canvas id="canvas3" width="225" height="225" />
            <canvas id="canvas4" width="225" height="225" />
            <br/>
            <br/>
            <button onClick={onShowImage2}> 元画像 </button>
            <button onClick={onOpening}> オープニング </button>
            <button onClick={onLabeling}> ラベリング </button>
            <br/>
            <canvas id="canvas5" width="300" height="300" />
            <canvas id="canvas6" width="300" height="300" />
            <canvas id="canvas7" width="300" height="300" />
        </React.Fragment>
    );

};

export default App;