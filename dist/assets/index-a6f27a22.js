import{H as t,b as a}from"./button.tmpl-966e81e3.js";/* empty css             */import{i as s}from"./input.tmpl-cd88d3bc.js";import{l as n}from"./link.tmpl-5f57c242.js";const l=`
<main class="layout direction-col">
  <div class="form container">
    <div class="form-wrapper d-flex direction-col align-c justify-sb">        
        <div class="d-flex direction-col align-c">
          <div class="form-title text-20-500 text-dark">
            {{ text }}
          </div>
          {{#each inputs}}
            {{> input }}
          {{/each}}                
        </div>
        <div class="form-wrapper-bottom d-flex direction-col align-c">
          {{#each buttons }}
            {{>button }}
          {{/each}}          
        </div>
    </div>    
  </div>
  <div class="form container d-flex justify-sb align-c">
    <a class="temp-link" href="../views/404.html">404</a>
    <a class="temp-link" href="../views/modals/index.html">Модальные окна</a>
    <a class="temp-link" href="../views/500.html">500</a>    
  </div>
</main>
`;t.registerPartial("button",a);t.registerPartial("input",s);t.registerPartial("link",n);document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("#app"),i=[t.compile(l)({text:"Вход",buttons:[{aWrap:!0,title:"Авторизоваться",className:"btn btn-second text-white",src:"../views/home/index.html"},{aWrap:!0,title:"Нет аккаунта?",className:"btn btn-common text-blue",src:"../views/signin/index.html"}],inputs:[{phType:"Логин"},{phType:"Пароль"}]})];e.innerHTML=i});
