---
layout: policy
permalink: /bosaid/privacy/
title: Bosaid Privacy Policy
app_name: Bosaid
app_url: /bosaid/
doc_name: プライバシーポリシー / Privacy Policy
updated: 2026-11-21
langs: ["ja", "en"]
description: Bosaid のプライバシーポリシー。解析・広告は行わず、安否共有など機能のための通信だけを行います。
---

<!--
法務部ドラフト（2026-11-21）。公開前の確認事項：
- バーコード読み取り時の商品情報取得（Bosaid #75/#76）が外部サービスへ通信する仕様の場合、「端末内・中継以外の通信」として取得先を追記すること。
- 中継サーバー上のグループデータの保存期間・解散時の削除手順を、サーバー実装（#42 本番中継）と突き合わせて確定すること。
- 事業者の表示方法（個人事業主としての名称・住所の扱い）は特商法表記と合わせて確認すること。
- 前提：V1 ではアクセス解析・クラッシュ収集を行わない（2026-11-21 niya 決定）。解析を入れる場合は本ポリシーの改訂とアプリ内同意の追加が先に必要。
-->

<section class="lang-section" data-lang="ja" lang="ja" markdown="1">

## 日本語

最終更新日：2026年11月21日

Bosaid（以下「本アプリ」）は、家族や職場などのグループで防災計画・備蓄・安否確認を支えるアプリです。本プライバシーポリシーは、本アプリにおける利用者の情報の取り扱いを説明します。

### 1. 端末の中にだけ保存する情報

次の情報は、利用者の端末内に暗号化して保存し、開発者のサーバーへは送信しません。

- 防災計画、訓練の記録
- 備蓄品の情報（品目・数量・保管場所・期限・写真など）
- 避難マップ（地図画像・ピン・経路・取り込んだ画像やPDF）
- アプリの設定

### 2. 機能のために中継サーバーへ送る情報

グループでの安否共有・指示・ライセンス管理を使う場合に限り、本アプリは中継サーバー（Google の Firebase：Cloud Firestore／Cloud Functions／Firebase Cloud Messaging）へ、次の情報を送信します。これはアプリの機能を提供するための通信であり、解析や広告のための送信ではありません。

- グループ番号（ランダムに作られる識別子）と、参加端末の識別子
- 安否回答（状態を表す番号と更新日時だけです。氏名・メモ・位置情報は送信しません）
- 運営者からメンバーへの指示、その既読の状態
- ライセンス情報（グループ番号・有効期限・人数枠・App Store の取引IDを元に戻せない形に変換した値。氏名や支払い情報は送信されません）
- プッシュ通知を届けるための通知用トークン（中継サーバー側でのみ参照し、他の端末からは読めません）

プッシュ通知の本文には個人情報を載せず、通知の種別とグループ番号だけを送ります。

### 3. 位置情報

現在地は、避難マップの中心を決めるなど端末の中での表示にだけ使います。中継サーバーを含め、外部へ送信することはありません。避難マップの地図画像は、国土地理院のサーバーから取得します（出典：国土地理院）。

### 4. カメラ

バーコードの読み取りと、保管場所や備蓄品の写真の登録に使います。撮影した写真は端末内に暗号化して保存します。

### 5. 解析・広告について

本アプリは、アクセス解析（アナリティクス）やクラッシュ情報の収集を行いません。広告も表示しません。**解析目的で情報を第三者へ提供することはありません。** 利用者を追跡する行為（トラッキング）も行いません。

### 6. 第三者への提供

上記2の中継サーバー（Firebase）への送信と、法令に基づく場合を除き、利用者の情報を第三者へ提供することはありません。

### 7. データの削除

グループを抜けると、そのグループのデータと暗号鍵は端末から消去されます。アプリを削除すると、端末内に保存された情報はすべて削除されます。中継サーバー上に残るグループデータの削除については、お問い合わせください。

### 8. 安全管理

端末内の情報は AES-256-GCM で暗号化し、グループごとに鍵を分けています。中継サーバーでは、参加しているグループの情報にだけアクセスできるよう制限しています。

### 9. 子供のプライバシー

本アプリは、13歳未満の子供から意図的に個人情報を収集することはありません。

### 10. 本ポリシーの変更

法令の改正やサービス内容の変更に伴い、本ポリシーを改定することがあります。重要な変更がある場合は、アプリ内での通知など分かりやすい方法でお知らせします。

### お問い合わせ

<{{ page.contact_email | default: site.contact_email}}>

</section>

<section class="lang-section" data-lang="en" lang="en" markdown="1">

## English

Last updated: November 21, 2026

Bosaid (the "App") helps groups such as families and workplaces with disaster planning, stockpiles, and safety check-ins. This Privacy Policy explains how the App handles user information.

### 1. Information stored only on your device

The following is encrypted and stored only on your device, and is never sent to the developer's servers:

- Disaster plans and drill records
- Stockpile information (items, quantities, storage places, expiry dates, photos)
- Evacuation maps (map images, pins, routes, imported images and PDFs)
- App settings

### 2. Information sent to the relay server to provide features

Only when you use group features (safety sharing, instructions, license management), the App sends the following to a relay server (Google Firebase: Cloud Firestore / Cloud Functions / Firebase Cloud Messaging). This communication exists solely to provide the App's features — not for analytics or advertising.

- A group number (a randomly generated identifier) and participating device identifiers
- Safety responses (status codes and update timestamps only — names, notes, and location are never sent)
- Instructions from group organizers and their read status
- License information (group number, expiry, seat count, and a hashed App Store transaction ID — names and payment details are never sent)
- Push notification tokens (accessible only to server-side processing, never readable by other devices)

Push notification payloads contain no personal information — only the notification type and the group number.

### 3. Location

Your current location is used only on your device, for example to center an evacuation map. It is never sent anywhere, including the relay server. Map images are fetched from the Geospatial Information Authority of Japan (GSI).

### 4. Camera

Used to scan barcodes and to register photos of storage places and stockpiles. Photos are encrypted and stored on your device.

### 5. No analytics, no advertising

The App does not collect usage analytics or crash reports, and shows no advertising. **We do not provide information to third parties for analytics purposes.** We do not track users.

### 6. Sharing with third parties

Except for the relay server described in Section 2 and cases required by law, we do not provide user information to third parties.

### 7. Deleting your data

Leaving a group erases that group's data and encryption keys from your device. Deleting the App removes everything stored on the device. To request deletion of group data remaining on the relay server, please contact us.

### 8. Security

On-device data is encrypted with AES-256-GCM, with separate keys per group. On the relay server, access is restricted so that only members of a group can access that group's information.

### 9. Children's privacy

We do not knowingly collect personal information from children under 13.

### 10. Changes to this policy

We may revise this policy due to legal amendments or changes to the service. For important changes, we will notify you in a clear way, such as an in-app notice.

### Contact

<{{ page.contact_email | default: site.contact_email}}>

</section>
