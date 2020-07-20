# SemanticVersion

## Hierarchy

- **SemanticVersion**

## Index

### Properties

- [\_type](_semanticversion_.semanticversion.md#readonly-_type)

### Methods

- [isNewer](_semanticversion_.semanticversion.md#isnewer)
- [isOlder](_semanticversion_.semanticversion.md#isolder)
- [isSame](_semanticversion_.semanticversion.md#issame)
- [isSameOrNewer](_semanticversion_.semanticversion.md#issameornewer)
- [isSameOrOlder](_semanticversion_.semanticversion.md#issameorolder)
- [isValid](_semanticversion_.semanticversion.md#isvalid)
- [major](_semanticversion_.semanticversion.md#major)
- [minor](_semanticversion_.semanticversion.md#minor)
- [patch](_semanticversion_.semanticversion.md#patch)
- [toList](_semanticversion_.semanticversion.md#tolist)
- [toShortString](_semanticversion_.semanticversion.md#toshortstring)
- [toString](_semanticversion_.semanticversion.md#tostring)

## Properties

### `Readonly` \_type

• **\_type**: _string_

For internal use.

## Methods

### isNewer

▸ **isNewer**(`v`: [SemanticVersion](_semanticversion_.semanticversion.md) | number[] | string): _boolean_

Checks if a semantic version is newer as another semantic version. The first argument will be parsed as a semantic version, if not already so.

**Usage**

```typescript
semanticVersion('1.3.0').isNewer('1.2.6'); // true
semanticVersion('1.3.0').isNewer([1, 2, 6]); // true
```

**Parameters:**

| Name | Type                                                                                  | Description |
| ---- | ------------------------------------------------------------------------------------- | ----------- |
| `v`  | [SemanticVersion](_semanticversion_.semanticversion.md) &#124; number[] &#124; string | A version   |

**Returns:** _boolean_

---

### isOlder

▸ **isOlder**(`v`: [SemanticVersion](_semanticversion_.semanticversion.md) | number[] | string): _boolean_

Checks if a semantic version is older as another semantic version. The first argument will be parsed as a semantic version, if not already so.

**Usage**

```typescript
semanticVersion('1.1.3').isOlder('1.2.3'); // true
semanticVersion('1.1.3').isOlder([1, 2, 3]); // true
```

**Parameters:**

| Name | Type                                                                                  | Description |
| ---- | ------------------------------------------------------------------------------------- | ----------- |
| `v`  | [SemanticVersion](_semanticversion_.semanticversion.md) &#124; number[] &#124; string | A version   |

**Returns:** _boolean_

---

### isSame

▸ **isSame**(`v`: [SemanticVersion](_semanticversion_.semanticversion.md) | number[] | string): _boolean_

Checks if a semantic version is the same as another semantic version. The first argument will be parsed as a semantic version, if not already so.

**Usage**

```typescript
semanticVersion('1.2.3').isSame('1.2.3'); // true
semanticVersion('1.2.3').isSame([1, 2, 3]); // true
```

**Parameters:**

| Name | Type                                                                                  | Description |
| ---- | ------------------------------------------------------------------------------------- | ----------- |
| `v`  | [SemanticVersion](_semanticversion_.semanticversion.md) &#124; number[] &#124; string | A version   |

**Returns:** _boolean_

---

### isSameOrNewer

▸ **isSameOrNewer**(`v`: [SemanticVersion](_semanticversion_.semanticversion.md) | number[] | string): _boolean_

Checks if a semantic version is newer or the same as another semantic version. The first argument will be parsed as a semantic version, if not already so.

**Usage**

```typescript
semanticVersion('1.4.3').isSameOrNewer('1.3.2'); // true
semanticVersion('1.4.3').isSameOrNewer([1, 3, 2]); // true
```

**Parameters:**

| Name | Type                                                                                  | Description |
| ---- | ------------------------------------------------------------------------------------- | ----------- |
| `v`  | [SemanticVersion](_semanticversion_.semanticversion.md) &#124; number[] &#124; string | A version   |

**Returns:** _boolean_

---

### isSameOrOlder

▸ **isSameOrOlder**(`v`: [SemanticVersion](_semanticversion_.semanticversion.md) | number[] | string): _boolean_

Checks if a semantic version is older or the same as another semantic version. The first argument will be parsed as a semantic version, if not already so.

**Usage**

```typescript
semanticVersion('1.1.5').isSameOrOlder('1.2.1'); // true
semanticVersion('1.1.5').isSameOrOlder([1, 2, 1]); // true
```

**Parameters:**

| Name | Type                                                                                  | Description |
| ---- | ------------------------------------------------------------------------------------- | ----------- |
| `v`  | [SemanticVersion](_semanticversion_.semanticversion.md) &#124; number[] &#124; string | A version   |

**Returns:** _boolean_

---

### isValid

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

### major

▸ **major**(): _number_

Returns the major version.

**Usage**

```typescript
semanticVersion('1.2.3').major(); // 1
```

**Returns:** _number_

---

### minor

▸ **minor**(): _number_

Returns the minor version.

**Usage**

```typescript
semanticVersion('1.2.3').minor(); // 2
```

**Returns:** _number_

---

### patch

▸ **patch**(): _number_

Returns the patch version.

**Usage**

```typescript
semanticVersion('1.2.3').patch(); // 3
```

**Returns:** _number_

---

### toList

▸ **toList**(): _number[]_

Returns a semantic version as a list of numbers -> [major, minor, patch].

**Usage**

```typescript
semanticVersion('1.2.5').toList(); // [1, 2, 5]
```

**Returns:** _number[]_

---

### toShortString

▸ **toShortString**(): _string_

Returns a semantic version as a string containing major and minor version.

**Usage**

```typescript
semanticVersion('1.2.5').toShortString(); // 1.2
```

**Returns:** _string_

---

### toString

▸ **toString**(): _string_

Returns a semantic version as a string.

**Usage**

```typescript
semanticVersion('1.2.5').toString(); // 1.2.5
```

**Returns:** _string_
