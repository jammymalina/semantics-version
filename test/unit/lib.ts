import 'mocha';

import { expect } from 'chai';

import { semanticVersion } from '../../src/lib';

describe('semanticVersion', () => {
  describe('create semanticVersion object', () => {
    it('should create semantic version from string, full version', () => {
      const version = semanticVersion('1.2.5');
      expect(version.toString()).to.equal('1.2.5');
      expect(version.toShortString()).to.equal('1.2');
      expect(version.isValid()).to.be.true;
      expect(version.major()).to.equal(1);
      expect(version.minor()).to.equal(2);
      expect(version.patch()).to.equal(5);
    });

    it('should create semantic version from string, missing patch', () => {
      const version = semanticVersion('1.2');
      expect(version.toString()).to.equal('1.2.0');
      expect(version.isValid()).to.be.true;
    });

    it('should create semantic version from string, only major', () => {
      const version = semanticVersion('1');
      expect(version.toString()).to.equal('1.0.0');
      expect(version.isValid()).to.be.true;
    });

    it('should create semantic version from number, full version', () => {
      const version = semanticVersion(1, 2, 1);
      expect(version.toString()).to.equal('1.2.1');
      expect(version.isValid()).to.be.true;
    });

    it('should create semantic version from number, missing patch', () => {
      const version = semanticVersion(1, 2);
      expect(version.toString()).to.equal('1.2.0');
      expect(version.isValid()).to.be.true;
    });

    it('should create semantic version from number, only major', () => {
      const version = semanticVersion(1);
      expect(version.toString()).to.equal('1.0.0');
      expect(version.isValid()).to.be.true;
    });

    it('should create semantic version from number list, full version', () => {
      const version = semanticVersion([1, 2, 1]);
      expect(version.toString()).to.equal('1.2.1');
      expect(version.isValid()).to.be.true;
    });

    it('should create semantic version from number list, missing patch', () => {
      const version = semanticVersion([1, 2]);
      expect(version.toString()).to.equal('1.2.0');
      expect(version.isValid()).to.be.true;
    });

    it('should create semantic version from number list, only major', () => {
      const version = semanticVersion([1]);
      expect(version.toString()).to.equal('1.0.0');
      expect(version.isValid()).to.be.true;
    });

    it('should create invalid semantic version, undefined argument', () => {
      const version = (semanticVersion as any)();
      expect(version.isValid()).to.be.false;
    });

    it('should create invalid semantic version, empty string', () => {
      const version = semanticVersion('');
      expect(version.isValid()).to.be.false;
    });

    it('should create invalid semantic version, object', () => {
      const version = (semanticVersion as any)({});
      expect(version.isValid()).to.be.false;
    });

    it('should create invalid semantic version, negative number', () => {
      const version = semanticVersion(-5);
      expect(version.isValid()).to.be.false;
    });

    it('should create invalid semantic version, negative number in array', () => {
      const version = semanticVersion([1, 2, -10]);
      expect(version.isValid()).to.be.false;
    });

    it('should create invalid semantic version, should not mix different arguments', () => {
      const version = semanticVersion([1, 2, 10], 10, 20);
      expect(version.isValid()).to.be.false;
    });

    it('should create invalid semantic version, should not mix different arguments', () => {
      const version = semanticVersion('1.2.1', 10, 20);
      expect(version.isValid()).to.be.false;
    });
  });

  describe('compare semantic versions', () => {
    it('semantic version is same', () => {
      const a = semanticVersion('1.2.10');
      const b = semanticVersion('1.2.10');
      expect(a.isNewer(b)).to.be.false;
      expect(a.isSameOrNewer(b)).to.be.true;
      expect(a.isSame(b)).to.be.true;
      expect(a.isOlder(b)).to.be.false;
      expect(a.isSameOrOlder(b)).to.be.true;
      expect(semanticVersion.compare(a, b)).to.equal(0);
    });

    it('semantic version is newer', () => {
      const a = semanticVersion('1.2.1');
      const b = semanticVersion('1.1.5');
      expect(a.isNewer(b)).to.be.true;
      expect(a.isSameOrNewer(b)).to.be.true;
      expect(a.isSame(b)).to.be.false;
      expect(a.isOlder(b)).to.be.false;
      expect(a.isSameOrOlder(b)).to.be.false;
      expect(semanticVersion.compare(a, b)).to.equal(1);
    });

    it('semantic version is newer, string version', () => {
      const a = semanticVersion('1.2.1');
      const b = '1.1.24';
      expect(a.isNewer(b)).to.be.true;
      expect(a.isSameOrNewer(b)).to.be.true;
      expect(a.isSame(b)).to.be.false;
      expect(a.isOlder(b)).to.be.false;
      expect(a.isSameOrOlder(b)).to.be.false;
    });

    it('semantic version is newer, number list version', () => {
      const a = semanticVersion('1.2.1');
      const b = [0, 5, 2];
      expect(a.isNewer(b)).to.be.true;
      expect(a.isSameOrNewer(b)).to.be.true;
      expect(a.isSame(b)).to.be.false;
      expect(a.isOlder(b)).to.be.false;
      expect(a.isSameOrOlder(b)).to.be.false;
    });

    it('semantic version is older', () => {
      const a = semanticVersion('1.1.1');
      const b = semanticVersion('1.1.5');
      expect(a.isNewer(b)).to.be.false;
      expect(a.isSameOrNewer(b)).to.be.false;
      expect(a.isSame(b)).to.be.false;
      expect(a.isOlder(b)).to.be.true;
      expect(a.isSameOrOlder(b)).to.be.true;
      expect(semanticVersion.compare(a, b)).to.equal(-1);
    });

    it('sort semantic versions', () => {
      const versions = ['1.2.4', '1.0.1', '1.5.3', '1', '0.1.0', '4.5', '1.2.1', '2.1.3'];
      versions.sort(semanticVersion.compare);
      expect(versions).to.deep.equal(['0.1.0', '1', '1.0.1', '1.2.1', '1.2.4', '1.5.3', '2.1.3', '4.5']);
    });
  });
});
