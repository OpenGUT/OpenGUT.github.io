---
title: Desktop Software Setup
navTitle: Software Setup
description: How to download source code, setup Python environment, and run the software.
order: 5
---

In this section, we provide an overview of the Python-based OpenGUT desktop software and how to run it locally. [A tutorial video](https://youtu.be/VQ03OAnQklk) is available demonstrating how to use the software. This documentation complements the video by outlining how to set up the environment and interact with the software.

### 5.1 System Requirements
The OpenGUT desktop software has been developed and tested in the following environment:
- Operating System: macOS 26.x
- Python Version: 3.12.13
- Python Management Tool: pyenv
*Note: Other operating systems or Python versions may work, but they are not officially supported.*

### 5.2 Install Essential Softwares: Homebrew and Pyenv
First, install Homebrew (a package manager for macOS) by following the instructions at: https://brew.sh/.
During installation, if Xcode or Apple Command Line Tools are not already installed, macOS will prompt you to install them.

To ensure compatibility, we use pyenv to manage Python versions.
- Step 1: Install pyenv
 Open Terminal and run:
 ```zsh
 brew install pyenv
 ```
- Step 2: Install Python 3.12.13
 ```zsh
 pyenv install 3.12.13
 ```
- Step 3: Set the Python we just installed as default Python interpreter
 ```zsh
 pyenv local 3.12.13
 ```
- Step 4: Verify installation
 ```zsh
 python --version
 ```
You should be able to confirm Python 3.12.13 is activated.

### 5.3 Setup the OpenGUT software
- Step 1: Clone the OpenGUT repository (https://github.com/OpenGUT/OpenGUT) first.
```zsh
git clone https://github.com/OpenGUT/OpenGUT
```
Alternatively, downloading the repository as a zip file and unzip it in a folder.

- Step 2: Adding the [AudioSep](https://github.com/Audio-AGI/AudioSep).
This is essential for audio filtering with natural language. Under `OpenGUT/Software`, you will clone the project or download it as a zip file and unzip it in `OpenGUT/Software` as we did in the previous step.
```zsh
cd OpenGUT/Software
git clone https://github.com/Audio-AGI/AudioSep
```

- Step 3: Download checkpoints for AudioSep
From https://huggingface.co/spaces/Audio-AGI/AudioSep/tree/main/checkpoint, download checkpoint files (all the files available from the link) and place them under `OpenGUT/Software/AudioSep/checkpoint`.

- Step 4: Install the Python libraries by running a command:
```zsh
pip3 install -r requirements_pyenv3.12.13_venv.txt
```

- Step 5: Run the software
Run command in below to run the OpenGUT software.
```zsh
python main.py
```

### 5.4 Troubleshooting
- Software is not running, or software libraries cannot be installed with *5.3 Step 4*
Ensure Python 3.12.13 is selected. Check if Pyenv is configured to use Python 3.12.13 (refer section 5.2)

- Run the software on non-supported platform (Linux, Windows)
Support for Windows and Linux will be provided in future.
