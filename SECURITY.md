# Security policy

## Supported version

Security fixes target the `main` branch and the current deployment linked from
the README. Historical commits, mirrors, and unofficial modifications are not
supported separately.

## Reporting a vulnerability

Please use [GitHub's private vulnerability reporting form](https://github.com/okturan/fieri-menu/security/advisories/new)
instead of opening a public issue. Include the affected view or menu record,
clear reproduction steps, the browser you tested, and the security impact.

Relevant reports include:

- script or markup injection through menu content, search terms, or rendered
  planning-list entries;
- planning-list data leaving the current browser session despite the documented
  local-only boundary;
- a dependency, build, or deployment weakness with a demonstrated impact;
- UI behavior that could credibly misrepresent the unofficial site as an order
  channel or expose information entered by a visitor.

Stale prices, unavailable dishes, translation mistakes, allergen omissions,
and restaurant-service concerns are content issues rather than software
vulnerabilities. This project is not affiliated with the restaurant and cannot
accept orders.

Use synthetic menu entries and planning data. Do not submit customer details,
credentials, or destructive proof-of-concept payloads. The maintainer will
coordinate validation, remediation, and disclosure through the private
advisory.
