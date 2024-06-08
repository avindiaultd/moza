const VIDEO = window.location.href;
const searchParams = new URL(VIDEO).searchParams;
const urlSearchParams = new URLSearchParams(searchParams);
const res = Array.from(urlSearchParams.entries());
const resObject = Object.fromEntries(res);
var equest = res;
equest = equest.toString().replace("id,", "");
console.log(equest);
alert(equest);