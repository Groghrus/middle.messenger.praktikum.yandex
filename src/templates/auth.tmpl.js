export default `
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
`
