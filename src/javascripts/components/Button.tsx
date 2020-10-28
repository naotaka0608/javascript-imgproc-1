import React, { useEffect, useState } from 'react'

const Button = (props: any) => {

    const onShowImage = () =>{

        const canvas = document.getElementById('canvas1');
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

    const onReverse = () => {

    }

    const onGrayScale = () => {
        
    }

    return(    
        <React.Fragment>
            <button onClick={onShowImage}> 表示 </button>
            <button onClick={onReverse}> 反転 </button>
            <button onClick={onGrayScale}> グレースケール </button>
        </React.Fragment>
    );

};

export default Button;