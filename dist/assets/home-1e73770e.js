import{H as e,b as i}from"./button.tmpl-966e81e3.js";/* empty css             */import{i as a}from"./input.tmpl-cd88d3bc.js";import{l}from"./link.tmpl-5f57c242.js";const r=`
  <main>
    <div class="container">
      <div class="main">
        <div class="chat">
          <div class="top">
            {{>link }}
            {{>search }}            
          </div>
          <div class="users-list">
            {{#each cards}}
              {{>card }}
            {{/each}}
          </div>
        </div>
        <div class="space">
           <!--<div class="plug">
              <div class="text-14-500 text-grey">{{ plug }}</div>
           </div> -->          
           <div class="dialog">
              {{>dialogHeader }}
              {{>dialog }}
              {{>dialogFooter }}
            </div>
        </div>
      </div>    
  </div>
  </main>
`,d=`
<div class="input-wrapper input-text text-10-400 text-grey">
  <input class="input-msg" placeholder="Сообщение" type="text">  
</div>
`,o=`
<div class="search">
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5924 11.4138C10.1605 12.8457 7.83886 12.8457 6.40694 11.4138C4.97502 9.9819 4.97502 7.6603 6.40694 6.22837C7.83886 4.79645 10.1605 4.79645 11.5924 6.22837C13.0243 7.6603 13.0243 9.9819 11.5924 11.4138ZM12.0328 12.7968C10.0725 14.2962 7.25696 14.1495 5.46413 12.3566C3.51151 10.404 3.51151 7.23819 5.46413 5.28556C7.41675 3.33294 10.5826 3.33294 12.5352 5.28556C14.3279 7.07831 14.4747 9.89373 12.9755 11.8539L16.5423 15.4206L15.5994 16.3635L12.0328 12.7968Z" fill="#999999"/>
  </svg>
  <input placeholder="Поиск"/>
</div>
`,c=`
  <div class="card">
    {{>avatar }}
    <div class="card-user d-flex direction-col justify-sb align-start">
      <div class="text-14-500 text-dark">{{userName}}</div>
      <div class="text-12-500 text-grey">{{userMsg}}</div>
    </div>   
    <div class="d-flex direction-col justify-sb align-c">
      <div class="text-12-500 text-grey">{{lastMsgTime}}</div>
      <div class="msg-icon"><span class="text-12-500 text-white">2</span></div>
    </div>
  </div>
`,n=`
  <div class="dialog-header">
    <div class="dialog-header__info">
      {{>avatar }}
      <div class="text-14-500 text-dark">{{card.userName}}</div>
    </div> 
    <button>
      <svg width="3" height="16" viewBox="0 0 3 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="1.5" cy="2" r="1.5" fill="#1E1E1E"/>
        <circle cx="1.5" cy="8" r="1.5" fill="#1E1E1E"/>
        <circle cx="1.5" cy="14" r="1.5" fill="#1E1E1E"/>
      </svg>
    </button>
  </div>
`,g=`
  <div class="dialog-main">
     <div class="text-grey text-12-500 text-align-c">19 июня</div>
     <div class="dialog-main__messages">
        {{>msgContact }}
        {{>msgContact }}
        {{>msgUser }}
        {{>msgContact }}
        {{>msgUser }}
      </div> 
  </div>
`,v=`
  <div class="dialog-footer">    
    {{>btnStaple }}
    {{>inputMsg }}
    {{>btnSend }}   
  </div>
`,m=`
    <div class="avatar">
      <!-- <img src="" alt="avatar"> -->
      <svg width="34" height="34" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="23.5" cy="23.5" r="23.5" fill="#EFEFEF"/>
      </svg>
    </div>
`,p=`
    <button>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.18662 13.5L14.7628 5.92389L15.7056 6.8667L8.12943 14.4428L7.18662 13.5Z" fill="#999999"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.70067 16.0141L17.2768 8.43793L18.2196 9.38074L10.6435 16.9569L9.70067 16.0141Z" fill="#999999"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0433 21.3567L22.6195 13.7806L23.5623 14.7234L15.9861 22.2995L15.0433 21.3567Z" fill="#999999"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5574 23.8708L25.1335 16.2946L26.0763 17.2374L18.5002 24.8136L17.5574 23.8708Z" fill="#999999"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5574 23.8709C14.9423 26.486 10.7118 26.4954 8.10831 23.8919C5.50482 21.2884 5.51424 17.0579 8.12936 14.4428L7.18655 13.5C4.0484 16.6381 4.0371 21.7148 7.16129 24.839C10.2855 27.9632 15.3621 27.9518 18.5003 24.8137L17.5574 23.8709Z" fill="#999999"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.6195 13.7806L23.5623 14.7234C26.003 12.2826 26.0118 8.3341 23.5819 5.90417C21.152 3.47424 17.2035 3.48303 14.7627 5.92381L15.7055 6.86662C17.6233 4.94887 20.7257 4.94196 22.6349 6.85119C24.5441 8.76042 24.5372 11.8628 22.6195 13.7806Z" fill="#999999"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.70092 16.0144C7.95751 17.7578 7.95123 20.5782 9.68689 22.3138C11.4226 24.0495 14.2429 24.0432 15.9863 22.2998L15.0435 21.357C13.8231 22.5774 11.8489 22.5818 10.6339 21.3668C9.41894 20.1518 9.42334 18.1776 10.6437 16.9572L9.70092 16.0144Z" fill="#999999"/>
      </svg>
    </button> 
`,u=`
    <button>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="14" fill="#3369F3"/>
        <rect x="8" y="13.2" width="11" height="1.6" fill="white"/>
        <path d="M15 9L19 14L15 19" stroke="white" stroke-width="1.6"/>
      </svg>
    </button> 
`,h=`
    <div class="msg-row msg-row__user">
      <div class="message message-user">
        <span class="text-dark text-16-500">{{msgUser.text}}</span> 
        <span class="msg-time text-blue text-8-400">{{msgUser.time}}</span>
      </div>
    </div>  
             
`,x=`
  <div class="msg-row msg-row__contact">
    <div class="message message-contact">
      <span class="text-dark text-16-500">{{ msgContact.text }}</span>
      <span class="msg-time text-grey text-8-400">{{msgContact.time}}</span>
    </div>
  </div> 
`;e.registerPartial("button",i);e.registerPartial("input",a);e.registerPartial("link",l);e.registerPartial("search",o);e.registerPartial("card",c);e.registerPartial("dialogHeader",n);e.registerPartial("dialog",g);e.registerPartial("dialogFooter",v);e.registerPartial("avatar",m);e.registerPartial("btnStaple",p);e.registerPartial("btnSend",u);e.registerPartial("inputMsg",d);e.registerPartial("msgUser",h);e.registerPartial("msgContact",x);document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector("#home"),s=[e.compile(r)({text:"Регистрация",link:{title:"Профиль",href:"../profile/index.html"},cards:[{userName:"User 1",userMsg:"Изображение",lastMsgTime:"10:10"},{userName:"User 2",userMsg:"Сообщение",lastMsgTime:"Чт"}],msgContact:{text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum et non odit perferendis vitae, voluptas.",time:"11:50"},msgUser:{text:"Lorem ipsum dolor sit amet",time:"11:47"},card:{userName:"User 1"},plug:"Выберите чат чтобы отправить сообщение"})];t.innerHTML=s});
