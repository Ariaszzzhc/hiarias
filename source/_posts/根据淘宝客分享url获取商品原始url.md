---
title: 根据淘宝客分享url获取商品原始url
date: 2019-03-20 14:16:18
tags:
---

淘宝客的分享链接一般是这个样子的
`https://s.click.taobao.com/fyclPEw`
当我们点击这个链接的时候，页面便会跳转到商品的购买页面
那么这个链接到底是如何跳转的

<!-- more -->

我们用Postman对这个链接发起一次GET请求，发现获取到的是一段HTML
经过一些分析，发现重要的部分是以下这段代码
```js
    var schema = (("https:" == document.location.protocol) ? "https" : "http");
    var qs = location.search.split("?")[location.search.split("?").length-1].split("&");
    qso = {};
    for (var i=0; i<qs.length; i++){
        if (qs[i]!="") {
            var tmpa = qs[i].split("=");
            qso[tmpa[0]] = tmpa[1] ? tmpa[1] : "";
        }
    }
    
    if(!qso.tu){
        exit;
    } 
    
    var jump_url;
    if (qso.tu.indexOf("https") === 0){
        jump_url = qso.tu.substr(5);
    } else if(qso.tu.indexOf("http") === 0){
        jump_url = qso.tu.substr(4);
    }else{
        exit;
    }
    
    var jump_address = schema+jump_url;
    var real_jump_address = unescape(jump_address);
```
从中可以得知，这段代码从url的参数中获取了tu参数，然后这个tu参数便是我们要跳转过去的url
但是我们的短链接中并没有tu参数

`这个短链接一定是先进行了一次302跳转！`

我们把Postman的automatically follow redirects关闭, 再次对这个短链接发起一次GET请求
![](/images/9.png)

果不其然出现了302跳转，而且跳转的Location带了tu参数，我们先把这个链接称为url1
```url
https://s.click.taobao.com/t_js?tu=https%3A%2F%2Fs.click.taobao.com%2Ft%3Fe%3
Dm%253D2%2526s%253DnhNoXlYDJ6McQipKwQzePOeEDrYVVa64LKpWJ%252Bin0XLjf2vlNIV67ju
A6rpLUQ4w2Y%252Bdtp35ZprbPz8g4i4Kl3MDrw4GwnL23yCT6pTv0rODizGt7dl%252FxSzE%252B
P65Y439i%252FHJ9M%252B%252FmSV%252FcoXtvcU3etmfAVnj%252BHQIgbfyTJIChEjGDF1NzTQ
oPw%253D%253D%26pvid%3D10_60.177.187.154_638_1552630906084%26sc%3DfyclPEw%26re
f%3D%26et%3DX83pPPKZvpkccYSGgdHHwq2RjcL2cq%252BC
```

从这段url可以得知tu参数的内容便是我们下一次要跳转的url
我们先用unescape函数模拟处理下这个参数内容，得到的是这样的url，称为url2

```url
https://s.click.taobao.com/t?e=m%3D2%26s%3DnhNoXlYDJ6McQipKwQzePOeEDrYVVa64LK
pWJ%2Bin0XLjf2vlNIV67juA6rpLUQ4w2Y%2Bdtp35ZprbPz8g4i4Kl3MDrw4GwnL23yCT6pTv0rOD
izGt7dl%2FxSzE%2BP65Y439i%2FHJ9M%2B%2FmSV%2FcoXtvcU3etmfAVnj%2BHQIgbfyTJIChEjG
DF1NzTQoPw%3D%3D&pvid=10_60.177.187.154_638_1552630906084&sc=fyclPEw&ref=&et=X
83pPPKZvpkccYSGgdHHwq2RjcL2cq%2BC
```

那我们再用Postman对这个链接GET一下，看看能获得什么东西
结果发现还是一个302跳转，但是跳转的Location还是url1
看来是发请求的时候少带了什么东西
细心想一下，既然是跳转的话，那么浏览器在请求的时候会在Headers中加入Referer的信息用来表示从哪里跳转过来
那么这里应该是加入了一个对Referer头的检测
那我们再次请求url2，同时headers中加入Referer，内容为url1
![](/images/10.png)
可以看到，还是一次302的跳转，但是这次的Location已经是淘宝商品的url了！

接下来我们用python实现下
```python
import requests
import urllib

shared_url = "https://s.click.taobao.com/fyclPEw"

_refer = requests.get(shared_url).url  # url1

referred_url = urllib.parse.unquote(_refer.split("tu=")[1])  # url2

final_url = requests.get(referred_url, headers={"Referer": _refer}).url

print(final_url)
```

![](/images/11.png)

Nice!
