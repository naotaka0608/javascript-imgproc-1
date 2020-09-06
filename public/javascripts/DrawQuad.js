const start = () =>{
    const canvas = document.getElementById('canvas');
    if(!canvas){
        console.log('Canvas要素の取得に失敗');
        return;
    }

    const context = canvas.getContext('2d');

    context.fillRect(70, 50, 250, 200);
}