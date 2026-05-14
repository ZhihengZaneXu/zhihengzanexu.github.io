---
layout: post
title: Neovim configuration
date: 2026-05-14
description: a short note on the neovim config I use day-to-day.
tags: neovim tools
categories: notes
giscus_comments: false
related_posts: false
---

## Why I use it

Currently, I mostly use it for LaTeX. The setup compiles on save through [Tectonic](https://tectonic-typesetting.github.io/) and previews in [Zathura](https://pwmt.org/projects/zathura/). [`telescope`](https://github.com/nvim-telescope/telescope.nvim) handles keyword and file search across the project.

I generally output research results into a `numbers.tex` file from Python and `\input{}` it into the paper, so the statistics stay synchronized.

The noise-free configuration helps me focus on my research rather than on the editor.

## Programming language

There are plugins for Python already configured: `pylsp` for LSP, `black` for formatting, `flake8` for linting, and `nvim-dap` with `debugpy` for debugging. `Treesitter` handles syntax highlighting and indentation for Lua, Python, JavaScript, HTML, and CSS out of the box, with auto-install on for anything else.

If you want a language that isn't pre-configured, you can add the LSP server through [`Mason`](https://github.com/williamboman/mason.nvim) (`:Mason`, pick the server, install).

## What it looks like

{% include figure.liquid path="assets/img/blog/neovim.png" class="img-fluid rounded z-depth-1" %}

A few plugins do most of the visual work:

- [`lualine`](https://github.com/nvim-lualine/lualine.nvim) with a custom theme.
- [`noice`](https://github.com/folke/noice.nvim) reroutes the cmdline, messages, and LSP popups into floating windows, so the bottom of the screen stays clean.
- [`barbar`](https://github.com/romgrk/barbar.nvim) for the buffer tabs across the top.


Also few others useful plugins:
- [`gitsigns`](https://github.com/lewis6991/gitsigns.nvim) for inline diff markers and hunk staging
- [`trouble`](https://github.com/folke/trouble.nvim) for a clean diagnostics panel
- [`aerial`](https://github.com/stevearc/aerial.nvim) for a symbol outline on the right
- [`rose-pine`](https://github.com/rose-pine/neovim) (moon variant) for colors

---

Check the [repository](https://github.com/ZhihengZaneXu/nvim-lazy) for the full plugin list, install instructions, and keymap reference.
