const ShowImage: any = document.getElementById('ShowImage');

ShowImage.addEventListener('click', () => {
  
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