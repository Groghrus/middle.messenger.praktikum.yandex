export default `
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
`

