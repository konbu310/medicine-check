# medicine-check

## これはなに？

アトピー性皮膚炎の薬を飲み忘れていると Twitter 上で指摘してくれるぜ

## 仕組み

1. 薬を飲む
2. iOS のショートカットを Siri から起動して、Dropbox の特定のファイルに日付と時間を記録する。
3. node-cron で指定していた時間に、Dropbox のファイルの 1 行目をチェックする。
4. ちゃんと飲んでいる記録があれば無視 or 飲んでいなかったら Twitter 上で指摘
