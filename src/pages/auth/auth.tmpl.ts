const template = `
<div class="d-flex direction-col align-c">
  <div class="form-title text-20-500 text-dark">
    {{ text }}
  </div>
  {{{ inputs }}}
</div>
<div class="form-wrapper-bottom d-flex direction-col align-c">  
  {{{ buttons }}}
</div>
{{{ modalsBtn }}}
`;

export default template;
