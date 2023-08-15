hi, this app needs two env vars:
- PUBLIC_TOC, time of compilation
- PUBLIC_VERSION, version of application

```bash
PUBLIC_TOC="$(date +%s%N | cut -b1-13)" PUBLIC_VERSION="1.0.0" yarn build
```