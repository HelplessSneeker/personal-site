---
title: Why I run several assistants instead of one good one
summary: An assistant allowed to do everything is either uselessly cautious or uncomfortably bold. Splitting it into roles fixes that, though not for the reason I expected.
locale: en
key: agenten-rollen
date: 2026-08-15
topic: Agents
---

It started with one assistant that was meant to do everything. The problem with that is not technical. It is deciding what it may do without asking.

Draw the line tightly and it asks constantly, and the interruptions cost more attention than the work saved. Draw it loosely and eventually it does something outward-facing you did not want, after which you stop trusting it with the harmless things too. Both states are stable and both are bad. There is no good setting, because the right boundary does not depend on the assistant, it depends on the task.

So: not one boundary, but one per role.

The development assistant may commit and push in my own repositories without asking. The worst case is a commit I revert. The infrastructure assistant may read anything it likes and change nothing without my approval. The finance assistant never asks me for numbers, it fetches them. The letting assistant works draft-only: I hand it input, it hands back text, nothing gets sent. Anything that leaves the house, so email, publishing, client contact, is blocked everywhere, without exception and regardless of role.

The expected benefit was safety. The actual one was different: the split forces me to answer what a role is for before I create it. Two assistants died on exactly that question. One was meant to keep me honest about training and had an empty logbook after two weeks, because data could only arrive if I typed it in. You do that three times and then you stop.

That became the one criterion I check before creating anything: does the data arrive on its own? An assistant waiting for my input is another item on my list. One that helps itself from a repository, a calendar or a bank statement is one item fewer. Collectors die, producers survive.

And every assistant now gets a shutdown criterion at creation time. Not as a gesture, but because otherwise I never admit that an idea did not work.
