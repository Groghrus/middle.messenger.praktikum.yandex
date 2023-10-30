export default `
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
`
