class Game {
  constructor() {
    //home pages
    this.title = createElement("h1");
    this.title2 = createElement("h2");
    this.button = createButton("Sign in");
    this.greeting = createElement("h1");
    this.greeting2 = createElement("h2");
    this.button3 = createButton("Creator");
    this.button4 = createButton("Client");

    //creator log in page
    this.creator1 = createElement("h2");
    this.creator2 = createElement("h3");
    this.artist = createSelect();
    this.creator3 = createElement("h3");
    this.nameInput = createInput("Name");
    this.creator4 = createElement("h3");
    this.vidInput = createInput("Video Link");
    this.creator5 = createElement("h3");
    this.ageInput = createInput("Age");
    this.creator6 = createElement("h3");
    this.state = createSelect();
    this.creator7 = createElement("h3");
    this.genre = createSelect();
    this.creator8 = createElement("h3");
    this.instrument = createSelect();
    this.creator9 = createElement("h3");
    this.creator10 = createElement("h3");
    this.noInput = createInput("Number");
    this.creator11 = createElement("h3");
    this.emailInput = createInput("Email");
    this.creator12 = createElement("h3");
    this.fee = createSelect();
    this.doneButton = createButton("Done!");

    //creator profile page
    this.profile1 = createElement("h2");
    this.pName = createElement("h3");
    this.pAge = createElement("h3");
    this.pVid = createElement("h3");
    this.pArtist = createElement("h3");
    this.pPhone = createElement("h3");
    this.pEmail = createElement("h3");
    this.pState = createElement("h3");
    this.pGenre = createElement("h3");
    this.pInstrument = createElement("h3");
    this.pFee = createElement("h3");
    this.doneButton2 = createButton("Next");

    //final creator page
    this.profile2 = createElement("h1");

    //client log in page
    this.client1 = createElement("h2");
    this.client2 = createElement("h3");
    this.clArtist = createSelect();
    this.client3 = createElement("h3");
    this.clNameInput = createInput("Name");
    this.client4 = createElement("h3");
    this.clAgeInput = createInput("Age");
    this.client5 = createElement("h3");
    this.clState = createSelect();
    this.client6 = createElement("h3");
    this.clGenre = createSelect();
    this.client7 = createElement("h3");
    this.clInstrument = createSelect();
    this.client8 = createElement("h3");
    this.client9 = createElement("h3");
    this.clNoInput = createInput("Number");
    this.client10 = createElement("h3");
    this.clEmailInput = createInput("Email");
    this.client11 = createElement("h3");
    this.clFee = createSelect();
    this.doneButton3 = createButton("Done!");

    //client menu page
    this.menu1 = createElement("h1");
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
    this.menu12 = createElement("h2");
    this.menu13 = createElement("h2");
    this.menu14 = createElement("h2");
    this.menu15 = createElement("h2");
    this.menu16 = createElement("h2");
    this.menu17 = createElement("h2");
    this.menu18 = createElement("h2");
    this.menu19 = createElement("h2");
    this.menu20 = createElement("h2");
    this.menu21 = createElement("h2");
    this.menu22 = createElement("h2");
    this.menu23 = createElement("h2");
    this.menu24 = createElement("h2");
    this.menu25 = createElement("h2");
    this.menu26 = createElement("h2");
    this.menu27 = createElement("h2");
    this.menu28 = createElement("h2");
    this.menu29 = createElement("h2");
    this.menu30 = createElement("h2");
    this.menu31 = createElement("h2");
    this.menu32 = createElement("h2");
  }

  display() {
    this.title.html("L.E.A.H");
    this.title.style("font-size", "100px");
    var col = color("#000000");
    this.title.style("color", col);
    this.title.position(420, 370);

    this.title2.html("LIVE ENTERTAINMENT AT HOME!");
    this.title2.style("font-size", "40px");
    this.title2.style("color", col);
    this.title2.position(260, 520);

    this.button.position(1080, 20);

    this.button3.position(230, 350);
    this.button3.size(200, 100);
    this.button4.position(750, 350);
    this.button4.size(200, 100);

    this.nameInput.position(15, 220);
    this.ageInput.position(15, 330);
    this.vidInput.position(500, 220);
    this.noInput.position(15, 560);
    this.emailInput.position(15, 640);
    this.doneButton.position(1050, 600);

    this.doneButton2.position(490, 550);
    this.doneButton2.size(200, 100);

    this.clNameInput.position(15, 220);
    this.clAgeInput.position(15, 330);
    this.clNoInput.position(15, 560);
    this.clEmailInput.position(15, 640);
    this.doneButton3.position(1050, 600);

    this.doneButton2.position(490, 550);
    this.doneButton2.size(200, 100);

    // creator artist select

    //sign in

    //creator pages

    //client pages

    //drawSprites();
  }
  /*************************************************************************************************** */

