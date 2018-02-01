# React Flickr Photo Search
A Flickr photo search app built with React.

[View Demo](http://davidra.co/react-flickr-photo-search)

Getting Started
---------------

```shell
$ git clone https://github.com/davidrayoussef/react-flickr-photo-search.git
$ cd react-flickr-photo-search
$ npm install

```

Set your Flickr api key to process.env.FLICKR_APP_API_KEY
```shell
FLICKR_APP_API_KEY='YOUR_API_KEY'
```

Start the app
```shell
$ npm start
```

Features
---------------
- Searches while you type (debounced with a half-second delay)
- Keyboard navigation with the right and left arrow keys (unless focused in input search box)
- Responsive without media queries using CSS grid
- Gallery thumbnails animate using [react-flip-move](https://github.com/joshwcomeau/react-flip-move)

Todo
---------------
- Add swipe functionality for mobile
- Add tests
- Add prop for gallery size
