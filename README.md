# @semantics/semantic-version

[<img alt="github" src="https://img.shields.io/badge/github-jammymalina/semantics--version-8da0cb?style=for-the-badge&labelColor=555555&logo=github">](https://github.com/jammymalina/semantics-version)
[<img alt="npmjs.com" src="https://img.shields.io/npm/v/@semantics/semantic-version?logo=npm&style=for-the-badge&color=fc8d62&logo=npm">](https://www.npmjs.com/package/@semantics/semantic-version)
[<img alt="build status" src="https://img.shields.io/github/workflow/status/jammymalina/semantics-version/CI?style=for-the-badge">](https://github.com/jammymalina/semantics-version/actions?query=branch%3Amaster)
[<img alt="sonar status" src="https://img.shields.io/sonar/quality_gate/jammymalina_semantics-version?logo=sonarcloud&server=https%3A%2F%2Fsonarcloud.io&style=for-the-badge">](https://sonarcloud.io/dashboard?id=jammymalina_semantics-version)
<img alt="types" src="https://shields-staging.herokuapp.com/npm/types/typescript?logo=typescript&style=for-the-badge">

Semantic versioning utility. Helps you validate and compare semantic versions.

## Import package

```javascript
import { semanticVersion } from '@semantics/semantic-version';
// or
const { semanticVersion } = require('@semantics/semantic-version');
```

## Docs

### SemanticVersion

#### Index

##### Properties

- [\_type](#####readonly-_type)

##### Methods

- [isNewer](#####isnewer)
- [isOlder](#####isolder)
- [isSame](#####issame)
- [isSameOrNewer](#####issameornewer)
- [isSameOrOlder](#####issameorolder)
- [isValid](#####isvalid)
- [major](#####major)
- [minor](#####minor)
- [patch](#####patch)
- [toList](#####tolist)
- [toShortString](#####toshortstring)
- [toString](#####tostring)

#### Properties

##### `Readonly` \_type

• **\_type**: _string_

For internal use.

#### Methods

##### isNewer

▸ **isNewer**(`v`: [SemanticVersion](###SemanticVersion) | number[] | string): _boolean_

Checks if a semantic version is newer as another semantic version. The first argument will be parsed as a semantic version, if not already so.

**Usage**

```typescript
semanticVersion('1.3.0').isNewer('1.2.6'); // true
semanticVersion('1.3.0').isNewer([1, 2, 6]); // true
```

**Parameters:**

| Name | Type                                                                | Description |
| ---- | ------------------------------------------------------------------- | ----------- |
| `v`  | [SemanticVersion](###SemanticVersion) &#124; number[] &#124; string | A version   |

**Returns:** _boolean_

---

##### isOlder

▸ **isOlder**(`v`: [SemanticVersion](###SemanticVersion) | number[] | string): _boolean_

Checks if a semantic version is older as another semantic version. The first argument will be parsed as a semantic version, if not already so.

**Usage**

```typescript
semanticVersion('1.1.3').isOlder('1.2.3'); // true
semanticVersion('1.1.3').isOlder([1, 2, 3]); // true
```

**Parameters:**

| Name | Type                                                                | Description |
| ---- | ------------------------------------------------------------------- | ----------- |
| `v`  | [SemanticVersion](###SemanticVersion) &#124; number[] &#124; string | A version   |

**Returns:** _boolean_

---

##### isSame

▸ **isSame**(`v`: [SemanticVersion](###SemanticVersion) | number[] | string): _boolean_

Checks if a semantic version is the same as another semantic version. The first argument will be parsed as a semantic version, if not already so.

**Usage**

```typescript
semanticVersion('1.2.3').isSame('1.2.3'); // true
semanticVersion('1.2.3').isSame([1, 2, 3]); // true
```

**Parameters:**

| Name | Type                                                                | Description |
| ---- | ------------------------------------------------------------------- | ----------- |
| `v`  | [SemanticVersion](###SemanticVersion) &#124; number[] &#124; string | A version   |

**Returns:** _boolean_

---

##### isSameOrNewer

▸ **isSameOrNewer**(`v`: [SemanticVersion](###SemanticVersion) | number[] | string): _boolean_

Checks if a semantic version is newer or the same as another semantic version. The first argument will be parsed as a semantic version, if not already so.

**Usage**

```typescript
semanticVersion('1.4.3').isSameOrNewer('1.3.2'); // true
semanticVersion('1.4.3').isSameOrNewer([1, 3, 2]); // true
```

**Parameters:**

| Name | Type                                                                | Description |
| ---- | ------------------------------------------------------------------- | ----------- |
| `v`  | [SemanticVersion](###SemanticVersion) &#124; number[] &#124; string | A version   |

**Returns:** _boolean_

---

##### isSameOrOlder

▸ **isSameOrOlder**(`v`: [SemanticVersion](###SemanticVersion) | number[] | string): _boolean_

Checks if a semantic version is older or the same as another semantic version. The first argument will be parsed as a semantic version, if not already so.

**Usage**

```typescript
semanticVersion('1.1.5').isSameOrOlder('1.2.1'); // true
semanticVersion('1.1.5').isSameOrOlder([1, 2, 1]); // true
```

**Parameters:**

| Name | Type                                                                | Description |
| ---- | ------------------------------------------------------------------- | ----------- |
| `v`  | [SemanticVersion](###SemanticVersion) &#124; number[] &#124; string | A version   |

**Returns:** _boolean_

---

##### isValid

▸ **isValid**(): _boolean_

You can check whether the semanticVersion considers the semantic version to be invalid.

**Usage**

```typescript
semanticVersion('1.2.1').isValid(); // true
semanticVersion({}).isValid(); // false
semanticVersion('1.2.1', 10, 20); // false - you cannot mix arguments
```

**Returns:** _boolean_

---

##### major

▸ **major**(): _number_

Returns the major version.

**Usage**

```typescript
semanticVersion('1.2.3').major(); // 1
```

**Returns:** _number_

---

##### minor

▸ **minor**(): _number_

Returns the minor version.

**Usage**

```typescript
semanticVersion('1.2.3').minor(); // 2
```

**Returns:** _number_

---

##### patch

▸ **patch**(): _number_

Returns the patch version.

**Usage**

```typescript
semanticVersion('1.2.3').patch(); // 3
```

**Returns:** _number_

---

##### toList

▸ **toList**(): _number[]_

Returns a semantic version as a list of numbers -> [major, minor, patch].

**Usage**

```typescript
semanticVersion('1.2.5').toList(); // [1, 2, 5]
```

**Returns:** _number[]_

---

##### toShortString

▸ **toShortString**(): _string_

Returns a semantic version as a string containing major and minor version.

**Usage**

```typescript
semanticVersion('1.2.5').toShortString(); // 1.2
```

**Returns:** _string_

---

##### toString

▸ **toString**(): _string_

Returns a semantic version as a string.

**Usage**

```typescript
semanticVersion('1.2.5').toString(); // 1.2.5
```

**Returns:** _string_
