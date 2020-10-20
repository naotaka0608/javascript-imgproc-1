// C言語で学ぶ実践画像処理入門 P113

export class FeatureExtra
{

    private labelCnt: number = 0;
    private L_BASE: number = 100;

    public Labeling = (imageData8: Array<number>[], imageData8_labeling: Array<number>[], width: number, height: number) => {
        let label: number = 0;

        for(let i = 0; i < height; i++ ){
            for(let j = 0; j < width; j++){
                imageData8_labeling[i][j] = imageData8[i][j];
            }
        }

        label = this.L_BASE;

        for(let i = 0; i < height; i++ ){
            for(let j = 0; j < width; j++){
                if(imageData8_labeling[i][j] === 255){
                    if(label >= 255){
                        return -1;
                    }
                
                    this.labelset(imageData8_labeling, width, height, j, i, label);
                    label++;
                }
            }
        }

        this.labelCnt = label - this.L_BASE;
        return 0;
    }

    public labelset = (imageData8_labeling: Array<number>[],　width: number, height: number, xs: number, ys: number, label: number) => {
        
        let cnt: number = 0;
        let im, ip, jm, jp: number;

        imageData8_labeling[ys][xs] = label;
        
        for(;;){
            cnt = 0;
            for(let i = 0; i < height; i++ ){
                for(let j = 0; j < width; j++){
                    if(imageData8_labeling[i][j] === label){
                        im = i - 1; ip = i + 1; jm = j - 1; jp = j + 1;
                        if(im < 0) im = 0;
                        if(ip >= height) ip = height - 1;
                        if(jm < 0) jm = 0;
                        if(jp >= width) jp = width -1;

                        if(imageData8_labeling[i][jp] === 255){
                            imageData8_labeling[i][jp] = label;
                            cnt++;
                        }
                        if(imageData8_labeling[im][jp] === 255){
                            imageData8_labeling[im][jp] = label;
                            cnt++;
                        }
                        if(imageData8_labeling[im][j] === 255){
                            imageData8_labeling[im][j] = label;
                            cnt++;
                        }
                        if(imageData8_labeling[im][jm] === 255){
                            imageData8_labeling[im][jm] = label;
                            cnt++;
                        }
                        if(imageData8_labeling[i][jm] === 255){
                            imageData8_labeling[i][jm] = label;
                            cnt++;
                        }
                        if(imageData8_labeling[ip][jm] === 255){
                            imageData8_labeling[ip][jm] = label;
                            cnt++;
                        }
                        if(imageData8_labeling[ip][j] === 255){
                            imageData8_labeling[ip][j] = label;
                            cnt++;
                        }
                        if(imageData8_labeling[ip][jp] === 255){
                            imageData8_labeling[ip][jp] = label;
                            cnt++;
                        }
                   }
                }
            }
            if(cnt === 0) break;
        }
    }

    public GetLabelCnt = () => this.labelCnt;
}