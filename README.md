# OpenWebUI Chat Repair Tool & Chat Cleaner

Fix corrupted OpenWebUI chat exports that get stuck on "Loading..." due to detached nodes and broken message chains.

![](./loading.png)

**🔗 [Launch Tool](https://fractuscontext.github.io/openwebui-fix/)**

## The Problem

OpenWebUI chats can become unloadable due to data corruption in the message history structure. The chat opens but shows an infinite loading spinner with no error messages.

**Common causes:**
- `currentId` points to an orphan message disconnected from the main conversation
- Messages with missing `parentId` or `childrenIds` fields
- API errors or third-party tools inserting malformed message nodes

**Related issues:** [#15189](https://github.com/open-webui/open-webui/issues/15189), [#19225](https://github.com/open-webui/open-webui/issues/19225)

## Solution

This tool repairs corrupted exports with two modes:

### 🔧 Repair Mode (Default - Recommended)
- Finds your largest conversation branch
- Updates `currentId` to point to the latest valid message
- Fixes broken parent/child links
- **Keeps all history intact** — nothing deleted

### 🧹 Repair + Prune Mode
- Performs all repair operations above
- Traces active conversation from current message to root
- Deletes all unused branches and orphaned messages
- Results in smaller file with single conversation path

## Usage

1. **Export** your broken chat (three dots → Export Chat → JSON)
2. **Upload** the JSON file to this tool
3. **Choose** mode (leave "Prune Unused Branches" unchecked for safety)
4. **Download** the repaired file
5. **Import** back into OpenWebUI (Settings → Import Chat)
6. **Delete** the old corrupted chat

## Privacy

All processing happens locally in your browser using native JavaScript. No external libraries, no data uploads, and no tracking.

## FAQ

**Q: Will this delete my messages?**  
A: Only if you enable "Prune Unused Branches". The default Repair Mode preserves everything.

**Q: Why does corruption happen?**  
A: Usually from API integration errors, network failures during message generation, or third-party tools modifying chat data.

**Q: Can I undo changes?**  
A: Keep your original export as backup. You can always re-export from OpenWebUI.

**Q: Is there an upstream fix?**
A: See here [here](https://github.com/open-webui/open-webui/issues/19225#issuecomment-3584231544)

**License:** GPL-3.0-or-later / Copyright (C) 2025 @fractuscontext
