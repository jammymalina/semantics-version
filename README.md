# @semantics/version

[<img alt="github" src="https://img.shields.io/badge/github-jammymalina/semantics--version-8da0cb?style=for-the-badge&labelColor=555555&logo=github">](https://github.com/jammymalina/semantics-version)
[<img alt="npmjs.com" src="https://img.shields.io/npm/v/@semantics/version?logo=npm&style=for-the-badge&color=fc8d62&logo=npm">](https://www.npmjs.com/package/@semantics/version)
[<img alt="build status" src="https://img.shields.io/github/workflow/status/jammymalina/semantics-version/CI?style=for-the-badge">](https://github.com/jammymalina/semantics-version/actions?query=branch%3Amaster)
[<img alt="sonar status" src="https://img.shields.io/sonar/quality_gate/jammymalina_chunk-it?logo=sonarcloud&server=https%3A%2F%2Fsonarcloud.io&style=for-the-badge">](https://sonarcloud.io/dashboard?id=jammymalina_chunk-it)
<img alt="types" src="https://shields-staging.herokuapp.com/npm/types/typescript?logo=typescript&style=for-the-badge">

Semantic versioning utility. Helps you validate and compare semantic versions.

## Usage

### semanticVersion(version: string | number | number[], ...otherVersions: number[]): SemanticVersion

Creates semantic version object.

```javascript
import { semanticVersion } from '@semantics/version';

// string
semanticVersion('1.2.1'); // 1.2.1
semanticVersion('1.2'); // 1.2.0
semanticVersion('1'); // 1.0.0

// number
semanticVersion(1, 2, 1); // 1.2.1
semanticVersion(1, 2); // 1.2.0
semanticVersion(1); // 1.0.0

// number list
semanticVersion([1, 2, 1]); // 1.2.1
semanticVersion([1, 2]); // 1.2.0
semanticVersion([1]); // 1.0.0
```
