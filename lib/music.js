const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
	mini: false,
    autoplay: true,
	preload: 'auto',
	listFolded: false,
	    audio: [
      {
        name: "宝贝",
        artist: '啾啾的宝贝',
        url: 'https://github.com/chienhao420/Blog-Back-Up1/blob/master/music/baby.mp3?raw=true',
        cover: 'https://raw.githubusercontent.com/chienhao420/Blog-Back-Up1/master/photos/2019-08-30_tt%20(12).jpg',
      },
      {
        name: 'Just The Way You Are',
        artist: '糖糖喜欢的',
        url: 'https://github.com/chienhao420/Blog-Back-Up1/blob/master/music/justtheway.mp3?raw=true',
        cover: 'https://raw.githubusercontent.com/chienhao420/Blog-Back-Up1/master/photos/2019-08-30_tt%20(18).jpg',
      },
      {
        name: 'How Can I',
        artist: '好听的',
        url: 'https://github.com/chienhao420/Blog-Back-Up1/blob/master/music/howcani.mp3?raw=true',
        cover: 'https://raw.githubusercontent.com/chienhao420/Blog-Back-Up1/master/photos/2019-08-25_tt(1).jpg',
      }
    ]
});