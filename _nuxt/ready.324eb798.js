import{a8 as o}from"./entry.464a2773.js";const s=globalThis.requestIdleCallback||(e=>{const a=Date.now(),t={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-a))};return setTimeout(()=>{e(t)},1)}),n=globalThis.cancelIdleCallback||(e=>{clearTimeout(e)}),c=e=>{const a=o();a.isHydrating?a.hooks.hookOnce("app:suspense:resolve",()=>{s(e)}):s(e)};export{n as c,c as o,s as r};
