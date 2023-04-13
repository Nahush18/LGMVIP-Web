let btn=Array.from(document.getElementsByClassName('button'));
let dis=document.getElementById('display');

btn.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case '=':
                try
                {
                    dis.innerText=eval(dis.innerText);
                } catch
                {
                    dis.innerText="ERR!!! Enter valid equation."
                }
                break;
            case 'C':
                dis.innerText='';
                break;
            case '←':
                if (dis.innerText){
                   dis.innerText=dis.innerText.slice(0, -1);
                }
                break;
            default:
                dis.innerText=dis.innerText+e.target.innerText;
        }
    });
});