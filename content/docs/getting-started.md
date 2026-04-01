---
title: Getting Started
description: Install OpenGUT and run your first pipeline.
order: 1
---

# Getting Started

OpenGUT is designed to help you build reliable pipelines with simple primitives.

## Install

```bash
npm install @opengut/core
```

## First Run

```ts
import { createPipeline } from "@opengut/core";

const pipeline = createPipeline();
pipeline.run();
```

For a full walkthrough, continue to the Concepts page.