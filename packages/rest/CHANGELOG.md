# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="4.0.0-alpha.14"></a>
# [4.0.0-alpha.14](https://github.com/strongloop/loopback-next/compare/@loopback/rest@4.0.0-alpha.13...@loopback/rest@4.0.0-alpha.14) (2017-12-15)


### Features

* Expose reflectors via MetadataInspector ([5e6829f](https://github.com/strongloop/loopback-next/commit/5e6829f))
* Refactor REST decorators to use factories ([d03adf7](https://github.com/strongloop/loopback-next/commit/d03adf7))




<a name="4.0.0-alpha.13"></a>
# [4.0.0-alpha.13](https://github.com/strongloop/loopback-next/compare/@loopback/rest@4.0.0-alpha.12...@loopback/rest@4.0.0-alpha.13) (2017-12-11)


### Bug Fixes

* Fix node module names in source code headers ([0316f28](https://github.com/strongloop/loopback-next/commit/0316f28))
* **rest:** Fix compilation error caused by [@types](https://github.com/types)/node ([89f1401](https://github.com/strongloop/loopback-next/commit/89f1401))




<a name="4.0.0-alpha.12"></a>
# [4.0.0-alpha.12](https://github.com/strongloop/loopback-next/compare/@loopback/rest@4.0.0-alpha.11...@loopback/rest@4.0.0-alpha.12) (2017-12-01)


### Bug Fixes

* **rest:** move [@types](https://github.com/types)/http-errors from dev-dep ([11350bd](https://github.com/strongloop/loopback-next/commit/11350bd))




<a name="4.0.0-alpha.11"></a>
# [4.0.0-alpha.11](https://github.com/strongloop/loopback-next/compare/@loopback/rest@4.0.0-alpha.10...@loopback/rest@4.0.0-alpha.11) (2017-11-30)




**Note:** Version bump only for package @loopback/rest

<a name="4.0.0-alpha.10"></a>
# [4.0.0-alpha.10](https://github.com/strongloop/loopback-next/compare/@loopback/rest@4.0.0-alpha.9...@loopback/rest@4.0.0-alpha.10) (2017-11-29)


### Bug Fixes

* **rest:** Fix parameter description ([c3e6afc](https://github.com/strongloop/loopback-next/commit/c3e6afc))
* **rest:** Improve rest metadata inheritance ([3f124f3](https://github.com/strongloop/loopback-next/commit/3f124f3))
* **rest:** Listen on all interfaces if host is not configured ([99daf63](https://github.com/strongloop/loopback-next/commit/99daf63))
* **rest:** Remove unused imports ([76a08ee](https://github.com/strongloop/loopback-next/commit/76a08ee))




<a name="4.0.0-alpha.9"></a>
# [4.0.0-alpha.9](https://github.com/strongloop/loopback-next/compare/@loopback/rest@4.0.0-alpha.8...@loopback/rest@4.0.0-alpha.9) (2017-11-14)


### Features

* **rest:** Make rest host and explorer configurable ([caa2598](https://github.com/strongloop/loopback-next/commit/caa2598))




<a name="4.0.0-alpha.8"></a>
# [4.0.0-alpha.8](https://github.com/strongloop/loopback-next/compare/@loopback/rest@4.0.0-alpha.7...@loopback/rest@4.0.0-alpha.8) (2017-11-09)


### Bug Fixes

* **rest:** Tidy up rest decorator metadata ([7d15bfe](https://github.com/strongloop/loopback-next/commit/7d15bfe))


### Features

* **rest:** Improve http error handling ([15d04fa](https://github.com/strongloop/loopback-next/commit/15d04fa))
* **rest:** Improve result serialization for http ([d5bc53e](https://github.com/strongloop/loopback-next/commit/d5bc53e))




<a name="4.0.0-alpha.7"></a>
# [4.0.0-alpha.7](https://github.com/strongloop/loopback-next/compare/@loopback/rest@4.0.0-alpha.6...@loopback/rest@4.0.0-alpha.7) (2017-11-06)




**Note:** Version bump only for package @loopback/rest

<a name="4.0.0-alpha.6"></a>
# [4.0.0-alpha.6](https://github.com/strongloop/loopback-next/compare/@loopback/rest@4.0.0-alpha.5...@loopback/rest@4.0.0-alpha.6) (2017-10-31)




**Note:** Version bump only for package @loopback/rest

<a name="4.0.0-alpha.5"></a>
# [4.0.0-alpha.5](https://github.com/strongloop/loopback-next/compare/@loopback/rest@4.0.0-alpha.4...@loopback/rest@4.0.0-alpha.5) (2017-10-31)




**Note:** Version bump only for package @loopback/rest

<a name="4.0.0-alpha.4"></a>
# 4.0.0-alpha.4 (2017-10-25)


### Bug Fixes

* **rest:** Add index boilerplate ([02a025e](https://github.com/strongloop/loopback-next/commit/02a025e))
* **rest:** convert primitives to strings ([2e1ca13](https://github.com/strongloop/loopback-next/commit/2e1ca13))
* **rest:** Move server instantiation to class definition ([051b8e0](https://github.com/strongloop/loopback-next/commit/051b8e0))
* **testlab:** Remove sinon-should integration ([8841fce](https://github.com/strongloop/loopback-next/commit/8841fce))


### Code Refactoring

* **core:** Component servers are now key-value pairs ([866953a](https://github.com/strongloop/loopback-next/commit/866953a))


### BREAKING CHANGES

* **core:** Components must now provide key-value pairs in an
object called "servers".
