let tv = document.querySelector('.tv-show img');
function imgChange(i) {
    let imgurl = '';
    switch (i) {
        case 1:
            imgurl = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/blue-planet.jpg';
            break;
        case 2:
            imgurl = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/deadpool.jpg';
            break;
        case 3:
            imgurl = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/gravity.jpg';
            break;
        case 4:
            imgurl = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/good-will-hunting.jpg';
            break;
        case 5:
            imgurl = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/cnn.jpg';
            break;
        case 6:
            imgurl = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/koyaanisqatsi.jpg';
            break;
        case 7:
            imgurl = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/parts-unknown.jpg';
            break;
        case 8:
            imgurl = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/star-wars-solo.jpeg';
            break;
        case 9:
            imgurl = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/stranger-things.jpg';
            break;
    }
    tv.src = imgurl;
    tv.alt = `image ${i}`
}

//------------Lab3------------

let stopLight = document.getElementById("stopLight")
let slowLight = document.getElementById("slowLight")
let goLight = document.getElementById("goLight")

function traffic(i) {
    switch (i) {
        case 1:
            stopLight.style.backgroundColor = "red"
            slowLight.style.backgroundColor = "#111111"
            goLight.style.backgroundColor = "#111111"
            break;
        case 2:
            slowLight.style.backgroundColor = "yellow"
            stopLight.style.backgroundColor = "#111111"
            goLight.style.backgroundColor = "#111111"
            break;
        case 3:
            goLight.style.backgroundColor = "green"
            stopLight.style.backgroundColor = "#111111"
            slowLight.style.backgroundColor = "#111111"
            break;
    }

}