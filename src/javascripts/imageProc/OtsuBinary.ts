const OtsuBinary = (ImageData8: any, width: number, height: number) => {

    const length = width * height;

    let hist = new Array(256);
    for(let i=0; i<256; i++) hist[i]=0;

    for(let i=0; i<length; i++){
        hist[ImageData8[i]] += 1;
    }

    const thresh = getThreshold(hist, 256);
    //const thresh = 120;

    for(let i=0; i<length; i++){

        const r = ImageData8[i];

        let binary;

        if(r <= thresh){
            binary = 255;
        }else{
            binary = 0;
        } 

        ImageData8[i+0] = binary;
    }
    
}

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

export default OtsuBinary;