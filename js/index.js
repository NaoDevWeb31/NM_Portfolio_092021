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

const animationClasses = ['right-entry-animation', 'left-entry-animation', 'top-entry-animation', 'down-arrow-animation'];

// Create the observers
const trainingObserver = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        // Select the timelines
        var timelines = [];
        var targetedTimeline = elt => entry.target.querySelector(elt);
        var firstTimeline, secondTimeline, thirdTimeline, forthTimeline;
        timelines.push(
            (firstTimeline = targetedTimeline('.training-6')), 
            (secondTimeline = targetedTimeline('.training-5')), 
            (thirdTimeline = targetedTimeline('.training-4')), 
            (forthTimeline = targetedTimeline('.training-3')), 
            (fifthTimeline = targetedTimeline('.training-2')), 
            (sixthTimeline = targetedTimeline('.training-1')),
        );

        // Create handlers for the animations
        var topEntry = elt => elt.classList.add(animationClasses[2]);
        var sideEntry = (start, className) => {
            let i = start; // Start index of the loop
            while (i < timelines.length) {
                var elt = timelines[i];
                elt.classList.add(className); // Add a class to the element
                i += 2; // Get 1 in every 2 elements of the array
            }
        }
        var removeAnimations = (start, className1, className2) => {
            let i = start; // Start index of the loop
            while (i < timelines.length) {
                var elt = timelines[i];
                elt.classList.remove(className1, className2); // Remove classes to the element
                i += 2; // Get 1 in every 2 elements of the array
            }
        }

        // If the elements are visible for bigger viewports
        if (entry.isIntersecting && window.innerWidth > 991) {
            // Add the animation classes
            sideEntry(0, animationClasses[0]);
            sideEntry(1, animationClasses[1]);
            return; // if we added the classes, exit the function
        }
        // If the elements are visible for smaller viewports
        if (entry.isIntersecting && window.innerWidth <= 991) {
            // Add the animation class
            timelines.forEach(timeline => {
                topEntry(timeline);
            });
            return; // if we added the classes, exit the function
        }
        // We're not intersecting, so remove the classes!
        removeAnimations(0, animationClasses[0], animationClasses[2]);
        removeAnimations(1, animationClasses[1], animationClasses[2]);
    });
});
const portfolioObserver = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        const downArrowIcon = entry.target.querySelector('.fa-arrow-circle-down');
        // If the element is visible
        if (entry.isIntersecting) {
            downArrowIcon.classList.add(animationClasses[3]);
            return; // if we added the class, exit the function
        }
        // We're not intersecting, so remove the class!
        downArrowIcon.classList.remove(animationClasses[3]);
    });
});
// Tell the observers which element to track
trainingObserver.observe(document.querySelector('.main-timeline'));
portfolioObserver.observe(document.querySelector('#portfolio-description'));

// Allow the navbar links to monitor the scrolling
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