const Score = require("../data/score");

test('Score ', () => {
  const testScore = new Score();

  testScore.add({name: "dante1", score:11});
  testScore.add({name: "dante2", score:1});
  testScore.add({name: "dante3", score:20});
  testScore.add({name: "dante4", score:4});
  testScore.add({name: "dante5", score:4});
  testScore.add({name: "dante6", score:3});
  
  expect(testScore.scores).toEqual([
    {name: "dante3", score:20},
    {name: "dante1", score:11},
    {name: "dante4", score:4},
    {name: "dante5", score:4},
    {name: "dante6", score:3},
    {name: "dante2", score:1},
  ]);
})