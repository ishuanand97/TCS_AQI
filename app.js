function myFunction() {
    var x = document.getElementById("mySelect").value;
    let newval = (Math.random() * 100).toFixed(2);
    var newVal = newval / 100 * 180;
    document.getElementById("demo").innerHTML = newval;

    // gauge 2

    var dVal = newval;
    var newVal = dVal * 1.8 - 45;
    $('.circle-inner, .gauge-copy').css({
        'transform': 'rotate(' + newVal + 'deg)'
    });
    $('.gauge-copy').css({
        'transform': 'translate(-50%, -50%) rotate(' + dVal * 1.8 + 'deg)'
    });
    $('.percentage').text(dVal + ' %');

    if (dVal > 50) {
        if(document.querySelector('#clouds').children[0].classList.contains("cloud-w")) {
            var len = document.querySelector('#clouds').children.length;
            for (var i = 0; i < len; i++) {
                document.querySelector('#clouds').children[i].classList.toggle('cloud-w');
                document.querySelector('#clouds').children[i].classList.toggle('cloud-b');
            }

            var len = document.querySelector('.small-mountains').children.length;
            for (var i = 0; i < len; i++) {
                document.querySelector('.small-mountains').children[i].classList.toggle('tri-p');
                document.querySelector('.small-mountains').children[i].classList.toggle('tri-np');
            }

            var len = document.querySelector('.tall-mountains').children.length;
            for (var i = 0; i < len; i++) {
                document.querySelector('.tall-mountains').children[i].classList.toggle('tri2-p');
                document.querySelector('.tall-mountains').children[i].classList.toggle('tri2-np');
            }

            $('.landing').css("background"," #BBCCDD");
            $('.landing').css("background","linear-gradient( 158deg, rgba(190, 231, 232, 1) 0%, rgb(136, 163, 180) 55%)");
            document.querySelector('.ground').classList.toggle('ground-np');
            document.querySelector('.ground').classList.toggle('ground-p');

        }
    }


    if (dVal < 50) {
        if(document.querySelector('#clouds').children[0].classList.contains("cloud-b")) {
            var len = document.querySelector('#clouds').children.length;
            for (var i = 0; i < len; i++) {
                document.querySelector('#clouds').children[i].classList.toggle('cloud-w');
                document.querySelector('#clouds').children[i].classList.toggle('cloud-b');
            }
            var len = document.querySelector('.small-mountains').children.length;
            for (var i = 0; i < len; i++) {
                document.querySelector('.small-mountains').children[i].classList.toggle('tri-p');
                document.querySelector('.small-mountains').children[i].classList.toggle('tri-np');
            }

            var len = document.querySelector('.tall-mountains').children.length;
            for (var i = 0; i < len; i++) {
                document.querySelector('.tall-mountains').children[i].classList.toggle('tri2-p');
                document.querySelector('.tall-mountains').children[i].classList.toggle('tri2-np');
            }

            $('.landing').css("background","rgb(190, 231, 232)");
            $('.landing').css("background","linear-gradient( 158deg, rgba(190, 231, 232, 1) 0%, rgba(255, 212, 201, 1) 55%)");
            document.querySelector('.ground').classList.toggle('ground-np');
            document.querySelector('.ground').classList.toggle('ground-p');

        }
    }
}
