import { Promise } from 'es6-promise';

let renderHtml = function(data) {
    var str = 
    `<p class="ph">
        <span class="tz" style="width: 62.4%;"></span>
        ${data.text}
        <span class="dy bz pd">${data.state}</span>
     </p>`
     return str;
};

let p1 = ()=> {
    let _p = new Promise((resolve)=>{
        let _d = {
            text: '备粮',
            state: '完成'
        };
        setTimeout(()=>{
            doHandel(_d);
            resolve(_d);
        },100);
    });
    return _p;
};

let p2 = (before)=> {
    console.log(before);
    let _p = new Promise((resolve)=>{
        let _d = {
            text: '出兵',
            state: '完成'
        };
        setTimeout(()=>{
            doHandel(_d);
            resolve(_d);
        },200)
    });
    return _p;
};

let doHandel = (data) => {
    $('[data-elem="content-1"]').append(renderHtml(data));
};

export function doPromise() {
    p1()
    .then(p2)
    .then((result)=>{
        console.log(result)
    })
}