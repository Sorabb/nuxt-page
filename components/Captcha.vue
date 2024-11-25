<template>
    <canvas ref="canvasRef" height='32px' width='100%' @click="refresh" style="display: block"></canvas>
</template>
<script setup>
import { ref } from 'vue';
const code = defineModel('code');
const setting = {
    contentWidth: 100,
    contentHeight: 32,
    codeLength: 4,
    backgroundColorMin: 180,
    backgroundColorMax: 240,
    fontSizeMin: 25,
    fontSizeMax: 30,
    colorMin: 50,
    colorMax: 160,
    lineColorMin: 40,
    lineColorMax: 180,
    dotColorMin: 0,
    dotColorMax: 255,
    dotNum: 30
};
const words = '1234567890';
const canvasRef = ref(null);

const drawPic = (code) => {
    const ctx = canvasRef.value.getContext('2d');
    ctx.fillStyle = randomColor(
        setting.backgroundColorMin,
        setting.backgroundColorMax
    );
    ctx.strokeStyle = randomColor(
        setting.backgroundColorMin,
        setting.backgroundColorMax
    );
    ctx.fillRect(0, 0, setting.contentWidth, setting.contentHeight);
    ctx.strokeRect(0, 0, setting.contentWidth, setting.contentHeight);
    for (let i = 0; i < code.length; i++) {
        drawText(ctx, code[i], i);
    }
    drawLine(ctx);
    drawDot(ctx);
};
const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};
const randomColor = (min, max) => {
    const r = randomNum(min, max);
    const g = randomNum(min, max);
    const b = randomNum(min, max);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
};
const drawText = (ctx, txt, i) => {
    ctx.fillStyle = randomColor(setting.colorMin, setting.colorMax);
    ctx.font =
        randomNum(setting.fontSizeMin, setting.fontSizeMax) + 'px SimHei';
    ctx.textBaseline = 'alphabetic';
    const x = (i + 1) * (setting.contentWidth / (setting.codeLength + 1));
    const y = randomNum(setting.fontSizeMax, setting.contentHeight - 12);
    const deg = randomNum(-45, 45);
    ctx.translate(x, y);
    ctx.rotate((deg * Math.PI) / 180);
    ctx.fillText(txt, 0, 0);
    ctx.rotate((-deg * Math.PI) / 180);
    ctx.translate(-x, -y);
};
const drawLine = (ctx) => {
    for (let i = 0; i < 2; i++) {
        ctx.strokeStyle = randomColor(
            setting.lineColorMin,
            setting.lineColorMax
        );
        ctx.beginPath();
        ctx.moveTo(
            randomNum(0, setting.contentWidth),
            randomNum(0, setting.contentHeight)
        ); //设置起点x,y
        ctx.lineTo(
            randomNum(0, setting.contentWidth),
            randomNum(0, setting.contentHeight)
        ); //绘制直线 x,y 一条当前位置到x,y点的直线
        ctx.stroke();
    }
};
const drawDot = (ctx) => {
    for (let i = 0; i < setting.dotNum; i++) {
        ctx.fillStyle = randomColor(
            setting.dotColorMin,
            setting.dotColorMax
        );
        ctx.beginPath();
        ctx.arc(
            randomNum(0, setting.contentWidth),
            randomNum(0, setting.contentHeight),
            1,
            0,
            2 * Math.PI
        );
        ctx.fill();
    }
};
const refresh = () => {
    let ocode = '';
    for (let i = 0; i < setting.codeLength; i++) {
        ocode += words[Math.floor(Math.random() * words.length)];
    }
    process.env.NEXT_PUBLIC_ENV == 'development' && console.log(ocode);
    code.value = ocode;
    drawPic(ocode);
};
onMounted(() => {
    refresh();
})

</script>