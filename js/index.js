window.onload = function () {
    let timer = document.getElementById('timer');
    let closeGo = document.getElementById('close-go');
    let ulList = document.querySelector('.list ul');
    let li = '';
    let num = 20;
    let list = [{
            name: '<span>【视频】</span>阿顺-AV在线观看区',
            url: 'http://xjb1990.com'
        },
        {
            name: '<span>【小说】</span>小鸡吧短文小说区',
            url: 'http://ashun1.com'
        }
    ]

    // 倒计时
    let clearTime = setInterval(function () {
        num--;
        timer.innerHTML = num;
        console.log(1)
        if (num === 0) {
            window.location.href = list[0].url;
        }
    }, 1000)

    // 关闭跳转
    closeGo.onclick = function () {
        clearInterval(clearTime);
        this.parentNode.parentNode.removeChild(this.parentNode);
    }

    // 判断是不是手机端
    let ua = navigator.userAgent;
    let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    let isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
    let isAndroid = ua.match(/(Android)\s+([\d.]+)/);
    let isMobile = isIphone || isAndroid;
    // 添加list列表
    list.forEach(function (item, idx) {
        li = document.createElement('li');
        li.innerHTML = item.name;
        if (idx === 0) li.setAttribute('class', 'active')
        ulList.appendChild(li);
        li.onclick = function () {
            if (isMobile) {
                window.location.href = item.url;
            } else {
                if (clearTime) {
                    clearInterval(clearTime);
                }
                window.open(item.url);
            }
            
        }
    })
}