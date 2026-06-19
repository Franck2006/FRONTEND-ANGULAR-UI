# Deep Navy / Slate Dashboard UI Framework
## Technical Engineering Documentation & Component Library Specification

Welcome to the official component design system registry. This system is designed around a premium **Deep Navy and Slate Blue** visual theme, optimized for mobile-first layouts, and written specifically for **Angular 19/21** utilizing standalone architectures, Zone-less rendering pipelines, and native TypeScript Signal inputs/outputs.

---

## Architecture Overview

All components within this repository share foundational design primitives:
* **Canvas Background:** `#0B132B` (Deep Cosmic Navy)
* **Surface / Panel Background:** `#1C2541` at variable opacity levels (`/40`, `/60`)
* **Borders / Outlines:** `#3A506B` with low opacities (`/15`, `/20`, `/30`)
* **Primary Interactive Accent:** `#2563EB` (Blue-600) / `#3B82F6` (Blue-500)
* **Typography Archetype:** Slate family scales (`text-slate-100` down to `text-slate-500`)
* **Icon Primitives:** Dedicated FontAwesome class string identifiers (`fas fa-*`)

---

## Core Component Registry

### 1. Component: `dev-app-table-pagination`
#### Description
A reactive pagination wrapper that handles slice arithmetic for dataset windows, computes structural ranges on the fly via Signals, and maps page sizes dynamically with an internal instance of the design system's custom form field selector dropdown.

#### Signature Primitives
* **Inputs:**
    * `totalItems = input.required<number>()`
    * `pageSize = input<number>(10)`
    * `currentPage = input<number>(1)`
* **Outputs:**
    * `pageChange = output<number>()`
    * `pageSizeChange = output<number>()`

#### Implementation Specification
```html
<app-dev-app-table-pagination
  [totalItems]="rawUsers().length"
  [pageSize]="itemsPerPage()"
  [currentPage]="activePage()"
  (pageChange)="activePage.set($event)"
  (pageSizeChange)="itemsPerPage.set($event); activePage.set(1)" 
/>