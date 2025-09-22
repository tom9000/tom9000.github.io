<!--<div id="myElement">Loading player...</div>
<script type="text/javascript">
    jwplayer("myElement").setup({
        file: "/reels/videos/reel-1.20-2.mp4",
        image: "/reels/videos/reel-1.20-2.png",
		width: '840',
        height: '472',
        skin: "/reels/videos/six.xml"
    });
</script>-->

<!--<video id="myvideo" class="video-js vjs-default-skin" controls preload="none" width="840" height="472"
      poster="/reels/videos/reel-1.20-2.png"
      data-setup="{}">
  <source src="/reels/videos/reel-1.20-2.mp4" type='video/mp4' />
</video>-->

<!-- Google Analytics: http://help.videojs.com/discussions/questions/5-google-analytics -->
<!--<script>
// Once the video is ready
_V_("myvideo").ready(function(){

    // Google Analytics event tracking
    var trackGaEvent = function() {
        var playerState = this;
        
        // Determine time
        var date = new Date( event.timeStamp );
        
        var hours = date.getHours();
        if ( hours < 10 ) hours = "0" + hours.toString();
        var minutes = date.getMinutes();
        if ( minutes < 10 ) minutes = "0" + minutes.toString();
        var seconds = date.getSeconds();
        if ( seconds < 10 ) seconds = "0" + seconds.toString();
        
        var formattedTime = hours + ':' + minutes + ':' + seconds;
        
        // Log event
        var gaCategory = 'VideoJS';
        var videoId = playerState.id;
        var playerStateUrl = videoId.replace('benchfly-embed-', 'https://secured.benchfly.com/player/') + '/';
        _gaq.push([ '_trackEvent', gaCategory, event.type, playerStateUrl, formattedTime, false ]);
    };
    
    // Attach GA tracking to event listeners
    this.addEvent( "play", trackGaEvent );
    this.addEvent( "pause", trackGaEvent );
    this.addEvent( "load", trackGaEvent );
    this.addEvent( "ended", trackGaEvent );
    this.addEvent( "volumechange", trackGaEvent );

});
</script>-->
