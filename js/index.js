// Finding Unintended Body Overflow
var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
    document.querySelectorAll('*'),
    function(el) {
        if (el.offsetWidth > docWidth) {
        console.log(el);
        }
    }
);

const links = document.links;
window.addEventListener('scroll', function(e)  {
    for (let index = 0; index < links.length; index++) {
        const element = links[index];
        if (element.className === "nav-link active"){
            //Add pseudo-class "focus" to element with "nav-link active" class
            element.focus
        }
    }
});
