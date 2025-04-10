---
layout: page
permalink: /research/
title: Research
description: 
nav: true
nav_order: 2
---
<!-- 
## Cellular Network Security

We study security vulnerabilities in commercial cellular devices and networks by analyzing protocol implementations and specifications. Our research covers various cellular protocol layers, from legacy systems to modern networks.

- **Implementation and spec-based vulnerabilities**: Discover bugs in 2G–5G NAS, RRC, and SIP/VoNR protocols via over-the-air fuzzing and standard violations
- **Security testing frameworks**: Build practical tools for protocol conformance and robustness testing using real devices and open-source base stations
- **Rogue entities detection & defense**: Develop methods to detect and defeat fake base stations (FBS), rogue UEs, and access barring attacks in the wild

---

## Satellite & Non-Terrestrial Network (NTN) Security

As 5G expands to non-terrestrial domains, satellite communication systems—especially low Earth orbit (LEO) and CubeSats—become a new attack surface. We aim to identify and mitigate threats in emerging space-based networks.

- **5G NTN security**: Analyze vulnerabilities in 5G NTN protocol stacks, including access and mobility procedures for satellite-connected devices
- **CubeSat/LEO security**: Study security challenges specific to small satellites and their communication protocols
- **Signal spoofing & jamming defense**: Detect malicious activity such as rogue uplinks or denial-of-service via intentional interference

---

## Standard-Aware LLM Security Analysis

We explore how large language models (LLMs) can assist in identifying protocol-level security vulnerabilities across complex and evolving standards.

- **LLM-aided spec analysis**: Automate the process of parsing and analyzing 3GPP standards to identify logical flaws or insecure procedures
- **Prompt engineering for protocol fuzzing**: Design and evaluate effective prompts for LLMs to suggest edge-case test scenarios and malformed message structures
- **Cross-standard inconsistency mining**: Detect mismatches and ambiguities across different releases or protocol documents
 -->


<!-- ### • Security Analysis of Commercial Cellular Devices and Networks

Modern cellular systems—from legacy 2G networks to today’s 5G Standalone architecture—are incredibly complex and rely on numerous protocol layers such as NAS, RRC, and SIP (VoNR). While these protocols are standardized, their actual implementations in smartphones and network equipment often diverge from the specs, leaving room for subtle but critical security flaws.

Our research aims to systematically uncover such vulnerabilities in real-world devices and infrastructure. We reverse engineer modem firmware, build custom over-the-air testing frameworks using SDRs, and perform conformance and robustness testing across multiple layers of the protocol stack. We also investigate vulnerabilities in emerging components like ORAN (Open Radio Access Network), which introduces new attack surfaces due to its open interfaces and disaggregated architecture.

Our goal is to identify both implementation-level bugs and deeper logical flaws in protocol design that may impact confidentiality, integrity, or availability of cellular services.

**Focus areas**:
- NAS/RRC/VoNR protocol fuzzing using OTA interfaces
- State-machine inconsistency and authentication bypass
- Security analysis of ORAN interfaces (e.g., E2, A1, O1) and components (DU/CU)
- Exploit scenarios involving malformed signaling, rogue reconfiguration, and spec violations

--- -->

### **Security Analysis of Commercial Cellular Devices and Networks**

Modern cellular systems—from legacy 2G networks to today’s 5G Standalone architecture—rely on complex protocol layers such as NAS, RRC, and SIP (VoNR). Although these protocols are standardized, both their design and implementation often contain subtle security flaws.

Our research focuses on identifying vulnerabilities in real-world devices and infrastructure through over-the-air testing, protocol fuzzing, and specification-driven analysis. We analyze how deviations from standards, ambiguous procedures, or under-specified behaviors can lead to security issues. We also study the attack surfaces introduced by open and disaggregated architectures like ORAN.

Our goal is to uncover both implementation-level bugs and standard-level design weaknesses that can impact the confidentiality, integrity, or availability of cellular services.

**Focus areas**:
- NAS/RRC/VoNR protocol fuzzing using OTA interfaces  
- State-machine inconsistency and authentication bypass  
- Exploit scenarios involving malformed signaling, rogue reconfiguration, and spec violations
- Security analysis of ORAN interfaces (e.g., E2, A1, O1) and components (DU/CU)  

<!-- <figure>
  <img src="/assets/img/ue-testing.png" alt="UE testing diagram" style="max-width: 100%;" />
  <figcaption style="text-align: center; font-size: 0.9em; color: gray; margin-top: 0.5em;">
    Security issues arise from both standard and implementation flaws.
  </figcaption>
</figure> -->

