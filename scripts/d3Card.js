d3.json('scripts/projData.json').then(jsonData => { 
    const data = jsonData.projects; // Extract projects array
    
    // Generate cards using D3
    const projCards = d3.select("#deckHold")
        .selectAll(".projCard")
        .data(data)
        .enter()
        .append("div")
        .attr("class", "projCard")
        .attr("mobile-src", d => d.mobileSrc)
        .attr("desk-src", d => d.deskSrc)
        .style("background-image", d => `url('${d.mobileSrc}')`);

    // Title section
    projCards.append("div")
        .attr("class", "projTitle")
        .append("h3")
        .text(d => d.title);

    // Expanded content container
    const expandedContent = projCards.append("div")
        .attr("class", "expanded-content")
        .style("display", "none"); // Initially hide expanded content

    // Left panel
    const leftPanel = expandedContent.append("div")
        .attr("class", "left-panel");

    // Skills section
    const projSkills = leftPanel.append("div")
        .attr("class", "projSkills");

    // Add skills spans
    projSkills.each(function(d) {
        d3.select(this)
            .selectAll("span")
            .data(d.skills)
            .enter()
            .append("span")
            .text(skill => skill);
    });

    // Right panel
    const rightPanel = expandedContent.append("div")
        .attr("class", "right-panel");

    // Description section
    rightPanel.append("div")
        .attr("class", "proj-description")
        .append("p")
        .text(d => d.description);

    // Link section
    rightPanel.append("div")
        .attr("class", "proj-link")
        .append("a")
        .attr("href", d => d.link)
        .attr("target", "_blank")
        .html('View on GitHub <i class="fab fa-github"></i>'); // Use .html() to insert the icon


    // Initialize jQuery event handlers after D3 rendering
    $(document).ready(function() {

        if(isPortrait()){
            $(".projCard").on("click", function(){
                // Use the data attribute or find the link in the current card
                const link = $(this).find('.proj-link a').attr('href');
                window.open(link, '_blank');
            });
            return;
        }
        
        $(".projCard").on("click", function() {
            var $this = $(this);
            var portraitWidth = 15 * parseFloat(getComputedStyle(document.documentElement).fontSize);
            var landscapeWidth = 42 * parseFloat(getComputedStyle(document.documentElement).fontSize);
           
            // Use a data attribute to track the current state
            if (!$this.data('isExpanded')) {
                // Expand to landscape mode
                $this.data('isExpanded', true);
                $this.animate({ width: landscapeWidth + "px" }, 300, function() {
                    $this.find(".expanded-content").fadeIn(200);
                });
                // Change background image to desktop version
                $this.css("background-image", `url('${$this.attr("desk-src")}')`);
            } else {
                // Return to portrait mode
                $this.data('isExpanded', false);
                $this.find(".expanded-content").fadeOut(200, function() {
                    $this.animate({ width: portraitWidth + "px" }, 300);
                });
                // Change back to mobile background
                $this.css("background-image", `url('${$this.attr("mobile-src")}')`);
            }
        });

        $(".projCard").on("mouseleave", function() {
            var $this = $(this);
            var portraitWidth = 15 * parseFloat(getComputedStyle(document.documentElement).fontSize);
           
            // Check the data attribute instead of width
            if ($this.data('isExpanded')) {
                $this.data('isExpanded', false);
                $this.find(".expanded-content").fadeOut(200, function() {
                    $this.animate({ width: portraitWidth + "px" }, 300);
                });
                // Change back to mobile background
                $this.css("background-image", `url('${$this.attr("mobile-src")}')`);
            }
        });
    });

}).catch(error => {
    console.error('Error loading JSON:', error);
});

function isPortrait(){
    let size = {"x":screen.width, "y":screen.height };
    return size.x > size.y ? false : true;
}
