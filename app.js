function myFunction() {
    var x = document.getElementById("mySelect").value;
    let newval = (Math.random() * 100).toFixed(2);
    var newVal = newval / 100 * 180;
    document.getElementById("demo").innerHTML = newval;
    $('.gauge--3 .semi-circle--mask').attr({
        style: 'transform: rotate(' + newVal + 'deg);'
    });


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
}