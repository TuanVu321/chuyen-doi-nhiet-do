function convert() {
let f = document.getElementById('data').value;
let c=0;
c=(f-32)/1.8;
document.getElementById('c').innerHTML=c;
}