class Channel {
  constructor(score, chat) {
    this.score = score
    this.chat = chat
  }

  addMsg(msg){
    /*
    msg: {name, chat}
    */
   this.chat.add(msg)
  }

  addScore(score){
    /*
    msg: {name, score}
    */
   this.score.add(score)
  }

  get getChats(){
    return this.chat.msgs


    
  }

  get getScores(){
    return this.score.scores
  }
}

module.exports = Channel; 