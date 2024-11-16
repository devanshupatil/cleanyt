function cleanYouTube() {
    // Remove ytd-rich-section-renderer elements
    const richSections = document.getElementsByTagName('ytd-rich-section-renderer');
    const richSectionsArray = Array.from(richSections);
    richSectionsArray.forEach(element => element.remove());

    // Remove Shorts links
    const shortsLinks = document.querySelectorAll('a[title="Shorts"]');
    shortsLinks.forEach(link => link.remove());

    // Return count of removed elements
    return {
        richSectionsRemoved: richSectionsArray.length,
        shortsLinksRemoved: shortsLinks.length,
        totalRemoved: richSectionsArray.length + shortsLinks.length
    };
}

// Run initial cleanup
cleanYouTube();

// Watch for dynamic content changes
const observer = new MutationObserver((mutations) => {
    cleanYouTube();
});

// Start observing the document with the configured parameters
observer.observe(document.body, {
    childList: true,
    subtree: true
});