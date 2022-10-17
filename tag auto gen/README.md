
# Tag Auto Gen

"Tag Auto Gen" script is a bookmarklet that generates an HTML hyperlink tag (a) containing the title and URL of the site being viewed.

```html
<a href="http://nishikiout.ml/" title="NKIIB">NKIIB</a>
```

和：「Tag Auto Gen」スクリプトは、閲覧中のWebサイトのURLとタイトルからHTMLのハイパーリンク（aタグ）を生成するブックマークレットです。

# Bookmarklet Script

```javascript
javascript:var%20url=location.href;var%20title=document.title;var%20linkTag%20='%3Ca%20href=%22'+url+'%22%20title=%22'+title+'%22%3E'+title+'%3C/a%3E';var%20x%20=%20prompt('',linkTag);
```

# Recommendation/推奨

This script is recommended for UTF-8 encoded sites.

このスクリプトはUTF-8エンコードを推奨しています。
