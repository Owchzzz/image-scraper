
let htmlparser = require('modules/htmlparser');
let async = require('async');
module.exports = (opts) => {
    if(! window.jQuery)
        throw '[imagescraper] Requires JQuery';

    if(! opts.url)
        throw '[imagescraper] URLS not defined';
    
    return new Promise((resolve, reject) => {
        var images = htmlparser(opts.url).then((val) =>{
            resolve({images: val})
        });
    });
    
    
    

    
}