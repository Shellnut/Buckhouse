# Buckhouse
[Johnathan Buckhouse](https://www.youtube.com/c/JohnathanBuckhouse) is trying to snowboard at every North America Ski Resort. This repository will track his progress as he accomplishes this goal.

## Link
Check out the tracker at [resortskimaps.com](https://resortskimaps.com)

## Installation

This repository uses static HTML and JavaScript. To run this website locally, clone or download the repo and launch the index.html file in your favorite browser.

## Usage

The data is organized in an array by Ski Resort. Each resort has an array of YouTube video ID's that show how many videos Johnathan has from a specific location.

```javascript
var allData = [
  ...,
  {
    "resortName": "Alpine Valley Resort",
    "state": "Wisconsin",
    "region": "Midwest",
    "city": "East Troy",
    "videos": [
      "jpFaLyNq-qI", // YouTube video ID
      "6a--suhNwak"
    ],
    "position": {
      "lat": 42.73670694583553,
      "lng": -88.427878267612
    },
    "officialSkiResort": true,
    "id": "169",
    "website": "https://www.alpinevalleyresort.com/",
    "resortReview": {
      "score": 49,
      "link": "6a--suhNwak",
      "note": ""
    }
  },
  ...
]
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Suggestions are also welcome. Email [Kenny](mailto:shellnut@gmail.com?subject=Buckhouse) for any ideas to improve this site.
