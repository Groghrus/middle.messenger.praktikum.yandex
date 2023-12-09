const template = `
      <div class="profile-avatar__img">        
       <img class="avatar" src="{{ src }}"/>
      {{#if exit}}       
        {{{ inputAvatar }}}
      {{/if}}
      </div>
      {{#if exit}}                  
        <div class="text-dark text-16-500">{{ text }}</div>
      {{/if}}
`;
export default template;
