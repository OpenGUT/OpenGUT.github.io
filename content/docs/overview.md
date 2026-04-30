---
title: Project Overview
navTitle: Overview
description: What is OpenGUT? Why we need this? What composes the system?
order: 1
---

OpenGut is an open-source platform for gut signal acquisition, processing, and interaction. It is designed to support research workflows that require continuous, wearable sensing of abdominal acoustic signals, along with configurable playback and real-time feedback.

The system is built around a custom embedded hardware platform that integrates dual digital microphones, local storage, and optional actuation. A body-facing microphone captures abdominal sounds, while a secondary ambient-facing microphone records environmental audio. This dual-channel configuration enables synchronized acquisition of gut signals and environmental noise for downstream processing.

Audio is recorded locally to a microSD card and can be accessed for offline analysis or routed through the system for playback. OpenGut supports multiple modes of operation, including continuous logging, playback of recorded signals, and a real-time loopback mode, where incoming signals are rendered in real time through connected output devices.

A desktop-based graphical interface is also provided for configuration and signal inspection. The interface supports parameter tuning, such as sampling rate and recording duration. It also allows for visualization of data as time-series and spectrogram. Also, basic signal processing operations such as filtering and denoising are supported.

The hardware is designed for wearable deployment using a belt-mounted form factor and a dedicated acoustic interface that improves coupling between the body and the sensor. The system is modular, allowing researchers to operate in sensing-only configurations or integrate additional components such as audio or haptic actuators depending on the application.

OpenGut is intended for use in human-computer interaction, physiological sensing, and prototyping contexts where access to raw gut signals and flexible system configuration are required.


![OpenGUT Hardware breakdown image](/images/system_breakdown.jpg)