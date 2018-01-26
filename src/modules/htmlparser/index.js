/**
 * HTML Parser <Promise>
 * @author Richard Abear <owchzzz@gmail.com>
 * 
 * @param {String} url Is the url to be scraped
 * @returns {Object|Array}
 */

 
module.exports = (url) => {
    return new Promise((resolve, reject) => {
         // define scraper url
        var parseurl = "//asset.locusbuilder.com/crawl.php?url=";

        // define default protocol
        var defaultprotocol = "http://";
        
        // Check if jquery is defined
        if (! window.jQuery) {
            throw '[htmlscraper] can not detect jQuery';
        }
        
        // Check if url does not contain a protocol
        if(! (url.indexOf('http') > -1 && url.indexOf('https') > -1) ) {
            console.log('[htmlscraper] Request Protocol (http|https) not defined. defaulting to HTTP');
            url = 'http://'+url;
        }

        // Define url to be parsed
        var parsedurl = parseurl.concat(url);

        // Define Scope
        var self = this;

        self.images = [];
        var contents = jQuery.get(parsedurl, (data) => {
            
            let $html = $(data).find('img').each(function() {
                self.images.push($(this).attr('src'));
            });

            resolve(self.images);
        });

    })
   
}