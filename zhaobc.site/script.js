/**
 * 域名动画
 */
function initTitleAnimation() {
  document.querySelector('.domain').style.animation = 'bounceOut 1s'
  document.querySelector('.domain').classList.add('bounceOut')
  //document.querySelector('.domain').style.animation = 'hide 1s linear';
  document.querySelector('.domain').classList.add('invisible')

  // 为zhao,b,c,site设置blink和translate动画
  document.querySelector('.zhaobc-site.zhao').style.animation =
    'blink-and-translate-zhao 1s ease 1.1s 1 forwards'
  document.querySelector('.zhaobc-site.b').style.animation =
    'blink-and-translate-b 1s ease 1.1s 1 forwards'
  document.querySelector('.zhaobc-site.c').style.animation =
    'blink-and-translate-c 1s ease 1.1s 1 forwards'
  document.querySelector('.zhaobc-site.site').style.animation =
    'blink-and-translate-site 1s ease 1.1s 1 forwards'

  // 上面动画结束后显示dever.site
  document.querySelector('.domain').style.animation =
    'show 0.3s linear 2.2s 1 forwards'

  // 恢复A developer's site
  setTimeout(function () {
    // document.querySelectorAll('.zhaobc-site').forEach(function() {
    // 	this.style.animation = 'bounceIn 1s';
    // });
    /* eslint-disable-next-line no-var */
    var items = document.querySelectorAll('.zhaobc-site')
    ;[].forEach.call(items, function (item) {
      item.style.animation = 'bounceIn 1s'
    })
  }, 2200)
}

document.body.onload = function () {
  setTimeout(initTitleAnimation(), 1000)
}