  clientPageInfo() {
    this.button4.mousePressed(() => {
      this.greeting.hide();
      this.greeting2.hide();
      this.button3.hide();
      this.button4.hide();

      this.clNameInput.show();
      this.clAgeInput.show();
      this.clArtist.show();
      this.clState.show();
      this.clGenre.show();
      this.clInstrument.show();
      this.clNoInput.show();
      this.clEmailInput.show();
      this.clFee.show();
      this.doneButton3.show();

      this.client1.html("Please fill in the following information");
      this.client1.style("font-size", "50px");
      this.client1.style("color", col);
      this.client1.position(200, -30);

      this.client2.html("What type of artist would you like?");
      this.client2.style("font-size", "30px");
      this.client2.style("color", col);
      this.client2.position(10, 50);

      this.client3.html("Your name");
      this.client3.style("font-size", "30px");
      this.client3.style("color", col);
      this.client3.position(15, 140);

      this.client4.html("Your age");
      this.client4.style("font-size", "30px");
      this.client4.style("color", col);
      this.client4.position(15, 240);

      this.client5.html("Select your state");
      this.client5.style("font-size", "30px");
      this.client5.style("color", col);
      this.client5.position(500, 240);

      this.client6.html("What genre would you like?");
      this.client6.style("font-size", "30px");
      this.client6.style("color", col);
      this.client6.position(15, 340);

      this.client7.html("What instrument would you like?");
      this.client7.style("font-size", "30px");
      this.client7.style("color", col);
      this.client7.position(500, 340);

      this.client8.html("Contact Information");
      this.client8.style("font-size", "30px");
      this.client8.style("color", col);
      this.client8.position(15, 440);

      this.client9.html("Phone Number");
      this.client9.style("font-size", "30px");
      this.client9.style("color", col);
      this.client9.position(15, 480);

      this.client10.html("Email");
      this.client10.style("font-size", "30px");
      this.client10.style("color", col);
      this.client10.position(15, 565);

      this.client11.html("Budget");
      this.client11.style("font-size", "30px");
      this.client11.style("color", col);
      this.client11.position(500, 440);

      //client state select
      this.clState.option("Andhra Pradesh");
      this.clState.option("Arunachal Pradesh");
      this.clState.option("Assam");
      this.clState.option("Bihar");
      this.clState.option("Chhattisgarh");
      this.clState.option("Goa");
      this.clState.option("Gujarat");
      this.clState.option("Haryana");
      this.clState.option("Himachal Pradesh");
      this.clState.option("Jharkhand");
      this.clState.option("Karnataka");
      this.clState.option("Kerala");
      this.clState.option("Madhya Pradesh");
      this.clState.option("Maharashtra");
      this.clState.option("Manipur");
      this.clState.option("Meghalaya");
      this.clState.option("Mizoram");
      this.clState.option("Nagaland");
      this.clState.option("Odisha");
      this.clState.option("Punjab");
      this.clState.option("Rajasthan");
      this.clState.option("Sikkim");
      this.clState.option("Tamil Nadu");
      this.clState.option("Telangana");
      this.clState.option("Tripura");
      this.clState.option("Uttar Pradesh");
      this.clState.option("Uttarakhand");
      this.clState.option("West Bengal");
      this.clState.option("West Bengal");
      this.clState.option("Andaman and Nicobar Islands");
      this.clState.option("Chandigarh");
      this.clState.option("Dadra & Nagar Haveli and Daman & Diu");
      this.clState.option("Delhi");
      this.clState.option("Jammu and Kashmir");
      this.clState.option("Lakshadweep");
      this.clState.option("Puducherry");
      this.clState.option("Ladakh");
      this.clState.option("Goa");
      this.clState.position(500, 330);

      //client artist select
      this.clArtist.option("Solo Singer");
      this.clArtist.option("Band");
      this.clArtist.option("Duet");
      this.clArtist.option("Non-vocal Band");
      this.clArtist.option("Solo instrument player");
      this.clArtist.position(10, 130);

      //client genre select
      this.clGenre.option("Rock");
      this.clGenre.option("Jazz");
      this.clGenre.option("Classical");
      this.clGenre.option("Hip Hop");
      this.clGenre.option("Pop");
      this.clGenre.option("Country");
      this.clGenre.option("Electronic");
      this.clGenre.option("Dance Music");
      this.clGenre.option("Lounge Music");
      this.clGenre.option("Popular hits");
      this.clGenre.option("Folk");
      this.clGenre.position(15, 430);

      //client instrument select
      this.clInstrument.option("Voice");
      this.clInstrument.option("Piano");
      this.clInstrument.option("Acoustic Guitar");
      this.clInstrument.option("Saxophone");
      this.clInstrument.option("Violin");
      this.clInstrument.option("Electric Guitar");
      this.clInstrument.option("Trumpet");
      this.clInstrument.option("Flute");
      this.clInstrument.option("Clarinet");
      this.clInstrument.option("Bass Guitar");
      this.clInstrument.option("Drums");
      this.clInstrument.option("Harp");
      this.clInstrument.option("Cello");
      this.clInstrument.option("Tabla");
      this.clInstrument.option("Other");
      this.clInstrument.position(500, 430);

      //client fee select
      this.clFee.option("5000-10,000");
      this.clFee.option("10,000-20,000");
      this.clFee.option("20,000-50,000");
      this.clFee.option("50,000-1,00,000");
      this.clFee.option("1,00,000-1,50,000");
      this.clFee.option("1,50,000-2,00,000");
      this.clFee.option("2,00,000-3,00,000");
      this.clFee.option("3,00,000-5,00,000");
      this.clFee.option("5,00,000-10,00,000");
      this.clFee.position(500, 530);
    });

    this.doneButton3.mousePressed(() => {
      this.client1.hide();
      this.client2.hide();
      this.client3.hide();
      this.client4.hide();
      this.client5.hide();
      this.client6.hide();
      this.client7.hide();
      this.client8.hide();
      this.client9.hide();
      this.client10.hide();
      this.client11.hide();

      this.clNameInput.hide();
      this.clAgeInput.hide();
      this.clArtist.hide();
      this.clState.hide();
      this.clGenre.hide();
      this.clInstrument.hide();
      this.clNoInput.hide();
      this.clEmailInput.hide();
      this.clFee.hide();
      this.doneButton3.hide();

      clArtistSelect = this.clArtist.value();
      clGenreSelect = this.clGenre.value();
      clStateSelect = this.clState.value();
      clInstrumentSelect = this.clInstrument.value();
      this.menu1.html(
        "Here are some options for " +
          clGenreSelect +
          ", " +
          clArtistSelect +
          "s, using " +
          clInstrumentSelect +
          " in " +
          clStateSelect
      );
      this.menu1.style("font-size", "36px");
      this.menu1.style("color", col);
      this.menu1.position(10, 0);
    });
  }

