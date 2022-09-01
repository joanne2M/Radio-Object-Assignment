// Instructions 
// // // How to begin: 
// // // Create a new HTML/CSS/JS and complete the following in your .js file
// // // Make a radio Object.Give it a property called stations and make the value an array of station objects
// // // Give each station object a property called name and songs. Name should be a string and should be an array of song objects.
// // // Song object should have two properties: title and artist
// // // Create a method on your radio object that changes the station randomly. 
// // // When the station is changed, pick a song from that station console.log("Now Playing:" + song,title + "by" + song.artist)
 

// // Submission: Submit a share link of your repl file here! 

// Happy coding!


const radio = {
    stations: [ST1, ST2, ST3]
}

name: 'KATV, WLUK, KRCR, WONI,'
songs: [ 
  
    {
        title: 'Hands on My Knees',
        artist: 'Megan the Stalion'
    },

    {
        title: 'California Girl',
        artist: 'Katie Perry'
    }
]

name: 'Top Hits', 
songs [
    {
        title: 'Welcome to Atlanta',
        artist: 'BIg Boys'
    }
]

const ST1 = {
    name: '',
    songs: {

    }
}

const ST2 = {
    name: '',
    songs: {

    }
}

const ST3 = {
    name: '',
    songs: {

    }
}

const stations = {
// PLACE HOLDER //

}


title: 'Before I let Go'
artist: 'Back Street Boys'


function getRandomProperty(radio) {
    const keys = Object.keys(radio);
  
    return keys[Math.floor(Math.random() * keys.length)];
  }
  
  console.log(getRandomProperty(radio)) 
  console.log(getRandomProperty(radio)) // songs

  console.log("Now Playing " + songs.title +songs.artist)
