import{c as s,j as e,P as a,B as i,w as l}from"./index-BD2lWZ8q.js";const t=[{label:"Alchemix Stats",author:"Barree",url:"https://alchemix-stats.com/",image:"alchemix_stats.png"},{label:"Self-Repaying-ENS",author:"Wary",url:"https://ens.alchemix.fi/",image:"srens.png"}],c=s("/utilities")({component:o});function o(){return e.jsxs(a,{title:"Utilities",description:"A collection of useful tools",iconUri:"./images/icons/utilities_thin.svg",children:[e.jsx("p",{className:"mb-6 text-center text-xs opacity-50",children:"These tools are developed and maintained by our awesome community members."}),e.jsx("div",{className:"flex w-full flex-row flex-wrap gap-4",children:t.map(r=>e.jsxs("div",{className:"w-1/4 rounded border border-grey10inverse bg-grey15inverse dark:border-grey10 dark:bg-grey15",children:[e.jsx("p",{className:"border-b border-grey10inverse px-4 py-2 dark:border-grey10",children:r.label}),e.jsx("div",{className:"h-48 bg-cover bg-center",style:{backgroundImage:`url('../images/screenshots/${r.image}')`}}),e.jsxs("div",{className:"flex flex-row items-center justify-between border-t border-grey10inverse px-4 py-2 dark:border-grey10",children:[e.jsx("div",{className:"flex flex-row space-x-4",children:e.jsx("p",{children:r.author})}),e.jsx(i,{variant:"ghost",className:"h-8 w-full border border-bronze1 text-base lg:w-max",onClick:()=>l(r.url),children:"Open"})]})]},r.label))})]})}export{c as Route};
