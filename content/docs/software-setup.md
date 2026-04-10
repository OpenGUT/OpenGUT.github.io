---
title: Desktop Software Setup
navTitle: Software Setup
description: How to download source code, setup Python environment, and run the software.
order: 5
---

In this section we will have an overview of the Python-based OpenGUT desktop software. We prepared a tutorial video that demonstrates how to use the software. With this documentation, you will be able to understand how to interact with the software.

### 5.1 Setup the Python environment on your computer
At the moment we deliver source code of the OpenGUT desktop software, which requires Python3 and a bunch of specific Python software libraries. This subsection describes how to set up a required environment to run the software.
At the moment, the software is implemented and confirmed to be running on:
macOS26.x, Python 3.12.13 (installed via pyenv)

Technically the software works on Linux and Windows too (OpenGUT team will prepare the installation guide for in near future).
First, install the homebrew command line tool by following the instructions on: https://brew.sh/. If you don’t have Xcode on your Mac, you will be asked to install Apple Command Line Tool on the half way of homebrew installation. You need to install CLT since it is essential to run softwares to setup the environment and Python.

Once it’s done, you need to install `pyenv` (https://github.com/pyenv/pyenv) software to install a specific version of Python. OpenGUT software runs well with Python 3.12.13 at the moment, so you will install it on your computer:
```zsh
brew install pyenv
pyenv install 3.12.13
```
Then, the Python you installed needs to be assigned as a default Python for your setup:
```zsh
pyenv local 3.12.13
```

### 5.2 Setup the OpenGUT software
Let’s clone / download the OpenGUT repository (https://github.com/OpenGUT/OpenGUT) first.
```zsh
git clone https://github.com/OpenGUT/OpenGUT
```
Or, just download the repository as a zip file and place it in any place.

Next, we will add the AudioSep project (https://github.com/Audio-AGI/AudioSep) for audio filtering with natural language. Under `OpenGUT/Software`, you will clone the project or download as similar as what we did with OpenGUT repo.
```zsh
cd OpenGUT/Software
git clone https://github.com/Audio-AGI/AudioSep
```

As the AudioSep project repo mentions, download checkpoints from https://huggingface.co/spaces/Audio-AGI/AudioSep/tree/main/checkpoint and place them under `AudioSep/checkpoint`.

In the previous chapter, we specified to use Python 3.12.13. Now we can install the libraries by running a command:
```zsh
pip3 install -r requirements_pyenv3.12.13_venv.txt
```

Once you install all the required libraries, you can run the software by:
```zsh
python main.py
```
