// Initialize 'Fancybox' Plugin
$(document).ready(function(){
    $(".fancybox").fancybox();
});

// Searchbar Handler
$(function(){
    
    var searchField = $('#query');
    
    var icon = $('#search-btn');
    
    // Focus Event Handler
    $(searchField).on('focus', function(){
       $(this).animate({
           width: '100%'
       }, 400);
       $(icon).animate({
           right: '10px'
       }, 400);
    });
    
    
    // Blur Event Handler
    $(searchField).on('blur', function(){
       if(searchField.val() == ''){
           $(searchField).animate({
               width: '45%'
           }, 400, function(){});
           $(icon).animate({
               right: '360px'
           }, 400, function(){});
       }
    });
    
    
    // We need to not actually submit the form
    $('#search-form').submit(function(e){
        e.preventDefault(); // Prevent the default behavior of the form
    });
    
});


// function invokes on submit button
function search() {
    // Clear Results
    $('#results').html('');
    $('#buttons').html('');
    
    // Get Form input
    var query = $('#query').val();
    
    
    // Run GET request on API
    $.get(
        "https://www.googleapis.com/youtube/v3/search",{
            // Options
            part: 'snippet, id',
            q: query,
            type: 'video',
            key: 'AIzaSyBCCM-eDg1a6_qOOMfKwyf-K2tb7zKRCi4'},
            function(data){ // Retreiving data from google by above query
                var nextPageToken = data.nextPageToken;
                var prevPageToken = data.prevPageToken;
            
                console.log(data);
            
                $.each(data.items, function(i, item){
                   // Get output
                    var output = getOutput(item);
                    
                    // Display results
                    $('#results').append(output);
                    
                });
                
                var buttons = getButtons(prevPageToken, nextPageToken);
                
                // Display Buttons
                $('#buttons').append(buttons);
        });
}


// Build Output
function getOutput(item) {
    var videoId = item.id.videoId;
    var title = item.snippet.title;
    var description = item.snippet.description;
    var thumb = item.snippet.thumbnails.high.url;   //High quality thumbnail
    var channelTitle = item.snippet.channelTitle;
    var videoDate = item.snippet.publishedAt;
    
    // Build Output String
    
    var output = '<li>' + 
        '<div class="list-left">' +
            '<img src="'+ thumb +'">' +
        '</div>' +
        '<div class="list-right">' +
            '<h3><a class="fancybox fancybox.iframe" href="http://www.youtube.com/embed/'+ videoId +'">'+ title +'</a></h3>' +
            '<small>By <span class="cTitle">'+ channelTitle +'</span>on ' + videoDate+'</small>' +
            '<p>'+ description + '</p>' +
        '</div>' +
        '</li>' +
        '<div class="clearfix"></div>' + '';
    
    return output;

}


// Build the buttons
function getButtons(prev, next){
    if(!prev){
        var btnoutput = '<div class="button-container">' +
                            '<button id="next-button" class="paging-button" data-token="'+ next +'" data-query="' + query +'"' +
                            ' onclick="nextPage();">Next Page</button></div>';
    } else {
        var btnoutput = '<div class="button-container">' +
                            '<button id="prev-button" class="paging-button" data-token="'+ prev +'" data-query="' + query +'"' +
                            ' onclick="prevPage();">Prev Page</button>' +
                            '<button id="next-button" class="paging-button" data-token="'+ next +'" data-query="' + query +'"' +
                            ' onclick="nextPage();">Next Page</button></div>';
    }
    
    return btnoutput;
}


// Next Page Function
function nextPage(){
    
    var token = $('#next-button').data('token');    //.data(token) to retreive the tokens
    var query = $('#next-button').data('query');    
    
    // Clear Results
    $('#results').html('');
    $('#buttons').html('');
    
    // Get Form input
    var query = $('#query').val();
    
    
    // Run GET request on API
    $.get(
        "https://www.googleapis.com/youtube/v3/search",{
            // Options
            part: 'snippet, id',
            q: query,
            pageToken: token,   //Getting a new list of videos from the token
            type: 'video',
            key: 'AIzaSyBCCM-eDg1a6_qOOMfKwyf-K2tb7zKRCi4'},
            function(data){ // Retreiving data from google by above query
                var nextPageToken = data.nextPageToken;
                var prevPageToken = data.prevPageToken;
            
                console.log(data);
            
                $.each(data.items, function(i, item){
                   // Get output
                    var output = getOutput(item);
                    
                    // Display results
                    $('#results').append(output);
                    
                });
                
                var buttons = getButtons(prevPageToken, nextPageToken);
                
                // Display Buttons
                $('#buttons').append(buttons);
        });
}


// Prev Page Function
function prevPage(){
    
    var token = $('#prev-button').data('token');    //.data(token) to retreive the tokens
    var query = $('#prev-button').data('query');    
    
    // Clear Results
    $('#results').html('');
    $('#buttons').html('');
    
    // Get Form input
    var query = $('#query').val();
    
    
    // Run GET request on API
    $.get(
        "https://www.googleapis.com/youtube/v3/search",{
            // Options
            part: 'snippet, id',
            q: query,
            pageToken: token,   //Getting a new list of videos from the token
            type: 'video',
            key: 'AIzaSyBCCM-eDg1a6_qOOMfKwyf-K2tb7zKRCi4'},
            function(data){ // Retreiving data from google by above query
                var nextPageToken = data.nextPageToken;
                var prevPageToken = data.prevPageToken;
            
                console.log(data);
            
                $.each(data.items, function(i, item){
                   // Get output
                    var output = getOutput(item);
                    
                    // Display results
                    $('#results').append(output);
                    
                });
                
                var buttons = getButtons(prevPageToken, nextPageToken);
                
                // Display Buttons
                $('#buttons').append(buttons);
        });
}