  creatorPageInfo() {
    this.button3.mousePressed(() => {
      this.greeting.hide();
      this.greeting2.hide();
      this.button3.hide(); //creator button
      this.button4.hide(); //client button

      this.nameInput.show();
      this.vidInput.show();
      this.ageInput.show();
      this.artist.show();
      this.state.show();
      this.genre.show();
      this.instrument.show();
      this.noInput.show();
      this.emailInput.show();
      this.fee.show();
      this.doneButton.show();

      this.creator1.html("Please fill in the following information");
      this.creator1.style("font-size", "50px");
      this.creator1.style("color", col);
      this.creator1.position(200, -30);

      this.creator2.html("Artist Type");
      this.creator2.style("font-size", "30px");
      this.creator2.style("color", col);
      this.creator2.position(10, 50);

      this.artist.option("Solo Singer");
      this.artist.option("Band");
      this.artist.option("Duet");
      this.artist.option("Non-vocal Band");
      this.artist.option("Solo instrument player");
      this.artist.position(10, 130);

      this.creator3.html("Name");
      this.creator3.style("font-size", "30px");
      this.creator3.style("color", col);
      this.creator3.position(15, 140);

      this.creator4.html("Add a video of a performance of yours");
      this.creator4.style("font-size", "30px");
      this.creator4.style("color", col);
      this.creator4.position(500, 140);

      this.creator5.html("Age");
      this.creator5.style("font-size", "30px");
      this.creator5.style("color", col);
      this.creator5.position(15, 240);

      this.creator6.html("Select your state");
      this.creator6.style("font-size", "30px");
      this.creator6.style("color", col);
      this.creator6.position(500, 240);

      //creator state select
      this.state.option("Andhra Pradesh");
      this.state.option("Arunachal Pradesh");
      this.state.option("Assam");
      this.state.option("Bihar");
      this.state.option("Chhattisgarh");
      this.state.option("Goa");
      this.state.option("Gujarat");
      this.state.option("Haryana");
      this.state.option("Himachal Pradesh");
      this.state.option("Jharkhand");
      this.state.option("Karnataka");
      this.state.option("Kerala");
      this.state.option("Madhya Pradesh");
      this.state.option("Maharashtra");
      this.state.option("Manipur");
      this.state.option("Meghalaya");
      this.state.option("Mizoram");
      this.state.option("Nagaland");
      this.state.option("Odisha");
      this.state.option("Punjab");
      this.state.option("Rajasthan");
      this.state.option("Sikkim");
      this.state.option("Tamil Nadu");
      this.state.option("Telangana");
      this.state.option("Tripura");
      this.state.option("Uttar Pradesh");
      this.state.option("Uttarakhand");
      this.state.option("West Bengal");
      this.state.option("Andaman and Nicobar Islands");
      this.state.option("Chandigarh");
      this.state.option("Dadra & Nagar Haveli and Daman & Diu");
      this.state.option("Delhi");
      this.state.option("Jammu and Kashmir");
      this.state.option("Lakshadweep");
      this.state.option("Puducherry");
      this.state.option("Ladakh");
      this.state.option("Goa");
      this.state.position(500, 330);

      this.creator7.html("What genre do you play/sing");
      this.creator7.style("font-size", "30px");
      this.creator7.style("color", col);
      this.creator7.position(15, 340);

      //creator genre select
      this.genre.option("Rock");
      this.genre.option("Jazz");
      this.genre.option("Classical");
      this.genre.option("Hip Hop");
      this.genre.option("Pop");
      this.genre.option("Country");
      this.genre.option("Electronic");
      this.genre.option("Dance Music");
      this.genre.option("Lounge Music");
      this.genre.option("Popular hits");
      this.genre.option("Folk");
      this.genre.position(15, 430);

      this.creator8.html("What instrument do you play/sing");
      this.creator8.style("font-size", "30px");
      this.creator8.style("color", col);
      this.creator8.position(500, 340);

      //creator instrument select
      this.instrument.option("Voice");
      this.instrument.option("Piano");
      this.instrument.option("Acoustic Guitar");
      this.instrument.option("Saxophone");
      this.instrument.option("Violin");
      this.instrument.option("Electric Guitar");
      this.instrument.option("Trumpet");
      this.instrument.option("Flute");
      this.instrument.option("Clarinet");
      this.instrument.option("Bass Guitar");
      this.instrument.option("Drums");
      this.instrument.option("Harp");
      this.instrument.option("Cello");
      this.instrument.option("Tabla");
      this.instrument.option("Other");
      this.instrument.position(500, 430);

      this.creator9.html("Contact Information");
      this.creator9.style("font-size", "30px");
      this.creator9.style("color", col);
      this.creator9.position(15, 440);

      this.creator10.html("Phone Number");
      this.creator10.style("font-size", "30px");
      this.creator10.style("color", col);
      this.creator10.position(15, 480);

      this.creator11.html("Email");
      this.creator11.style("font-size", "30px");
      this.creator11.style("color", col);
      this.creator11.position(15, 565);

      this.creator12.html("Minimum fee");
      this.creator12.style("font-size", "30px");
      this.creator12.style("color", col);
      this.creator12.position(500, 440);

      //creator fee select
      this.fee.option("5000-10,000");
      this.fee.option("10,000-20,000");
      this.fee.option("20,000-50,000");
      this.fee.option("50,000-1,00,000");
      this.fee.option("1,00,000-1,50,000");
      this.fee.option("1,50,000-2,00,000");
      this.fee.option("2,00,000-3,00,000");
      this.fee.option("3,00,000-5,00,000");
      this.fee.option("5,00,000-10,00,000");
      this.fee.position(500, 530);
    });

    this.doneButton.mousePressed(() => {
      this.creator1.hide();
      this.creator2.hide();
      this.creator3.hide();
      this.creator4.hide();
      this.creator5.hide();
      this.creator6.hide();
      this.creator7.hide();
      this.creator8.hide();
      this.creator9.hide();
      this.creator10.hide();
      this.creator11.hide();
      this.creator12.hide();

      this.button3.hide();
      this.button4.hide();
      this.nameInput.hide();
      this.vidInput.hide();
      this.ageInput.hide();
      this.artist.hide();
      this.state.hide();
      this.genre.hide();
      this.instrument.hide();
      this.noInput.hide();
      this.emailInput.hide();
      this.fee.hide();
      this.doneButton.hide();

      this.doneButton2.show();

      this.profile1.html("Here is your final profile");
      this.profile1.style("font-size", "50px");
      this.profile1.style("color", col);
      this.profile1.position(330, -30);

      this.pName.html("Name: " + this.nameInput.value());
      this.pName.style("font-size", "30px");
      this.pName.style("color", col);
      this.pName.center();
      this.pName.position(490, 80);
      creator.name = this.nameInput.value();

      this.pAge.html("Age: " + this.ageInput.value());
      this.pAge.style("font-size", "30px");
      this.pAge.style("color", col);
      this.pAge.center();
      this.pAge.position(490, 120);
      creator.age = this.ageInput.value();

      this.pVid.html("Video Link: " + this.vidInput.value());
      this.pVid.style("font-size", "30px");
      this.pVid.style("color", col);
      this.pVid.center();
      this.pVid.position(490, 160);
      creator.vidLink = this.vidInput.value();

      this.pPhone.html("Phone Number: " + this.noInput.value());
      this.pPhone.style("font-size", "30px");
      this.pPhone.style("color", col);
      this.pPhone.center();
      this.pPhone.position(490, 200);
      creator.phone = this.noInput.value();

      this.pEmail.html("Email: " + this.emailInput.value());
      this.pEmail.style("font-size", "30px");
      this.pEmail.style("color", col);
      this.pEmail.center();
      this.pEmail.position(490, 240);
      creator.email = this.emailInput.value();

      stateSelect = this.state.value();
      this.pState.html("State: " + stateSelect);
      this.pState.style("font-size", "30px");
      this.pState.style("color", col);
      this.pState.center();
      this.pState.position(490, 280);
      creator.state = stateSelect;

      genreSelect = this.genre.value();
      this.pGenre.html("Genre: " + genreSelect);
      this.pGenre.style("font-size", "30px");
      this.pGenre.style("color", col);
      this.pGenre.center();
      this.pGenre.position(490, 320);
      creator.genre = genreSelect;

      instrumentSelect = this.instrument.value();
      this.pInstrument.html("Instrument: " + instrumentSelect);
      this.pInstrument.style("font-size", "30px");
      this.pInstrument.style("color", col);
      this.pInstrument.center();
      this.pInstrument.position(490, 360);
      creator.instrument = instrumentSelect;

      feeSelect = this.fee.value();
      this.pFee.html("Minimum Fee: " + feeSelect);
      this.pFee.style("font-size", "30px");
      this.pFee.style("color", col);
      this.pFee.center();
      this.pFee.position(490, 400);
      creator.fee = feeSelect;

      artistSelect = this.artist.value();
      this.pArtist.html("Artist Type: " + artistSelect);
      this.pArtist.style("font-size", "30px");
      this.pArtist.style("color", col);
      this.pArtist.center();
      this.pArtist.position(490, 440);
      creator.artist = artistSelect;

      count = count + 1;
      creator.index = count;
      creator.updateCount(count);
      // console.log(creator.index);
      creator.update();
    });

    this.doneButton2.mousePressed(() => {
      this.pName.hide();
      this.pAge.hide();
      this.pVid.hide();
      this.pPhone.hide();
      this.pEmail.hide();
      this.pState.hide();
      this.pGenre.hide();
      this.pInstrument.hide();
      this.pFee.hide();
      this.pArtist.hide();
      this.doneButton2.hide();
      this.profile1.hide();

      this.profile2.html(
        "Thank you for submitting. You will be contacted when a client would like to hire you."
      );
      this.profile2.style("font-size", "30px");
      this.profile2.style("color", col);
      this.profile2.center();
      this.profile2.position(60, 300);
    });
  }

