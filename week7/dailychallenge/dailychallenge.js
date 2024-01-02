class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    watch() {
        console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
    }
}

// examples
const video1 = new Video('History 101', 'Joao', 300);
video1.watch();

const video2 = new Video('Music 101', 'John', 240);
video2.watch();

// bonus - array
const videoData = [
  {title: "video3", uploader: "John2" , time: 360},
  {title: "video4", uploader: "Joao2", time: 420},
  {title: "video5", uploader: "JaneDoe", time: 480},
  {title: "video6", uploader: "JaneDoe2", time: 540},
  {title: "video7", uploader: "Random1", time: 600}
];

const videoInstances = [];
for (const data of videoData) {
  const videoInstance = new Video(data.title, data.uploader, data.time);
  videoInstances.push(videoInstance);
}

// cta watch() for new data
for (const videoInstance of videoInstances) {
  videoInstance.watch();
}
