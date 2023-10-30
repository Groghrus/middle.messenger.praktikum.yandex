import{H as t,b as s}from"./button.tmpl-966e81e3.js";/* empty css             */import{i}from"./input.tmpl-cd88d3bc.js";import{l as n}from"./link.tmpl-5f57c242.js";const l=`
  <main class="layout">
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
</main>
`;t.registerPartial("button",s);t.registerPartial("input",i);t.registerPartial("link",n);document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("#signin"),a=[t.compile(l)({text:"Регистрация",buttons:[{aWrap:!0,title:"Зарегистрироваться",className:"btn btn-second text-white",src:"./index.html"},{aWrap:!0,title:"Войти",className:"btn btn-common text-blue",src:"../home/index.html"}],inputs:[{phType:"Почта",className:""},{phType:"Логин",className:""},{phType:"Имя",className:""},{phType:"Фамилия",className:""},{phType:"Телефон",className:""},{phType:"Пароль",className:""},{phType:"Пароль (ещё раз)",className:""}]})];e.innerHTML=a});
