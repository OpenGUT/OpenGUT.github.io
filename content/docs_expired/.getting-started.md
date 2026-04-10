---
title: Getting Started
navTitle: Getting Started
description: Assemble the board, install dependencies, and capture your first recording.
order: 1
---

# Getting Started

OpenGUT consists of three layers. Work through them in order:

1. **Hardware** — assemble or order the PCB and attach the contact microphone.
2. **Firmware** — flash the embedded firmware to the board over USB.
3. **Playground** — open the desktop analysis application and connect the device.

## Requirements

- OpenGUT sensor board (v0.1 or later)
- USB-C cable
- Python 3.11+ (for the Playground app)

## Install the Playground

```bash
git clone https://github.com/OpenGUT/playground.git
cd playground
pip install -e .
python -m playground
```

The application window will open. Navigate to **Device Configuration** and select your board's serial port.