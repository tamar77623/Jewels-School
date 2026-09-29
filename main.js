let inp1 = document.getElementById('inp1');
let inp2 = document.getElementById('inp2');
let inp3 = document.getElementById('inp3');
let inp4 = document.getElementById('inp4');
let inp5 = document.getElementById('inp5');
let textarea = document.getElementById('textarea');
let btn = document.getElementById('btn');
let span1 = document.getElementById('span1');
function span1text(){
    setTimeout(() => {
        span1.innerText = '';
    }, 1700);
}
btn.onclick = function(){
    if(inp1.value === ""){
        span1.innerText = 'Please Enter your full name';
        span1text();
        return;
    }
    if(inp2.value === ""){
        span1.innerText = 'Please Phone Number';
        span1text();
        return;
    }
    if(inp3.value === ""){
        span1.innerText = 'Please your Email Address';
        span1text();
        return;
    }
    if(inp4.value === ""){
        span1.innerText = 'Enter Preferred Date';
        span1text();
        return;
    }
    if(inp5.value === ""){
        span1.innerText = 'Enter Preferred Time';
        span1text();
        return;
    }
    if(textarea.value === ""){
        span1.innerText = 'Enter Purpose of Meeting';
        span1text();
        return;
    }
    inp1.value = '';
    inp2.value = '';
    inp3.value = '';
    inp4.value = '';
    inp5.value = '';
    textarea.value = '';
    span1.innerText = 'The appointment has been booked';
    span1text();
}