class Display {
  constructor() {
    this.menu2 = createElement("h2");
    this.menu3 = createElement("h2");
    this.menu4 = createElement("h2");
    this.menu5 = createElement("h2");
    this.menu6 = createElement("h2");
    this.menu7 = createElement("h2");
    this.menu8 = createElement("h2");
    this.menu9 = createElement("h2");
    this.menu10 = createElement("h2");
    this.menu11 = createElement("h2");
  }
  show() {
    Creator.getCreatorInfo();
    console.log(clArtistSelect);
    if (allCreators !== undefined) {
      var x = 0;
      var y = 0;
      for (var crt in allCreators) {
        y=y+120
        if (allCreators[crt].artist === clArtistSelect && allCreators[crt].genre === clGenreSelect) {

          textSize(30);
          fill("#000000");

          text("Name: "+allCreators[crt].name,20,y+10);
          text("Age: "+allCreators[crt].age,760,y+10);
          text("Video Link: "+allCreators[crt].vidLink,20,y+50);
          text("Phone Number: "+allCreators[crt].phone,760,y+50);
          text("Email: "+allCreators[crt].email,20,y+90);
          text("State: "+allCreators[crt].state,760,y+90);
          text("Genre: "+allCreators[crt].genre,20,y+130);
          text("Instrument: "+allCreators[crt].instrument,760,y+130);
          text("Minimum Fee: "+allCreators[crt].fee,20,y+170);
          text("Artist Type: "+allCreators[crt].artist,760,y+170);
      }
    }
  }
}}
