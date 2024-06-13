
$(document).ready(() => {
  const $body = $('body');
  const $tweetContainer = $('#tweet-container');
  const $usernameInput = $('#username-input'); // New input for username
  const $tweetInput = $('#tweet-input');
  const $tweetButton = $('#tweet-button');
  const $loadNewTweetsButton = $('#load-new-tweets');

  // Function to render tweets
  function createNewTweets(tweets) {
    $tweetContainer.html(''); // Clear existing tweets
    tweets.forEach((tweet) => {
      const $tweet = $('<div class="tweet"></div>');
      const $username = $('<span class="username"></span>'); // Allow the user to click on any username
      const $message = $('<p></p>');
      const $timestamp = $('<span class="timestamp"></span>'); // Display the timestamps of when the tweets were created

      $username.text(`@${tweet.user}`);
      $message.text(tweet.message);
      $timestamp.text(moment(tweet.created_at).fromNow()); // Show when the tweets were created in a human-friendly way

      $username.on('click', () => viewUserTimeline(tweet.user)); // Allow the user to click on any username to see that user's timeline

      $tweet.append($username);
      $tweet.append($message);
      $tweet.append($timestamp);
      $tweetContainer.append($tweet);
    });
  }

  // Function to load tweets
  function loadTweets() {
    createNewTweets(streams.home); // Show the user new tweets somehow
  }

  // Function to view user timeline
  function viewUserTimeline(username) {
    createNewTweets(streams.users[username]); // Allow the user to click on any username to see that user's timeline
  }

  // Function to handle tweeting
  function handleTweet() {
    const username = $usernameInput.val();
    const message = $tweetInput.val();
    if (username.trim() !== '' && message.trim() !== '') {
      const newTweet = {
        user: username, // Use the entered username
        message: message,
        created_at: new Date() // Display the timestamps of when the tweets were created
      };
      addTweet(newTweet);
      $tweetInput.val('');
      $usernameInput.val('');
      loadTweets(); // Show the user new tweets somehow
    }
  }

  $tweetButton.on('click', handleTweet); // Allow the user to tweet
  $loadNewTweetsButton.on('click', loadTweets); // Show the user new tweets somehow

  loadTweets(); // Initial load
});