<figure style="text-align: center;">
  <img src="/assets/img/ue-testing.png" alt="UE testing diagram"
       style="max-width: 100%; box-shadow: 0 2px 8px rgba(0,0,0,0.1); background-color: white; padding: 4px;" />
  <figcaption style="text-align: center; font-size: 0.9em; color: gray; margin-top: 0.5em;">
    Security issues arise from both standard and implementation flaws.
  </figcaption>
</figure>

---

### **Security in Satellite and Non-Terrestrial Networks (NTN)**

As the 3GPP standard extends cellular connectivity to non-terrestrial networks (NTNs), dedicated satellite systems for 5G-NTN are being actively developed and standardized. Also, low Earth orbit (LEO) satellites—such as commercial communication satellites and CubeSats for IoT backhaul or remote coverage—are being widely deployed, expanding the mobile attack surface beyond terrestrial infrastructure.

We analyze how key 5G NTN procedures, such as access and mobility management, behave under satellite constraints, and how they can be exploited. Our research also investigates practical threats including signal spoofing, unauthorized uplink transmission by rogue terminals, and the risks of over-the-air manipulation in satellite-based networks.

**Focus areas**:
- 5G NTN security testing, evaluation 
- Over-the-air spoofing and unauthorized uplink transmission
- CubeSat and LEO satellite-specific security risks
- Signal manipulation and eavesdropping threats in satellite environments
  

<!-- <figure>
  <img src="/assets/img/satellite-security.png" alt="Satellite security threats diagram" style="max-width: 100%;" />
  <figcaption style="text-align: center; font-size: 0.9em; color: gray; margin-top: 0.5em;">
    Overview of attack surfaces in LEO satellite systems and RF communication links.
  </figcaption>
</figure> -->

<figure style="text-align: center;">
  <img src="/assets/img/satellite-security.png" alt="Satellite security threats diagram"
       style="max-width: 100%; box-shadow: 0 2px 8px rgba(0,0,0,0.1); background-color: white; padding: 4px;" />
  <figcaption style="text-align: center; font-size: 0.9em; color: gray; margin-top: 0.5em;">
    Overview of attack surfaces in LEO satellite systems and RF communication links.
  </figcaption>
</figure>

---

### **Detection and Mitigation of Fake Base Stations and Malicious UEs**

Fake base stations (FBS), often used in IMSI-catching or downgrade attacks, pose a persistent threat to mobile network users. Beyond passive eavesdropping, active rogue nodes and malicious devices can exploit protocol weaknesses to deny service, intercept messages, or inject malicious signaling into the network.

Our work builds detection and defense mechanisms against such rogue entities. We develop methods to monitor abnormal protocol behaviors, detect signaling anomalies, and even trace physical-layer signatures of malicious transmitters. We also explore ways to defeat unauthorized service access attempts.

Field experiments and testbed deployments are an essential part of this work, using SDR platforms and controlled attack emulation in live networks.

**Focus areas**:
- Detection of fake base stations 
- Defense system for fake base station and malicious UEs 
- Behavior analysis of malicious UEs exploiting spec corner cases
- Physical-layer and signaling-layer anomaly detection

<!-- <figure style="text-align: center;">
  <img src="/assets/img/malicious-attackers.png" alt="Cellular attacker types" style="max-width: 80%;" />
  <figcaption style="text-align: center; font-size: 0.9em; color: gray; margin-top: 0.5em;">
    Overview of attacker models targeting cellular networks.
  </figcaption>
</figure> -->

<!-- <figure style="text-align: center;">
  <img src="/assets/img/malicious-attackers.png" alt="Cellular attacker types"
       style="max-width: 80%; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" />
  <figcaption style="text-align: center; font-size: 0.9em; color: gray; margin-top: 0.5em;">
    Overview of attacker models targeting cellular networks.
  </figcaption>
</figure> -->

<figure style="text-align: center;">
  <div style="display: inline-block; box-shadow: 0 2px 8px rgba(0,0,0,0.1); padding: 4px; background-color: white;">
    <img src="/assets/img/malicious-attackers.png" alt="Cellular attacker types"
         style="max-width: 80%;" />
  </div>
  <figcaption style="text-align: center; font-size: 0.9em; color: gray; margin-top: 0.5em;">
    Overview of attacker models targeting cellular networks.
  </figcaption>
</figure>

---

### **Other Research Directions**

In addition to our core research areas, we also explore several emerging and interdisciplinary topics in wireless and systems security. These projects are driven by curiosity, collaboration, and the goal of expanding our understanding of how modern systems behave in adversarial environments.

These include:
- **AI-guided protocol testing and vulnerability discovery** in cellular systems
- **LLM-assisted analysis of cellular standards**, including automated extraction of protocol procedures and test input generation
- **Security analysis of low-power wireless systems**
- **Sensor-based attacks and signal-level interference**
- **Early-stage investigations into physical-layer manipulation, side channels, and wireless privacy threats**


