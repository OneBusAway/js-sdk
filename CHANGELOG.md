# Changelog

## 1.10.2 (2025-07-10)

Full Changelog: [v1.10.1...v1.10.2](https://github.com/OneBusAway/js-sdk/compare/v1.10.1...v1.10.2)

### Chores

* make some internal functions async ([bd7a6e7](https://github.com/OneBusAway/js-sdk/commit/bd7a6e78fae9e047beed8d8ada8c3f93558bef60))

## 1.10.1 (2025-07-03)

Full Changelog: [v1.10.0...v1.10.1](https://github.com/OneBusAway/js-sdk/compare/v1.10.0...v1.10.1)

### Bug Fixes

* **client:** don't send `Content-Type` for bodyless methods ([98d2260](https://github.com/OneBusAway/js-sdk/commit/98d22608ed823b3c42fe32d4f2b8b74416736e37))

## 1.10.0 (2025-07-03)

Full Changelog: [v1.9.3...v1.10.0](https://github.com/OneBusAway/js-sdk/compare/v1.9.3...v1.10.0)

### Features

* **client:** add support for endpoint-specific base URLs ([a810e63](https://github.com/OneBusAway/js-sdk/commit/a810e63562fa409c1cf0e64aa1dc2c05ddc231fe))


### Bug Fixes

* **ci:** release-doctor — report correct token name ([c6ba4d8](https://github.com/OneBusAway/js-sdk/commit/c6ba4d8d076d5e822c929b7edce87b214a73d9fe))


### Chores

* **ci:** enable for pull requests ([f4d3b43](https://github.com/OneBusAway/js-sdk/commit/f4d3b4305c1feaf6e6f22b506d929e88f778cb5d))
* **ci:** only run for pushes and fork pull requests ([af79c29](https://github.com/OneBusAway/js-sdk/commit/af79c290abbf16b4d850e7fd4b38143bfb9199bf))
* mention unit type in timeout docs ([b650d71](https://github.com/OneBusAway/js-sdk/commit/b650d719ebe8d57b29cf091138f3c63c44c6c7ae))

## 1.9.3 (2025-06-14)

Full Changelog: [v1.9.2...v1.9.3](https://github.com/OneBusAway/js-sdk/compare/v1.9.2...v1.9.3)

### Bug Fixes

* publish script — handle NPM errors correctly ([170a3dd](https://github.com/OneBusAway/js-sdk/commit/170a3ddbb49d34dc23479e7187953acf81e35843))


### Chores

* **internal:** make base APIResource abstract ([9c94aa1](https://github.com/OneBusAway/js-sdk/commit/9c94aa131540e803b108736bf06d0eb22f4c4d65))

## 1.9.2 (2025-06-04)

Full Changelog: [v1.9.1...v1.9.2](https://github.com/OneBusAway/js-sdk/compare/v1.9.1...v1.9.2)

### Chores

* **docs:** use top-level-await in example snippets ([054a981](https://github.com/OneBusAway/js-sdk/commit/054a98186c9de42db6adae1153092054b70baec5))

## 1.9.1 (2025-05-28)

Full Changelog: [v1.9.0...v1.9.1](https://github.com/OneBusAway/js-sdk/compare/v1.9.0...v1.9.1)

### Chores

* **docs:** grammar improvements ([69c73d1](https://github.com/OneBusAway/js-sdk/commit/69c73d1a48d1c14d6b48159d615a2b4217ee8098))
* improve publish-npm script --latest tag logic ([39ed659](https://github.com/OneBusAway/js-sdk/commit/39ed6590e291acc8ed1987c1d3952362ad33d43b))

## 1.9.0 (2025-05-17)

Full Changelog: [v1.8.5...v1.9.0](https://github.com/OneBusAway/js-sdk/compare/v1.8.5...v1.9.0)

### Features

* **api:** api update ([4ef40c1](https://github.com/OneBusAway/js-sdk/commit/4ef40c139aee85497637a85b0a256c62ff3de48d))

## 1.8.5 (2025-05-07)

Full Changelog: [v1.8.4...v1.8.5](https://github.com/OneBusAway/js-sdk/compare/v1.8.4...v1.8.5)

### Chores

* **ci:** add timeout thresholds for CI jobs ([e790128](https://github.com/OneBusAway/js-sdk/commit/e790128972e705f8008ca7e8bd01333bc647b265))
* **ci:** bump node version for release workflows ([47da0d6](https://github.com/OneBusAway/js-sdk/commit/47da0d657411169fbaa8b0e7b4caf80118c41d6c))
* **ci:** only use depot for staging repos ([642c4c8](https://github.com/OneBusAway/js-sdk/commit/642c4c82142d31c79902a7f124cbb5eccff61043))
* **client:** minor internal fixes ([7a5758f](https://github.com/OneBusAway/js-sdk/commit/7a5758ffd34abdb3ab7060c47538a3892608fd31))
* **internal:** codegen related update ([df16f42](https://github.com/OneBusAway/js-sdk/commit/df16f4229a8201e69600c9627bceee72600eabae))
* **internal:** reduce CI branch coverage ([16ffab7](https://github.com/OneBusAway/js-sdk/commit/16ffab7746cc9f45609e8149e236a20d00c863a6))
* **internal:** upload builds and expand CI branch coverage ([124eb5e](https://github.com/OneBusAway/js-sdk/commit/124eb5e8224eac5832bdb407520ab93ce2fa9843))


### Documentation

* add examples to tsdocs ([7ebb2ea](https://github.com/OneBusAway/js-sdk/commit/7ebb2ea02282e08fa2625cd1eae517162d13b556))
* **readme:** fix typo ([7186196](https://github.com/OneBusAway/js-sdk/commit/71861968594c6e0f7a117a265287b758fc5cc102))

## 1.8.4 (2025-04-05)

Full Changelog: [v1.8.3...v1.8.4](https://github.com/OneBusAway/js-sdk/compare/v1.8.3...v1.8.4)

### Bug Fixes

* **mcp:** remove unused tools.ts ([#336](https://github.com/OneBusAway/js-sdk/issues/336)) ([e5e65d4](https://github.com/OneBusAway/js-sdk/commit/e5e65d41b209163a0bfbfdeff022b1ddda083018))

## 1.8.3 (2025-04-04)

Full Changelog: [v1.8.2...v1.8.3](https://github.com/OneBusAway/js-sdk/compare/v1.8.2...v1.8.3)

### Bug Fixes

* **api:** improve type resolution when importing as a package ([#334](https://github.com/OneBusAway/js-sdk/issues/334)) ([5f9e05c](https://github.com/OneBusAway/js-sdk/commit/5f9e05c5d6ebd3951cb428ca3433d6a3a5fb9d78))


### Chores

* **internal:** add aliases for Record and Array ([#332](https://github.com/OneBusAway/js-sdk/issues/332)) ([dec0e5f](https://github.com/OneBusAway/js-sdk/commit/dec0e5fcbf4990d8be25db3e96be2d03b0aaac46))

## 1.8.2 (2025-04-03)

Full Changelog: [v1.8.1...v1.8.2](https://github.com/OneBusAway/js-sdk/compare/v1.8.1...v1.8.2)

### Bug Fixes

* **client:** send `X-Stainless-Timeout` in seconds ([#329](https://github.com/OneBusAway/js-sdk/issues/329)) ([e9679b4](https://github.com/OneBusAway/js-sdk/commit/e9679b40366b6f02eeea2727b8bcc28e66293c8b))

## 1.8.1 (2025-03-28)

Full Changelog: [v1.8.0...v1.8.1](https://github.com/OneBusAway/js-sdk/compare/v1.8.0...v1.8.1)

### Bug Fixes

* **internal:** work around https://github.com/vercel/next.js/issues/76881 ([#326](https://github.com/OneBusAway/js-sdk/issues/326)) ([c9b09e8](https://github.com/OneBusAway/js-sdk/commit/c9b09e8812cbaa3007248affa258004713976197))

## 1.8.0 (2025-03-22)

Full Changelog: [v1.7.3...v1.8.0](https://github.com/OneBusAway/js-sdk/compare/v1.7.3...v1.8.0)

### Features

* add SKIP_BREW env var to ./scripts/bootstrap ([#318](https://github.com/OneBusAway/js-sdk/issues/318)) ([a01f726](https://github.com/OneBusAway/js-sdk/commit/a01f726677a32765bf0c9e900e96bf3964db7c1b))
* **client:** accept RFC6838 JSON content types ([#320](https://github.com/OneBusAway/js-sdk/issues/320)) ([c3ab30c](https://github.com/OneBusAway/js-sdk/commit/c3ab30ce2750366423adcffde024c3a69f42410d))


### Bug Fixes

* avoid type error in certain environments ([#324](https://github.com/OneBusAway/js-sdk/issues/324)) ([bdee18e](https://github.com/OneBusAway/js-sdk/commit/bdee18ebf5ee7581cfc88c39aa38bac609e12779))


### Chores

* **exports:** cleaner resource index imports ([#322](https://github.com/OneBusAway/js-sdk/issues/322)) ([30f9c5d](https://github.com/OneBusAway/js-sdk/commit/30f9c5d9d1c15cb848f7fbad6e2540ad7bcbabfc))
* **exports:** stop using path fallbacks ([#323](https://github.com/OneBusAway/js-sdk/issues/323)) ([875ea2e](https://github.com/OneBusAway/js-sdk/commit/875ea2eca7c4308c1d3ba9f028195ca14bf0ada1))
* **internal:** remove extra empty newlines ([#321](https://github.com/OneBusAway/js-sdk/issues/321)) ([1050d0a](https://github.com/OneBusAway/js-sdk/commit/1050d0a5a8cad6a90ce9b0b6db87de820b305696))

## 1.7.3 (2025-03-01)

Full Changelog: [v1.7.2...v1.7.3](https://github.com/OneBusAway/js-sdk/compare/v1.7.2...v1.7.3)

### Documentation

* update URLs from stainlessapi.com to stainless.com ([#315](https://github.com/OneBusAway/js-sdk/issues/315)) ([2b1ba71](https://github.com/OneBusAway/js-sdk/commit/2b1ba71389a807963af9a7eb4049620991403e42))

## 1.7.2 (2025-02-22)

Full Changelog: [v1.7.1...v1.7.2](https://github.com/OneBusAway/js-sdk/compare/v1.7.1...v1.7.2)

### Chores

* **internal:** fix devcontainers setup ([#312](https://github.com/OneBusAway/js-sdk/issues/312)) ([d81e2fb](https://github.com/OneBusAway/js-sdk/commit/d81e2fb62e652baebda37462799416703379a133))

## 1.7.1 (2025-02-14)

Full Changelog: [v1.7.0...v1.7.1](https://github.com/OneBusAway/js-sdk/compare/v1.7.0...v1.7.1)

### Bug Fixes

* **client:** fix export map for index exports ([#309](https://github.com/OneBusAway/js-sdk/issues/309)) ([8fdcd07](https://github.com/OneBusAway/js-sdk/commit/8fdcd072de4d65fd27f5416cc634253ad8517863))

## 1.7.0 (2025-02-05)

Full Changelog: [v1.6.11...v1.7.0](https://github.com/OneBusAway/js-sdk/compare/v1.6.11...v1.7.0)

### Features

* **client:** send `X-Stainless-Timeout` header ([#306](https://github.com/OneBusAway/js-sdk/issues/306)) ([85e24c0](https://github.com/OneBusAway/js-sdk/commit/85e24c0e9a96309101318c1cdd14ab590c125555))

## 1.6.11 (2025-01-21)

Full Changelog: [v1.6.10...v1.6.11](https://github.com/OneBusAway/js-sdk/compare/v1.6.10...v1.6.11)

### Chores

* **internal:** codegen related update ([#303](https://github.com/OneBusAway/js-sdk/issues/303)) ([0e10af1](https://github.com/OneBusAway/js-sdk/commit/0e10af1dc05cc08ea918e19c6bb73b708bf24cc1))

## 1.6.10 (2025-01-17)

Full Changelog: [v1.6.9...v1.6.10](https://github.com/OneBusAway/js-sdk/compare/v1.6.9...v1.6.10)

### Chores

* **internal:** codegen related update ([#300](https://github.com/OneBusAway/js-sdk/issues/300)) ([3dfd7db](https://github.com/OneBusAway/js-sdk/commit/3dfd7db4accc47ddafc0ca77bfb6355da582d1da))

## 1.6.9 (2025-01-09)

Full Changelog: [v1.6.8...v1.6.9](https://github.com/OneBusAway/js-sdk/compare/v1.6.8...v1.6.9)

### Chores

* **internal:** codegen related update ([#297](https://github.com/OneBusAway/js-sdk/issues/297)) ([2ad490b](https://github.com/OneBusAway/js-sdk/commit/2ad490bcdd12a47e771865054ba1d9373f9c50d2))

## 1.6.8 (2025-01-02)

Full Changelog: [v1.6.7...v1.6.8](https://github.com/OneBusAway/js-sdk/compare/v1.6.7...v1.6.8)

### Chores

* **internal:** codegen related update ([#294](https://github.com/OneBusAway/js-sdk/issues/294)) ([c655fb7](https://github.com/OneBusAway/js-sdk/commit/c655fb715577f4c03cc80d0e5b50837df7528cb8))

## 1.6.7 (2024-12-21)

Full Changelog: [v1.6.6...v1.6.7](https://github.com/OneBusAway/js-sdk/compare/v1.6.6...v1.6.7)

### Chores

* **internal:** codegen related update ([#291](https://github.com/OneBusAway/js-sdk/issues/291)) ([3c564f3](https://github.com/OneBusAway/js-sdk/commit/3c564f33bd77aeb114a6c07bf7f93a6339403afc))

## 1.6.6 (2024-12-20)

Full Changelog: [v1.6.5...v1.6.6](https://github.com/OneBusAway/js-sdk/compare/v1.6.5...v1.6.6)

### Bug Fixes

* **client:** normalize method ([#288](https://github.com/OneBusAway/js-sdk/issues/288)) ([5325e0b](https://github.com/OneBusAway/js-sdk/commit/5325e0bbdd191c0829ac15a5bd716824e8560041))

## 1.6.5 (2024-12-18)

Full Changelog: [v1.6.4...v1.6.5](https://github.com/OneBusAway/js-sdk/compare/v1.6.4...v1.6.5)

### Chores

* **internal:** fix some typos ([#285](https://github.com/OneBusAway/js-sdk/issues/285)) ([7f302ea](https://github.com/OneBusAway/js-sdk/commit/7f302ea871ab192d03668da9ac7a82e91eee4e34))

## 1.6.4 (2024-12-12)

Full Changelog: [v1.6.3...v1.6.4](https://github.com/OneBusAway/js-sdk/compare/v1.6.3...v1.6.4)

### Chores

* **internal:** codegen related update ([#282](https://github.com/OneBusAway/js-sdk/issues/282)) ([301ce2b](https://github.com/OneBusAway/js-sdk/commit/301ce2bac82edd5bbe442fdc416b26b4ada00f88))

## 1.6.3 (2024-12-11)

Full Changelog: [v1.6.2...v1.6.3](https://github.com/OneBusAway/js-sdk/compare/v1.6.2...v1.6.3)

### Chores

* **types:** nicer error class types + jsdocs ([#279](https://github.com/OneBusAway/js-sdk/issues/279)) ([0e2b341](https://github.com/OneBusAway/js-sdk/commit/0e2b3416ec5cfcaae5ab8d02117e394c743fe250))

## 1.6.2 (2024-12-11)

Full Changelog: [v1.6.1...v1.6.2](https://github.com/OneBusAway/js-sdk/compare/v1.6.1...v1.6.2)

### Chores

* **internal:** bump cross-spawn to v7.0.6 ([#276](https://github.com/OneBusAway/js-sdk/issues/276)) ([8b3f83f](https://github.com/OneBusAway/js-sdk/commit/8b3f83fc75f74f4b42b29733b8e69c16a8d6edb9))

## 1.6.1 (2024-12-10)

Full Changelog: [v1.6.0...v1.6.1](https://github.com/OneBusAway/js-sdk/compare/v1.6.0...v1.6.1)

### Chores

* **internal:** remove unnecessary getRequestClient function ([#273](https://github.com/OneBusAway/js-sdk/issues/273)) ([cb80653](https://github.com/OneBusAway/js-sdk/commit/cb80653dfbb98193bffe20c62948907fee1b3846))

## 1.6.0 (2024-11-30)

Full Changelog: [v1.5.0...v1.6.0](https://github.com/OneBusAway/js-sdk/compare/v1.5.0...v1.6.0)

### Features

* feat(examples): add stops-for-agency example script ([5ca814d](https://github.com/OneBusAway/js-sdk/commit/5ca814d2264f5d300af28423c64c21fd974f5d01))

## 1.5.0 (2024-11-29)

Full Changelog: [v1.4.0...v1.5.0](https://github.com/OneBusAway/js-sdk/compare/v1.4.0...v1.5.0)

### Features

* **api:** api update ([#268](https://github.com/OneBusAway/js-sdk/issues/268)) ([aae3f08](https://github.com/OneBusAway/js-sdk/commit/aae3f08995e6fad2f89ac0ca1702af39152d0363))

## 1.4.0 (2024-11-29)

Full Changelog: [v1.3.0...v1.4.0](https://github.com/OneBusAway/js-sdk/compare/v1.3.0...v1.4.0)

### Features

* **api:** api update ([#265](https://github.com/OneBusAway/js-sdk/issues/265)) ([6b6fac2](https://github.com/OneBusAway/js-sdk/commit/6b6fac2a0c780fbb04fecba06562a1b27af10d39))

## 1.3.0 (2024-11-28)

Full Changelog: [v1.2.10...v1.3.0](https://github.com/OneBusAway/js-sdk/compare/v1.2.10...v1.3.0)

### Features

* **internal:** make git install file structure match npm ([#262](https://github.com/OneBusAway/js-sdk/issues/262)) ([b8c057d](https://github.com/OneBusAway/js-sdk/commit/b8c057d8313cf8645f0e50b96f1ac410dbfb9b79))

## 1.2.10 (2024-11-20)

Full Changelog: [v1.2.9...v1.2.10](https://github.com/OneBusAway/js-sdk/compare/v1.2.9...v1.2.10)

### Documentation

* remove suggestion to use `npm` call out ([#258](https://github.com/OneBusAway/js-sdk/issues/258)) ([d1a2641](https://github.com/OneBusAway/js-sdk/commit/d1a264103d8211aed9079ca506934620f7fb0899))

## 1.2.9 (2024-11-15)

Full Changelog: [v1.2.8...v1.2.9](https://github.com/OneBusAway/js-sdk/compare/v1.2.8...v1.2.9)

### Chores

* rebuild project due to codegen change ([#255](https://github.com/OneBusAway/js-sdk/issues/255)) ([7f2466c](https://github.com/OneBusAway/js-sdk/commit/7f2466c0f6f6a7812f545b83fbb7e5dff96fc1de))

## 1.2.8 (2024-11-15)

Full Changelog: [v1.2.7...v1.2.8](https://github.com/OneBusAway/js-sdk/compare/v1.2.7...v1.2.8)

### Chores

* rebuild project due to codegen change ([#252](https://github.com/OneBusAway/js-sdk/issues/252)) ([9d534cb](https://github.com/OneBusAway/js-sdk/commit/9d534cb883122faded24133678110764610a686b))

## 1.2.7 (2024-11-12)

Full Changelog: [v1.2.6...v1.2.7](https://github.com/OneBusAway/js-sdk/compare/v1.2.6...v1.2.7)

### Chores

* rebuild project due to codegen change ([#249](https://github.com/OneBusAway/js-sdk/issues/249)) ([cc70406](https://github.com/OneBusAway/js-sdk/commit/cc70406137fff49430960d6b8ecaf64f7c003eb9))

## 1.2.6 (2024-11-01)

Full Changelog: [v1.2.5...v1.2.6](https://github.com/OneBusAway/js-sdk/compare/v1.2.5...v1.2.6)

### Chores

* rebuild project due to codegen change ([#246](https://github.com/OneBusAway/js-sdk/issues/246)) ([7a85b74](https://github.com/OneBusAway/js-sdk/commit/7a85b746348fb484ff66c3dec6e0a47fbdb85e02))

## 1.2.5 (2024-11-01)

Full Changelog: [v1.2.4...v1.2.5](https://github.com/OneBusAway/js-sdk/compare/v1.2.4...v1.2.5)

### Chores

* rebuild project due to codegen change ([#244](https://github.com/OneBusAway/js-sdk/issues/244)) ([7d09f89](https://github.com/OneBusAway/js-sdk/commit/7d09f894abc590b8a5b5ffe7af381ab8960de28a))

## 1.2.4 (2024-11-01)

Full Changelog: [v1.2.3...v1.2.4](https://github.com/OneBusAway/js-sdk/compare/v1.2.3...v1.2.4)

### Chores

* rebuild project due to codegen change ([#241](https://github.com/OneBusAway/js-sdk/issues/241)) ([a87ff8d](https://github.com/OneBusAway/js-sdk/commit/a87ff8dcbb2f662e14190af6c7b36c473ca8b5b3))

## 1.2.3 (2024-10-28)

Full Changelog: [v1.2.2...v1.2.3](https://github.com/OneBusAway/js-sdk/compare/v1.2.2...v1.2.3)

### Chores

* rebuild project due to codegen change ([#238](https://github.com/OneBusAway/js-sdk/issues/238)) ([89cc9a3](https://github.com/OneBusAway/js-sdk/commit/89cc9a33ff516904510652219bf263e695a992bc))

## 1.2.2 (2024-10-25)

Full Changelog: [v1.2.1...v1.2.2](https://github.com/OneBusAway/js-sdk/compare/v1.2.1...v1.2.2)

### Chores

* rebuild project due to codegen change ([#235](https://github.com/OneBusAway/js-sdk/issues/235)) ([b47e40e](https://github.com/OneBusAway/js-sdk/commit/b47e40ef047f93dfe3c4ca7a964af39885a8b3e4))

## 1.2.1 (2024-10-25)

Full Changelog: [v1.2.0...v1.2.1](https://github.com/OneBusAway/js-sdk/compare/v1.2.0...v1.2.1)

### Chores

* rebuild project due to codegen change ([#232](https://github.com/OneBusAway/js-sdk/issues/232)) ([4e5483e](https://github.com/OneBusAway/js-sdk/commit/4e5483e731bcf1becfc32784bc90644fea1db122))

## 1.2.0 (2024-10-22)

Full Changelog: [v1.1.3...v1.2.0](https://github.com/OneBusAway/js-sdk/compare/v1.1.3...v1.2.0)

### Features

* **api:** api update ([#229](https://github.com/OneBusAway/js-sdk/issues/229)) ([a073c51](https://github.com/OneBusAway/js-sdk/commit/a073c5198f7becab66c51880cbfab4d90c62e8c2))

## 1.1.3 (2024-10-02)

Full Changelog: [v1.1.2...v1.1.3](https://github.com/OneBusAway/js-sdk/compare/v1.1.2...v1.1.3)

### Chores

* **internal:** codegen related update ([#226](https://github.com/OneBusAway/js-sdk/issues/226)) ([c4d1185](https://github.com/OneBusAway/js-sdk/commit/c4d11850ebb5cdfdfc38592cb7a1825685e2d71a))

## 1.1.2 (2024-09-27)

Full Changelog: [v1.1.1...v1.1.2](https://github.com/OneBusAway/js-sdk/compare/v1.1.1...v1.1.2)

### Chores

* **internal:** codegen related update ([#223](https://github.com/OneBusAway/js-sdk/issues/223)) ([0432267](https://github.com/OneBusAway/js-sdk/commit/0432267a6316b6c701a88787a441a4e141305dcf))

## 1.1.1 (2024-09-27)

Full Changelog: [v1.1.0...v1.1.1](https://github.com/OneBusAway/js-sdk/compare/v1.1.0...v1.1.1)

### Chores

* **internal:** codegen related update ([#219](https://github.com/OneBusAway/js-sdk/issues/219)) ([58bb189](https://github.com/OneBusAway/js-sdk/commit/58bb18962efccb4ba2108dcbe61c2e050cea78f4))

## 1.1.0 (2024-09-11)

Full Changelog: [v1.0.2...v1.1.0](https://github.com/OneBusAway/js-sdk/compare/v1.0.2...v1.1.0)

### Features

* **api:** OpenAPI spec update via Stainless API ([#217](https://github.com/OneBusAway/js-sdk/issues/217)) ([ddae052](https://github.com/OneBusAway/js-sdk/commit/ddae052d9c90311addcc33f0c0c70deab33023ce))


### Chores

* configure new SDK language ([#214](https://github.com/OneBusAway/js-sdk/issues/214)) ([1a4b890](https://github.com/OneBusAway/js-sdk/commit/1a4b89014e70ef26ba6524df705d89330f82a1e9))
* **internal:** codegen related update ([#216](https://github.com/OneBusAway/js-sdk/issues/216)) ([34e99b4](https://github.com/OneBusAway/js-sdk/commit/34e99b4a436d66efec7652f63619e40c0f36ba0f))
* update blockId ([52ea00c](https://github.com/OneBusAway/js-sdk/commit/52ea00c0934992d119f626405dbbf4901cc872b6))


### Refactors

* Refactor queryParams ([b0560c9](https://github.com/OneBusAway/js-sdk/commit/b0560c9d74a2d5b309566f826eb273a5e8662a01))

## 1.0.2 (2024-08-31)

Full Changelog: [v1.0.1...v1.0.2](https://github.com/OneBusAway/js-sdk/compare/v1.0.1...v1.0.2)

### Chores

* **ci:** install deps via ./script/bootstrap ([#212](https://github.com/OneBusAway/js-sdk/issues/212)) ([9a44a5b](https://github.com/OneBusAway/js-sdk/commit/9a44a5b27fa20f5de4f53e12d24b6ed43750a90a))
* run tsc as part of lint script ([#210](https://github.com/OneBusAway/js-sdk/issues/210)) ([27a9b3c](https://github.com/OneBusAway/js-sdk/commit/27a9b3c570db5dee15cb70b77be25a1ba4b95d23))

## 1.0.1 (2024-08-28)

Full Changelog: [v1.0.0...v1.0.1](https://github.com/OneBusAway/js-sdk/compare/v1.0.0...v1.0.1)

### Chores

* **ci:** check for build errors ([#207](https://github.com/OneBusAway/js-sdk/issues/207)) ([7d5628e](https://github.com/OneBusAway/js-sdk/commit/7d5628e57057abb817c1a906c3b8dea3103ca656))

## 1.0.0 (2024-08-28)

Full Changelog: [v0.1.0-alpha.41...v1.0.0](https://github.com/OneBusAway/js-sdk/compare/v0.1.0-alpha.41...v1.0.0)

### Chores

* release: 1.0.0 ([773c340](https://github.com/OneBusAway/js-sdk/commit/773c34018ef2de02571aa0a71f97c7aee1d5ee99))

## 0.1.0-alpha.41 (2024-08-24)

Full Changelog: [v0.1.0-alpha.40...v0.1.0-alpha.41](https://github.com/OneBusAway/js-sdk/compare/v0.1.0-alpha.40...v0.1.0-alpha.41)

### Features

* **api:** OpenAPI spec update via Stainless API ([#202](https://github.com/OneBusAway/js-sdk/issues/202)) ([c46d924](https://github.com/OneBusAway/js-sdk/commit/c46d924c2055b7aa931e3bdb32844001a1a2ccde))

## 0.1.0-alpha.40 (2024-08-20)

Full Changelog: [v0.1.0-alpha.39...v0.1.0-alpha.40](https://github.com/OneBusAway/js-sdk/compare/v0.1.0-alpha.39...v0.1.0-alpha.40)

### Features

* **api:** OpenAPI spec update via Stainless API ([#188](https://github.com/OneBusAway/js-sdk/issues/188)) ([81208e6](https://github.com/OneBusAway/js-sdk/commit/81208e62a52714dae490a6544ec64076e2af20dc))
* **api:** OpenAPI spec update via Stainless API ([#191](https://github.com/OneBusAway/js-sdk/issues/191)) ([1edcc74](https://github.com/OneBusAway/js-sdk/commit/1edcc746cfd7f36d93ab371901af7f0a6bfeaa1f))
* **api:** OpenAPI spec update via Stainless API ([#192](https://github.com/OneBusAway/js-sdk/issues/192)) ([18b4067](https://github.com/OneBusAway/js-sdk/commit/18b40671fcbc150188bb028525c4e9115ebd40be))
* **api:** OpenAPI spec update via Stainless API ([#193](https://github.com/OneBusAway/js-sdk/issues/193)) ([4997727](https://github.com/OneBusAway/js-sdk/commit/49977278ae1a3c8449295eddedbb9f311da51025))
* **api:** OpenAPI spec update via Stainless API ([#194](https://github.com/OneBusAway/js-sdk/issues/194)) ([35bfd3d](https://github.com/OneBusAway/js-sdk/commit/35bfd3d94b03281c7e33a5f2f94d3fb244c05d13))
* **api:** OpenAPI spec update via Stainless API ([#195](https://github.com/OneBusAway/js-sdk/issues/195)) ([bc5e2aa](https://github.com/OneBusAway/js-sdk/commit/bc5e2aa21877f1f0cd15d717c1adadde32180f81))
* **api:** OpenAPI spec update via Stainless API ([#196](https://github.com/OneBusAway/js-sdk/issues/196)) ([1a8a509](https://github.com/OneBusAway/js-sdk/commit/1a8a50992eef459c1c37ef6ee7a076235104ef1c))
* **api:** OpenAPI spec update via Stainless API ([#197](https://github.com/OneBusAway/js-sdk/issues/197)) ([888162a](https://github.com/OneBusAway/js-sdk/commit/888162a1e29c7357be7bead60b9f6ede810f564f))
* **api:** OpenAPI spec update via Stainless API ([#198](https://github.com/OneBusAway/js-sdk/issues/198)) ([712e991](https://github.com/OneBusAway/js-sdk/commit/712e9914645a5e19482e27262e2d1635ec1a9905))
* **api:** OpenAPI spec update via Stainless API ([#199](https://github.com/OneBusAway/js-sdk/issues/199)) ([ffe2b91](https://github.com/OneBusAway/js-sdk/commit/ffe2b919c3b8d9e973a37fcba054c41bf705bc43))
* **api:** OpenAPI spec update via Stainless API ([#200](https://github.com/OneBusAway/js-sdk/issues/200)) ([4f2a3a3](https://github.com/OneBusAway/js-sdk/commit/4f2a3a32074cb49a4f036dc63c62820d608730c2))


### Chores

* **internal:** codegen related update ([#190](https://github.com/OneBusAway/js-sdk/issues/190)) ([faff47d](https://github.com/OneBusAway/js-sdk/commit/faff47d9d53b81f6127e6b5250b20cd45cbf7bc3))

## 0.1.0-alpha.39 (2024-08-12)

Full Changelog: [v0.1.0-alpha.38...v0.1.0-alpha.39](https://github.com/OneBusAway/js-sdk/compare/v0.1.0-alpha.38...v0.1.0-alpha.39)

### Features

* **api:** OpenAPI spec update via Stainless API ([#183](https://github.com/OneBusAway/js-sdk/issues/183)) ([890130e](https://github.com/OneBusAway/js-sdk/commit/890130e2e3a41453804066a313831da79fd27410))
* **api:** update via SDK Studio ([#185](https://github.com/OneBusAway/js-sdk/issues/185)) ([87faf11](https://github.com/OneBusAway/js-sdk/commit/87faf117774e9835d7c51d1dbdaff4067d07439e))

## 0.1.0-alpha.38 (2024-08-10)

Full Changelog: [v0.1.0-alpha.37...v0.1.0-alpha.38](https://github.com/OneBusAway/js-sdk/compare/v0.1.0-alpha.37...v0.1.0-alpha.38)

### Features

* **api:** OpenAPI spec update via Stainless API ([#177](https://github.com/OneBusAway/js-sdk/issues/177)) ([0c8fae7](https://github.com/OneBusAway/js-sdk/commit/0c8fae71d7821a6801a110ea9898a81f6ef70ff0))
* **api:** OpenAPI spec update via Stainless API ([#181](https://github.com/OneBusAway/js-sdk/issues/181)) ([b9ca906](https://github.com/OneBusAway/js-sdk/commit/b9ca90674eef39841464defd91bb37e9ba276456))


### Chores

* **ci:** bump prism mock server version ([#180](https://github.com/OneBusAway/js-sdk/issues/180)) ([b72989f](https://github.com/OneBusAway/js-sdk/commit/b72989f302ceac4da344e728d65e4b780d5dc1e0))
* **ci:** minor changes ([#179](https://github.com/OneBusAway/js-sdk/issues/179)) ([50ae404](https://github.com/OneBusAway/js-sdk/commit/50ae4049da86327c72b0e1a38acc63ce1b2e9b48))

## 0.1.0-alpha.37 (2024-08-08)

Full Changelog: [v0.1.0-alpha.36...v0.1.0-alpha.37](https://github.com/OneBusAway/js-sdk/compare/v0.1.0-alpha.36...v0.1.0-alpha.37)

### Features

* **api:** OpenAPI spec update via Stainless API ([#173](https://github.com/OneBusAway/js-sdk/issues/173)) ([6b2700e](https://github.com/OneBusAway/js-sdk/commit/6b2700e3f32b164a019a02b4324e4d9d86733e53))


### Chores

* force eslint to use non flat config ([#175](https://github.com/OneBusAway/js-sdk/issues/175)) ([861c10d](https://github.com/OneBusAway/js-sdk/commit/861c10dae90fb89893933ac760f954d7651a70f3))

## 0.1.0-alpha.36 (2024-08-08)

Full Changelog: [v0.1.0-alpha.35...v0.1.0-alpha.36](https://github.com/OneBusAway/js-sdk/compare/v0.1.0-alpha.35...v0.1.0-alpha.36)

### Features

* **api:** OpenAPI spec update via Stainless API ([#169](https://github.com/OneBusAway/js-sdk/issues/169)) ([703c05c](https://github.com/OneBusAway/js-sdk/commit/703c05cc24b5cc944ec3c26694d1f05da993180d))

## 0.1.0-alpha.35 (2024-08-08)

Full Changelog: [v0.1.0-alpha.34...v0.1.0-alpha.35](https://github.com/OneBusAway/js-sdk/compare/v0.1.0-alpha.34...v0.1.0-alpha.35)

### Features

* **api:** OpenAPI spec update via Stainless API ([#153](https://github.com/OneBusAway/js-sdk/issues/153)) ([9a36f6f](https://github.com/OneBusAway/js-sdk/commit/9a36f6f47fdca1adc37a5d05ab1aae33339cc9f6))
* **api:** OpenAPI spec update via Stainless API ([#160](https://github.com/OneBusAway/js-sdk/issues/160)) ([882a3ee](https://github.com/OneBusAway/js-sdk/commit/882a3ee50ee05b28162d8c7251f9877d23bd09f1))
* **api:** OpenAPI spec update via Stainless API ([#161](https://github.com/OneBusAway/js-sdk/issues/161)) ([d836bfd](https://github.com/OneBusAway/js-sdk/commit/d836bfda2307f322a5ecd1aa76f76b0baa92ef57))
* **api:** OpenAPI spec update via Stainless API ([#162](https://github.com/OneBusAway/js-sdk/issues/162)) ([2ff3a62](https://github.com/OneBusAway/js-sdk/commit/2ff3a62e2d57d63a4709762e9b95b36041c550fd))
* **api:** OpenAPI spec update via Stainless API ([#163](https://github.com/OneBusAway/js-sdk/issues/163)) ([c01c042](https://github.com/OneBusAway/js-sdk/commit/c01c0428842bf425b32b6627074a88226b1db3cc))

## 0.1.0-alpha.34 (2024-08-01)

Full Changelog: [v0.1.0-alpha.33...v0.1.0-alpha.34](https://github.com/OneBusAway/js-sdk/compare/v0.1.0-alpha.33...v0.1.0-alpha.34)

### Features

* Add arrivals-and-departures-for-stop example file ([14566cf](https://github.com/OneBusAway/js-sdk/commit/14566cf09b9af7c8e6c18f520421876d481aea83))
* Add current-time example file ([ed4095b](https://github.com/OneBusAway/js-sdk/commit/ed4095bacd1d9a627952b03152eb952fbd44b03c))
* Add example code to retrieve trip information for a specific vehicle ([acfc636](https://github.com/OneBusAway/js-sdk/commit/acfc636654a05e671d349083fa84ba33ba67fd0e))
* Add example file for agencies with coverage ([f7559c0](https://github.com/OneBusAway/js-sdk/commit/f7559c0f0cb434db17cb3daaf9350c6381090ac1))
* Add stops-for-location example file ([9f2758e](https://github.com/OneBusAway/js-sdk/commit/9f2758e08e614eabffa548f838e58d3483f8942b))
* **api:** OpenAPI spec update via Stainless API ([#100](https://github.com/OneBusAway/js-sdk/issues/100)) ([7aca464](https://github.com/OneBusAway/js-sdk/commit/7aca464baa2afe4beebcfea8b7f3a749b7d4d377))
* **api:** OpenAPI spec update via Stainless API ([#106](https://github.com/OneBusAway/js-sdk/issues/106)) ([53deaea](https://github.com/OneBusAway/js-sdk/commit/53deaeaeb1952278fb2aeb212d9932ab96b19077))
* **api:** OpenAPI spec update via Stainless API ([#108](https://github.com/OneBusAway/js-sdk/issues/108)) ([2f0645a](https://github.com/OneBusAway/js-sdk/commit/2f0645a1b16f62b24c36687478d8ef66eeb9097d))
* **api:** OpenAPI spec update via Stainless API ([#110](https://github.com/OneBusAway/js-sdk/issues/110)) ([f6334b2](https://github.com/OneBusAway/js-sdk/commit/f6334b28c221fdb076f31e2b0149a8f1f393d12c))
* **api:** OpenAPI spec update via Stainless API ([#112](https://github.com/OneBusAway/js-sdk/issues/112)) ([8d2ba6a](https://github.com/OneBusAway/js-sdk/commit/8d2ba6ae143f27c69bd6ada365392d84cbacf817))
* **api:** OpenAPI spec update via Stainless API ([#113](https://github.com/OneBusAway/js-sdk/issues/113)) ([d556fec](https://github.com/OneBusAway/js-sdk/commit/d556fecf29286c09450db776f952b4b1cb45b6db))
* **api:** OpenAPI spec update via Stainless API ([#115](https://github.com/OneBusAway/js-sdk/issues/115)) ([0ad62cd](https://github.com/OneBusAway/js-sdk/commit/0ad62cd2b20b854f4a9b3f9faf08a3179d24ceb8))
* **api:** OpenAPI spec update via Stainless API ([#122](https://github.com/OneBusAway/js-sdk/issues/122)) ([e9310c2](https://github.com/OneBusAway/js-sdk/commit/e9310c2832ace88ed76300e6e3ee44232aaf48cd))
* **api:** OpenAPI spec update via Stainless API ([#125](https://github.com/OneBusAway/js-sdk/issues/125)) ([54acc91](https://github.com/OneBusAway/js-sdk/commit/54acc912ac88a539e1260b4325037c4ab126aaf6))
* **api:** OpenAPI spec update via Stainless API ([#130](https://github.com/OneBusAway/js-sdk/issues/130)) ([eee707b](https://github.com/OneBusAway/js-sdk/commit/eee707b04492e82eb9234d619719d87c97a37fdd))
* **api:** OpenAPI spec update via Stainless API ([#130](https://github.com/OneBusAway/js-sdk/issues/130)) ([95028c7](https://github.com/OneBusAway/js-sdk/commit/95028c7430d4ac11d32b9a01f5d9b438c4791544))
* **api:** OpenAPI spec update via Stainless API ([#132](https://github.com/OneBusAway/js-sdk/issues/132)) ([5a9fdcd](https://github.com/OneBusAway/js-sdk/commit/5a9fdcd5328fa4b5cc85bf0dc9c35624a3adf713))
* **api:** OpenAPI spec update via Stainless API ([#134](https://github.com/OneBusAway/js-sdk/issues/134)) ([6481606](https://github.com/OneBusAway/js-sdk/commit/648160678f5bf5334b44b936b9315d11789f6aba))
* **api:** OpenAPI spec update via Stainless API ([#138](https://github.com/OneBusAway/js-sdk/issues/138)) ([b420d73](https://github.com/OneBusAway/js-sdk/commit/b420d7308ab924ffe85b071177f226c88b2dd795))
* **api:** OpenAPI spec update via Stainless API ([#141](https://github.com/OneBusAway/js-sdk/issues/141)) ([1beedc0](https://github.com/OneBusAway/js-sdk/commit/1beedc0e13972e67c121184331631fe64fd22194))
* **api:** OpenAPI spec update via Stainless API ([#144](https://github.com/OneBusAway/js-sdk/issues/144)) ([46eb625](https://github.com/OneBusAway/js-sdk/commit/46eb62592ee3929a570fc273f997eae762f1d147))
* **api:** OpenAPI spec update via Stainless API ([#146](https://github.com/OneBusAway/js-sdk/issues/146)) ([f9eece2](https://github.com/OneBusAway/js-sdk/commit/f9eece21d32b43a5066699b27ad54d341bbd2bc9))
* **api:** OpenAPI spec update via Stainless API ([#150](https://github.com/OneBusAway/js-sdk/issues/150)) ([e3b51ba](https://github.com/OneBusAway/js-sdk/commit/e3b51ba907e8576df7948a0168e4afd9a7660962))
* **api:** OpenAPI spec update via Stainless API ([#151](https://github.com/OneBusAway/js-sdk/issues/151)) ([f8458d0](https://github.com/OneBusAway/js-sdk/commit/f8458d08f483319150c9df6a64e180f3b1db11a7))
* **api:** OpenAPI spec update via Stainless API ([#96](https://github.com/OneBusAway/js-sdk/issues/96)) ([1c5c8ce](https://github.com/OneBusAway/js-sdk/commit/1c5c8ceb9efd2ca24e8ce3c21269040108a99973))
* **api:** OpenAPI spec update via Stainless API ([#98](https://github.com/OneBusAway/js-sdk/issues/98)) ([5f44a71](https://github.com/OneBusAway/js-sdk/commit/5f44a719500e10a8f194389eb77170dd40bb74aa))
* **api:** OpenAPI spec update via Stainless API ([#99](https://github.com/OneBusAway/js-sdk/issues/99)) ([f94af0b](https://github.com/OneBusAway/js-sdk/commit/f94af0b70cd273ed08bfd4adad78f064ff314f8f))
* **api:** update via SDK Studio ([8af6e97](https://github.com/OneBusAway/js-sdk/commit/8af6e9770e04563f35880282c62b911d74277eb0))
* **api:** update via SDK Studio ([471bcce](https://github.com/OneBusAway/js-sdk/commit/471bccee52838dd1bc1cff3196d41cd4b7765f2f))
* **api:** update via SDK Studio ([7e75e1a](https://github.com/OneBusAway/js-sdk/commit/7e75e1ab5dc91c7cd0f3b9120d30503f3e65118c))
* **api:** update via SDK Studio ([636d645](https://github.com/OneBusAway/js-sdk/commit/636d645e4c345da3f9cb8a2f9e9d4b2387eb649d))
* **api:** update via SDK Studio ([59b8b09](https://github.com/OneBusAway/js-sdk/commit/59b8b0945a99a774e17ea4ede49bf41cd9b09119))
* **api:** update via SDK Studio ([e34a8f7](https://github.com/OneBusAway/js-sdk/commit/e34a8f751832f02791cee252a012133f892bea30))
* **api:** update via SDK Studio ([2c5c46d](https://github.com/OneBusAway/js-sdk/commit/2c5c46de81852f0dcf5d7224b7b0c1c8aa10cca1))
* **api:** update via SDK Studio ([63ade43](https://github.com/OneBusAway/js-sdk/commit/63ade4330e83ad3663e4bc166f22306c5691a7cf))
* **api:** update via SDK Studio ([45b73f7](https://github.com/OneBusAway/js-sdk/commit/45b73f71cffdf1c7c10dd2083480cf28090bb7d6))
* **api:** update via SDK Studio ([5010e71](https://github.com/OneBusAway/js-sdk/commit/5010e7149e8626b55ad21c2030870eb5f19d0b64))
* **api:** update via SDK Studio ([0fa8e49](https://github.com/OneBusAway/js-sdk/commit/0fa8e497ff5a6e1788e993d99269ec27feb85fcd))
* **api:** update via SDK Studio ([61b04a2](https://github.com/OneBusAway/js-sdk/commit/61b04a2f6d095d480c2c9797d3c1ab866cdf6b22))
* **api:** update via SDK Studio ([4f85c47](https://github.com/OneBusAway/js-sdk/commit/4f85c47c644b22465f708aeb13808954c9a5aa01))
* **api:** update via SDK Studio ([104ac71](https://github.com/OneBusAway/js-sdk/commit/104ac71ea33b92c0e9209e166d2fd962b226056e))
* **api:** update via SDK Studio ([44b6129](https://github.com/OneBusAway/js-sdk/commit/44b6129a99ce55a9ad5285474596f4b018e43b54))
* **api:** update via SDK Studio ([bc1cabb](https://github.com/OneBusAway/js-sdk/commit/bc1cabbe86ef8c3885ec2a0e6f71b8fb80af7bf2))
* **api:** update via SDK Studio ([e89f2d6](https://github.com/OneBusAway/js-sdk/commit/e89f2d6a3bd59e2f4a4c4ada211151ac006e8823))
* **api:** update via SDK Studio ([f0b84c2](https://github.com/OneBusAway/js-sdk/commit/f0b84c2d480e58f270917f1333f04a26fdcb6efb))
* **api:** update via SDK Studio ([fa40879](https://github.com/OneBusAway/js-sdk/commit/fa40879aa01e0d0ccbf3d2e8efd5997eeea1232c))
* **api:** update via SDK Studio ([1b579d6](https://github.com/OneBusAway/js-sdk/commit/1b579d6750a5546957bb4d607b5f942dbae5cd7d))
* **api:** update via SDK Studio ([e7fd33d](https://github.com/OneBusAway/js-sdk/commit/e7fd33d666417423f1ede22d5196fe113d0c9276))
* **api:** update via SDK Studio ([c22596a](https://github.com/OneBusAway/js-sdk/commit/c22596ad319746115603d087e8b9d07231fc5ea7))
* **api:** update via SDK Studio ([2b5c22a](https://github.com/OneBusAway/js-sdk/commit/2b5c22a2bebea1ede2e26b4a8c865f4394ca8abf))
* **api:** update via SDK Studio ([db928b9](https://github.com/OneBusAway/js-sdk/commit/db928b9ce464d43de3ce66eb2ef6852674e4e926))
* **api:** update via SDK Studio ([1f41402](https://github.com/OneBusAway/js-sdk/commit/1f4140279132ec9c3036df91beeb305288e40279))
* **api:** update via SDK Studio ([8eb5779](https://github.com/OneBusAway/js-sdk/commit/8eb57792919bf9e674f9eb631fe947a669cf87ed))
* **api:** update via SDK Studio ([6cfb261](https://github.com/OneBusAway/js-sdk/commit/6cfb261540c1cee85ce75c2c0058e14277191618))
* **api:** update via SDK Studio ([65b8d66](https://github.com/OneBusAway/js-sdk/commit/65b8d66c36c2e33f62868a24e4668e3c061291f7))
* **api:** update via SDK Studio ([19de187](https://github.com/OneBusAway/js-sdk/commit/19de187b6e3409a8be56bd67019b85a41686b055))
* **api:** update via SDK Studio ([4a8e59c](https://github.com/OneBusAway/js-sdk/commit/4a8e59ca3d08a74c158d639dcb47e0c2060b13fb))
* **api:** update via SDK Studio ([84076ba](https://github.com/OneBusAway/js-sdk/commit/84076ba04f809e07d1871ae16cadec1112de42a6))
* **api:** update via SDK Studio ([f8549aa](https://github.com/OneBusAway/js-sdk/commit/f8549aabefa8698a6f965665cb0fbf8e59b4e517))
* **api:** update via SDK Studio ([138877d](https://github.com/OneBusAway/js-sdk/commit/138877d5e82ad901f10eae8c894ed75942912d62))
* **api:** update via SDK Studio ([4ef332b](https://github.com/OneBusAway/js-sdk/commit/4ef332b1786476221a18079158e2a67f86d30294))
* **api:** update via SDK Studio ([4fd4f86](https://github.com/OneBusAway/js-sdk/commit/4fd4f86f44cac5a2b73e549ce8983ac1d9d452a8))
* **api:** update via SDK Studio ([b0cf896](https://github.com/OneBusAway/js-sdk/commit/b0cf896b44728597258e6153f616d035c6f8f002))
* **api:** update via SDK Studio ([e26f644](https://github.com/OneBusAway/js-sdk/commit/e26f6445e06b79237dfa3324f33f4f4d77e1858a))
* **api:** update via SDK Studio ([1505a53](https://github.com/OneBusAway/js-sdk/commit/1505a53633c54db02e4631da8903af1bdeaaa37c))
* **api:** update via SDK Studio ([7984663](https://github.com/OneBusAway/js-sdk/commit/7984663e1e32b72ee37b3f6586e3db1dfc0eede7))
* **api:** update via SDK Studio ([05f08da](https://github.com/OneBusAway/js-sdk/commit/05f08daaf5dcea26dd2f32b2358d06fb654a5dd1))
* **api:** update via SDK Studio ([f7145e1](https://github.com/OneBusAway/js-sdk/commit/f7145e1373b3335eec764636d38f13c4a2db56df))
* **api:** update via SDK Studio ([bd58e80](https://github.com/OneBusAway/js-sdk/commit/bd58e80aff9181225b78cd46ba8f6af66c3d8438))
* **api:** update via SDK Studio ([70a482b](https://github.com/OneBusAway/js-sdk/commit/70a482bceb5738073fd1e9542dbc6ac400c8727e))
* **api:** update via SDK Studio ([62aaaaa](https://github.com/OneBusAway/js-sdk/commit/62aaaaa23db651d90430522aada3bbf5306ae541))
* **api:** update via SDK Studio ([e0e12cd](https://github.com/OneBusAway/js-sdk/commit/e0e12cd39e484f7fd122adbbbbd44f0322a73b0b))
* **api:** update via SDK Studio ([2b28bfd](https://github.com/OneBusAway/js-sdk/commit/2b28bfd30fd508b36c5e4d86dfda6867e8380b11))
* **api:** update via SDK Studio ([f7bbda4](https://github.com/OneBusAway/js-sdk/commit/f7bbda49aa85d85674dea618c0bd4210e7ecf26e))
* **api:** update via SDK Studio ([3850a11](https://github.com/OneBusAway/js-sdk/commit/3850a1177a2d43392cbe67615a20a9dbfd72fc86))
* **api:** update via SDK Studio ([804d57d](https://github.com/OneBusAway/js-sdk/commit/804d57dcabcd2e20ee070040cc7a25c4121d5ac0))
* **api:** update via SDK Studio ([99d7c8b](https://github.com/OneBusAway/js-sdk/commit/99d7c8b3c81534cef06f661a296d55119df32623))
* **api:** update via SDK Studio ([79dbad6](https://github.com/OneBusAway/js-sdk/commit/79dbad6d99747b49c060956adcdd5858ea529915))
* **api:** update via SDK Studio ([70b029b](https://github.com/OneBusAway/js-sdk/commit/70b029b00c2ed78cd263d3e6c93424a7bce97fa1))
* **api:** update via SDK Studio ([d31c7d3](https://github.com/OneBusAway/js-sdk/commit/d31c7d3c90f25ccb9829d6b62bf688f731ecb00b))
* **api:** update via SDK Studio ([774a3c2](https://github.com/OneBusAway/js-sdk/commit/774a3c23a41e5b1bdf7582f4cc46ee9a78feb4c3))
* **api:** update via SDK Studio ([0a074e0](https://github.com/OneBusAway/js-sdk/commit/0a074e0ca8454e2835dfad1bde9615ee3aba946d))
* **api:** update via SDK Studio ([b836154](https://github.com/OneBusAway/js-sdk/commit/b83615425423104d0825be2ff4f788e466693783))
* **api:** update via SDK Studio ([d080485](https://github.com/OneBusAway/js-sdk/commit/d080485c7046f058124a1b33eebe8b3c4b730251))
* **api:** update via SDK Studio ([396c320](https://github.com/OneBusAway/js-sdk/commit/396c320eae4d442e51ee95a8f0a5f23b127af293))
* **api:** update via SDK Studio ([7b3a52f](https://github.com/OneBusAway/js-sdk/commit/7b3a52f4a428bc6aed90cf3c82439126ee769adf))
* **api:** update via SDK Studio ([01cc389](https://github.com/OneBusAway/js-sdk/commit/01cc3894f749af8807d20407ed94751a466baf24))
* **api:** update via SDK Studio ([1eb19b1](https://github.com/OneBusAway/js-sdk/commit/1eb19b104aa61e4fff0f14789f5dfdbfa05f42d1))
* **api:** update via SDK Studio ([69a4dc3](https://github.com/OneBusAway/js-sdk/commit/69a4dc30dcd020cb266256793e34df73c9af0fa6))
* **api:** update via SDK Studio ([b49bd7f](https://github.com/OneBusAway/js-sdk/commit/b49bd7f60b5b3212a33a5e5be039a7a253c62607))
* **api:** update via SDK Studio ([ba677e5](https://github.com/OneBusAway/js-sdk/commit/ba677e53f087a3cad87204ff056f28c4b10c4ca7))
* **api:** update via SDK Studio ([3581428](https://github.com/OneBusAway/js-sdk/commit/3581428bf581098f1d68543cbacdf1f7eb2a6257))
* **api:** update via SDK Studio ([ee8d599](https://github.com/OneBusAway/js-sdk/commit/ee8d59947b94b80ae56b91062a078a1678aeb4e0))
* **api:** update via SDK Studio ([e38ca86](https://github.com/OneBusAway/js-sdk/commit/e38ca86cff15c883a97cbdd2b634a66c16ddfdd9))
* **api:** update via SDK Studio ([#10](https://github.com/OneBusAway/js-sdk/issues/10)) ([f3f5e57](https://github.com/OneBusAway/js-sdk/commit/f3f5e57fb2788806021e9279e4ebe53cc9bb3e40))
* **api:** update via SDK Studio ([#11](https://github.com/OneBusAway/js-sdk/issues/11)) ([5c89035](https://github.com/OneBusAway/js-sdk/commit/5c8903570e113e66873e0b11b3d47bc441ab267d))
* **api:** update via SDK Studio ([#13](https://github.com/OneBusAway/js-sdk/issues/13)) ([519fdcf](https://github.com/OneBusAway/js-sdk/commit/519fdcff9e54917cc82a79fe79cf3238d58ccc7a))
* **api:** update via SDK Studio ([#15](https://github.com/OneBusAway/js-sdk/issues/15)) ([a11113d](https://github.com/OneBusAway/js-sdk/commit/a11113dede20d4e4f9f32f3c733179d3b6d53e91))
* **api:** update via SDK Studio ([#17](https://github.com/OneBusAway/js-sdk/issues/17)) ([aca8733](https://github.com/OneBusAway/js-sdk/commit/aca8733bf1409325d6627c34b32bf62903a686d7))
* **api:** update via SDK Studio ([#19](https://github.com/OneBusAway/js-sdk/issues/19)) ([3ea09d4](https://github.com/OneBusAway/js-sdk/commit/3ea09d4794b0a3318717ff487b5824ea1eed9609))
* **api:** update via SDK Studio ([#2](https://github.com/OneBusAway/js-sdk/issues/2)) ([c2749f9](https://github.com/OneBusAway/js-sdk/commit/c2749f92d2d095861bfb73a6078184b2b86da527))
* **api:** update via SDK Studio ([#21](https://github.com/OneBusAway/js-sdk/issues/21)) ([f915cad](https://github.com/OneBusAway/js-sdk/commit/f915cad029fd1c1f759895e2f84d4837587ff134))
* **api:** update via SDK Studio ([#24](https://github.com/OneBusAway/js-sdk/issues/24)) ([391e24c](https://github.com/OneBusAway/js-sdk/commit/391e24cbe3c1d14e67d7ae750e49e19493b2486d))
* **api:** update via SDK Studio ([#26](https://github.com/OneBusAway/js-sdk/issues/26)) ([48e2775](https://github.com/OneBusAway/js-sdk/commit/48e277542fdd4981f18aa008c9f6103e1a459de4))
* **api:** update via SDK Studio ([#29](https://github.com/OneBusAway/js-sdk/issues/29)) ([406a490](https://github.com/OneBusAway/js-sdk/commit/406a4908709d284ce6a6cf8a2086e2ef34782cd4))
* **api:** update via SDK Studio ([#3](https://github.com/OneBusAway/js-sdk/issues/3)) ([2048ea9](https://github.com/OneBusAway/js-sdk/commit/2048ea97826c2b3bb301d2125773adb9ae20301d))
* **api:** update via SDK Studio ([#32](https://github.com/OneBusAway/js-sdk/issues/32)) ([27eaf00](https://github.com/OneBusAway/js-sdk/commit/27eaf00b3188f62dc6835cd70850186f87427c82))
* **api:** update via SDK Studio ([#36](https://github.com/OneBusAway/js-sdk/issues/36)) ([a7d8667](https://github.com/OneBusAway/js-sdk/commit/a7d86674b63ad73d901cbce8da3d19c5f76bdc5a))
* **api:** update via SDK Studio ([#4](https://github.com/OneBusAway/js-sdk/issues/4)) ([1bcde64](https://github.com/OneBusAway/js-sdk/commit/1bcde641bf99b22cfa46ab6658989a5cf99f4ef3))
* **api:** update via SDK Studio ([#40](https://github.com/OneBusAway/js-sdk/issues/40)) ([d978fd6](https://github.com/OneBusAway/js-sdk/commit/d978fd6bab0bb7e3a37e10fc332506192fe9a6a8))
* **api:** update via SDK Studio ([#44](https://github.com/OneBusAway/js-sdk/issues/44)) ([72b90e2](https://github.com/OneBusAway/js-sdk/commit/72b90e278ac39026dbd186459b0f06ce84758a49))
* **api:** update via SDK Studio ([#48](https://github.com/OneBusAway/js-sdk/issues/48)) ([7af175b](https://github.com/OneBusAway/js-sdk/commit/7af175b06d8a811733f4e373aafc267938d66717))
* **api:** update via SDK Studio ([#5](https://github.com/OneBusAway/js-sdk/issues/5)) ([2395415](https://github.com/OneBusAway/js-sdk/commit/2395415837537fbc196b88d9c9700b78ae7f80cb))
* **api:** update via SDK Studio ([#5](https://github.com/OneBusAway/js-sdk/issues/5)) ([35e898e](https://github.com/OneBusAway/js-sdk/commit/35e898e624904947f711dcfa0de18093ca572321))
* **api:** update via SDK Studio ([#51](https://github.com/OneBusAway/js-sdk/issues/51)) ([a3eb644](https://github.com/OneBusAway/js-sdk/commit/a3eb64498dcb476e931556858299d089f0f45068))
* **api:** update via SDK Studio ([#53](https://github.com/OneBusAway/js-sdk/issues/53)) ([032d5c1](https://github.com/OneBusAway/js-sdk/commit/032d5c1640faa83b8aa9c5fa488009483c9ba3c1))
* **api:** update via SDK Studio ([#56](https://github.com/OneBusAway/js-sdk/issues/56)) ([99d55f2](https://github.com/OneBusAway/js-sdk/commit/99d55f27f151f8d65d96fc29acc36a8d6f780145))
* **api:** update via SDK Studio ([#60](https://github.com/OneBusAway/js-sdk/issues/60)) ([aaabd42](https://github.com/OneBusAway/js-sdk/commit/aaabd42f7198bb397b39c5b3948208a39c4b6ab9))
* **api:** update via SDK Studio ([#7](https://github.com/OneBusAway/js-sdk/issues/7)) ([3aa8090](https://github.com/OneBusAway/js-sdk/commit/3aa80902f9e361235b10a7250f0603a828066d17))
* **api:** update via SDK Studio ([#72](https://github.com/OneBusAway/js-sdk/issues/72)) ([574345f](https://github.com/OneBusAway/js-sdk/commit/574345f9194b29920a4a7893db0a06ea16292b53))
* **api:** update via SDK Studio ([#76](https://github.com/OneBusAway/js-sdk/issues/76)) ([4449d90](https://github.com/OneBusAway/js-sdk/commit/4449d904c2dceedd8810afacc2487ef7c253f1e6))
* **api:** update via SDK Studio ([#78](https://github.com/OneBusAway/js-sdk/issues/78)) ([baed475](https://github.com/OneBusAway/js-sdk/commit/baed475e677ddffcec8a53e7baffceb1c8edeb1b))
* **api:** update via SDK Studio ([#79](https://github.com/OneBusAway/js-sdk/issues/79)) ([6072946](https://github.com/OneBusAway/js-sdk/commit/60729460aa3a2eb4848e23a423e16f09072d163d))
* **api:** update via SDK Studio ([#8](https://github.com/OneBusAway/js-sdk/issues/8)) ([3cb84fe](https://github.com/OneBusAway/js-sdk/commit/3cb84feaec6fa432e0a5dd1fbaffa71ccc1fc417))
* **api:** update via SDK Studio ([#83](https://github.com/OneBusAway/js-sdk/issues/83)) ([63ead40](https://github.com/OneBusAway/js-sdk/commit/63ead409bba325016c0f323fe1deae75a3f2ee73))
* **api:** update via SDK Studio ([#85](https://github.com/OneBusAway/js-sdk/issues/85)) ([1e23f43](https://github.com/OneBusAway/js-sdk/commit/1e23f433b414cd7020dd68d3613566ad2145e163))
* **api:** update via SDK Studio ([#87](https://github.com/OneBusAway/js-sdk/issues/87)) ([5f00b20](https://github.com/OneBusAway/js-sdk/commit/5f00b20b95edefd8ab2ddc4a0ca877c8e0da1ce5))
* **api:** update via SDK Studio ([#89](https://github.com/OneBusAway/js-sdk/issues/89)) ([4220db4](https://github.com/OneBusAway/js-sdk/commit/4220db458064fda4867f4e28df1d036fab030977))
* **api:** update via SDK Studio ([#9](https://github.com/OneBusAway/js-sdk/issues/9)) ([d7b739f](https://github.com/OneBusAway/js-sdk/commit/d7b739f4c8e8ea448117f8580091b9e4b8cb9b52))
* **api:** update via SDK Studio ([#90](https://github.com/OneBusAway/js-sdk/issues/90)) ([4243c6e](https://github.com/OneBusAway/js-sdk/commit/4243c6e2afc920520e5acee3d5ff7455a39821c1))
* **api:** update via SDK Studio ([#92](https://github.com/OneBusAway/js-sdk/issues/92)) ([9d4f1b4](https://github.com/OneBusAway/js-sdk/commit/9d4f1b400bbffafb8a12275b57fb09f7369362e8))
* **api:** update via SDK Studio ([#94](https://github.com/OneBusAway/js-sdk/issues/94)) ([0057392](https://github.com/OneBusAway/js-sdk/commit/0057392ec952bb152e68b0eb2742ea26343eed35))
* chore:(examples): Update arrivalAndDepartutes example code ([646442a](https://github.com/OneBusAway/js-sdk/commit/646442ae524fd34f3dc137f129636249b9de903a))
* chore(api): update code format ([16d80d1](https://github.com/OneBusAway/js-sdk/commit/16d80d1938183fa31b6746f073e41bf62a20d486))
* chore(examples): Update  arrival-and-departutes example code ([a31482c](https://github.com/OneBusAway/js-sdk/commit/a31482c9cb38b59195fe26e1020a48962d7290e4))
* chore(examples): Update arrival-and-departures example code ([5e810fe](https://github.com/OneBusAway/js-sdk/commit/5e810fe3f4e054a444ee1de91cd544f0553fc3ac))
* chore(examples): Update arrival-and-departutes example code ([0e5ec4f](https://github.com/OneBusAway/js-sdk/commit/0e5ec4f761353d86af61aa1aca87ca3eac95fe9c))
* chore(examples): update baseURL ([61b04b7](https://github.com/OneBusAway/js-sdk/commit/61b04b7c5582d830a9f5d1f453385634db6e8b2f))
* chore(examples): update stops-for-location example code ([61f52b7](https://github.com/OneBusAway/js-sdk/commit/61f52b721c34396e4cd7a3bfc03cc3bd40a0154b))
* chore(examples): Update stops-for-location example code ([b9c0a6f](https://github.com/OneBusAway/js-sdk/commit/b9c0a6f064796db76085c7c6f8aebe50099b1273))
* chore(exmples): update stops-for-location example code ([35fd9f9](https://github.com/OneBusAway/js-sdk/commit/35fd9f9f711e5df3bafb47895d489c37b1126473))
* **examples:** add simple example for arrivalAndDeparture endpoint ([c08d53d](https://github.com/OneBusAway/js-sdk/commit/c08d53de62db8099f4de269010d1c4c95c1a69ce))
* **project:** add example file to test the sdk ([22a0a64](https://github.com/OneBusAway/js-sdk/commit/22a0a647850ac34924dea36768a7bdf45b95ec53))
* refactor(agency): removed worng generated code ([1ead445](https://github.com/OneBusAway/js-sdk/commit/1ead445b87524b4d03af803310b26184e682e7dd))
* refactor(api): update buildURL method to include API key in URL ([0d6612f](https://github.com/OneBusAway/js-sdk/commit/0d6612f7adcaf5e7b68e3aefaf8dbd7798d9e1cf))
* refactor(api): update stop ID parameter in Agency class ([9071875](https://github.com/OneBusAway/js-sdk/commit/9071875f0d4a3a9532177eb9069fabfd734a04ed))
* refactor(api): update stop ID parameter in ArrivalAndDepartureForStop class ([3e776d4](https://github.com/OneBusAway/js-sdk/commit/3e776d488a27ae836909965079410575911d7f5c))
* refactor(api): update stop ID parameter in ArrivalAndDepartureForStop class ([9f985d8](https://github.com/OneBusAway/js-sdk/commit/9f985d8b44d309d1cf1750cdb67c3603df85bf90))
* refactor(api): update stop ID parameter in ArrivalsAndDeparturesForStop class ([82a3124](https://github.com/OneBusAway/js-sdk/commit/82a3124b2c8622c61b7b6a502b7daecfb7831ebd))
* Remove example file for agencies with coverage ([44804bc](https://github.com/OneBusAway/js-sdk/commit/44804bc1733aef32d626ad9dd9081c643940a214))
* Remove example file for agencies with coverage ([ec26ef2](https://github.com/OneBusAway/js-sdk/commit/ec26ef257b0d8e9fad50a64790e6fe73f20026b3))


### Bug Fixes

* **compat:** remove ReadableStream polyfill redundant since node v16 ([#119](https://github.com/OneBusAway/js-sdk/issues/119)) ([703a920](https://github.com/OneBusAway/js-sdk/commit/703a9207aaa58b81d881f1ef40e8e3324c0c4fce))


### Chores

* (examples): Update arrivalAndDepartutes example code ([1514610](https://github.com/OneBusAway/js-sdk/commit/1514610b33971b1df808c52d83806b7461612df9))
* add apiKey ([f6f7eae](https://github.com/OneBusAway/js-sdk/commit/f6f7eae72a8ee159f1e1d347252112495356a9fc))
* **api:** update code format ([f6fd8bb](https://github.com/OneBusAway/js-sdk/commit/f6fd8bb18cab260247e772673aa6ae2d79d288a4))
* **ci:** correctly tag pre-release npm packages ([#143](https://github.com/OneBusAway/js-sdk/issues/143)) ([b8e62fa](https://github.com/OneBusAway/js-sdk/commit/b8e62fa77fd95002e862185e0ffb9d4d70eb972b))
* **docs:** fix incorrect client var names ([#120](https://github.com/OneBusAway/js-sdk/issues/120)) ([f14a152](https://github.com/OneBusAway/js-sdk/commit/f14a15233b4887bf8e7c7f1a6cf63a7d6c8432ac))
* **examples:** Add arrivalAndDepartures example code ([ef48d06](https://github.com/OneBusAway/js-sdk/commit/ef48d06ee9b9d14c0c5e9c892357478870c77d0a))
* **examples:** Update  arrival-and-departutes example code ([f005d8c](https://github.com/OneBusAway/js-sdk/commit/f005d8c8895457bd12b5a8adf96c73d1fbf6edab))
* **examples:** Update arrival-and-departures example code ([e3f6803](https://github.com/OneBusAway/js-sdk/commit/e3f6803f5bfa6e3b460aa6d385fddc59bf3d1241))
* **examples:** Update arrival-and-departutes example code ([2ff1e50](https://github.com/OneBusAway/js-sdk/commit/2ff1e5097b3a0b4873dc420fdd84af396e84c28f))
* **examples:** update baseURL ([704d4fd](https://github.com/OneBusAway/js-sdk/commit/704d4fdfc5498233c1d5933482a4f7f5d67c1957))
* **examples:** update stops-for-location example code ([ace5a56](https://github.com/OneBusAway/js-sdk/commit/ace5a563a6c6d67ca23b20beb32ae9f9ccd4e00d))
* **examples:** Update stops-for-location example code ([f919cea](https://github.com/OneBusAway/js-sdk/commit/f919cea69861909da0bd58d437863d72f5f5574a))
* **exmples:** update stops-for-location example code ([1e49996](https://github.com/OneBusAway/js-sdk/commit/1e499963a2a593193b689b5339f17367fbce85cf))
* go live ([#1](https://github.com/OneBusAway/js-sdk/issues/1)) ([ad1bac6](https://github.com/OneBusAway/js-sdk/commit/ad1bac66a9dec37378475d6f16ff7add15ba7e4a))
* go live ([#1](https://github.com/OneBusAway/js-sdk/issues/1)) ([15ae922](https://github.com/OneBusAway/js-sdk/commit/15ae922aba09917e2926a6aec35d8ba5fcdfe59e))
* go live ([#6](https://github.com/OneBusAway/js-sdk/issues/6)) ([bc5efda](https://github.com/OneBusAway/js-sdk/commit/bc5efda328e5fcf7c3ef41c9d3bc4f3eab38b67e))
* **internal:** add constant for default timeout ([#136](https://github.com/OneBusAway/js-sdk/issues/136)) ([0531e45](https://github.com/OneBusAway/js-sdk/commit/0531e45c902f76a063ab9374dd4f5a6aee9d3311))
* **internal:** refactor release doctor script ([#117](https://github.com/OneBusAway/js-sdk/issues/117)) ([2b556d7](https://github.com/OneBusAway/js-sdk/commit/2b556d77467436460577539184883d45faadb30f))
* **internal:** version bump ([#9](https://github.com/OneBusAway/js-sdk/issues/9)) ([096a223](https://github.com/OneBusAway/js-sdk/commit/096a223271e587109d29ca60c41eca61b68b4c08))
* remove trailing whitespace in tsconfig.json ([a0d67e2](https://github.com/OneBusAway/js-sdk/commit/a0d67e24811f30697317eec45d93ba8180ea6d7b))
* **tests:** update prism version ([#118](https://github.com/OneBusAway/js-sdk/issues/118)) ([a108862](https://github.com/OneBusAway/js-sdk/commit/a1088622cebf6b1731425c554839c244b1ae92d6))
* Update package name in package-lock.json ([f79ba62](https://github.com/OneBusAway/js-sdk/commit/f79ba62e23ef14037cc877af7c45036bb81e8e07))
* Update package name in package-lock.json ([3f06253](https://github.com/OneBusAway/js-sdk/commit/3f062538f09a3accc07221f63bea44c8e4fec7bf))
* update SDK settings ([#1](https://github.com/OneBusAway/js-sdk/issues/1)) ([9662afd](https://github.com/OneBusAway/js-sdk/commit/9662afdeab1e51ccc6f1487febaa9998a7165a0b))
* update SDK settings ([#12](https://github.com/OneBusAway/js-sdk/issues/12)) ([67800a9](https://github.com/OneBusAway/js-sdk/commit/67800a90ee68b050c3d5e5d4d3a8a94a6f9ebb56))
* update SDK settings ([#14](https://github.com/OneBusAway/js-sdk/issues/14)) ([0b074f6](https://github.com/OneBusAway/js-sdk/commit/0b074f669928727555af7918d1134b859b33b8be))
* update SDK settings ([#16](https://github.com/OneBusAway/js-sdk/issues/16)) ([7e97ffa](https://github.com/OneBusAway/js-sdk/commit/7e97ffa202b00aa77c2a8e55924db41c28f11a6d))
* update SDK settings ([#18](https://github.com/OneBusAway/js-sdk/issues/18)) ([490d8fa](https://github.com/OneBusAway/js-sdk/commit/490d8faf971afcea5b2bb9b7d3c7eeba8b5a7a4f))
* update SDK settings ([#22](https://github.com/OneBusAway/js-sdk/issues/22)) ([ec764ce](https://github.com/OneBusAway/js-sdk/commit/ec764ce1652501883063b9bbd3f1bbbd2697064e))
* update SDK settings ([#25](https://github.com/OneBusAway/js-sdk/issues/25)) ([5f1a4a7](https://github.com/OneBusAway/js-sdk/commit/5f1a4a7b5c02abb9adffb6e655525d4242b0ee84))
* update SDK settings ([#27](https://github.com/OneBusAway/js-sdk/issues/27)) ([fd8e222](https://github.com/OneBusAway/js-sdk/commit/fd8e22255a2312f6f67e15788afa5ec7a8df2ee0))
* update SDK settings ([#3](https://github.com/OneBusAway/js-sdk/issues/3)) ([7a86c71](https://github.com/OneBusAway/js-sdk/commit/7a86c71a72654cff8476576191034c1f2758861f))
* update SDK settings ([#30](https://github.com/OneBusAway/js-sdk/issues/30)) ([2fc176b](https://github.com/OneBusAway/js-sdk/commit/2fc176b4d6a2dc5ae17b17414c5a2685f267d977))
* update SDK settings ([#34](https://github.com/OneBusAway/js-sdk/issues/34)) ([e2fd371](https://github.com/OneBusAway/js-sdk/commit/e2fd3718080705361dcc51f2dd7708ead731749d))
* update SDK settings ([#38](https://github.com/OneBusAway/js-sdk/issues/38)) ([e29fbc5](https://github.com/OneBusAway/js-sdk/commit/e29fbc515b851e5202bb1a0228c687a994eff6d1))
* update SDK settings ([#42](https://github.com/OneBusAway/js-sdk/issues/42)) ([423d1b6](https://github.com/OneBusAway/js-sdk/commit/423d1b64dc2180297a8f0902391a3440f3b5f0d5))
* update SDK settings ([#46](https://github.com/OneBusAway/js-sdk/issues/46)) ([f9bf8e0](https://github.com/OneBusAway/js-sdk/commit/f9bf8e03d82f90176a2b4c62a5dec0364a7d402f))
* update SDK settings ([#7](https://github.com/OneBusAway/js-sdk/issues/7)) ([478c9b4](https://github.com/OneBusAway/js-sdk/commit/478c9b4a122a9d1f7d59c0078a6986d23083e8b2))
* update trip-for-vehicle API endpoint to include vehicleId in the URL ([43868cc](https://github.com/OneBusAway/js-sdk/commit/43868cc56ee3597b50ac5bd4adc6ac5701b23fc1))


### Refactors

* Add example for retrieving stops for a specific route ([999528e](https://github.com/OneBusAway/js-sdk/commit/999528ec4b620d00ee0d94205f6721f5060622ec))
* add vehicles-for-agency example ([0a4b6fa](https://github.com/OneBusAway/js-sdk/commit/0a4b6fa319659dafec993fbe5350e65abfb52cb4))
* **agency:** removed worng generated code ([302c353](https://github.com/OneBusAway/js-sdk/commit/302c3533978172905c66f88fcb00613101e80325))
* **api:** update buildURL method to include API key in URL ([8afec80](https://github.com/OneBusAway/js-sdk/commit/8afec807a1efe5f281b01dcca01c0eb41e9e6002))
* **api:** update stop ID parameter in Agency class ([c7ae51f](https://github.com/OneBusAway/js-sdk/commit/c7ae51f51a4be0f1a7bb5ccc8182092627633173))
* **api:** update stop ID parameter in ArrivalAndDepartureForStop class ([be48aaf](https://github.com/OneBusAway/js-sdk/commit/be48aaf9b90e8783c163af3a7447324233b3e28e))
* **api:** update stop ID parameter in ArrivalAndDepartureForStop class ([8ec1148](https://github.com/OneBusAway/js-sdk/commit/8ec114875ba1e9863a8f28e11fd633ee35d34bfe))
* **api:** update stop ID parameter in ArrivalsAndDeparturesForStop class ([201a4b6](https://github.com/OneBusAway/js-sdk/commit/201a4b6f6db7fe3a6c9c78ea7d0f5a553bfa41b5))
* **ArrivalAndDepartture:** Update stop ID parameter in ArrivalAndDeparture class ([db06049](https://github.com/OneBusAway/js-sdk/commit/db06049def144bf79be8d9bf83b4637a71b8ad93))
* **examples:** removed unused code ([c19cfd8](https://github.com/OneBusAway/js-sdk/commit/c19cfd843775160fbe322550e4ab829c9be553b3))
* Remove unused example code for retrieving arrival and departure information ([774a595](https://github.com/OneBusAway/js-sdk/commit/774a595953f480e6448742ceedbc58766de2a436))
* **route:** fix typo in retrieve method parameter name ([0651be8](https://github.com/OneBusAway/js-sdk/commit/0651be8bcca4e859146d390f85b6bf9057151f0f))
* **route:** fix typo in retrieve method parameter name ([bc494fb](https://github.com/OneBusAway/js-sdk/commit/bc494fb6c7694ecf4ac6a88b07a2ede1a4439fc3))
* Update schedule-for-stop endpoint to use stopId variable ([a379322](https://github.com/OneBusAway/js-sdk/commit/a379322778a7e75e8830040dc5fc657d1aa808be))
* Update stop retrieval endpoint to use stopId variable ([518fd10](https://github.com/OneBusAway/js-sdk/commit/518fd10807ec1b243841e295aefe665f63a4b5ff))
* Update stop retrieval endpoint to use stopId variable ([6a43b61](https://github.com/OneBusAway/js-sdk/commit/6a43b610985366d5bf6f3c7f4f4be78d852f3ac1))
* Update stops-for-route endpoint to use routeId variable ([54e6047](https://github.com/OneBusAway/js-sdk/commit/54e60474ea30f58c0bd465fb8f0d412e6a8b7197))
* Update trip retrieval endpoint to use tripId variable ([a7b415f](https://github.com/OneBusAway/js-sdk/commit/a7b415fc4f8744810b75500b1917f8ef5fdc8e3e))
* Update trip retrieval endpoint to use tripId variable ([e1ea27f](https://github.com/OneBusAway/js-sdk/commit/e1ea27fdfead60dfcce30e4bc912e77e51654ae0))
* Update trip retrieval endpoint to use tripId variable ([138364e](https://github.com/OneBusAway/js-sdk/commit/138364e0d0e7eaf62f6dc86330e2db1290627242))
* Update trip retrieval endpoint to use tripId variable ([995d0e5](https://github.com/OneBusAway/js-sdk/commit/995d0e597578f6e010aa9ca1a75007825f021ed2))
* Update vehicles-for-agency endpoint to use agencyId variable ([231de9c](https://github.com/OneBusAway/js-sdk/commit/231de9c60e804e3fc91746af58515ddc34bb0b90))
* Update vehicles-for-agency endpoint to use agencyId variable ([8855cf9](https://github.com/OneBusAway/js-sdk/commit/8855cf94dcdbbdedd35478217cd637a3778612cc))

## 0.1.0-alpha.33 (2024-08-01)

Full Changelog: [v0.1.0-alpha.32...v0.1.0-alpha.33](https://github.com/OneBusAway/js-sdk/compare/v0.1.0-alpha.32...v0.1.0-alpha.33)

### Features

* **api:** OpenAPI spec update via Stainless API ([#146](https://github.com/OneBusAway/js-sdk/issues/146)) ([f9eece2](https://github.com/OneBusAway/js-sdk/commit/f9eece21d32b43a5066699b27ad54d341bbd2bc9))

## 0.1.0-alpha.32 (2024-07-31)

Full Changelog: [v0.1.0-alpha.31...v0.1.0-alpha.32](https://github.com/OneBusAway/js-sdk/compare/v0.1.0-alpha.31...v0.1.0-alpha.32)

### Features

* **api:** OpenAPI spec update via Stainless API ([#141](https://github.com/OneBusAway/js-sdk/issues/141)) ([1beedc0](https://github.com/OneBusAway/js-sdk/commit/1beedc0e13972e67c121184331631fe64fd22194))
* **api:** OpenAPI spec update via Stainless API ([#144](https://github.com/OneBusAway/js-sdk/issues/144)) ([46eb625](https://github.com/OneBusAway/js-sdk/commit/46eb62592ee3929a570fc273f997eae762f1d147))


### Chores

* **ci:** correctly tag pre-release npm packages ([#143](https://github.com/OneBusAway/js-sdk/issues/143)) ([b8e62fa](https://github.com/OneBusAway/js-sdk/commit/b8e62fa77fd95002e862185e0ffb9d4d70eb972b))

## 0.1.0-alpha.31 (2024-07-31)

Full Changelog: [v0.1.0-alpha.30...v0.1.0-alpha.31](https://github.com/OneBusAway/js-sdk/compare/v0.1.0-alpha.30...v0.1.0-alpha.31)

### Features

* **api:** OpenAPI spec update via Stainless API ([#138](https://github.com/OneBusAway/js-sdk/issues/138)) ([b420d73](https://github.com/OneBusAway/js-sdk/commit/b420d7308ab924ffe85b071177f226c88b2dd795))

## 0.1.0-alpha.30 (2024-07-30)

Full Changelog: [v0.1.0-alpha.29...v0.1.0-alpha.30](https://github.com/OneBusAway/js-sdk/compare/v0.1.0-alpha.29...v0.1.0-alpha.30)

### Features

* **api:** OpenAPI spec update via Stainless API ([#134](https://github.com/OneBusAway/js-sdk/issues/134)) ([6481606](https://github.com/OneBusAway/js-sdk/commit/648160678f5bf5334b44b936b9315d11789f6aba))


### Chores

* **internal:** add constant for default timeout ([#136](https://github.com/OneBusAway/js-sdk/issues/136)) ([0531e45](https://github.com/OneBusAway/js-sdk/commit/0531e45c902f76a063ab9374dd4f5a6aee9d3311))

## 0.1.0-alpha.29 (2024-07-29)

Full Changelog: [v0.1.0-alpha.28...v0.1.0-alpha.29](https://github.com/OneBusAway/js-sdk/compare/v0.1.0-alpha.28...v0.1.0-alpha.29)

### Features

* **api:** OpenAPI spec update via Stainless API ([#130](https://github.com/OneBusAway/js-sdk/issues/130)) ([eee707b](https://github.com/OneBusAway/js-sdk/commit/eee707b04492e82eb9234d619719d87c97a37fdd))
* **api:** OpenAPI spec update via Stainless API ([#132](https://github.com/OneBusAway/js-sdk/issues/132)) ([5a9fdcd](https://github.com/OneBusAway/js-sdk/commit/5a9fdcd5328fa4b5cc85bf0dc9c35624a3adf713))

## 0.1.0-alpha.28 (2024-07-28)

Full Changelog: [v0.1.0-alpha.27...v0.1.0-alpha.28](https://github.com/OneBusAway/js-sdk/compare/v0.1.0-alpha.27...v0.1.0-alpha.28)

### Features

* **api:** OpenAPI spec update via Stainless API ([#125](https://github.com/OneBusAway/js-sdk/issues/125)) ([54acc91](https://github.com/OneBusAway/js-sdk/commit/54acc912ac88a539e1260b4325037c4ab126aaf6))

## 0.1.0-alpha.27 (2024-07-27)

Full Changelog: [v0.1.0-alpha.26...v0.1.0-alpha.27](https://github.com/OneBusAway/js-sdk/compare/v0.1.0-alpha.26...v0.1.0-alpha.27)

### Features

* **api:** OpenAPI spec update via Stainless API ([#122](https://github.com/OneBusAway/js-sdk/issues/122)) ([e9310c2](https://github.com/OneBusAway/js-sdk/commit/e9310c2832ace88ed76300e6e3ee44232aaf48cd))

## 0.1.0-alpha.26 (2024-07-27)

Full Changelog: [v0.1.0-alpha.25...v0.1.0-alpha.26](https://github.com/OneBusAway/js-sdk/compare/v0.1.0-alpha.25...v0.1.0-alpha.26)

### Features

* **api:** OpenAPI spec update via Stainless API ([#115](https://github.com/OneBusAway/js-sdk/issues/115)) ([0ad62cd](https://github.com/OneBusAway/js-sdk/commit/0ad62cd2b20b854f4a9b3f9faf08a3179d24ceb8))


### Bug Fixes

* **compat:** remove ReadableStream polyfill redundant since node v16 ([#119](https://github.com/OneBusAway/js-sdk/issues/119)) ([703a920](https://github.com/OneBusAway/js-sdk/commit/703a9207aaa58b81d881f1ef40e8e3324c0c4fce))


### Chores

* **docs:** fix incorrect client var names ([#120](https://github.com/OneBusAway/js-sdk/issues/120)) ([f14a152](https://github.com/OneBusAway/js-sdk/commit/f14a15233b4887bf8e7c7f1a6cf63a7d6c8432ac))
* **internal:** refactor release doctor script ([#117](https://github.com/OneBusAway/js-sdk/issues/117)) ([2b556d7](https://github.com/OneBusAway/js-sdk/commit/2b556d77467436460577539184883d45faadb30f))
* **tests:** update prism version ([#118](https://github.com/OneBusAway/js-sdk/issues/118)) ([a108862](https://github.com/OneBusAway/js-sdk/commit/a1088622cebf6b1731425c554839c244b1ae92d6))

## 0.1.0-alpha.25 (2024-07-22)

Full Changelog: [v0.1.0-alpha.24...v0.1.0-alpha.25](https://github.com/OneBusAway/js-sdk/compare/v0.1.0-alpha.24...v0.1.0-alpha.25)

### Features

* **api:** OpenAPI spec update via Stainless API ([#110](https://github.com/OneBusAway/js-sdk/issues/110)) ([f6334b2](https://github.com/OneBusAway/js-sdk/commit/f6334b28c221fdb076f31e2b0149a8f1f393d12c))
* **api:** OpenAPI spec update via Stainless API ([#112](https://github.com/OneBusAway/js-sdk/issues/112)) ([8d2ba6a](https://github.com/OneBusAway/js-sdk/commit/8d2ba6ae143f27c69bd6ada365392d84cbacf817))
* **api:** OpenAPI spec update via Stainless API ([#113](https://github.com/OneBusAway/js-sdk/issues/113)) ([d556fec](https://github.com/OneBusAway/js-sdk/commit/d556fecf29286c09450db776f952b4b1cb45b6db))

## 0.1.0-alpha.24 (2024-07-19)

Full Changelog: [v0.1.0-alpha.23...v0.1.0-alpha.24](https://github.com/OneBusAway/js-sdk/compare/v0.1.0-alpha.23...v0.1.0-alpha.24)

### Features

* **api:** OpenAPI spec update via Stainless API ([#106](https://github.com/OneBusAway/js-sdk/issues/106)) ([53deaea](https://github.com/OneBusAway/js-sdk/commit/53deaeaeb1952278fb2aeb212d9932ab96b19077))
* **api:** OpenAPI spec update via Stainless API ([#108](https://github.com/OneBusAway/js-sdk/issues/108)) ([2f0645a](https://github.com/OneBusAway/js-sdk/commit/2f0645a1b16f62b24c36687478d8ef66eeb9097d))

## 0.1.0-alpha.23 (2024-07-10)

Full Changelog: [v0.1.0-alpha.22...v0.1.0-alpha.23](https://github.com/OneBusAway/js-sdk/compare/v0.1.0-alpha.22...v0.1.0-alpha.23)

### Features

* chore(examples): update baseURL ([61b04b7](https://github.com/OneBusAway/js-sdk/commit/61b04b7c5582d830a9f5d1f453385634db6e8b2f))
* chore(examples): update stops-for-location example code ([61f52b7](https://github.com/OneBusAway/js-sdk/commit/61f52b721c34396e4cd7a3bfc03cc3bd40a0154b))

## 0.1.0-alpha.22 (2024-07-10)

Full Changelog: [v0.1.0-alpha.21...v0.1.0-alpha.22](https://github.com/OneBusAway/js-sdk/compare/v0.1.0-alpha.21...v0.1.0-alpha.22)

### Features

* chore:(examples): Update arrivalAndDepartutes example code ([646442a](https://github.com/OneBusAway/js-sdk/commit/646442ae524fd34f3dc137f129636249b9de903a))
* chore(examples): Update  arrival-and-departutes example code ([a31482c](https://github.com/OneBusAway/js-sdk/commit/a31482c9cb38b59195fe26e1020a48962d7290e4))
* chore(examples): Update arrival-and-departures example code ([5e810fe](https://github.com/OneBusAway/js-sdk/commit/5e810fe3f4e054a444ee1de91cd544f0553fc3ac))
* chore(examples): Update arrival-and-departutes example code ([0e5ec4f](https://github.com/OneBusAway/js-sdk/commit/0e5ec4f761353d86af61aa1aca87ca3eac95fe9c))
* chore(examples): Update stops-for-location example code ([b9c0a6f](https://github.com/OneBusAway/js-sdk/commit/b9c0a6f064796db76085c7c6f8aebe50099b1273))
* chore(exmples): update stops-for-location example code ([35fd9f9](https://github.com/OneBusAway/js-sdk/commit/35fd9f9f711e5df3bafb47895d489c37b1126473))

## 0.1.0-alpha.21 (2024-07-08)

Full Changelog: [v0.1.0-alpha.20...v0.1.0-alpha.21](https://github.com/OneBusAway/js-sdk/compare/v0.1.0-alpha.20...v0.1.0-alpha.21)

### Features

* **api:** OpenAPI spec update via Stainless API ([#100](https://github.com/OneBusAway/js-sdk/issues/100)) ([7aca464](https://github.com/OneBusAway/js-sdk/commit/7aca464baa2afe4beebcfea8b7f3a749b7d4d377))
* **api:** OpenAPI spec update via Stainless API ([#96](https://github.com/OneBusAway/js-sdk/issues/96)) ([1c5c8ce](https://github.com/OneBusAway/js-sdk/commit/1c5c8ceb9efd2ca24e8ce3c21269040108a99973))
* **api:** OpenAPI spec update via Stainless API ([#98](https://github.com/OneBusAway/js-sdk/issues/98)) ([5f44a71](https://github.com/OneBusAway/js-sdk/commit/5f44a719500e10a8f194389eb77170dd40bb74aa))
* **api:** OpenAPI spec update via Stainless API ([#99](https://github.com/OneBusAway/js-sdk/issues/99)) ([f94af0b](https://github.com/OneBusAway/js-sdk/commit/f94af0b70cd273ed08bfd4adad78f064ff314f8f))
* **api:** update via SDK Studio ([#87](https://github.com/OneBusAway/js-sdk/issues/87)) ([5f00b20](https://github.com/OneBusAway/js-sdk/commit/5f00b20b95edefd8ab2ddc4a0ca877c8e0da1ce5))
* **api:** update via SDK Studio ([#89](https://github.com/OneBusAway/js-sdk/issues/89)) ([4220db4](https://github.com/OneBusAway/js-sdk/commit/4220db458064fda4867f4e28df1d036fab030977))
* **api:** update via SDK Studio ([#90](https://github.com/OneBusAway/js-sdk/issues/90)) ([4243c6e](https://github.com/OneBusAway/js-sdk/commit/4243c6e2afc920520e5acee3d5ff7455a39821c1))
* **api:** update via SDK Studio ([#92](https://github.com/OneBusAway/js-sdk/issues/92)) ([9d4f1b4](https://github.com/OneBusAway/js-sdk/commit/9d4f1b400bbffafb8a12275b57fb09f7369362e8))
* **api:** update via SDK Studio ([#94](https://github.com/OneBusAway/js-sdk/issues/94)) ([0057392](https://github.com/OneBusAway/js-sdk/commit/0057392ec952bb152e68b0eb2742ea26343eed35))

## 0.1.0-alpha.20 (2024-06-29)

Full Changelog: [v0.1.0-alpha.19...v0.1.0-alpha.20](https://github.com/OneBusAway/js-sdk/compare/v0.1.0-alpha.19...v0.1.0-alpha.20)

### Features

* **api:** update via SDK Studio ([#83](https://github.com/OneBusAway/js-sdk/issues/83)) ([63ead40](https://github.com/OneBusAway/js-sdk/commit/63ead409bba325016c0f323fe1deae75a3f2ee73))
* **api:** update via SDK Studio ([#85](https://github.com/OneBusAway/js-sdk/issues/85)) ([1e23f43](https://github.com/OneBusAway/js-sdk/commit/1e23f433b414cd7020dd68d3613566ad2145e163))

## 0.1.0-alpha.19 (2024-06-29)

Full Changelog: [v0.1.0-alpha.18...v0.1.0-alpha.19](https://github.com/OneBusAway/js-sdk/compare/v0.1.0-alpha.18...v0.1.0-alpha.19)

### Features

* refactor(agency): removed worng generated code ([1ead445](https://github.com/OneBusAway/js-sdk/commit/1ead445b87524b4d03af803310b26184e682e7dd))

## 0.1.0-alpha.18 (2024-06-29)

Full Changelog: [v0.1.0-alpha.17...v0.1.0-alpha.18](https://github.com/OneBusAway/js-sdk/compare/v0.1.0-alpha.17...v0.1.0-alpha.18)

### Features

* **api:** update via SDK Studio ([#76](https://github.com/OneBusAway/js-sdk/issues/76)) ([4449d90](https://github.com/OneBusAway/js-sdk/commit/4449d904c2dceedd8810afacc2487ef7c253f1e6))
* **api:** update via SDK Studio ([#78](https://github.com/OneBusAway/js-sdk/issues/78)) ([baed475](https://github.com/OneBusAway/js-sdk/commit/baed475e677ddffcec8a53e7baffceb1c8edeb1b))
* **api:** update via SDK Studio ([#79](https://github.com/OneBusAway/js-sdk/issues/79)) ([6072946](https://github.com/OneBusAway/js-sdk/commit/60729460aa3a2eb4848e23a423e16f09072d163d))

## 0.1.0-alpha.17 (2024-06-29)

Full Changelog: [v0.1.0-alpha.16...v0.1.0-alpha.17](https://github.com/OneBusAway/js-sdk/compare/v0.1.0-alpha.16...v0.1.0-alpha.17)

### Features

* **api:** update via SDK Studio ([#72](https://github.com/OneBusAway/js-sdk/issues/72)) ([574345f](https://github.com/OneBusAway/js-sdk/commit/574345f9194b29920a4a7893db0a06ea16292b53))

## 0.1.0-alpha.16 (2024-06-29)

Full Changelog: [v0.1.0-alpha.15...v0.1.0-alpha.16](https://github.com/OneBusAway/js-sdk/compare/v0.1.0-alpha.15...v0.1.0-alpha.16)

### Features

* refactor(api): update buildURL method to include API key in URL ([0d6612f](https://github.com/OneBusAway/js-sdk/commit/0d6612f7adcaf5e7b68e3aefaf8dbd7798d9e1cf))

## 0.1.0-alpha.15 (2024-06-28)

Full Changelog: [v0.1.0-alpha.14...v0.1.0-alpha.15](https://github.com/OneBusAway/js-sdk/compare/v0.1.0-alpha.14...v0.1.0-alpha.15)

### Features

* refactor(api): update stop ID parameter in ArrivalsAndDeparturesForStop class ([82a3124](https://github.com/OneBusAway/js-sdk/commit/82a3124b2c8622c61b7b6a502b7daecfb7831ebd))

## 0.1.0-alpha.14 (2024-06-28)

Full Changelog: [v0.1.0-alpha.13...v0.1.0-alpha.14](https://github.com/OneBusAway/js-sdk/compare/v0.1.0-alpha.13...v0.1.0-alpha.14)

### Features

* chore(api): update code format ([16d80d1](https://github.com/OneBusAway/js-sdk/commit/16d80d1938183fa31b6746f073e41bf62a20d486))
* refactor(api): update stop ID parameter in Agency class ([9071875](https://github.com/OneBusAway/js-sdk/commit/9071875f0d4a3a9532177eb9069fabfd734a04ed))
* refactor(api): update stop ID parameter in ArrivalAndDepartureForStop class ([3e776d4](https://github.com/OneBusAway/js-sdk/commit/3e776d488a27ae836909965079410575911d7f5c))
* refactor(api): update stop ID parameter in ArrivalAndDepartureForStop class ([9f985d8](https://github.com/OneBusAway/js-sdk/commit/9f985d8b44d309d1cf1750cdb67c3603df85bf90))

## 0.1.0-alpha.13 (2024-06-28)

Full Changelog: [v0.1.0-alpha.12...v0.1.0-alpha.13](https://github.com/OneBusAway/js-sdk/compare/v0.1.0-alpha.12...v0.1.0-alpha.13)

### Features

* **api:** update via SDK Studio ([#60](https://github.com/OneBusAway/js-sdk/issues/60)) ([aaabd42](https://github.com/OneBusAway/js-sdk/commit/aaabd42f7198bb397b39c5b3948208a39c4b6ab9))

## 0.1.0-alpha.12 (2024-06-26)

Full Changelog: [v0.1.0-alpha.11...v0.1.0-alpha.12](https://github.com/OneBusAway/js-sdk/compare/v0.1.0-alpha.11...v0.1.0-alpha.12)

### Features

* **api:** update via SDK Studio ([#56](https://github.com/OneBusAway/js-sdk/issues/56)) ([99d55f2](https://github.com/OneBusAway/js-sdk/commit/99d55f27f151f8d65d96fc29acc36a8d6f780145))

## 0.1.0-alpha.11 (2024-06-26)

Full Changelog: [v0.1.0-alpha.10...v0.1.0-alpha.11](https://github.com/OneBusAway/js-sdk/compare/v0.1.0-alpha.10...v0.1.0-alpha.11)

### Features

* **api:** update via SDK Studio ([#51](https://github.com/OneBusAway/js-sdk/issues/51)) ([a3eb644](https://github.com/OneBusAway/js-sdk/commit/a3eb64498dcb476e931556858299d089f0f45068))
* **api:** update via SDK Studio ([#53](https://github.com/OneBusAway/js-sdk/issues/53)) ([032d5c1](https://github.com/OneBusAway/js-sdk/commit/032d5c1640faa83b8aa9c5fa488009483c9ba3c1))

## 0.1.0-alpha.10 (2024-06-25)

Full Changelog: [v0.1.0-alpha.9...v0.1.0-alpha.10](https://github.com/OneBusAway/js-sdk/compare/v0.1.0-alpha.9...v0.1.0-alpha.10)

### Features

* **api:** update via SDK Studio ([#48](https://github.com/OneBusAway/js-sdk/issues/48)) ([7af175b](https://github.com/OneBusAway/js-sdk/commit/7af175b06d8a811733f4e373aafc267938d66717))

## 0.1.0-alpha.9 (2024-06-25)

Full Changelog: [v0.1.0-alpha.8...v0.1.0-alpha.9](https://github.com/OneBusAway/js-sdk/compare/v0.1.0-alpha.8...v0.1.0-alpha.9)

### Features

* **api:** update via SDK Studio ([#44](https://github.com/OneBusAway/js-sdk/issues/44)) ([72b90e2](https://github.com/OneBusAway/js-sdk/commit/72b90e278ac39026dbd186459b0f06ce84758a49))


### Chores

* update SDK settings ([#46](https://github.com/OneBusAway/js-sdk/issues/46)) ([f9bf8e0](https://github.com/OneBusAway/js-sdk/commit/f9bf8e03d82f90176a2b4c62a5dec0364a7d402f))

## 0.1.0-alpha.8 (2024-06-25)

Full Changelog: [v0.1.0-alpha.7...v0.1.0-alpha.8](https://github.com/OneBusAway/js-sdk/compare/v0.1.0-alpha.7...v0.1.0-alpha.8)

### Features

* **api:** update via SDK Studio ([#40](https://github.com/OneBusAway/js-sdk/issues/40)) ([d978fd6](https://github.com/OneBusAway/js-sdk/commit/d978fd6bab0bb7e3a37e10fc332506192fe9a6a8))


### Chores

* update SDK settings ([#42](https://github.com/OneBusAway/js-sdk/issues/42)) ([423d1b6](https://github.com/OneBusAway/js-sdk/commit/423d1b64dc2180297a8f0902391a3440f3b5f0d5))

## 0.1.0-alpha.7 (2024-06-25)

Full Changelog: [v0.1.0-alpha.6...v0.1.0-alpha.7](https://github.com/OneBusAway/js-sdk/compare/v0.1.0-alpha.6...v0.1.0-alpha.7)

### Features

* **api:** update via SDK Studio ([#36](https://github.com/OneBusAway/js-sdk/issues/36)) ([a7d8667](https://github.com/OneBusAway/js-sdk/commit/a7d86674b63ad73d901cbce8da3d19c5f76bdc5a))


### Chores

* update SDK settings ([#38](https://github.com/OneBusAway/js-sdk/issues/38)) ([e29fbc5](https://github.com/OneBusAway/js-sdk/commit/e29fbc515b851e5202bb1a0228c687a994eff6d1))

## 0.1.0-alpha.6 (2024-06-25)

Full Changelog: [v0.1.0-alpha.5...v0.1.0-alpha.6](https://github.com/OneBusAway/js-sdk/compare/v0.1.0-alpha.5...v0.1.0-alpha.6)

### Features

* **api:** update via SDK Studio ([#32](https://github.com/OneBusAway/js-sdk/issues/32)) ([27eaf00](https://github.com/OneBusAway/js-sdk/commit/27eaf00b3188f62dc6835cd70850186f87427c82))


### Chores

* update SDK settings ([#34](https://github.com/OneBusAway/js-sdk/issues/34)) ([e2fd371](https://github.com/OneBusAway/js-sdk/commit/e2fd3718080705361dcc51f2dd7708ead731749d))

## 0.1.0-alpha.5 (2024-06-24)

Full Changelog: [v0.1.0-alpha.4...v0.1.0-alpha.5](https://github.com/OneBusAway/js-sdk/compare/v0.1.0-alpha.4...v0.1.0-alpha.5)

### Features

* Add arrivals-and-departures-for-stop example file ([14566cf](https://github.com/OneBusAway/js-sdk/commit/14566cf09b9af7c8e6c18f520421876d481aea83))
* Add current-time example file ([ed4095b](https://github.com/OneBusAway/js-sdk/commit/ed4095bacd1d9a627952b03152eb952fbd44b03c))
* Add example file for agencies with coverage ([f7559c0](https://github.com/OneBusAway/js-sdk/commit/f7559c0f0cb434db17cb3daaf9350c6381090ac1))
* Add stops-for-location example file ([9f2758e](https://github.com/OneBusAway/js-sdk/commit/9f2758e08e614eabffa548f838e58d3483f8942b))
* **api:** update via SDK Studio ([8af6e97](https://github.com/OneBusAway/js-sdk/commit/8af6e9770e04563f35880282c62b911d74277eb0))
* **api:** update via SDK Studio ([471bcce](https://github.com/OneBusAway/js-sdk/commit/471bccee52838dd1bc1cff3196d41cd4b7765f2f))
* **api:** update via SDK Studio ([7e75e1a](https://github.com/OneBusAway/js-sdk/commit/7e75e1ab5dc91c7cd0f3b9120d30503f3e65118c))
* **api:** update via SDK Studio ([636d645](https://github.com/OneBusAway/js-sdk/commit/636d645e4c345da3f9cb8a2f9e9d4b2387eb649d))
* **api:** update via SDK Studio ([59b8b09](https://github.com/OneBusAway/js-sdk/commit/59b8b0945a99a774e17ea4ede49bf41cd9b09119))
* **api:** update via SDK Studio ([e34a8f7](https://github.com/OneBusAway/js-sdk/commit/e34a8f751832f02791cee252a012133f892bea30))
* **api:** update via SDK Studio ([2c5c46d](https://github.com/OneBusAway/js-sdk/commit/2c5c46de81852f0dcf5d7224b7b0c1c8aa10cca1))
* **api:** update via SDK Studio ([63ade43](https://github.com/OneBusAway/js-sdk/commit/63ade4330e83ad3663e4bc166f22306c5691a7cf))
* **api:** update via SDK Studio ([45b73f7](https://github.com/OneBusAway/js-sdk/commit/45b73f71cffdf1c7c10dd2083480cf28090bb7d6))
* **api:** update via SDK Studio ([5010e71](https://github.com/OneBusAway/js-sdk/commit/5010e7149e8626b55ad21c2030870eb5f19d0b64))
* **api:** update via SDK Studio ([0fa8e49](https://github.com/OneBusAway/js-sdk/commit/0fa8e497ff5a6e1788e993d99269ec27feb85fcd))
* **api:** update via SDK Studio ([61b04a2](https://github.com/OneBusAway/js-sdk/commit/61b04a2f6d095d480c2c9797d3c1ab866cdf6b22))
* **api:** update via SDK Studio ([4f85c47](https://github.com/OneBusAway/js-sdk/commit/4f85c47c644b22465f708aeb13808954c9a5aa01))
* **api:** update via SDK Studio ([104ac71](https://github.com/OneBusAway/js-sdk/commit/104ac71ea33b92c0e9209e166d2fd962b226056e))
* **api:** update via SDK Studio ([44b6129](https://github.com/OneBusAway/js-sdk/commit/44b6129a99ce55a9ad5285474596f4b018e43b54))
* **api:** update via SDK Studio ([bc1cabb](https://github.com/OneBusAway/js-sdk/commit/bc1cabbe86ef8c3885ec2a0e6f71b8fb80af7bf2))
* **api:** update via SDK Studio ([e89f2d6](https://github.com/OneBusAway/js-sdk/commit/e89f2d6a3bd59e2f4a4c4ada211151ac006e8823))
* **api:** update via SDK Studio ([f0b84c2](https://github.com/OneBusAway/js-sdk/commit/f0b84c2d480e58f270917f1333f04a26fdcb6efb))
* **api:** update via SDK Studio ([fa40879](https://github.com/OneBusAway/js-sdk/commit/fa40879aa01e0d0ccbf3d2e8efd5997eeea1232c))
* **api:** update via SDK Studio ([1b579d6](https://github.com/OneBusAway/js-sdk/commit/1b579d6750a5546957bb4d607b5f942dbae5cd7d))
* **api:** update via SDK Studio ([e7fd33d](https://github.com/OneBusAway/js-sdk/commit/e7fd33d666417423f1ede22d5196fe113d0c9276))
* **api:** update via SDK Studio ([c22596a](https://github.com/OneBusAway/js-sdk/commit/c22596ad319746115603d087e8b9d07231fc5ea7))
* **api:** update via SDK Studio ([2b5c22a](https://github.com/OneBusAway/js-sdk/commit/2b5c22a2bebea1ede2e26b4a8c865f4394ca8abf))
* **api:** update via SDK Studio ([db928b9](https://github.com/OneBusAway/js-sdk/commit/db928b9ce464d43de3ce66eb2ef6852674e4e926))
* **api:** update via SDK Studio ([1f41402](https://github.com/OneBusAway/js-sdk/commit/1f4140279132ec9c3036df91beeb305288e40279))
* **api:** update via SDK Studio ([8eb5779](https://github.com/OneBusAway/js-sdk/commit/8eb57792919bf9e674f9eb631fe947a669cf87ed))
* **api:** update via SDK Studio ([6cfb261](https://github.com/OneBusAway/js-sdk/commit/6cfb261540c1cee85ce75c2c0058e14277191618))
* **api:** update via SDK Studio ([65b8d66](https://github.com/OneBusAway/js-sdk/commit/65b8d66c36c2e33f62868a24e4668e3c061291f7))
* **api:** update via SDK Studio ([19de187](https://github.com/OneBusAway/js-sdk/commit/19de187b6e3409a8be56bd67019b85a41686b055))
* **api:** update via SDK Studio ([4a8e59c](https://github.com/OneBusAway/js-sdk/commit/4a8e59ca3d08a74c158d639dcb47e0c2060b13fb))
* **api:** update via SDK Studio ([84076ba](https://github.com/OneBusAway/js-sdk/commit/84076ba04f809e07d1871ae16cadec1112de42a6))
* **api:** update via SDK Studio ([f8549aa](https://github.com/OneBusAway/js-sdk/commit/f8549aabefa8698a6f965665cb0fbf8e59b4e517))
* **api:** update via SDK Studio ([138877d](https://github.com/OneBusAway/js-sdk/commit/138877d5e82ad901f10eae8c894ed75942912d62))
* **api:** update via SDK Studio ([4ef332b](https://github.com/OneBusAway/js-sdk/commit/4ef332b1786476221a18079158e2a67f86d30294))
* **api:** update via SDK Studio ([4fd4f86](https://github.com/OneBusAway/js-sdk/commit/4fd4f86f44cac5a2b73e549ce8983ac1d9d452a8))
* **api:** update via SDK Studio ([b0cf896](https://github.com/OneBusAway/js-sdk/commit/b0cf896b44728597258e6153f616d035c6f8f002))
* **api:** update via SDK Studio ([e26f644](https://github.com/OneBusAway/js-sdk/commit/e26f6445e06b79237dfa3324f33f4f4d77e1858a))
* **api:** update via SDK Studio ([1505a53](https://github.com/OneBusAway/js-sdk/commit/1505a53633c54db02e4631da8903af1bdeaaa37c))
* **api:** update via SDK Studio ([7984663](https://github.com/OneBusAway/js-sdk/commit/7984663e1e32b72ee37b3f6586e3db1dfc0eede7))
* **api:** update via SDK Studio ([05f08da](https://github.com/OneBusAway/js-sdk/commit/05f08daaf5dcea26dd2f32b2358d06fb654a5dd1))
* **api:** update via SDK Studio ([f7145e1](https://github.com/OneBusAway/js-sdk/commit/f7145e1373b3335eec764636d38f13c4a2db56df))
* **api:** update via SDK Studio ([bd58e80](https://github.com/OneBusAway/js-sdk/commit/bd58e80aff9181225b78cd46ba8f6af66c3d8438))
* **api:** update via SDK Studio ([70a482b](https://github.com/OneBusAway/js-sdk/commit/70a482bceb5738073fd1e9542dbc6ac400c8727e))
* **api:** update via SDK Studio ([62aaaaa](https://github.com/OneBusAway/js-sdk/commit/62aaaaa23db651d90430522aada3bbf5306ae541))
* **api:** update via SDK Studio ([e0e12cd](https://github.com/OneBusAway/js-sdk/commit/e0e12cd39e484f7fd122adbbbbd44f0322a73b0b))
* **api:** update via SDK Studio ([2b28bfd](https://github.com/OneBusAway/js-sdk/commit/2b28bfd30fd508b36c5e4d86dfda6867e8380b11))
* **api:** update via SDK Studio ([f7bbda4](https://github.com/OneBusAway/js-sdk/commit/f7bbda49aa85d85674dea618c0bd4210e7ecf26e))
* **api:** update via SDK Studio ([3850a11](https://github.com/OneBusAway/js-sdk/commit/3850a1177a2d43392cbe67615a20a9dbfd72fc86))
* **api:** update via SDK Studio ([804d57d](https://github.com/OneBusAway/js-sdk/commit/804d57dcabcd2e20ee070040cc7a25c4121d5ac0))
* **api:** update via SDK Studio ([99d7c8b](https://github.com/OneBusAway/js-sdk/commit/99d7c8b3c81534cef06f661a296d55119df32623))
* **api:** update via SDK Studio ([79dbad6](https://github.com/OneBusAway/js-sdk/commit/79dbad6d99747b49c060956adcdd5858ea529915))
* **api:** update via SDK Studio ([70b029b](https://github.com/OneBusAway/js-sdk/commit/70b029b00c2ed78cd263d3e6c93424a7bce97fa1))
* **api:** update via SDK Studio ([d31c7d3](https://github.com/OneBusAway/js-sdk/commit/d31c7d3c90f25ccb9829d6b62bf688f731ecb00b))
* **api:** update via SDK Studio ([774a3c2](https://github.com/OneBusAway/js-sdk/commit/774a3c23a41e5b1bdf7582f4cc46ee9a78feb4c3))
* **api:** update via SDK Studio ([0a074e0](https://github.com/OneBusAway/js-sdk/commit/0a074e0ca8454e2835dfad1bde9615ee3aba946d))
* **api:** update via SDK Studio ([b836154](https://github.com/OneBusAway/js-sdk/commit/b83615425423104d0825be2ff4f788e466693783))
* **api:** update via SDK Studio ([d080485](https://github.com/OneBusAway/js-sdk/commit/d080485c7046f058124a1b33eebe8b3c4b730251))
* **api:** update via SDK Studio ([396c320](https://github.com/OneBusAway/js-sdk/commit/396c320eae4d442e51ee95a8f0a5f23b127af293))
* **api:** update via SDK Studio ([7b3a52f](https://github.com/OneBusAway/js-sdk/commit/7b3a52f4a428bc6aed90cf3c82439126ee769adf))
* **api:** update via SDK Studio ([01cc389](https://github.com/OneBusAway/js-sdk/commit/01cc3894f749af8807d20407ed94751a466baf24))
* **api:** update via SDK Studio ([1eb19b1](https://github.com/OneBusAway/js-sdk/commit/1eb19b104aa61e4fff0f14789f5dfdbfa05f42d1))
* **api:** update via SDK Studio ([69a4dc3](https://github.com/OneBusAway/js-sdk/commit/69a4dc30dcd020cb266256793e34df73c9af0fa6))
* **api:** update via SDK Studio ([b49bd7f](https://github.com/OneBusAway/js-sdk/commit/b49bd7f60b5b3212a33a5e5be039a7a253c62607))
* **api:** update via SDK Studio ([ba677e5](https://github.com/OneBusAway/js-sdk/commit/ba677e53f087a3cad87204ff056f28c4b10c4ca7))
* **api:** update via SDK Studio ([3581428](https://github.com/OneBusAway/js-sdk/commit/3581428bf581098f1d68543cbacdf1f7eb2a6257))
* **api:** update via SDK Studio ([ee8d599](https://github.com/OneBusAway/js-sdk/commit/ee8d59947b94b80ae56b91062a078a1678aeb4e0))
* **api:** update via SDK Studio ([e38ca86](https://github.com/OneBusAway/js-sdk/commit/e38ca86cff15c883a97cbdd2b634a66c16ddfdd9))
* **api:** update via SDK Studio ([2d31d5b](https://github.com/OneBusAway/js-sdk/commit/2d31d5b14fc3ea8606caa3f07e51e2c499e5bba2))
* **api:** update via SDK Studio ([679005a](https://github.com/OneBusAway/js-sdk/commit/679005aec84891219fa948c234140ed0ece00009))
* **api:** update via SDK Studio ([9d051a3](https://github.com/OneBusAway/js-sdk/commit/9d051a3993876bf83186494f9c6e9ee658b2ebc1))
* **api:** update via SDK Studio ([b397e6b](https://github.com/OneBusAway/js-sdk/commit/b397e6b8c6820dfa1e46d9ac5e449bb77d8c9928))
* **api:** update via SDK Studio ([b243f59](https://github.com/OneBusAway/js-sdk/commit/b243f5970fad062c2bb1b5e6fcf0764e0f819bc2))
* **api:** update via SDK Studio ([feadd58](https://github.com/OneBusAway/js-sdk/commit/feadd58e8d197479b7dd55418358334cf1d57226))
* **api:** update via SDK Studio ([296ba2c](https://github.com/OneBusAway/js-sdk/commit/296ba2cec718f639d8fd226168ff67726efa231d))
* **api:** update via SDK Studio ([#10](https://github.com/OneBusAway/js-sdk/issues/10)) ([f3f5e57](https://github.com/OneBusAway/js-sdk/commit/f3f5e57fb2788806021e9279e4ebe53cc9bb3e40))
* **api:** update via SDK Studio ([#11](https://github.com/OneBusAway/js-sdk/issues/11)) ([5c89035](https://github.com/OneBusAway/js-sdk/commit/5c8903570e113e66873e0b11b3d47bc441ab267d))
* **api:** update via SDK Studio ([#13](https://github.com/OneBusAway/js-sdk/issues/13)) ([519fdcf](https://github.com/OneBusAway/js-sdk/commit/519fdcff9e54917cc82a79fe79cf3238d58ccc7a))
* **api:** update via SDK Studio ([#15](https://github.com/OneBusAway/js-sdk/issues/15)) ([a11113d](https://github.com/OneBusAway/js-sdk/commit/a11113dede20d4e4f9f32f3c733179d3b6d53e91))
* **api:** update via SDK Studio ([#17](https://github.com/OneBusAway/js-sdk/issues/17)) ([aca8733](https://github.com/OneBusAway/js-sdk/commit/aca8733bf1409325d6627c34b32bf62903a686d7))
* **api:** update via SDK Studio ([#19](https://github.com/OneBusAway/js-sdk/issues/19)) ([3ea09d4](https://github.com/OneBusAway/js-sdk/commit/3ea09d4794b0a3318717ff487b5824ea1eed9609))
* **api:** update via SDK Studio ([#2](https://github.com/OneBusAway/js-sdk/issues/2)) ([c2749f9](https://github.com/OneBusAway/js-sdk/commit/c2749f92d2d095861bfb73a6078184b2b86da527))
* **api:** update via SDK Studio ([#21](https://github.com/OneBusAway/js-sdk/issues/21)) ([f915cad](https://github.com/OneBusAway/js-sdk/commit/f915cad029fd1c1f759895e2f84d4837587ff134))
* **api:** update via SDK Studio ([#24](https://github.com/OneBusAway/js-sdk/issues/24)) ([391e24c](https://github.com/OneBusAway/js-sdk/commit/391e24cbe3c1d14e67d7ae750e49e19493b2486d))
* **api:** update via SDK Studio ([#26](https://github.com/OneBusAway/js-sdk/issues/26)) ([48e2775](https://github.com/OneBusAway/js-sdk/commit/48e277542fdd4981f18aa008c9f6103e1a459de4))
* **api:** update via SDK Studio ([#29](https://github.com/OneBusAway/js-sdk/issues/29)) ([406a490](https://github.com/OneBusAway/js-sdk/commit/406a4908709d284ce6a6cf8a2086e2ef34782cd4))
* **api:** update via SDK Studio ([#3](https://github.com/OneBusAway/js-sdk/issues/3)) ([2048ea9](https://github.com/OneBusAway/js-sdk/commit/2048ea97826c2b3bb301d2125773adb9ae20301d))
* **api:** update via SDK Studio ([#4](https://github.com/OneBusAway/js-sdk/issues/4)) ([1bcde64](https://github.com/OneBusAway/js-sdk/commit/1bcde641bf99b22cfa46ab6658989a5cf99f4ef3))
* **api:** update via SDK Studio ([#5](https://github.com/OneBusAway/js-sdk/issues/5)) ([2395415](https://github.com/OneBusAway/js-sdk/commit/2395415837537fbc196b88d9c9700b78ae7f80cb))
* **api:** update via SDK Studio ([#5](https://github.com/OneBusAway/js-sdk/issues/5)) ([35e898e](https://github.com/OneBusAway/js-sdk/commit/35e898e624904947f711dcfa0de18093ca572321))
* **api:** update via SDK Studio ([#7](https://github.com/OneBusAway/js-sdk/issues/7)) ([3aa8090](https://github.com/OneBusAway/js-sdk/commit/3aa80902f9e361235b10a7250f0603a828066d17))
* **api:** update via SDK Studio ([#8](https://github.com/OneBusAway/js-sdk/issues/8)) ([3cb84fe](https://github.com/OneBusAway/js-sdk/commit/3cb84feaec6fa432e0a5dd1fbaffa71ccc1fc417))
* **api:** update via SDK Studio ([#9](https://github.com/OneBusAway/js-sdk/issues/9)) ([d7b739f](https://github.com/OneBusAway/js-sdk/commit/d7b739f4c8e8ea448117f8580091b9e4b8cb9b52))
* **project:** add example file to test the sdk ([22a0a64](https://github.com/OneBusAway/js-sdk/commit/22a0a647850ac34924dea36768a7bdf45b95ec53))
* Remove example file for agencies with coverage ([44804bc](https://github.com/OneBusAway/js-sdk/commit/44804bc1733aef32d626ad9dd9081c643940a214))
* Remove example file for agencies with coverage ([ec26ef2](https://github.com/OneBusAway/js-sdk/commit/ec26ef257b0d8e9fad50a64790e6fe73f20026b3))


### Chores

* add apiKey ([f6f7eae](https://github.com/OneBusAway/js-sdk/commit/f6f7eae72a8ee159f1e1d347252112495356a9fc))
* go live ([#1](https://github.com/OneBusAway/js-sdk/issues/1)) ([ad1bac6](https://github.com/OneBusAway/js-sdk/commit/ad1bac66a9dec37378475d6f16ff7add15ba7e4a))
* go live ([#1](https://github.com/OneBusAway/js-sdk/issues/1)) ([15ae922](https://github.com/OneBusAway/js-sdk/commit/15ae922aba09917e2926a6aec35d8ba5fcdfe59e))
* go live ([#6](https://github.com/OneBusAway/js-sdk/issues/6)) ([bc5efda](https://github.com/OneBusAway/js-sdk/commit/bc5efda328e5fcf7c3ef41c9d3bc4f3eab38b67e))
* **internal:** version bump ([#9](https://github.com/OneBusAway/js-sdk/issues/9)) ([096a223](https://github.com/OneBusAway/js-sdk/commit/096a223271e587109d29ca60c41eca61b68b4c08))
* remove trailing whitespace in tsconfig.json ([a0d67e2](https://github.com/OneBusAway/js-sdk/commit/a0d67e24811f30697317eec45d93ba8180ea6d7b))
* Update API via SDK Studio ([8c89d98](https://github.com/OneBusAway/js-sdk/commit/8c89d981c2658f462a02ba18419fe221baab0109))
* Update package name in package-lock.json ([f79ba62](https://github.com/OneBusAway/js-sdk/commit/f79ba62e23ef14037cc877af7c45036bb81e8e07))
* Update package name in package-lock.json ([3f06253](https://github.com/OneBusAway/js-sdk/commit/3f062538f09a3accc07221f63bea44c8e4fec7bf))
* update SDK settings ([#1](https://github.com/OneBusAway/js-sdk/issues/1)) ([9662afd](https://github.com/OneBusAway/js-sdk/commit/9662afdeab1e51ccc6f1487febaa9998a7165a0b))
* update SDK settings ([#12](https://github.com/OneBusAway/js-sdk/issues/12)) ([67800a9](https://github.com/OneBusAway/js-sdk/commit/67800a90ee68b050c3d5e5d4d3a8a94a6f9ebb56))
* update SDK settings ([#14](https://github.com/OneBusAway/js-sdk/issues/14)) ([0b074f6](https://github.com/OneBusAway/js-sdk/commit/0b074f669928727555af7918d1134b859b33b8be))
* update SDK settings ([#16](https://github.com/OneBusAway/js-sdk/issues/16)) ([7e97ffa](https://github.com/OneBusAway/js-sdk/commit/7e97ffa202b00aa77c2a8e55924db41c28f11a6d))
* update SDK settings ([#18](https://github.com/OneBusAway/js-sdk/issues/18)) ([490d8fa](https://github.com/OneBusAway/js-sdk/commit/490d8faf971afcea5b2bb9b7d3c7eeba8b5a7a4f))
* update SDK settings ([#22](https://github.com/OneBusAway/js-sdk/issues/22)) ([ec764ce](https://github.com/OneBusAway/js-sdk/commit/ec764ce1652501883063b9bbd3f1bbbd2697064e))
* update SDK settings ([#25](https://github.com/OneBusAway/js-sdk/issues/25)) ([5f1a4a7](https://github.com/OneBusAway/js-sdk/commit/5f1a4a7b5c02abb9adffb6e655525d4242b0ee84))
* update SDK settings ([#27](https://github.com/OneBusAway/js-sdk/issues/27)) ([fd8e222](https://github.com/OneBusAway/js-sdk/commit/fd8e22255a2312f6f67e15788afa5ec7a8df2ee0))
* update SDK settings ([#3](https://github.com/OneBusAway/js-sdk/issues/3)) ([7a86c71](https://github.com/OneBusAway/js-sdk/commit/7a86c71a72654cff8476576191034c1f2758861f))
* update SDK settings ([#30](https://github.com/OneBusAway/js-sdk/issues/30)) ([2fc176b](https://github.com/OneBusAway/js-sdk/commit/2fc176b4d6a2dc5ae17b17414c5a2685f267d977))
* update SDK settings ([#7](https://github.com/OneBusAway/js-sdk/issues/7)) ([478c9b4](https://github.com/OneBusAway/js-sdk/commit/478c9b4a122a9d1f7d59c0078a6986d23083e8b2))

## 0.1.0-alpha.4 (2024-06-24)

Full Changelog: [v0.1.0-alpha.3...v0.1.0-alpha.4](https://github.com/OneBusAway/js-sdk/compare/v0.1.0-alpha.3...v0.1.0-alpha.4)

### Features

* **api:** update via SDK Studio ([#10](https://github.com/OneBusAway/js-sdk/issues/10)) ([f3f5e57](https://github.com/OneBusAway/js-sdk/commit/f3f5e57fb2788806021e9279e4ebe53cc9bb3e40))
* **api:** update via SDK Studio ([#11](https://github.com/OneBusAway/js-sdk/issues/11)) ([5c89035](https://github.com/OneBusAway/js-sdk/commit/5c8903570e113e66873e0b11b3d47bc441ab267d))
* **api:** update via SDK Studio ([#13](https://github.com/OneBusAway/js-sdk/issues/13)) ([519fdcf](https://github.com/OneBusAway/js-sdk/commit/519fdcff9e54917cc82a79fe79cf3238d58ccc7a))
* **api:** update via SDK Studio ([#15](https://github.com/OneBusAway/js-sdk/issues/15)) ([a11113d](https://github.com/OneBusAway/js-sdk/commit/a11113dede20d4e4f9f32f3c733179d3b6d53e91))
* **api:** update via SDK Studio ([#17](https://github.com/OneBusAway/js-sdk/issues/17)) ([aca8733](https://github.com/OneBusAway/js-sdk/commit/aca8733bf1409325d6627c34b32bf62903a686d7))
* **api:** update via SDK Studio ([#19](https://github.com/OneBusAway/js-sdk/issues/19)) ([3ea09d4](https://github.com/OneBusAway/js-sdk/commit/3ea09d4794b0a3318717ff487b5824ea1eed9609))
* **api:** update via SDK Studio ([#2](https://github.com/OneBusAway/js-sdk/issues/2)) ([c2749f9](https://github.com/OneBusAway/js-sdk/commit/c2749f92d2d095861bfb73a6078184b2b86da527))
* **api:** update via SDK Studio ([#21](https://github.com/OneBusAway/js-sdk/issues/21)) ([f915cad](https://github.com/OneBusAway/js-sdk/commit/f915cad029fd1c1f759895e2f84d4837587ff134))
* **api:** update via SDK Studio ([#24](https://github.com/OneBusAway/js-sdk/issues/24)) ([391e24c](https://github.com/OneBusAway/js-sdk/commit/391e24cbe3c1d14e67d7ae750e49e19493b2486d))
* **api:** update via SDK Studio ([#3](https://github.com/OneBusAway/js-sdk/issues/3)) ([2048ea9](https://github.com/OneBusAway/js-sdk/commit/2048ea97826c2b3bb301d2125773adb9ae20301d))
* **api:** update via SDK Studio ([#4](https://github.com/OneBusAway/js-sdk/issues/4)) ([1bcde64](https://github.com/OneBusAway/js-sdk/commit/1bcde641bf99b22cfa46ab6658989a5cf99f4ef3))
* **api:** update via SDK Studio ([#5](https://github.com/OneBusAway/js-sdk/issues/5)) ([2395415](https://github.com/OneBusAway/js-sdk/commit/2395415837537fbc196b88d9c9700b78ae7f80cb))
* **api:** update via SDK Studio ([#7](https://github.com/OneBusAway/js-sdk/issues/7)) ([3aa8090](https://github.com/OneBusAway/js-sdk/commit/3aa80902f9e361235b10a7250f0603a828066d17))
* **api:** update via SDK Studio ([#8](https://github.com/OneBusAway/js-sdk/issues/8)) ([3cb84fe](https://github.com/OneBusAway/js-sdk/commit/3cb84feaec6fa432e0a5dd1fbaffa71ccc1fc417))
* **api:** update via SDK Studio ([#9](https://github.com/OneBusAway/js-sdk/issues/9)) ([d7b739f](https://github.com/OneBusAway/js-sdk/commit/d7b739f4c8e8ea448117f8580091b9e4b8cb9b52))


### Chores

* go live ([#1](https://github.com/OneBusAway/js-sdk/issues/1)) ([ad1bac6](https://github.com/OneBusAway/js-sdk/commit/ad1bac66a9dec37378475d6f16ff7add15ba7e4a))
* go live ([#6](https://github.com/OneBusAway/js-sdk/issues/6)) ([bc5efda](https://github.com/OneBusAway/js-sdk/commit/bc5efda328e5fcf7c3ef41c9d3bc4f3eab38b67e))
* update SDK settings ([#1](https://github.com/OneBusAway/js-sdk/issues/1)) ([9662afd](https://github.com/OneBusAway/js-sdk/commit/9662afdeab1e51ccc6f1487febaa9998a7165a0b))
* update SDK settings ([#12](https://github.com/OneBusAway/js-sdk/issues/12)) ([67800a9](https://github.com/OneBusAway/js-sdk/commit/67800a90ee68b050c3d5e5d4d3a8a94a6f9ebb56))
* update SDK settings ([#14](https://github.com/OneBusAway/js-sdk/issues/14)) ([0b074f6](https://github.com/OneBusAway/js-sdk/commit/0b074f669928727555af7918d1134b859b33b8be))
* update SDK settings ([#16](https://github.com/OneBusAway/js-sdk/issues/16)) ([7e97ffa](https://github.com/OneBusAway/js-sdk/commit/7e97ffa202b00aa77c2a8e55924db41c28f11a6d))
* update SDK settings ([#18](https://github.com/OneBusAway/js-sdk/issues/18)) ([490d8fa](https://github.com/OneBusAway/js-sdk/commit/490d8faf971afcea5b2bb9b7d3c7eeba8b5a7a4f))
* update SDK settings ([#22](https://github.com/OneBusAway/js-sdk/issues/22)) ([ec764ce](https://github.com/OneBusAway/js-sdk/commit/ec764ce1652501883063b9bbd3f1bbbd2697064e))
* update SDK settings ([#25](https://github.com/OneBusAway/js-sdk/issues/25)) ([5f1a4a7](https://github.com/OneBusAway/js-sdk/commit/5f1a4a7b5c02abb9adffb6e655525d4242b0ee84))
