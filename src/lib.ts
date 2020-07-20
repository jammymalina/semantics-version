import { SemanticVersion } from './SemanticVersion';

/** @internal */
const getInvalidVersion = () => [-1, -1, -1];

/** @internal */
const fromNumArray = (version: number[]): number[] => {
  if (version.length === 0 || version.some((v) => typeof v !== 'number' || !Number.isInteger(v) || v < 0)) {
    return getInvalidVersion();
  }
  const result = [...version];
  return result.concat(new Array(3).fill(0).slice(result.length));
};

/** @internal */
const fromNumber = (major: number, other: number[]) => {
  return fromNumArray([major, ...other]);
};

/** @internal */
const fromString = (version: string): number[] => {
  const regex = /^(\d+\.)?(\d+\.)?(\*|\d+)/g;
  const versionNumbersMatch = version.match(regex) || [];
  if (versionNumbersMatch.length === 0) {
    return getInvalidVersion();
  }
  return fromNumArray(versionNumbersMatch[0].split('.').map((v) => parseInt(v, 10)));
};

/** @internal */
const extractVersionNumbers = (version: SemanticVersion | string | number | number[], other: number[]): number[] => {
  switch (typeof version) {
    case 'string':
      return other.length === 0 ? fromString(version) : getInvalidVersion();
    case 'number':
      return fromNumber(version, other);
    case 'object':
      if (other.length !== 0) {
        return getInvalidVersion();
      }
      if (Array.isArray(version)) {
        return fromNumArray(version);
      }
      return version._type === 'SemanticVersion' ? [...version.toList()] : getInvalidVersion();
    default:
      return getInvalidVersion();
  }
};

/**
 * Creates SemanticVersion from a string, a number, a list of numbers or SemanticVersion.
 * @param version A semantic version.
 * @param other A list of numbers containing minor and patch version numbers (both optional). Only valid if a version is a number.
 *
 * **Usage**
 * ```typescript
 * // string
 * semanticVersion('1.2.1'); // 1.2.1
 * semanticVersion('1.2'); // 1.2.0
 * semanticVersion('1'); // 1.0.0
 *
 * // numbers
 * semanticVersion(1, 2, 1); // 1.2.1
 * semanticVersion(1, 2); // 1.2.0
 * semanticVersion(1); // 1.0.0
 *
 * // a list of numbers
 * semanticVersion([1, 2, 1]); // 1.2.1
 * semanticVersion([1, 2]); // 1.2.0
 * semanticVersion([1]); // 1.0.0
 * ```
 */
const semanticVersion = (
  version: SemanticVersion | string | number | number[],
  ...other: number[]
): SemanticVersion => {
  const versionNumbers = extractVersionNumbers(version, other);
  const self = {
    _type: 'SemanticVersion',
    isValid: () => versionNumbers[0] !== -1,
    major: () => versionNumbers[0],
    minor: () => versionNumbers[1],
    patch: () => versionNumbers[2],
    toList: () => [...versionNumbers],
  } as SemanticVersion;

  self.toShortString = () => `${self.major()}.${versionNumbers[1]}`;
  self.toString = () => `${self.major()}.${versionNumbers[1]}.${versionNumbers[2]}`;

  self.isSame = (v2: SemanticVersion | number[] | string) => {
    const version2 = semanticVersion(v2);
    return self.major() === version2.major() && self.minor() === version2.minor() && self.patch() === version2.patch();
  };
  self.isOlder = (v2: SemanticVersion | number[] | string) => {
    const version2 = semanticVersion(v2);
    const ver1 = self.toList();
    const ver2 = version2.toList();
    for (let i = 0; i < ver1.length; i += 1) {
      if (ver1[i] === ver2[i]) {
        continue;
      }
      return ver1[i] < ver2[i];
    }
    return false;
  };
  self.isSameOrOlder = (v2: SemanticVersion | number[] | string) => {
    return self.isOlder(v2) || self.isSame(v2);
  };
  self.isNewer = (v2: SemanticVersion | number[] | string) => {
    const version2 = semanticVersion(v2);
    return version2.isOlder(self);
  };
  self.isSameOrNewer = (v2: SemanticVersion | number[] | string) => {
    return self.isNewer(v2) || self.isSame(v2);
  };

  return self;
};

/**
 * Compares two semantic versions. Both arguments will be parsed as a semantic version, if not already so. Can be used as a sort function.
 * @param v1 A version
 * @param v2 A version
 *
 * **Usage**
 * ```typescript
 * const versions = ['1.2.4', '1.0.1', '1.5.3', '1', '0.1.0', '4.5', '1.2.1', '2.1.3'];
 * versions.sort(semanticVersion.compare);
 * console.log(versions); // ['0.1.0', '1', '1.0.1', '1.2.1', '1.2.4', '1.5.3', '2.1.3', '4.5']
 * ```
 */
semanticVersion.compare = (
  v1: SemanticVersion | number[] | string,
  v2: SemanticVersion | number[] | string
): number => {
  const version1 = semanticVersion(v1);
  if (version1.isNewer(v2)) {
    return 1;
  }
  if (version1.isOlder(v2)) {
    return -1;
  }
  return 0;
};

/**
 * Compares two semantic versions, the later / newer version is considered as lesser one. Both arguments will be parsed as a semantic version, if not already so. Can be used as a sort function.
 * @param v1 A version
 * @param v2 A version
 *
 * **Usage**
 * ```typescript
 * const versions = ['1.2.4', '1.0.1', '1.5.3', '1', '0.1.0', '4.5', '1.2.1', '2.1.3'];
 * versions.sort(semanticVersion.compareByLatest);
 * console.log(versions); // ['4.5', '2.1.3', '1.5.3', '1.2.4', '1.2.1', '1.0.1', '1', '0.1.0']
 * ```
 */
semanticVersion.compareByLatest = (
  v1: SemanticVersion | number[] | string,
  v2: SemanticVersion | number[] | string
): number => {
  return semanticVersion.compare(v2, v1);
};

/**
 * You can check whether the semanticVersion considers the semantic version to be invalid. The first argument will be parsed as a semantic version, if not already so.
 * @param v A version
 *
 * **Usage**
 * ```typescript
 * semanticVersion.isValid('1.2.3'); // true
 * semanticVersion.isValid([1, 2, -2]); // false
 * ```
 */
semanticVersion.isValid = (v: SemanticVersion | number[] | string): boolean => {
  const version = semanticVersion(v);
  return version.isValid();
};

export { semanticVersion, SemanticVersion };
