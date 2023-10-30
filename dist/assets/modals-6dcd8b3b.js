import{H as t,b as l}from"./button.tmpl-966e81e3.js";/* empty css             */import{i as s}from"./input.tmpl-cd88d3bc.js";const d=`
<main class="layout overlay">
  <div class="container d-flex">
    <div class="modals-wrapp d-flex align-c justify-c direction-col">
    {{#each modals }}
      {{>modal }}   
    {{/each}}         
    </div>
    <div class="modals-wrapp d-flex align-c justify-c direction-col">
    {{#each modalsCRUD }}
      {{>modal }}   
    {{/each}}  
    <div class="d-flex align-c justify-c direction-col">
      {{#each menu }}
        {{>popup }}   
      {{/each}} 
      <a class="temp-link" href="../../index.html">Назад</a>
    </div>     
    </div>    
  </div>
</main>
`,a=`
  <div class="modal">    
    <div class="{{colorText}} text-16-500">{{modalTitle}}</div>
    {{#if mLink}}
      <div class="text-blue text-12-500 text-uline">Выбрать файл на компьютере</div>
    {{/if}}
    {{#if mFile}}
      <div class="text-grey text-12-500 text-uline">{{titleFile}}</div>
    {{/if}}
    {{#if mInput}}
      {{> input }}
    {{/if}}    
    {{>button }}
    {{#if mAlert}}
      <span class="text-red text-12-500">Нужно выбрать файл</span>
    {{/if}}
  </div>
`,o=`
<div class="popup">
  {{#if settings}}
    <div class="settings">
      <div class="item d-flex align-c justify-start">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4 1.5H18C19.3807 1.5 20.5 2.61929 20.5 4V14L14.5194 12.4052C13.5108 12.1362 12.4714 12 11.4275 12H10.5725C9.52864 12 8.48921 12.1362 7.48057 12.4052L1.5 14V4C1.5 2.61929 2.61929 1.5 4 1.5ZM0 4C0 1.79086 1.79086 0 4 0H18C20.2091 0 22 1.79086 22 4V18C22 20.2091 20.2091 22 18 22H4C1.79086 22 0 20.2091 0 18V4ZM8 6C8 7.10457 7.10457 8 6 8C4.89543 8 4 7.10457 4 6C4 4.89543 4.89543 4 6 4C7.10457 4 8 4.89543 8 6Z" fill="#3369F3"/>
        </svg>
        <div class="text-dark text-12-500">Фото или Видео</div>
      </div>
      <div class="item d-flex align-c justify-start">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4 1.5H18C19.3807 1.5 20.5 2.61929 20.5 4V12H16C13.7909 12 12 13.7909 12 16V20.5H4C2.61929 20.5 1.5 19.3807 1.5 18V4C1.5 2.61929 2.61929 1.5 4 1.5ZM12 22H4C1.79086 22 0 20.2091 0 18V4C0 1.79086 1.79086 0 4 0H18C20.2091 0 22 1.79086 22 4V12V18C22 20.2091 20.2091 22 18 22H12Z" fill="#3369F3"/>
        </svg>
        <div class="text-dark text-12-500">Файл</div>
      </div>
      <div class="item d-flex align-c justify-start">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5 11C20.5 16.2467 16.2467 20.5 11 20.5C5.75329 20.5 1.5 16.2467 1.5 11C1.5 5.75329 5.75329 1.5 11 1.5C16.2467 1.5 20.5 5.75329 20.5 11ZM22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11ZM11 14C12.6569 14 14 12.6569 14 11C14 9.34315 12.6569 8 11 8C9.34315 8 8 9.34315 8 11C8 12.6569 9.34315 14 11 14Z" fill="#3369F3"/>
        </svg>
        <div class="text-dark text-12-500">Локация</div>
      </div>
    </div>
  {{/if}}  
 {{#if mediafiles}} 
    <div class="mediafiles">
    <div class="item d-flex align-c justify-start">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11" cy="11" r="10.25" stroke="#3369F3" stroke-width="1.5"/>
          <line x1="10.9999" y1="5.5" x2="10.9999" y2="16.5" stroke="#3369F3" stroke-width="1.5"/>
          <line x1="5.49988" y1="11" x2="16.4999" y2="11" stroke="#3369F3" stroke-width="1.5"/>
        </svg>
        <div class="text-dark text-12-500">Добавить пользователя</div>
      </div>
      <div class="item d-flex align-c justify-start">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11" cy="11" r="10.25" stroke="#3369F3" stroke-width="1.5"/>
          <line x1="7.11077" y1="7.11103" x2="14.8889" y2="14.8892" stroke="#3369F3" stroke-width="1.5"/>
          <line x1="7.11078" y1="14.8891" x2="14.889" y2="7.11093" stroke="#3369F3" stroke-width="1.5"/>
        </svg>
        <div class="text-dark text-12-500">Удалить пользователя</div>
      </div>
    </div>
 {{/if}}   
</div>  
`;t.registerPartial("button",l);t.registerPartial("modal",a);t.registerPartial("input",s);t.registerPartial("popup",o);document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("#modals"),i=[t.compile(d)({text:"Модальные окна",modals:[{modalTitle:"Загрузите файл",colorText:"text-dark",mLink:!0,btnWrap:!0,title:"Поменять",className:"btn btn-second text-white",mAlert:!0},{modalTitle:"Файл загружен",mFile:!0,btnWrap:!0,titleFile:"pic.jpg",title:"Поменять",className:"btn btn-second text-white"},{modalTitle:"Ошибка, попробуйте ещё раз",colorText:"text-red",mLink:!0,btnWrap:!0,title:"Поменять",className:"btn btn-second text-white"}],modalsCRUD:[{modalTitle:"Удалить пользователя",phType:"Логин",colorText:"text-dark",btnWrap:!0,title:"Удалить",className:"btn btn-second text-white",mInput:!0},{modalTitle:"Добавить пользователя",phType:"Логин",colorText:"text-dark",btnWrap:!0,title:"Добавить",className:"btn btn-second text-white",mInput:!0}],menu:[{settings:!0},{mediafiles:!0}]})];e.innerHTML=i});
