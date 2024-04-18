const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const kuzi = ["大吉","中吉","小吉","吉","末吉","凶","大凶"];

function drawKuzi() {
  const n = Math.floor(Math.random() * kuzi.length);
  console.log(kuzi[n]);
}

function handleInput(input) {
  if (input === 'e') {
    console.log('プログラムを終了します。');
    rl.close();
    process.exit(0);
  } else {
    drawKuzi();

  }
}

console.log('エンターキーを押してくじを引く、eキーで終了');

rl.on('line', handleInput);