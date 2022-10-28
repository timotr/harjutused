# Tasakaalus

Source (in english): https://www.reddit.com/r/dailyprogrammer/comments/afxxca/20190114_challenge_372_easy_perfectly_balanced/

Kirjuta funktsioon mis tuvastab kas stringis on võrdne arv `x` ja `y` sümboleid.
Kui on võrdselt tagastab `true`, kui ei ole võrdselt tagastab `false`.

```
balanced("xxxyyy") => true
balanced("yyyxxx") => true
balanced("xxxyyyy") => false
balanced("yyxyxxyxxyyyyxxxyxyx") => true
balanced("xyxxxxyyyxyxxyxxyy") => false
balanced("") => true
balanced("x") => false
```

## Boonus ülesanne

Nüüd leidke, kas kõik stringis esinevad tähed ilmuvad sama arv kordi. Kõik stringid on väikeste tähtedega. Ärge unustage tühja stringi ("") kontrollida!

```
balanced_bonus("xxxyyyzzz") => true
balanced_bonus("abccbaabccba") => true
balanced_bonus("xxxyyyzzzz") => false
balanced_bonus("abcdefghijklmnopqrstuvwxyz") => true
balanced_bonus("pqq") => false
balanced_bonus("fdedfdeffeddefeeeefddf") => false
balanced_bonus("www") => true
balanced_bonus("x") => true
balanced_bonus("") => true
```

Pane tähele, et funktsioon `balanced_bonus` töötab ühe täheliste sisendite korral natuke teistmoodi kui `balanced` funktsioon. Näiteks "x" sisendi korral.
