export interface SemanticVersion {
  /**
   * For internal use.
   */
  readonly _type: string;
  /**
   * You can check whether the semanticVersion considers the semantic version to be invalid.
   *
   * **Usage**
   * ```typescript
   * semanticVersion('1.2.1').isValid(); // true
   * semanticVersion({}).isValid(); // false
   * semanticVersion('1.2.1', 10, 20); // false - you cannot mix arguments
   * ```
   */
  isValid(): boolean;
  /**
   * Returns the major version.
   *
   * **Usage**
   * ```typescript
   * semanticVersion('1.2.3').major(); // 1
   * ```
   */
  major(): number;
  /**
   * Returns the minor version.
   *
   * **Usage**
   * ```typescript
   * semanticVersion('1.2.3').minor(); // 2
   * ```
   */
  minor(): number;
  /**
   * Returns the patch version.
   *
   * **Usage**
   * ```typescript
   * semanticVersion('1.2.3').patch(); // 3
   * ```
   */
  patch(): number;
  /**
   * Checks if a semantic version is the same as another semantic version. The first argument will be parsed as a semantic version, if not already so.
   * @param v A version
   *
   * **Usage**
   * ```typescript
   * semanticVersion('1.2.3').isSame('1.2.3'); // true
   * semanticVersion('1.2.3').isSame([1, 2, 3]); // true
   * ```
   */
  isSame(v: SemanticVersion | number[] | string): boolean;
  /**
   * Checks if a semantic version is older as another semantic version. The first argument will be parsed as a semantic version, if not already so.
   * @param v A version
   *
   * **Usage**
   * ```typescript
   * semanticVersion('1.1.3').isOlder('1.2.3'); // true
   * semanticVersion('1.1.3').isOlder([1, 2, 3]); // true
   * ```
   */
  isOlder(v: SemanticVersion | number[] | string): boolean;
  /**
   * Checks if a semantic version is older or the same as another semantic version. The first argument will be parsed as a semantic version, if not already so.
   * @param v A version
   *
   * **Usage**
   * ```typescript
   * semanticVersion('1.1.5').isSameOrOlder('1.2.1'); // true
   * semanticVersion('1.1.5').isSameOrOlder([1, 2, 1]); // true
   * ```
   */
  isSameOrOlder(v: SemanticVersion | number[] | string): boolean;
  /**
   * Checks if a semantic version is newer as another semantic version. The first argument will be parsed as a semantic version, if not already so.
   * @param v A version
   *
   * **Usage**
   * ```typescript
   * semanticVersion('1.3.0').isNewer('1.2.6'); // true
   * semanticVersion('1.3.0').isNewer([1, 2, 6]); // true
   * ```
   */
  isNewer(v: SemanticVersion | number[] | string): boolean;
  /**
   * Checks if a semantic version is newer or the same as another semantic version. The first argument will be parsed as a semantic version, if not already so.
   * @param v A version
   *
   * **Usage**
   * ```typescript
   * semanticVersion('1.4.3').isSameOrNewer('1.3.2'); // true
   * semanticVersion('1.4.3').isSameOrNewer([1, 3, 2]); // true
   * ```
   */
  isSameOrNewer(v: SemanticVersion | number[] | string): boolean;
  /**
   * Returns a semantic version as a list of numbers -> [major, minor, patch].
   *
   * **Usage**
   * ```typescript
   * semanticVersion('1.2.5').toList(); // [1, 2, 5]
   * ```
   */
  toList(): number[];
  /**
   * Returns a semantic version as a string containing major and minor version.
   *
   * **Usage**
   * ```typescript
   * semanticVersion('1.2.5').toShortString(); // 1.2
   * ```
   */
  toShortString(): string;
  /**
   * Returns a semantic version as a string.
   *
   * **Usage**
   * ```typescript
   * semanticVersion('1.2.5').toString(); // 1.2.5
   * ```
   */
  toString(): string;
}
