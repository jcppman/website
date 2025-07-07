<script setup lang="ts">
import TerminalResponseLine from "~/components/TerminalResponseLine.vue";
import TerminalCommandExecution from "~/components/TerminalCommandExecution.vue";
import type { Response, Link } from "~/components/terminal-types";

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

interface TreeNode {
  name: string;
  link?: Link;
  children?: TreeNode[];
}

function generateTreeResponse(nodes: TreeNode[], depth = 0): Response[] {
  const responses: Response[] = depth === 0 ? [
    ['.'],
  ] : [];

  nodes.forEach((node, index) => {
    const isLast = index === nodes.length - 1;
    const prefix = '    '.repeat(depth);
    const branch = isLast ? '└── ' : '├── ';

    if (node.link) {
      responses.push([prefix + branch, node.link]);
    } else {
      responses.push([prefix + branch + node.name]);
    }

    if (node.children) {
      responses.push(...generateTreeResponse(node.children, depth + 1));
    }
  });

  return responses;
}

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
      ['- Music producer, photographer, lifelong learner'],
      ['I am open for new opportunities and collaborations, feel free to reach out!'],
    ],
  }
};

const treeStructure: TreeNode[] = [
  {
    name: 'about.txt',
    link: { text: 'about.txt', onClick: () => executeCommand(commands.about) }
  },
  {
    name: 'resume.pdf',
    link: { text: 'resume.pdf', link: '/YUNJUIYU_Chriest.pdf', external: true }
  },
  {
    name: 'contact.sh',
    link: { text: 'contact.sh', to: '/contact' }
  },
  {
    name: 'portfolio/',
    children: [
      {
        name: 'music',
        link: { text: 'music/', to: '/portfolio/music' }
      },
      {
        name: 'videography',
        link: { text: 'videography/', to: '/portfolio/videography' }
      },
      {
        name: '[WIP]photography',
      },
      {
        name: '[WIP]coding',
      }
    ]
  }
];

const lines = ref<Command[]>([
  {
    user: defaultUser,
    location: defaultLocation,
    command: 'whoami',
    response: [
      ['Frontend Engineer | Creative Technologist | Music Producer'],
      ['@chriest.yu'],
    ]
  },
  commands.about,
  {
    user: defaultUser,
    location: defaultLocation,
    command: 'tree',
    response: generateTreeResponse(treeStructure),
  }
]);

const containerRef = ref<HTMLElement>();
const lastTerminalRef = ref();

function executeCommand(command: Command) {
  lines.value.push(command)
  nextTick(() => {
    scrollToBottom()
  })
}

function scrollToBottom() {
  if (lastTerminalRef.value) {
    lastTerminalRef.value.scrollIntoView();
  }
}
const newLine: Command = {
  user: defaultUser,
    location: defaultLocation,
  command: '',
  response: []
};

</script>
<template>
  <div ref="containerRef" class="overflow-y-auto">
    <div>
      <div class="logo hidden sm:block" v-html="logo"></div>
      <div class="logo sm:hidden" v-html="logoText"></div>
      <TerminalResponseLine :response="headline" class="pb-2" />
      <TerminalCommandExecution v-for="(line, lineIndex) in lines" :key="lineIndex" :line="line" />
      <TerminalCommandExecution ref="lastTerminalRef" :line="newLine" />
    </div>
  </div>
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

</style>
