
let myWindow;
const width = document.getElementById('width');
const height = document.getElementById('height');

width.innerHTML = "Window inner width is : " + window.innerWidth;
height.innerHTML = "Window inner height is : " + window.innerHeight;

const openWindow = () => {
    myWindow = window.open("https://google.com");
};

const closeWindow = () => {
    console.log('Hello')
    myWindow.close();
};



// select DOM Element
const widthh = document.getElementById('width');
const heightt = document.getElementById('height');

const avaiWidth = document.getElementById('avaiWidth');
const avaiHeight = document.getElementById('avaiHeight');

const pixelDepth = document.getElementById('pixelDepth');
const colorDepth  = document.getElementById('colorDepth');

widthh.innerHTML = "screen width: " + screen.width;
heightt.innerHTML = "screen height: " + screen.height;

avaiWidth.innerHTML = "screen avaiWidth: " + screen.availWidth;
avaiHeight.innerHTML ="screen avaiHeight: " + screen.availHeight;

pixelDepth.innerHTML = "screen pixelDepth: " + screen.pixelDepth;
colorDepth.innerHTML = "screen colorDepth: " + screen.colorDepth;


// select DOM Element
const href = document.getElementById('href');
const hostname = document.getElementById('hostname');
const pathname = document.getElementById('pathname');
const protocol = document.getElementById('protocol');
const port = document.getElementById('port');
const origin = document.getElementById('origin');

href.innerHTML = 'Window href: ' + location.href;
hostname.innerHTML = 'Widow hostname: ' + location.hostname;
pathname.innerHTML = 'Window pathname: ' + location.pathname;
protocol.innerHTML = 'Window protocol: ' + location.protocol;
port.innerHTML = 'Window port: ' + location.port; 
origin.innerHTML = 'Window origin: ' + location.origin; 


const loadW3s = () => {
    location.assign('https://www.w3schools.com');
}


const appName = document.getElementById('appName');
const appCodeName = document.getElementById('appCodeName');
const platform = document.getElementById('platform');
const coockieEnabled = document.getElementById('coockieEnabled');
const product = document.getElementById('product');
const appVersion = document.getElementById('appVersion');
const userAgent = document.getElementById('userAgent');
const language = document.getElementById('language');
const onLine = document.getElementById('onLine');
const javaEnabled = document.getElementById('javaEnabled');

//show window.navigator object property values
appName.innerHTML = "Navigator AppName: " + navigator.appName;
appCodeName.innerHTML = "Navigator AppName: " + navigator.appCodeName;
platform.innerHTML = "Navigator AppName: " + navigator.platform;
coockieEnabled.innerHTML = "Navigator AppName: " + navigator.coockieEnabled;
product.innerHTML = "Navigator AppName: " + navigator.product;
appVersion.innerHTML = "Navigator AppName: " + navigator.appVersion;
userAgent.innerHTML = "Navigator AppName: " + navigator.userAgent;
language.innerHTML = "Navigator AppName: " + navigator.language;
onLine.innerHTML = "Navigator AppName: " + navigator.onLine;
javaEnabled.innerHTML = "Navigator AppName: " + navigator.javaEnabled();