---
layout: page
permalink: /privacy-policy/llm-history/
title: Privacy Policy — SPUR Extension
description: Privacy policy for the SPUR research browser extension.
nav: false
toc:
  sidebar: left
---

**Effective date:** 9 September 2026<br>
**Publisher:** SPUR Lab, New Jersey Institute of Technology<br>
**Contact:** [spur@njit.edu](mailto:spur@njit.edu)

---

## What this extension does

The SPUR Extension lets a research participant retrieve their own ChatGPT conversations, read them, and
view them inside a research survey. It runs entirely in the participant's browser.

**We collect nothing.** The extension has no server. Conversations are read from the participant's own
account, held on the participant's own computer, and displayed to the participant. They are never sent
to the research team, to the study's survey server, or to any third party. There is no account to sign
up for, no analytics, and no tracking.

The participant's own device is the only place their conversations exist outside their ChatGPT account,
and they can erase them at any time.

## What the extension accesses

Only from ChatGPT, only while the participant is already signed in, and only their own account:

- Conversation titles, message text, message roles, timestamps, and project/folder names
- The provider's conversation identifiers
- The participant's existing ChatGPT session cookies, used to authenticate these requests, and an
  access token read from ChatGPT's own session endpoint. Both are held in memory for the duration of a
  request and are never written to disk or transmitted anywhere.

The extension does not read browsing history, does not track visited pages, and does not access any
site other than those listed below.

## Where data is stored

All storage is local to the participant's browser profile:

| Location                   | Contents                                                                                                                                                 |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IndexedDB (`SPURDatabase`) | The retrieved conversations, their messages, and any generated summaries                                                                                 |
| `chrome.storage.local`     | Fetch checkpoints (which contain conversation content while a collection is in progress), survey slot assignments, collection settings, rate-limit flags |
| `chrome.storage.session`   | The selected provider and tab, cleared when the browser closes                                                                                           |

Nothing is stored outside the participant's own machine.

## What is transmitted, and to whom

**To ChatGPT.** Requests go only to `chatgpt.com`, to read the participant's own conversations using
their own session. This is the only origin the extension sends requests to.

**To the research survey — nothing.** The extension displays conversations inside the survey page by
writing them into the page in the participant's browser. That rendering is local. Conversation content
is written only into question types that contain no input field, so it is not part of what the survey
submits. The survey server receives the participant's own answers and never receives conversation
content.

**To the research team — nothing.** The extension collects no data on our behalf. There is no
first-party endpoint anywhere in the code, no analytics, no telemetry, and no crash reporting. We do not
know who installs the extension, whether it was used, or what it read.

**To the participant's own disk.** The participant may download their collected conversations as a JSON
file. This is user-initiated and the file is saved locally.

## Processing

Summaries and topic classification, where used, run through Chrome's built-in on-device language model.
No conversation text is sent to any AI API for processing.

## Deleting a conversation from a provider account

The extension can delete a conversation from the participant's actual ChatGPT account, at the
participant's request, by calling ChatGPT's own interface. **This is permanent and cannot be undone by
the extension or by the research team.**

## Retention and removal

Collected data remains in the participant's browser until they remove it. They may:

- Use **Clear Data** in the extension to erase all stored conversations, messages, and summaries
- Uninstall the extension, which removes its stored data with it

Because the research team never receives this data, we hold nothing for a participant to request
access to, correction of, or deletion of. Control rests entirely with the participant, on their own
device.

## What we do not do

- We do not sell or transfer data to third parties
- We do not use data for advertising, profiling, or creditworthiness or lending purposes
- We do not use data for any purpose unrelated to the research study described to participants
- We do not collect personally identifying information through the extension
- We do not receive any data from the extension at all, identifying or otherwise

## Study context

Participants recruited through a research panel complete a survey hosted by NJIT. That survey collects
the participant's responses and their panel identifier for compensation purposes. The extension does
not receive, store, or transmit any such identifier, and the survey does not receive conversation
content. Survey participation is governed by the study's consent form and its IRB approval, which are
provided to participants separately.

## Changes

Material changes to this policy will be published at this address with a revised effective date.

## Contact

Questions about this policy or the extension: **spur@njit.edu**
