(function () {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var globalID;
    c.width = getWidth();
    c.height = getHeight();
    c.top = 0;
    c.left = 0;

    console.dir(c);
    var iconNames = ['java', 'c++', 'python', 'node'];
    var iconsDropped = 0, max = 5;
    var drops = [];
    for (var i = 0; i < iconNames.length; i++) {
        var image = new Image();
        image.src = "assets/images/iconfall/" + iconNames[i] + ".png";
    }

    pickRandom();
    function pickRandom() {
        var wait = Math.floor(Math.random() * 2500);
        setTimeout(pickRandom, wait);
        if (iconNames.length < 1 || iconsDropped >= max) {
            return;
        }
        var img = new Image();
        var index = Math.floor(Math.random() * iconNames.length);
        var name = iconNames[index];
        iconNames.splice(index, 1);
        img.onload = function () {
            drops.push({
                image: img,
                width: Math.floor(Math.random() * getWidth()),
                height: -50,
                name: name,
                speed: Math.random() + 2.5,
                cycle: 0
            });
            iconsDropped++;
        };
        img.src = "assets/images/iconfall/" + name + ".png";
    }

    function draw() {
        c.width = getWidth();
        c.height = getHeight() - c.offsetTop;
        clearCanvas();
        for (var i = 0; i < drops.length; i++) {
            var drop = drops[i];
            drop.height = drop.height + drop.speed;
            if (drop.height > getHeight() - c.offsetTop) {
                drop.cycle++;
                if (drop.cycle == 3) {
                    var name = drop.name;
                    drops.splice(i, 1);
                    iconNames.push(name);
                    iconsDropped--;
                    i--;
                    continue;
                } else {
                    drop.height = -50;
                    drop.width = Math.floor(Math.random() * getWidth());
                }
            }
            ctx.drawImage(drop.image, drop.width, drop.height, 50, 50);
        }

        globalID = requestAnimationFrame(draw);
    }

    globalID = requestAnimationFrame(draw);
    function clearCanvas() {
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.beginPath();
    }

    function getWidth() {
        if (self.innerWidth) {
            return self.innerWidth;
        }
        if (document.documentElement && document.documentElement.clientWidth) {
            return document.documentElement.clientWidth;
        }
        if (document.body) {
            return document.body.clientWidth;
        }
    }

    function getHeight() {
        if (self.innerHeight) {
            return self.innerHeight;
        }
        if (document.documentElement && document.documentElement.clientHeight) {
            return document.documentElement.clientHeight;
        }
        if (document.body) {
            return document.body.clientHeight;
        }
    }
})();