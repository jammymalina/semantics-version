[@semantics/semantic-version](../../README.md#docs) › [semanticVersion()](_lib_.md)

# semanticVersion()

## Index

### Functions

- [semanticVersion](_lib_.md#semanticversion)
- [semanticVersion.compare](_lib_.md#semanticversioncompare)
- [semanticVersion/compareByLatest](_lib_.md#semanticversioncomparebylatest)
- [semanticVersion.isValid](_lib_.md#semanticversionisvalid)

## Functions

### semanticVersion

▸ **semanticVersion**(`version`: [SemanticVersion](../interfaces/_semanticversion_.semanticversion.md) | string | number | number[], ...`other`: number[]): [SemanticVersion](../interfaces/_semanticversion_.semanticversion.md)

Creates SemanticVersion from a string, a number, a list of numbers or SemanticVersion.

**Usage**

```typescript
// string
semanticVersion('1.2.1'); // 1.2.1
semanticVersion('1.2'); // 1.2.0
semanticVersion('1'); // 1.0.0

// numbers
semanticVersion(1, 2, 1); // 1.2.1
semanticVersion(1, 2); // 1.2.0
semanticVersion(1); // 1.0.0

// a list of numbers
semanticVersion([1, 2, 1]); // 1.2.1
semanticVersion([1, 2]); // 1.2.0
semanticVersion([1]); // 1.0.0
```

**Parameters:**

| Name       | Type                                                                                                              | Description                                                                                                        |
| ---------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `version`  | [SemanticVersion](../interfaces/_semanticversion_.semanticversion.md) &#124; string &#124; number &#124; number[] | A semantic version.                                                                                                |
| `...other` | number[]                                                                                                          | A list of numbers containing minor and patch version numbers (both optional). Only valid if a version is a number. |

**Returns:** [SemanticVersion](../interfaces/_semanticversion_.semanticversion.md)

---

### semanticVersion.compare

▸ **compare**(`v1`: [SemanticVersion](../interfaces/_semanticversion_.semanticversion.md) | number[] | string, `v2`: [SemanticVersion](../interfaces/_semanticversion_.semanticversion.md) | number[] | string): _number_

Compares two semantic versions. Both arguments will be parsed as a semantic version, if not already so. Can be used as a sort function.

**Usage**

```typescript
const versions = ['1.2.4', '1.0.1', '1.5.3', '1', '0.1.0', '4.5', '1.2.1', '2.1.3'];
versions.sort(semanticVersion.compare);
console.log(versions); // ['0.1.0', '1', '1.0.1', '1.2.1', '1.2.4', '1.5.3', '2.1.3', '4.5']
```

**Parameters:**

| Name | Type                                                                                                | Description |
| ---- | --------------------------------------------------------------------------------------------------- | ----------- |
| `v1` | [SemanticVersion](../interfaces/_semanticversion_.semanticversion.md) &#124; number[] &#124; string | A version   |
| `v2` | [SemanticVersion](../interfaces/_semanticversion_.semanticversion.md) &#124; number[] &#124; string | A version   |

**Returns:** _number_

---

### semanticVersion.compareByLatest

▸ **compareByLatest**(`v1`: [SemanticVersion](../interfaces/_semanticversion_.semanticversion.md) | number[] | string, `v2`: [SemanticVersion](../interfaces/_semanticversion_.semanticversion.md) | number[] | string): _number_

Compares two semantic versions, the later / newer version is considered as lesser one. Both arguments will be parsed as a semantic version, if not already so. Can be used as a sort function.

**Usage**

```typescript
const versions = ['1.2.4', '1.0.1', '1.5.3', '1', '0.1.0', '4.5', '1.2.1', '2.1.3'];
versions.sort(semanticVersion.compareByLatest);
console.log(versions); // ['4.5', '2.1.3', '1.5.3', '1.2.4', '1.2.1', '1.0.1', '1', '0.1.0']
```

**Parameters:**

| Name | Type                                                                                                | Description |
| ---- | --------------------------------------------------------------------------------------------------- | ----------- |
| `v1` | [SemanticVersion](../interfaces/_semanticversion_.semanticversion.md) &#124; number[] &#124; string | A version   |
| `v2` | [SemanticVersion](../interfaces/_semanticversion_.semanticversion.md) &#124; number[] &#124; string | A version   |

**Returns:** _number_

---

### semanticVersion.isValid

▸ **isValid**(`v`: [SemanticVersion](../interfaces/_semanticversion_.semanticversion.md) | number[] | string): _boolean_

You can check whether the semanticVersion considers the semantic version to be invalid. The first argument will be parsed as a semantic version, if not already so.

**Usage**

```typescript
semanticVersion.isValid('1.2.3'); // true
semanticVersion.isValid([1, 2, -2]); // false
```

**Parameters:**

| Name | Type                                                                                                | Description |
| ---- | --------------------------------------------------------------------------------------------------- | ----------- |
| `v`  | [SemanticVersion](../interfaces/_semanticversion_.semanticversion.md) &#124; number[] &#124; string | A version   |

**Returns:** _boolean_
