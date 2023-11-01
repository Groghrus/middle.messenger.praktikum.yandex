export default ` 
 <main>
  <div class="container">
    <div class="profile-page">
      <div class="profile-page__back">
        {{>buttonBack }}
      </div>
      <div class="d-flex align-c justify-c">
        <form class="profile-page__fields">
          {{>avatarProfile }}
          <div class="top">
            {{#if editInputs}}
              {{#each fields}}                
                {{> inputPf }}
              {{/each}}
            {{/if}}
            {{#if textFields}}
              {{#each fields}}
                {{>textField }}                
              {{/each}}
            {{/if}}
          </div>
          <div class="bottom">
             {{#each links}}
               {{>linkProfile }}
             {{/each}}
             {{#if save}}
              <div class="d-flex align-c justify-c">{{>button }}</div>
             {{/if}}
             {{#if exit}}
              {{>buttonExit }}
             {{/if}}
          </div>            
        </form>           
      </div>  
    </div>                
  </div>    
</main>  
`
