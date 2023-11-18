const template = `
  <div class="container d-flex">
    <div class="modals-wrapp d-flex align-c justify-c direction-col">    
      {{{ modals }}}         
    </div>
    <div class="modals-wrapp d-flex align-c justify-c direction-col">
    {{{ modalsCRUD }}}
    <div class="d-flex align-c justify-c direction-col">      
        {{{ popup }}}     
    </div>     
    </div>    
  </div>
`

export default template
