const template = `
  <div class="d-flex align-c justify-c h100">    
    <div class="modal">
        {{{closeBtn}}}
        <div class="{{colorText}} text-16-500">{{modalTitle}}</div>
        {{#if mLink}}
<!--          <div class="text-blue text-12-500 text-uline">Выбрать файл на компьютере</div>-->
        {{/if}}
        {{#if mFile}}
          <div class="text-grey text-12-500 text-uline">{{titleFile}}</div>
        {{/if}}
        {{{ inputs }}}    
        {{{ button }}}
        {{#if mAlert}}
          <span class="text-red text-12-500">Нужно выбрать файл</span>
        {{/if}}
    </div>
  </div>
`;

export default template;
