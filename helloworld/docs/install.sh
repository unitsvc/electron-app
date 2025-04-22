#!/bin/bash

pnpm config set registry https://registry.npmmirror.com

pnpm config set electron_mirror https://cdn.npmmirror.com/binaries/electron/

pnpm exec electron -v

pnpm add nodemon -D

pnpm add electron@latest -D

pnpm add electron-builder -D
