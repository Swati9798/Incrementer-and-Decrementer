let content=document.querySelector('#me');
const increment=()=>{
    let value =parseInt(content.innerText);
    value=value+1;
    content.innerText =value;

}
const decrement=()=>{
    let value =parseInt(content.innerText);
    value=value-1;
    content.innerText =value;
}
