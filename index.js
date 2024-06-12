
$(document).ready(() => {
  const $body = $('body');
  const $tweetsContainer = $('#tweet-container');
  const $tweetsInput = $('#tweet-input');
  const $tweetsButton = $('#tweet-button');
  const $loadNewTweetsButton = $('#load-new-tweets');


 function createNewTweets(tweets) {
  $tweetContainer.html(''); // Clear existing tweets
  tweets.forEach((tweet) => {
    const $tweet = $('<div class="tweet"></div>');
    const $username = $('<span class="username"></span>'); // Allow the user to click on any username
    const $message = $('<p></p>');
    const $timestamp = $('<span class="timestamp"></span>'); // Display the timestamps 
    
    
    $username.text(`@${tweet.user}`);
    $message.text(tweet.message);
    $timestamp.text(moment(tweet.created_at).fromNow()); // Show when the tweets were created


    $username.on('click', () => viewUserTimeline(tweet.user)); // Allow the user to click on any username to see that user's timeline

    $tweet.append($username);
    $tweet.append($message);
    $tweet.append($timestamp);
    $tweetContainer.append($tweet);
  });
}

// Function to load tweets
function newTweets() {
  createNewTweets(streams.home); // Show the user new tweets somehow
}


});