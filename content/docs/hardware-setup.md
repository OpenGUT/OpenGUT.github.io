---
title: Initial Hardware Setup
navTitle: Hardware Setup
description: How to kickstart your OpenGUT hardware
order: 3
---

The OpenGut system is designed to require minimal DIY assembly. Most components are modular and can be prepared using basic tools and off-the-shelf parts, with only light fabrication and assembly steps required.

### Installing Firmware
Clone OpenGUT GitHub repo: OpenGUT/Firmware at main · OpenGUT/OpenGUT
Download the nRF connect SDK extension on VS code and set up the environment. 
Open the cloned repo in this environment. 
Build the file
The built file is ready for flashing. 

### 3.1 Pre-Assembly Preparation
Before assembling the OpenGut wearable device, ensure that all required components are sourced and prepared.

#### Step 0: Source the PCB
The PCB Gerber files are available on the GitHub repository. Download them are get them manufactured from a reputed seller like JLCPCB https://jlcpcb.com
The components can also be soldered from JLCPCB. Just provide them with the BOM.
You should receive the assembled PCB in 3 to 4 weeks time. 

#### Step 1: Source Wearable Belt
Purchase a stretchable running belt to house the system.
We recommend a low-profile marathon runner’s belt with multiple compartments.
Example used in this project: [INSERT DECATHLON LINK]
We selected one position and carefully cut the material of the belt, so that the diaphragm would protrude and contact the skin directly
The addition of a hydro pack around the diaphragm may also improve body contact.

#### Step 2: 3D Print Components
Print the following parts:
PCB enclosure
Microphone acoustic cones (for diaphragm coupling)
All design files are available here: OpenGUT/Hardware at main · OpenGUT/OpenGUT
Ensure prints are:
Dimensionally accurate
Free of defects
Printed with sufficient resolution for proper acoustic sealing

#### Step 3: Source Stethoscope Diaphragms
Purchase stethoscope diaphragms for the acoustic interface.
These are used to improve coupling between the body and microphone.
Recommended type and size: [INSERT LINK]


#### Step 4: Prepare PCB Standoffs
The PCB enclosure includes standoffs with a 2.5 mm bore.
Use an M3 tap to thread each standoff. Self tapping screw will also work.
Ensure:
Threads are clean and aligned
No cracking or deformation of the printed material
Then fasten the PCB with M3 screws to the enclosure body. Please ensure that the operational side (containing switch, indicator LEDS and SD card socket) of the PCB is faced up.

#### Step 5: Assemble Acoustic Cone Interface
Fit the stethoscope diaphragm onto the outer face of the microphone cone.
This assembly is mounted on the underside of the enclosure.
Ensure:
The diaphragm is securely seated
There are no gaps between diaphragm and cone
The surface is flat for proper skin contact

#### Step 6:  Micro SD card
We used a 32 Gb Scan disk ultra. This size ensures a minimum of 24 hours of data capture. Format the card to [INSERT ]
The card indexes files when activated, so that multiple recordings can be captured without downloading the data.
Fit Micro SD card into the card slot [INSERT SOMETHING HERE]

#### Step 7: Flash firmware
You will need the Nordic DK or an alternative J-link debugger to flash the PCB. 
We will use the DK. Connect the Debug out on DK to the Debug in in the PCB. 
Using the nrf connect, flash the built code. 
Note: The VDD is set to 3V, if needed change register to accommodate suitable VDD. 
