setTimeout(function () {
    siteWelcome.classList.remove('active')
}, 1000)

window.onscroll = function (xx) {
    if (window.scrollY > 0) {
        topNavBar.classList.add('sticky')
    } else {
        topNavBar.classList.remove('sticky')
    }
}

let liTags = document.querySelectorAll('nav.menu>ul>li')
for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (x) {
        x.currentTarget.classList.add('active')
    }
    liTags[i].onmouseleave = function (x) {
        x.currentTarget.classList.remove('active')
    }
}

let aTags = document.querySelectorAll('nav.menu>ul>li>a')
for (let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function (x) {
        x.preventDefault()
        let a = x.currentTarget
        let href = a.getAttribute('href') //'#siteAbout'
        let element = document.querySelector(href)
        let top = element.offsetTop

        function animate(time) {
            requestAnimationFrame(animate);
            TWEEN.update(time);
        }
        requestAnimationFrame(animate);
        let currentTop = window.scrollY
        let targetTop = top - 80
        let s = targetTop - currentTop
        let t = Math.abs((s / 100) * 300)
        if (t > 500) {
            t = 500
        }
        var coords = {
            y: currentTop
        };
        var tween = new TWEEN.Tween(coords)
            .to({
                y: targetTop
            }, t)
            .easing(TWEEN.Easing.Cubic.InOut)
            .onUpdate(function () {
                window.scrollTo(0, coords.y)
            })
            .start();
    }
}