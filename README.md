# 🚑 OpenWebUI Chat Repair 

**Rescue corrupted chat exports that get stuck on the "Loading..." spinner.**

![](./loading.png)

### 🔗 **[Launch the Repair Tool](https://fractuscontext.github.io/openwebui-chat-repair/)**

---

## 🧐 What is this?

If you use OpenWebUI, you may have encountered a bug where a specific chat refuses to open, displaying an infinite **"Loading..."** animation.

This usually happens because the chat's internal data structure ("tree") has broken links—often due to network interruptions, API errors, or third-party tools. **This tool fixes the JSON structure so you can import your chat history back into OpenWebUI.**

## ✨ Features

### 🛡️ Safe Repair (Default)

* **Fixes the "Loading" Loop:** Reconnects detached messages to the main history.
* **Restores Access:** Updates the file pointers so the chat opens immediately.
* **Non-Destructive:** Keeps your *entire* history, including alternate generation branches.

### 🧹 Deep Clean (Optional)

* **Prune Mode:** If you check "Prune Unused Branches," the tool will remove all alternate timeline branches, keeping only the single active conversation path.
* **Result:** A significantly smaller, cleaner file.

## 🚀 How to Use

1. **Export the broken chat** from OpenWebUI (`...` menu → **Export** → **JSON**).
2. Open the **[Repair Tool](https://fractuscontext.github.io/openwebui-chat-repair/)**.
3. **Drag & Drop** your JSON file into the box.
4. **Download** the repaired file (`_repaired.json`).
5. In OpenWebUI, go to **Settings** → **General** → **Import Chats** and select the fixed file.
6. *Optional:* Once you confirm the fixed chat works, delete the old corrupted version.

## 🔒 Privacy & Security

**Your data never leaves your device.**

* This tool runs entirely in your web browser (Client-Side JavaScript).
* No chat data is uploaded to any server.
* No tracking or analytics are used.

## 🤓 Technical Context

For developers or curious users, this tool resolves `currentId` pointers that reference non-existent nodes and prunes children arrays of invalid IDs.

* **Relevant GitHub Issues:** [#15189](https://github.com/open-webui/open-webui/issues/15189), [#19225](https://github.com/open-webui/open-webui/issues/19225)
* **Upstream Discussion:** [View Comment](https://github.com/open-webui/open-webui/issues/19225#issuecomment-3584231544)

---

**License:** GPL-3.0-or-later

Copyright © 2025-2026 [@fractuscontext](https://github.com/fractuscontext)