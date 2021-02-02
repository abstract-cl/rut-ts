# rut-ts

[![Actions Status](https://github.com/abstract-cl/rut-ts/workflows/Test/badge.svg)](https://github.com/abstract-cl/rut-ts)
[![Actions Status](https://github.com/abstract-cl/rut-ts/workflows/Lint/badge.svg)](https://github.com/abstract-cl/rut-ts)
[![Actions Status](https://github.com/abstract-cl/rut-ts/workflows/Audit/badge.svg)](https://github.com/abstract-cl/rut-ts)

NPM library to validate and format RUT (Chilean identification number)
a Chilean rut looks like this: 18.019.150-K

**Important:**
You need to have the file ~/.npmrc with you github access token. Here you can find the [documentation](https://help.github.com/es/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages#) to configure.

## Installation

Run this command on the root directory of the project ( only if you dont have a previous access token in this file ):

    echo 'registry=https://npm.pkg.github.com/abstract-cl' >> .npmrc

With [npm](https://npmjs.org/) installed, run

    $ npm install @abstract-cl/rut-ts

This will install the latest version of the library.

## Usage

To import **rut-ts** in your file:

    const { RUT } = require('@abstract/rut-ts');

### Validation

To validate a rut

    Rut.validate('18019150-K') -> True
    Rut.validate('18.019.150K') -> True
    Rut.validate('18.019.150-K') -> True
    Rut.validate('0000000') -> False
    Rut.validate('any-string-thats-not-a-rut') -> False

### Clean RUT

To clean a rut

    Rut.clean('18.019.150-K') -> '18019150K'
    Rut.clean('18019150-K') -> '18019150K'
    Rut.clean('18.019.50K') -> '18019150K'
    Rut.clean('18019150K') -> '18019150K'
    Rut.clean(undefined) -> undefined
    Rut.clean(null) -> undefined

## Credits

<table>
  <tr>
    <td align="center"><a href="https://github.com/lukasburns"><img src="https://avatars3.githubusercontent.com/u/3072268?s=400&u=e50ff940e5407a4299d4446a1cfe26b20753fb46&v=4" width="100px;" alt="Lukas Burns"/><br /><sub><b>Lukas Burns</b></sub></a></td>
    <td align="center"><a href="https://github.com/pdecarcer"><img src="https://avatars2.githubusercontent.com/u/298465?s=400&v=4" width="100px;" alt="Pablo De Carcer"/><br /><sub><b>Pablo de Carcer</b></sub></a></td>
    <td align="center"><a href="https://github.com/adisrael"><img src="https://avatars.githubusercontent.com/u/17645654?s=400&u=5be8ff29b6ba467167e400e11aa70f0a2e7577c1&v=4" width="100px;" alt="Alexander Israel"/><br /><sub><b>Alexander Israel</b></sub></a></td>
  </tr>
</table>
