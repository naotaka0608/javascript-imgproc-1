const OtsuBinary: any = document.getElementById('OtsuBinary');

OtsuBinary.addEventListener('click', () => {
  
    const canvas : HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas4');
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

        const width = imageData.width;
        const height = imageData.height;
        const length = imageData.data.length;
        const pixel = imageData.data;

        let hist = new Array(256);
        for(let i=0; i<256; i++) hist[i]=0;

        for(let i=0; i<length; i+=4){

            const r = pixel[i+0];
            const g = pixel[i+1];
            const b = pixel[i+2];

            const gray = Math.round(0.30 * r + 0.59 * g + 0.11 * b);

            pixel[i+0] = gray;
            pixel[i+1] = gray;
            pixel[i+2] = gray;
            pixel[i+3] = pixel[i+3];

            hist[gray] += 1;
        }

        const thresh = getThreshold(hist, 256);
        //const thresh = 120;

        for(let i=0; i<length; i+=4){

            const r = pixel[i+0];

            let binary;

            if(r <= thresh){
                binary = 255;
            }else{
                binary = 0;
            } 

            pixel[i+0] = binary;
            pixel[i+1] = binary;
            pixel[i+2] = binary;
            pixel[i+3] = pixel[i+3];
        }

        context.putImageData(imageData, 0, 0);
    };
  
}, false);


const getThreshold = (hist: any, n: any) => {
    let max = (1000.0);
    let thresh = 0;

    let sa, sb, da, db;
    let ma, mb, mt;
    let wa, wb, wt;
    let kai;

    for(let i=1; i<n-1; i++){
        da = 0;
        sa = 0;
        for(let j=0; j<i; j++){
            da += (hist[j] * j);
            sa += hist[j];
        }

        db = 0;
        sb = 0;
        for(let j=i; j<n; j++){
            db += (hist[j] * j);
            sb += hist[j];
        }

        if(sa != 0.0){
            ma = da / sa;
        }else{
            ma = 0.0;
        }

        if(sb != 0.0){
            mb = db / sb;
        }else{
            mb = 0.0;
        }

        mt = (da+db) / (sa+sb);
        wa = sa / (sa+sb);
        wb = sb / (sa+sb);
        kai = wa * (ma-mt) * (ma-mt) + ( wb * (mb-mt) * (mb-mt) );
        if(max<kai){
            max = kai;
            thresh = i;
        }
    }
    return thresh;
}