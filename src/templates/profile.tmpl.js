export default ` 
 <main>
  <div class="container">
    <div class="profile-page">
      <div class="profile-page__back">
        {{>buttonBack }}
      </div>
      <div class="d-flex align-c justify-c">
        <div class="profile-page__fields">
          {{>avatarProfile }}
          <div class="top">
            {{#each fields}}
              {{>textField }}
            {{/each}}
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
        </div>           
      </div>  
    </div>                
  </div>    
</main>  
`
