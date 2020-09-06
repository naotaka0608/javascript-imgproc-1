const Reverse = () =>{
    const canvas = document.getElementById('canvas3');
    if(!canvas){
        console.log('Canvas要素の取得に失敗');
        return;
    }

    const context = canvas.getContext('2d');

    const image = new Image();

    image.src = "../images/lenna.jpeg"

    image.onload = () => {
        context.drawImage(image, 0, 0);

        const imageData = context.getImageData(0, 0, image.width, image.height);

        const length = imageData.data.length;
        const pixel = imageData.data;

        for(let i=0; i<length; i+=4){
            pixel[i+0] = 255 - pixel[i+0];
            pixel[i+1] = 255 - pixel[i+1];
            pixel[i+2] = 255 - pixel[i+2];
        }
        context.putImageData(imageData, 0, 0);
    };


}