# semanticVersion

## Index

### Functions

- [semanticVersion](_lib_.md#semanticversion)

## Functions

### semanticVersion

▸ **semanticVersion**(`version`: [SemanticVersion](../interfaces/_semanticversion_.semanticversion.md) | string | number | number[], ...`other`: number[]): _[SemanticVersion](../interfaces/\_semanticversion_.semanticversion.md)\_

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

**Returns:** _[SemanticVersion](../interfaces/\_semanticversion_.semanticversion.md)\_
