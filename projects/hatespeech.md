---
appName: HATESPEECH
appLogo: https://biplobsd.github.io/images/logos/github-profile-dark.png
companyName: MLOps Zoomcamp
companyLogo: https://cdn-images-3.listennotes.com/podcasts/datatalksclub-datatalksclub-viRa_IWBTkE-mYlu3oVsPgn.1400x1400.jpg
date: 1725288148000
readTime: 5
imgUrl: https://raw.githubusercontent.com/thedatadudech/hate_speech_detector/main/documentation/assets/hatespeech.drawio.png
whatText: Portfolio Project for the MLOps Zoomcamp
result: The code can be used freely
---

# HATE_SPEECH_DETECTOR

## Overview

The Hate Speech Detector is designed to identify and classify hate speech across social media and other digital platforms. Utilizing cutting-edge machine learning techniques, this tool aims to moderate content and foster a healthier online environment.

## Problem Statement

The rise of digital platforms has led to an increase in hate speech, negatively impacting individuals and communities by promoting violence and discrimination. The Hate Speech Detector seeks to accurately identify such content, enabling actions for its removal or marking, thus promoting inclusive and respectful online communication.

## Technology Stack

- **MLflow**: Manages experiments, model versioning, and deployment, streamlining the process of optimizing machine learning models.
- **Gradio**: Provides an easy-to-use library for creating web apps for machine learning models, allowing users to interact with the Hate Speech Detector in real-time.
- **FastApi**: Serves as the backend, using this micro web framework for Python to integrate with other components and provide a RESTful API.
- **Mage**: Orchestrates workflows, automating the machine learning lifecycle from data preparation to training and deployment, facilitating team collaboration and development process efficiency.
- **Evidently**: Monitors model performance and data quality, offering insights into how the model performs over time and identifying potential issues early.

## Architecture

The Hate Speech Detector's architecture is modular, ensuring flexibility and scalability. Key components include the data processing module, machine learning model, web interface, and monitoring system, interconnected through FastApi and Mage for a seamless workflow from data input to output.

## Use Cases

- Moderating content on social media platforms
- Monitoring comments on news websites and blogs
- Assisting organizations in adhering to online communication policies

## Cloud Infrastructure

### Overall architecture

<img src="https://raw.githubusercontent.com/thedatadudech/hate_speech_detector/main/documentation/assets/hatespeech.drawio.png" alt="Folder Structure" width="800" height="600">
