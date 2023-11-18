const template = `
    <div class="{{colorText}} text-16-500">{{modalTitle}}</div>
    {{#if mLink}}
      <div class="text-blue text-12-500 text-uline">Выбрать файл на компьютере</div>
    {{/if}}
    {{#if mFile}}
      <div class="text-grey text-12-500 text-uline">{{titleFile}}</div>
    {{/if}}
    {{{ inputs }}}    
    {{{ button }}}
    {{#if mAlert}}
      <span class="text-red text-12-500">Нужно выбрать файл</span>
    {{/if}}
`;

export default template;
