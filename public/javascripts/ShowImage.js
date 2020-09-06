const ShowImage = () =>{
    const canvas = document.getElementById('canvas1');
    if(!canvas){
        console.log('Canvas要素の取得に失敗');
        return;
    }

    const context = canvas.getContext('2d');

    const image = new Image();
    image.onload = () => {
        context.drawImage(image, 0, 0);
    }

    image.src = "../images/lenna.jpeg"

}