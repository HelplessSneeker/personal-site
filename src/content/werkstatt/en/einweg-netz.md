---
title: A network that only worked one way
summary: After a reboot the private mesh network went deaf in one direction. The error message that would have explained it never appeared.
locale: en
key: einweg-netz
date: 2026-07-23
topic: Networking
---

The machine had rebooted after a system update and came back half missing. Half, because it could reach the other machines on the private mesh network, while none of them could reach it. Outbound connections: fine. Inbound: timeout.

The first instinct is the wrong one. A network that works in one direction looks like a routing problem, so I compared routes, listed interfaces and checked name resolution. Nothing unusual. That costs time, and it costs it precisely because the symptom points at a layer the fault is not on.

The clue was in the interface statistics: transmitted packets climbing, received packets sitting at exactly zero. Not few, not intermittent. Zero. An interface that sends and receives nothing does not have a routing problem, it is not getting its packets handed up to the application. Which made it the firewall, even though the firewall had logged nothing that looked like a drop.

The actual fault was an assumption about ordering. The configuration expected the network service to open its own port, and the new firewall implementation no longer did that. It had worked before because the old implementation was more generous. An update removed the generosity, and what remained was a configuration relying on behaviour that no longer existed.

Two things worth keeping.

First: when a number is exactly zero, that is a statement, not noise. I had the statistics open earlier and skimmed past them, because I was looking for something conspicuous. Zero is conspicuous, but it looks like an empty field.

Second: the fix does not belong where it hurts. I could have opened the port by hand and moved on, and the next reboot would have produced the same evening with more backstory. Instead the port rule now lives in the same module that configures the service, and derives from its setting. Change the port, the rule follows. That is the difference between fixed and covered up.
