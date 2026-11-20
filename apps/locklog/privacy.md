---
layout: policy
permalink: /locklog/privacy/
title: LockLog Privacy Policy
app_name: LockLog
app_url: /locklog/
doc_name: プライバシーポリシー / Privacy Policy
updated: 2026-11-21
langs: ["ja", "en"]
description: LockLog のプライバシーポリシー。無料版は完全ローカル、Pro の世帯同期だけが Firebase を使います。
---

<!--
法務部ドラフト（2026-11-21）。公開前の確認事項：
- Pro のクラウドデータ（Firestore 上の世帯データ）の削除手順（世帯の削除・退出で消えるか、問い合わせ対応か）を実装と突き合わせて確定すること。
- 課金形態（買い切り／購読）の最終形が決まったら、第6項と利用規約の課金条項を合わせて見直すこと。
- 事業者の表示方法は特商法表記と合わせて確認すること。
- 実装の根拠：無料版は Firebase を一切使わない完全ローカル（NFR-05）。位置・Wi-Fi は端末内のみ（HomeSettingsView の設計注記）。Pro は Firebase 匿名認証UID＋Firestore 世帯同期＋FCM（PrivacyInfo.xcprivacy の宣言と一致）。
-->

<section class="lang-section" data-lang="ja" lang="ja" markdown="1">

## 日本語

最終更新日：2026年11月21日

LockLog（以下「本アプリ」）は、鍵をかけたかどうかを記録し、家族と共有できるアプリです。本プライバシーポリシーは、本アプリにおける利用者の情報の取り扱いを説明します。

### 1. 無料版は完全ローカルです

無料版では、個人情報・位置情報・アカウント登録を一切求めません。施錠の記録や設定は、利用者の端末内に暗号化して保存し、外部へ送信しません。Firebase などの外部サービスも使いません。

### 2. 場所と Wi-Fi の情報（端末の中だけ）

登録した場所の座標と Wi-Fi の情報は、その場所を離れた・着いたことを端末の中で判定するためだけに使います。Wi-Fi 名は元の名前が分からない形（指紋）に変換して端末内に保存します。これらの情報を外部へ送信することはありません。

### 3. Pro 版の世帯同期で送る情報

有料の Pro 版で「世帯同期」を使う場合に限り、本アプリは Google の Firebase（認証・Cloud Firestore・Firebase Cloud Messaging）へ、次の情報を送信・保存します。

- 匿名認証のユーザーID（氏名やメールアドレスは取得しません）
- 施錠・帰宅の状態と、その時刻
- 世帯への招待・参加のための情報
- 通知を届けるための通知用トークン

同じ世帯に参加している人には、施錠・帰宅の状態が表示されます。世帯の外の人や開発者が、記録の内容を閲覧することはありません。

### 4. Apple Watch・ウィジェットとの通信

Apple Watch やウィジェットとのやり取りは、利用者自身の端末同士で、Apple の仕組み（WatchConnectivity など）を通じて行います。

### 5. 解析・広告について

本アプリは、アクセス解析（アナリティクス）や広告を行いません。利用者を追跡する行為（トラッキング）も行いません。

### 6. 課金について

Pro 版の支払いは App Store（StoreKit）を通じて行われます。クレジットカードなどの支払い情報は Apple が取り扱い、開発者が取得することはありません。

### 7. 第三者への提供

上記3の Firebase への送信（世帯同期の機能提供のため）と、法令に基づく場合を除き、利用者の情報を第三者へ提供することはありません。

### 8. データの削除

アプリを削除すると、端末内に保存された情報はすべて削除されます。Pro 版でクラウド（Firestore）に保存された世帯データの削除については、お問い合わせください。

### 9. 安全管理

端末内の記録は暗号化して保存し、鍵は端末のキーチェーンで保護します。クラウド側では、参加している世帯のデータにだけアクセスできるようルールで制限しています。

### 10. 子供のプライバシー

本アプリは、13歳未満の子供から意図的に個人情報を収集することはありません。

### 11. 本ポリシーの変更

法令の改正やサービス内容の変更に伴い、本ポリシーを改定することがあります。重要な変更がある場合は、アプリ内での通知など分かりやすい方法でお知らせします。

### お問い合わせ

<{{ page.contact_email | default: site.contact_email}}>

</section>

<section class="lang-section" data-lang="en" lang="en" markdown="1">

## English

Last updated: November 21, 2026

LockLog (the "App") helps you record whether you locked up, and share that status with your household. This Privacy Policy explains how the App handles user information.

### 1. The free version is fully local

The free version never asks for personal information, location accounts, or account registration. Lock records and settings are encrypted and stored only on your device, and are never sent anywhere. No external services, including Firebase, are used.

### 2. Place and Wi-Fi information (on-device only)

Coordinates of places you register and Wi-Fi information are used only on your device to detect leaving and arriving. Wi-Fi names are stored on the device only as fingerprints (hashes) from which the original name cannot be recovered. None of this information is ever sent off the device.

### 3. Information sent for household sync (Pro)

Only if you use household sync in the paid Pro version, the App sends and stores the following in Google Firebase (Authentication, Cloud Firestore, Firebase Cloud Messaging):

- An anonymous authentication user ID (we never obtain your name or email address)
- Lock and home/away status, with timestamps
- Information needed for household invitations and membership
- Push notification tokens

People in the same household can see each other's lock and home status. No one outside the household — including the developer — can view your records.

### 4. Apple Watch and widgets

Communication with Apple Watch and widgets happens between your own devices through Apple's mechanisms (such as WatchConnectivity).

### 5. No analytics, no advertising

The App does not perform usage analytics or show advertising, and does not track users.

### 6. Payments

Pro payments are processed through the App Store (StoreKit). Payment details such as card numbers are handled by Apple and are never obtained by the developer.

### 7. Sharing with third parties

Except for the Firebase transmission described in Section 3 (to provide household sync) and cases required by law, we do not provide user information to third parties.

### 8. Deleting your data

Deleting the App removes everything stored on your device. To request deletion of household data stored in the cloud (Firestore) under Pro, please contact us.

### 9. Security

On-device records are encrypted, with keys protected in the device Keychain. In the cloud, access rules restrict data to members of the same household.

### 10. Children's privacy

We do not knowingly collect personal information from children under 13.

### 11. Changes to this policy

We may revise this policy due to legal amendments or changes to the service. For important changes, we will notify you in a clear way, such as an in-app notice.

### Contact

<{{ page.contact_email | default: site.contact_email}}>

</section>
