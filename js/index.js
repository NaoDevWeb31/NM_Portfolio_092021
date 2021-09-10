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

// Create the observer
const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        const firstTimeline = entry.target.querySelector('.training-2');
        const secondTimeline = entry.target.querySelector('.training-1');
        // If the elements are visible for bigger viewports
        if (entry.isIntersecting && window.innerWidth > 991) {
            // Add the animation classes
            firstTimeline.classList.add('right-entry-animation');
            secondTimeline.classList.add('left-entry-animation');
            return; // if we added the classes, exit the function
        }
        // If the elements are visible for smaller viewports
        if (entry.isIntersecting && window.innerWidth <= 991) {
            // Add the animation classes
            firstTimeline.classList.add('top-entry-animation');
            secondTimeline.classList.add('top-entry-animation');
            return; // if we added the classes, exit the function
        }
        // We're not intersecting, so remove the classes!
        firstTimeline.classList.remove('right-entry-animation');
        secondTimeline.classList.remove('left-entry-animation');
        firstTimeline.classList.remove('top-entry-animation');
        secondTimeline.classList.remove('top-entry-animation');
    });
});
// Tell the observer which element to track
observer.observe(document.querySelector('.main-timeline'));

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
