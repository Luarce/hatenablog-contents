はてなブログを始めました。

[:contents]

- プロフィール
  - 初めまして

- 内容
  - ゲームのやりこみ・技術系・アニメ感想
  - 更新頻度とか

- 経緯
  - なぜはてなブログか


### 【おまけ】<br>アニメ感想を書こうと思ったきっかけ

なんとなく、作品への感想を自分の言葉で言語化してる人を見て偉いと思った。自分はかなり言語化とか文書化をサボるタイプの人間で、どうせ自分は覚えているからする必要はないと思っていたが、  
これから数年・数十年後に思い出せないことは間違いなく増えるわけで、今のうちに始めておきたいと考えた。

また、これまで何をするにも有志の方が書かれてきたインターネットの記事を参考にしてきており、もしかしたら自分が書いたことが誰かの役に立つかもしれないなと

後にゲームや技術系の備忘録も書いていければ。

あとMarkdownやHTMLの勉強もついでにしたい。

【書く頻度について】

毎話書くのは面倒なので最終回まで見てからまとめて書く。

なんか1話であまり展開が進まないとか、最初の2話だけだと微妙に見えるアニメってあるじゃないですか。

名作と言われる作品にもそういう部分はあるわけで、評価は話ごとではなくせめてクール毎の方がいいと思うんですよね。自分の負担としても3か月に1回まとめて書くくらいならちょうど良さそうなので。

<!-- css関連 -->
<style>
@import url("../../assets/css/hatena-design.css");
</style>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
$(function() {
    var contentsText = "目次";
    var closeText = "[ 閉じる ]";
    var openText = "[ 表示 ]";

    var $contents = $(".table-of-contents");
    var $li = $contents.find("li");

    $contents.prepend(
        '<span class="contents">' + contentsText + '</span>' +
        '<span class="switch">' + closeText + '</span>'
    );

    var $switch = $contents.find(".switch");

    $switch.on("click", function() {
        var isHidden = $li.is(":hidden");
        $li.toggle(400);
        $switch.text(isHidden ? closeText : openText);
    });
});
</script>

