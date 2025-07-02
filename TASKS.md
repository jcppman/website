## Core Concept
- Single-page website that looks and feels like a real terminal/command line interface
- Hybrid navigation: users can type commands OR click on suggestions/outputs
- Content is either displayed inline or links externally (Medium for blog, GitHub for code, etc.)
- Built for a seasoned frontend engineer named Chriest Yu

## Visual Style
- Terminal window with classic window chrome (close/minimize/maximize buttons)
- Solarized Dark color scheme: dark blue-green background (#002b36), cyan text (#2aa198) for prompts
- Monospace font (JetBrains Mono or similar)
- Yellow (#b58900) ASCII art of a night owl at the top
- User's name "CHRIEST YU" in ASCII block letters (yellow)

## Interface Elements
- Terminal prompt: `chriest@github:~$` in cyan
- Clickable commands and file names in cyan with hover effects
- Suggestion system: "💡 Try: [ls] [whoami] or type 'help'" with clickable command buttons
- Commands replace content in terminal (not append like real terminal)
- Smooth transitions between different "directories" and content

## Key Commands to Show
- `whoami` → displays bio info
- `ls` → shows clickable directories/files (portfolio/, blog/, contact.txt)
- `cd portfolio` → navigates to portfolio section
- `cat about.md` → displays about content
- `help` → shows available commands

## Responsive Considerations
- Mobile-friendly with larger touch targets
- Virtual keyboard doesn't obscure terminal
- Works well on both desktop and mobile

# TASK: Theme Implementation - Solarized Dark
Build the complete theme system for the terminal interface:

## Solarized theme color palette
SOLARIZED HEX     16/8 TERMCOL  HEX    
--------- ------- ---- -------  -------
base03    #002b36  8/4 brblack  #1c1c1c
base02    #073642  0/4 black    #262626
base01    #586e75 10/7 brgreen  #585858
base00    #657b83 11/7 bryellow #626262
base0     #839496 12/6 brblue   #808080
base1     #93a1a1 14/4 brcyan   #8a8a8a
base2     #eee8d5  7/7 white    #e4e4e4
base3     #fdf6e3 15/7 brwhite  #ffffd7
yellow    #b58900  3/3 yellow   #af8700
orange    #cb4b16  9/3 brred    #d75f00
red       #dc322f  1/1 red      #d70000
magenta   #d33682  5/5 magenta  #af005f
violet    #6c71c4 13/5 brmagenta#5f5faf
blue      #268bd2  4/4 blue     #0087ff
cyan      #2aa198  6/6 cyan     #00afaf
green     #859900  2/2 green    #5f8700

## About solarized

Solarized is a sixteen color palette (eight monotones, eight accent colors) designed for use with terminal and gui applications.

Solarized flips between light and dark modes. In each mode, four monotones form the core values (with an optional fifth for emphasized content).

In the case of a dark background colorscheme, the normal relationship for background and body text is base03:base0 (please note that body text is not base00). Note also that in cases where the background and foreground can be specified as a pair value, text can be highlighted using a combination of base02:base1. The L*a*b lightness difference between base03:base0 and base02:base1 is identical by design, resulting in identical readability against both normal and highlighted backgrounds. An example use case is folded text in Vim which uses base02 for the background and base1 for the foreground.
