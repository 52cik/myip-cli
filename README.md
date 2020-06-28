# myip

A simple CLI for view internal IP and external IP

[中文说明](/README_CN.md)

## Installation & Usage

Prerequisites: Node.js (>=4.x, 6.x preferred), npm version 3+ and Git.

``` sh
$ npm install -g myip-cli
$ myip

# or
$ npx myip-cli
```

You can see the following information.

``` js
internal: { en0: 'x.x.x.x', vnic0: 'x.x.x.x' }
external: { ip: 'x.x.x.x', region: 'region information' }
```
