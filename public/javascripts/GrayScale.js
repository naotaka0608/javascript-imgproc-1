const GrayScale = () =>{
    const canvas = document.getElementById('canvas2');
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

            const r = pixel[i+0];
            const g = pixel[i+1];
            const b = pixel[i+2];

            const gray = 0.30 * r + 0.59 * g + 0.11 * b;

            pixel[i+0] = gray;
            pixel[i+1] = gray;
            pixel[i+2] = gray;
            pixel[i+3] = pixel[i+3];
        }
        context.putImageData(imageData, 0, 0);
    };
}