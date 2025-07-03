<script setup lang="ts">
import TerminalResponseLine from "~/components/TerminalResponseLine.vue";
import type { Response } from "~/components/terminal-types";

interface Command {
  user: string;
  location: string;
  command: string;
  response: Response[];
}
const logo = `
   /\\ /\\
  ((ovo))
  ():::()
  ██████ ██   ██ ██████  ██ ███████ ███████ ████████     ██    ██ ██    ██
 ██ VVV  ██   ██ ██   ██ ██ ██      ██         ██         ██  ██  ██    ██
 ██      ███████ ██████  ██ █████   ███████    ██          ████   ██    ██
 ██      ██   ██ ██   ██ ██ ██           ██    ██           ██    ██    ██
  ██████ ██   ██ ██   ██ ██ ███████ ███████    ██           ██     ██████

`
const logoText = `
   /\\ /\\
  ((ovo))
  ():::()
 CHRIEST YU
    VVV

`

const defaultUser = 'chriest@website';
const defaultLocation = '~';
function prompt(user: string, location: string): string {
  return `${user}:${location}$ `;
}

const newCommand = ref<string | null>(null);

const headline = [
  { text: 'GitHub', 'link': 'https://github.com/jcppman', external: true },
  ' | ',
  { text: 'Instagram', 'link': 'https://instagram.com/chriest.yu', external: true },
  ' | ',
  { text: 'LinkedIn', 'link': 'https://linkedin.com/in/chriestyu', external: true },
];

const commands = {
  about: {
    user: defaultUser,
    location: defaultLocation,
    command: 'cat about.txt',
    response: [
      ['Seasoned software engineer specialized in building rich, interactive applications.'],
      ['- 10+ years in web development'],
      ['- Music producer, yoga interpreter, photographer, lifelong learner'],
    ],
  }
};

const lines = ref<Command[]>([
  {
    user: defaultUser,
    location: defaultLocation,
    command: 'whoami',
    response: [
      ['Frontend Engineer | Creative Technologist'],
    ]
  },
  {
    user: defaultUser,
    location: defaultLocation,
    command: 'tree',
    response: [
      ['.'],
      ['├── ', { text: 'about.txt', onClick: () => executeCommand(commands.about) }],
      ['├── ', { text: 'resume.pdf', link: '', external: false }],
      ['├── ', { text: 'contact.sh', link: '', external: false }],
      ['└── ', { text: 'portfolio', link: '', external: false }],
      ['    ├── ', { text: 'photography/', link: '', external: false }],
      ['    ├── ', { text: 'code/', link: '', external: false }],
      ['    └── ', { text: 'music/', link: '', external: false }],
    ],
  }
]);

function executeCommand(command: Command) {
  lines.value.push(command)
}

</script>
<template>
  <TerminalWindow title="~/Workspace" class="m-x-auto w-300 max-w-[90vw] max-h-full min-w-[375px]">
    <div class="logo hidden sm:block" v-html="logo"></div>
    <div class="logo sm:hidden" v-html="logoText"></div>
    <TerminalResponseLine :response="headline" class="pb-2" />
    <div v-for="(line, lineIndex) in lines" class="execution py-1" :key="lineIndex">
      <span class="text-prompt">{{ prompt(line.user, line.location) }}</span>
      <span class="text-command"><span>{{ line.command }}</span></span>
      <br />
      <div class="py-2 whitespace-pre-wrap">
        <div v-for="(response, index) in line.response" :key="index" >
          <TerminalResponseLine :response="response" />
        </div>
      </div>
    </div>
    <div class="iteration py-1">
      <span class="text-prompt">
        {{ prompt(defaultUser, defaultLocation) }}
      </span>
    </div>
  </TerminalWindow>
</template>
<style scoped>
.logo {
  white-space: pre;
  color: #b58900;
  line-height: 1.1em;
  font-size: 12px;
}
@keyframes t{
  90%,100% {width:100%}
}

@keyframes blink {
  50% { opacity: 0; }
}

.execution:last-child:after {
  content: "O";
  display: inline-block;
  color: var(--solarized-prompt);
  background-color: var(--solarized-prompt);
  animation: blink 1s step-end infinite;
}

</style>
