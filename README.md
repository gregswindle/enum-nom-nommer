# enum-factory

[![The MIT License][license-image]][license-url]
[![NPM version][npm-image]][npm-url] [![FOSSA Status][fossa-image]][fossa-url]
[![Known Vulnerabilities][vulnerabilities-image]][vulnerabilities-url]<br>
[![Dependency Status][daviddm-image]][daviddm-url]
[![Development Dependency Status][daviddm-dev-image]][daviddm-dev-url]<br>
[![MacOS and Ubuntu build statuses][travis-image]][travis-url]
[![Windows build status][appveyor-image]][appveyor-url]
[![Coverage percentage][codacy-coverage-image]][codacy-url]
[![Codacy code quality][codacy-image]][codacy-url]

> Create a numeric or mixed enumeration (enum) from a plain-old JavaScript
> object.

## Table of Contents

- [1. Install](#1-install)
- [2. Usage](#2-usage)
- [3. Maintainers](#3-maintainers)
- [4. Contributing](#4-contributing)
- [5. License](#6-license)

## 1. Install

```sh
npm i enum-factory
```

<small>[![Back to Table of contents][octicon-triangle-up] [toc]](#table-of-contents)</small>

## 2. Usage

<a href="https://runkit.com/gregswindle/enum-factory"><img alt="Test it out on RunKit.com" height="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/beaker.svg" valign="bottom" width="30">
Test <strong>enum-factory</strong> in your Web browser on RunKit
<img alt="Try enum-factory on RunKit" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/link-external.svg"></a>.

---

Create a numeric (indexed) enumeration:

```js
const enumFactory = require('enum-factory')

const levels = {debug: 5, error: 0, http&#x3A; 3, info: 2, silly: 6, verbose: 4, warn: 1}
const logLevelsEnum = enumFactory.create(levels)
/* =>
{
  0: 'error',
  1: 'warn',
  2: 'info',
  3: 'http',
  4: 'verbose',
  5: 'debug',
  6: 'silly',
  debug: 5,
  error: 0,
  http&#x3A; 3,
  info: 2,
  silly: 6,
  verbose: 4,
  warn: 1
}
*/
```

Create a mixed-type enum:

```js
const validSignatureTypes = {
  MATCH: "match",
  REGEX: "regex",
  match: 0,
  regex: 1
};
const validTypesEnum = enumFactory.create(validSignatureTypes);
/* =>
{
  '0': 'match',
  '1': 'regex',
  'MATCH': 'match',
  'match': 0,
  'REGEX': 'regex',
  'regex': 1
}
*/
```

<small>[![Back to Table of contents][octicon-triangle-up] [toc]](#table-of-contents)</small>

## 3. Maintainers

![Maintenance][maintenance-image]

[@gregswindle](https://github.com/gregswindle)

<small>[![Back to Table of contents][octicon-triangle-up] [toc]](#table-of-contents)</small>

## 4. Contributing

[![GitHub Contributors](https://img.shields.io/github/contributors/gregswindle/enum-factory.svg?style=social)]()
[![GitHub](https://img.shields.io/github/stars/gregswindle/enum-factory.svg?style=social)](https://github.com/gregswindle/enum-factory)
[![GitHub](https://img.shields.io/github/forks/gregswindle/enum-factory.svg?style=social)](https://github.com/gregswindle/enum-factory/network)
[![Greenkeeper badge](https://badges.greenkeeper.io/gregswindle/enum-factory.svg?style=flat-square)](https://greenkeeper.io/)

> ![Gratitude][octicon-heart] We gratefully accept Pull Requests.

Please review [the CONTRIBUTING guidelines](CONTRIBUTING.md) and join in.

<small>[![Back to Table of contents][octicon-triangle-up] [toc]](#table-of-contents)</small>

## 5. License

[MIT](LICENSE) © [Greg Swindle](https://github.com/gregswindle)

> [![Law][octicon-law] View current and **detailed legal NOTICE** report](https://app.fossa.io/attribution/933e5a8d-8842-42f1-8f35-ede2de2bfe69).

[![FOSSA Status](https://app.fossa.io/api/projects/custom%2B804%2Fgithub.com%2Fgregswindle%2Fenum-factory.svg?type=large)](https://app.fossa.io/projects/custom%2B804%2Fgithub.com%2Fgregswindle%2Fenum-factory?ref=badge_large)

<small>[![Back to Table of contents][octicon-triangle-up] [toc]](#table-of-contents)</small>

<!-- Link definition references -->

[mdn-numbers-url]:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates#Numbers
[mdn-decimal-numbers]:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates#Decimal_numbers
[mdn-binary-numbers]:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates#Binary_numbers
[mdn-octal-numbers]:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates#Octal_numbers
[mdn-hexadecimal-numbers]:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates#Hexadecimal_numbers
[mdn-exponentiation]:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates#Exponentiation

<!-- Badges -->

<!-- prettier ignore -->

[appveyor-image]:
  https://img.shields.io/appveyor/ci/gregswindle/enum-factory.svg?style=flat-square&logo=appveyor&label=windows%20build
[appveyor-url]: https://ci.appveyor.com/project/gregswindle/enum-factory
[codacy-coverage-image]:
  https://img.shields.io/codacy/coverage/76d67d5c0a5c4d21b25f611a896e33cb.svg?style=flat-square
[codacy-image]:
  https://api.codacy.com/project/badge/Grade/76d67d5c0a5c4d21b25f611a896e33cb?style=flat-square
[codacy-url]:
  https://www.codacy.com/app/greg_7/enum-factory?utm_source=github.com&utm_medium=referral&utm_content=gregswindle/enum-factory&utm_campaign=Badge_Grade
[coveralls-image]:
  https://img.shields.io/coveralls/github/gregswindle/enum-factory/master.svg
[coveralls-url]: https://coveralls.io/r/gregswindle/enum-factory
[daviddm-dev-image]:
  https://david-dm.org/gregswindle/enum-factory/dev-status.svg?theme=shields.io&style=flat-square
[daviddm-dev-url]: https://david-dm.org/gregswindle/enum-factory?type=dev
[daviddm-image]:
  https://david-dm.org/gregswindle/enum-factory.svg?theme=shields.io&style=flat-square
[daviddm-url]: https://david-dm.org/gregswindle/enum-factory
[fossa-image]:
  https://app.fossa.io/api/projects/custom%2B804%2Fgithub.com%2Fgregswindle%2Fenum-factory.svg?type=shield
[fossa-url]:
  https://app.fossa.io/projects/git%2Bgithub.com%2Fgregswindle%2Fenum-factory?ref=badge_shield
[github-release-image]:
  https://img.shields.io/github/release/gregswindle/enum-factory.svg?style=flat-square
[github-release-url]:
  https://github.com/gregswindle/enum-factory/releases/latest
[license-image]:
  https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license-url]: http://opensource.org/licenses/MIT
[maintenance-image]:
  https://img.shields.io/maintenance/enum-factory/2019.svg?style=flat-square
[notice-url]: https://app.fossa.io/reports/07123904-7d26-40a6-b6af-c74e82a53789
[npm-downloads-month]:
  https://img.shields.io/npm/dm/enum-factory.svg?style=social
[npm-image]: https://img.shields.io/npm/v/enum-factory.svg?style=flat-square
[npm-url]: https://npmjs.org/package/enum-factory
[npms-image]: https://badges.npms.io/enum-factory.svg?style=flat-square
[npms-url]: https://npms.io/search?q=enum-factory
[nsp-image]:
  https://nodesecurity.io/orgs/gregswindle/projects/a2aa0184-ae94-4307-8b87-f0e12324368a/badge
[nsp-url]:
  https://nodesecurity.io/orgs/gregswindle/projects/a2aa0184-ae94-4307-8b87-f0e12324368a
[travis-image]:
  https://img.shields.io/travis/com/gregswindle/enum-factory.svg?branch=master&style=flat-square&label=macOS%20%7C%20ubuntu%20builds&logo=travis
[travis-url]: https://travis-ci.com/gregswindle/enum-factory
[vulnerabilities-image]:
  https://snyk.io/test/github/gregswindle/enum-factory/badge.svg?style=flat-square&targetFile=package.json
[vulnerabilities-url]:
  https://snyk.io/test/github/gregswindle/enum-factory?targetFile=package.json

<!-- Octicons -->

[gl-push-rules-doc]: https://docs.github.com/ee/push_rules/push_rules.html
[gl-push-rules-api-docs]:
  https://docs.github.com/ee/api/projects.html#push-rules-starter
[octicon-alert]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/alert.svg
[octicon-arrow-down]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/arrow-down.svg
[octicon-arrow-left]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/arrow-left.svg
[octicon-arrow-right]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/arrow-right.svg
[octicon-arrow-small-down]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/arrow-small-down.svg
[octicon-arrow-small-left]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/arrow-small-left.svg
[octicon-arrow-small-right]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/arrow-small-right.svg
[octicon-arrow-small-up]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/arrow-small-up.svg
[octicon-arrow-up]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/arrow-up.svg
[octicon-beaker]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/beaker.svg
[octicon-bell]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/bell.svg
[octicon-bold]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/bold.svg
[octicon-book]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/book.svg
[octicon-bookmark]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/bookmark.svg
[octicon-briefcase]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/briefcase.svg
[octicon-broadcast]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/broadcast.svg
[octicon-browser]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/browser.svg
[octicon-bug]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/bug.svg
[octicon-calendar]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/calendar.svg
[octicon-check]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/check.svg
[octicon-checklist]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/checklist.svg
[octicon-chevron-down]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/chevron-down.svg
[octicon-chevron-left]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/chevron-left.svg
[octicon-chevron-right]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/chevron-right.svg
[octicon-chevron-up]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/chevron-up.svg
[octicon-circle-slash]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/circle-slash.svg
[octicon-circuit-board]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/circuit-board.svg
[octicon-clippy]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/clippy.svg
[octicon-clock]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/clock.svg
[octicon-cloud-download]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/cloud-download.svg
[octicon-cloud-upload]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/cloud-upload.svg
[octicon-code]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/code.svg
[octicon-comment-discussion]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/comment-discussion.svg
[octicon-comment]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/comment.svg
[octicon-credit-card]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/credit-card.svg
[octicon-dash]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/dash.svg
[octicon-dashboard]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/dashboard.svg
[octicon-database]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/database.svg
[octicon-desktop-download]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/desktop-download.svg
[octicon-device-camera-video]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/device-camera-video.svg
[octicon-device-camera]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/device-camera.svg
[octicon-device-desktop]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/device-desktop.svg
[octicon-device-mobile]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/device-mobile.svg
[octicon-diff-added]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/diff-added.svg
[octicon-diff-ignored]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/diff-ignored.svg
[octicon-diff-modified]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/diff-modified.svg
[octicon-diff-removed]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/diff-removed.svg
[octicon-diff-renamed]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/diff-renamed.svg
[octicon-diff]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/diff.svg
[octicon-ellipses]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/ellipses.svg
[octicon-ellipsis]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/ellipsis.svg
[octicon-eye]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/eye.svg
[octicon-file-binary]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/file-binary.svg
[octicon-file-code]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/file-code.svg
[octicon-file-directory]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/file-directory.svg
[octicon-file-media]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/file-media.svg
[octicon-file-pdf]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/file-pdf.svg
[octicon-file-submodule]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/file-submodule.svg
[octicon-file-symlink-directory]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/file-symlink-directory.svg
[octicon-file-symlink-file]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/file-symlink-file.svg
[octicon-file-text]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/file-text.svg
[octicon-file-zip]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/file-zip.svg
[octicon-file]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/file.svg
[octicon-flame]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/flame.svg
[octicon-fold]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/fold.svg
[octicon-gear]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/gear.svg
[octicon-gift]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/gift.svg
[octicon-gist-secret]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/gist-secret.svg
[octicon-gist]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/gist.svg
[octicon-git-branch]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/git-branch.svg
[octicon-git-commit]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/git-commit.svg
[octicon-git-compare]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/git-compare.svg
[octicon-git-merge]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/git-merge.svg
[octicon-git-pull-request]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/git-pull-request.svg
[octicon-globe]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/globe.svg
[octicon-grabber]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/grabber.svg
[octicon-graph]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/graph.svg
[octicon-heart]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/heart.svg
[octicon-history]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/history.svg
[octicon-home]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/home.svg
[octicon-horizontal-rule]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/horizontal-rule.svg
[octicon-hubot]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/hubot.svg
[octicon-inbox]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/inbox.svg
[octicon-info]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/info.svg
[octicon-issue-closed]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/issue-closed.svg
[octicon-issue-opened]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/issue-opened.svg
[octicon-issue-reopened]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/issue-reopened.svg
[octicon-italic]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/italic.svg
[octicon-jersey]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/jersey.svg
[octicon-key]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/key.svg
[octicon-keyboard]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/keyboard.svg
[octicon-law]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/law.svg
[octicon-light-bulb]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/light-bulb.svg
[octicon-link-external]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/link-external.svg
[octicon-link]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/link.svg
[octicon-list-ordered]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/list-ordered.svg
[octicon-list-unordered]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/list-unordered.svg
[octicon-location]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/location.svg
[octicon-lock]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/lock.svg
[octicon-logo-gist]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/logo-gist.svg
[octicon-logo-github]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/logo-github.svg
[octicon-mail-read]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/mail-read.svg
[octicon-mail-reply]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/mail-reply.svg
[octicon-mail]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/mail.svg
[octicon-mark-github]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/mark-github.svg
[octicon-markdown]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/markdown.svg
[octicon-megaphone]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/megaphone.svg
[octicon-mention]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/mention.svg
[octicon-milestone]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/milestone.svg
[octicon-mirror]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/mirror.svg
[octicon-mortar-board]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/mortar-board.svg
[octicon-mute]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/mute.svg
[octicon-no-newline]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/no-newline.svg
[octicon-octoface]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/octoface.svg
[octicon-organization]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/organization.svg
[octicon-package]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/package.svg
[octicon-paintcan]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/paintcan.svg
[octicon-pencil]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/pencil.svg
[octicon-person]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/person.svg
[octicon-pin]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/pin.svg
[octicon-plug]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/plug.svg
[octicon-plus-small]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/plus-small.svg
[octicon-plus]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/plus.svg
[octicon-primitive-dot]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/primitive-dot.svg
[octicon-primitive-square]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/primitive-square.svg
[octicon-pulse]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/pulse.svg
[octicon-question]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/question.svg
[octicon-quote]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/quote.svg
[octicon-radio-tower]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/radio-tower.svg
[octicon-reply]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/reply.svg
[octicon-repo-clone]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/repo-clone.svg
[octicon-repo-force-push]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/repo-force-push.svg
[octicon-repo-forked]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/repo-forked.svg
[octicon-repo-pull]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/repo-pull.svg
[octicon-repo-push]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/repo-push.svg
[octicon-repo]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/repo.svg
[octicon-rocket]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/rocket.svg
[octicon-rss]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/rss.svg
[octicon-ruby]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/ruby.svg
[octicon-search]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/search.svg
[octicon-server]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/server.svg
[octicon-settings]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/settings.svg
[octicon-shield]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/shield.svg
[octicon-sign-in]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/sign-in.svg
[octicon-sign-out]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/sign-out.svg
[octicon-smiley]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/smiley.svg
[octicon-squirrel]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/squirrel.svg
[octicon-star]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/star.svg
[octicon-stop]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/stop.svg
[octicon-sync]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/sync.svg
[octicon-tag]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/tag.svg
[octicon-tasklist]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/tasklist.svg
[octicon-telescope]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/telescope.svg
[octicon-terminal]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/terminal.svg
[octicon-text-size]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/text-size.svg
[octicon-three-bars]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/three-bars.svg
[octicon-thumbsdown]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/thumbsdown.svg
[octicon-thumbsup]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/thumbsup.svg
[octicon-tools]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/tools.svg
[octicon-trashcan]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/trashcan.svg
[octicon-triangle-down]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/triangle-down.svg
[octicon-triangle-left]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/triangle-left.svg
[octicon-triangle-right]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/triangle-right.svg
[octicon-triangle-up]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/triangle-up.svg
[octicon-unfold]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/unfold.svg
[octicon-unmute]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/unmute.svg
[octicon-unverified]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/unverified.svg
[octicon-verified]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/verified.svg
[octicon-versions]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/versions.svg
[octicon-watch]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/watch.svg
[octicon-x]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/x.svg
