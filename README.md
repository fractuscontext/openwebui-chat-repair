# Open WebUI Chat Fix (and Cleaner)

Rescue chats from the infinite loading spinner issue.

![OpenWebUI Loading Spinner Issue](./assets/loading.png)

**🔗 [Launch Tool](https://fractuscontext.github.io/open-webui-chat-fix/)**

---

If you have one of these while loading a chat:

1. An infinite loading spinner
2. A hard-crash redirect back to the home page

This tool fixes these problems.

See [Issue #15189](https://github.com/open-webui/open-webui/issues/15189) or [#19225](https://github.com/open-webui/open-webui/issues/19225) for more info.

## How to Use

1. In OpenWebUI, open the broken chat → `...` menu → **Export** → **JSON**.
2. Drop the file into the [**repair tool**](https://fractuscontext.github.io/open-webui-chat-fix/).
3. Download the fixed JSON.
4. In OpenWebUI, go to **Settings** → **General** → **Import Chats** → select the fixed file.
5. Confirm it loads successfully, then delete the broken original.

## Other Features

- **Fixes the infinite loading spinner ONLY** MODE: Fixes broken pointers and missing nodes. Keeps your entire chat history including everything.

- **Optional: Deep Clean Mode:** Did you retry the AI response wayyyyy too many times? This mode fixes the chat *and* permanently prunes all unused alternate branches, making the file significantly smaller and faster to load.

## Dev Notes

- Built with pure vanilla JS. No NPM, no frameworks, no tracking APIs. It executes entirely in your browser, meaning your chat logs (aka your roleplay chats) never leave your machine.

- **Test it yourself:** Import [`tests/bad-test-1.json`](./tests/bad-test-1.json) into OpenWebUI to watch it crash. Run it through the tool, re-import the clean file, and watch it open perfectly.