  signIn() {
    this.button.mousePressed(() => {
      //signin button
      this.title.hide();
      this.title2.hide();
      this.button.hide();
      logo.visible = false;

      this.button3.show(); //creator button
      this.button4.show(); //client button

      this.greeting.html("Hello and Welcome to L.E.A.H");
      this.greeting.style("font-size", "80px");
      this.greeting.style("color", col);
      this.greeting.position(90, -50);

      this.greeting2.html("Are you a Client or a Creator?");
      this.greeting2.style("font-size", "70px");
      this.greeting2.style("color", col);
      this.greeting2.position(150, 60);
    });
  }

  hideFun() {
    this.button3.hide();
    this.button4.hide();
    this.nameInput.hide();
    this.vidInput.hide();
    this.ageInput.hide();
    this.artist.hide();
    this.state.hide();
    this.genre.hide();
    this.instrument.hide();
    this.noInput.hide();
    this.emailInput.hide();
    this.fee.hide();
    this.doneButton.hide();
    this.doneButton2.hide();

    this.clNameInput.hide();
    this.clAgeInput.hide();
    this.clArtist.hide();
    this.clState.hide();
    this.clGenre.hide();
    this.clInstrument.hide();
    this.clNoInput.hide();
    this.clEmailInput.hide();
    this.clFee.hide();
    this.doneButton3.hide();
  }
}
