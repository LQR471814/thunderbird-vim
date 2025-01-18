# thunderbird-vim

> A vim-like configuration for thunderbird powered by [tbkeys](https://github.com/wshanks/tbkeys).

## install

1. install [tbkeys](https://github.com/wshanks/tbkeys?tab=readme-ov-file#install)
2. go to addons manager > tbkeys > preferences
3. copy [./config.json](https://raw.githubusercontent.com/LQR471814/thunderbird-vim/refs/heads/main/config.json) and paste it inside the "Main Key Bindings" field then hit "Save Settings".

## usage

### messages

- `j`, `k` - go up and down messages.
- `o` - open a message in its own window.
- `/` - open the quick filter menu.
- `shift+/` - open the advanced search window.
- `g g` - go to the first message
- `shift+g` - go the last message

### folders

- `alt+j`, `alt+k` - go up and down folders.
- `alt+d`, `alt+u` - go up and down mailboxes.
- `g i` go to the "inbox" folder.
- `g j` go to the "junk/spam" folder.
- `g d` go to the "drafts" folder.
- `g s` go to the "sent" folder.
- `g t` go to the "trash" folder.
- `g a` go to the "all mail" folder.

### message actions

- `f` - forward a message.
- `r` - reply to a message.
- `shift+r` - reply to all messages selected.
- `shift+j` - mark messages as junk.
- `shift+n` - mark messages as not junk.
- `x` - archive message.
- `shift+x` - delete message.

### other

- `shift+a` - compose a new message.
- `ctrl+l` - fetch new messages.

## limitations

1. currently no keybinds for navigating/modifying the calendar.
2. currently no keybinds for navigating/modifying the tasklist.
3. this is not a vim-like replacement for the composer's text editor! please see [external editor revived](https://github.com/Frederick888/external-editor-revived) for an add-on that does this.

## justification

1. muttator no longer works for non-ancient versions of thunderbird.
2. pure-keyboard navigation makes you much faster at using any application!

