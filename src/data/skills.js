import {
  Code, Terminal, Globe, Shield, Wrench
} from 'lucide-react'

export const skillCategories = [
  {
    title: 'Programming & Scripting',
    icon: Code,
    items: [
      { name: 'Python', level: 'hands-on' },
      { name: 'C++', level: 'familiar' },
    ],
  },
  {
    title: 'Operating Systems',
    icon: Terminal,
    items: [
      { name: 'Linux / Ubuntu', level: 'hands-on' },
      { name: 'Windows', level: 'hands-on' },
    ],
  },
  {
    title: 'Networking & Security',
    icon: Globe,
    items: [
      { name: 'TCP/IP', level: 'hands-on' },
      { name: 'VLANs', level: 'hands-on' },
      { name: 'Routing & Switching', level: 'hands-on' },
      { name: 'Network Security', level: 'hands-on' },
      { name: 'DNS', level: 'hands-on' },
      { name: 'HTTP', level: 'hands-on' },
      { name: 'ARP', level: 'familiar' },
      { name: 'Network Traffic Analysis', level: 'hands-on' },
    ],
  },
  {
    title: 'SOC / Blue Team',
    icon: Shield,
    items: [
      { name: 'SIEM', level: 'hands-on' },
      { name: 'Log Analysis', level: 'hands-on' },
      { name: 'Security Alert Triage', level: 'hands-on' },
      { name: 'Incident Investigation', level: 'hands-on' },
      { name: 'Threat Detection', level: 'hands-on' },
      { name: 'Basic Threat Hunting', level: 'familiar' },
      { name: 'Security Monitoring', level: 'hands-on' },
      { name: 'Windows Event Logs', level: 'hands-on' },
      { name: 'Sysmon', level: 'hands-on' },
      { name: 'IOC Analysis', level: 'hands-on' },
      { name: 'Incident Reporting', level: 'hands-on' },
    ],
  },
  {
    title: 'Security Tools',
    icon: Wrench,
    items: [
      { name: 'Splunk', level: 'hands-on' },
      { name: 'Wazuh', level: 'hands-on' },
      { name: 'Wireshark', level: 'hands-on' },
      { name: 'Zeek', level: 'hands-on' },
      { name: 'Brim', level: 'familiar' },
      { name: 'Nmap', level: 'hands-on' },
      { name: 'Burp Suite', level: 'familiar' },
      { name: 'Hashcat', level: 'familiar' },
      { name: 'Scapy', level: 'familiar' },
    ],
  },
]

export const platforms = [
  {
    name: 'TryHackMe',
    type: 'Hands-on Training Platform',
    note: '[profile link / paths completed]',
    url: '#',
  },
  {
    name: 'PortSwigger Web Security Academy',
    type: 'Hands-on Training Platform',
    note: '[labs completed]',
    url: '#',
  },
  {
    name: 'CyberTalents',
    type: 'Competitions & Challenges',
    note: '[challenges / competitions]',
    url: '#',
  },
]
