# @semantics/semantic-version

[<img alt="github" src="https://img.shields.io/badge/github-jammymalina/semantics--version-8da0cb?style=for-the-badge&labelColor=555555&logo=github">](https://github.com/jammymalina/semantics-version)
[<img alt="npmjs.com" src="https://img.shields.io/npm/v/@semantics/semantic-version?logo=npm&style=for-the-badge&color=fc8d62&logo=npm">](https://www.npmjs.com/package/@semantics/semantic-version)
[<img alt="build status" src="https://img.shields.io/github/workflow/status/jammymalina/semantics-version/CI?style=for-the-badge">](https://github.com/jammymalina/semantics-version/actions?query=branch%3Amaster)
[<img alt="sonar status" src="https://img.shields.io/sonar/quality_gate/jammymalina_semantics-version?logo=sonarcloud&server=https%3A%2F%2Fsonarcloud.io&style=for-the-badge">](https://sonarcloud.io/dashboard?id=jammymalina_semantics-version)
<img alt="types" src="https://shields-staging.herokuapp.com/npm/types/typescript?logo=typescript&style=for-the-badge">

Semantic versioning utility. Helps you validate and compare semantic versions.

## Import package

```typescript
import { semanticVersion } from '@semantics/semantic-version';
// or
const { semanticVersion } = require('@semantics/semantic-version');
```

## Usage

```typescript
const v = semanticVersion('1.2.1');
v.isValid(); // true
v.isNewer('1.1.5'); // true
v.isOlder('1.3.0'); // true

const versions = ['1.2.4', '1.0.1', '1.5.3', '1', '0.1.0', '4.5', '1.2.1', '2.1.3'];
versions.sort(semanticVersion.compareByLatest); // ['4.5', '2.1.3', '1.5.3', '1.2.4', '1.2.1', '1.0.1', '1', '0.1.0']
```

## Docs

[semanticVersion()](docs/modules/_lib_.md)

[SemanticVersion](docs/interfaces/_semanticversion_.semanticversion.md)
