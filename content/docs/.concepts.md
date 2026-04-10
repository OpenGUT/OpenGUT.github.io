---
title: Hardware Architecture
navTitle: Hardware
description: Overview of the sensor board design and signal chain.
order: 2
---

# Hardware Architecture

The OpenGUT board integrates a low-noise analog front-end, a microcontroller with USB support, and a microSD card slot for local recording.

## Signal Chain

1. Contact microphone attached to the abdomen.
2. Analog amplifier (adjustable gain, ~20–60 dB).
3. 16-bit ADC sampled at 8 kHz.
4. USB streaming to host or write to microSD.

## Key Components

| Reference | Part | Function |
|-----------|------|----------|
| U1 | INA333 | Instrumentation amplifier |
| U3 | STM32G0 | Microcontroller |
| SW1 | SPST | Recording toggle |
| J1 | USB-C | Power and data |

All schematics and Gerber files are published in the `/hardware` repository folder.