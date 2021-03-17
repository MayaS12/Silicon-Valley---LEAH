class Creator {
    constructor(){
        this.index = null;
        this.name = null;
        this.age = 0;
        this.vidLink = null;
        this.phone = 0;
        this.email = null;
        this.state = null;
        this.instrument = null;
        this.genre = null;
        this.fee = null;
        this.artist = null;
    }

    getCount(){
        var createCountRef = database.ref('creatorCount');
        createCountRef.on("value",(data)=>{
          count = data.val();
        })
      }
    
      updateCount(count){
        database.ref('/').update({
          creatorCount: count
        })
      }

    update(){
        var creatorIndex = "creators/creator"+this.index;
        database.ref(creatorIndex).set({
            artist: this.artist,
            fee: this.fee,
            genre: this.genre,
            instrument: this.instrument,
            state: this.state,
            email: this.email,
            phone: this.phone,
            videoLink: this.vidLink,
            age: this.age,
            name: this.name,
        })
    }

    static getCreatorInfo(){
      var createInfoRef = database.ref('creators');
      createInfoRef.on("value",(data)=>{
        allCreators = data.val();
      })

    }
}