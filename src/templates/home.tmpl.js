export default `
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
`
