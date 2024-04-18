const kuzi = ["大吉","中吉","小吉","吉","末吉","凶","大凶"]

window.addEventListener('keydown', function(event) {
    if (event.key === 'e') {
      // ランダムなエラーを発生させる
      throw new Error('強制終了');
    }
});

let n = Math.floor(Math.random()*8)
console.log(kuzi[n])