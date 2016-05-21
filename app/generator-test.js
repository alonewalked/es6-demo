/* generator test */
import "babel-polyfill";

let doHandel = (data) => {
    $('[data-elem="content-2"]').append(renderHtml(data));
};

let renderHtml = function(data) {
    var str =
    `<p class="ph">
        <span class="tz" style="width: 62.4%;"></span>
        ${data.text}
        <span class="dy bz pd">${data.state}</span>
     </p>`
     return str;
};

function* war(text) {
    console.log(text)
    doHandel({
        "text": text,
        "state": '完成'
    });
    yield setTimeout(()=>{
        doHandel({
            "text": '备粮',
            "state": '完成'
        });
    },100);
    yield setTimeout(()=>{
        doHandel({
            "text": '出兵',
            "state": '完成'
        });
    },200);
}

export function doGenerator() {
    let generator = war('发起战争');
    generator.next()
    generator.next()
    generator.next()
}