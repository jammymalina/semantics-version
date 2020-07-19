export interface SemanticVersion {
  readonly _type: string;
  isValid(): boolean;
  major(): number;
  minor(): number;
  patch(): number;
  isSame(v: SemanticVersion | number[] | string): boolean;
  isOlder(v: SemanticVersion | number[] | string): boolean;
  isSameOrOlder(v: SemanticVersion | number[] | string): boolean;
  isNewer(v: SemanticVersion | number[] | string): boolean;
  isSameOrNewer(v: SemanticVersion | number[] | string): boolean;
  toList(): number[];
  toShortString(): string;
  toString(): string;
}

const getInvalidVersion = () => [-1, -1, -1];

const fromNumArray = (version: number[]): number[] => {
  if (version.length === 0 || version.some((v) => typeof v !== 'number' || !Number.isInteger(v) || v < 0)) {
    return getInvalidVersion();
  }
  const v = [...version];
  return v.concat(new Array(3).fill(0).slice(v.length));
};

const fromNumber = (major: number, other: number[]) => {
  return fromNumArray([major, ...other]);
};

const fromString = (version: string): number[] => {
  const regex = /^(\d+\.)?(\d+\.)?(\*|\d+)/g;
  const versionNumbersMatch = version.match(regex) || [];
  if (versionNumbersMatch.length === 0) {
    return getInvalidVersion();
  }
  return fromNumArray(versionNumbersMatch[0].split('.').map((v) => parseInt(v, 10)));
};

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

semanticVersion.compare = (a: SemanticVersion | number[] | string, b: SemanticVersion | number[] | string) => {
  const v1 = semanticVersion(a);
  if (v1.isNewer(b)) {
    return 1;
  }
  if (v1.isOlder(b)) {
    return -1;
  }
  return 0;
};

export { semanticVersion };
