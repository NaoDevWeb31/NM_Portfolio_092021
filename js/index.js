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

// Create the observers
const trainingObserver = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        const firstTimeline = entry.target.querySelector('.training-4');
        const secondTimeline = entry.target.querySelector('.training-3');
        const thirdTimeline = entry.target.querySelector('.training-2');
        const forthTimeline = entry.target.querySelector('.training-1');
        // If the elements are visible for bigger viewports
        if (entry.isIntersecting && window.innerWidth > 991) {
            // Add the animation classes
            firstTimeline.classList.add('right-entry-animation');
            secondTimeline.classList.add('left-entry-animation');
            thirdTimeline.classList.add('right-entry-animation');
            forthTimeline.classList.add('left-entry-animation');
            return; // if we added the classes, exit the function
        }
        // If the elements are visible for smaller viewports
        if (entry.isIntersecting && window.innerWidth <= 991) {
            // Add the animation classes
            firstTimeline.classList.add('top-entry-animation');
            secondTimeline.classList.add('top-entry-animation');
            thirdTimeline.classList.add('top-entry-animation');
            forthTimeline.classList.add('top-entry-animation');
            return; // if we added the classes, exit the function
        }
        // We're not intersecting, so remove the classes!
        firstTimeline.classList.remove('right-entry-animation');
        secondTimeline.classList.remove('left-entry-animation');
        thirdTimeline.classList.remove('right-entry-animation');
        forthTimeline.classList.remove('left-entry-animation');
        firstTimeline.classList.remove('top-entry-animation');
        secondTimeline.classList.remove('top-entry-animation');
        thirdTimeline.classList.remove('top-entry-animation');
        forthTimeline.classList.remove('top-entry-animation');
    });
});
const portfolioObserver = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        const downArrowIcon = entry.target.querySelector('.fa-arrow-circle-down');
        // If the element is visible
        if (entry.isIntersecting) {
            downArrowIcon.classList.add('down-arrow-animation');
            return; // if we added the class, exit the function
        }
        // We're not intersecting, so remove the class!
        downArrowIcon.classList.remove('down-arrow-animation');
    });
});
// Tell the observers which element to track
trainingObserver.observe(document.querySelector('.main-timeline'));
portfolioObserver.observe(document.querySelector('#portfolio-description'));

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

// Protect my email
function decode(cryptedHref) {
    return cryptedHref.replace(/[a-zA-Z]/g, function(c){
        return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13)? c : c - 26);
    })
};
var emailLink = document.getElementById("email-link");
function openMailer(element) {
    var decryptedHref = decode("znvygb:anbzv.znatb@tznvy.pbz?fhowrpg=AZ%20r-Cbegsbyvb%20%7P%20Pbagnpgre%20nh%20fhwrg%20qr%20...");
    element.setAttribute("href", decryptedHref);
    element.setAttribute("onclick", "");
    setTimeout(function(){
        emailLink.setAttribute("href", " ");
    }, 500)
};
// Handle icons for email
var emailIcon = document.getElementById("email-icon");
emailLink.addEventListener("click", function() {
    emailIcon.classList.replace("fa-envelope", "fa-envelope-open")
    setTimeout(function(){
        emailIcon.classList.replace("fa-envelope-open", "fa-envelope")
    }, 2000)
})